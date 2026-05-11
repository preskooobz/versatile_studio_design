import { useRef } from 'react';
import { ScrollVelocity } from './components/ScrollVelocity';

const ScrollVelocitySection = () => {
	const scrollContainerRef = useRef(null);

	const texts = [
		'versatiles studio design — votre partenaire de confiance'
	];

	return (
		<section ref={scrollContainerRef} className="relative w-screen overflow-hidden bg-slate-950 py-12 md:py-20">
			<div className="flex items-center justify-center min-h-[200px]">
				<ScrollVelocity
					scrollContainerRef={scrollContainerRef}
					texts={texts}
					velocity={50}
					className="text-xs md:text-6xl font-bold text-white"
					numCopies={4}
					damping={50}
					stiffness={400}
					velocityMapping={{ input: [0, 1000], output: [0, 5] }}
				/>
			</div>
		</section>
	);
};

export default ScrollVelocitySection;
