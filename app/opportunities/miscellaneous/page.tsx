import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Clock, ExternalLink, Search, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MiscellaneousPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Other Opportunities</h1>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Discover unique opportunities that don't fit into traditional categories but offer valuable experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/opportunities">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                All Opportunities
              </Button>
            </Link>
            <Link href="/opportunities/post">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">Post an Opportunity</Button>
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
                <Input placeholder="Search opportunities..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="volunteer">Volunteer</SelectItem>
                  <SelectItem value="exchange">Exchange Programs</SelectItem>
                  <SelectItem value="mentorship">Mentorship</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
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
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Featured Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeaturedMiscOpportunityCard
                title="Community Volunteer Program"
                organization="Social Impact NGO"
                location="Multiple Locations in Nepal"
                type="Volunteer"
                duration="3-6 Months"
                deadline="June 15, 2025"
                link="/opportunities/miscellaneous/community-volunteer"
              />
              <FeaturedMiscOpportunityCard
                title="Cultural Exchange Program"
                organization="International Exchange Network"
                location="Japan"
                type="Exchange"
                duration="1 Year"
                deadline="July 30, 2025"
                link="/opportunities/miscellaneous/cultural-exchange"
              />
              <FeaturedMiscOpportunityCard
                title="Mentorship Program for Young Entrepreneurs"
                organization="Business Incubator"
                location="Virtual"
                type="Mentorship"
                duration="6 Months"
                deadline="May 25, 2025"
                link="/opportunities/miscellaneous/entrepreneur-mentorship"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#121d3e] mb-6">All Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Environmental Conservation Volunteer",
                  organization: "Green Earth Initiative",
                  location: "Chitwan, Nepal",
                  type: "Volunteer",
                  deadline: "June 10, 2025",
                  link: "/opportunities/miscellaneous/environmental-conservation",
                },
                {
                  title: "Youth Leadership Program",
                  organization: "Youth Development Center",
                  location: "Kathmandu, Nepal",
                  type: "Training Program",
                  deadline: "July 5, 2025",
                  link: "/opportunities/miscellaneous/youth-leadership",
                },
                {
                  title: "Research Assistant Opportunity",
                  organization: "Social Research Institute",
                  location: "Remote",
                  type: "Research",
                  deadline: "May 30, 2025",
                  link: "/opportunities/miscellaneous/research-assistant",
                },
                {
                  title: "Study Tour to Singapore",
                  organization: "Educational Tours",
                  location: "Singapore",
                  type: "Educational Tour",
                  deadline: "August 15, 2025",
                  link: "/opportunities/miscellaneous/singapore-tour",
                },
                {
                  title: "Peer Counseling Program",
                  organization: "Mental Health Initiative",
                  location: "Multiple Locations",
                  type: "Volunteer",
                  deadline: "June 20, 2025",
                  link: "/opportunities/miscellaneous/peer-counseling",
                },
                {
                  title: "Tech Mentorship Program",
                  organization: "Tech Community",
                  location: "Virtual",
                  type: "Mentorship",
                  deadline: "July 10, 2025",
                  link: "/opportunities/miscellaneous/tech-mentorship",
                },
                {
                  title: "Rural Teaching Volunteer",
                  organization: "Education for All",
                  location: "Rural Nepal",
                  type: "Volunteer",
                  deadline: "June 25, 2025",
                  link: "/opportunities/miscellaneous/rural-teaching",
                },
                {
                  title: "Language Exchange Program",
                  organization: "Cultural Exchange Network",
                  location: "Online",
                  type: "Exchange",
                  deadline: "Ongoing",
                  link: "/opportunities/miscellaneous/language-exchange",
                },
                {
                  title: "Healthcare Outreach Volunteer",
                  organization: "Health Initiative",
                  location: "Various Districts in Nepal",
                  type: "Volunteer",
                  deadline: "July 15, 2025",
                  link: "/opportunities/miscellaneous/healthcare-outreach",
                },
              ].map((opportunity, index) => (
                <MiscOpportunityCard
                  key={index}
                  title={opportunity.title}
                  organization={opportunity.organization}
                  location={opportunity.location}
                  type={opportunity.type}
                  deadline={opportunity.deadline}
                  link={opportunity.link}
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
            <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Why Explore These Opportunities?</h2>
            <p className="text-lg text-gray-600 mb-12">
              These unique opportunities can provide valuable experiences and skills that traditional paths might not
              offer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Personal Growth</h3>
                <p className="text-gray-600">
                  Step outside your comfort zone and develop new perspectives and life skills.
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
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cultural Exchange</h3>
                <p className="text-gray-600">
                  Interact with people from different backgrounds and broaden your cultural understanding.
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
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                    <line x1="16" y1="8" x2="2" y2="22" />
                    <line x1="17.5" y1="15" x2="9" y2="15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Make an Impact</h3>
                <p className="text-gray-600">
                  Contribute to meaningful causes and create positive change in communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#121d3e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Have a Unique Opportunity to Share?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            If you have an opportunity that doesn't fit traditional categories, we'd love to help you share it with our
            community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[#121d3e] hover:bg-gray-100">Post Your Opportunity</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function MiscOpportunityCard({
  title,
  organization,
  location,
  type,
  deadline,
  link,
}: {
  title: string
  organization: string
  location: string
  type: string
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
            <Sparkles className="h-4 w-4 mr-2 text-gray-500" />
            <span>Type: {type}</span>
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

function FeaturedMiscOpportunityCard({
  title,
  organization,
  location,
  type,
  duration,
  deadline,
  link,
}: {
  title: string
  organization: string
  location: string
  type: string
  duration: string
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
            <Sparkles className="h-4 w-4 mr-2 text-gray-500" />
            <span>Type: {type}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
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
          <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">
            Apply Now <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
