import { motion } from 'motion/react';
import {
  FlaskConical,
  GraduationCap,
  Microscope,
  Leaf,
  Mail,
  Globe,
  ChevronDown,
  BookOpen,
  Activity,
  Atom,
  TestTubeDiagonal,
  Languages,
  ArrowRight,
  Dna,
  Layers,
  Cpu,
  Shield
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-200 selection:text-teal-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <Atom className="w-6 h-6 text-teal-600" />
            <span>M.L. Daikha</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollTo('home')} className="hover:text-teal-600 transition-colors">Home</button>
            <button onClick={() => scrollTo('education')} className="hover:text-teal-600 transition-colors">Education</button>
            <button onClick={() => scrollTo('passion')} className="hover:text-teal-600 transition-colors">Chemistry of Life</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-teal-600 transition-colors">Projects</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-teal-600 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-teal-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-8">
              <FlaskConical className="w-4 h-4" />
              Aspiring Chemical Engineer
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Mohammed Laid <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Daikha</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              A highly motivated and ambitious student pursuing a Bachelor's in Chemical Engineering in Romania. Committed to scientific advancement and engineering biological systems to solve global challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollTo('passion')}
                className="px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all flex items-center gap-2"
              >
                Discover My Vision <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollTo('education')}
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-all"
              >
                View Academic Profile
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-white px-6 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Academic Foundation</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">A rigorous technical base preparing me for advanced engineering studies.</p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-12">
            <motion.div 
              className="md:col-span-5 bg-slate-50 p-8 rounded-2xl border border-slate-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Baccalaureate Diploma</h3>
              <p className="text-lg text-blue-600 font-medium mb-6">Process Engineering</p>
              
              <div className="mb-8">
                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">GPA</div>
                <div className="text-4xl font-extrabold text-slate-900">8.31<span className="text-xl text-slate-400 font-medium">/10</span></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Languages className="w-5 h-5 text-slate-400" />
                  <span className="text-slate-700 font-medium">Linguistic Proficiency</span>
                </div>
                <ul className="space-y-2 text-slate-600 ml-8">
                  <li><strong className="text-slate-800">Arabic</strong> - Native</li>
                  <li><strong className="text-slate-800">English</strong> - Fluent</li>
                  <li><strong className="text-slate-800">French</strong> - Fluent</li>
                  <li><strong className="text-slate-800">Romanian</strong> - Basic</li>
                  <li><strong className="text-slate-800">Russian</strong> - Basic</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="md:col-span-7 flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Technical Competencies</h3>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                My foundational studies in Process Engineering have equipped me with a robust analytical mindset and a deep understanding of core chemical engineering principles, ensuring my readiness for a demanding Bachelor's program.
              </p>
              
              <div className="space-y-6">
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Material and Energy Balances</h4>
                    <p className="text-slate-600">Mastery of the fundamental conservation laws essential for analyzing and designing complex chemical processes.</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <TestTubeDiagonal className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Reactor Design</h4>
                    <p className="text-slate-600">Understanding the kinetics and thermodynamics required to conceptualize efficient chemical reactors.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Industrial Processes</h4>
                    <p className="text-slate-600">Knowledge of large-scale manufacturing techniques, focusing on optimization, safety, and scalability.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section id="passion" className="py-24 px-6 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-400 via-slate-900 to-slate-900"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/50 text-teal-300 text-sm font-semibold mb-6 border border-teal-800">
                <Microscope className="w-4 h-4" />
                Vision & Motivation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The Chemistry <br/>
                <span className="text-teal-400">of Life</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                My deepest academic passion lies at the intersection of chemical engineering and biological systems. I am driven by the desire to understand, model, and engineer the fundamental processes of life.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                By connecting core chemical engineering principles to <strong className="text-white">Biochemical Engineering</strong> and <strong className="text-white">Biotechnology</strong>, I aim to contribute to a future where engineering solves our most pressing biological challenges.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                I have specifically chosen <strong className="text-white">Romania</strong> as my ideal study destination due to its rapidly growing strength, academic excellence, and emerging innovations in <strong className="text-white">pharmaceutical research</strong> and <strong className="text-white">biochemical sciences</strong>. By deepening our understanding of the fundamental processes of life, I believe we can revolutionize human health. I am particularly inspired to contribute to:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-slate-700 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                  <Shield className="w-6 h-6 text-teal-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">Advanced Therapeutics</h4>
                  <p className="text-sm text-slate-400">Engineering virus-like particles for next-gen vaccines and targeted cancer delivery systems.</p>
                </div>
                <div className="border border-slate-700 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                  <Layers className="w-6 h-6 text-blue-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">Tissue Engineering</h4>
                  <p className="text-sm text-slate-400">Developing innovative hydrogels for tissue scaffolding and human organ replacements.</p>
                </div>
                <div className="border border-slate-700 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                  <Dna className="w-6 h-6 text-purple-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">Cellular Biophysics</h4>
                  <p className="text-sm text-slate-400">Modeling DNA processes and protein self-assembly to understand aging and disease progression.</p>
                </div>
                <div className="border border-slate-700 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                  <Cpu className="w-6 h-6 text-emerald-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">Biosensors & Diagnostics</h4>
                  <p className="text-sm text-slate-400">Designing flexible organic electronics and sensor arrays for early disease detection.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 flex items-center justify-center"
            >
               {/* Abstract representation of biology + engineering */}
               <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
               <div className="relative z-10 text-center p-8">
                 <FlaskConical className="w-24 h-24 text-teal-400 mx-auto mb-6 opacity-80" />
                 <div className="text-2xl font-light tracking-widest text-slate-300 uppercase">Engineering</div>
                 <div className="text-3xl font-bold text-white mt-2">Biological Systems</div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Conceptual Projects & Analysis</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Demonstrating analytical thinking and the application of engineering principles to real-world challenges.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                <a href="https://ais-dev-w6daqpptv22x3c456crffc-178803097479.europe-west2.run.app" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors underline decoration-2 underline-offset-4">
                  Sustainable Bio-reactor Design
                </a>
              </h3>
              <div className="text-sm font-medium text-teal-600 mb-4 uppercase tracking-wider">Conceptual Study</div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A theoretical framework for designing a bio-reactor optimized for the efficient production of eco-friendly biochemicals. This concept applies principles of mass transfer, fluid dynamics, and reactor kinetics to maximize yield while minimizing environmental impact.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Mass Transfer</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Sustainability</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Kinetics</span>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                <a href="https://ais-pre-yimoz6jlmsovneccnolsxe-178803097479.europe-west2.run.app" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors underline decoration-2 underline-offset-4">
                  Industrial Process Optimization
                </a>
              </h3>
              <div className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wider">Healthcare Innovation</div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                An analytical proposal for optimizing a pharmaceutical manufacturing process. The focus is on reducing chemical waste and improving energy efficiency through rigorous material and energy balance calculations, highlighting a commitment to sustainable medicine.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Energy Balances</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Optimization</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Healthcare</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready for the Next Step</h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              I am eager to bring my dedication, analytical skills, and forward-thinking mindset to a rigorous Bachelor's program in Chemical Engineering in Romania.
            </p>
            
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-8 h-8" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Get in Touch</div>
                <a href="mailto:daikhamohammedlaid@gmail.com" className="text-2xl font-bold text-slate-900 hover:text-teal-600 transition-colors">
                  daikhamohammedlaid@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-50 border-t border-slate-200">
        <p>© {new Date().getFullYear()} Mohammed Laid Daikha. Scholarship Application Portfolio.</p>
      </footer>
    </div>
  );
}
