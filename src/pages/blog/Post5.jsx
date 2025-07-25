import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, DollarSign, Leaf, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Post5 = () => {
  return (
    <div className="blog-post-page">
      <section className="hero-section text-white text-center py-20">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Mogno Africano: Um Investimento Sustentável e Rentável
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-200">
            Descubra como conciliar lucratividade e responsabilidade ambiental com o cultivo de mogno africano.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up animate-delay-400">
            <span className="flex items-center text-lg mr-4"><Calendar className="h-5 w-5 mr-2" /> 25 de Julho, 2024</span>
            <span className="flex items-center text-lg"><Tag className="h-5 w-5 mr-2" /> Sustentabilidade, Investimento</span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max prose lg:prose-xl mx-auto">
          <img src="/images/blog-post-5.webp" alt="Mogno Africano: Investimento Sustentável" className="w-full rounded-lg shadow-lg mb-8" />

          <p>
            No cenário atual, onde a busca por investimentos rentáveis se cruza com a crescente preocupação ambiental, o mogno africano (gênero <em>Khaya</em>) surge como uma solução promissora. Esta árvore de rápido crescimento e madeira de alto valor agregado oferece uma oportunidade única para quem deseja construir um patrimônio sólido enquanto contribui ativamente para a sustentabilidade do planeta.
          </p>

          <h2>Por Que Investir em Mogno Africano?</h2>
          <p>
            O cultivo de mogno africano vai muito além de um simples plantio. É um investimento de longo prazo que gera múltiplos benefícios:
          </p>
          <ul>
            <li><strong className="text-primary">Alta Rentabilidade:</strong> A madeira de mogno africano é altamente valorizada no mercado internacional, utilizada em móveis de luxo, instrumentos musicais, construção naval e acabamentos de alto padrão. Seu preço por metro cúbico é significativamente superior ao de outras madeiras comerciais.</li>
            <li><strong className="text-primary">Crescimento Rápido:</strong> Comparado a outras espécies de madeiras nobres, o mogno africano possui um ciclo de crescimento relativamente curto, permitindo desbastes e cortes finais em prazos mais atrativos para o investidor.</li>
            <li><strong className="text-primary">Sustentabilidade Ambiental:</strong> O plantio de florestas de mogno africano contribui para o sequestro de carbono, a recuperação de áreas degradadas e a redução da pressão sobre as florestas nativas. É um investimento com impacto positivo direto no meio ambiente.</li>
            <li><strong className="text-primary">Baixa Manutenção:</strong> Após o estabelecimento inicial, o mogno africano demanda um manejo relativamente simples, tornando-o acessível mesmo para investidores sem experiência prévia em silvicultura.</li>
          </ul>

          <h2>O Ciclo de Valorização do Investimento</h2>
          <p>
            O retorno do investimento em mogno africano ocorre em etapas, com oportunidades de receita ao longo do ciclo de vida da floresta:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 border rounded-lg shadow-sm">
              <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg">Primeiro Desbaste (Ano 6-8)</h3>
              <p className="text-sm text-gray-600">Madeira para usos menos nobres, cobrindo custos de manejo.</p>
            </div>
            <div className="text-center p-4 border rounded-lg shadow-sm">
              <TrendingUp className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg">Segundo Desbaste (Ano 10-12)</h3>
              <p className="text-sm text-gray-600">Madeira de maior diâmetro e qualidade, com valor comercial significativo.</p>
            </div>
            <div className="text-center p-4 border rounded-lg shadow-sm">
              <Leaf className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg">Corte Final (Ano 15-20)</h3>
              <p className="text-sm text-gray-600">Madeira nobre de alta qualidade, gerando o máximo retorno do investimento.</p>
            </div>
          </div>

          <h2>Compromisso com a Sustentabilidade</h2>
          <p>
            Na Poupança Verde Mudas, acreditamos que a rentabilidade e a sustentabilidade devem andar de mãos dadas. Nossas mudas são produzidas com genética superior e práticas de viveiro que respeitam o meio ambiente, garantindo que seu investimento não apenas prospere financeiramente, mas também contribua para um futuro mais verde.
          </p>
          <p>
            Investir em mogno africano é investir em um legado. É a oportunidade de participar de um mercado em expansão, com demanda crescente por produtos sustentáveis e de alta qualidade. Junte-se a nós e comece a construir sua floresta de valor!
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

export default Post5;


