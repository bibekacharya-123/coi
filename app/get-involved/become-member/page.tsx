import Image from "next/image"
import { CheckCircle } from "lucide-react"
import LifetimeMemberForm from "@/components/forms/lifetime-member-form"

export default function BecomeMemberPage() {
  const benefits = [
    "Access to exclusive events and networking opportunities",
    "Priority registration for workshops and training programs",
    "Regular updates on opportunities and resources",
    "Opportunity to contribute to community initiatives",
    "Recognition in our community of changemakers",
    "Personal and professional development opportunities",
  ]

  const volunteerOpportunities = [
    {
      title: "Event Support",
      description: "Help organize and run our events, workshops, and conferences.",
    },
    {
      title: "Mentorship",
      description: "Share your expertise and guide others in their personal and professional journey.",
    },
    {
      title: "Content Creation",
      description: "Contribute to our blog, social media, and other communication channels.",
    },
    {
      title: "Community Outreach",
      description: "Help us reach and engage with communities across Nepal and beyond.",
    },
    {
      title: "Project Support",
      description: "Assist with the planning and implementation of our various projects and initiatives.",
    },
    {
      title: "Skills-Based Volunteering",
      description: "Contribute your specific skills and expertise to support our mission.",
    },
  ]

  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Lifetime Member</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Join our community and contribute to creating opportunities that transform lives.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Why Become a Lifetime Member?</h2>
              <p className="text-gray-700 mb-6">
                By becoming a lifetime member of Creating Opportunities International, you join a community of
                individuals committed to making a positive impact. Our members are changemakers who believe in the power
                of opportunities to transform lives and communities.
              </p>
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-[#0e9aa7] mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our Members"
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
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8 text-center">Apply for Lifetime Membership</h2>
          <div className="max-w-4xl mx-auto">
            <LifetimeMemberForm />
          </div>
        </div>
      </section>
    </>
  )
}
