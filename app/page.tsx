import {
  Check,
  Monitor,
  Laptop,
  Shield,
  MessageCircle,
  Apple,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Economia e Performance",
      description:
        "Hardware de alta performance por um custo mais acessível, com liberdade de escolha nas configurações.",
      icon: Monitor,
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      title: "O Melhor dos Dois Mundos",
      description:
        "Dual boot com Windows ou Linux, oferecendo flexibilidade máxima para suas necessidades.",
      icon: Laptop,
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "Ecossistema Apple",
      description:
        "Sincronização com iPhone, iPad e acesso a apps exclusivos como Final Cut Pro e Logic Pro.",
      icon: Apple,
      gradient: "from-green-400 to-emerald-400",
    },
    {
      title: "Estabilidade e Segurança",
      description:
        "Sistema operacional eficiente com instalação profissional e otimizada.",
      icon: Shield,
      gradient: "from-orange-400 to-red-400",
    },
  ];

  const steps = [
    {
      title: "Análise do Hardware",
      description:
        "Verificação completa da compatibilidade do seu PC com macOS.",
    },
    {
      title: "Configuração Personalizada",
      description:
        "Instalação e configuração do macOS como sistema principal ou dual boot.",
    },
    {
      title: "Suporte Técnico e Atualizações",
      description: "Acompanhamento pós-instalação para ajustes e otimizações.",
    },
  ];

  const testimonials = [
    {
      text: "A instalação ficou perfeita! Agora posso trabalhar com softwares da Apple sem problemas de compatibilidade. Super recomendo o serviço!",
      author: "Lucas S.",
      role: "Designer Gráfico",
    },
    {
      text: "Foi uma das melhores decisões. Tenho o macOS e Windows no mesmo PC, com o suporte que eu precisava. Um investimento que valeu a pena!",
      author: "Ana P.",
      role: "Desenvolvedora",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section with Glassmorphism */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-xl"></div>
        <div className="relative container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Transforme seu PC em um Hackintosh
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300">
              Aproveite o poder do macOS no seu próprio computador com nossa
              consultoria especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                Iniciar Consultoria
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid with Hover Effects */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Por que optar por um{" "}
            <span className="text-blue-400">Hackintosh?</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-6`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Como Funciona a{" "}
            <span className="text-purple-400">Consultoria?</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 last:mb-0"
              >
                <div className="absolute top-0 left-6 h-full w-0.5 bg-gradient-to-b from-purple-500 to-transparent"></div>
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-xl font-bold z-10">
                  {index + 1}
                </div>
                <div className="ml-8 bg-white/5 backdrop-blur-lg rounded-2xl p-6 flex-1 transform hover:-translate-x-2 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with Cards */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Vantagens do{" "}
            <span className="text-green-400">Serviço Profissional</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg hover:from-white/10 hover:to-white/15 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Instalação Sem Complicações
              </h3>
              <p className="text-gray-400">
                Evite o estresse de fazer tudo sozinho com nossa consultoria
                profissional.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg hover:from-white/10 hover:to-white/15 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <Apple className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Software Exclusivo Apple
              </h3>
              <p className="text-gray-400">
                Acesso completo ao ecossistema de aplicativos Apple.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg hover:from-white/10 hover:to-white/15 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Personalização Completa
              </h3>
              <p className="text-gray-400">
                Sistema otimizado especificamente para seu hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Modern Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            O que dizem nossos <span className="text-orange-400">Clientes</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg hover:from-white/10 hover:to-white/15 transition-all duration-300"
              >
                <MessageCircle className="w-10 h-10 text-orange-400 mb-6" />
                <p className="text-lg text-gray-300 italic mb-6">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Glassmorphism */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pronto para <span className="text-blue-400">Começar</span>?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
            Entre em contato agora e transforme seu PC em um Hackintosh
            profissional!
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            Solicitar Consultoria
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Melegari - Consultoria Hackintosh.
            Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
