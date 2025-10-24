import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Calendar, CheckCircle2 } from 'lucide-react';

export function CallToAction() {
  const [email, setEmail] = useState('');
  const [processOpen, setProcessOpen] = useState(false); // Toggle this to simulate open/closed process

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('E-mail cadastrado! Você será notificado quando abrirmos o próximo processo seletivo.');
    setEmail('');
  };

  return (
    <section id="chamada" className="py-16 sm:py-24 bg-gradient-to-br from-[#170052] via-[#6B31FF] to-[#238AA3] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-white">Junte-se à Liga Empreendedora</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Faça parte do maior movimento de empreendedorismo estudantil da UFBA. 
            Desenvolva suas habilidades, conecte-se com pessoas incríveis e transforme suas ideias em realidade.
          </p>
        </motion.div>

        {processOpen ? (
          // Process Seletivo Aberto
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-white">Inscrições Abertas!</h3>
              </div>
              
              <p className="text-white/90 text-center mb-6">
                O processo seletivo 2025.1 está aberto! Inscreva-se agora e faça parte da nossa equipe.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-white/70 mb-1">Inscrições até</p>
                  <p className="text-white">31/01/2025</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-white/70 mb-1">Vagas</p>
                  <p className="text-white">30 posições</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-white/70 mb-1">Início</p>
                  <p className="text-white">Fev/2025</p>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-white text-[#6B31FF] hover:bg-gray-100"
              >
                Inscreva-se Agora
              </Button>
            </div>
          </motion.div>
        ) : (
          // Processo Seletivo Fechado
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Calendar className="text-white" size={32} />
              </div>
              
              <h3 className="text-white text-center mb-4">Processo Seletivo em Breve</h3>
              <p className="text-white/90 text-center mb-6">
                No momento não estamos com processo seletivo aberto. Deixe seu e-mail 
                para ser notificado quando abrirmos novas vagas!
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="notify-email" className="text-white">
                    Seu melhor e-mail
                  </Label>
                  <Input
                    id="notify-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    required
                    className="mt-1 bg-white/90 border-white/20"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-white text-[#6B31FF] hover:bg-gray-100"
                >
                  Quero ser Notificado
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/70 text-sm text-center">
                  Enquanto isso, siga-nos nas redes sociais para ficar por dentro das novidades!
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: 'Mentoria', description: 'Com profissionais do mercado' },
            { title: 'Networking', description: 'Conexões valiosas' },
            { title: 'Projetos Reais', description: 'Experiência prática' },
            { title: 'Certificação', description: 'Reconhecimento oficial' },
          ].map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
            >
              <h4 className="text-white mb-2">{benefit.title}</h4>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
