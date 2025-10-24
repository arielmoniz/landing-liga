import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'O que é a Liga Empreendedora da UFBA?',
      answer: 'A Liga Empreendedora é um movimento estudantil da UFBA focado em fomentar o empreendedorismo e a inovação. Desenvolvemos projetos, realizamos eventos, oferecemos mentorias e conectamos estudantes ao ecossistema de inovação.',
    },
    {
      question: 'Quem pode participar da Liga?',
      answer: 'Qualquer estudante da UFBA pode participar! Não é necessário ter conhecimento prévio em empreendedorismo. Buscamos pessoas motivadas, dispostas a aprender e que queiram fazer a diferença.',
    },
    {
      question: 'Como funciona o processo seletivo?',
      answer: 'O processo seletivo acontece geralmente duas vezes ao ano. Consiste em inscrição online, dinâmica em grupo e entrevista individual. Avaliamos fit cultural, motivação e potencial de contribuição para a Liga.',
    },
    {
      question: 'Preciso pagar alguma taxa para participar?',
      answer: 'Não! A participação na Liga Empreendedora é totalmente gratuita. Oferecemos todas as atividades, mentorias e eventos sem nenhum custo para os membros.',
    },
    {
      question: 'Quanto tempo preciso dedicar à Liga?',
      answer: 'Recomendamos uma dedicação média de 8-12 horas semanais. Isso inclui reuniões, desenvolvimento de projetos e participação em eventos. O tempo pode variar dependendo do seu envolvimento e projetos específicos.',
    },
    {
      question: 'Que benefícios terei ao fazer parte da Liga?',
      answer: 'Você terá acesso a mentorias com profissionais do mercado, participação em eventos e hackathons, networking com empresas parceiras, desenvolvimento de habilidades práticas em empreendedorismo e inovação, além de certificados de participação.',
    },
    {
      question: 'Posso participar se não for de cursos de tecnologia?',
      answer: 'Com certeza! A Liga é multidisciplinar e valoriza a diversidade de áreas. Temos membros de diversos cursos como Administração, Design, Engenharias, Ciências Sociais, entre outros.',
    },
    {
      question: 'Como posso me tornar parceiro da Liga?',
      answer: 'Se sua empresa está interessada em apoiar o empreendedorismo estudantil, entre em contato conosco através do formulário na seção de contato. Estamos sempre abertos a novas parcerias!',
    },
    {
      question: 'A Liga oferece suporte para desenvolvimento de startups?',
      answer: 'Sim! Oferecemos mentoria, workshops, conexões com investidores e empresas, além de programas de aceleração. Vários membros já fundaram suas próprias startups com o apoio da Liga.',
    },
    {
      question: 'Como fico sabendo quando abre novo processo seletivo?',
      answer: 'Divulgamos as inscrições através de nossas redes sociais e no site. Você também pode deixar seu e-mail na seção "Chamada" para ser notificado quando o próximo processo seletivo abrir.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Tire suas dúvidas sobre a Liga Empreendedora, processo seletivo, 
            atividades e muito mais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6 hover:border-[#6B31FF] transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-[#6B31FF] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
