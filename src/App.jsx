import Hero from './Hero';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import OutilsSection from './OutilsSection';
import CreationsSection from './CreationsSection';
import ScrollVelocitySection from './ScrollVelocitySection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import GradualBlur from './GradualBlur';

const App = () => {
	return (
		<main className="relative min-h-screen w-screen bg-slate-950 overflow-x-hidden">
			<Hero />
			<ServicesSection />
			<OutilsSection />
			<CreationsSection />
			<ScrollVelocitySection />
			<AboutSection />
			<ContactSection />
			<GradualBlur preset="page-header" animated="scroll" position="top" strength={2.5} height="8rem" />
			<GradualBlur preset="page-footer" animated="scroll" position="bottom" strength={2.5} height="8rem" />
			<Footer />
		</main>
	);
};

export default App;
