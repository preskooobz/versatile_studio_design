import BorderGlow from './components/BorderGlow';

const AboutSection = () => {
	return (
		<section id="a-propos" className="w-screen bg-slate-900 px-6 py-20 md:px-10 md:py-24">
			<div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
				<div>
					<p className="mb-4 text-xs uppercase tracking-[0.3em] text-purple-300">A propos</p>
					<h2 className="text-3xl font-bold text-white md:text-5xl">Un studio jeune, ambitieux et creatif</h2>
					<p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
						Versatile Studio vient d&apos;etre cree. Notre mission est claire: construire des experiences
						numeriques modernes qui melent design, strategie et developpement pour faire grandir votre image.
					</p>
				</div>

				<BorderGlow className="p-6 md:p-8" 
                    edgeSensitivity={30}
                    glowColor="40 80 80"
                    backgroundColor="#2a0e58"
                    borderRadius={28}
                    glowRadius={40}
                    glowIntensity={1}
                    coneSpread={25}
                    animated={false}
                    colors={['#c084fc', '#f472b6', '#38bdf8']}
                    >
					<div className="relative z-[1]">
						<h3 className="text-xl font-semibold text-white md:text-2xl">Pourquoi nous choisir maintenant ?</h3>
						<ul className="mt-4 space-y-3 text-sm text-white/70 md:text-base">
							<li>Une equipe recente, flexible et tres impliquee dans chaque projet.</li>
							<li>Une approche sur mesure pour vos besoins en branding, web et contenu.</li>
							<li>Un accompagnement de proximite, de l&apos;idee jusqu&apos;a la livraison.</li>
						</ul>
					</div>
				</BorderGlow>
			</div>
		</section>
	);
};

export default AboutSection;
