import BuildingViewer from "@/components/BuildingViewer";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  // Await the params to support Next.js 15/16 App Router requirements
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  
  // Convert slug back into a title case project name
  const projectName = rawSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main className="relative w-full h-[100dvh] overflow-hidden bg-[#1a1a2e]">
      {/* Back button */}
      <div className="absolute top-6 right-6 z-20">
        <Link 
          href="/" 
          className="text-white/60 hover:text-white transition-colors text-sm bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10"
        >
          Close Viewer
        </Link>
      </div>

      {/* R3F BuildingViewer full screen */}
      <div className="absolute inset-0 z-0">
        <BuildingViewer />
      </div>

      {/* Top Left Project Title Overlay */}
      <div className="absolute top-6 left-6 z-10 pointer-events-none text-left">
        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {projectName}
        </h1>
        <p className="text-white/80 text-sm md:text-lg mt-1 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          Interactive 3D Walkthrough
        </p>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <div className="w-full bg-[#0a0a0a]/60 backdrop-blur-lg border-t border-white/10 px-6 py-4 flex flex-row items-center justify-between md:justify-center md:gap-12 pb-safe">
          
          <div className="hidden md:block">
            <h3 className="text-white font-medium text-lg">Interested in {projectName}?</h3>
            <p className="text-white/60 text-sm">Secure your spot before construction begins.</p>
          </div>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-[0_4px_14px_rgba(37,211,102,0.4)] pointer-events-auto"
          >
            <BsWhatsapp className="text-xl" />
            Register Interest
          </a>
        </div>
      </div>
    </main>
  );
}
