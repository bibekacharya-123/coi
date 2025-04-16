import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"

export default function NewsSection() {
  const newsItems = [
    {
      title: "Upcoming Workshop: Career Development in Tech",
      date: "April 15, 2025",
      excerpt: "Join us for an interactive workshop focused on career growth in the technology sector.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/events/career-workshop",
    },
    {
      title: "New Partnership Announcement",
      date: "March 28, 2025",
      excerpt: "We're excited to announce our new partnership with a leading multinational corporation.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/news/partnership-announcement",
    },
    {
      title: "Success Story: From Intern to CEO",
      date: "March 10, 2025",
      excerpt: "Read the inspiring journey of one of our program participants who rose to the top of their field.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/success-stories/intern-to-ceo",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e]">Latest News & Events</h2>
          <Link href="/news" className="text-[#0e9aa7] font-medium hover:underline flex items-center">
            View All
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="h-48 relative">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar size={14} className="mr-2" />
                  {item.date}
                </div>
                <h3 className="font-bold text-lg text-[#121d3e] line-clamp-2">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 line-clamp-3">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link href={item.link} className="text-[#0e9aa7] font-medium hover:underline">
                  Read More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
