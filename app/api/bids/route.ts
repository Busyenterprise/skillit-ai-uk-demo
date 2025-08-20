import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { auctionId, bidderId, amount, message } = body

    // Validate auction is active
    const auction = await prisma.auction.findUnique({
      where: { id: auctionId },
      include: {
        bids: {
          orderBy: { amount: "desc" },
          take: 1,
        },
      },
    })

    if (!auction) {
      return NextResponse.json({ error: "Auction not found" }, { status: 404 })
    }

    if (auction.status !== "active") {
      return NextResponse.json({ error: "Auction is not active" }, { status: 400 })
    }

    if (new Date() > auction.endTime) {
      return NextResponse.json({ error: "Auction has ended" }, { status: 400 })
    }

    // Check if bid amount is valid
    const currentHighBid = auction.bids[0]?.amount || auction.minimumBid || 0
    if (amount <= currentHighBid) {
      return NextResponse.json({ error: "Bid must be higher than current highest bid" }, { status: 400 })
    }

    // Create bid and update auction
    const [bid] = await prisma.$transaction([
      prisma.bid.create({
        data: {
          auctionId,
          bidderId,
          amount,
          message,
          isWinning: true,
        },
      }),
      // Mark previous winning bids as not winning
      prisma.bid.updateMany({
        where: {
          auctionId,
          isWinning: true,
          id: { not: undefined },
        },
        data: {
          isWinning: false,
        },
      }),
      // Update auction stats
      prisma.auction.update({
        where: { id: auctionId },
        data: {
          currentHighBid: amount,
          totalBids: {
            increment: 1,
          },
        },
      }),
    ])

    return NextResponse.json(bid, { status: 201 })
  } catch (error) {
    console.error("Error placing bid:", error)
    return NextResponse.json({ error: "Failed to place bid" }, { status: 500 })
  }
}
