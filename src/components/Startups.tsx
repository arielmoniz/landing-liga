import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ExternalLink, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

export function Startups() {
  const startups = [
    {
      name: 'TechSolutions',
      bio: 'Plataforma SaaS que conecta empresas a desenvolvedores freelancers qualificados, facilitando a gestão de projetos de tecnologia.',
      sector: 'SaaS | B2B',
      socials: {
        website: 'https://techsolutions.example.com',
        linkedin: 'https://linkedin.com/company/techsolutions',
        instagram: 'https://instagram.com/techsolutions',
      },
    },
    {
      name: 'EduTech',
      bio: 'Aplicativo educacional que utiliza gamificação para ensinar programação e habilidades digitais para crianças e adolescentes.',
      sector: 'EdTech | B2C',
      socials: {
        website: 'https://edutech.example.com',
        instagram: 'https://instagram.com/edutech',
        twitter: 'https://twitter.com/edutech',
      },
    },
    {
      name: 'GreenEnergy',
      bio: 'Startup de energia limpa que desenvolve soluções de monitoramento inteligente para otimização do consumo energético.',
      sector: 'CleanTech | B2B',
      socials: {
        website: 'https://greenenergy.example.com',
        linkedin: 'https://linkedin.com/company/greenenergy',
      },
    },
    {
      name: 'HealthConnect',
      bio: 'Plataforma de telemedicina que conecta pacientes a médicos especialistas, oferecendo consultas online e acompanhamento digital.',
      sector: 'HealthTech | B2C',
      socials: {
        website: 'https://healthconnect.example.com',
        instagram: 'https://instagram.com/healthconnect',
        linkedin: 'https://linkedin.com/company/healthconnect',
      },
    },
    {
      name: 'FoodDelivery Pro',
      bio: 'Sistema de gestão completo para restaurantes, integrando pedidos, estoque, delivery e análise de dados em uma única plataforma.',
      sector: 'FoodTech | B2B',
      socials: {
        website: 'https://fooddeliverypro.example.com',
        linkedin: 'https://linkedin.com/company/fooddeliverypro',
        twitter: 'https://twitter.com/fooddeliverypro',
      },
    },
    {
      name: 'FinanceHub',
      bio: 'Aplicativo de educação financeira para jovens, ajudando a desenvolver hábitos saudáveis de economia e investimento.',
      sector: 'FinTech | B2C',
      socials: {
        website: 'https://financehub.example.com',
        instagram: 'https://instagram.com/financehub',
        linkedin: 'https://linkedin.com/company/financehub',
      },
    },
    {
      name: 'AgroSmart',
      bio: 'Solução de IoT para agricultura de precisão, monitorando solo, clima e irrigação para otimizar a produção agrícola.',
      sector: 'AgTech | B2B',
      socials: {
        website: 'https://agrosmart.example.com',
        linkedin: 'https://linkedin.com/company/agrosmart',
      },
    },
    {
      name: 'TravelBuddy',
      bio: 'App de planejamento de viagens com inteligência artificial que cria roteiros personalizados baseados nas preferências do usuário.',
      sector: 'TravelTech | B2C',
      socials: {
        website: 'https://travelbuddy.example.com',
        instagram: 'https://instagram.com/travelbuddy',
        twitter: 'https://twitter.com/travelbuddy',
      },
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
          <h2 className="mb-4">Portfólio de Startups</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Conheça as startups fundadas por membros da Liga Empreendedora que estão 
            transformando mercados e criando impacto positivo na sociedade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {startups.map((startup, index) => (
            <motion.div
              key={startup.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full border-gray-200 hover:border-[#6B31FF] hover:shadow-xl transition-all group">
                <CardHeader>
                  {/* Logo Placeholder */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#238AA3] to-[#6B31FF] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-white uppercase">
                      {startup.name.substring(0, 2)}
                    </span>
                  </div>
                  <CardTitle className="text-[#170052]">{startup.name}</CardTitle>
                  <CardDescription className="text-xs text-[#6B31FF]">
                    {startup.sector}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4">{startup.bio}</p>
                  
                  {/* Social Links */}
                  <div className="flex flex-wrap gap-2">
                    {startup.socials.website && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#238AA3] text-[#238AA3] hover:bg-[#238AA3]/10"
                        asChild
                      >
                        <a href={startup.socials.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} />
                        </a>
                      </Button>
                    )}
                    {startup.socials.linkedin && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#6B31FF] text-[#6B31FF] hover:bg-[#6B31FF]/10"
                        asChild
                      >
                        <a href={startup.socials.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin size={14} />
                        </a>
                      </Button>
                    )}
                    {startup.socials.instagram && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#170052] text-[#170052] hover:bg-[#170052]/10"
                        asChild
                      >
                        <a href={startup.socials.instagram} target="_blank" rel="noopener noreferrer">
                          <Instagram size={14} />
                        </a>
                      </Button>
                    )}
                    {startup.socials.twitter && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#238AA3] text-[#238AA3] hover:bg-[#238AA3]/10"
                        asChild
                      >
                        <a href={startup.socials.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter size={14} />
                        </a>
                      </Button>
                    )}
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
