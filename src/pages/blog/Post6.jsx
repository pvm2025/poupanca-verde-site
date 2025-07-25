import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, BarChart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Post6 = () => {
  return (
    <div className="blog-post-page">
      <section className="hero-section text-white text-center py-20">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            O Potencial do Mogno Africano no Cenário Florestal Brasileiro
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-200">
            Análise do crescimento e das perspectivas para o cultivo de mogno africano no Brasil.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up animate-delay-400">
            <span className="flex items-center text-lg mr-4"><Calendar className="h-5 w-5 mr-2" /> 26 de Julho, 2024</span>
            <span className="flex items-center text-lg"><Tag className="h-5 w-5 mr-2" /> Mercado, Agronegócio, Brasil</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max prose lg:prose-xl mx-auto">
          <img src="/images/blog-post-6.webp" alt="Potencial do Mogno Africano no Brasil" className="w-full rounded-lg shadow-lg mb-8" />

          <p>
            O Brasil, com sua vasta extensão territorial e condições climáticas favoráveis, tem se consolidado como um polo de produção florestal. Dentro desse cenário, o mogno africano (gênero <em>Khaya</em>) tem ganhado destaque como uma alternativa promissora para diversificação de investimentos e produção de madeira nobre.
          </p>

          <h2>Crescimento Exponencial e Perspectivas</h2>
          <p>
            Nos últimos anos, observamos um crescimento significativo na área plantada de mogno africano no país. Impulsionado pela demanda global por madeiras sustentáveis e de alta qualidade, o cultivo tem atraído tanto grandes investidores quanto pequenos e médios produtores rurais.
          </p>
          <div className="flex justify-center my-8">
            <BarChart className="h-24 w-24 text-primary" />
          </div>
          <p>
            Dados recentes indicam que a área cultivada já ultrapassa X hectares (<em>referência aos dados do PDF fornecido anteriormente</em>), com projeções otimistas para os próximos anos. Esse crescimento é reflexo não apenas da rentabilidade da cultura, mas também da crescente conscientização sobre a importância da silvicultura para a economia e o meio ambiente.
          </p>

          <h2>Vantagens Competitivas do Brasil</h2>
          <p>
            O Brasil possui vantagens competitivas únicas para o cultivo de mogno africano:
          </p>
          <ul>
            <li><strong className="text-primary">Clima e Solo:</strong> Condições edafoclimáticas ideais em diversas regiões, que favorecem o rápido desenvolvimento das árvores.</li>
            <li><strong className="text-primary">Tecnologia e Pesquisa:</strong> Avanços em pesquisa e desenvolvimento, com instituições como a Embrapa, que fornecem informações valiosas para o manejo e aprimoramento genético.</li>
            <li><strong className="text-primary">Mercado Interno e Externo:</strong> Crescente demanda por madeira nobre tanto no mercado nacional (móveis, construção civil) quanto internacional (exportação para Europa, Ásia e América do Norte).</li>
            <li><strong className="text-primary">Sustentabilidade:</strong> O cultivo em florestas plantadas alivia a pressão sobre as florestas nativas, contribuindo para a conservação da biodiversidade e a mitigação das mudanças climáticas.</li>
          </ul>

          <h2>Desafios e Oportunidades</h2>
          <p>
            Apesar do cenário promissor, o setor enfrenta desafios como a necessidade de maior disseminação de conhecimento técnico, acesso a linhas de crédito específicas e aprimoramento da logística de escoamento da produção. No entanto, esses desafios representam também grandes oportunidades para inovação e desenvolvimento de novas soluções.
          </p>
          <p>
            A Poupança Verde Mudas está comprometida em ser parte ativa desse crescimento, fornecendo mudas de alta qualidade e suporte técnico para que mais investidores possam aproveitar o potencial do mogno africano e construir um futuro verde e rentável para o Brasil.
          </p>

          <div className="mt-12 text-center">
            <Link to="/contato">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                Fale com um Especialista
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post6;


