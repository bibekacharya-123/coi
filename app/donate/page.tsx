import Link from "next/link"
import DonationForm from "@/components/forms/donation-form"

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#121d3e] to-[#0e76bc] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
            <p className="text-xl mb-8">
              Your donation helps us create opportunities and transform lives in our community.
            </p>
            <Link
              href="#donate-form"
              className="inline-block bg-[#e74c3c] hover:bg-[#c0392b] text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section id="donate-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-[#121d3e]">Support Our Mission</h2>
              <DonationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121d3e]">Why Your Support Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#0e76bc] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Expand Our Reach</h3>
              <p className="text-gray-600">
                Your donation helps us reach more communities and create more opportunities for those who need them
                most.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#0e76bc] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Fund New Programs</h3>
              <p className="text-gray-600">
                We can develop and implement new programs that address specific needs in our community with your
                support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#0e76bc] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Empower Individuals</h3>
              <p className="text-gray-600">
                Your generosity directly impacts individuals seeking to improve their lives through education and career
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121d3e]">Your Donation's Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-[#e74c3c] font-bold text-2xl mb-2">$25</div>
              <p className="text-gray-700">Provides educational materials for one student</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-[#e74c3c] font-bold text-2xl mb-2">$50</div>
              <p className="text-gray-700">Funds a workshop for job seekers</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-[#e74c3c] font-bold text-2xl mb-2">$100</div>
              <p className="text-gray-700">Sponsors a mentorship program for a month</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-[#e74c3c] font-bold text-2xl mb-2">$500</div>
              <p className="text-gray-700">Helps launch a new community initiative</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121d3e]">Other Ways to Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Volunteer Your Time</h3>
              <p className="text-gray-600 mb-4">
                Join our team of dedicated volunteers who help make our programs possible.
              </p>
              <Link href="/get-involved/become-volunteer" className="text-[#0e76bc] font-medium hover:underline">
                Learn more about volunteering {">"}
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Corporate Partnerships</h3>
              <p className="text-gray-600 mb-4">
                Partner with us to create meaningful impact while enhancing your corporate social responsibility.
              </p>
              <Link href="/get-involved/become-partner" className="text-[#0e76bc] font-medium hover:underline">
                Explore partnership opportunities {">"}
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Planned Giving</h3>
              <p className="text-gray-600 mb-4">
                Leave a lasting legacy by including Creating Opportunities in your estate planning.
              </p>
              <Link href="/contact" className="text-[#0e76bc] font-medium hover:underline">
                Contact us to learn more {">"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#121d3e]">Our Commitment to Transparency</h2>
            <p className="text-lg text-gray-700 mb-8">
              We believe in complete transparency about how your donations are used. Each year, we publish a detailed
              report showing exactly how funds were allocated and the impact they made.
            </p>
            <Link
              href="/about/annual-report"
              className="inline-block bg-[#0e76bc] hover:bg-[#0a5a8e] text-white font-medium py-2 px-6 rounded transition-colors"
            >
              View Our Annual Report
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121d3e]">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Is my donation tax-deductible?</h3>
              <p className="text-gray-700">
                Yes, Creating Opportunities is a registered 501(c)(3) nonprofit organization, and all donations are
                tax-deductible to the extent allowed by law.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can I make a recurring donation?</h3>
              <p className="text-gray-700">
                Our donation form allows you to set up monthly, quarterly, or annual recurring donations to provide
                sustainable support.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How secure is my payment information?</h3>
              <p className="text-gray-700">
                We use industry-standard encryption and secure payment processors to ensure your personal and financial
                information is protected.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I donate in honor or memory of someone?</h3>
              <p className="text-gray-700">
                Yes, you can make a tribute donation in honor or memory of a loved one. You'll have the option to send a
                notification of your gift to a designated recipient.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
