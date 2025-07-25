import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Leaf, 
  Phone, 
  Mail, 
  MapPin,
  MessageCircle
} from 'lucide-react'

const Footer = () => {
  return (
    <>
      {/* WhatsApp Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.open("https://wa.me/5514998674645", "_blank")}
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <img 
                  src="/src/assets/logo-poupanca-verde.png" 
                  alt="Poupança Verde Mudas" 
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-300 mb-4">
                Especialistas em mudas de mogno africano de alta qualidade. 
                Seu parceiro para um futuro sustentável e rentável.
              </p>
              <div className="text-sm text-gray-400">
                RENASEM: SP-17315/2019
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Navegação</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
                <li><Link to="/investimento" className="hover:text-white transition-colors">O Investimento</Link></li>
                <li><Link to="/mudas" className="hover:text-white transition-colors">Nossas Mudas</Link></li>
                <li><Link to="/ciclo-madeira" className="hover:text-white transition-colors">Ciclo da Madeira</Link></li>
                <li><Link to="/workshop" className="hover:text-white transition-colors">Workshop</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                <li><Link to="/guia-investidor" className="hover:text-white transition-colors">Guia do Investidor</Link></li>
                <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  <a href="tel:+5514998674645" className="hover:text-white transition-colors">
                    (14) 99867-4645
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  <a href="mailto:verdemudas@gmail.com" className="hover:text-white transition-colors">
                    verdemudas@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>Sítio Boa Esperança, Fernão - SP</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>CEP 17469-899</span>
                </div>
                <div className="flex items-center">
                  <span>Seg - Sáb: 8h00 - 18h00</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/poupanca_verde_mudas/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-golden-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://web.facebook.com/PVMMognoAfricano/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-golden-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.youtube.com/@poupancaverdemudas" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-golden-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10z"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 Poupança Verde Mudas. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">
              Desenvolvido com 🌱 para um futuro mais verde e sustentável.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

