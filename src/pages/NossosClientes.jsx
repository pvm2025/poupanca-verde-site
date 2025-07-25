import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { User, TreePine, Package, Award } from 'lucide-react';

const NossosClientes = () => {
  const clientes = [
    {
      nome: 'Sr. Jorge Luiz',
      local: 'São João da Boa Vista - SP',
      descricao: 'Cliente que recebeu mudas para plantio em sua fazenda.',
      foto: '/images/cliente-jorge-luiz.webp',
      depoimento: 'Agradecemos ao sr. Jorge Luiz pela preferência!',
      linkMudas: true,
      linkWorkshop: false,
    },
    {
      nome: 'Dr. Luiz Carlos de Campos Prado',
      local: 'Jaú, SP (Brotas-SP - local do plantio)',
      descricao: 'Fundador do Grupo Campos Prado, com plantio de Mogno Africano de 6 meses (na foto). Entusiasta do investimento a longo prazo e preocupado com as gerações futuras.',
      foto: '/images/cliente-luiz-carlos-prado.webp',
      depoimento: 'Com um mínimo de trato, o Mogno Africano apresenta um desenvolvimento excepcional. Caminhar em sua floresta e cuidar do seu plantio é a sua terapia.',
      linkMudas: true,
      linkWorkshop: true,
    },
    {
      nome: 'Sra. Maria Dal Col e Sr. João Dal Col',
      local: 'Bauru - SP (plantio em Itararé - SP)',
      descricao: 'Clientes que receberam mudas para plantio.',
      foto: '/images/cliente-maria-joao-dalcol.webp',
      depoimento: 'Agradecemos à sra. Maria e ao sr. João pela preferência!',
      linkMudas: true,
      linkWorkshop: false,
    },
    {
      nome: 'Sr. Luciano Esparapane',
      local: 'Palmeira do Oeste - SP',
      descricao: 'Cliente com plantio de 6 mil mudas, com 3 meses (na foto).',
      foto: '/images/cliente-luciano-esparapane.webp',
      depoimento: 'Agradecemos ao sr. Luciano pela preferência!',
      linkMudas: true,
      linkWorkshop: false,
    },
    {
      nome: 'Sr. Hugo',
      local: 'Iguatemi - MS',
      descricao: 'Cliente com mogno recém plantado em sua fazenda.',
      foto: '/images/cliente-hugo.webp',
      depoimento: 'Agradecemos ao sr. Hugo pela preferência!',
      linkMudas: true,
      linkWorkshop: false,
    },
    {
      nome: 'Sra. Renata',
      local: 'Cajuru - SP',
      descricao: 'Cliente que recebeu mudas para plantio.',
      foto: '/images/cliente-renata.webp',
      depoimento: 'Agradecemos mais uma vez à sra. Renata pela preferência!',
      linkMudas: true,
      linkWorkshop: false,
    },
    {
      nome: 'Sr. João Santos',
      local: 'Piacatu - SP',
      descricao: 'Cliente que recebeu mudas para plantio.',
      foto: '/images/cliente-joao-santos.webp',
      depoimento: 'Agradecemos ao sr. João pela preferência!',
      linkMudas: true,
      linkWorkshop: false,
    },
    {
      nome: 'Sr. Márcio Rogério',
      local: 'Alvares Machado - SP',
      descricao: 'Cliente que recebeu mudas para plantio.',
      foto: '/images/cliente-marcio-rogerio.webp',
      depoimento: 'Agradecemos ao sr. Márcio pela preferência!',
      linkMudas: true,
      linkWorkshop: false,
    },
    {
      nome: 'Sr. Emerson Ferreira',
      local: 'Santo Antônio da Alegria - SP',
      descricao: 'Cliente que recebeu mudas para plantio.',
      foto: '/images/cliente-emerson-ferreira.webp',
      depoimento: 'Agradecemos ao sr. Emerson pela preferência!',
      linkMudas: true,
      linkWorkshop: false,
    },
    {
      nome: 'Sr. Luiz Henrique',
      local: 'Areado - MG',
      descricao: 'Cliente que recebeu mudas para plantio.',
      foto: '/images/cliente-luiz-henrique.webp',
      depoimento: 'Agradecemos ao sr. Luiz Henrique pela preferência!',
      linkMudas: true,
      linkWorkshop: false,
    },
    {
      nome: 'Sr. Fernando',
      local: 'Franca - SP',
      descricao: 'Cliente que recebeu mudas para plantio.',
      foto: '/images/cliente-fernando.webp',
      depoimento: 'Agradecemos ao sr. Fernando pela preferência!',
      linkMudas: true,
      linkWorkshop: false,
    },
    {
      nome: 'Sr. Daniel Varesio',
      local: 'Curitiba - PR',
      descricao: 'Cliente que recebeu mudas para plantio.',
      foto: '/images/cliente-daniel-varesio.webp',
      depoimento: 'Agradecemos ao sr. Daniel pela preferência!',
      linkMudas: true,
      linkWorkshop: false,
    },
    {
      nome: 'Sr. Marcelo Ribeiro',
      local: 'Águas de Lindóia - SP',
      descricao: 'Cliente que recebeu mudas para plantio.',
      foto: '/images/cliente-marcelo-ribeiro.webp',
      depoimento: 'Agradecemos ao sr. Marcelo pela preferência!',
      linkMudas: true,
      linkWorkshop: false,
    },
  ];

  return (
    <div className="nossos-clientes-page">
      <section className="hero-section text-white text-center py-20">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Histórias de Sucesso com Mogno Africano
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-200">
            Conheça alguns de nossos clientes que estão construindo um futuro verde e rentável.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Quem Confia na Poupança Verde Mudas
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {clientes.map((cliente, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <CardHeader className="p-0">
                  <img 
                    src={cliente.foto} 
                    alt={cliente.nome} 
                    className="w-full h-64 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <User className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <CardTitle className="text-2xl font-bold text-primary">{cliente.nome}</CardTitle>
                      <p className="text-gray-600">{cliente.local}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{cliente.descricao}</p>
                  <blockquote className="text-lg italic text-gray-800 border-l-4 border-primary pl-4 mb-6">
                    "{cliente.depoimento}"
                  </blockquote>
                  <div className="flex flex-wrap gap-3">
                    {cliente.linkMudas && (
                      <Link to="/mudas">
                        <Button size="sm" className="btn-secondary">
                          <TreePine className="h-4 w-4 mr-2" /> Comprar Mudas
                        </Button>
                      </Link>
                    )}
                    {cliente.linkWorkshop && (
                      <Link to="/workshop">
                        <Button size="sm" className="btn-primary">
                          <Award className="h-4 w-4 mr-2" /> Participar do Workshop
                        </Button>
                      </Link>
                    )}
                    <Link to="/contato">
                      <Button size="sm" variant="outline">
                        <Package className="h-4 w-4 mr-2" /> Fale Conosco
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30 text-center">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Seja o Próximo a Construir um Legado Verde!
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Inspire-se nas histórias de sucesso e comece hoje mesmo seu investimento em mogno africano. 
            Nossa equipe está pronta para te guiar em cada passo.
          </p>
          <Link to="/contato">
            <Button size="lg" className="btn-primary">
              Fale com um Especialista
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NossosClientes;

