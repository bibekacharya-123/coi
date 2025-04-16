"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import JobApplicationForm from "@/components/forms/job-application-form"
import { ArrowLeft, Building, Calendar, Clock, MapPin, Briefcase } from "lucide-react"

export default function JobDetailPage() {
  return (
    <>
      <section className="bg-[#121d3e] text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/opportunities" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Opportunities
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Marketing Manager</h1>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center">
              <Building size={16} className="mr-2" />
              Company Name
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              Kathmandu, Nepal
            </div>
            <div className="flex items-center">
              <Briefcase size={16} className="mr-2" />
              Full-time
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              Posted: April 1, 2025
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              Deadline: April 30, 2025
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Job Description</h2>
                      <p className="mb-4">
                        We are seeking a talented and experienced Marketing Manager to join our team. The ideal
                        candidate will be responsible for developing and implementing marketing strategies to promote
                        our services and drive growth.
                      </p>
                      <h3 className="text-lg font-bold mt-6 mb-2">Responsibilities:</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Develop and implement comprehensive marketing strategies to promote our services</li>
                        <li>
                          Create and manage marketing campaigns across various channels (digital, print, events, etc.)
                        </li>
                        <li>Manage social media presence and develop engaging content</li>
                        <li>Analyze market trends and competitor activities</li>
                        <li>Track and analyze marketing performance metrics</li>
                        <li>Collaborate with internal teams to ensure brand consistency</li>
                        <li>Manage marketing budget and resources effectively</li>
                        <li>Develop and maintain relationships with key stakeholders and partners</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="requirements" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Requirements</h2>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Bachelor's degree in Marketing, Business, or related field</li>
                        <li>3+ years of experience in marketing, with at least 1 year in a management role</li>
                        <li>Proven track record of developing and executing successful marketing campaigns</li>
                        <li>Strong knowledge of digital marketing channels and strategies</li>
                        <li>Excellent analytical skills with experience in marketing metrics and data analysis</li>
                        <li>
                          Proficiency in marketing tools and software (CRM, email marketing, social media management,
                          etc.)
                        </li>
                        <li>Outstanding communication and presentation skills</li>
                        <li>Creative thinking and problem-solving abilities</li>
                        <li>Ability to work in a fast-paced environment and manage multiple projects simultaneously</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="benefits" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Benefits</h2>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Competitive salary package</li>
                        <li>Health insurance coverage</li>
                        <li>Flexible working hours</li>
                        <li>Professional development opportunities</li>
                        <li>Performance-based bonuses</li>
                        <li>Collaborative and inclusive work environment</li>
                        <li>Regular team building activities</li>
                        <li>Paid time off and holidays</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="mt-8 flex justify-center">
                <Button
                  className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-6 rounded font-bold text-lg"
                  onClick={() => document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  APPLY NOW
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Job Summary</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-700">Position</h3>
                      <p>Marketing Manager</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Location</h3>
                      <p>Kathmandu, Nepal</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Employment Type</h3>
                      <p>Full-time</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Salary Range</h3>
                      <p>Competitive (Based on experience)</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Application Deadline</h3>
                      <p>April 30, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Share This Job</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Need Help?</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this position or the application process, please contact us.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="application-form" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#121d3e] mb-8">Apply for This Position</h2>
          <div className="max-w-4xl mx-auto">
            <JobApplicationForm jobTitle="Marketing Manager" />
          </div>
        </div>
      </section>
    </>
  )
}
