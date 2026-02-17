'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight, Eye, Navigation, Zap, Users, Shield, MessageSquare, Moon, Sun, Play, Download, X as XIcon } from 'lucide-react'

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [showExploreModal, setShowExploreModal] = useState(false)
  const [selectedBlogPost, setSelectedBlogPost] = useState<number | null>(null)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setDarkMode(isDark)
    
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode === 'true') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', newDarkMode ? 'true' : 'false')
  }

  const teamMembers = [
    {
      name: 'Dr. Rose-Mary Gyening',
      role: 'Project Supervisor',
      bio: 'Leads the project vision ensuring accessibility and impact-driven research.',
      image: 'https://vm-s48cv5ntstlu28n64p6lxd.vusercontent.net/team-rosemary-new.jpg',
    },
    {
      name: 'ODED Asiedu',
      role: 'AI Researcher',
      bio: 'Specializes in computer vision and AI model development for assistive technologies.',
      image: 'https://vm-s48cv5ntstlu28n64p6lxd.vusercontent.net/team-oded.jpg',
    },
    {
      name: 'Dickson Marfo',
      role: 'AI Researcher',
      bio: 'Expert in machine learning and real-time navigation algorithms.',
      image: 'https://vm-s48cv5ntstlu28n64p6lxd.vusercontent.net/team-dickson.jpg',
    },
    {
      name: 'Ama Branoa Banful',
      role: 'AI Researcher',
      bio: 'Specializes in natural language processing and user interface optimization for accessibility.',
      image: 'https://vm-s48cv5ntstlu28n64p6lxd.vusercontent.net/team-ama.jpg',
    },
  ]

  const features = [
    {
      icon: Navigation,
      title: 'Real-time Navigation',
      description: 'AI-powered guidance that understands your environment in real-time with pinpoint accuracy.',
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image recognition to detect obstacles, traffic, and navigation landmarks.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-100ms response times for instantaneous directional feedback.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built with and for visually impaired individuals to ensure real-world utility.',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data stays on your device. No cloud tracking, guaranteed privacy.',
    },
    {
      icon: MessageSquare,
      title: 'Voice Interface',
      description: 'Intuitive voice commands and audio feedback for completely hands-free operation.',
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'Advancing AI for Accessibility',
      excerpt: 'How machine learning is revolutionizing assistive technologies.',
      content: 'Our research focuses on developing cutting-edge AI models that can understand complex environments in real-time. We are leveraging deep learning techniques to create accurate computer vision systems that can detect obstacles, identify traffic patterns, and provide meaningful navigation guidance to visually impaired users. Our approach combines state-of-the-art neural networks with efficient edge computing to ensure low-latency responses.',
      date: 'Feb 2024',
      author: 'ISEE Team',
    },
    {
      id: 2,
      title: 'Community First Development',
      excerpt: 'Building technology with, not for, visually impaired communities.',
      content: 'We believe that the best technology comes from listening to those who will use it. Throughout the development of ISEE, we have worked closely with visually impaired individuals to understand their needs, challenges, and aspirations. This community-first approach has shaped every aspect of our platform, from the user interface to the core navigation algorithms. We are committed to continuous feedback and iteration.',
      date: 'Jan 2024',
      author: 'Dr. Rose-Mary Gyening',
    },
    {
      id: 3,
      title: 'Privacy in Assistive Tech',
      excerpt: 'Why protecting user data is crucial for trust and adoption.',
      content: 'Privacy is not a feature—it is a fundamental right. ISEE has been designed with privacy as a core principle from day one. All processing happens on the user\'s device, ensuring that sensitive location and personal data never leaves your phone. We employ end-to-end encryption and follow industry best practices for data security. Our commitment to privacy extends to transparency about what data is collected and how it is used.',
      date: 'Dec 2023',
      author: 'ISEE Security Team',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">ISEE</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="/papers" className="text-sm hover:text-primary transition-colors">Papers</a>
              <a href="/case-studies" className="text-sm hover:text-primary transition-colors">Case Studies</a>
              <a href="/contact" className="text-sm hover:text-primary transition-colors">Contact</a>
              <a href="/documentation" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 px-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Navigate the World with <span className="text-primary">Confidence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            ISEE uses advanced AI to provide real-time navigation assistance for visually impaired individuals, making independence and accessibility a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowVideoModal(true)}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" /> Watch Demo
            </button>
            <button
              onClick={() => setShowExploreModal(true)}
              className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-all"
            >
              Explore Research
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border hover:shadow-lg transition-all hover:border-primary/50">
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Mission Section */}
      <section id="about" className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg animate-slide-in">
              <img
                src="https://www.shutterstock.com/image-photo/having-walk-using-white-cane-600nw-2731658033.jpg"
                alt="Mission - Visually impaired person using white cane for navigation"
                className="w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-balance">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                To revolutionize accessibility through cutting-edge AI technology, empowering visually impaired individuals with the tools they need to navigate the world independently and confidently.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Privacy & Security</h4>
                    <p className="text-sm text-muted-foreground">Your data stays on your device. No tracking, no cloud uploads.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Users className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Community Driven</h4>
                    <p className="text-sm text-muted-foreground">Built with real users to solve real problems.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Fast & Efficient</h4>
                    <p className="text-sm text-muted-foreground">Sub-100ms response times for real-time guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 bg-secondary/10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all transform hover:scale-105">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-xl mb-4 text-primary">Computer Vision</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• PyTorch & TensorFlow</li>
                <li>• YOLOv8 for object detection</li>
                <li>• Real-time depth estimation</li>
                <li>• Scene understanding models</li>
              </ul>
            </div>
            <div className="p-8 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-xl mb-4 text-primary">Mobile Integration</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• React Native & Flutter</li>
                <li>• iOS & Android SDKs</li>
                <li>• Edge computing</li>
                <li>• Offline-first architecture</li>
              </ul>
            </div>
            <div className="p-8 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-xl mb-4 text-primary">Infrastructure</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Cloud deployment ready</li>
                <li>• CI/CD pipelines</li>
                <li>• Model versioning</li>
                <li>• A/B testing framework</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 bg-secondary/10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all bg-card">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-primary font-semibold">{post.date}</span>
                    <span className="text-xs text-muted-foreground">{post.author}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <button
                    onClick={() => setSelectedBlogPost(post.id)}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Ready to Explore?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Download the model, explore the research, or join our community today.
          </p>
          <a
            href="/documentation"
            className="inline-flex px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
          >
            Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-card">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="/documentation" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Research</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="/papers" className="hover:text-primary transition-colors">Papers</a></li>
                <li><a href="/case-studies" className="hover:text-primary transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
                <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="/support" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/RAIL-project" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><Github className="w-4 h-4" /> GitHub</a></li>
                <li><a href="https://www.linkedin.com/company/rail-project" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
                <li><a href="mailto:contact@rail-project.com" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><Mail className="w-4 h-4" /> Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ISEE - Making Navigation Accessible. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="bg-card rounded-xl max-w-2xl w-full max-h-96 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold">Watch Demo</h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-muted flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/QmWkTQHNLxs"
                title="ISEE Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Explore Research Modal */}
      {showExploreModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto"
          onClick={() => setShowExploreModal(false)}
        >
          <div
            className="bg-card rounded-xl max-w-2xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
              <h3 className="font-semibold text-lg">Research Overview</h3>
              <button
                onClick={() => setShowExploreModal(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 max-h-96 overflow-y-auto space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Research Focus Areas</h4>
                <p className="text-muted-foreground mb-3">
                  ISEE focuses on advancing AI technology for assistive navigation through multiple research streams:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Computer Vision:</strong> Real-time object detection, semantic segmentation, and scene understanding</li>
                  <li><strong>Spatial AI:</strong> 3D reconstruction and spatial mapping for accurate navigation</li>
                  <li><strong>Edge Computing:</strong> Optimizing models for mobile devices with minimal latency</li>
                  <li><strong>User Experience:</strong> Accessibility-first design and voice interface development</li>
                  <li><strong>Privacy & Security:</strong> On-device processing and encryption protocols</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Key Publications</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• "Real-time Navigation for Visually Impaired Users" - Conference on AI for Social Good</li>
                  <li>• "Edge-based Computer Vision for Mobile Assistive Devices" - IEEE Computer Vision</li>
                  <li>• "Privacy-preserving Assistive Technology" - Accessibility Research Journal</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Collaborations</h4>
                <p className="text-sm text-muted-foreground">
                  We work with leading universities, accessibility organizations, and technology partners to advance the field of assistive AI. Our collaborative approach ensures that research translates into real-world impact for our users.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Post Modal */}
      {selectedBlogPost && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedBlogPost(null)}
        >
          <div
            className="bg-card rounded-xl max-w-2xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {blogPosts.find(p => p.id === selectedBlogPost) && (
              <>
                <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card">
                  <h3 className="font-semibold text-lg">
                    {blogPosts.find(p => p.id === selectedBlogPost)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedBlogPost(null)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6 max-h-96 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <span>{blogPosts.find(p => p.id === selectedBlogPost)?.date}</span>
                    <span>{blogPosts.find(p => p.id === selectedBlogPost)?.author}</span>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {blogPosts.find(p => p.id === selectedBlogPost)?.content}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
