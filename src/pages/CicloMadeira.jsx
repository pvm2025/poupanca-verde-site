import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  TreePine,
  Hammer,
  Package,
  TrendingUp,
  Clock,
  DollarSign,
  Globe,
  Award,
  Scissors,
  Truck,
  Factory,
  Home,
  Music,
  Palette,
  MessageCircle
} from 'lucide-react'

const CicloMadeira = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center text-white">
        <div className="container-max text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Da Floresta ao 
              <span className="text-yellow-300"> Produto de Luxo</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Descubra como cada etapa do ciclo da madeira de mogno africano agrega valor ao seu investimento, 
              desde o primeiro desbaste até os produtos finais de alto valor agregado.
            </p>
            <Link to="/contato">
              <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                <MessageCircle className="h-5 w-5 mr-2" />
                Fale com um Especialista
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline do Ciclo */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            O Ciclo Completo de Valorização
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Cada fase do desenvolvimento da floresta representa uma oportunidade de retorno financeiro crescente.
          </p>

          <div className="relative">
            {/* Linha do tempo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {/* Fase 1: Plantio */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="flex items-center justify-center md:justify-end gap-3">
                        <CardTitle className="text-2xl text-primary">Ano 0-2: Estabelecimento</CardTitle>
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <TreePine className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Plantio das mudas de alta genética e cuidados iniciais. Investimento concentrado em 
                        preparação do solo, plantio e manutenção inicial da floresta.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Preparação do Solo</Badge>
                        <Badge variant="outline">Plantio</Badge>
                        <Badge variant="outline">Irrigação</Badge>
                        <Badge variant="outline">Controle de Pragas</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Fase 2: Crescimento */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div className="md:w-1/2">
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-primary">Ano 3-5: Desenvolvimento</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Período de crescimento acelerado. Manejo florestal intensivo com podas, 
                        adubação e monitoramento sanitário. A floresta ganha volume e valor.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Podas de Formação</Badge>
                        <Badge variant="outline">Adubação</Badge>
                        <Badge variant="outline">Monitoramento</Badge>
                        <Badge variant="outline">Crescimento Rápido</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Fase 3: Primeiro Desbaste */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <Card className="card-hover border-secondary">
                    <CardHeader>
                      <div className="flex items-center justify-center md:justify-end gap-3">
                        <CardTitle className="text-2xl text-secondary">Primeiro Desbaste</CardTitle>
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                          <Scissors className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Madeira não possui valor comercial significativo. Retorno financeiro cobre apenas custos de manejo. Podendo haver algum rendimento, a depender da destinação da madeira, distância do cliente, beneficiamento, dentre outros fatores.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-secondary">Primeira Receita</Badge>
                        <Badge variant="outline">Seleção Genética</Badge>
                        <Badge variant="outline">Madeira Jovem</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div className="md:w-1/2"></div>
              </div>

              {/* Fase 4: Segundo Desbaste */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div className="md:w-1/2">
                  <Card className="card-hover border-secondary">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                          <Hammer className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-secondary">Ano 10-12: Segundo Desbaste</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Madeira com maior diâmetro e qualidade superior. Mercado mais amplo e 
                        preços mais atrativos. Preparação para o corte final.
                      </p>
                      <div className="bg-secondary/10 p-4 rounded-lg mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="h-5 w-5 text-secondary" />
                          <span className="font-semibold text-secondary">Retorno Estimado</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          R$ 15.000 - R$ 25.000 por hectare (valores podem variar conforme mercado)
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-secondary">Alta Qualidade</Badge>
                        <Badge variant="outline">Maior Diâmetro</Badge>
                        <Badge variant="outline">Mercado Premium</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Fase 5: Corte Final */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 md:text-right">
                  <Card className="card-hover border-secondary bg-secondary/5">
                    <CardHeader>
                      <div className="flex items-center justify-center md:justify-end gap-3">
                        <CardTitle className="text-2xl text-secondary">Ano 15-20: Corte Final</CardTitle>
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        <strong>O grande momento!</strong> Madeira de primeira qualidade, com diâmetro ideal 
                        para produtos de alto valor agregado. Máximo retorno do investimento.
                      </p>
                      <div className="bg-secondary/20 p-4 rounded-lg mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="h-5 w-5 text-secondary" />
                          <span className="font-semibold text-secondary">Retorno Estimado</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          R$ 40.000 - R$ 80.000 por hectare (valores podem variar conforme mercado)
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-secondary">Máximo Valor</Badge>
                        <Badge variant="outline">Qualidade Premium</Badge>
                        <Badge variant="outline">Produtos de Luxo</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usos da Madeira */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Usos Nobres da Madeira de Mogno Africano
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            A versatilidade e beleza da madeira de mogno africano a tornam ideal para produtos de alto valor agregado.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Móveis de Luxo</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Mesas, cadeiras, estantes e móveis sob medida para residências e escritórios de alto padrão. 
                  A beleza natural da madeira agrega valor excepcional.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Valor agregado: 300-500% sobre a tora
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Music className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Instrumentos Musicais</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Violões, pianos, violinos e outros instrumentos. A qualidade acústica do mogno africano 
                  é reconhecida mundialmente pelos luthiers.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Valor agregado: 800-1200% sobre a tora
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Painéis e Laminados</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Painéis decorativos, laminados para arquitetura e design de interiores. 
                  Aplicação em projetos residenciais e comerciais sofisticados.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Valor agregado: 200-400% sobre a tora
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Palette className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Objetos de Arte</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Esculturas, objetos decorativos e peças de design exclusivas. 
                  Artistas e designers valorizam a trabalhabilidade da madeira.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Valor agregado: 500-1000% sobre a tora
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Factory className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Construção Naval</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Embarcações de luxo, iates e barcos especiais. A resistência à umidade 
                  e durabilidade tornam o mogno ideal para uso náutico.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Valor agregado: 400-600% sobre a tora
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Exportação</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Mercado internacional ávido por madeira tropical de origem legal. 
                  Europa, Ásia e América do Norte são grandes consumidores.
                </p>
                <div className="text-sm text-primary font-semibold">
                  Preços premium no mercado externo
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mercado e Tendências */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Mercado e Tendências
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Demanda Crescente</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Restrições ambientais:</strong> Crescente limitação ao uso de madeiras nativas 
                    aumenta a demanda por madeira de reflorestamento.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Mercado de luxo:</strong> Segmento premium em expansão, especialmente 
                    em móveis sob medida e instrumentos musicais.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Sustentabilidade:</strong> Consumidores e empresas buscam produtos 
                    com certificação de origem sustentável.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Exportação:</strong> Mercado internacional oferece preços premium 
                    para madeira tropical de qualidade.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Globe className="h-8 w-8" />
                    Preços de Referência
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span>Tora (m³)</span>
                        <span className="font-bold">R$ 800 - R$ 1.500</span>
                      </div>
                      <div className="text-sm text-gray-300">Preço base para madeira em tora</div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span>Madeira Serrada (m³)</span>
                        <span className="font-bold">R$ 2.000 - R$ 3.500</span>
                      </div>
                      <div className="text-sm text-gray-300">Primeira transformação</div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span>Produtos Acabados</span>
                        <span className="font-bold">R$ 5.000 - R$ 15.000/m³</span>
                      </div>
                      <div className="text-sm text-gray-300">Móveis e produtos finais</div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white/10 rounded-lg">
                    <p className="text-sm">
                      * Valores de referência baseados no mercado atual. 
                      Preços podem variar conforme qualidade, região e demanda.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Participar desta Cadeia de Valor?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Comece seu investimento em mogno africano hoje e faça parte de uma cadeia produtiva 
            sustentável e altamente rentável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/mudas">
              <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                <TreePine className="h-5 w-5 mr-2" />
                Conheça Nossas Mudas
              </Button>
            </Link>
            <Link to="/workshop">
              <Button size="lg" variant="outline" className="text-secondary border-secondary hover:bg-secondary hover:text-white text-lg px-8 py-4">
                <Award className="h-5 w-5 mr-2" />
                Workshop para Produtores
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CicloMadeira

