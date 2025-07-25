import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Award,
  Users,
  Calendar,
  MapPin,
  Clock,
  TrendingUp,
  Handshake,
  Target,
  Lightbulb,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
  TreePine,
  DollarSign,
  Network,
  Presentation
} from 'lucide-react'

const Workshop = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    hectares: '',
    anoPlantio: '',
    mensagem: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Dados do formulário:', formData)
    alert('Obrigado pelo interesse! Entraremos em contato em breve.')
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center text-white">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-secondary text-secondary-foreground mb-6 text-lg px-4 py-2">
              Exclusivo para Produtores
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Encontro de Produtores de Mogno Africano do Estado de São Paulo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Transforme seu desbaste em lucro através de nossa proposta inovadora de parceria. 
              Conecte-se com outros produtores e descubra o verdadeiro potencial da sua floresta.
            </p>
            <Button size="lg" className="btn-secondary text-lg px-8 py-4" onClick={() => document.getElementById('inscricao').scrollIntoView({ behavior: 'smooth' })}>
              <Award className="h-5 w-5 mr-2" />
              Quero Participar
            </Button>
          </div>
        </div>
      </section>

      {/* Para Quem é o Workshop */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Este Workshop é Para Você Que...
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Reconhecemos os desafios únicos dos produtores que já investiram no mogno africano e agora buscam maximizar seus retornos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Tem Floresta com 6+ Anos</h3>
                <p className="text-gray-600">
                  Sua floresta de mogno africano já está madura o suficiente para o primeiro desbaste 
                  e você quer aproveitar essa oportunidade da melhor forma.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Busca Destino Nobre</h3>
                <p className="text-gray-600">
                  Não quer simplesmente vender a madeira como commodity, mas dar um destino 
                  nobre que valorize todo o seu investimento e cuidado.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Quer Maximizar Lucros</h3>
                <p className="text-gray-600">
                  Entende que existe um potencial muito maior de valorização da madeira 
                  através do beneficiamento e comercialização estratégica.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Busca Parcerias</h3>
                <p className="text-gray-600">
                  Reconhece que parcerias estratégicas podem abrir portas para mercados 
                  e oportunidades que seriam difíceis de acessar sozinho.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Quer Fazer Networking</h3>
                <p className="text-gray-600">
                  Deseja se conectar com outros produtores experientes para trocar 
                  conhecimentos e criar oportunidades de negócios conjuntas.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Busca Inovação</h3>
                <p className="text-gray-600">
                  Está aberto a novas ideias e modelos de negócio que possam 
                  revolucionar a forma como a madeira de mogno é comercializada.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Proposta */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nossa Proposta Revolucionária
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">
                Parceria para Beneficiamento e Comercialização
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Beneficiamento Especializado</h4>
                    <p className="text-gray-200">
                      Transformamos sua madeira de desbaste em produtos de maior valor agregado através de parceria especializada.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Acesso a Mercados Premium</h4>
                    <p className="text-gray-200">
                      Levamos sua madeira diretamente para compradores que valorizam madeira de qualidade: luthiers, marceneiros de luxo e designers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Garantia de Lucratividade</h4>
                    <p className="text-gray-200">
                      Estabelecemos preços mínimos garantidos, assegurando que você tenha retorno financeiro previsível e atrativo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-300 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Suporte Técnico Completo</h4>
                    <p className="text-gray-200">
                      Desde o planejamento do desbaste até a entrega final, oferecemos suporte técnico em todas as etapas do processo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-6 text-center">Potencial de Valorização</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded">
                  <span>Venda Tradicional (tora)</span>
                  <span className="font-bold">R$ 500/m³</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary/20 rounded">
                  <span>Nossa Parceria (beneficiada)</span>
                  <span className="font-bold text-yellow-300">A ser apresentado na reunião</span>
                </div>
                <div className="text-center pt-4">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">+212%</div>
                  <div className="text-sm">de valorização média</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-center">
                  * Valores estimados baseados em casos reais. 
                  Resultados podem variar conforme qualidade e mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programação do Workshop */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Programação do Workshop
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Presentation className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>Manhã (9h às 12h)</CardTitle>
                    <p className="text-sm text-muted-foreground">Fundamentos e Oportunidades</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Abertura e Apresentações</h4>
                      <p className="text-sm text-gray-600">Conheça outros produtores e suas experiências</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Mercado Atual do Mogno</h4>
                      <p className="text-sm text-gray-600">Tendências, preços e oportunidades</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Cadeia de Valor da Madeira</h4>
                      <p className="text-sm text-gray-600">Do desbaste ao produto final</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Casos de Sucesso</h4>
                      <p className="text-sm text-gray-600">Exemplos reais de valorização</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Handshake className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>Tarde (14h às 17h)</CardTitle>
                    <p className="text-sm text-muted-foreground">Parceria e Networking</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Apresentação da Parceria</h4>
                      <p className="text-sm text-gray-600">Modelo de negócio detalhado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Simulações Financeiras</h4>
                      <p className="text-sm text-gray-600">Calcule seu potencial de retorno</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Mesa Redonda</h4>
                      <p className="text-sm text-gray-600">Discussão aberta e esclarecimentos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Networking e Encerramento</h4>
                      <p className="text-sm text-gray-600">Conexões e próximos passos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Informações do Evento */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Informações do Evento
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Data</h3>
                <p className="text-gray-600">Sábado, 20 de setembro de 2025</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Horário</h3>
                <p className="text-gray-600">9h às 17h (com intervalo para almoço)</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Local</h3>
                <p className="text-gray-600">Franca, SP</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Vagas</h3>
                <p className="text-gray-600">Limitadas a 50 produtores</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-muted/50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4 text-center">O que está incluído:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Coffee break manhã e tarde</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Acesso ao grupo exclusivo de produtores</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Mudas de Mogno Africano</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Consultoria pós-evento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section id="inscricao" className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Garante Sua Vaga Agora
            </h2>
            <p className="text-xl text-center text-gray-200 mb-12">
              Preencha o formulário abaixo e nossa equipe entrará em contato para confirmar sua participação.
            </p>

            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                      <Input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefone/WhatsApp *</label>
                      <Input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        required
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Cidade/Estado *</label>
                      <Input
                        type="text"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleInputChange}
                        required
                        placeholder="Cidade, Estado"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Hectares Plantados *</label>
                      <Input
                        type="number"
                        name="hectares"
                        value={formData.hectares}
                        onChange={handleInputChange}
                        required
                        placeholder="Ex: 10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Ano do Plantio *</label>
                      <Input
                        type="number"
                        name="anoPlantio"
                        value={formData.anoPlantio}
                        onChange={handleInputChange}
                        required
                        placeholder="Ex: 2018"
                        min="2000"
                        max="2025"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Conte-nos um pouco sobre sua experiência com mogno africano ou suas expectativas para o workshop..."
                      rows={4}
                    />
                  </div>

                  <div className="text-center">
                    <Button type="submit" size="lg" className="btn-secondary text-lg px-12 py-4">
                      <Award className="h-5 w-5 mr-2" />
                      Confirmar Inscrição
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato Direto */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Tem Dúvidas? Fale Conosco
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nossa equipe está pronta para esclarecer todas as suas dúvidas sobre o workshop e a proposta de parceria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary text-lg px-8 py-4" onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" onClick={() => window.open('tel:+5511999999999')}>
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </Button>
            <Link to="/contato">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <Mail className="h-5 w-5 mr-2" />
                Enviar E-mail
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Workshop

