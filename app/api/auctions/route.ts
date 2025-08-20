import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status") || "active"
  const type = searchParams.get("type")

  try {
    const where: any = { status }
    if (type) where.type = type

    const auctions = await prisma.auction.findMany({
      where,
      include: {
        job: {
          include: {
            employer: {
              select: {
                companyName: true,
              },
            },
          },
        },
        bids: {
          orderBy: {
            amount: "desc",
          },
          take: 1,
        },
        _count: {
          select: {
            bids: true,
          },
        },
      },
      orderBy: {
        endTime: "asc",
      },
    })

    return NextResponse.json(auctions)
  } catch (error) {
    console.error("Error fetching auctions:", error)
    return NextResponse.json({ error: "Failed to fetch auctions" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const auction = await prisma.auction.create({
      data: body,
      include: {
        job: {
          include: {
            employer: {
              select: {
                companyName: true,
              },
            },
          },
        },
      },
    })

    return NextResponse.json(auction, { status: 201 })
  } catch (error) {
    console.error("Error creating auction:", error)
    return NextResponse.json({ error: "Failed to create auction" }, { status: 500 })
  }
}
