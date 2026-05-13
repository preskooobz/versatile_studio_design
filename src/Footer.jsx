const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-screen bg-slate-950 border-t border-white/10">
			<div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-4">
					{/* Brand Section */}
					<div>
						<h3 className="text-2xl font-bold text-white">VS</h3>
						<p className="mt-3 text-sm text-white/70">
							Versatile Studio Design — transforming visions into digital realities.
						</p>
					</div>

					{/* Services Links */}
					<div>
						<h4 className="font-semibold text-white">Services</h4>
						<ul className="mt-4 space-y-2 text-sm text-white/70">
							<li>
								<a href="#services" className="hover:text-purple-400 transition-colors">
									Design
								</a>
							</li>
							<li>
								<a href="#services" className="hover:text-purple-400 transition-colors">
									Développement Web
								</a>
							</li>
							<li>
								<a href="#services" className="hover:text-purple-400 transition-colors">
									Applications Mobile
								</a>
							</li>
							<li>
								<a href="#services" className="hover:text-purple-400 transition-colors">
									Vidéo & Montage
								</a>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-semibold text-white">Navigation</h4>
						<ul className="mt-4 space-y-2 text-sm text-white/70">
							<li>
								<a href="#hero" className="hover:text-purple-400 transition-colors">
									Accueil
								</a>
							</li>
							<li>
								<a href="#services" className="hover:text-purple-400 transition-colors">
									Nos services
								</a>
							</li>
							<li>
								<a href="#creations" className="hover:text-purple-400 transition-colors">
									Réalisations
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:text-purple-400 transition-colors">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="font-semibold text-white">Contact</h4>
						<ul className="mt-4 space-y-3 text-sm text-white/70">
							<li>
								<a href="mailto:hello@versatilestudio.com" className="hover:text-purple-400 transition-colors">
									versatilestudio@gmail.com
								</a>
							</li>
							<li>
								<a href="tel:+221 787323273" className="hover:text-purple-400 transition-colors">
									+221 787323273
								</a>
							</li>
							<li className="text-white/70">Dakar, Sénégal</li>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="my-12 h-px bg-white/10" />

				{/* Bottom Section */}
				<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
					<p className="text-xs text-white/50">
						© {currentYear} Versatile Studio Design. Tous droits réservés.
					</p>
					<div className="flex gap-6 text-sm text-white/70">
						<a href="#" className="hover:text-purple-400 transition-colors">
							Politique de confidentialité
						</a>
						<a href="#" className="hover:text-purple-400 transition-colors">
							Conditions d'utilisation
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
