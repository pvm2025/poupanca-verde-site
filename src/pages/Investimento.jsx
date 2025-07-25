import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, DollarSign, Leaf, ShieldCheck, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Investimento = () => {
  return (
    <div className="investimento-page">
      <section className="hero-section text-white text-center py-20">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Mogno Africano: O Investimento do Futuro
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-200">
            Rentabilidade, Sustentabilidade e Segurança para o seu Legado.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up animate-delay-400">
            <Link to="/contato" className="btn-primary">
              Fale com um Especialista
            </Link>

          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Por Que Investir em Mogno Africano?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <Leaf className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Sustentabilidade Comprovada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  O mogno africano é uma alternativa ecológica às madeiras nativas, contribuindo para a preservação ambiental e o sequestro de carbono. Um investimento que gera impacto positivo.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Alta Rentabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Com um ciclo de corte relativamente curto e alta demanda no mercado de madeiras nobres, o mogno africano oferece retornos financeiros atrativos e crescentes ao longo do tempo.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Segurança e Solidez</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Investimento em ativo real (terra e floresta), menos suscetível às flutuações do mercado financeiro. Um patrimônio que se valoriza e pode ser transmitido por gerações.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <DollarSign className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Mercado Aquecido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A crescente restrição ao uso de madeiras nativas e a demanda global por produtos sustentáveis impulsionam o mercado de mogno africano, garantindo liquidez para sua produção.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Manejo Simplificado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Comparado a outras culturas, o mogno africano exige manejo relativamente simples, tornando-o acessível mesmo para investidores sem experiência prévia em silvicultura.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Leaf className="h-10 w-10 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold">Versatilidade da Madeira</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Sua madeira é valorizada em diversas indústrias, como móveis de luxo, instrumentos musicais, construção naval e acabamentos de alto padrão, ampliando as oportunidades de comercialização.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Pronto para Construir seu Legado?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Invista em mogno africano e garanta um futuro próspero e sustentável para você e sua família.
          </p>
          <Link to="/contato" className="btn-primary">
            Fale com um Especialista
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Investimento;


