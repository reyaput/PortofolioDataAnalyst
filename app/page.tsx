import { client } from "@/lib/sanity"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import ProjectsGrid from "@/components/projects-grid"
import TechStack from "@/components/tech-stack"
import Footer from "@/components/footer"

// 1. Definisikan Tipe Data (Interface)
// Ini agar TypeScript mengerti bentuk data dari Sanity
export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  impact: string;
  tags: string[];
  projectLink: string;
}

export interface Experience {
  _id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: any;
  isEducation: boolean;
}

// 2. Fungsi Fetch Data dari Sanity
async function getData() {
  const projectsQuery = `*[_type == "project"] | order(publishedAt desc) {
    _id, title, slug, mainImage, impact, tags, projectLink
  }`;
  
  const experienceQuery = `*[_type == "experience"] | order(startDate desc) {
    _id, role, company, startDate, endDate, description, isEducation
  }`;

  const projects = await client.fetch(projectsQuery);
  const experience = await client.fetch(experienceQuery);

  return { projects, experience };
}

export const metadata = {
  title: "Digital Marketing & Data Analyst Portfolio",
  description: "Digital Marketing & Data Enthusiast - Professional Portfolio",
}

// 3. Komponen Utama (Async)
export default async function Page() {
  // Panggil data disini
  const { projects, experience } = await getData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <Hero />
      
      {/* Kirim data experience ke komponen About */}
      <About id="experience" data={experience} />
      
      <TechStack />
      
      {/* Kirim data projects ke komponen ProjectsGrid */}
      <ProjectsGrid data={projects} />
      
      <Footer />
    </div>
  )
}