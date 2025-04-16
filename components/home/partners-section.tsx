import Image from "next/image"

export default function PartnersSection() {
  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 2", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 3", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 4", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 5", logo: "/placeholder.svg?height=80&width=200" },
    { name: "Partner 6", logo: "/placeholder.svg?height=80&width=200" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-4">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading organizations to create valuable opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={200}
                height={80}
                className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
