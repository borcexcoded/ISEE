'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, Mail, MapPin, Github, MessageSquare, Send, X } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [emailForm, setEmailForm] = useState({
    name: '',
    senderEmail: '',
    subject: '',
    message: '',
  })
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setDarkMode(isDark)
  }, [])

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEmailForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailStatus('sending')
    
    try {
      // Simulate email sending - in production, use a service like SendGrid or Resend
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...emailForm,
          recipientEmail: 'contact@rail-project.com',
        }),
      })

      if (response.ok) {
        setEmailStatus('sent')
        setTimeout(() => {
          setEmailForm({ name: '', senderEmail: '', subject: '', message: '' })
          setShowEmailModal(false)
          setEmailStatus('idle')
        }, 2000)
      } else {
        setEmailStatus('error')
      }
    } catch (error) {
      setEmailStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance animate-slide-in">Get In Touch</h1>
          <p className="text-lg text-muted-foreground text-balance animate-slide-in">
            Have questions, feedback, or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Email Card */}
            <div className="p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow animate-slide-in">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Send us an email for any inquiries.</p>
              <button
                onClick={() => setShowEmailModal(true)}
                className="text-primary font-medium hover:underline"
              >
                Send us a message
              </button>
            </div>

            {/* Location Card */}
            <div className="p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow animate-slide-in" style={{ animationDelay: '100ms' }}>
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-muted-foreground mb-4">Based in Ghana, serving communities worldwide.</p>
              <p className="font-medium">Accra, Ghana</p>
            </div>

            {/* GitHub Card */}
            <div className="p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow animate-slide-in" style={{ animationDelay: '200ms' }}>
              <Github className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">GitHub</h3>
              <p className="text-muted-foreground mb-4">Check out our open-source projects.</p>
              <a href="https://github.com/RAIL-project" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                github.com/RAIL-project
              </a>
            </div>
          </div>

          {/* Direct Contact Info */}
          <div className="p-8 rounded-xl border border-border bg-card animate-slide-in" style={{ animationDelay: '300ms' }}>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email
                </h3>
                <a href="mailto:contact@rail-project.com" className="text-primary hover:underline">
                  contact@rail-project.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Address
                </h3>
                <p className="text-muted-foreground">
                  Accra, Ghana<br />
                  West Africa
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Social
                </h3>
                <a href="https://github.com/RAIL-project" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block mb-2">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/company/rail-project" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 gap-4">
              <details className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow cursor-pointer group">
                <summary className="font-semibold text-lg flex items-center justify-between">
                  How can I get involved with ISEE?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground">
                  You can contribute by visiting our GitHub repository, participating in user research, or reaching out to discuss collaboration opportunities. We welcome contributions from developers, researchers, and domain experts.
                </p>
              </details>

              <details className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow cursor-pointer group">
                <summary className="font-semibold text-lg flex items-center justify-between">
                  Is ISEE available for download?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground">
                  ISEE is currently in development. You can check our Get Started page for documentation and access to the latest development builds. Sign up for updates on our main website.
                </p>
              </details>

              <details className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow cursor-pointer group">
                <summary className="font-semibold text-lg flex items-center justify-between">
                  Can I use ISEE without internet?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground">
                  Yes! One of ISEE's key features is that it runs entirely on your device without requiring internet connectivity. All processing happens locally on your phone for maximum privacy and reliability.
                </p>
              </details>

              <details className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow cursor-pointer group">
                <summary className="font-semibold text-lg flex items-center justify-between">
                  How is my data protected?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground">
                  We follow privacy-first principles. All data processing happens on your device, and no information is transmitted to our servers. Read our privacy policy and technical documentation for more details.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Email Modal */}
      {showEmailModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur"
          onClick={() => setShowEmailModal(false)}
        >
          <div
            className="bg-background border border-border rounded-xl max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold">Send us an Email</h2>
              <button
                onClick={() => setShowEmailModal(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            {emailStatus === 'sent' ? (
              <div className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Sent!</h3>
                <p className="text-muted-foreground">Thank you for your message. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={emailForm.name}
                    onChange={handleEmailChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    name="senderEmail"
                    value={emailForm.senderEmail}
                    onChange={handleEmailChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={emailForm.subject}
                    onChange={handleEmailChange}
                    placeholder="How can we help?"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={emailForm.message}
                    onChange={handleEmailChange}
                    placeholder="Your message here..."
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowEmailModal(false)}
                    className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={emailStatus === 'sending'}
                    className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {emailStatus === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Email
                      </>
                    )}
                  </button>
                </div>

                {emailStatus === 'error' && (
                  <p className="text-red-500 text-sm text-center">
                    Failed to send email. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
