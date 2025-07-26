import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  TrendingUp, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  BarChart3,
  Clock,
  Shield,
  Phone,
  Mail,
  ChevronDown,
  Play,
  Award,
  Sparkles,
  Settings,
  MessageCircle,
  Calendar,
  CreditCard,
  Bot,
  Workflow,
  Database,
  Globe
} from 'lucide-react'
import './App.css'

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-center"
    >
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {count}{suffix}
      </div>
    </motion.div>
  )
}

// Floating Animation Component
function FloatingElement({ children, delay = 0 }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const [pricingOption, setPricingOption] = useState('commitment')
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GrowthAgency
              </div>
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Services', 'How It Works', 'Results', 'Pricing', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-6 px-4 py-2 text-blue-600 border-blue-200 bg-blue-50">
                <Sparkles className="w-4 h-4 mr-2" />
                Complete Business Growth Solution
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Turn Marketing Into
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                Predictable Revenue
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              We don't just generate leads - we build complete systems that turn prospects into customers and customers into loyal advocates
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-full transition-all duration-200 group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                See How We Do It
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <AnimatedCounter end={2} suffix="x" />
                <p className="text-gray-600 font-medium">Lead Generation</p>
              </div>
              <div className="text-center">
                <AnimatedCounter end={90} suffix=" Days" />
                <p className="text-gray-600 font-medium">To Results</p>
              </div>
              <div className="text-center">
                <AnimatedCounter end={5} suffix="M+" />
                <p className="text-gray-600 font-medium">Ad Spend Managed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stop Wasting Money on Ads That Don't Convert
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most businesses struggle with disconnected marketing and operations. We solve this.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sound Familiar?</h3>
              <div className="space-y-4">
                {[
                  "Throwing money at Facebook and Google with no results?",
                  "Getting clicks but no quality leads?",
                  "Leads falling through the cracks with no follow-up system?",
                  "Can't track which ads actually make you money?",
                  "Spending hours on manual tasks that should be automated?"
                ].map((problem, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-400"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">We Fix This</h3>
              <div className="space-y-4">
                {[
                  "Turn your ad spend into a predictable revenue machine",
                  "Automated systems that nurture every lead",
                  "Complete CRM that manages your entire customer journey",
                  "Real-time tracking of every dollar spent and earned",
                  "Automated workflows that save hours every day"
                ].map((solution, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-400"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{solution}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span className="font-bold text-blue-900">Guaranteed results or money back</span>
                </div>
                <p className="text-blue-700">30-day money-back guarantee on all plans</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Business Growth Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine lead generation with business operations to create a seamless growth engine
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-blue-900">Lead Generation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Multi-platform advertising campaigns that generate high-quality leads consistently
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Globe, text: "Multi-Platform Ads" },
                      { icon: BarChart3, text: "Performance Tracking" },
                      { icon: Target, text: "Audience Targeting" },
                      { icon: Sparkles, text: "Creative Optimization" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <item.icon className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-purple-600 rounded-lg">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-purple-900">Business Operations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Complete CRM and automation systems that convert leads into loyal customers
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Database, text: "CRM Management" },
                      { icon: Workflow, text: "Automation" },
                      { icon: MessageCircle, text: "Multi-Channel Comms" },
                      { icon: Bot, text: "AI Chatbots" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <item.icon className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results, Real Fast
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach delivers measurable results across the entire customer journey
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Client",
                metric: "340% ROAS",
                description: "in 60 days",
                details: "Complete lead-to-sale automation increased conversion rates by 85%",
                color: "green"
              },
              {
                title: "SaaS Company",
                metric: "150% more",
                description: "qualified leads",
                details: "CRM automation reduced lead response time from hours to minutes",
                color: "blue"
              },
              {
                title: "Local Business",
                metric: "$50k revenue",
                description: "from $10k ad spend",
                details: "Automated follow-up sequences converted 40% more prospects",
                color: "purple"
              }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <FloatingElement delay={index * 0.5}>
                  <Card className={`text-center border-2 border-${result.color}-200 bg-gradient-to-br from-${result.color}-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-700">{result.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className={`text-4xl font-bold text-${result.color}-600 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {result.metric}
                      </div>
                      <p className="text-gray-600 font-medium mb-4">{result.description}</p>
                      <p className="text-sm text-gray-500">{result.details}</p>
                    </CardContent>
                  </Card>
                </FloatingElement>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Proven 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From lead generation to customer retention - we handle it all
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyze",
                description: "We audit your current campaigns and business processes to find gaps and opportunities",
                icon: BarChart3,
                color: "blue"
              },
              {
                step: "02", 
                title: "Setup",
                description: "We build high-converting campaigns AND implement CRM systems that work together",
                icon: Settings,
                color: "purple"
              },
              {
                step: "03",
                title: "Automate",
                description: "We create automated workflows that nurture leads and manage your entire customer journey",
                icon: Workflow,
                color: "green"
              },
              {
                step: "04",
                title: "Scale",
                description: "We multiply what works and optimize everything for maximum growth and efficiency",
                icon: TrendingUp,
                color: "orange"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-sm font-bold text-${step.color}-600 mb-2`}>{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join 200+ Businesses Getting Real Results
            </h2>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">4.9/5 average rating</span>
            </div>
            <Badge variant="outline" className="px-4 py-2 text-blue-600 border-blue-200 bg-blue-50">
              <Award className="w-4 h-4 mr-2" />
              Facebook Marketing Partner
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Growth Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Complete lead generation + business operations solutions
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-white p-2 rounded-full shadow-lg border border-gray-200">
                <button
                  onClick={() => setPricingOption('commitment')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    pricingOption === 'commitment'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Commitment Plan
                </button>
                <button
                  onClick={() => setPricingOption('flexible')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    pricingOption === 'flexible'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Flexible Plan
                </button>
              </div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Essential Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="relative border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">Essential Plan</CardTitle>
                  <CardDescription>Perfect for small businesses starting their growth journey</CardDescription>
                  <div className="mt-4">
                    {pricingOption === 'commitment' ? (
                      <div>
                        <div className="text-4xl font-bold text-blue-600">$1,500-$2,200</div>
                        <div className="text-gray-600">per month</div>
                        <Badge variant="outline" className="mt-2 text-green-600 border-green-200 bg-green-50">
                          No Setup Fee
                        </Badge>
                      </div>
                    ) : (
                      <div>
                        <div className="text-3xl font-bold text-orange-600">$5,000 Setup</div>
                        <div className="text-gray-600">+ 50% first month</div>
                        <div className="text-2xl font-bold text-blue-600 mt-2">$1,500-$2,200</div>
                        <div className="text-gray-600">per month after</div>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Lead Generation:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 2 advertising platforms</li>
                        <li>• 4-6 ad campaigns</li>
                        <li>• 8 ad creatives monthly</li>
                        <li>• Landing page optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Operations:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• CRM setup & management</li>
                        <li>• Basic automation workflows</li>
                        <li>• SMS & Email communications</li>
                        <li>• Google My Business reviews</li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          30-day money-back guarantee
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {pricingOption === 'commitment' ? '6-month minimum' : 'Month-to-month'}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg">
                    Get Started Today
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Growth Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="relative border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300 scale-105">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">Growth Plan</CardTitle>
                  <CardDescription>Perfect for growing businesses</CardDescription>
                  <div className="mt-4">
                    {pricingOption === 'commitment' ? (
                      <div>
                        <div className="text-4xl font-bold text-blue-600">$3,100-$5,000</div>
                        <div className="text-gray-600">per month</div>
                        <Badge variant="outline" className="mt-2 text-green-600 border-green-200 bg-green-50">
                          No Setup Fee
                        </Badge>
                      </div>
                    ) : (
                      <div>
                        <div className="text-3xl font-bold text-orange-600">$5,000 Setup</div>
                        <div className="text-gray-600">+ 50% first month</div>
                        <div className="text-2xl font-bold text-blue-600 mt-2">$3,100-$5,000</div>
                        <div className="text-gray-600">per month after</div>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Lead Generation:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 3-4 advertising platforms</li>
                        <li>• 8-12 ad campaigns</li>
                        <li>• 15 ad creatives + video ads</li>
                        <li>• Advanced targeting & retargeting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Operations:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Custom CRM pipelines</li>
                        <li>• Advanced automation workflows</li>
                        <li>• Multi-channel communications</li>
                        <li>• Website chatbot</li>
                        <li>• Multi-platform review management</li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          30-day money-back guarantee
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {pricingOption === 'commitment' ? '6-month minimum' : 'Month-to-month'}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg">
                    Start Growing Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="relative border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">Premium Plan</CardTitle>
                  <CardDescription>For enterprises and high-growth companies</CardDescription>
                  <div className="mt-4">
                    {pricingOption === 'commitment' ? (
                      <div>
                        <div className="text-4xl font-bold text-blue-600">$5,500-$8,500+</div>
                        <div className="text-gray-600">per month</div>
                        <Badge variant="outline" className="mt-2 text-green-600 border-green-200 bg-green-50">
                          No Setup Fee
                        </Badge>
                      </div>
                    ) : (
                      <div>
                        <div className="text-3xl font-bold text-orange-600">$5,000 Setup</div>
                        <div className="text-gray-600">+ 50% first month</div>
                        <div className="text-2xl font-bold text-blue-600 mt-2">$5,500-$8,500+</div>
                        <div className="text-gray-600">per month after</div>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Lead Generation:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 5+ advertising platforms</li>
                        <li>• 15+ ad campaigns</li>
                        <li>• 25+ ad creatives monthly</li>
                        <li>• Dedicated account manager</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Operations:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Enterprise CRM with multi-location</li>
                        <li>• AI voice agent & advanced chatbots</li>
                        <li>• Omnichannel communications</li>
                        <li>• Full reputation management</li>
                        <li>• Custom integrations</li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          30-day money-back guarantee
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {pricingOption === 'commitment' ? '6-month minimum' : 'Month-to-month'}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg">
                    Go Premium
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quick Answers
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                question: "What makes you different from other agencies?",
                answer: "We don't just generate leads - we build complete systems that manage your entire customer journey from first click to loyal customer. Most agencies only do one piece of the puzzle."
              },
              {
                question: "How quickly will I see results?",
                answer: "Most clients see initial improvements within 2-4 weeks. Significant results typically occur within 60-90 days as our integrated systems optimize your entire funnel."
              },
              {
                question: "Do I own my data and accounts?",
                answer: "Absolutely. You own all advertising accounts, CRM data, and customer information. If you ever leave, everything stays with you."
              },
              {
                question: "What's the difference between the two pricing options?",
                answer: "The Commitment Plan offers lower monthly costs with a 6-month minimum. The Flexible Plan has a setup fee but allows month-to-month flexibility. Both include the same services and 30-day guarantee."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border border-gray-200 hover:border-blue-300 transition-colors duration-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to 2x Your Leads?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Book a free strategy session and see exactly how we'll grow your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-full transition-all duration-200">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: (555) 123-4567
              </Button>
            </div>
            
            <div className="flex justify-center items-center space-x-6 text-sm opacity-75">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Custom growth plan</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                GrowthAgency
              </div>
              <p className="text-gray-400 mb-4">
                Complete lead generation and business operations solutions for growing companies.
              </p>
              <div className="flex space-x-4">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">hello@growthaagency.com</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lead Generation</li>
                <li>CRM Management</li>
                <li>Marketing Automation</li>
                <li>Business Operations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2025 GrowthAgency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

