import Navbar from "./components/Navbar";
import bg from "../assets/download.jpg";
import Image from "next/image";
import Link from "next/link";
import ThreeDCardDemo from "./components/3d-card-demo";

export default function Home() {
  const courses = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Full Stack Web Development",
      subtitle: "Master modern web technologies and build real-world applications",
      enrollLink: "https://your-platform.com/web-dev",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Artificial Intelligence Fundamentals",
      subtitle: "Learn the core concepts of AI and intelligent systems",
      enrollLink: "https://your-platform.com/ai-fundamentals",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Robotics Engineering",
      subtitle: "Design, build and program autonomous robotic systems",
      enrollLink: "https://your-platform.com/robotics",
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "STEM Education Program",
      subtitle: "Comprehensive Science, Technology, Engineering & Mathematics curriculum",
      enrollLink: "https://your-platform.com/stem-program",
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Machine Learning Mastery",
      subtitle: "Build and deploy intelligent ML models for real-world problems",
      enrollLink: "https://your-platform.com/machine-learning",
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Deep Learning & Neural Networks",
      subtitle: "Advanced techniques in deep learning and neural network architectures",
      enrollLink: "https://your-platform.com/deep-learning",
    },
    {
      id: 7,
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Computer Vision & AI",
      subtitle: "Teach machines to see and interpret visual information",
      enrollLink: "https://your-platform.com/computer-vision",
    },
    {
      id: 8,
      imageUrl: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      title: "Autonomous Systems & Drones",
      subtitle: "Program self-navigating systems and drone technology",
      enrollLink: "https://your-platform.com/autonomous-systems",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-[#0a0a0a] text-gray-100 selection:bg-emerald-500/30 selection:text-white">
      {/* STICKY NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative w-full h-screen flex items-center justify-start pl-16"
        style={{
          backgroundImage: `url('/hero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]"></div>

        {/* Animated background accents */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-start pl-12 md:pl-20 max-w-3xl">
          {/* ANIMATED TITLE: Glowing gradient text with animated border */}
          <div className="relative mb-6">
            <h1 className="font-display text-6xl md:text-7xl font-black leading-tight bg-gradient-to-r from-emerald-400 via-white to-emerald-300 bg-clip-text text-transparent 
                          animate-gradient-flow drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Unlock Super Powers of Machines
            </h1>
            <div className="absolute -inset-1 rounded-lg ring-1 ring-emerald-500/20 animate-pulse [animation-duration:3s] pointer-events-none"></div>
          </div>
          
          {/* ANIMATED SUBTITLE: Glowing text with expand line */}
          <div className="mb-8 ml-4">
            <p className="text-xl md:text-2xl text-emerald-300 tracking-wider font-medium 
                          animate-glow-pulse">
              get ahead of 84% people
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-transparent mt-3 rounded-full 
                            animate-expand-line"></div>
          </div>

          {/* CV Image with glow effect */}
          <div className="mb-6 ml-20 group transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <Image
                src={bg}
                alt="AI CV Vision"
                className="opacity-95 rounded-lg ring-1 ring-emerald-500/20 shadow-2xl shadow-emerald-500/20"
                width={320}
                height={220}
                priority
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-emerald-500/10 to-transparent"></div>
            </div>
          </div>

          {/* ANIMATED DESCRIPTION: Subtle glow */}
          <p className="text-lg text-gray-400 ml-20 max-w-md leading-relaxed 
                        animate-glow-soft">
            A new perspective where machines interpret reality.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Video Component Area */}
      <section className="relative w-full py-28 bg-gradient-to-b from-[#0a0a0a] to-[#081008] overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          {/* ANIMATED HEADING: Gradient text with animated underline */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-white to-emerald-300 bg-clip-text text-transparent 
                          animate-gradient-flow">
              Impossible by Humans? Now done by Machines
            </h2>
            <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full 
                            animate-pulse [animation-duration:2s]"></div>
          </div>

          {/* Glassmorphism video container */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 ring-1 ring-emerald-500/20 shadow-2xl shadow-black/50">
            {/* <VideoComponent /> */}
            <div className="aspect-video bg-black/40 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Video placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Background Image + Buttons */}
      <section
        className="relative w-full min-h-[80vh] flex flex-col justify-center items-start px-12 md:px-20 "
        style={{
          backgroundImage: `url('/Ultron-banenr.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-sm "></div>

        {/* Content */}
        <div className="relative z-10 max-w-xl pl-16">
          {/* ANIMATED TITLE: Glowing gradient */}
          <h2 className="font-display text-5xl md:text-6xl font-black mb-4 leading-tight 
                        bg-gradient-to-r from-emerald-400 via-white to-emerald-300 bg-clip-text text-transparent 
                        animate-gradient-flow drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            Make Ultron an Ally
          </h2>
          
          {/* ANIMATED DESCRIPTION: Glowing text */}
          <p className="text-lg text-gray-300 mb-10 max-w-md leading-relaxed 
                        animate-glow-soft">
            Technology designed to elevate human potential.
          </p>
          
          {/* Premium buttons */}
          <div className="flex gap-6">
            <button className="group relative bg-gradient-to-r from-emerald-500 to-emerald-400 px-8 py-4 rounded-xl text-black font-bold text-lg transition-all duration-300 hover:from-emerald-400 hover:to-emerald-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/30">
              <span className="relative z-10">Yes</span>
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/20 group-hover:ring-white/40 transition"></div>
            </button>
            
            <Link 
              href="https://www.google.com/search?q=Depression "
              className="group relative px-8 py-4 rounded-xl text-lg font-semibold text-gray-300 transition-all duration-300 hover:text-white hover:-translate-y-1"
            >
              <span className="relative z-10">No</span>
              <div className="absolute inset-0 rounded-xl border-2 border-gray-600 group-hover:border-emerald-500 transition-all"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Courses */}
      <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-6">
          {/* ANIMATED HEADING: Glowing gradient with animated border */}
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold 
                          bg-gradient-to-r from-emerald-400 via-white to-emerald-300 bg-clip-text text-transparent 
                          animate-gradient-flow drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              Courses We Provide
            </h2>
            <div className="h-1 w-40 mx-auto mt-6 bg-gradient-to-r from-emerald-500 to-transparent rounded-full 
                            animate-expand-line [animation-delay:0.5s]"></div>
          </div>

          {/* Premium grid with glass cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {courses.map((c) => (
              <div 
                key={c.id} 
                className="group transition-all duration-300 hover:-translate-y-3"
              >
                <ThreeDCardDemo 
                  title={c.title} 
                  subtitle={c.subtitle} 
                  enrollLink={c.enrollLink} 
                  imageUrl={c.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Global Presence / Reviews / Trusted By */}
      <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="relative max-w-6xl mx-auto text-center px-6">
          {/* ANIMATED HEADING: Strong glow effect */}
          <div className="mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold 
                          bg-gradient-to-r from-emerald-400 via-white to-emerald-300 bg-clip-text text-transparent 
                          animate-gradient-flow drop-shadow-[0_0_35px_rgba(16,185,129,0.4)]">
              Trusted Across The Globe
            </h2>
            <div className="h-1 w-48 mx-auto mt-6 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full 
                            animate-pulse [animation-duration:3s]"></div>
          </div>

          {/* ANIMATED DESCRIPTION: Soft glow */}
          <p className="text-xl text-gray-400 mb-20 max-w-2xl mx-auto leading-relaxed 
                        animate-glow-soft">
            Students from 40+ countries, thousands of reviews, and a growing community.
          </p>

          {/* Premium stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-10">
            <div className="group transition-transform duration-300 hover:-translate-y-2">
              <div className="inline-block">
                <h3 className="font-display text-6xl font-black 
                              bg-gradient-to-r from-emerald-400 via-white to-emerald-500 bg-clip-text text-transparent 
                              drop-shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-glow-pulse">
                  40+
                </h3>
                <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500 to-transparent mt-2 rounded-full 
                                animate-expand-line"></div>
              </div>
              <p className="text-gray-400 mt-4 tracking-wider uppercase text-sm">Countries</p>
            </div>
            <div className="group transition-transform duration-300 hover:-translate-y-2">
              <div className="inline-block">
                <h3 className="font-display text-6xl font-black 
                              bg-gradient-to-r from-emerald-400 via-white to-emerald-500 bg-clip-text text-transparent 
                              drop-shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-glow-pulse [animation-delay:0.3s]">
                  10k+
                </h3>
                <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500 to-transparent mt-2 rounded-full 
                                animate-expand-line [animation-delay:0.3s]"></div>
              </div>
              <p className="text-gray-400 mt-4 tracking-wider uppercase text-sm">Reviews</p>
            </div>
            <div className="group transition-transform duration-300 hover:-translate-y-2">
              <div className="inline-block">
                <h3 className="font-display text-6xl font-black 
                              bg-gradient-to-r from-emerald-400 via-white to-emerald-500 bg-clip-text text-transparent 
                              drop-shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-glow-pulse [animation-delay:0.6s]">
                  100+
                </h3>
                <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500 to-transparent mt-2 rounded-full 
                                animate-expand-line [animation-delay:0.6s]"></div>
              </div>
              <p className="text-gray-400 mt-4 tracking-wider uppercase text-sm">Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacer with premium gradient */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      
    </div>
  );
}