
import CardSwap, { Card } from './CardSwap';
import SplashCursor from './components/SplashCursor';

const ContactSection = () => {
	return (
		<section id="contact" className="w-screen bg-slate-950 px-6 py-20 md:px-10 md:py-24">
			<div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
				<div>
					<div className="mb-10">
						<p className="mb-4 text-xs uppercase tracking-[0.3em] text-purple-300">Contactez-nous</p>
						<h2 className="text-3xl font-bold text-white md:text-5xl">
							Prêt à transformer votre vision en réalité ?
						</h2>
						<p className="mt-4 max-w-2xl text-white/70">
							Envoyez-nous un message et nous vous répondrons dans les 24 heures.
						</p>
					</div>

					<form className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm">
					<div className="mb-6">
						<label className="block text-sm font-medium text-white mb-2">Votre nom</label>
						<input
							type="text"
							placeholder="Jean Dupont"
							className="w-full rounded-lg bg-white/10 px-4 py-2 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:border-purple-500/50 transition-colors"
						/>
					</div>

					<div className="mb-6">
						<label className="block text-sm font-medium text-white mb-2">Email</label>
						<input
							type="email"
							placeholder="vous@example.com"
							className="w-full rounded-lg bg-white/10 px-4 py-2 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:border-purple-500/50 transition-colors"
						/>
					</div>

					<div className="mb-6">
						<label className="block text-sm font-medium text-white mb-2">Sujet</label>
						<input
							type="text"
							placeholder="Mon projet..."
							className="w-full rounded-lg bg-white/10 px-4 py-2 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:border-purple-500/50 transition-colors"
						/>
					</div>

					<div className="mb-8">
						<label className="block text-sm font-medium text-white mb-2">Message</label>
						<textarea
							placeholder="Décrivez brièvement votre projet..."
							rows={5}
							className="w-full rounded-lg bg-white/10 px-4 py-2 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
						/>
					</div>

					<button
						type="submit"
						className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-medium text-white transition-all hover:from-purple-700 hover:to-indigo-700 hover:scale-105"
					>
						Envoyer le message
					</button>
					</form>
				</div>

				<div className="relative min-h-[460px] overflow-visible">
					<SplashCursor
						TRANSPARENT={true}
						className="absolute inset-0 pointer-events-none -z-0"
                        DENSITY_DISSIPATION={3.5}
                        VELOCITY_DISSIPATION={2}
                        PRESSURE={0.1}
                        CURL={3}
                        SPLAT_RADIUS={0.2}
                        SPLAT_FORCE={6000}
                        COLOR_UPDATE_SPEED={10}
                        SHADING
                        RAINBOW_MODE={false}
                        COLOR="#A855F7"
					/>
					<div style={{ height: '600px', position: 'relative' }}>
						<CardSwap cardDistance={60}
							verticalDistance={115}
							delay={4500}
							pauseOnHover={false}>
						<Card customClass="bg-slate-900/95 p-6 text-left text-white shadow-2xl">
							<p className="text-xs uppercase tracking-[0.28em] text-purple-300">Email</p>
							<p className="mt-4 text-2xl font-semibold leading-tight">versatilestudio@gmail.com</p>
							<p className="mt-3 text-sm text-white/70">Réponse rapide pour tout projet design, web ou contenu.</p>
						</Card>
						<Card customClass="bg-slate-900/95 p-6 text-left text-white shadow-2xl">
							<p className="text-xs uppercase tracking-[0.28em] text-purple-300">Téléphone</p>
							<p className="mt-4 text-2xl font-semibold leading-tight">+221 787323273</p>
							<p className="mt-3 text-sm text-white/70">Disponible pour échanger sur vos besoins et vos délais.</p>
						</Card>
						<Card customClass="bg-slate-900/95 p-6 text-left text-white shadow-2xl">
							<p className="text-xs uppercase tracking-[0.28em] text-purple-300">Localisation</p>
							<p className="mt-4 text-2xl font-semibold leading-tight">Dakar, Sénégal</p>
							<p className="mt-3 text-sm text-white/70">Basé à Dakar, avec des collaborations à distance possibles.</p>
						</Card>
						</CardSwap>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
