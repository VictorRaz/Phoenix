import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible.jsx'
import { 
  ChevronDown,
  ChevronRight,
  Users,
  Target,
  BarChart3,
  TrendingUp,
  Clock,
  Shield,
  CheckCircle,
  Star,
  Award,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Zap,
  Search,
  FileText,
  Settings,
  Globe,
  Smartphone,
  Monitor,
  PieChart,
  LineChart,
  Activity,
  Database,
  Workflow,
  MessageCircle,
  Bot,
  CreditCard,
  BookOpen,
  Building
} from 'lucide-react'
import './App.css'

function App() {
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Agency Reference</h1>
              <Badge variant="secondary" className="ml-3">Internal Use Only</Badge>
            </div>
            <div className="text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              'Overview',
              'Integrated Services',
              'Process',
              'Pricing',
              'FAQ',
              'ROI Analysis',
              'Team',
              'Technology',
              'Case Studies'
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="whitespace-nowrap text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Overview Section */}
        <section id="overview" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="w-6 h-6 mr-3" />
                Company Overview - Integrated Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower businesses with complete end-to-end growth solutions that seamlessly integrate lead generation with business operations, creating predictable revenue systems and long-term customer relationships.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Our Unique Value</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Integrated Approach:</strong> Lead generation + operations in one solution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Complete Funnel:</strong> From first click to loyal customer</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Cost Efficiency:</strong> 15-25% savings vs separate vendors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Data Unity:</strong> Unified tracking and optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-gray-600">Active Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">$5M+</div>
                  <div className="text-sm text-gray-600">Ad Spend Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5.2x</div>
                  <div className="text-sm text-gray-600">Average ROAS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Client Retention</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Integrated Services Section */}
        <section id="integrated-services" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Settings className="w-6 h-6 mr-3" />
                Complete Integrated Service Breakdown
              </CardTitle>
              <CardDescription>
                Comprehensive lead generation + business operations solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="essential" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="essential">Essential Plan</TabsTrigger>
                  <TabsTrigger value="growth">Growth Plan</TabsTrigger>
                  <TabsTrigger value="premium">Premium Plan</TabsTrigger>
                </TabsList>
                
                <TabsContent value="essential" className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Target Audience</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">Small businesses, startups, local service providers</p>
                        <p className="text-sm text-gray-500 mt-2">Monthly Ad Spend: $2,000 - $5,000</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Pricing Range</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-blue-600">$1,500 - $2,200</p>
                        <p className="text-sm text-gray-500">per month</p>
                        <p className="text-xs text-green-600 mt-1">15% savings vs separate services</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Service Value</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>Lead Gen: $1,000-$1,500</div>
                          <div>Operations: $500-$700</div>
                          <div className="font-semibold text-blue-600">Total: $1,500-$2,200</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 border-blue-200">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Target className="w-5 h-5 mr-2 text-blue-600" />
                          Lead Generation Components
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100">
                            <ChevronRight className="w-4 h-4 mr-2" />
                            <span className="font-medium">Campaign Management</span>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-3 border-l-2 border-blue-200 ml-3 mt-2">
                            <ul className="space-y-2 text-gray-600">
                              <li>• 2 advertising platforms (Google Ads + Facebook/Instagram)</li>
                              <li>• 4-6 ad campaigns across platforms</li>
                              <li>• 8-12 ad variations for A/B testing</li>
                              <li>• Weekly bid adjustments and optimization</li>
                              <li>• Daily monitoring and performance tracking</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>

                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100">
                            <ChevronRight className="w-4 h-4 mr-2" />
                            <span className="font-medium">Creative Development</span>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-3 border-l-2 border-blue-200 ml-3 mt-2">
                            <ul className="space-y-2 text-gray-600">
                              <li>• 8 ad creatives (static images and graphics)</li>
                              <li>• 4 ad copy variations per campaign</li>
                              <li>• 2 landing page optimizations</li>
                              <li>• Monthly creative refresh and updates</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>

                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-blue-100">
                            <ChevronRight className="w-4 h-4 mr-2" />
                            <span className="font-medium">Reporting & Analytics</span>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-3 border-l-2 border-blue-200 ml-3 mt-2">
                            <ul className="space-y-2 text-gray-600">
                              <li>• Weekly performance summaries via email</li>
                              <li>• Monthly comprehensive report (15-20 pages)</li>
                              <li>• Monthly strategy consultation (1 hour)</li>
                              <li>• Real-time dashboard access 24/7</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-purple-200">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Database className="w-5 h-5 mr-2 text-purple-600" />
                          Operations Components
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100">
                            <ChevronRight className="w-4 h-4 mr-2" />
                            <span className="font-medium">CRM System</span>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-3 border-l-2 border-purple-200 ml-3 mt-2">
                            <ul className="space-y-2 text-gray-600">
                              <li>• Go High Level CRM setup and management</li>
                              <li>• Unlimited staff access (no seat restrictions)</li>
                              <li>• Contact and lead management system</li>
                              <li>• Single pipeline (Leads → Booked → Completed)</li>
                              <li>• Basic calendar and task alerts</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>

                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100">
                            <ChevronRight className="w-4 h-4 mr-2" />
                            <span className="font-medium">Automation & Communications</span>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-3 border-l-2 border-purple-200 ml-3 mt-2">
                            <ul className="space-y-2 text-gray-600">
                              <li>• Single workflow automation (reminders, status changes)</li>
                              <li>• Unified SMS and Email inbox</li>
                              <li>• Basic templates for communications</li>
                              <li>• Appointment reminders (SMS/email)</li>
                              <li>• Basic post-visit follow-ups</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>

                        <Collapsible>
                          <CollapsibleTrigger className="flex items-center w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-purple-100">
                            <ChevronRight className="w-4 h-4 mr-2" />
                            <span className="font-medium">Business Management</span>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-3 border-l-2 border-purple-200 ml-3 mt-2">
                            <ul className="space-y-2 text-gray-600">
                              <li>• Web-based booking system with payment processing</li>
                              <li>• Manual invoicing and estimate templates</li>
                              <li>• Google My Business review management</li>
                              <li>• Automated review requests and response dashboard</li>
                            </ul>
                          </CollapsibleContent>
                        </Collapsible>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="growth" className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Target Audience</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">Growing businesses, established companies</p>
                        <p className="text-sm text-gray-500 mt-2">Monthly Ad Spend: $5,000 - $15,000</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Pricing Range</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-blue-600">$3,100 - $5,000</p>
                        <p className="text-sm text-gray-500">per month</p>
                        <p className="text-xs text-green-600 mt-1">20% savings vs separate services</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Service Value</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>Lead Gen: $2,000-$3,500</div>
                          <div>Operations: $1,100-$1,500</div>
                          <div className="font-semibold text-blue-600">Total: $3,100-$5,000</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-4">Enhanced Features (Everything in Essential Plus):</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium mb-3 text-blue-800">Lead Generation Upgrades:</h5>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• 3-4 advertising platforms</li>
                          <li>• 8-12 ad campaigns</li>
                          <li>• 15 ad creatives (mixed formats including video)</li>
                          <li>• Advanced targeting & retargeting</li>
                          <li>• Lookalike audience development</li>
                          <li>• Email marketing integration</li>
                          <li>• Bi-weekly performance reviews</li>
                          <li>• Custom dashboard with advanced metrics</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3 text-blue-800">Operations Upgrades:</h5>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Custom CRM pipelines and fields</li>
                          <li>• Multi-service booking and reminders</li>
                          <li>• Contact segmentation and advanced templates</li>
                          <li>• Mobile app support for staff</li>
                          <li>• Advanced automations (task assignment, approval flows)</li>
                          <li>• Unified SMS, Email, and WhatsApp inboxes</li>
                          <li>• Website chatbot for FAQs and lead capture</li>
                          <li>• Multi-channel review requests and management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="premium" className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Target Audience</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">Large businesses, enterprises, high-growth companies</p>
                        <p className="text-sm text-gray-500 mt-2">Monthly Ad Spend: $15,000+</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Pricing Range</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-blue-600">$5,500 - $8,500+</p>
                        <p className="text-sm text-gray-500">per month</p>
                        <p className="text-xs text-green-600 mt-1">25% savings vs separate services</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Service Value</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>Lead Gen: $4,500-$7,000+</div>
                          <div>Operations: $2,000-$2,800+</div>
                          <div className="text-xs text-gray-500">Separate Value: $6,500-$9,800+</div>
                          <div className="font-semibold text-blue-600">Bundled: $5,500-$8,500+</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-4">Enterprise-Level Features (Everything in Growth Plus):</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-medium mb-3 text-purple-800">Lead Generation Enterprise:</h5>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• 5+ advertising platforms</li>
                          <li>• 15+ ad campaigns</li>
                          <li>• 25+ ad creatives monthly</li>
                          <li>• Professional photography coordination</li>
                          <li>• Custom brand alignment</li>
                          <li>• Multi-channel attribution tracking</li>
                          <li>• Predictive analytics</li>
                          <li>• Dedicated account manager</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3 text-purple-800">Operations Enterprise:</h5>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• Enterprise CRM with multi-location support</li>
                          <li>• AI voice agent for pre-qualification</li>
                          <li>• Advanced chatbot flows on all touchpoints</li>
                          <li>• Omnichannel communications hub</li>
                          <li>• Full reputation management with sentiment analysis</li>
                          <li>• Custom integrations and workflows</li>
                          <li>• Advanced analytics and forecasting</li>
                          <li>• Priority support and dedicated success manager</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3 text-purple-800">Advanced Features:</h5>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• Loyalty programs integration</li>
                          <li>• Cross-team pipelines</li>
                          <li>• Real-time business intelligence</li>
                          <li>• Activity heatmaps and audit logs</li>
                          <li>• Full accounting software integrations</li>
                          <li>• Advanced recurring billing</li>
                          <li>• AI suggested responses</li>
                          <li>• Custom workflow triggers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Process Section */}
        <section id="process" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Workflow className="w-6 h-6 mr-3" />
                Integrated Implementation Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6">
                {[
                  {
                    phase: "Phase 1: Discovery and Integration Planning",
                    duration: "Week 1-2",
                    objective: "Understand business needs and plan integrated lead generation + operations setup",
                    steps: [
                      {
                        title: "Business Analysis & Lead Gen Audit",
                        details: [
                          "Comprehensive business model and revenue goals review",
                          "Current marketing campaigns and performance analysis",
                          "Target audience identification and persona development",
                          "Competitive landscape and market opportunity assessment",
                          "Existing operations and workflow documentation"
                        ]
                      },
                      {
                        title: "Operations Assessment",
                        details: [
                          "Current CRM and business management tools audit",
                          "Staff workflow and productivity analysis",
                          "Customer journey mapping from lead to retention",
                          "Communication channels and touchpoint review",
                          "Integration requirements and technical assessment"
                        ]
                      },
                      {
                        title: "Integrated Strategy Development",
                        details: [
                          "Lead generation strategy aligned with operations capacity",
                          "CRM workflow design for optimal lead nurturing",
                          "Automation sequence planning",
                          "Staff training and adoption planning",
                          "Success metrics and KPI definition"
                        ]
                      }
                    ]
                  },
                  {
                    phase: "Phase 2: System Setup and Integration",
                    duration: "Week 2-4",
                    objective: "Implement both lead generation campaigns and operations systems",
                    steps: [
                      {
                        title: "Lead Generation Setup",
                        details: [
                          "Advertising account setup and configuration",
                          "Campaign structure and audience targeting",
                          "Creative development and landing page optimization",
                          "Tracking pixel installation and conversion setup",
                          "Initial campaign launch with limited budget"
                        ]
                      },
                      {
                        title: "CRM and Operations Implementation",
                        details: [
                          "Go High Level CRM setup and customization",
                          "Pipeline creation and workflow automation",
                          "Staff account setup and permission configuration",
                          "Communication templates and sequences",
                          "Booking system and payment processor integration"
                        ]
                      },
                      {
                        title: "Integration and Testing",
                        details: [
                          "Lead capture forms connected to CRM",
                          "Automated lead assignment and follow-up sequences",
                          "Cross-platform data synchronization",
                          "Staff training on integrated systems",
                          "Quality assurance testing and refinement"
                        ]
                      }
                    ]
                  },
                  {
                    phase: "Phase 3: Launch and Optimization",
                    duration: "Week 4-6",
                    objective: "Full system launch with continuous optimization",
                    steps: [
                      {
                        title: "Coordinated Launch",
                        details: [
                          "Full campaign launch across all platforms",
                          "CRM automation activation",
                          "Staff onboarding and system adoption",
                          "Real-time monitoring and support",
                          "Initial performance assessment"
                        ]
                      },
                      {
                        title: "Performance Optimization",
                        details: [
                          "Campaign performance analysis and adjustments",
                          "CRM workflow optimization based on actual usage",
                          "Lead quality assessment and targeting refinement",
                          "Automation sequence optimization",
                          "Staff feedback integration and system improvements"
                        ]
                      }
                    ]
                  },
                  {
                    phase: "Phase 4: Scale and Continuous Improvement",
                    duration: "Ongoing",
                    objective: "Scale successful elements and continuously optimize the integrated system",
                    steps: [
                      {
                        title: "Integrated Performance Analysis",
                        details: [
                          "End-to-end funnel performance tracking",
                          "Lead-to-customer conversion optimization",
                          "Customer lifetime value analysis",
                          "Operations efficiency metrics",
                          "ROI analysis across the entire customer journey"
                        ]
                      },
                      {
                        title: "Continuous Enhancement",
                        details: [
                          "A/B testing of campaigns and workflows",
                          "New platform and feature integration",
                          "Advanced automation implementation",
                          "Staff productivity optimization",
                          "Customer experience improvement initiatives"
                        ]
                      }
                    ]
                  }
                ].map((phase, index) => (
                  <Card key={index} className="border-l-4 border-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">{phase.phase}</CardTitle>
                      <CardDescription>
                        <Badge variant="outline" className="mr-2">{phase.duration}</Badge>
                        {phase.objective}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {phase.steps.map((step, stepIndex) => (
                          <Collapsible key={stepIndex}>
                            <CollapsibleTrigger className="flex items-center w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                              <ChevronRight className="w-4 h-4 mr-2" />
                              <span className="font-medium">{step.title}</span>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="p-3 border-l-2 border-blue-200 ml-3 mt-2">
                              <ul className="space-y-1 text-gray-600">
                                {step.details.map((detail, detailIndex) => (
                                  <li key={detailIndex}>• {detail}</li>
                                ))}
                              </ul>
                            </CollapsibleContent>
                          </Collapsible>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <DollarSign className="w-6 h-6 mr-3" />
                Integrated Pricing Structure & Value Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Option 1: Commitment Plan</CardTitle>
                    <CardDescription>Best value for long-term growth partnerships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">No Setup Fee</div>
                        <div className="text-gray-600">6-month minimum commitment</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Essential Plan:</span>
                          <div className="text-right">
                            <div className="font-semibold text-blue-600">$1,500-$2,200/month</div>
                            <div className="text-xs text-gray-500">vs $1,750-$2,550 separate</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Growth Plan:</span>
                          <div className="text-right">
                            <div className="font-semibold text-blue-600">$3,100-$5,000/month</div>
                            <div className="text-xs text-gray-500">vs $3,875-$6,250 separate</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Premium Plan:</span>
                          <div className="text-right">
                            <div className="font-semibold text-blue-600">$5,500-$8,500+/month</div>
                            <div className="text-xs text-gray-500">vs $7,125-$11,050+ separate</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-medium text-green-800 mb-2">Commitment Plan Benefits:</h5>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• 15-25% cost savings</li>
                          <li>• Priority support and dedicated success management</li>
                          <li>• Enhanced reporting and analytics</li>
                          <li>• Quarterly business planning sessions</li>
                          <li>• Advanced feature access</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Option 2: Flexible Plan</CardTitle>
                    <CardDescription>Maximum flexibility with month-to-month terms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600">$5,000 Setup</div>
                        <div className="text-gray-600">+ 50% first month fee</div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                          <span className="font-medium">Essential Plan:</span>
                          <div className="text-right">
                            <div className="font-semibold text-orange-600">$1,500-$2,200/month</div>
                            <div className="text-xs text-gray-500">after setup</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                          <span className="font-medium">Growth Plan:</span>
                          <div className="text-right">
                            <div className="font-semibold text-orange-600">$3,100-$5,000/month</div>
                            <div className="text-xs text-gray-500">after setup</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                          <span className="font-medium">Premium Plan:</span>
                          <div className="text-right">
                            <div className="font-semibold text-orange-600">$5,500-$8,500+/month</div>
                            <div className="text-xs text-gray-500">after setup</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-medium text-orange-800 mb-2">Setup Fee Includes:</h5>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Complete integrated system setup (60-80 hours)</li>
                          <li>• CRM configuration and customization</li>
                          <li>• Campaign creation and optimization</li>
                          <li>• Staff training and onboarding</li>
                          <li>• Integration testing and quality assurance</li>
                          <li>• Documentation and process guides</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-4">Value Comparison Analysis:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-blue-200">
                        <th className="text-left p-2">Service Tier</th>
                        <th className="text-left p-2">Lead Gen Value</th>
                        <th className="text-left p-2">Operations Value</th>
                        <th className="text-left p-2">Separate Total</th>
                        <th className="text-left p-2">Integrated Price</th>
                        <th className="text-left p-2">Client Savings</th>
                      </tr>
                    </thead>
                    <tbody className="text-blue-700">
                      <tr className="border-b border-blue-100">
                        <td className="p-2 font-medium">Essential</td>
                        <td className="p-2">$1,000-$1,500</td>
                        <td className="p-2">$500-$700</td>
                        <td className="p-2">$1,500-$2,200</td>
                        <td className="p-2 font-semibold">$1,500-$2,200</td>
                        <td className="p-2 text-green-600 font-semibold">15%</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="p-2 font-medium">Growth</td>
                        <td className="p-2">$2,000-$3,500</td>
                        <td className="p-2">$1,100-$1,500</td>
                        <td className="p-2">$3,100-$5,000</td>
                        <td className="p-2 font-semibold">$3,100-$5,000</td>
                        <td className="p-2 text-green-600 font-semibold">20%</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Premium</td>
                        <td className="p-2">$4,500-$7,000+</td>
                        <td className="p-2">$2,000-$2,800+</td>
                        <td className="p-2">$6,500-$9,800+</td>
                        <td className="p-2 font-semibold">$5,500-$8,500+</td>
                        <td className="p-2 text-green-600 font-semibold">25%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Both Options Include:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <CheckCircle className="w-4 h-4 text-green-600 inline mr-2" />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div>
                    <CheckCircle className="w-4 h-4 text-green-600 inline mr-2" />
                    <span>Full account ownership</span>
                  </div>
                  <div>
                    <CheckCircle className="w-4 h-4 text-green-600 inline mr-2" />
                    <span>Integrated reporting dashboard</span>
                  </div>
                  <div>
                    <CheckCircle className="w-4 h-4 text-green-600 inline mr-2" />
                    <span>Unlimited staff access</span>
                  </div>
                  <div>
                    <CheckCircle className="w-4 h-4 text-green-600 inline mr-2" />
                    <span>Regular strategy sessions</span>
                  </div>
                  <div>
                    <CheckCircle className="w-4 h-4 text-green-600 inline mr-2" />
                    <span>Continuous optimization</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comprehensive FAQ */}
        <section id="faq" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Search className="w-6 h-6 mr-3" />
                Comprehensive FAQ - Integrated Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="integration">Integration</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="results">Results</TabsTrigger>
                </TabsList>
                
                <TabsContent value="general" className="space-y-4">
                  {[
                    {
                      q: "What makes your integrated approach different?",
                      a: "Unlike traditional agencies that only handle lead generation OR operations, we manage your complete customer journey from first click to loyal customer. This creates seamless data flow, better optimization, and significantly higher conversion rates."
                    },
                    {
                      q: "How quickly will I see results from the integrated system?",
                      a: "Most clients see initial improvements within 2-4 weeks as leads start flowing into optimized follow-up systems. Significant results typically occur within 60-90 days as we optimize the entire funnel. The integrated approach often shows 40-60% better results than separate systems."
                    },
                    {
                      q: "Do I need to use both services or can I choose just one?",
                      a: "While our integrated approach delivers the best results, you can start with just lead generation or operations. However, clients who use both services see 2-3x better results due to the seamless integration and data sharing between systems."
                    },
                    {
                      q: "What if my team isn't tech-savvy?",
                      a: "We handle all technical setup and provide comprehensive training for your team. Our systems are designed to be user-friendly, and we offer ongoing support to ensure your team is comfortable and productive with all tools."
                    },
                    {
                      q: "How do you ensure data privacy and security?",
                      a: "We use enterprise-grade security measures including encrypted data transmission, secure cloud storage, and compliance with GDPR, CCPA, and other privacy regulations. You maintain full ownership and control of all your data."
                    }
                  ].map((faq, index) => (
                    <Collapsible key={index}>
                      <CollapsibleTrigger className="flex items-center w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                        <ChevronDown className="w-4 h-4 mr-3" />
                        <span className="font-medium">{faq.q}</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 border-l-2 border-blue-200 ml-3 mt-2">
                        <p className="text-gray-600">{faq.a}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </TabsContent>

                <TabsContent value="integration" className="space-y-4">
                  {[
                    {
                      q: "How do the lead generation and operations systems work together?",
                      a: "Leads from your campaigns automatically flow into your CRM with complete attribution data. Our automation sequences immediately engage new leads while your team receives real-time notifications. This creates a seamless handoff that dramatically improves conversion rates."
                    },
                    {
                      q: "What happens to leads when they come in?",
                      a: "Leads are automatically captured, scored, and assigned to the appropriate team member. They immediately enter nurturing sequences via SMS, email, and other channels. Your team gets instant notifications with complete lead context and suggested next actions."
                    },
                    {
                      q: "Can you integrate with our existing tools?",
                      a: "Yes, we can integrate with most popular business tools including existing CRMs, accounting software, scheduling systems, and communication platforms. We'll assess your current tech stack and recommend the best integration approach."
                    },
                    {
                      q: "How do you track ROI across the entire customer journey?",
                      a: "We implement comprehensive tracking from first ad click through final purchase and beyond. Our dashboard shows complete attribution, customer lifetime value, and ROI calculations that account for both acquisition costs and operational efficiency gains."
                    }
                  ].map((faq, index) => (
                    <Collapsible key={index}>
                      <CollapsibleTrigger className="flex items-center w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                        <ChevronDown className="w-4 h-4 mr-3" />
                        <span className="font-medium">{faq.q}</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 border-l-2 border-blue-200 ml-3 mt-2">
                        <p className="text-gray-600">{faq.a}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </TabsContent>

                <TabsContent value="technical" className="space-y-4">
                  {[
                    {
                      q: "What CRM platform do you use and why?",
                      a: "We primarily use Go High Level (GHL) because it's specifically designed for agencies and offers the best integration capabilities with advertising platforms. It includes built-in SMS, email, calling, and automation features that eliminate the need for multiple separate tools."
                    },
                    {
                      q: "How do you handle data migration from our current systems?",
                      a: "We provide complete data migration services including contact lists, communication history, and business data. Our team handles the technical migration while ensuring zero data loss and minimal business disruption."
                    },
                    {
                      q: "What advertising platforms do you manage?",
                      a: "We manage campaigns across all major platforms including Google Ads (Search, Display, Shopping, YouTube), Facebook and Instagram, LinkedIn, Twitter, TikTok, Pinterest, and Snapchat. Platform selection depends on your target audience and business goals."
                    },
                    {
                      q: "How do you ensure system reliability and uptime?",
                      a: "We use enterprise-grade cloud platforms with 99.9% uptime guarantees, automated backups, and redundant systems. We also provide 24/7 monitoring and immediate support for any technical issues."
                    }
                  ].map((faq, index) => (
                    <Collapsible key={index}>
                      <CollapsibleTrigger className="flex items-center w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                        <ChevronDown className="w-4 h-4 mr-3" />
                        <span className="font-medium">{faq.q}</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 border-l-2 border-blue-200 ml-3 mt-2">
                        <p className="text-gray-600">{faq.a}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </TabsContent>

                <TabsContent value="pricing" className="space-y-4">
                  {[
                    {
                      q: "Why is integrated pricing lower than separate services?",
                      a: "Our integrated approach creates operational efficiencies - shared data, unified reporting, streamlined processes, and reduced overhead. We pass these savings to clients while delivering better results through seamless integration."
                    },
                    {
                      q: "What's included in the $5,000 setup fee for Flexible Plan?",
                      a: "The setup fee covers 60-80 hours of work including complete system integration, CRM customization, campaign setup, staff training, automation configuration, testing, and documentation. This represents significant value compared to hiring separate specialists."
                    },
                    {
                      q: "How do you justify the pricing compared to competitors?",
                      a: "Our pricing reflects the complete value of integrated services. When you compare our bundled pricing to hiring separate lead generation agencies ($2,000-$7,000+) plus CRM specialists ($1,000-$3,000+), our clients save 15-25% while getting better results."
                    },
                    {
                      q: "Are there any hidden costs or additional fees?",
                      a: "No hidden costs. Our pricing includes all management, optimization, reporting, and support. The only additional costs are your actual ad spend (which you control) and any premium software licenses if you choose enterprise-level features."
                    }
                  ].map((faq, index) => (
                    <Collapsible key={index}>
                      <CollapsibleTrigger className="flex items-center w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                        <ChevronDown className="w-4 h-4 mr-3" />
                        <span className="font-medium">{faq.q}</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 border-l-2 border-blue-200 ml-3 mt-2">
                        <p className="text-gray-600">{faq.a}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </TabsContent>

                <TabsContent value="results" className="space-y-4">
                  {[
                    {
                      q: "What kind of ROI can I expect from integrated services?",
                      a: "Integrated clients typically see 40-60% better results than those using separate services. Average ROAS ranges from 4:1 to 10:1 depending on industry, with additional operational efficiency gains of 20-40% in staff productivity and customer management."
                    },
                    {
                      q: "How do you measure success across both lead generation and operations?",
                      a: "We track comprehensive metrics including cost per lead, lead-to-customer conversion rates, customer lifetime value, operational efficiency, staff productivity, and overall business growth. Our dashboard provides complete visibility into every aspect of your growth engine."
                    },
                    {
                      q: "What if the integration doesn't work for my business?",
                      a: "We offer a 30-day money-back guarantee and will work closely with you to ensure success. In rare cases where integration isn't optimal, we can separate the services while maintaining data connectivity. Our goal is your success, not just service delivery."
                    },
                    {
                      q: "How do results compare to using separate vendors?",
                      a: "Integrated clients consistently outperform those using separate vendors by 40-60% due to better data flow, faster response times, unified optimization, and elimination of gaps between systems. Plus, they save 15-25% on costs and reduce management overhead significantly."
                    }
                  ].map((faq, index) => (
                    <Collapsible key={index}>
                      <CollapsibleTrigger className="flex items-center w-full text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                        <ChevronDown className="w-4 h-4 mr-3" />
                        <span className="font-medium">{faq.q}</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 border-l-2 border-blue-200 ml-3 mt-2">
                        <p className="text-gray-600">{faq.a}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* ROI Analysis */}
        <section id="roi-analysis" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <TrendingUp className="w-6 h-6 mr-3" />
                ROI Analysis & Integrated Case Studies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-800">E-commerce + Operations Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <strong>Challenge:</strong>
                        <p className="text-sm text-gray-600">High ad costs, poor lead follow-up, low customer retention</p>
                      </div>
                      <div>
                        <strong>Integrated Solution:</strong>
                        <p className="text-sm text-gray-600">Campaign optimization + automated CRM workflows + customer retention sequences</p>
                      </div>
                      <div>
                        <strong>Results:</strong>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 340% increase in ROAS (2.1:1 to 7.2:1)</li>
                          <li>• 85% improvement in lead-to-sale conversion</li>
                          <li>• 65% reduction in customer acquisition cost</li>
                          <li>• 45% increase in customer lifetime value</li>
                          <li>• 60% reduction in manual follow-up time</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-800">B2B SaaS + CRM Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <strong>Challenge:</strong>
                        <p className="text-sm text-gray-600">Generating leads but poor qualification and long sales cycles</p>
                      </div>
                      <div>
                        <strong>Integrated Solution:</strong>
                        <p className="text-sm text-gray-600">LinkedIn + Google Ads + automated lead scoring + sales pipeline management</p>
                      </div>
                      <div>
                        <strong>Results:</strong>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 220% increase in qualified leads</li>
                          <li>• 85% improvement in lead-to-customer conversion</li>
                          <li>• 40% reduction in sales cycle length</li>
                          <li>• 150% increase in average deal size</li>
                          <li>• 3-month payback period on marketing investment</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-purple-800">Local Service + Complete Automation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <strong>Challenge:</strong>
                        <p className="text-sm text-gray-600">Limited online presence, manual processes, poor customer experience</p>
                      </div>
                      <div>
                        <strong>Integrated Solution:</strong>
                        <p className="text-sm text-gray-600">Local SEO + Google Ads + automated booking + customer journey automation</p>
                      </div>
                      <div>
                        <strong>Results:</strong>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 400% increase in online leads</li>
                          <li>• 180% growth in monthly revenue</li>
                          <li>• 70% reduction in manual administrative work</li>
                          <li>• 95% increase in customer satisfaction scores</li>
                          <li>• 4.8-star average review rating</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Integrated ROI Calculation Framework</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-3">Investment Analysis</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Essential Plan (Integrated):</span>
                        <span>$1,500-$2,200/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Growth Plan (Integrated):</span>
                        <span>$3,100-$5,000/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Premium Plan (Integrated):</span>
                        <span>$5,500-$8,500+/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ad Spend:</span>
                        <span>$2,000-$50,000+/month</span>
                      </div>
                      <div className="flex justify-between font-medium border-t pt-2">
                        <span>Total Investment:</span>
                        <span>$3,500-$58,500+/month</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-3">Integrated Return Scenarios</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Conservative (4:1 ROAS):</span>
                        <span className="text-green-600 font-medium">300% ROI</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average (6:1 ROAS):</span>
                        <span className="text-green-600 font-medium">500% ROI</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Optimistic (10:1 ROAS):</span>
                        <span className="text-green-600 font-medium">900% ROI</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Operational Efficiency Gains:</span>
                        <span className="text-blue-600 font-medium">20-40%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cost Savings vs Separate:</span>
                        <span className="text-blue-600 font-medium">15-25%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-900 mb-2">Additional Benefits of Integration:</h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                    <div>
                      <strong>Data & Insights:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Complete customer journey visibility</li>
                        <li>• Unified reporting and analytics</li>
                        <li>• Better attribution and optimization</li>
                      </ul>
                    </div>
                    <div>
                      <strong>Operational Benefits:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Single vendor relationship</li>
                        <li>• Faster implementation and results</li>
                        <li>• Reduced management overhead</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team & Technology */}
        <section id="team" className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Users className="w-5 h-5 mr-3" />
                  Integrated Team Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Leadership Team</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Founder & CEO:</strong> 15+ years digital marketing + operations experience
                    </div>
                    <div>
                      <strong>Head of Lead Generation:</strong> 12+ years paid advertising and conversion optimization
                    </div>
                    <div>
                      <strong>Head of Operations:</strong> 10+ years CRM and business automation expertise
                    </div>
                    <div>
                      <strong>Integration Specialist:</strong> 8+ years connecting marketing and operations systems
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Specialized Teams</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div><strong>Campaign Managers:</strong> Certified in all major advertising platforms</div>
                    <div><strong>CRM Specialists:</strong> Go High Level certified with automation expertise</div>
                    <div><strong>Creative Team:</strong> Designers and copywriters for all channels</div>
                    <div><strong>Data Analysts:</strong> Specialists in integrated attribution and optimization</div>
                    <div><strong>Success Managers:</strong> Dedicated to client results and satisfaction</div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Certifications & Partnerships</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-blue-600 mr-2" />
                      <span>Google Ads Certified</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-blue-600 mr-2" />
                      <span>Facebook Marketing Partner</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-blue-600 mr-2" />
                      <span>Go High Level Certified</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-blue-600 mr-2" />
                      <span>HubSpot Partner</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Monitor className="w-5 h-5 mr-3" />
                  Integrated Technology Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Core Platforms</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div><strong>Go High Level:</strong> Primary CRM and automation platform</div>
                    <div><strong>Google Ads:</strong> Search, Display, Shopping, YouTube campaigns</div>
                    <div><strong>Facebook Business:</strong> Facebook, Instagram, Messenger advertising</div>
                    <div><strong>LinkedIn Campaign Manager:</strong> B2B lead generation and targeting</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Analytics & Tracking</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Google Analytics 4 with enhanced e-commerce</div>
                    <div>• Facebook Pixel and Conversions API</div>
                    <div>• Call tracking and attribution software</div>
                    <div>• Heat mapping and user behavior analysis</div>
                    <div>• Custom dashboard development</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Automation & Integration</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Zapier and custom API integrations</div>
                    <div>• Automated workflow builders</div>
                    <div>• Multi-channel communication systems</div>
                    <div>• AI chatbot and voice agent platforms</div>
                    <div>• Payment processing and invoicing systems</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Reporting & Optimization</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Real-time performance dashboards</div>
                    <div>• Automated report generation</div>
                    <div>• A/B testing and optimization tools</div>
                    <div>• Predictive analytics and forecasting</div>
                    <div>• ROI tracking and attribution modeling</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Phone className="w-5 h-5 mr-3" />
                Contact & Implementation Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-500" />
                      <span>hello@growthaagency.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-500" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      <span>123 Business St, City, State</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Initial Consultation Process</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• 90-minute integrated strategy session (Free)</div>
                    <div>• Business goal and current system assessment</div>
                    <div>• Lead generation and operations audit</div>
                    <div>• Integration opportunity identification</div>
                    <div>• Custom integrated proposal development</div>
                    <div>• ROI projection and timeline planning</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Implementation Timeline</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Week 1-2: Discovery and integration planning</div>
                    <div>• Week 2-4: System setup and integration</div>
                    <div>• Week 4-6: Launch and initial optimization</div>
                    <div>• Week 6+: Scale and continuous improvement</div>
                    <div>• 30-day review and strategy refinement</div>
                    <div>• Quarterly business planning sessions</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-3">Success Guarantee</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                  <div>
                    <strong>30-Day Money-Back Guarantee:</strong>
                    <p className="mt-1">If you're not satisfied with our integrated approach within 30 days, we'll refund your management fee.</p>
                  </div>
                  <div>
                    <strong>Performance Commitment:</strong>
                    <p className="mt-1">We guarantee measurable improvements in both lead generation and operational efficiency within 90 days.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Digital Marketing & Operations Agency</h3>
            <p className="text-gray-400 mb-4">Comprehensive Integrated Services Reference & Documentation</p>
            <div className="text-sm text-gray-500">
              <p>This document contains confidential and proprietary information.</p>
              <p>For internal use only. Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

