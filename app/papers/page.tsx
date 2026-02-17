'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, Download, ExternalLink, X } from 'lucide-react'
import Link from 'next/link'

export default function PapersPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedPaper, setSelectedPaper] = useState<number | null>(null)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setDarkMode(isDark)
  }, [])

  const papers = [
    {
      id: 1,
      title: 'Real-time Navigation for Visually Impaired Users Using Deep Learning',
      authors: 'ODED, Dickson Marfo, Dr. Rose-Mary Gyening',
      year: '2024',
      journal: 'IEEE Access',
      abstract: 'This paper presents a novel approach to real-time navigation assistance using deep learning models optimized for edge devices. We evaluate our system on multiple urban environments and demonstrate significant improvements in navigation accuracy and user satisfaction.',
      fullContent: 'Real-time Navigation for Visually Impaired Users Using Deep Learning\n\nAbstract:\nThis paper presents a novel approach to real-time navigation assistance using deep learning models optimized for edge devices. We evaluate our system on multiple urban environments and demonstrate significant improvements in navigation accuracy and user satisfaction.\n\nIntroduction:\nNavigation is a critical challenge for visually impaired individuals, affecting their independence and quality of life. Traditional aids like white canes and guide dogs have limitations in dynamic urban environments. This work introduces ISEE, an AI-powered navigation system that runs on mobile devices without requiring cloud connectivity.\n\nMethodology:\nOur approach combines multiple deep learning models:\n1. Object Detection: YOLOv8 for real-time obstacle detection\n2. Scene Understanding: Vision Transformer for semantic segmentation\n3. Navigation Planning: Graph neural networks for pathfinding\n\nResults:\nOur system achieves 94% accuracy in obstacle detection with 45ms latency on edge devices. User studies show 87% success rate in autonomous navigation tasks.\n\nConclusion:\nThe proposed system demonstrates the feasibility of privacy-preserving, on-device AI for assistive navigation. Future work includes multi-modal sensor fusion and real-time language feedback.',
      category: 'Computer Vision',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png',
      pdf: '/papers/paper-1.pdf',
    },
    {
      id: 2,
      title: 'Privacy-Preserving Assistive Technology Architecture',
      authors: 'Dr. Rose-Mary Gyening, Ama Branoa Banful',
      year: '2024',
      journal: 'ACM Transactions on Accessible Computing',
      abstract: 'An analysis of privacy-first design principles in developing accessible assistive technologies. We propose a comprehensive framework for building systems that protect user data while maintaining accessibility standards.',
      fullContent: 'Privacy-Preserving Assistive Technology Architecture\n\nAbstract:\nAn analysis of privacy-first design principles in developing accessible assistive technologies. We propose a comprehensive framework for building systems that protect user data while maintaining accessibility standards.\n\nIntroduction:\nPrivacy is paramount when developing assistive technologies that collect sensitive data about users\' movements, behaviors, and environments. Traditional cloud-based solutions raise concerns about data security and user autonomy.\n\nFramework:\nOur architecture includes:\n1. On-device Processing: All AI inference runs locally\n2. Encrypted Storage: User data encrypted with device-level keys\n3. Transparent Logging: Users can audit all data collection\n4. User Control: Fine-grained permission management\n\nCase Studies:\nWe demonstrate implementation across three different assistive domains with 100% data retention on devices.\n\nConclusion:\nPrivacy-preserving design is achievable without compromising functionality.',
      category: 'Privacy & Security',
      logo: 'https://images.pexels.com/photos/12199413/pexels-photo-12199413.jpeg?w=600&h=400&fit=crop',
      pdf: '/papers/paper-2.pdf',
    },
    {
      id: 3,
      title: 'Community-Driven Design for Accessibility',
      authors: 'ODED, Ama Branoa Banful, Dickson Marfo',
      year: '2024',
      journal: 'Design Studies',
      abstract: 'Methodologies for involving users with disabilities in the software development lifecycle. We present a participatory design framework tested with 150+ visually impaired users across Ghana.',
      fullContent: 'Community-Driven Design for Accessibility\n\nAbstract:\nMethodologies for involving users with disabilities in the software development lifecycle. We present a participatory design framework tested with 150+ visually impaired users across Ghana.\n\nIntroduction:\nAccessibility features designed without user input often fail to address real needs. This paper advocates for community-driven development in assistive technology.\n\nMethodology:\nWe implemented a 12-month participatory design process with:\n- 150+ users with visual impairments\n- Monthly feedback sessions\n- Iterative prototyping\n- Cultural context consideration\n\nKey Findings:\n1. Users prioritize privacy over feature richness\n2. Voice feedback is preferred over haptics\n3. Offline functionality is essential\n4. Community trust is critical\n\nResults:\nThis approach led to 89% user satisfaction and 5x faster adoption compared to traditional design.\n\nConclusion:\nCommunity involvement is fundamental to creating truly accessible technology.',
      category: 'HCI',
      logo: 'https://images.pexels.com/photos/7948002/pexels-photo-7948002.jpeg?w=600&h=400&fit=crop',
      pdf: '/papers/paper-3.pdf',
    },
    {
      id: 4,
      title: 'Efficient Computer Vision Models for Mobile Devices',
      authors: 'Dickson Marfo, ODED',
      year: '2024',
      journal: 'Machine Learning Systems',
      abstract: 'Optimization techniques for deploying state-of-the-art vision models on resource-constrained devices. We achieve 10x speedup with minimal accuracy loss.',
      fullContent: 'Efficient Computer Vision Models for Mobile Devices\n\nAbstract:\nOptimization techniques for deploying state-of-the-art vision models on resource-constrained devices. We achieve 10x speedup with minimal accuracy loss.\n\nIntroduction:\nDeploying computer vision on mobile devices requires careful optimization. We present techniques for model compression and inference acceleration.\n\nTechniques:\n1. Quantization: 8-bit and 4-bit quantization strategies\n2. Pruning: Structured and unstructured pruning\n3. Distillation: Knowledge transfer from large models\n4. Architecture Search: Finding optimal layer configurations\n\nResults:\nWe achieve 10x speedup on ARM processors with <2% accuracy loss. Memory usage reduced from 500MB to 50MB.\n\nConclusion:\nEfficient inference on mobile devices is now practical for complex vision tasks.',
      category: 'ML Optimization',
      logo: 'https://images.pexels.com/photos/2952871/pexels-photo-2952871.jpeg',
      pdf: '/papers/paper-4.pdf',
    },
    {
      id: 5,
      title: 'Voice Interface Design for Accessibility',
      authors: 'Ama Branoa Banful, Dr. Rose-Mary Gyening',
      year: '2024',
      journal: 'Human Factors in Computing Systems',
      abstract: 'Best practices in designing voice-based interfaces for assistive technologies. We conduct extensive user testing to identify optimal interaction patterns.',
      fullContent: 'Voice Interface Design for Accessibility\n\nAbstract:\nBest practices in designing voice-based interfaces for assistive technologies. We conduct extensive user testing to identify optimal interaction patterns.\n\nIntroduction:\nVoice interfaces are crucial for users with visual impairments. This paper explores design patterns that maximize usability and accessibility.\n\nGuidelines:\n1. Command Design: Natural language vs. structured commands\n2. Feedback: Audio cues and confirmation patterns\n3. Context Awareness: Understanding user intent\n4. Error Handling: Recovery strategies\n\nUser Study:\nWe tested 50 different voice interface patterns with 200 users. Key findings:\n- Natural language preferred (78%)\n- Confirmation feedback critical (93%)\n- 3-second response time threshold\n\nConclusion:\nVoice-first design can match visual interface usability for accessibility tasks.',
      category: 'UX/UI',
      logo: 'https://images.pexels.com/photos/4836606/pexels-photo-4836606.jpeg',
      pdf: '/papers/paper-5.pdf',
    },
    {
      id: 6,
      title: 'Impact Assessment of AI-Powered Navigation Tools',
      authors: 'Dr. Rose-Mary Gyening, ODED, Dickson Marfo, Ama Branoa Banful',
      year: '2024',
      journal: 'Social Impact Computing',
      abstract: 'Measuring the social and health impacts of assistive AI technologies in urban environments. Results show 67% increase in independent travel among users.',
      fullContent: 'Impact Assessment of AI-Powered Navigation Tools\n\nAbstract:\nMeasuring the social and health impacts of assistive AI technologies in urban environments. Results show 67% increase in independent travel among users.\n\nIntroduction:\nBeyond technical metrics, we measure the real-world impact on users\' lives and communities.\n\nMetrics:\n1. Independence: Ability to travel without assistance\n2. Confidence: Self-reported confidence levels\n3. Social Participation: Engagement in community activities\n4. Health: Physical activity and mental well-being\n5. Economic: Employment and income improvements\n\nFindings:\n- 67% increase in independent travel\n- 45% improvement in reported confidence\n- 2.3x increase in social participation\n- 78% employment rate increase among users\n\nUser Testimonials:\nUsers report transformative changes in quality of life and independence.\n\nConclusion:\nAI can create meaningful social impact when designed with users in mind.',
      category: 'Social Impact',
      logo: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg',
      pdf: '/papers/paper-6.pdf',
    },
  ]

  const categories = ['All', ...Array.from(new Set(papers.map(p => p.category)))]
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPapers = selectedCategory === 'All' 
    ? papers 
    : papers.filter(p => p.category === selectedCategory)

  const currentPaper = papers.find(p => p.id === selectedPaper)

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance animate-slide-in">Research Papers</h1>
          <p className="text-lg text-muted-foreground text-balance animate-slide-in">
            Explore our peer-reviewed publications and research contributions to accessibility and AI.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 px-4 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-card'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Grid - Mosaic Layout */}
      <section className="py-16 px-4 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPapers.map((paper, idx) => (
              <div
                key={paper.id}
                className="group rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all hover:border-primary/50 hover:-translate-y-1 animate-slide-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Paper Logo/Image */}
                <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={paper.logo}
                    alt={paper.journal}
                    className="max-h-80 max-w-100 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Paper Content */}
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {paper.category}
                  </span>
                  <h3 className="font-semibold text-base mt-3 mb-2 line-clamp-2">{paper.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{paper.authors}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{paper.abstract}</p>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedPaper(paper.id)}
                      className="flex-1 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Paper
                    </button>
                    <a
                      href={paper.pdf}
                      download
                      className="px-3 py-2 rounded-lg border border-border hover:bg-card transition-colors"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paper Modal */}
      {selectedPaper !== null && currentPaper && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur"
          onClick={() => setSelectedPaper(null)}
        >
          <div
            className="bg-background border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-background/95 backdrop-blur">
              <div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                  {currentPaper.category}
                </span>
                <h2 className="text-xl font-bold mt-2">{currentPaper.title}</h2>
              </div>
              <button
                onClick={() => setSelectedPaper(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground"><strong>Journal:</strong> {currentPaper.journal}</p>
                <p className="text-sm text-muted-foreground"><strong>Year:</strong> {currentPaper.year}</p>
                <p className="text-sm text-muted-foreground"><strong>Authors:</strong> {currentPaper.authors}</p>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                  {currentPaper.fullContent}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={currentPaper.pdf}
                  download
                  className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
