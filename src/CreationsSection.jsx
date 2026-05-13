import CircularGallery from './CircularGallery';
import img1 from './assets/img1.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import im2 from './assets/im2.jpg';

const items = [
	{ image: img1, text: 'Brand Identity' },
	{ image: img3, text: 'Web Design' },
	{ image: img4, text: 'Motion Design' },
	{ image: img5, text: 'UI Concept' },
	{ image: im2, text: 'Creative Direction' }
];

const CreationsSection = () => {
	return (
		<section className="w-screen bg-slate-950 px-6 md:px-10 py-10 md:py-14">
			<div className="max-w-7xl mx-auto mb-10 md:mb-14">
				<p className="text-purple-300 uppercase tracking-[0.3em] text-xs mb-4">Nos réalisations</p>
				<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
					<div>
						<h2 className="text-3xl md:text-5xl font-bold text-white">Un aperçu de nos projets les plus marquants</h2>
						<p className="mt-4 max-w-2xl text-white/60 text-base md:text-lg">
							Une sélection de réalisations pensées pour être à la fois belles, utiles et mémorables.
						</p>
					</div>
					<div className="text-white/50 text-sm max-w-sm md:text-right">
						Faites défiler la galerie pour explorer nos créations et découvrir notre univers visuel.
					</div>
				</div>
			</div>

			<div className="w-full h-[540px] md:h-[680px] rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
				<CircularGallery
					items={items}
					bend={3}
					textColor="#ffffff"
					borderRadius={0.06}
					font="bold 30px Figtree"
					scrollSpeed={2}
					scrollEase={0.05}
				/>
			</div>
		</section>
	);
};

export default CreationsSection;
