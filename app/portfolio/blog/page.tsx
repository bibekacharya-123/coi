import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Empowering Communities Through Digital Literacy",
      excerpt: "How our digital literacy programs are creating new opportunities for underserved communities.",
      date: "March 15, 2023",
      author: "Jane Smith",
      category: "Education",
      image: "/placeholder.svg?height=600&width=800",
      slug: "empowering-communities-digital-literacy",
    },
    {
      id: 2,
      title: "The Impact of Mentorship on Career Development",
      excerpt:
        "Exploring how mentorship programs can significantly enhance career growth and professional development.",
      date: "February 28, 2023",
      author: "John Doe",
      category: "Career",
      image: "/placeholder.svg?height=600&width=800",
      slug: "impact-mentorship-career-development",
    },
    {
      id: 3,
      title: "Building Sustainable Partnerships for Long-term Success",
      excerpt: "Strategies for creating and maintaining partnerships that drive mutual growth and community impact.",
      date: "January 20, 2023",
      author: "Sarah Johnson",
      category: "Partnerships",
      image: "/placeholder.svg?height=600&width=800",
      slug: "building-sustainable-partnerships",
    },
    {
      id: 4,
      title: "Innovative Approaches to Youth Employment",
      excerpt: "New methods and programs we're implementing to address youth unemployment in urban areas.",
      date: "December 12, 2022",
      author: "Michael Brown",
      category: "Employment",
      image: "/placeholder.svg?height=600&width=800",
      slug: "innovative-approaches-youth-employment",
    },
    {
      id: 5,
      title: "The Role of Technology in Creating Equal Opportunities",
      excerpt: "How technology is being leveraged to level the playing field and create more inclusive opportunities.",
      date: "November 5, 2022",
      author: "Lisa Chen",
      category: "Technology",
      image: "/placeholder.svg?height=600&width=800",
      slug: "role-technology-equal-opportunities",
    },
    {
      id: 6,
      title: "Success Stories: From Training to Employment",
      excerpt: "Real-life success stories of individuals who transformed their careers through our programs.",
      date: "October 18, 2022",
      author: "David Wilson",
      category: "Success Stories",
      image: "/placeholder.svg?height=600&width=800",
      slug: "success-stories-training-employment",
    },
  ]

  // Sample categories
  const categories = [
    "Education",
    "Career",
    "Partnerships",
    "Employment",
    "Technology",
    "Success Stories",
    "Events",
    "Community",
  ]

  // Sample recent posts (using the first 3 from the main list)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="max-w-3xl mx-auto text-lg">Insights, stories, and updates from our team and community.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white">Load More Articles</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Search</h3>
                <div className="relative">
                  <Input type="text" placeholder="Search articles..." className="pr-10" />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Link href={`/portfolio/blog/category/${category.toLowerCase()}`} key={category}>
                      <Badge
                        variant="outline"
                        className="hover:bg-[#0e9aa7] hover:text-white cursor-pointer transition-colors"
                      >
                        {category}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="flex-shrink-0 w-20 h-20 relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <Link
                          href={`/portfolio/blog/${post.slug}`}
                          className="font-medium hover:text-[#0e9aa7] line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-[#121d3e] text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-4">Stay updated with our latest news and articles.</p>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="mb-3 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function BlogCard({ post }: { post: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 md:h-64">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-[#0e9aa7]">{post.category}</Badge>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
        </div>
        <Link href={`/portfolio/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-[#0e9aa7] transition-colors">{post.title}</h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link href={`/portfolio/blog/${post.slug}`}>
          <Button variant="outline" className="text-[#0e9aa7] border-[#0e9aa7] hover:bg-[#0e9aa7] hover:text-white">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  )
}
