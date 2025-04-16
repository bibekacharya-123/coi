import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Briefcase, GraduationCap, Users } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "Career Development",
      description: "Comprehensive career guidance and support for professionals at all levels.",
      icon: Briefcase,
      link: "/services/career-development",
    },
    {
      title: "Skills Training",
      description: "Enhance your skills with our specialized training programs and workshops.",
      icon: GraduationCap,
      link: "/services/skills-training",
    },
    {
      title: "Networking Events",
      description: "Connect with industry leaders and like-minded professionals.",
      icon: Users,
      link: "/services/networking",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of services designed to help you achieve your professional goals and aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-[#0e9aa7]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-[#0e9aa7]" size={24} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={service.link} className="group inline-flex items-center text-[#0e9aa7] font-medium">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
