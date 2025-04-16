import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-gray-100 py-24">
      <div className="absolute inset-0 bg-[url('/background-pattern.png')] bg-no-repeat bg-cover opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#121d3e] mb-8">Welcome to our realm of possibilities!</h1>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link href="/opportunities">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
              OPPORTUNITIES
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              className="border-[#0e9aa7] text-[#0e9aa7] hover:bg-[#0e9aa7] hover:text-white px-8 py-6 rounded font-bold text-lg"
            >
              LEARN MORE
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto text-gray-700 text-lg">
          <p className="mb-6">
            At Creating Opportunities International, we take pride in being Nepal's foremost opportunity provider
            platform. With a commitment to fostering aspirations and nurturing goals, we invite you to join us on a
            journey of growth and success.
          </p>
          <p>
            Here, we empower dreams, seize opportunities, and cultivate success together. Elevate your aspirations with
            our premier platform – where opportunities meet ambition, and dreams take flight. Your path to a brighter
            future starts here.
          </p>
        </div>
      </div>
    </section>
  )
}
