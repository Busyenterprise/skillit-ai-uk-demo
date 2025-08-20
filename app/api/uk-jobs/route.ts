import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const location = searchParams.get("location")
  const industry = searchParams.get("industry")
  const salaryMin = searchParams.get("salaryMin")
  const salaryMax = searchParams.get("salaryMax")
  const remoteType = searchParams.get("remoteType")
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "20")

  try {
    const where: any = {
      status: "active",
    }

    if (location && location !== "all") {
      where.location = {
        contains: location,
        mode: "insensitive",
      }
    }

    if (industry && industry !== "all") {
      where.employer = {
        industry: {
          contains: industry,
          mode: "insensitive",
        },
      }
    }

    if (salaryMin) {
      where.salaryMin = {
        gte: Number.parseInt(salaryMin),
      }
    }

    if (salaryMax) {
      where.salaryMax = {
        lte: Number.parseInt(salaryMax),
      }
    }

    if (remoteType && remoteType !== "all") {
      where.remoteType = remoteType
    }

    const [jobs, total] = await Promise.all([
      prisma.jobPosting.findMany({
        where,
        include: {
          employer: {
            select: {
              companyName: true,
              industry: true,
              location: true,
            },
          },
          skillRequirements: {
            include: {
              skill: {
                select: {
                  name: true,
                  category: true,
                },
              },
            },
          },
          _count: {
            select: {
              applications: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.jobPosting.count({ where }),
    ])

    return NextResponse.json({
      jobs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching UK jobs:", error)
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["title", "description", "requirements", "employerId"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Create job posting
    const job = await prisma.jobPosting.create({
      data: {
        ...body,
        status: "active",
      },
      include: {
        employer: {
          select: {
            companyName: true,
            industry: true,
          },
        },
      },
    })

    return NextResponse.json(job, { status: 201 })
  } catch (error) {
    console.error("Error creating job posting:", error)
    return NextResponse.json({ error: "Failed to create job posting" }, { status: 500 })
  }
}
