import { motion } from 'motion/react';

export function Partners() {
  const partners = [
    { name: 'SEBRAE', description: 'Parceiro em programas de capacitação' },
    { name: 'Google', description: 'Apoio técnico e mentorias' },
    { name: 'Microsoft', description: 'Ferramentas e tecnologia' },
    { name: 'AWS', description: 'Infraestrutura em nuvem' },
    { name: 'Nubank', description: 'Mentorias e workshops' },
    { name: 'iFood', description: 'Desafios e oportunidades' },
    { name: 'Stone', description: 'Eventos e networking' },
    { name: 'Banco do Brasil', description: 'Apoio financeiro' },
    { name: 'Porto Digital', description: 'Ecossistema de inovação' },
    { name: 'FIEB', description: 'Parceiro estratégico' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Empresas Parceiras</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Trabalhamos com empresas líderes de mercado que acreditam no potencial 
            do empreendedorismo estudantil e apoiam nossa missão.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group"
            >
              <div className="bg-white rounded-xl border border-gray-200 p-6 h-32 flex flex-col items-center justify-center hover:border-[#6B31FF] hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#238AA3] to-[#6B31FF] flex items-center justify-center mb-2">
                  <span className="text-white uppercase">{partner.name.substring(0, 2)}</span>
                </div>
                <p className="text-center text-[#170052]">{partner.name}</p>
                <p className="text-xs text-gray-500 text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
