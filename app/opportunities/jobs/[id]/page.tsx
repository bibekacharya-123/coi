import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase, Building, Clock, ChevronLeft, Share2 } from "lucide-react"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // This would normally come from a database or API
  const job = {
    id: params.id,
    title: "Senior Project Manager",
    company: "Tech Innovations",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    category: "Project Management",
    experience: "5+ years",
    deadline: "May 15, 2025",
    salary: "$50,000 - $70,000 per year",
    posted: "April 10, 2025",
    description: `
      <p>We are seeking an experienced Senior Project Manager to join our dynamic team. The ideal candidate will be responsible for leading and managing complex projects from inception to completion, ensuring they are delivered on time, within scope, and within budget.</p>
      
      <h4>Responsibilities:</h4>
      <ul>
        <li>Develop and maintain project plans, schedules, and budgets</li>
        <li>Lead cross-functional teams to deliver successful project outcomes</li>
        <li>Identify and manage project risks, issues, and dependencies</li>
        <li>Communicate project status, issues, and risks to stakeholders</li>
        <li>Ensure project deliverables are of high quality and meet requirements</li>
        <li>Mentor and develop junior project managers</li>
      </ul>
      
      <h4>Requirements:</h4>
      <ul>
        <li>Bachelor's degree in Business, Engineering, or related field</li>
        <li>5+ years of experience in project management</li>
        <li>PMP certification preferred</li>
        <li>Strong leadership and communication skills</li>
        <li>Experience with project management methodologies (Agile, Waterfall)</li>
        <li>Proficiency in project management tools</li>
        <li>Excellent problem-solving and decision-making abilities</li>
      </ul>
      
      <h4>Benefits:</h4>
      <ul>
        <li>Competitive salary and performance bonuses</li>
        <li>Health insurance and retirement plans</li>
        <li>Flexible work arrangements</li>
        <li>Professional development opportunities</li>
        <li>Collaborative and innovative work environment</li>
      </ul>
    `,
    companyDescription:
      "Tech Innovations is a leading technology company specializing in innovative software solutions for businesses across various industries. With a team of talented professionals, we are committed to delivering high-quality products and services that help our clients achieve their goals.",
  }

  return (
    <>
      <section className="bg-gradient-to-r from-[#121d3e] to-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <Link href="/opportunities/jobs" className="flex items-center text-white/80 hover:text-white mb-4 md:mb-0">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Jobs
            </Link>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Share2 className="mr-2 h-4 w-4" /> Share Job
            </Button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{job.title}</h1>
          <div className="flex flex-wrap items-center text-white/80 gap-x-6 gap-y-2 mb-6">
            <div className="flex items-center">
              <Building className="mr-2 h-4 w-4" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{job.experience}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            <Badge className="bg-white text-[#121d3e]">{job.category}</Badge>
            <Badge className="bg-[#0e9aa7]">Featured</Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg">
              Apply Now
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 rounded font-bold text-lg"
            >
              Save Job
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Job Description</h2>
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">About {job.company}</h2>
                  <p className="text-gray-700 mb-6">{job.companyDescription}</p>
                  <Button variant="outline">Visit Company Website</Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:w-1/3">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Job Overview</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Posted On:</span>
                      <span className="font-medium">{job.posted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Deadline:</span>
                      <span className="font-medium">{job.deadline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Job Type:</span>
                      <span className="font-medium">{job.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Location:</span>
                      <span className="font-medium">{job.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Category:</span>
                      <span className="font-medium">{job.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Experience:</span>
                      <span className="font-medium">{job.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Salary:</span>
                      <span className="font-medium">{job.salary}</span>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Button className="w-full bg-[#0e9aa7] hover:bg-[#0c8b98]">Apply Now</Button>
                    <Button variant="outline" className="w-full">
                      Save Job
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#121d3e] mb-8">Similar Jobs You Might Be Interested In</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: "project-coordinator",
                title: "Project Coordinator",
                company: "Global Solutions",
                location: "Kathmandu, Nepal",
                type: "Full-time",
              },
              {
                id: "program-manager",
                title: "Program Manager",
                company: "Tech Startup",
                location: "Remote",
                type: "Full-time",
              },
              {
                id: "product-manager",
                title: "Product Manager",
                company: "Digital Creations",
                location: "Pokhara, Nepal",
                type: "Full-time",
              },
            ].map((similarJob) => (
              <Card key={similarJob.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{similarJob.title}</h3>
                  <p className="text-gray-500 mb-4">{similarJob.company}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                      <span>{similarJob.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Briefcase className="mr-2 h-4 w-4 text-gray-400" />
                      <span>{similarJob.type}</span>
                    </div>
                  </div>
                  <Link href={`/opportunities/jobs/${similarJob.id}`}>
                    <Button variant="outline" className="w-full">
                      View Job
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
