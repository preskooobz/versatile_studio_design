import LogoLoop from './components/LogoLoop';
import {
  FigmaLogo,
  PaintBrush,
  Image,
  VideoCamera,
  FilmScript,
  Code,
  Cloud,
  Rocket
} from '@phosphor-icons/react';

const IconBadge = ({ Icon, label }) => (
  <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
    {Icon ? <Icon size={20} weight="fill" className="text-white/90" /> : null}
    <span>{label}</span>
  </div>
);

const tools = [
  { title: 'Figma', node: <IconBadge Icon={FigmaLogo} label="Figma" /> },
  { title: 'Adobe Illustrator', node: <IconBadge Icon={PaintBrush} label="Illustrator" /> },
  { title: 'Adobe Photoshop', node: <IconBadge Icon={Image} label="Photoshop" /> },
  { title: 'Premiere Pro', node: <IconBadge Icon={VideoCamera} label="Premiere" /> },
  { title: 'After Effects', node: <IconBadge Icon={FilmScript} label="After Effects" /> },
  { title: 'React', node: <IconBadge Icon={Code} label="React" /> },
  { title: 'Vite', node: <IconBadge Icon={Rocket} label="Vite" /> },
  { title: 'Flutter', node: <IconBadge Icon={Cloud} label="Flutter" /> },
];

export default function OutilsSection() {
  return (
    <section id="outils" className="bg-slate-950 py-16 text-slate-100">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Nos outils</h2>
          <p className="mt-3 text-slate-300">
            Les technologies et logiciels que nous utilisons pour designer, développer et monter vos projets.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 backdrop-blur-sm">
          <LogoLoop
            logos={tools}
            speed={90}
            direction="left"
            logoHeight={36}
            gap={20}
            fadeOut
            fadeOutColor="#020617"
            scaleOnHover
            ariaLabel="Outils utilisés par Versatile Studio"
          />
        </div>
      </div>
    </section>
  );
}
