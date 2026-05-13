import { useRef, useState, useEffect } from 'react';
import { ScrollVelocity } from './components/ScrollVelocity';

const ScrollVelocitySection = () => {
	const scrollContainerRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		const handleMediaChange = (e) => setIsMobile(e.matches);
		
		setIsMobile(mediaQuery.matches);
		mediaQuery.addEventListener('change', handleMediaChange);
		
		return () => mediaQuery.removeEventListener('change', handleMediaChange);
	}, []);

	const textsDesktop = [
		'versatile studio design — votre partenaire de confiance'
	];

	const textsMobile = [
        'versatile studio design — votre partenaire de confiance',
        'pour un design et developpement web moderne',
        'creons ensemble votre image de demain'
	];

	return (
		<section ref={scrollContainerRef} className="relative w-screen overflow-hidden bg-slate-950 py-6 md:py-10">
			<div className="flex items-center justify-center min-h-[200px]">
				<ScrollVelocity
					scrollContainerRef={scrollContainerRef}
					texts={isMobile ? textsMobile : textsDesktop}
					velocity={isMobile ? 30 : 50}
					className="text-sm sm:text-2xl md:text-6xl font-bold text-white"
					numCopies={isMobile ? 2 : 4}
					damping={50}
					stiffness={400}
					velocityMapping={{ input: [0, 1000], output: [0, 5] }}
				/>
			</div>
		</section>
	);
};

export default ScrollVelocitySection;
