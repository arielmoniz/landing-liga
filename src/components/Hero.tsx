import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#238AA3]/10 via-[#6B31FF]/5 to-[#170052]/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">
              Transformando ideias em{' '}
              <span className="text-[#6B31FF]">inovação</span>
            </h2>
            <p className="text-gray-700 mb-8">
              Somos a Liga Empreendedora da UFBA, um movimento estudantil que conecta 
              estudantes empreendedores, desenvolve projetos inovadores e impulsiona 
              startups através de mentoria, hackathons e parcerias estratégicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#6B31FF] hover:bg-[#170052] text-white"
                onClick={() => scrollToSection('chamada')}
              >
                Participe da Liga
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('sobre')}
                className="border-[#238AA3] text-[#238AA3] hover:bg-[#238AA3]/10"
              >
                Saiba Mais
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1662469567531-9ae8356d3788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHN0YXJ0dXB8ZW58MXx8fHwxNzYxMDIxMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipe Liga Empreendedora"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6B31FF] rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#238AA3] rounded-full blur-3xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
