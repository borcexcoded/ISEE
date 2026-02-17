'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, Search, ChevronDown, MessageCircle, FileText, AlertCircle, Settings, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export default function SupportPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setDarkMode(isDark)
  }, [])

  const supportCategories = [
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Access detailed guides and technical documentation',
      link: '/documentation',
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Find answers to commonly asked questions',
      link: '#faq',
    },
    {
      icon: AlertCircle,
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      link: '#troubleshooting',
    },
    {
      icon: Settings,
      title: 'Setup Guide',
      description: 'Step-by-step installation instructions',
      link: '#setup',
    },
    {
      icon: MessageCircle,
      title: 'Contact Us',
      description: 'Get in touch with our support team',
      link: '/contact',
    },
  ]

  const faqs = [
    {
      id: 1,
      question: 'How do I install ISEE?',
      answer: 'ISEE can be installed from the Google Play Store or Apple App Store. Alternatively, you can clone the repository from GitHub and build from source. For detailed instructions, visit our documentation page.',
    },
    {
      id: 2,
      question: 'What devices are supported?',
      answer: 'ISEE supports iOS (12.0+) and Android (8.0+). We recommend devices with a recent processor and at least 2GB RAM for optimal performance. Compatibility varies based on the specific model.',
    },
    {
      id: 3,
      question: 'Does ISEE require an internet connection?',
      answer: 'No! ISEE is designed to work offline. All processing happens on your device. You don\'t need an internet connection for core navigation features, making it reliable anywhere.',
    },
    {
      id: 4,
      question: 'How accurate is the navigation system?',
      answer: 'Our system achieves 89-95% accuracy in real-world conditions. Accuracy depends on lighting conditions, network connectivity for GPS data, and terrain complexity. We continuously improve our models based on user feedback.',
    },
    {
      id: 5,
      question: 'Is my location data private?',
      answer: 'Your privacy is paramount. All location data stays on your device. We never collect, store, or transmit your location information to external servers. You have complete control over your data.',
    },
    {
      id: 6,
      question: 'How can I report bugs?',
      answer: 'You can report bugs through: 1) GitHub Issues in our repository, 2) In-app feedback form, or 3) Email to support@rail-project.com. Include device details and steps to reproduce the issue.',
    },
    {
      id: 7,
      question: 'Can I contribute to the project?',
      answer: 'We welcome contributions! Check our GitHub repository for open issues and contribution guidelines. You can contribute code, translations, documentation, or feedback. Join our community today!',
    },
    {
      id: 8,
      question: 'How often are updates released?',
      answer: 'We release updates monthly with bug fixes and improvements. Major feature releases happen quarterly. You can enable auto-updates in your app settings to stay current.',
    },
  ]

  const troubleshootingGuides = [
    {
      issue: 'App crashes on startup',
      steps: [
        'Ensure your device has sufficient storage (at least 500MB free)',
        'Restart your device and try again',
        'Clear app cache: Settings > Apps > ISEE > Storage > Clear Cache',
        'Reinstall the app if the issue persists',
      ],
    },
    {
      issue: 'Navigation is inaccurate',
      steps: [
        'Calibrate your device compass: Open Settings > hold phone level and rotate in figure-8 pattern',
        'Ensure GPS is enabled with location services set to High Accuracy',
        'Check that you\'re in an area with good GPS signal',
        'Update the app to the latest version',
      ],
    },
    {
      issue: 'Battery drains too quickly',
      steps: [
        'Reduce map refresh rate: Settings > Performance > Reduce Polling',
        'Disable voice feedback if not needed: Settings > Audio > Voice Guidance',
        'Ensure location services aren\'t running continuously in background',
        'Use power saving mode when battery is low',
      ],
    },
    {
      issue: 'Can\'t hear audio guidance',
      steps: [
        'Check device volume: Use physical volume buttons',
        'Verify audio output: Settings > Audio > Output Device',
        'Ensure notification sounds are enabled in system settings',
        'Test with headphones to isolate speaker issues',
        'Restart the app and try again',
      ],
    },
  ]

  const filteredFaqs = searchQuery
    ? faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs

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
      <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Support & Help Center</h1>
          <p className="text-lg text-muted-foreground text-balance mb-8">
            Find answers, troubleshoot issues, and get support from our team.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search support articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {supportCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <Link
                  key={idx}
                  href={category.link}
                  className="p-6 rounded-xl border border-border hover:shadow-lg hover:border-primary transition-all text-center"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 px-4 bg-secondary/5">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-balance">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/50 transition-colors text-left"
                >
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${
                      expandedFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 py-4 border-t border-border bg-card/50">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section id="troubleshooting" className="py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-balance">Troubleshooting Guide</h2>
          <div className="space-y-6">
            {troubleshootingGuides.map((guide, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-lg text-primary mb-4">{guide.issue}</h3>
                <ol className="space-y-2">
                  {guide.steps.map((step, stepIdx) => (
                    <li key={stepIdx} className="flex gap-3 text-muted-foreground">
                      <span className="font-semibold text-primary">{stepIdx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-12 px-4 bg-secondary/5">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Contact Support
            </Link>
            <a
              href="https://github.com/RAIL-project/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-all"
            >
              Report an Issue
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
