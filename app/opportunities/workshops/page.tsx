import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Clock, ExternalLink, Search, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function WorkshopsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Workshops & Training</h1>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Enhance your skills and knowledge through hands-on workshops and specialized training programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/opportunities">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                All Opportunities
              </Button>
            </Link>
            <Link href="/opportunities/post">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">
                Post a Workshop
              </Button>
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
                <Input placeholder="Search workshops..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="leadership">Leadership</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in-person">In-Person</SelectItem>
                  <SelectItem value="virtual">Virtual</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Featured Workshops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeaturedWorkshopCard
                title="Digital Marketing Masterclass"
                organization="Marketing Academy"
                location="Kathmandu, Nepal"
                duration="2 Days"
                date="June 15-16, 2025"
                deadline="May 20, 2025"
                link="/opportunities/workshops/digital-marketing"
              />
              <FeaturedWorkshopCard
                title="Leadership Development Workshop"
                organization="Professional Growth Institute"
                location="Virtual"
                duration="3 Days"
                date="July 5-7, 2025"
                deadline="June 10, 2025"
                link="/opportunities/workshops/leadership-development"
              />
              <FeaturedWorkshopCard
                title="Web Development Bootcamp"
                organization="Tech Training Center"
                location="Pokhara, Nepal"
                duration="5 Days"
                date="August 1-5, 2025"
                deadline="July 5, 2025"
                link="/opportunities/workshops/web-development"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#121d3e] mb-6">Upcoming Workshops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Data Analysis with Python",
                  organization: "Tech Institute",
                  location: "Virtual",
                  duration: "4 Days",
                  date: "June 20-23, 2025",
                  deadline: "May 25, 2025",
                  link: "/opportunities/workshops/data-analysis",
                },
                {
                  title: "Public Speaking Workshop",
                  organization: "Communication Skills Center",
                  location: "Kathmandu, Nepal",
                  duration: "1 Day",
                  date: "June 5, 2025",
                  deadline: "May 15, 2025",
                  link: "/opportunities/workshops/public-speaking",
                },
                {
                  title: "UX/UI Design Fundamentals",
                  organization: "Design Academy",
                  location: "Hybrid",
                  duration: "3 Days",
                  date: "July 10-12, 2025",
                  deadline: "June 15, 2025",
                  link: "/opportunities/workshops/ux-ui-design",
                },
                {
                  title: "Financial Planning Workshop",
                  organization: "Finance Institute",
                  location: "Kathmandu, Nepal",
                  duration: "2 Days",
                  date: "June 25-26, 2025",
                  deadline: "May 30, 2025",
                  link: "/opportunities/workshops/financial-planning",
                },
                {
                  title: "Content Creation Masterclass",
                  organization: "Media Academy",
                  location: "Virtual",
                  duration: "2 Days",
                  date: "July 15-16, 2025",
                  deadline: "June 20, 2025",
                  link: "/opportunities/workshops/content-creation",
                },
                {
                  title: "Project Management Workshop",
                  organization: "Management Institute",
                  location: "Kathmandu, Nepal",
                  duration: "3 Days",
                  date: "August 10-12, 2025",
                  deadline: "July 15, 2025",
                  link: "/opportunities/workshops/project-management",
                },
                {
                  title: "Mobile App Development Workshop",
                  organization: "Tech Training Center",
                  location: "Virtual",
                  duration: "5 Days",
                  date: "July 20-24, 2025",
                  deadline: "June 25, 2025",
                  link: "/opportunities/workshops/mobile-app-development",
                },
                {
                  title: "Social Media Strategy Workshop",
                  organization: "Digital Marketing Institute",
                  location: "Kathmandu, Nepal",
                  duration: "1 Day",
                  date: "June 18, 2025",
                  deadline: "May 20, 2025",
                  link: "/opportunities/workshops/social-media-strategy",
                },
                {
                  title: "Entrepreneurship Bootcamp",
                  organization: "Startup Hub",
                  location: "Kathmandu, Nepal",
                  duration: "5 Days",
                  date: "August 15-19, 2025",
                  deadline: "July 20, 2025",
                  link: "/opportunities/workshops/entrepreneurship-bootcamp",
                },
              ].map((workshop, index) => (
                <WorkshopCard
                  key={index}
                  title={workshop.title}
                  organization={workshop.organization}
                  location={workshop.location}
                  duration={workshop.duration}
                  date={workshop.date}
                  deadline={workshop.deadline}
                  link={workshop.link}
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
            <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Benefits of Our Workshops</h2>
            <p className="text-lg text-gray-600 mb-12">
              Our workshops are designed to provide practical skills and knowledge that you can apply immediately.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hands-on Learning</h3>
                <p className="text-gray-600">
                  Practical exercises and real-world applications to reinforce concepts and skills.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
                <p className="text-gray-600">
                  Learn from industry professionals with extensive experience and knowledge in their fields.
                </p>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Certification</h3>
                <p className="text-gray-600">
                  Receive certificates of completion to enhance your resume and professional credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#121d3e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Want to Host a Workshop?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            If you're an expert in your field and would like to share your knowledge, we can help you organize and promote your workshop.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[#121d3e] hover:bg-gray-100">
              Become a Trainer
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

interface WorkshopCardProps {
  title: string;
  organization: string;
  location: string;
  duration: string;
  date: string;
  deadline: string;
  link: string;
}

function WorkshopCard({
  title,
  organization,
  location,
  duration,
  date,
  deadline,
  link,
}: WorkshopCardProps) {
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
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>Duration: {duration}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Date: {date}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
              <path d="M10 2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" />
              <path d="M4 18v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
              <path d="M14 18v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2" />
              <path d="M10 2H4a2 2 0 0 0-2 2v2" />
            </svg>
            <span>Registration Deadline: {deadline}</span>
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

interface FeaturedWorkshopCardProps {
  title: string;
  organization: string;
  location: string;
  duration: string;
  date: string;
  deadline: string;
  link: string;
}

function FeaturedWorkshopCard({
  title,
  organization,
  location,
  duration,
  date,
  deadline,
  link,
}: FeaturedWorkshopCardProps) {
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
            <Clock className="h-4 w-4 mr-2 text-gray-500" />
            <span>Duration: {duration}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-2 text-gray-500" />
            <span>Date: {date}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
              <path d="M10 2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" />
              <path d="M4 18v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
              <path d="M14 18v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2" />
              <path d="M10 2H4a2 2 0 0 0-2 2v2" />
            </svg>
            <span>Registration Deadline: {deadline}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">
            Register Now <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
