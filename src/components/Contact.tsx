import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Instagram, Linkedin, MapPin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Entre em Contato</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Tem alguma dúvida ou sugestão? Entre em contato conosco! 
            Estamos sempre prontos para conversar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sobre o que você quer falar?"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem aqui..."
                  required
                  rows={5}
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#6B31FF] hover:bg-[#170052]"
              >
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#238AA3]/10 to-[#6B31FF]/10 rounded-2xl p-8">
              <h3 className="mb-6 text-[#170052]">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#238AA3] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">E-mail</p>
                    <a href="mailto:contato@ligaempreendedoraufba.com" className="text-[#170052] hover:text-[#6B31FF]">
                      contato@ligaempreendedoraufba.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#6B31FF] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Localização</p>
                    <p className="text-[#170052]">
                      Campus Ondina, UFBA<br />
                      Salvador - BA
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm mb-3">Redes Sociais</p>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com/ligaempreendedoraufba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border-2 border-[#238AA3] text-[#238AA3] hover:bg-[#238AA3] hover:text-white transition-colors flex items-center justify-center"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/company/ligaempreendedoraufba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg border-2 border-[#6B31FF] text-[#6B31FF] hover:bg-[#6B31FF] hover:text-white transition-colors flex items-center justify-center"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#170052] to-[#6B31FF] rounded-2xl p-8 text-white">
              <h4 className="mb-3">Horário de Atendimento</h4>
              <p className="text-white/90">
                Segunda a Sexta: 14h às 18h<br />
                Resposta por e-mail em até 48h
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
