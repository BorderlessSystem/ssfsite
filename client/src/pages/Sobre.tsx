import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, User } from "lucide-react";

export default function Sobre() {
  return (
    <div className="w-full py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre Nós
            </h1>
            <p className="text-xl text-muted-foreground">
              Conheça a história, missão e visão do Sistema Sem Fronteira
            </p>
          </div>

          {/* Missão e Visão */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Missão */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Nossa Missão</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Desenvolver e administrar soluções digitais inovadoras que eliminam barreiras 
                  tecnológicas e conectam pessoas de forma eficiente, acessível e sustentável. 
                  Nosso compromisso é criar aplicativos que transformem negócios e melhorem a 
                  vida das pessoas através da tecnologia, oferecendo modelos de assinatura justos 
                  e transparentes que beneficiem tanto nossos parceiros quanto seus usuários finais.
                </p>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Nossa Visão</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Ser reconhecida como uma das principais holdings de tecnologia do Brasil, 
                  referência em desenvolvimento e gestão de aplicativos por assinatura. 
                  Buscamos criar um portfólio diversificado de soluções digitais que atendam 
                  diferentes setores do mercado, sempre priorizando a inovação, a qualidade 
                  e o impacto positivo na sociedade. Queremos ser a escolha número um para 
                  empreendedores que buscam parceiros tecnológicos confiáveis e visionários.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Valores */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">Inovação</h3>
                  <p className="text-sm text-muted-foreground">
                    Buscamos constantemente novas tecnologias e abordagens para criar 
                    soluções que realmente fazem a diferença.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">Transparência</h3>
                  <p className="text-sm text-muted-foreground">
                    Acreditamos em relações claras e honestas com nossos parceiros, 
                    colaboradores e usuários.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">Sustentabilidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Desenvolvemos modelos de negócio que são financeiramente viáveis 
                    e socialmente responsáveis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sobre o Fundador */}
          <Card className="border-2">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Sobre o Fundador</h2>
              </div>

              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                {/* Foto do Proprietário - Placeholder */}
                <div className="flex justify-center md:justify-start">
                  <div className="w-[300px] h-[300px] rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center">
                    <div className="text-center">
                      <User className="h-20 w-20 text-primary/40 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Foto do Fundador<br />
                        (Espaço reservado)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Texto sobre o Proprietário - Placeholder editável */}
                <div className="flex flex-col justify-center">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      <em className="text-muted-foreground">
                        [Este espaço está reservado para você adicionar informações sobre o fundador 
                        da empresa - até 1500 caracteres]
                      </em>
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      Aqui você poderá compartilhar sua trajetória profissional, experiências que 
                      o levaram a criar o Sistema Sem Fronteira, sua visão sobre tecnologia e 
                      inovação, e o que o motiva a desenvolver soluções que transformam a vida 
                      das pessoas. Este espaço é seu para contar sua história e conectar-se com 
                      parceiros, colaboradores e usuários de forma autêntica e inspiradora.
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      <strong>Nota:</strong> Para editar este conteúdo e adicionar sua foto, 
                      você poderá utilizar o painel administrativo (funcionalidade a ser implementada 
                      futuramente) ou entrar em contato com o suporte técnico.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
