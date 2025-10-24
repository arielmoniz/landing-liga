import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  delay?: number;
}

function AnimatedStat({ value, label, prefix = '+', delay = 0 }: StatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1).replace('.', ',')}`;
    }
    return num.toString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="mb-2">
        <span className="text-[#6B31FF]">{prefix}</span>
        <span className="text-[#170052]">{formatNumber(count)}</span>
        {value >= 1000 && <span className="text-[#6B31FF]">mil</span>}
      </div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
}

export function ImpactNumbers() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Nosso Impacto em Números</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Dados que mostram o alcance e a transformação que a Liga Empreendedora 
            tem promovido na comunidade acadêmica e no ecossistema de inovação.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <AnimatedStat value={2500} label="Estudantes impactados" delay={0} />
          <AnimatedStat value={500} label="Alunos mentorados" delay={0.1} />
          <AnimatedStat value={20} label="Empresas parceiras" delay={0.2} />
          <AnimatedStat value={20} label="Pódios em hackathons" delay={0.3} />
          <AnimatedStat value={20} label="Projetos desenvolvidos" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
