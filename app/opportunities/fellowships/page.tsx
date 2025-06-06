import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Users, ExternalLink, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FellowshipsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fellowship Opportunities</h1>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Discover prestigious fellowship programs that offer professional development, research opportunities, and
            leadership training.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/opportunities">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                All Opportunities
              </Button>
            </Link>
            <Link href="/opportunities/post">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">Post a Fellowship</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input placeholder="Search fellowships..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Fellowship Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="research">Research</SelectItem>
                  <SelectItem value="leadership">Leadership</SelectItem>
                  <SelectItem value="community">Community Development</SelectItem>
                  <SelectItem value="policy">Policy</SelectItem>
                  <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nepal">Nepal</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="multiple">Multiple Locations</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Featured Fellowships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeaturedFellowshipCard
                title="Global Leadership Fellowship"
                organization="International Development Institute"
                location="Multiple Locations"
                duration="1 Year"
                stipend="$25,000"
                deadline="June 30, 2025"
                link="/opportunities/fellowships/global-leadership"
              />
              <FeaturedFellowshipCard
                title="Climate Action Fellowship"
                organization="Environmental Research Foundation"
                location="Kathmandu, Nepal with Field Work"
                duration="18 Months"
                stipend="$20,000"
                deadline="July 15, 2025"
                link="/opportunities/fellowships/climate-action"
              />
              <FeaturedFellowshipCard
                title="Social Entrepreneurship Fellowship"
                organization="Innovation Hub"
                location="Remote with Quarterly Meetups"
                duration="1 Year"
                stipend="$18,000"
                deadline="August 5, 2025"
                link="/opportunities/fellowships/social-entrepreneurship"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#121d3e] mb-6">All Fellowship Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Research Fellowship",
                  organization: "Science Foundation",
                  location: "Kathmandu, Nepal",
                  duration: "2 Years",
                  deadline: "May 25, 2025",
                  link: "/opportunities/fellowships/research-fellowship",
                },
                {
                  title: "Community Development Fellowship",
                  organization: "Social Impact Organization",
                  location: "Rural Nepal",
                  duration: "1 Year",
                  deadline: "July 10, 2025",
                  link: "/opportunities/fellowships/community-development",
                },
                {
                  title: "Policy Research Fellowship",
                  organization: "Public Policy Institute",
                  location: "Kathmandu, Nepal",
                  duration: "9 Months",
                  deadline: "June 15, 2025",
                  link: "/opportunities/fellowships/policy-research",
                },
                {
                  title: "Youth Leadership Fellowship",
                  organization: "Youth Empowerment Network",
                  location: "Multiple Cities in Nepal",
                  duration: "6 Months",
                  deadline: "May 30, 2025",
                  link: "/opportunities/fellowships/youth-leadership",
                },
                {
                  title: "Digital Innovation Fellowship",
                  organization: "Tech for Good",
                  location: "Remote",
                  duration: "1 Year",
                  deadline: "July 25, 2025",
                  link: "/opportunities/fellowships/digital-innovation",
                },
                {
                  title: "Education Reform Fellowship",
                  organization: "Education Alliance",
                  location: "Kathmandu with Travel",
                  duration: "1 Year",
                  deadline: "August 10, 2025",
                  link: "/opportunities/fellowships/education-reform",
                },
                {
                  title: "Healthcare Innovation Fellowship",
                  organization: "Health Research Institute",
                  location: "Kathmandu, Nepal",
                  duration: "1 Year",
                  deadline: "June 20, 2025",
                  link: "/opportunities/fellowships/healthcare-innovation",
                },
                {
                  title: "Arts & Culture Fellowship",
                  organization: "Cultural Heritage Foundation",
                  location: "Various Locations in Nepal",
                  duration: "8 Months",
                  deadline: "July 5, 2025",
                  link: "/opportunities/fellowships/arts-culture",
                },
                {
                  title: "Journalism Fellowship",
                  organization: "Media Development Network",
                  location: "Kathmandu with Field Work",
                  duration: "1 Year",
                  deadline: "June 10, 2025",
                  link: "/opportunities/fellowships/journalism",
                },
              ].map((fellowship, index) => (
                <FellowshipCard
                  key={index}
                  title={fellowship.title}
                  organization={fellowship.organization}
                  location={fellowship.location}
                  duration={fellowship.duration}
                  deadline={fellowship.deadline}
                  link={fellowship.link}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" className="px-6">
              Load More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Why Apply for Fellowships?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Fellowships offer unique opportunities for professional growth, networking, and making a meaningful
              impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Professional Development</h3>
                <p className="text-gray-600">
                  Gain specialized skills and knowledge through structured programs and mentorship.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Financial Support</h3>
                <p className="text-gray-600">
                  Receive stipends, grants, or living allowances to focus on your work without financial stress.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Network</h3>
                <p className="text-gray-600">
                  Connect with like-minded professionals and build relationships that last beyond the fellowship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#121d3e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Apply for a Fellowship?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Browse our current opportunities or sign up for alerts when new fellowships matching your interests become
            available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[#121d3e] hover:bg-gray-100">Browse All Fellowships</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Get Email Alerts
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function FellowshipCard({
  title,
  organization,
  location,
  duration,
  deadline,
  link,
}: {
  title: string
  organization: string
  location: string
  duration: string
  deadline: string
  link: string
}) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-gray-500" />
            <span>Duration: {duration}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Deadline: {deadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function FeaturedFellowshipCard({
  title,
  organization,
  location,
  duration,
  stipend,
  deadline,
  link,
}: {
  title: string
  organization: string
  location: string
  duration: string
  stipend: string
  deadline: string
  link: string
}) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 relative overflow-hidden border-2 border-[#0e9aa7]">
      <div className="absolute top-0 right-0">
        <Badge className="bg-[#0e9aa7] text-white m-2">Featured</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{organization}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3 text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-gray-500" />
            <span>Duration: {duration}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 text-gray-500"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span>Stipend: {stipend}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Deadline: {deadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">
            Apply Now <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
