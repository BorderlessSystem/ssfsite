import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code, Smartphone, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Sistema Sem Fronteira
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Desenvolvimento e Administração de Aplicativos por Assinatura
            </p>
            <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
              Somos uma holding especializada em criar e gerenciar soluções digitais inovadoras 
              que transformam a forma como as pessoas e empresas se conectam através da tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marcas">
                <Button size="lg" className="w-full sm:w-auto">
                  Confira Nossas Marcas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/sobre">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Sobre Nós
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section className="w-full py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nosso Ramo de Atuação
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-lg border bg-card">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Desenvolvimento</h3>
                <p className="text-muted-foreground">
                  Criamos aplicativos modernos e escaláveis com as melhores tecnologias do mercado.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border bg-card">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gestão de Apps</h3>
                <p className="text-muted-foreground">
                  Administramos e otimizamos aplicativos para garantir a melhor experiência aos usuários.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border bg-card">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Modelo de Assinatura</h3>
                <p className="text-muted-foreground">
                  Oferecemos soluções sustentáveis baseadas em assinatura mensal para nossos parceiros.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="text-center leading-relaxed">
                O <strong>Sistema Sem Fronteira</strong> é uma empresa de tecnologia focada no desenvolvimento 
                e administração de sites e aplicativos pagos por assinatura. Nossa missão é criar produtos 
                digitais que eliminam barreiras e conectam pessoas de forma eficiente e inovadora. 
                Acreditamos no poder da tecnologia para transformar negócios e melhorar a vida das pessoas, 
                oferecendo soluções que combinam qualidade, acessibilidade e sustentabilidade financeira.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Conheça Nossas Marcas
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Descubra os aplicativos inovadores que fazem parte do nosso portfólio
            </p>
            <Link href="/marcas">
              <Button size="lg">
                Ver Todas as Marcas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
