import { Card, CardContent } from "@/components/ui/card"
import { Users, Briefcase, GraduationCap, Globe, Heart, Home } from "lucide-react"

export default function OurImpactSection() {
  const impactAreas = [
    {
      icon: Users,
      title: "Individual Development",
      description: "We have empowered thousands of individuals to develop their skills and realize their potential.",
      stat: "10,000+",
      label: "Individuals Empowered",
    },
    {
      icon: Briefcase,
      title: "Career Advancement",
      description: "We have facilitated career growth and advancement for professionals across various sectors.",
      stat: "5,000+",
      label: "Career Opportunities Created",
    },
    {
      icon: GraduationCap,
      title: "Education Access",
      description: "We have improved access to quality education and training programs for underserved populations.",
      stat: "3,000+",
      label: "Educational Opportunities",
    },
    {
      icon: Globe,
      title: "Global Connections",
      description:
        "We have established international connections and pathways for cross-cultural exchange and learning.",
      stat: "50+",
      label: "Countries Reached",
    },
    {
      icon: Heart,
      title: "Community Development",
      description: "We have contributed to the development and well-being of communities across Nepal.",
      stat: "100+",
      label: "Community Initiatives",
    },
    {
      icon: Home,
      title: "Organizational Growth",
      description: "We have supported the growth and development of partner organizations and institutions.",
      stat: "200+",
      label: "Partner Organizations",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Our Impact</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Explore the difference we've made in the lives of individuals, communities, and organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactAreas.map((area, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0e9aa7]/10 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="text-[#0e9aa7]" size={24} />
                </div>
                <h3 className="font-bold text-lg text-[#121d3e] mb-2">{area.title}</h3>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <div className="border-t pt-4">
                  <div className="text-2xl font-bold text-[#0e9aa7]">{area.stat}</div>
                  <p className="text-gray-600 text-sm">{area.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
