import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, ArrowRight, Building } from "lucide-react"

export default function CollaborativeEventsPage() {
  const featuredEvents = [
    {
      id: 1,
      title: "Youth Leadership Summit 2025",
      date: "June 15-17, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Kathmandu, Nepal",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A three-day summit bringing together young leaders from across Nepal to discuss pressing issues and develop leadership skills.",
      partners: ["Nepal Youth Foundation", "Global Leadership Institute", "Ministry of Youth"],
      category: "Conference",
    },
    {
      id: 2,
      title: "Tech for Good Hackathon",
      date: "July 10-12, 2025",
      time: "48-hour event",
      location: "Pokhara, Nepal",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A hackathon challenging participants to develop technological solutions for social and environmental challenges.",
      partners: ["Tech Nepal", "Innovation Hub", "Social Impact Network"],
      category: "Hackathon",
    },
    {
      id: 3,
      title: "Career Fair 2025",
      date: "May 10, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Kathmandu, Nepal",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A collaborative event connecting job seekers with potential employers and providing career development resources.",
      partners: ["Nepal Chamber of Commerce", "Employment Council", "Major Employers"],
      category: "Fair",
    },
  ]

  const upcomingEvents = [
    {
      id: 4,
      title: "Entrepreneurship Conference",
      date: "August 5-6, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Kathmandu, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      partners: ["Startup Nepal", "Business Incubator", "Chamber of Commerce"],
      category: "Conference",
    },
    {
      id: 5,
      title: "Environmental Sustainability Workshop",
      date: "September 15, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Pokhara, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      partners: ["Green Nepal", "Environmental Protection Agency", "Sustainable Development Network"],
      category: "Workshop",
    },
    {
      id: 6,
      title: "Digital Marketing Bootcamp",
      date: "October 10-12, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Chitwan, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      partners: ["Digital Marketing Association", "Tech Hub", "Business School"],
      category: "Bootcamp",
    },
  ]

  const pastEvents = [
    {
      id: 7,
      title: "Women in Leadership Forum",
      date: "March 8, 2025",
      location: "Kathmandu, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      partners: ["Women's Empowerment Network", "Leadership Institute", "UN Women"],
      category: "Forum",
    },
    {
      id: 8,
      title: "Rural Development Symposium",
      date: "February 20-21, 2025",
      location: "Nepalgunj, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      partners: ["Rural Development Foundation", "Agricultural Association", "Community Development Network"],
      category: "Symposium",
    },
    {
      id: 9,
      title: "Youth Innovation Challenge",
      date: "January 15-17, 2025",
      location: "Biratnagar, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      partners: ["Innovation Hub", "Youth Council", "Tech Startups"],
      category: "Challenge",
    },
  ]

  const eventCategories = [
    "All",
    "Conference",
    "Hackathon",
    "Fair",
    "Workshop",
    "Bootcamp",
    "Forum",
    "Symposium",
    "Challenge",
  ]

  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Collaborative Events</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Discover events organized in collaboration with our partners to create greater impact and reach.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8 text-center">Featured Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="h-48 relative">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <div className="absolute top-2 right-2 bg-[#0e9aa7] text-white px-3 py-1 rounded-full text-xs">
                    {event.category}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {event.date}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {event.location}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock size={14} className="mr-1" />
                    {event.time}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-700">In collaboration with: </span>
                    <span className="text-gray-600">{event.partners.join(", ")}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/events-projects/collaborative-events/${event.id}`} className="w-full">
                    <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Learn More</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="grid grid-flow-col auto-cols-max gap-2">
                {eventCategories.map((category) => (
                  <TabsTrigger key={category} value={category.toLowerCase()}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#121d3e] mb-6">Upcoming Events</h3>
                  <div className="space-y-6">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="w-1/3 relative">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-4">
                          <div className="text-xs text-white bg-[#0e9aa7] inline-block px-2 py-1 rounded-full mb-2">
                            {event.category}
                          </div>
                          <h4 className="font-bold text-lg mb-1">{event.title}</h4>
                          <div className="text-gray-500 text-sm flex items-center mb-1">
                            <Calendar size={14} className="mr-1" />
                            {event.date}
                          </div>
                          <div className="text-gray-500 text-sm flex items-center mb-1">
                            <Clock size={14} className="mr-1" />
                            {event.time}
                          </div>
                          <div className="text-gray-500 text-sm flex items-center mb-2">
                            <MapPin size={14} className="mr-1" />
                            {event.location}
                          </div>
                          <div className="text-sm mb-2">
                            <span className="font-medium text-gray-700">Partners: </span>
                            <span className="text-gray-600">{event.partners.join(", ")}</span>
                          </div>
                          <Link
                            href={`/events-projects/collaborative-events/${event.id}`}
                            className="text-[#0e9aa7] font-medium hover:underline flex items-center"
                          >
                            View Details
                            <ArrowRight size={14} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#121d3e] mb-6">Past Events</h3>
                  <div className="space-y-6">
                    {pastEvents.map((event) => (
                      <div key={event.id} className="flex bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="w-1/3 relative">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-4">
                          <div className="text-xs text-white bg-[#0e9aa7] inline-block px-2 py-1 rounded-full mb-2">
                            {event.category}
                          </div>
                          <h4 className="font-bold text-lg mb-1">{event.title}</h4>
                          <div className="text-gray-500 text-sm flex items-center mb-1">
                            <Calendar size={14} className="mr-1" />
                            {event.date}
                          </div>
                          <div className="text-gray-500 text-sm flex items-center mb-2">
                            <MapPin size={14} className="mr-1" />
                            {event.location}
                          </div>
                          <div className="text-sm mb-2">
                            <span className="font-medium text-gray-700">Partners: </span>
                            <span className="text-gray-600">{event.partners.join(", ")}</span>
                          </div>
                          <Link
                            href={`/events-projects/collaborative-events/${event.id}`}
                            className="text-[#0e9aa7] font-medium hover:underline flex items-center"
                          >
                            View Details
                            <ArrowRight size={14} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {eventCategories.slice(1).map((category) => (
              <TabsContent key={category} value={category.toLowerCase()}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...featuredEvents, ...upcomingEvents, ...pastEvents]
                    .filter((event) => event.category === category)
                    .map((event) => (
                      <Card key={event.id} className="overflow-hidden">
                        <div className="h-48 relative">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-500 text-sm flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {event.date}
                            </span>
                            <span className="text-gray-500 text-sm flex items-center">
                              <MapPin size={14} className="mr-1" />
                              {event.location}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <CardDescription>
                            {event.description || "A collaborative event with our partners"}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          {event.time && (
                            <div className="flex items-center text-sm text-gray-500 mb-4">
                              <Clock size={14} className="mr-1" />
                              {event.time}
                            </div>
                          )}
                          <div className="text-sm">
                            <span className="font-medium text-gray-700">In collaboration with: </span>
                            <span className="text-gray-600">{event.partners.join(", ")}</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Link href={`/events-projects/collaborative-events/${event.id}`} className="w-full">
                            <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Learn More</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Our Collaborative Approach</h2>
              <p className="text-gray-700 mb-4">
                At Creating Opportunities International, we believe in the power of collaboration. By working together
                with like-minded organizations, we can create greater impact and reach more individuals with our events
                and initiatives.
              </p>
              <p className="text-gray-700 mb-4">
                Our collaborative events bring together diverse perspectives, resources, and expertise to address
                complex challenges and create innovative solutions. We partner with a wide range of organizations,
                including:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Building className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">
                    <span className="font-bold">Non-profit Organizations</span> - Working together to create social
                    impact
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">
                    <span className="font-bold">Educational Institutions</span> - Collaborating on knowledge sharing and
                    skill development
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">
                    <span className="font-bold">Government Agencies</span> - Partnering on policy and public service
                    initiatives
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">
                    <span className="font-bold">Businesses</span> - Engaging with the private sector for sustainable
                    development
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">
                    <span className="font-bold">Community Groups</span> - Working with local communities for grassroots
                    impact
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Collaborative Events"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#121d3e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Interested in collaborating?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            We're always looking for partners to collaborate on impactful events and initiatives. If you're interested
            in partnering with us, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-involved/become-partner">
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
                BECOME A PARTNER
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#121d3e] px-8 py-6 rounded font-bold text-lg"
              >
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
