import Link from 'next/link';
import Footer from "@/components/Footer";

const showcaseProjects = [
  { name: 'Sunset Residency', slug: 'sunset-residency' },
  { name: 'Green Valley Villas', slug: 'green-valley-villas' },
  { name: 'Metro Heights', slug: 'metro-heights' },
  { name: 'Riverside Apartments', slug: 'riverside-apartments' },
  { name: 'Sky Towers', slug: 'sky-towers' },
  { name: 'Heritage Bungalows', slug: 'heritage-bungalows' },
];

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col font-sans">
      <div className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-16 md:py-24 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center">
          <Link href="/" className="text-white/50 hover:text-white transition-colors text-sm mb-4 border border-white/10 rounded-full px-4 py-1.5 hover:bg-white/5">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 pb-2">
            Featured projects
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl">
            See how Triayam brings buildings to life before construction
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-8">
          {showcaseProjects.map((project) => (
            <div 
              key={project.slug}
              className="flex flex-col bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 shadow-2xl shadow-black/50"
            >
              {/* Image Placeholder */}
              <div className="w-full h-56 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] relative p-4 flex items-center justify-center border-b border-white/5">
                <svg className="w-16 h-16 text-white/5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-6 flex-1 justify-between bg-gradient-to-b from-[#0f0f0f] to-[#050505]">
                <div>
                  <span className="inline-block px-2.5 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70 mb-3 font-medium uppercase tracking-wider">
                    Real Estate
                  </span>
                  <h3 className="text-2xl font-semibold text-white/90 group-hover:text-white transition-colors">{project.name}</h3>
                </div>
                
                <Link
                  href={`/project/${project.slug}`}
                  className="w-full py-3 px-4 bg-white/10 hover:bg-white text-white hover:text-black font-semibold rounded-xl text-center tracking-tight transition-all active:scale-[0.98] border border-white/10 hover:border-white"
                >
                  View in 3D
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
