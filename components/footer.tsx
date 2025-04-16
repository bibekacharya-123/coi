import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, InstagramIcon as TiktokIcon, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#121d3e] text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="Creating Opportunities Logo"
              width={120}
              height={120}
              className="mb-4 bg-white p-2 rounded"
            />
            <p className="text-sm mt-4">
              Nepal's foremost opportunity provider platform. We empower dreams, seize opportunities, and cultivate
              success together.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Events & Projects
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:underline">
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Kathmandu, Nepal</li>
              <li>Email: info@creatingoppo.com</li>
              <li>Phone: +977 1234567890</li>
            </ul>

            <div className="mt-4">
              <Link href="/get-involved/post-opportunity">
                <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white flex items-center">
                  <Plus size={16} className="mr-2" />
                  Post an Opportunity
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-300">
                <Facebook size={24} />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-300">
                <Twitter size={24} />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-300">
                <Instagram size={24} />
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-300">
                <Linkedin size={24} />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube" className="hover:text-gray-300">
                <Youtube size={24} />
              </Link>
              <Link href="https://tiktok.com" aria-label="TikTok" className="hover:text-gray-300">
                <TiktokIcon size={24} />
              </Link>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Language</h3>
              <select className="bg-white text-black px-3 py-2 rounded w-full">
                <option value="en">English</option>
                <option value="ne">Nepali</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Creating Opportunities International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
