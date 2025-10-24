import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Trophy, Users } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Hackathon UFBA 2024',
      description: 'Maior hackathon da universidade com mais de 200 participantes desenvolvendo soluções para problemas sociais.',
      category: 'Evento',
      date: '2024',
      achievement: '1º Lugar Nacional',
      participants: 200,
    },
    {
      title: 'Programa de Mentoria Tech',
      description: 'Programa de mentoria que conecta estudantes com profissionais do mercado de tecnologia e inovação.',
      category: 'Mentoria',
      date: '2023-2024',
      achievement: 'Melhor Programa',
      participants: 150,
    },
    {
      title: 'StartUFBA Accelerator',
      description: 'Aceleradora de startups que impulsionou mais de 15 projetos de estudantes da UFBA.',
      category: 'Aceleração',
      date: '2023',
      achievement: '3 Startups Fundadas',
      participants: 45,
    },
    {
      title: 'Innovation Week',
      description: 'Semana de palestras, workshops e networking com empresas parceiras e empreendedores de sucesso.',
      category: 'Evento',
      date: '2024',
      achievement: '10+ Empresas Parceiras',
      participants: 300,
    },
    {
      title: 'Tech Challenge 2023',
      description: 'Competição de desenvolvimento de soluções tecnológicas para desafios corporativos reais.',
      category: 'Competição',
      date: '2023',
      achievement: 'Pódio Nacional',
      participants: 80,
    },
    {
      title: 'Pitch Competition',
      description: 'Competição de pitches onde estudantes apresentam suas ideias para investidores e mentores.',
      category: 'Competição',
      date: '2024',
      achievement: 'R$ 50k em Prêmios',
      participants: 60,
    },
  ];

  return (
    <section id="projetos" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Projetos Realizados</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Confira alguns dos principais projetos e iniciativas que a Liga Empreendedora 
            desenvolveu ao longo de sua trajetória.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow border-gray-200 hover:border-[#6B31FF]">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-[#238AA3] hover:bg-[#238AA3]/90">
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Calendar size={14} />
                      <span className="text-xs">{project.date}</span>
                    </div>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#6B31FF]">
                      <Trophy size={16} />
                      <span className="text-sm">{project.achievement}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} />
                      <span className="text-sm">{project.participants} participantes</span>
                    </div>
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
