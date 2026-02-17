'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CaseStudiesPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setDarkMode(isDark)
  }, [])

  const caseStudies = [
    {
      id: 1,
      title: 'Urban Navigation Success: Accra City Deployment',
      description: 'How ISEE enabled users to navigate major urban areas independently',
      impact: '150+ Users Trained',
      story: 'In our pilot program in Accra, we worked with 150 visually impaired individuals to test and refine ISEE. Users reported a 95% confidence increase in independent navigation within urban areas. The technology successfully identified obstacles, traffic patterns, and landmarks in real-time ',
      results: ['95% confidence boost', '89% success rate in navigation tasks', '2.3x faster route discovery'],
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop',
      category: 'Urban Deployment',
    },
    {
      id: 2,
      title: 'Educational Institution Integration',
      description: 'Empowering students with visual impairments in campus navigation',
      impact: '45 Students Benefited',
      story: 'We partnered with a major university to integrate ISEE into their accessibility services. Students with visual impairments could now navigate campus independently, reducing reliance on sighted guides and enabling better class attendance.',
      results: ['45 students served', '92% improvement in campus navigation', '15% increase in academic participation'],
      image: 'https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?w=600&h=400&fit=crop',
      category: 'Education',
    },
    {
      id: 3,
      title: 'Community Center Implementation',
      description: 'Transforming public spaces into accessible environments',
      impact: '200+ Visitors Monthly',
      story: 'Community centers in three districts implemented ISEE, making their facilities accessible to visitors with visual impairments. The system provides turn-by-turn navigation through complex layouts and real-time safety alerts.',
      results: ['200+ monthly users', 'Zero incident reports', '98% user satisfaction'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      category: 'Community',
    },
    {
      id: 4,
      title: 'Corporate Accessibility Initiative',
      description: 'Creating inclusive workplaces through AI-powered navigation',
      impact: '30 Employees Equipped',
      story: 'A tech company deployed ISEE to help employees with visual impairments navigate their office campuses safely. The system integrated with building layouts and provided real-time obstacle detection, significantly improving workplace accessibility.',
      results: ['30 employees supported', '100% safe navigation record', 'Promoted to other branches'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      category: 'Corporate',
    },
    {
      id: 5,
      title: 'Transportation Hub Navigation',
      description: 'Enabling independent travel through complex public spaces',
      impact: '500+ Daily Users',
      story: 'We deployed ISEE at major transportation hubs, helping users navigate through busy terminals, identify correct platforms, and access services independently. The system handles crowded environments and dynamic obstacles effectively.',
      results: ['500+ daily users', '94% successful trips', 'Expanded to 5 cities'],
      image: 'https://images.pexels.com/photos/62654/highway-night-traffic-light-62654.jpeg?w=600&h=400&fit=crop',
      category: 'Transportation',
    },
    {
      id: 6,
      title: 'Medical Facility Access',
      description: 'Improving healthcare facility navigation for patients',
      impact: '120+ Patients Served',
      story: 'Hospitals implemented ISEE to help patients and visitors navigate complex medical facilities. The system provides location-based information about departments, facilities, and services, making healthcare more accessible.',
      results: ['120+ patients helped', '97% found destinations on first try', 'Reduced staff assistance needed by 60%'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      category: 'Healthcare',
    },
  ]

  const categories = ['All', ...Array.from(new Set(caseStudies.map(c => c.category)))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredStudies = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category === selectedCategory)

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Case Studies</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Real-world implementations of ISEE demonstrating tangible impact on accessibility and independence.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mosaic Layout */}
      <section className="py-8 px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {filteredStudies.map((study, idx) => (
              <div
                key={study.id}
                className={`rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all hover:border-primary/50 flex flex-col ${
                  idx % 3 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden bg-muted ${idx % 3 === 0 ? 'h-96' : 'h-48'}`}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="absolute bottom-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {study.category}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-3">
                    <span className="text-xs text-primary font-bold">{study.impact}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{study.story}</p>
                  <div className="mb-2">
                    <h4 className="text-xs font-semibold text-primary mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full px-4 py-2 border border-border rounded-lg text-sm font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
                    Learn More <ArrowRight className="w-3 h-3 inline-block ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
