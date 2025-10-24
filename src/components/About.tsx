import { motion } from 'motion/react';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Target,
      title: 'Nossa Missão',
      description: 'Fomentar o empreendedorismo e a inovação na UFBA, capacitando estudantes a transformarem ideias em realidade.',
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Conectamos estudantes, mentores e empresas para criar um ecossistema colaborativo de inovação.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Desenvolvemos projetos que impactam a sociedade através de tecnologia e empreendedorismo.',
    },
    {
      icon: Rocket,
      title: 'Aceleração',
      description: 'Impulsionamos startups e ideias através de mentorias, eventos e conexões estratégicas.',
    },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Sobre a Liga Empreendedora</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Fundada por estudantes visionários da UFBA, a Liga Empreendedora nasceu 
            do desejo de criar um ambiente onde ideias inovadoras pudessem florescer. 
            Hoje, somos um dos principais movimentos estudantis de empreendedorismo 
            da Bahia, conectando estudantes, empresas e a comunidade através da inovação.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-gray-200 hover:border-[#6B31FF] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#238AA3] to-[#6B31FF] flex items-center justify-center mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Nossa História */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjEwNDM4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Inovação e Tecnologia"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="mb-4">Nossa História</h3>
            <p className="text-gray-700 mb-4">
              A Liga Empreendedora da UFBA começou como um pequeno grupo de estudantes 
              apaixonados por inovação. Ao longo dos anos, crescemos e nos tornamos uma 
              referência em empreendedorismo estudantil.
            </p>
            <p className="text-gray-700 mb-4">
              Nossos membros já desenvolveram dezenas de projetos inovadores, conquistaram 
              pódios em competições nacionais e internacionais, e muitos deles fundaram 
              suas próprias startups de sucesso.
            </p>
            <p className="text-gray-700">
              Hoje, continuamos nossa missão de democratizar o acesso ao empreendedorismo 
              e à inovação, oferecendo capacitações, mentorias e um ambiente colaborativo 
              para todos os estudantes da UFBA.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
