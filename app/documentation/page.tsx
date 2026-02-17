'use client'

import { useState } from 'react'
import { Eye, Download, Copy, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function DocumentationPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [enteredPassword, setEnteredPassword] = useState('')
  const [passwordCorrect, setPasswordCorrect] = useState(false)
  const [copied, setCopied] = useState(false)
  const [downloadStarted, setDownloadStarted] = useState(false)

  const correctPassword = 'rail.ineedtosee'

  const handlePasswordSubmit = () => {
    if (enteredPassword === correctPassword) {
      setPasswordCorrect(true)
    } else {
      alert('Incorrect password. Please try again.')
      setEnteredPassword('')
    }
  }

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(correctPassword)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    setDownloadStarted(true)
    // Simulate download
    const link = document.createElement('a')
    link.href = '#'
    link.download = 'isee-model-encrypted.zip'
    // In production, this would point to an actual encrypted model file
    alert('Download would start here. In production, this would download the encrypted model file.')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">ISEE</span>
            </Link>
            <Link href="/" className="text-sm hover:text-primary transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Documentation Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6">ISEE Model Documentation</h1>
          
          <div className="space-y-8">
            {/* Getting Started */}
            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Getting Started</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to the ISEE Model documentation. This guide will help you understand the architecture, capabilities, and implementation details of our AI-powered navigation system.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg text-sm text-muted-foreground">
                <p><strong>Version:</strong> 1.0.0</p>
                <p><strong>Released:</strong> February 2024</p>
                <p><strong>Supported Platforms:</strong> iOS, Android, Linux</p>
              </div>
            </section>

            {/* Architecture */}
            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Architecture Overview</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ISEE is built on a modular architecture that separates concerns between computer vision, spatial reasoning, and user interface components.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold text-foreground mb-2">Core Engine</h4>
                    <ul className="text-sm space-y-1">
                      <li>• PyTorch-based models</li>
                      <li>• ONNX optimization</li>
                      <li>• Multi-threaded processing</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30">
                    <h4 className="font-semibold text-foreground mb-2">Mobile Runtime</h4>
                    <ul className="text-sm space-y-1">
                      <li>• iOS Metal acceleration</li>
                      <li>• Android GPU compute</li>
                      <li>• CPU fallback support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Installation */}
            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Installation Guide</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Requirements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Python 3.8+</li>
                    <li>• PyTorch 2.0+</li>
                    <li>• OpenCV 4.5+</li>
                    <li>• Minimum 4GB RAM</li>
                    <li>• GPU recommended (CUDA 11.8+)</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg font-mono text-sm">
                  <p className="mb-2">$ pip install isee-model</p>
                  <p>$ python -m isee init</p>
                </div>
              </div>
            </section>

            {/* API Reference */}
            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="text-2xl font-semibold mb-4 text-primary">API Reference</h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Main Classes</h4>
                  <div className="p-3 bg-muted/50 rounded font-mono">
                    <p>class ISEENavigator:</p>
                    <p className="ml-4">def __init__(model_path: str)</p>
                    <p className="ml-4">def process_frame(frame) → NavGuidance</p>
                    <p className="ml-4">def set_destination(lat: float, lng: float)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Support */}
            <section className="p-6 rounded-xl border border-border bg-card">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Support & Resources</h2>
              <p className="text-muted-foreground mb-4">
                Need help? Check out our resources:
              </p>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-primary hover:underline">GitHub Repository</a></li>
                <li><a href="#" className="text-primary hover:underline">API Documentation</a></li>
                <li><a href="#" className="text-primary hover:underline">Troubleshooting Guide</a></li>
                <li><a href="#" className="text-primary hover:underline">Community Forum</a></li>
              </ul>
            </section>
          </div>
        </div>

        {/* Model Download Section */}
        <div className="p-8 rounded-xl border-2 border-primary bg-card">
          <h2 className="text-3xl font-bold mb-2 text-primary">Download Model</h2>
          <p className="text-muted-foreground mb-8">
            Access the encrypted ISEE AI model. Enter the password to unlock the download.
          </p>

          {!passwordCorrect ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Enter Password
                </label>
                <div className="flex gap-2">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={enteredPassword}
                    onChange={(e) => setEnteredPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                    placeholder="Enter encryption password"
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handlePasswordSubmit}
                  className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
                >
                  Unlock Download
                </button>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg flex gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <p className="text-sm text-blue-900 dark:text-blue-200">
                  Hint: The password relates to the research project name and a vision mission statement.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <p className="text-sm text-green-900 dark:text-green-200">
                  Password verified! You can now download the model.
                </p>
              </div>

              <div className="space-y-3 p-6 bg-muted/30 rounded-lg">
                <h3 className="font-semibold text-foreground">Model Details</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>File:</strong> isee-model-v1.0.0.zip (encrypted)</p>
                  <p><strong>Size:</strong> ~450 MB</p>
                  <p><strong>Format:</strong> ONNX + PyTorch</p>
                  <p><strong>Checksum:</strong> SHA256: a3f8c2...</p>
                </div>
              </div>

              <button
                onClick={handleDownload}
                disabled={downloadStarted}
                className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Download className="w-5 h-5" />
                {downloadStarted ? 'Downloading...' : 'Download Encrypted Model'}
              </button>

              <div className="p-4 bg-muted/30 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Decryption Instructions</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The model file is encrypted with AES-256. Use the following command to decrypt:
                </p>
                <div className="p-3 bg-background rounded border border-border font-mono text-sm mb-3 flex items-center justify-between">
                  <span>openssl enc -aes-256-cbc -d -in model.enc -out model.zip -k "{correctPassword}"</span>
                  <button
                    onClick={handleCopyPassword}
                    className="ml-2 p-2 hover:bg-muted rounded transition-colors"
                  >
                    {copied ? <CheckCircle className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>Extract the downloaded zip file</li>
                  <li>Run the decryption command above</li>
                  <li>Extract the decrypted model archive</li>
                  <li>Follow installation guide to integrate with your project</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8 px-4 bg-card">
        <div className="mx-auto max-w-7xl text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ISEE - Making Navigation Accessible. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
