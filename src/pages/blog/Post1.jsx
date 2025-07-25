import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';

const Post1 = () => {
  return (
    <div className="blog-post-page">
      <section className="hero-section text-white text-center py-20">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Mogno Africano: O Investimento que Transforma o Agronegócio
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-200">
            Descubra como o mogno africano está revolucionando o agronegócio brasileiro.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto">
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Calendar className="h-4 w-4 mr-1" /> 20 de Julho, 2024
            <Tag className="h-4 w-4 ml-4 mr-1" /> Investimento
          </div>

          <img 
            src="/src/assets/blog-post-1.webp" 
            alt="Mogno Africano: O Investimento que Transforma o Agronegócio" 
            className="w-full h-auto rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            <p>
              O agronegócio brasileiro, conhecido por sua pujança e inovação, está testemunhando uma nova revolução: o cultivo de mogno africano. Esta espécie exótica, adaptada com sucesso ao clima e solo brasileiros, emerge como uma alternativa de investimento florestal que combina alta rentabilidade com sustentabilidade ambiental, transformando a paisagem e a economia rural.
            </p>
            <p>
              Tradicionalmente, o setor florestal no Brasil tem sido dominado por espécies como eucalipto e pinus, voltadas principalmente para a produção de celulose e energia. No entanto, o mogno africano (gêneros <em>Khaya grandifoliola</em> e <em>Khaya senegalensis</em>) se destaca por produzir uma madeira nobre, de alta qualidade, com valor de mercado significativamente superior.
            </p>
            
            <h3>Por Que o Mogno Africano é um Investimento Inteligente?</h3>
            <p>
              A valorização da madeira nobre é um dos principais atrativos. Com a crescente restrição ao corte de madeiras nativas e a demanda global por produtos sustentáveis, o mogno africano preenche uma lacuna importante no mercado. Sua madeira é altamente valorizada em indústrias como a moveleira (móveis de luxo), construção civil (acabamentos de alto padrão), naval (embarcações) e até mesmo na fabricação de instrumentos musicais.
            </p>
            <p>
              Além do valor intrínseco da madeira, o ciclo de produção do mogno africano é relativamente curto para uma floresta de madeira nobre, com o primeiro desbaste podendo ocorrer a partir do 6º ano e o corte final entre 15 e 25 anos, dependendo do manejo. Isso permite um retorno do investimento em um prazo mais acessível para investidores e produtores rurais.
            </p>

            <h3>Sustentabilidade e Impacto Ambiental</h3>
            <p>
              Investir em mogno africano é também investir no futuro do planeta. As florestas plantadas contribuem ativamente para o sequestro de carbono da atmosfera, ajudando a mitigar os efeitos das mudanças climáticas. Além disso, o cultivo de espécies exóticas como o mogno africano alivia a pressão sobre as florestas nativas, promovendo a conservação da biodiversidade.
            </p>
            <p>
              A Poupança Verde Mudas, com seus 14 anos de experiência e baseada em estudos aprofundados da Embrapa, oferece não apenas mudas de alta qualidade genética, mas também todo o suporte técnico necessário para que o produtor rural ou investidor possa iniciar e manejar sua floresta com segurança e eficiência. Nosso compromisso é com a rentabilidade do seu investimento e com a sustentabilidade do nosso planeta.
            </p>

            <p>
              Se você busca um investimento seguro, rentável e com impacto positivo, o mogno africano é a escolha ideal. Fale com nossos especialistas e descubra como começar a construir seu legado verde hoje mesmo.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link to="/blog" className="btn-secondary inline-flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2" /> Voltar para o Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post1;


