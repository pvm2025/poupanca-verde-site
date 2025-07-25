import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Leaf, Shield, Star, Truck, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Mudas = () => {
  return (
    <div className="mudas-page">
      <section className="hero-section text-white text-center py-20">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Mudas de Mogno Africano de Alta Qualidade
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-200">
            14 anos de experiência produzindo as melhores mudas do mercado.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up animate-delay-400">
            <Link to="/contato" className="btn-primary">
              Solicite um Orçamento
            </Link>

          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Nossos Diferenciais
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <Star className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Genética Superior</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Utilizamos sementes certificadas de matrizes selecionadas, garantindo mudas com alta performance de crescimento e resistência a pragas e doenças.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Substrato de Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Desenvolvemos um substrato especial rico em nutrientes, proporcionando o desenvolvimento ideal das raízes e garantindo maior taxa de sobrevivência no plantio.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Suporte Técnico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Oferecemos consultoria completa desde o planejamento do plantio até o manejo inicial da floresta, garantindo o sucesso do seu investimento.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Truck className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Entrega Segura</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Sistema de embalagem e transporte especializado que preserva a integridade das mudas durante todo o trajeto até sua propriedade.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Garantia de Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Todas as mudas passam por rigoroso controle de qualidade e oferecemos garantia de reposição para mudas que não se adaptarem adequadamente.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Leaf className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Produção Sustentável</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Nosso viveiro segue práticas sustentáveis de produção, contribuindo para a preservação ambiental e o desenvolvimento de uma silvicultura responsável.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Nosso Viveiro em Imagens
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Transparência e qualidade desde a semente. Veja de perto o cuidado que dedicamos a cada muda.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <img src="/images/viveiro-mudas-1.jpg" alt="Mudas de Mogno Africano no Viveiro" className="w-full h-64 object-cover rounded-lg mb-4" />
              <CardContent>
                <h3 className="text-xl font-bold mb-2">Mudas Saudáveis e Robustas</h3>
                <p className="text-gray-600">Nossas mudas são cultivadas em ambiente controlado, garantindo o vigor necessário para um plantio de sucesso.</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <img src="/images/viveiro-mudas-2.jpg" alt="Detalhe das Raízes das Mudas" className="w-full h-64 object-cover rounded-lg mb-4" />
              <CardContent>
                <h3 className="text-xl font-bold mb-2">Sistema Radicular Desenvolvido</h3>
                <p className="text-gray-600">Raízes fortes e bem formadas são a base para o crescimento saudável da sua floresta.</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <img src="/images/viveiro-mudas-3.jpg" alt="Equipe da Poupança Verde Mudas no Viveiro" className="w-full h-64 object-cover rounded-lg mb-4" />
              <CardContent>
                <h3 className="text-xl font-bold mb-2">Cuidado e Expertise</h3>
                <p className="text-gray-600">Nossa equipe especializada acompanha de perto cada etapa do desenvolvimento das mudas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Especificações Técnicas
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Características das Mudas</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Altura:</strong> 30-50 cm (prontas para plantio)
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Idade:</strong> 6-8 meses no viveiro
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Recipiente:</strong> Tubetes de 290ml ou sacos plásticos
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Sistema radicular:</strong> Bem desenvolvido e equilibrado
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Sanidade:</strong> Livres de pragas e doenças
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Rustificação:</strong> Adaptadas para plantio a campo
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Processo de Produção</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-lg">1. Seleção de Sementes</h4>
                  <p className="text-gray-700">Sementes certificadas de matrizes selecionadas por qualidade genética.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-lg">2. Germinação Controlada</h4>
                  <p className="text-gray-700">Ambiente controlado com temperatura e umidade ideais para germinação.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-lg">3. Desenvolvimento</h4>
                  <p className="text-gray-700">Acompanhamento diário com irrigação, adubação e controle fitossanitário.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-lg">4. Rustificação</h4>
                  <p className="text-gray-700">Adaptação gradual às condições de campo antes da expedição.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Pronto para Começar seu Plantio?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e solicite um orçamento personalizado para suas mudas de mogno africano. 
            Nossa equipe está pronta para orientá-lo em todas as etapas do processo.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contato" className="btn-primary">
              Solicitar Orçamento
            </Link>
            <Link to="/workshop" className="btn-secondary">
              Conhecer o Workshop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mudas;

