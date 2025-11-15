import Navbar from "./components/Navbar";
import bg from "../assets/download.jpg"
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
    enrollLink: "https://your-platform.com/web-dev"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Artificial Intelligence Fundamentals",
    subtitle: "Learn the core concepts of AI and intelligent systems",
    enrollLink: "https://your-platform.com/ai-fundamentals"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Robotics Engineering",
    subtitle: "Design, build and program autonomous robotic systems",
    enrollLink: "https://your-platform.com/robotics"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "STEM Education Program",
    subtitle: "Comprehensive Science, Technology, Engineering & Mathematics curriculum",
    enrollLink: "https://your-platform.com/stem-program"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Machine Learning Mastery",
    subtitle: "Build and deploy intelligent ML models for real-world problems",
    enrollLink: "https://your-platform.com/machine-learning"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Deep Learning & Neural Networks",
    subtitle: "Advanced techniques in deep learning and neural network architectures",
    enrollLink: "https://your-platform.com/deep-learning"
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Computer Vision & AI",
    subtitle: "Teach machines to see and interpret visual information",
    enrollLink: "https://your-platform.com/computer-vision"
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    title: "Autonomous Systems & Drones",
    subtitle: "Program self-navigating systems and drone technology",
    enrollLink: "https://your-platform.com/autonomous-systems"
  }]
  return (
    <div className="w-full overflow-x-hidden bg-black text-white">

      {/* STICKY NAVBAR */}
      
       <Navbar/>
      

      {/* HERO SECTION */}
      <section
        className="relative w-full h-screen flex items-center justify-start "
        style={{
          backgroundImage: `url('/hero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Actual Hero Content */}
        <div className="relative z-10 flex flex-col items-start pl-12 max-w-xl">

          {/* TEXT ABOVE CV IMAGE */}
          <h1 className="text-6xl font-bold mb-4 ml-20">
           Unlock Super Powers of Machines
          </h1>
		  <h2 className="mb-4 ml-4 ml-25">  get ahead of 84% people</h2>

          {/* CV IMAGE */}
         <Image
  src={bg}
  alt="AI CV Vision"
  className="opacity-95 mb-6 ml-20"
  width={288} // 72 * 4 = 288 (since Tailwind w-72 = 288px)
  height={200} // You should set appropriate height based on your image aspect ratio
  priority={false} // Set to true if it's above the fold
/>

          {/* TEXT BELOW CV IMAGE */}
          <p className="text-lg opacity-80 ml-20">
            A new perspective where machines interpret reality.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Video Component Area */}
      <section className="w-full py-24 bg-[#002d00]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Impossible by Humans ? now done by Machines
          </h2>

          {/* Your video rendering component */}
          <div>
            {/* <VideoComponent /> */}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Background Image + Buttons */}
      <section
        className="relative w-full min-h-[70vh] max-h-screen flex flex-col justify-center items-start px-12"
        style={{
          backgroundImage: `url('/Ultron-banenr.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-xl ml-20"  >
          <h2 className="text-5xl font-bold mb-2">Make Ultron an Ally</h2>
          <p className="text-lg opacity-80 mb-8">
            Technology designed to elevate human potential.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-500 px-6 py-3 rounded-lg text-black font-bold hover:bg-green-400 transition">
              Yes
            </button>
            <button className="border border-green-500 px-6 py-3 rounded-lg transition">
				<Link href="https://www.google.com/search?q=Depression" >
              No
				</Link>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Courses */}
      <section className="py-28 bg-black">
        <h2 className="text-4xl font-bold text-center mb-16">
          Courses We Provide
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
			
          {courses.map((c) => (
            <ThreeDCardDemo title={c.title} key ={c.id} subtitle={c.subtitle} enrollLink={c.enrollLink} imageUrl={c.imageUrl}    />
          ))}
        </div>
      </section>

      {/* SECTION 5 — Global Presence / Reviews / Trusted By */}
      <section className="py-32 bg-[#020202]">
        <div className="max-w-6xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-12">
            Trusted Across The Globe
          </h2>

          <p className="text-lg opacity-80 mb-12">
            Students from 40+ countries, thousands of reviews, and a growing community.
          </p>

          {/* Example stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div>
              <h3 className="text-5xl font-bold text-green-400">40+</h3>
              <p className="opacity-70">Countries</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-green-400">10k+</h3>
              <p className="opacity-70">Reviews</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-green-400">100+</h3>
              <p className="opacity-70">Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
