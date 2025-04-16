import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="max-w-3xl mx-auto text-lg">Discover how we can help you achieve your goals.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">What We Offer</h2>
              <p className="text-gray-700 mb-4">
                At Creating Opportunities International, we provide a comprehensive range of services designed to help
                individuals and organizations reach their full potential.
              </p>
              <p className="text-gray-700">
                Our team of experienced professionals is dedicated to delivering high-quality solutions tailored to your
                specific needs and goals.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Services"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mb-4">
                    <service.icon size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#0e9aa7] mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={service.link} className="w-full">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#121d3e] mb-12">How We Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Ready to get started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us today to discuss how our services can help you achieve your goals.
          </p>
          <Link href="/contact">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
              CONTACT US
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

// Mock data for services
const services = [
  {
    title: "Career Development",
    description: "Comprehensive career guidance and support",
    icon: ({ size }: { size: number }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    features: [
      "Career counseling and guidance",
      "Resume and CV development",
      "Interview preparation",
      "Job search strategies",
      "Professional development planning",
    ],
    link: "/services/career-development",
  },
  {
    title: "Skills Training",
    description: "Enhance your skills with our specialized training programs",
    icon: ({ size }: { size: number }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    features: [
      "Technical skills development",
      "Soft skills enhancement",
      "Leadership training",
      "Communication workshops",
      "Customized training programs",
    ],
    link: "/services/skills-training",
  },
  {
    title: "Consulting Services",
    description: "Expert advice and solutions for your organization",
    icon: ({ size }: { size: number }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    ),
    features: [
      "Organizational development",
      "Strategic planning",
      "Process improvement",
      "Change management",
      "Performance optimization",
    ],
    link: "/services/consulting",
  },
]

// Mock data for steps
const steps = [
  {
    title: "Consultation",
    description: "We begin with a thorough consultation to understand your specific needs and goals.",
  },
  {
    title: "Planning",
    description: "Our team develops a customized plan tailored to your requirements.",
  },
  {
    title: "Implementation",
    description: "We execute the plan with precision and attention to detail.",
  },
  {
    title: "Evaluation",
    description: "We continuously monitor progress and make adjustments as needed to ensure success.",
  },
]
