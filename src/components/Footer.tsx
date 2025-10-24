import { Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#170052] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#238AA3] via-[#6B31FF] to-white flex items-center justify-center">
                <span className="text-white">LE</span>
              </div>
              <div>
                <h3 className="text-white">Liga Empreendedora</h3>
                <p className="text-sm text-white/70">UFBA</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Transformando estudantes em empreendedores e ideias em inovação.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-white/70 hover:text-white text-sm transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projetos" className="text-white/70 hover:text-white text-sm transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white text-sm transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/70 hover:text-white text-sm transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#chamada" className="text-white/70 hover:text-white text-sm transition-colors">
                  Processo Seletivo
                </a>
              </li>
            </ul>
          </div>

          {/* Contato e Redes Sociais */}
          <div>
            <h4 className="text-white mb-4">Conecte-se Conosco</h4>
            <div className="space-y-3 mb-4">
              <a
                href="mailto:contato@ligaempreendedoraufba.com"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Mail size={16} />
                contato@ligaempreendedoraufba.com
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/ligaempreendedoraufba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#238AA3] transition-colors flex items-center justify-center"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/ligaempreendedoraufba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#6B31FF] transition-colors flex items-center justify-center"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <p>© Liga Empreendedora da UFBA, {currentYear}. Todos os direitos reservados.</p>
            <p>Site criado por Fulano</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
