import React from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const CalculosLucratividade = () => {
  return (
    <div className="calculos-lucratividade-page">
      <section className="hero-section text-white text-center py-20">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Cálculos Detalhados de Lucratividade
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animate-delay-200">
            Transparência e dados para o seu investimento em Mogno Africano.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max prose lg:prose-xl mx-auto">
          <p>
            Para auxiliar no seu planejamento e demonstrar o potencial de retorno do investimento em Mogno Africano, apresentamos abaixo uma tabela com os cálculos detalhados de lucratividade para cada etapa do ciclo da floresta. É importante ressaltar que estes são valores estimados e podem variar de acordo com as condições de mercado, manejo da floresta, localização e outros fatores.
          </p>

          <h2>Estimativa de Retorno por Etapa</h2>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Etapa</TableHead>
                <TableHead>Idade da Floresta</TableHead>
                <TableHead>Volume de Madeira (m³/ha)</TableHead>
                <TableHead>Preço Médio (R$/m³)</TableHead>
                <TableHead>Receita Estimada (R$/ha)</TableHead>
                <TableHead>Observações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Primeiro Desbaste</TableCell>
                <TableCell>Ano 6-8</TableCell>
                <TableCell>20 - 30</TableCell>
                <TableCell>50 - 100</TableCell>
                <TableCell>1.000 - 3.000</TableCell>
                <TableCell>Madeira para usos menos nobres (lenha, carvão, celulose). Retorno pode cobrir custos de manejo.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Segundo Desbaste</TableCell>
                <TableCell>Ano 10-12</TableCell>
                <TableCell>50 - 80</TableCell>
                <TableCell>200 - 400</TableCell>
                <TableCell>10.000 - 32.000</TableCell>
                <TableCell>Madeira para usos diversos (caixotaria, compensados). Maior valor comercial.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Corte Final</TableCell>
                <TableCell>Ano 15-20</TableCell>
                <TableCell>150 - 250</TableCell>
                <TableCell>500 - 1.000</TableCell>
                <TableCell>75.000 - 250.000</TableCell>
                <TableCell>Madeira nobre para usos de alto valor agregado (móveis de luxo, pisos, instrumentos musicais).</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <p className="mt-8">
            Lembramos que estes valores são apenas estimativas e servem como base para o planejamento. O sucesso do investimento depende de diversos fatores, incluindo a qualidade das mudas, o manejo adequado da floresta, as condições climáticas e as flutuações do mercado. A Poupança Verde Mudas está à disposição para oferecer consultoria e suporte em todas as etapas do seu projeto.
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

export default CalculosLucratividade;


