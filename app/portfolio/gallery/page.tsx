import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Explore our visual journey through impactful events, projects, and collaborations.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="people">People</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                  <GalleryItem
                    key={item}
                    title={`Gallery Image ${item}`}
                    category={item % 3 === 0 ? "Event" : item % 3 === 1 ? "Project" : "People"}
                    image={`/placeholder.svg?height=400&width=400`}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[3, 6, 9, 12].map((item) => (
                  <GalleryItem
                    key={item}
                    title={`Event Image ${item}`}
                    category="Event"
                    image={`/placeholder.svg?height=400&width=400`}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[1, 4, 7, 10].map((item) => (
                  <GalleryItem
                    key={item}
                    title={`Project Image ${item}`}
                    category="Project"
                    image={`/placeholder.svg?height=400&width=400`}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="people">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[2, 5, 8, 11].map((item) => (
                  <GalleryItem
                    key={item}
                    title={`People Image ${item}`}
                    category="People"
                    image={`/placeholder.svg?height=400&width=400`}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Featured Collections</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Annual Conference 2023"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Annual Conference 2023</h3>
                <p className="text-gray-600 mb-4">
                  Highlights from our flagship event bringing together industry leaders and innovators.
                </p>
                <span className="text-[#0e9aa7] font-medium">24 Photos</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Community Outreach Program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Outreach Program</h3>
                <p className="text-gray-600 mb-4">
                  Our initiatives to support and empower local communities through various programs.
                </p>
                <span className="text-[#0e9aa7] font-medium">36 Photos</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team Building Retreat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Team Building Retreat</h3>
                <p className="text-gray-600 mb-4">
                  Moments from our annual team retreat focused on collaboration and innovation.
                </p>
                <span className="text-[#0e9aa7] font-medium">18 Photos</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function GalleryItem({
  title,
  category,
  image,
}: {
  title: string
  category: string
  image: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="relative aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span className="inline-block bg-[#0e9aa7] px-2 py-1 rounded-full text-xs text-white mb-2">{category}</span>
          <h3 className="text-white font-medium">{title}</h3>
        </div>
      </div>
    </div>
  )
}
