import PrismaticBurst from './PrismaticBurst';
import TextType from './TextType';
<div style={{ height: '600px', position: 'relative' }}>

</div>
const Hero = () => {
	return (
		<div className="w-screen min-h-screen relative overflow-hidden bg-slate-950">
			<div className="pointer-events-none absolute inset-0 z-0 opacity-70">
				<PrismaticBurst
					intensity={5}
					speed={0.5}
					animationType="rotate3d"
					mixBlendMode="screen"
					colors={['#A855F7', '#7C3AED', '#6366F1']}
					distort={0}
					hoverDampness={0}
					rayCount={0}
				/>
			</div>

			{/* Navigation */}
			<nav className="absolute top-0 left-0 right-0 z-[2000] px-6 md:px-10 py-6 flex items-center justify-between">
				<div className="text-white font-bold text-xl">VS</div>
				<ul className="hidden md:flex gap-8 items-center text-white/80 text-sm">
					<li className="hover:text-white transition-colors cursor-pointer">Nos services</li>
					<li className="hover:text-white transition-colors cursor-pointer">À propos</li>
					<li className="hover:text-white transition-colors cursor-pointer">Nos réalisations</li>
				</ul>
				<button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
					Contactez-nous
				</button>
			</nav>

				<div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 pb-16 pt-28 md:px-10 lg:px-12">
					<div className="max-w-3xl text-center">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/20 px-4 py-2">
							<span className="rounded bg-purple-600 px-2 py-0.5 text-xs font-bold text-white">NEW</span>
							<p className="text-sm font-medium text-purple-200">Qualité et fiabilité garanti</p>
						</div>
						<TextType
							as="h1"
							text={"Bienvenue dans Versatile Studio\nDesign"}
							className="mb-6 text-9xl font-bold leading-tight text-white md:text-7xl"
							typingSpeed={75}
							pauseDuration={1500}
							showCursor
							cursorCharacter="|"
							deletingSpeed={50}
							cursorBlinkDuration={0.5}
						/>
						<p className="mx-auto mb-8 max-w-2xl text-lg text-white/60 md:text-xl">
							Créez des expériences numériques exceptionnelles avec nos services de design et développement
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<button className="rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 font-medium text-white transition-all hover:from-purple-700 hover:to-indigo-700 hover:scale-105">
								Commencer maintenant
							</button>
							<button className="rounded-lg border border-white px-8 py-3 font-medium text-white transition-all hover:bg-white/10">
								Contactez-nous
							</button>
						</div>
					</div>
				</div>
		</div>
	);
};

export default Hero;
