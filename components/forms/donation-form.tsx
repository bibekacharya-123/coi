"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DonationForm() {
  const [donationAmount, setDonationAmount] = useState<string>("50")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [frequency, setFrequency] = useState<string>("one-time")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your donation! This is a demo - no actual payment will be processed.")
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-[#0e76bc] to-[#1a9bd8] p-6 text-white">
        <h2 className="text-2xl font-bold">Make a Donation</h2>
        <p className="mt-2 opacity-90">Your support helps us create more opportunities for those in need</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Donation Amount Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Select Donation Amount</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {["25", "50", "100", "250"].map((amount) => (
              <button
                key={amount}
                type="button"
                className={`py-3 border-2 rounded-md font-medium transition-colors ${
                  donationAmount === amount && !customAmount
                    ? "border-[#0e76bc] bg-[#0e76bc]/10 text-[#0e76bc]"
                    : "border-gray-200 hover:border-[#0e76bc] hover:bg-[#0e76bc]/5"
                }`}
                onClick={() => {
                  setDonationAmount(amount)
                  setCustomAmount("")
                }}
              >
                ${amount}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="custom-amount-radio"
              name="amount-type"
              className="w-4 h-4 text-[#0e76bc]"
              checked={!!customAmount}
              onChange={() => {
                setDonationAmount("")
                setCustomAmount(customAmount || "10")
              }}
            />
            <Label htmlFor="custom-amount-radio">Custom Amount</Label>
          </div>

          {(customAmount || !donationAmount) && (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500">$</span>
              </div>
              <Input
                type="number"
                min="1"
                placeholder="Enter amount"
                className="pl-7"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setDonationAmount("")
                }}
              />
            </div>
          )}
        </div>

        {/* Donation Frequency */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Donation Frequency</h3>
          <RadioGroup value={frequency} onValueChange={setFrequency} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-time" id="one-time" />
              <Label htmlFor="one-time">One-time donation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="monthly" id="monthly" />
              <Label htmlFor="monthly">Monthly donation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="quarterly" id="quarterly" />
              <Label htmlFor="quarterly">Quarterly donation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="annually" id="annually" />
              <Label htmlFor="annually">Annual donation</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Your Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first-name">First Name *</Label>
              <Input id="first-name" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="last-name">Last Name *</Label>
              <Input id="last-name" required className="mt-1" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" className="mt-1" />
            </div>
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" className="mt-1" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="state">State/Province</Label>
              <Input id="state" className="mt-1" />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Label htmlFor="zip">Zip/Postal Code</Label>
              <Input id="zip" className="mt-1" />
            </div>
          </div>

          <div>
            <Label htmlFor="country">Country</Label>
            <Select defaultValue="us">
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Payment Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Payment Information</h3>
          <div>
            <Label htmlFor="card-name">Name on Card *</Label>
            <Input id="card-name" required className="mt-1" />
          </div>

          <div>
            <Label htmlFor="card-number">Card Number *</Label>
            <Input id="card-number" required placeholder="•••• •••• •••• ••••" className="mt-1" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Expiration Date *</Label>
              <Input id="expiry" required placeholder="MM/YY" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="cvc">Security Code (CVC) *</Label>
              <Input id="cvc" required placeholder="•••" className="mt-1" />
            </div>
          </div>
        </div>

        {/* Additional Options */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="anonymous" />
            <Label htmlFor="anonymous">Make this donation anonymous</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" defaultChecked />
            <Label htmlFor="newsletter">Sign me up for the newsletter</Label>
          </div>

          <div>
            <Label htmlFor="comments">Comments (Optional)</Label>
            <Textarea
              id="comments"
              placeholder="Tell us why you're donating or if you'd like your donation to go toward a specific program"
              className="mt-1"
              rows={3}
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full py-6 text-lg bg-[#0e76bc] hover:bg-[#0a5a8e]">
          Complete Donation
        </Button>

        {/* Security Notice */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p>Your payment information is securely processed and we never store your card details.</p>
          <p>
            Creating Opportunities is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to
            the extent allowed by law.
          </p>
        </div>
      </form>
    </div>
  )
}
