import img1 from './assets/img1.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import ElectricBorder from './components/ElectricBorder';

const services = [
  {
    title: 'Conception de flyers et de logos',
    description: 'Création d’identités visuelles percutantes, flyers promotionnels et logos mémorables.',
    image: img1,
  },
  {
    title: 'Site vitrine et e-commerce',
    description: 'Développement de sites modernes, rapides et pensés pour convertir vos visiteurs.',
    image: img3,
  },
  {
    title: 'Application web et mobile',
    description: 'Conception d’applications sur mesure pour offrir une expérience fluide sur tous les écrans.',
    image: img4,
  },
  {
    title: 'Conception vidéo et montage',
    description: 'Montage dynamique, contenus vidéo engageants et visuels adaptés à vos campagnes.',
    image: img5,
  },
];

export default function ServicesSection() {
  return (
    <section id="nos-services" className="py-20 bg-slate-900 text-slate-100">
      <div className="container mx-auto px-6">
        <ElectricBorder color="#8b5cf6" borderRadius={32} className="mx-auto max-w-7xl">
          <div className="rounded-[inherit] bg-slate-900/90 px-6 py-10 md:px-10 md:py-12 backdrop-blur-sm">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Nos services</h2>
              <p className="mt-3 text-slate-300">
                Des solutions créatives et techniques pour accompagner votre image, vos sites et vos contenus.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {services.map(service => (
                <article
                  key={service.title}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </ElectricBorder>
      </div>
    </section>
  );
}
