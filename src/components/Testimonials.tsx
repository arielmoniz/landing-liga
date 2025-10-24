import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Ana Carolina Silva',
      role: 'Ex-membro | Fundadora da TechSolutions',
      text: 'A Liga Empreendedora foi fundamental na minha jornada. Aprendi desde os conceitos básicos de empreendedorismo até como validar uma ideia e apresentá-la para investidores. Hoje tenho minha própria startup!',
      period: '2021-2023',
    },
    {
      name: 'Rafael Oliveira',
      role: 'Ex-membro | Desenvolvedor Senior na Google',
      text: 'Participar da Liga foi uma das melhores decisões que tomei na universidade. As conexões que fiz, as habilidades que desenvolvi e os projetos que participei abriram portas que eu nem imaginava.',
      period: '2020-2022',
    },
    {
      name: 'Mariana Santos',
      role: 'Ex-membro | Product Manager na Nubank',
      text: 'Na Liga, tive a oportunidade de trabalhar em projetos reais, com equipes multidisciplinares e mentores incríveis. Foi uma verdadeira imersão no mundo da inovação e do empreendedorismo.',
      period: '2022-2024',
    },
    {
      name: 'Lucas Ferreira',
      role: 'Ex-membro | Co-fundador da EduTech',
      text: 'O networking que construí na Liga foi essencial. Conheci meu sócio aqui, participamos de hackathons juntos e hoje nossa startup já impacta milhares de estudantes em todo o Brasil.',
      period: '2021-2023',
    },
    {
      name: 'Juliana Costa',
      role: 'Ex-membro | UX Designer na iFood',
      text: 'A Liga me ensinou muito além de teoria. Aprendi a trabalhar em equipe, a pivotar projetos, a lidar com fracassos e a celebrar vitórias. Foi uma experiência transformadora!',
      period: '2022-2024',
    },
    {
      name: 'Pedro Henrique',
      role: 'Ex-membro | Consultor de Inovação',
      text: 'Os desafios que enfrentei na Liga me prepararam para o mercado de trabalho de forma única. Hoje trabalho assessorando empresas em seus processos de inovação, aplicando muito do que aprendi aqui.',
      period: '2020-2023',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Relatos de Ex-Membros</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Veja o que nossos ex-membros têm a dizer sobre suas experiências na Liga 
            e como ela impactou suas carreiras e trajetórias profissionais.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full border-gray-200 hover:border-[#6B31FF] hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <Quote className="text-[#238AA3] mb-4" size={32} />
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-[#170052] mb-1">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
                    <p className="text-xs text-[#6B31FF]">{testimonial.period}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
