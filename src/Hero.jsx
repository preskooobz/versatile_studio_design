import { useState } from 'react';
import SoftAurora from './SoftAurora';
import TextType from './TextType';
<div style={{ height: '600px', position: 'relative' }}>

</div>
const Hero = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="w-screen min-h-screen relative overflow-hidden bg-slate-950">
			<div className="pointer-events-none absolute inset-0 z-0 opacity-70">
				<SoftAurora
                speed={0.6}
                scale={1.5}
                brightness={1}
                color1="#f7f7f7"
                color2="#e100ff"
                noiseFrequency={2.5}
                noiseAmplitude={1}
                bandHeight={0.5}
                bandSpread={1}
                octaveDecay={0.1}
                layerOffset={0}
                colorSpeed={1}
                enableMouseInteraction
                mouseInfluence={0.25}
                />
			</div>

			{/* Navigation */}
			<nav className="absolute top-0 left-0 right-0 z-[2000] px-6 md:px-10 py-6 flex items-center justify-between">
				<div className="text-white font-bold text-xl">VS</div>
				
				{/* Desktop Menu */}
				<ul className="hidden md:flex gap-8 items-center text-white/80 text-sm">
					<li className="hover:text-white transition-colors cursor-pointer">Nos services</li>
					<li className="hover:text-white transition-colors cursor-pointer">À propos</li>
					<li className="hover:text-white transition-colors cursor-pointer">Nos réalisations</li>
				</ul>
				
				{/* Mobile Hamburger Button */}
				<button
					className="md:hidden flex flex-col gap-1.5 w-6 h-6 items-center justify-center"
					onClick={() => setMenuOpen(!menuOpen)}>
					<span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
					<span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
					<span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
				</button>

				<button className="hidden md:block px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
					Contactez-nous
				</button>
			</nav>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="absolute top-20 left-0 right-0 z-[1999] md:hidden bg-slate-900/95 backdrop-blur-md py-6 px-6">
					<ul className="flex flex-col gap-4 text-white/80 text-sm">
						<li className="hover:text-white transition-colors cursor-pointer py-2 border-b border-white/10">Nos services</li>
						<li className="hover:text-white transition-colors cursor-pointer py-2 border-b border-white/10">À propos</li>
						<li className="hover:text-white transition-colors cursor-pointer py-2 border-b border-white/10">Nos réalisations</li>
						<li className="pt-2">
							<button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
								Contactez-nous
							</button>
						</li>
					</ul>
				</div>
			)}

			<div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-4 sm:px-6 pb-12 sm:pb-16 pt-24 sm:pt-28 md:px-10 lg:px-12">
					<div className="max-w-3xl text-center">
					<div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/20 px-3 sm:px-4 py-2">
						<span className="rounded bg-purple-600 px-2 py-0.5 text-xs font-bold text-white">NEW</span>
						<p className="text-xs sm:text-sm font-medium text-purple-200">Qualité et fiabilité garanti</p>
						</div>
						<TextType
							as="h1"
							text={"Bienvenue dans Versatile Studio\nDesign"}
						className="mb-6 text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
							typingSpeed={75}
							pauseDuration={1500}
							showCursor
							cursorCharacter="|"
							deletingSpeed={50}
							cursorBlinkDuration={0.5}
						/>
					<p className="mx-auto mb-8 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-white/60">
						Créez des expériences numériques exceptionnelles avec nos services de design et développement
					</p>
					<div className="flex flex-wrap justify-center gap-3 sm:gap-4">
						<button className="rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 sm:px-8 py-2 sm:py-3 font-medium text-white text-sm sm:text-base transition-all hover:from-purple-700 hover:to-indigo-700 hover:scale-105">
							Commencer maintenant
						</button>
						<button className="rounded-lg border border-white px-6 sm:px-8 py-2 sm:py-3 font-medium text-white text-sm sm:text-base transition-all hover:bg-white/10">
								Contactez-nous
							</button>
						</div>
					</div>
				</div>
		</div>
	);
};

export default Hero;
