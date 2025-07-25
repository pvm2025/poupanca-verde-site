import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Mogno Africano: O Investimento que Transforma o Agronegócio',
      date: '20 de Julho, 2024',
      category: 'Investimento',
      image: '/images/blog-post-1.webp',
      excerpt: 'Descubra como o mogno africano está revolucionando o agronegócio brasileiro, oferecendo uma alternativa sustentável e altamente rentável para produtores e investidores.',
      link: '/blog/post-1'
    },
    {
      id: 2,
      title: 'Desbaste e Corte Final: Maximizando o Lucro da Sua Floresta',
      date: '15 de Julho, 2024',
      category: 'Manejo Florestal',
      image: '/images/blog-post-2.webp',
      excerpt: 'Entenda as melhores práticas para o desbaste e corte final do mogno africano, garantindo a máxima valorização da sua madeira e otimizando o retorno do seu investimento.',
      link: '/blog/post-2'
    },
    {
      id: 3,
      title: 'Usos Nobres da Madeira de Mogno Africano: Além da Tora',
      date: '10 de Julho, 2024',
      category: 'Mercado',
      image: '/images/blog-post-3.webp',
      excerpt: 'Explore a versatilidade da madeira de mogno africano e descubra como ela é utilizada em produtos de alto valor agregado, desde móveis de luxo até instrumentos musicais.',
      link: '/blog/post-3'
    },
    {
      id: 4,
      title: 'Como Escolher Mudas de Mogno Africano de Qualidade',
      date: '05 de Julho, 2024',
      category: 'Mudas',
      image: '/images/blog-post-4.webp',
      excerpt: 'Guia completo para identificar mudas de mogno africano de alta genética e sanidade, essenciais para o sucesso do seu plantio e a rentabilidade da sua floresta.',
      link: '/blog/post-4'
    },
    {
      id: 5,
      title: 'Mogno Africano: Um Investimento Sustentável e Rentável',
      date: '25 de Julho, 2024',
      category: 'Sustentabilidade, Investimento',
      image: '/images/blog-post-5.webp',
      excerpt: 'Descubra como conciliar lucratividade e responsabilidade ambiental com o cultivo de mogno africano.',
      link: '/blog/post-5'
    },
    {
      id: 6,
      title: 'O Potencial do Mogno Africano no Cenário Florestal Brasileiro',
      date: '26 de Julho, 2024',
      category: 'Mercado, Agronegócio, Brasil',
      image: '/images/blog-post-6.webp',
      excerpt: 'Análise do crescimento e das perspectivas para o cultivo de mogno africano no Brasil.',
      link: '/blog/post-6'
    },
  ];

  return (
    <div className="blog-page">
      <section className="hero-section text-white text-center py-20">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Blog Poupança Verde Mudas
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-200">
            Conteúdo exclusivo sobre mogno africano, investimento florestal e sustentabilidade.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Últimas Publicações
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Card key={post.id} className="card-hover overflow-hidden">
                <Link to={post.link}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <CardHeader>
                  <CardTitle className="text-xl font-bold mb-2">
                    <Link to={post.link} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" /> {post.date}
                    <Tag className="h-4 w-4 ml-4 mr-1" /> {post.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link to={post.link} className="text-primary hover:underline font-semibold">
                    Leia Mais
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Não Encontrou o que Procurava?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Envie sua sugestão de tema ou dúvida para nossa equipe de especialistas.
          </p>
          <Link to="/contato" className="btn-primary">
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;


