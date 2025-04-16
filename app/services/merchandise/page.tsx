import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MerchandisePage() {
  return (
    <>
      <section className="bg-[#121d3e] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Merchandise</h1>
          <p className="max-w-3xl mx-auto text-lg">High-quality products that represent our mission and values.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#121d3e] mb-6">Shop With Purpose</h2>
              <p className="text-gray-700 mb-4">
                Our merchandise collection is designed to inspire and empower. Each purchase supports our mission to
                create opportunities for individuals and communities around the world.
              </p>
              <p className="text-gray-700">
                From apparel to accessories, our products are made with quality materials and ethical manufacturing
                practices. Show your support for Creating Opportunities International while making a statement with our
                stylish and meaningful merchandise.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Merchandise Collection"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <Tabs defaultValue="apparel" className="w-full mb-16">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="apparel">Apparel</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
              <TabsTrigger value="books">Books & Resources</TabsTrigger>
              <TabsTrigger value="gifts">Gift Sets</TabsTrigger>
            </TabsList>
            <TabsContent value="apparel" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {apparelProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="accessories" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {accessoriesProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="books" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {booksProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="gifts" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {giftProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center text-[#121d3e] mb-8">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCollections.map((collection, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{collection.title}</h3>
                    <p className="text-white text-sm mb-4">{collection.description}</p>
                    <Link href={collection.link}>
                      <Button className="bg-white text-[#121d3e] hover:bg-gray-100">Shop Collection</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {merchandiseFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-[#0e9aa7] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#121d3e] text-white p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Custom Bulk Orders</h2>
                <p className="mb-6">
                  Looking for custom merchandise for your organization or event? We offer bulk ordering with
                  customization options. Contact us to discuss your specific needs.
                </p>
                <Link href="/contact">
                  <Button className="bg-white text-[#121d3e] hover:bg-gray-100">Inquire About Bulk Orders</Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {bulkOrderFeatures.map((feature, index) => (
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
          <h2 className="text-3xl font-bold text-center text-[#121d3e] mb-12">Customer Reviews</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerReviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Image
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{review.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-gray-300"}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{review.comment}</p>
                <p className="text-sm text-gray-500">{review.product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#121d3e] mb-8">Ready to shop?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Browse our collection and find the perfect item to show your support.
          </p>
          <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
            SHOP ALL PRODUCTS
          </Button>
        </div>
      </section>
    </>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute top-4 right-4 bg-[#0e9aa7] text-white text-xs font-bold px-2 py-1 rounded">NEW</div>
        )}
        <Link href={`/services/merchandise/${product.id}`}>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <Button className="bg-white text-[#121d3e] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              View Details
            </Button>
          </div>
        </Link>
      </div>
      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.category}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-[#121d3e]">${product.price.toFixed(2)}</span>
        <Link href={`/services/merchandise/${product.id}`}>
          <Button variant="outline" size="sm">
            Add to Cart
          </Button>
        </Link>
      </div>
    </div>
  )
}

// Mock data for apparel products
const apparelProducts = [
  {
    id: "tshirt-1",
    name: "Empowerment T-Shirt",
    category: "T-Shirts",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "hoodie-1",
    name: "Opportunity Hoodie",
    category: "Hoodies",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
  {
    id: "hat-1",
    name: "Creating Opportunities Cap",
    category: "Headwear",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
]

// Mock data for accessories products
const accessoriesProducts = [
  {
    id: "bag-1",
    name: "Eco-Friendly Tote Bag",
    category: "Bags",
    price: 15.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "bottle-1",
    name: "Stainless Steel Water Bottle",
    category: "Drinkware",
    price: 22.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
  {
    id: "notebook-1",
    name: "Inspirational Notebook",
    category: "Stationery",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
]

// Mock data for books products
const booksProducts = [
  {
    id: "book-1",
    name: "Creating Your Path: A Guide to Success",
    category: "Books",
    price: 18.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "ebook-1",
    name: "Digital Transformation Workbook",
    category: "E-Books",
    price: 9.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
  {
    id: "journal-1",
    name: "Daily Reflection Journal",
    category: "Journals",
    price: 14.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
]

// Mock data for gift products
const giftProducts = [
  {
    id: "giftset-1",
    name: "Empowerment Gift Box",
    category: "Gift Sets",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: "giftcard-1",
    name: "Digital Gift Card",
    category: "Gift Cards",
    price: 25.0,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
  {
    id: "bundle-1",
    name: "Self-Development Bundle",
    category: "Bundles",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
]

// Mock data for featured collections
const featuredCollections = [
  {
    title: "Empowerment Collection",
    description: "Products designed to inspire and motivate",
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/merchandise/collections/empowerment",
  },
  {
    title: "Eco-Friendly Line",
    description: "Sustainable products for a better world",
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/merchandise/collections/eco-friendly",
  },
  {
    title: "Limited Edition",
    description: "Exclusive designs available for a limited time",
    image: "/placeholder.svg?height=300&width=400",
    link: "/services/merchandise/collections/limited-edition",
  },
]

// Mock data for merchandise features
const merchandiseFeatures = [
  {
    title: "Quality Materials",
    description: "All our products are made with high-quality, durable materials designed to last.",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Ethical Production",
    description: "We partner with ethical manufacturers who provide fair wages and safe working conditions.",
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
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "Mission Support",
    description: "Every purchase directly supports our mission to create opportunities for communities worldwide.",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

// Mock data for bulk order features
const bulkOrderFeatures = [
  {
    title: "Custom Branding",
    description: "Add your logo or custom design to any product",
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
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    title: "Volume Discounts",
    description: "Special pricing for large orders",
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Quick Turnaround",
    description: "Efficient production and shipping for tight deadlines",
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Sample Options",
    description: "Request samples before placing a large order",
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
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
]

// Mock data for customer reviews
const customerReviews = [
  {
    name: "Sarah J.",
    rating: 5,
    comment: "Love my Empowerment T-Shirt! Great quality and the design is beautiful.",
    product: "Empowerment T-Shirt",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael T.",
    rating: 4,
    comment: "The Eco-Friendly Tote Bag is sturdy and well-made. I use it every day for shopping.",
    product: "Eco-Friendly Tote Bag",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Elena R.",
    rating: 5,
    comment: "The Self-Development Bundle was exactly what I needed. Great value for the price!",
    product: "Self-Development Bundle",
    image: "/placeholder.svg?height=60&width=60",
  },
]
