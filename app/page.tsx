'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Linkedin,
  Mail,
  BarChart3,
  BrainCircuit,
  Search,
  Factory,
} from 'lucide-react'

const industries = [
  {
    title: 'Solar Energy',
    desc: 'SEO campaigns, LinkedIn branding, renewable energy awareness, and industrial lead generation.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Industrial Filtration',
    desc: 'B2B technical marketing, filtration process positioning, and industrial branding strategies.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Architecture & BIM',
    desc: 'Technical visualization marketing and BIM branding for engineering businesses.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'FinTech',
    desc: 'Performance-focused campaigns, SEO optimization, and engagement systems.',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop',
  },
]

const skills = [
  'AI SEO',
  'Technical SEO',
  'LinkedIn Marketing',
  'B2B Lead Generation',
  'Zoho CRM',
  'Automation',
  'Content Strategy',
  'Google Analytics',
  'Canva',
  'WordPress',
  'Looker Studio',
  'AI Workflows',
]

const projects = [
  {
    title: 'Trinity Filtration Technologies',
    points: [
      'Managed full-funnel B2B marketing',
      'Implemented SEO + LinkedIn strategies',
      'Created technical brochures & 3D visuals',
      'Handled Zoho CRM lead lifecycle',
    ],
  },
  {
    title: 'Variate Solar',
    points: [
      'Built renewable energy awareness campaigns',
      'Managed local SEO optimization',
      'Created solar educational content',
      'Developed WhatsApp chatbot automation',
    ],
  },
  {
    title: 'Automation & AI Systems',
    points: [
      'Created image renaming automation for 10,000+ assets',
      'Implemented AI workflow systems',
      'Built reporting dashboards',
      'Improved operational efficiency',
    ],
  },
]

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[180px]" />
      </div>

      {/* Navbar */}
      <nav className="w-full px-6 md:px-16 py-6 border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-black/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tight">
            PRAJWAL<span className="text-cyan-400">.</span>
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[0.4em] text-cyan-400 text-xs mb-6"
            >
              AI Driven Marketing Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8"
            >
              B2B AI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Marketing
              </span>
              Specialist
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-10"
            >
              Enhancing business performance through SEO, AI workflows,
              technical branding, automation systems, and industrial B2B
              marketing.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                Explore Projects <ArrowRight size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/prajwalbhandarkardigitalmarketer/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30 rounded-[40px]" />

            <div className="relative bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[40px] p-6">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                alt="Marketing workspace"
                className="rounded-[30px] h-[600px] object-cover w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 md:px-16 py-32 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black mb-8">About Me</h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              I combine engineering knowledge with AI-driven marketing systems
              to help industrial and technical companies grow digitally. My
              expertise includes SEO, CRM automation, AI workflows, LinkedIn
              marketing, technical content creation, and B2B lead generation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <BrainCircuit className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">AI Marketing</h3>
              <p className="text-gray-400">
                AI-driven SEO systems and automation workflows.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <Search className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">SEO Strategy</h3>
              <p className="text-gray-400">
                Technical SEO and performance optimization.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <Factory className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">B2B Branding</h3>
              <p className="text-gray-400">
                Industrial and engineering-focused branding systems.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              <BarChart3 className="text-cyan-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3">Analytics</h3>
              <p className="text-gray-400">
                ROI reporting, dashboards, and growth tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 md:px-16 py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16">
            Industries Worked In
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((item, index) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-[35px] overflow-hidden"
              >
                <img
                  src={item.image}
                  className="h-[320px] w-full object-cover"
                  alt={item.title}
                />

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 md:px-16 py-32 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Featured Projects</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[35px] p-8"
              >
                <h3 className="text-3xl font-bold mb-8">
                  {project.title}
                </h3>

                <div className="space-y-4">
                  {project.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="px-6 md:px-16 py-32 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Skills & Expertise</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-4 rounded-full bg-white/[0.03] border border-white/10 hover:border-cyan-400 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 md:px-16 py-32 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl font-black mb-8">
            Let’s Build Something Powerful
          </h2>

          <p className="text-gray-400 text-xl mb-12">
            Helping industrial brands scale with AI-powered digital marketing.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:prajwalbhandarkar095@gmail.com"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2"
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/prajwalbhandarkardigitalmarketer/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
