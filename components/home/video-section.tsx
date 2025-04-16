"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function VideoSection() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div
          className="aspect-video max-w-4xl mx-auto bg-black rounded-lg overflow-hidden relative group cursor-pointer"
          onClick={() => setVideoOpen(true)}
        >
          {/* Video thumbnail */}
          <div className="w-full h-full relative">
            <Image
              src="/placeholder.svg?height=600&width=1000"
              alt="Promotional Video"
              width={1000}
              height={600}
              className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play size={36} className="text-[#0e9aa7] ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Video Dialog */}
        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="max-w-4xl p-0 bg-black">
            <div className="aspect-video w-full">
              {/* In a real implementation, this would be a video player */}
              <div className="w-full h-full bg-black flex items-center justify-center text-white">
                Video Player Placeholder
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
