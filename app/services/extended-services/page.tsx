import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExtendedServicesPage() {
  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Extended Services</h1>
          <p className="max-w-3xl mx-auto text-lg">Specialized solutions to meet your unique needs and challenges.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Beyond Our Core Offerings</h2>
              <p className="text-gray-700 mb-4">
                At Creating Opportunities International, we understand that every individual and organization has unique
                needs. Our extended services go beyond our standard offerings to provide specialized solutions tailored
                to your specific challenges and goals.
              </p>
              <p className="text-gray-700">
                Whether you need customized training programs, specialized consulting, or comprehensive project
                management, our team of experts is ready to help you achieve success.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Extended Services"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <Tabs defaultValue="corporate" className="w-full mb-16">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="corporate">Corporate Solutions</TabsTrigger>
              <TabsTrigger value="individual">Individual Development</TabsTrigger>
              <TabsTrigger value="community">Community Programs</TabsTrigger>
            </TabsList>
            <TabsContent value="corporate" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {corporateServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="individual" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {individualServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="community" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {communityServices.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center text-[#121d3e] mb-8">Our Service Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
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

          <div className="bg-[#121d3e] text-white p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
                <p className="mb-6">
                  Our team of experts can develop a tailored solution to address your specific challenges and goals.
                  Contact us today to discuss your needs.
                </p>
                <Link href="/contact">
                  <Button className="bg-white text-[#121d3e] hover:bg-gray-100">Request a Consultation</Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {customSolutionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-200">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#121d3e] mb-12">Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.client}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{story.client}</h3>
                    <p className="text-sm text-gray-600">{story.service}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{story.testimonial}</p>
                <div className="flex items-center text-[#0e9aa7]">
                  <span className="text-sm font-medium">Read full case study</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Ready to get started?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us today to discuss how our extended services can help you achieve your goals.
          </p>
          <Link href="/contact">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
              REQUEST A CONSULTATION
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ service }: { service: any }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mb-4">
          <service.icon className="h-6 w-6" />
        </div>
        <CardTitle>{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {service.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <svg className="h-5 w-5 text-[#0e9aa7] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  )
}

// Mock data for corporate services
const corporateServices = [
  {
    title: "Executive Coaching",
    description: "Personalized coaching for leadership development",
    icon: ({ className }: { className: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    features: [
      "One-on-one coaching sessions",
      "Leadership skills assessment",
      "Personalized development plan",
      "Regular progress reviews",
      "360-degree feedback",
    ],
    link: "/services/extended-services/executive-coaching",
  },
  {
    title: "Organizational Development",
    description: "Strategic solutions for organizational growth",
    icon: ({ className }: { className: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    features: [
      "Organizational assessment",
      "Culture transformation",
      "Change management",
      "Team building",
      "Process improvement",
    ],
    link: "/services/extended-services/organizational-development",
  },
  {
    title: "Custom Training Programs",
    description: "Tailored training solutions for your team",
    icon: ({ className }: { className: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    features: [
      "Needs assessment",
      "Customized curriculum",
      "Interactive workshops",
      "Skill-building exercises",
      "Progress tracking",
    ],
    link: "/services/extended-services/custom-training",
  },
]

// Mock data for individual services
const individualServices = [
  {
    title: "Career Transition",
    description: "Support for navigating career changes",
    icon: ({ className }: { className: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    features: [
      "Career assessment",
      "Skills gap analysis",
      "Transition planning",
      "Job search strategy",
      "Interview preparation",
    ],
    link: "/services/extended-services/career-transition",
  },
  {
    title: "Personal Branding",
    description: "Develop your professional identity",
    icon: ({ className }: { className: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
    features: [
      "Personal brand assessment",
      "Online presence optimization",
      "Resume and LinkedIn profile",
      "Networking strategy",
      "Communication coaching",
    ],
    link: "/services/extended-services/personal-branding",
  },
  {
    title: "Specialized Mentoring",
    description: "One-on-one guidance from industry experts",
    icon: ({ className }: { className: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
    features: [
      "Industry-specific mentoring",
      "Goal setting and planning",
      "Regular mentoring sessions",
      "Skill development",
      "Career advancement strategy",
    ],
    link: "/services/extended-services/specialized-mentoring",
  },
]

// Mock data for community services
const communityServices = [
  {
    title: "Community Workshops",
    description: "Educational programs for community development",
    icon: ({ className }: { className: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    features: [
      "Skill-building workshops",
      "Community needs assessment",
      "Interactive learning",
      "Resource provision",
      "Follow-up support",
    ],
    link: "/services/extended-services/community-workshops",
  },
  {
    title: "Youth Development",
    description: "Programs designed for young people",
    icon: ({ className }: { className: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
        />
      </svg>
    ),
    features: [
      "Leadership development",
      "Career exploration",
      "Mentoring programs",
      "Life skills training",
      "Educational support",
    ],
    link: "/services/extended-services/youth-development",
  },
  {
    title: "Nonprofit Consulting",
    description: "Strategic support for nonprofit organizations",
    icon: ({ className }: { className: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    features: [
      "Strategic planning",
      "Fundraising strategy",
      "Board development",
      "Program evaluation",
      "Capacity building",
    ],
    link: "/services/extended-services/nonprofit-consulting",
  },
]

// Mock data for process steps
const processSteps = [
  {
    title: "Consultation",
    description: "We begin with a thorough consultation to understand your specific needs and goals.",
  },
  {
    title: "Assessment",
    description: "Our team conducts a comprehensive assessment to identify key areas for improvement.",
  },
  {
    title: "Custom Solution",
    description: "We develop a tailored solution designed to address your unique challenges.",
  },
  {
    title: "Implementation",
    description: "Our experts work with you to implement the solution with precision and care.",
  },
]

// Mock data for custom solution features
const customSolutionFeatures = [
  {
    title: "Tailored Approach",
    description: "Solutions designed specifically for your unique needs",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
        />
      </svg>
    ),
  },
  {
    title: "Expert Team",
    description: "Access to specialists with deep industry knowledge",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Flexible Solutions",
    description: "Adaptable approaches that evolve with your needs",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Measurable Results",
    description: "Clear metrics to track progress and success",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
]

// Mock data for success stories
const successStories = [
  {
    client: "Global Tech Solutions",
    service: "Executive Coaching",
    image: "/placeholder.svg?height=60&width=60",
    testimonial:
      "The executive coaching program transformed our leadership team. We've seen improved communication, better decision-making, and stronger team cohesion.",
  },
  {
    client: "Community Youth Center",
    service: "Youth Development",
    image: "/placeholder.svg?height=60&width=60",
    testimonial:
      "The youth development program has made a significant impact on our community. Our young people are more engaged, motivated, and prepared for the future.",
  },
  {
    client: "Regional Nonprofit Alliance",
    service: "Nonprofit Consulting",
    image: "/placeholder.svg?height=60&width=60",
    testimonial:
      "The strategic planning support we received has completely transformed our organization. We now have a clear direction and the tools to achieve our mission.",
  },
]
