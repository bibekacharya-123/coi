import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

export default function EventsProjectsPage() {
  const featuredEvents = [
    {
      id: 1,
      title: "Youth Leadership Summit 2025",
      date: "June 15-17, 2025",
      location: "Kathmandu, Nepal",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A three-day summit bringing together young leaders from across Nepal to discuss pressing issues and develop leadership skills.",
      category: "Collaborative Event",
    },
    {
      id: 2,
      title: "Digital Skills Workshop Series",
      date: "Monthly, Starting May 2025",
      location: "Various Locations",
      image: "/placeholder.svg?height=300&width=400",
      description: "A series of workshops focused on developing essential digital skills for the modern workplace.",
      category: "Our Initiative",
    },
    {
      id: 3,
      title: "Community Development Project",
      date: "Ongoing",
      location: "Rural Nepal",
      image: "/placeholder.svg?height=300&width=400",
      description: "A long-term project aimed at developing infrastructure and opportunities in rural communities.",
      category: "Our Project",
    },
  ]

  const upcomingEvents = [
    {
      id: 4,
      title: "Entrepreneurship Bootcamp",
      date: "April 25-27, 2025",
      location: "Pokhara, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      category: "Our Initiative",
    },
    {
      id: 5,
      title: "Career Fair 2025",
      date: "May 10, 2025",
      location: "Kathmandu, Nepal",
      image: "/placeholder.svg?height=200&width=300",
      category: "Collaborative Event",
    },
    {
      id: 6,
      title: "Tech Innovation Challenge",
      date: "May 20-22, 2025",
      location: "Online",
      image: "/placeholder.svg?height=200&width=300",
      category: "Our Project",
    },
  ]

  const ongoingProjects = [
    {
      id: 7,
      title: "Youth Empowerment Program",
      duration: "2023-2025",
      location: "Nationwide",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "A comprehensive program designed to empower youth through education, skill development, and mentorship.",
      category: "Our Project",
    },
    {
      id: 8,
      title: "Digital Literacy Initiative",
      duration: "2024-2026",
      location: "Various Locations",
      image: "/placeholder.svg?height=200&width=300",
      description: "An initiative to improve digital literacy among underserved communities.",
      category: "Our Initiative",
    },
    {
      id: 9,
      title: "Community Health Project",
      duration: "2024-2025",
      location: "Rural Nepal",
      image: "/placeholder.svg?height=200&width=300",
      description: "A collaborative project focused on improving health outcomes in rural communities.",
      category: "Collaborative Event",
    },
  ]

  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Projects</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Discover our upcoming events, ongoing projects, and collaborative initiatives aimed at creating
            opportunities and driving positive change.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8 text-center">Featured Events & Projects</h2>

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
                <CardFooter>
                  <Link
                    href={`/events-projects/${event.category.toLowerCase().replace(/\s+/g, "-")}/${event.id}`}
                    className="w-full"
                  >
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
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
                <TabsTrigger value="collaborative">Collaborative</TabsTrigger>
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
                          <div className="text-gray-500 text-sm flex items-center mb-2">
                            <MapPin size={14} className="mr-1" />
                            {event.location}
                          </div>
                          <Link
                            href={`/events-projects/${event.category.toLowerCase().replace(/\s+/g, "-")}/${event.id}`}
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
                  <h3 className="text-2xl font-bold text-[#121d3e] mb-6">Ongoing Projects</h3>
                  <div className="space-y-6">
                    {ongoingProjects.map((project) => (
                      <div key={project.id} className="flex bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="w-1/3 relative">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-4">
                          <div className="text-xs text-white bg-[#0e9aa7] inline-block px-2 py-1 rounded-full mb-2">
                            {project.category}
                          </div>
                          <h4 className="font-bold text-lg mb-1">{project.title}</h4>
                          <div className="text-gray-500 text-sm flex items-center mb-1">
                            <Clock size={14} className="mr-1" />
                            {project.duration}
                          </div>
                          <div className="text-gray-500 text-sm flex items-center mb-2">
                            <MapPin size={14} className="mr-1" />
                            {project.location}
                          </div>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{project.description}</p>
                          <Link
                            href={`/events-projects/${project.category.toLowerCase().replace(/\s+/g, "-")}/${project.id}`}
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

            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...featuredEvents, ...upcomingEvents, ...ongoingProjects]
                  .filter((item) => item.category === "Our Project")
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="h-48 relative">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription>
                          {item.description || "A project by Creating Opportunities International"}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link
                          href={`/events-projects/${item.category.toLowerCase().replace(/\s+/g, "-")}/${item.id}`}
                          className="w-full"
                        >
                          <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Learn More</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="initiatives">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...featuredEvents, ...upcomingEvents, ...ongoingProjects]
                  .filter((item) => item.category === "Our Initiative")
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="h-48 relative">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription>
                          {item.description || "An initiative by Creating Opportunities International"}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link
                          href={`/events-projects/${item.category.toLowerCase().replace(/\s+/g, "-")}/${item.id}`}
                          className="w-full"
                        >
                          <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Learn More</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="collaborative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...featuredEvents, ...upcomingEvents, ...ongoingProjects]
                  .filter((item) => item.category === "Collaborative Event")
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="h-48 relative">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription>
                          {item.description || "A collaborative event with our partners"}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link
                          href={`/events-projects/${item.category.toLowerCase().replace(/\s+/g, "-")}/${item.id}`}
                          className="w-full"
                        >
                          <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Learn More</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/events-projects/our-projects">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-[#0e9aa7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#0e9aa7]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#121d3e] mb-2">Our Projects</h3>
                <p className="text-gray-600">
                  Long-term initiatives designed to create sustainable impact in communities.
                </p>
              </div>
            </Link>

            <Link href="/events-projects/our-initiatives">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-[#0e9aa7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#0e9aa7]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#121d3e] mb-2">Our Initiatives</h3>
                <p className="text-gray-600">
                  Programs and activities initiated by Creating Opportunities International.
                </p>
              </div>
            </Link>

            <Link href="/events-projects/collaborative-events">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-[#0e9aa7]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#0e9aa7]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#121d3e] mb-2">Collaborative Events</h3>
                <p className="text-gray-600">
                  Events organized in partnership with other organizations and institutions.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#121d3e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Want to collaborate?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            We're always looking for partners to collaborate on impactful projects and events.
          </p>
          <Link href="/contact">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
              GET IN TOUCH
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
