import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesShowcaseSection() {
  const services = [
    {
      title: "Youth Empowerment",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s4ufLVD6pqXecdXWhWip0bBnjHwtnx.png",
      description:
        "Our services include education and skill development, entrepreneurship and employment support, leadership trainings, and youth-professional mentoring.",
      link: "/services/youth-empowerment",
    },
    {
      title: "Community Development",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s4ufLVD6pqXecdXWhWip0bBnjHwtnx.png",
      description:
        "Our services include volunteer opportunities, hackathons for local solutions, grants for community startups, and youth leaders network.",
      link: "/services/community-development",
    },
    {
      title: "Global Impact",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s4ufLVD6pqXecdXWhWip0bBnjHwtnx.png",
      description:
        "Our services include global youth forum conferences, fully funded exchanges, workshops on global collaboration, and monthly youth trends reports.",
      link: "/services/global-impact",
    },
    {
      title: "Network Building",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s4ufLVD6pqXecdXWhWip0bBnjHwtnx.png",
      description:
        "Our services include mentoring nights, online networking platform, site visits with professionals, and sponsor conference attendance.",
      link: "/services/network-building",
    },
    {
      title: "Entrepreneurial Mindset",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s4ufLVD6pqXecdXWhWip0bBnjHwtnx.png",
      description:
        "Our services include design thinking workshops, business plan programs, expert mentorship, and accelerators.",
      link: "/services/entrepreneurial-mindset",
    },
    {
      title: "Aspirational Youth",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s4ufLVD6pqXecdXWhWip0bBnjHwtnx.png",
      description:
        "Our services include career discovery programs, scholarships for opportunities, leadership coaching, and inspiring stories.",
      link: "/services/aspirational-youth",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Our Services</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We offer a comprehensive range of services designed to empower individuals and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-[#0e9aa7] rounded-t-lg p-1">
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </div>
              <div className="bg-[#0e9aa7] text-white p-4 text-center">
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              <div className="bg-white p-6 shadow-md flex-grow">
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link href={service.link}>
                  <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Learn More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
