import { lazy, Suspense } from 'react';
import Hero from './Hero';
import GradualBlur from './GradualBlur';

// Lazy load sections for better performance
const ServicesSection = lazy(() => import('./ServicesSection'));
const OutilsSection = lazy(() => import('./OutilsSection'));
const CreationsSection = lazy(() => import('./CreationsSection'));
const ScrollVelocitySection = lazy(() => import('./ScrollVelocitySection'));
const AboutSection = lazy(() => import('./AboutSection'));
const ContactSection = lazy(() => import('./ContactSection'));
const Footer = lazy(() => import('./Footer'));

// Lightweight fallback component
const SectionFallback = () => (
	<div className="h-screen flex items-center justify-center bg-slate-950">
		<div className="text-slate-400 text-sm">Chargement...</div>
	</div>
);

const App = () => {
	return (
		<main className="relative min-h-screen w-screen bg-slate-950 overflow-x-hidden">
			{/* Render Hero immediately (above the fold) */}
			<Hero />

			{/* Lazy load all other sections */}
			<Suspense fallback={<SectionFallback />}>
				<ServicesSection />
			</Suspense>

			<Suspense fallback={<SectionFallback />}>
				<OutilsSection />
			</Suspense>

			<Suspense fallback={<SectionFallback />}>
				<CreationsSection />
			</Suspense>

			<Suspense fallback={<SectionFallback />}>
				<ScrollVelocitySection />
			</Suspense>

			<Suspense fallback={<SectionFallback />}>
				<AboutSection />
			</Suspense>

			<Suspense fallback={<SectionFallback />}>
				<ContactSection />
			</Suspense>

			<GradualBlur preset="page-header" animated="scroll" position="top" strength={2.5} height="8rem" />
			<GradualBlur preset="page-footer" animated="scroll" position="bottom" strength={2.5} height="8rem" />

			<Suspense fallback={<SectionFallback />}>
				<Footer />
			</Suspense>
		</main>
	);
};

export default App;
