import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Building, GraduationCap, Heart } from "lucide-react"

export default function BecomePartnerPage() {
  const benefits = [
    "Access to a wide network of talented individuals",
    "Collaboration on impactful projects and initiatives",
    "Enhanced visibility and recognition",
    "Opportunity to contribute to positive social change",
    "Participation in events and programs",
    "Shared resources and expertise",
  ]

  const partnerTypes = [
    {
      icon: Building,
      title: "Corporate Partners",
      description: "Businesses and corporations that support our mission through funding, resources, and expertise.",
    },
    {
      icon: GraduationCap,
      title: "Educational Partners",
      description:
        "Schools, colleges, universities, and other educational institutions that collaborate on programs and initiatives.",
    },
    {
      icon: Heart,
      title: "Non-Profit Partners",
      description: "Non-profit organizations that share our vision and work with us to create greater impact.",
    },
  ]

  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Be Our Partner Organization</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Join our network of partner organizations and be part of our mission to create opportunities and transform
            lives.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Why Partner With Us?</h2>
              <p className="text-gray-700 mb-6">
                Creating Opportunities International collaborates with a diverse range of organizations, from
                educational institutions and businesses to non-profits and government agencies. Our partnerships are
                built on shared values and a commitment to creating positive impact.
              </p>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
              <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">Become a Partner</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Partner Organizations"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Types of Partnerships</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We offer various types of partnerships to accommodate different organizations and their unique
              contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#0e9aa7]/10 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="text-[#0e9aa7]" size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-[#121d3e] mb-2">{type.title}</h3>
                  <p className="text-gray-700">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Our Partnership Approach</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We believe in building meaningful, mutually beneficial partnerships that create lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
              <p className="text-gray-700">
                We begin with a thorough consultation to understand your organization's goals and values.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Partnership Design</h3>
              <p className="text-gray-700">
                We work together to design a partnership that aligns with both our missions and objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-700">
                We implement the partnership with clear communication and regular check-ins.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Evaluation & Growth</h3>
              <p className="text-gray-700">
                We regularly evaluate our partnership and explore opportunities for growth and expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#121d3e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Partner With Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Take the first step towards a meaningful partnership by contacting us today.
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
