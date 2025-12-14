import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  Dna,
  Box,
  Shield,
  ChevronRight,
} from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-biotech-darker font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-biotech-primary to-emerald-900 text-white pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574943320219-553eb213da07?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
              Gestión Inteligente para tu{" "}
              <span className="text-green-300">Granja Agrotech</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-50 mb-10 animate-fade-in-up delay-100">
              Optimiza la producción, maximiza la salud animal y controla cada
              aspecto de tu negocio con tecnología de punta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <button
                onClick={() => navigate("/login")}
                className="px-8 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                Comenzar Ahora
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Ver Demo
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white dark:bg-biotech-darker rounded-t-[50%] transform scale-x-150 translate-y-10"></div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white dark:bg-biotech-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Nuestra plataforma integra módulos especializados para cubrir
              todas las necesidades operativas de tu granja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Monitoreo en Tiempo Real",
                desc: "Visualiza el estado de salud y rendimiento de tu ganado al instante con sensores IoT integrados.",
                color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
              },
              {
                icon: Dna,
                title: "Genética Avanzada",
                desc: "Gestiona linajes, cruces y mejora genética con herramientas de análisis predictivo.",
                color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
              },
              {
                icon: Box,
                title: "Control de Inventario",
                desc: "Automatiza pedidos y lleva un registro exacto de alimentos, medicinas y suministros.",
                color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow bg-gray-50 dark:bg-biotech-dark group"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "+500", label: "Granjas Activas" },
              { value: "98%", label: "Satisfacción" },
              { value: "+1M", label: "Animales Gestionados" },
              { value: "24/7", label: "Soporte Técnico" },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-biotech-dark border-t border-gray-100 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-biotech-primary to-biotech-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">BT</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white text-lg">
              Biotech Platform
            </span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Biotech Platform. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
