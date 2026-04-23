interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-32 border-t border-black/[0.03] bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-32">
          <div className="md:col-span-6">
            <button 
              onClick={() => handleNav('home')}
              className="group flex items-center gap-4 mb-10 transition-all duration-300 hover:scale-105 bg-transparent border-none cursor-pointer p-0 text-left"
            >
              <img 
                src="/logo.png" 
                alt="CKR Logo" 
                className="w-16 h-16 object-contain" 
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-3xl font-display font-black tracking-tighter text-slate-900 leading-none">
                  CKR<span className="text-brand-orange"> Creatives</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mt-2">
                  Dubai Digital
                </span>
              </div>
            </button>
            <p className="text-slate-500 max-w-sm mb-12 text-lg leading-relaxed font-medium">
              Architecting high-performance digital assets for Dubai’s most ambitious high-growth brands.
            </p>
            <div className="flex gap-8">
              {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
                <a key={social} href="#" className="link-underline text-[11px] font-black text-slate-500 hover:text-black transition-colors uppercase tracking-[0.2em]">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-black mb-10 uppercase text-[11px] tracking-[0.25em] text-slate-300">Exploration</h4>
            <ul className="space-y-6">
              {['Services', 'Work', 'About'].map(item => (
                <li key={item}>
                  <button 
                    onClick={() => handleNav(item.toLowerCase())} 
                    className="group flex items-center gap-2 hover:text-brand-orange transition-all duration-300 bg-transparent border-none cursor-pointer p-0 font-display font-black text-2xl tracking-tighter text-slate-900"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-brand-orange transition-all duration-300" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-black mb-10 uppercase text-[11px] tracking-[0.25em] text-slate-300">Command Center</h4>
            <ul className="space-y-6">
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="group flex items-center gap-2 hover:text-brand-orange transition-all duration-300 bg-transparent border-none cursor-pointer p-0 font-display font-black text-2xl tracking-tighter text-slate-900"
                >
                  <span className="w-0 group-hover:w-4 h-[1px] bg-brand-orange transition-all duration-300" />
                  Contact
                </button>
              </li>
              <li className="text-xl font-display font-black tracking-tighter text-slate-400">Privacy</li>
              <li className="text-xl font-display font-black tracking-tighter text-slate-400">Terms</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-black/[0.03]">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} CKR Creatives. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
             <span className="text-[10px] text-slate-900 font-black uppercase tracking-[0.3em]">Network Operational: Global</span>
          </div>
        </div>
      </div>

      {/* Extreme background text for depth */}
      <div className="absolute -bottom-24 -right-12 text-[20rem] font-display font-black text-black/[0.01] pointer-events-none select-none tracking-tighter">
        CKR
      </div>
    </footer>
  );
}
