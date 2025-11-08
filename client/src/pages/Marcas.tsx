import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, DollarSign, Users, TrendingUp } from "lucide-react";

export default function Marcas() {
  return (
    <div className="w-full py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Confira Nossas Marcas
            </h1>
            <p className="text-xl text-muted-foreground">
              Conheça os aplicativos inovadores que fazem parte do portfólio Sistema Sem Fronteira
            </p>
          </div>

          {/* Card do Caryo */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Imagem */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-8 md:p-12">
                <div className="w-full max-w-[500px] aspect-square bg-white/50 backdrop-blur rounded-lg flex items-center justify-center border-2 border-primary/20">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">Caryo</div>
                    <div className="text-xl text-muted-foreground">Mobilidade Inteligente</div>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-3xl">Caryo</CardTitle>
                  <CardDescription className="text-base">
                    Plataforma de mobilidade urbana que revoluciona o transporte por aplicativo
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Por que escolher o Caryo?</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">100% da Receita para o Motorista</h4>
                          <p className="text-sm text-muted-foreground">
                            Sem taxas por corrida! Você fica com todo o valor pago pelo passageiro. 
                            Apenas uma mensalidade fixa de <strong>R$ 200,00</strong>.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Preços Justos e Transparentes</h4>
                          <p className="text-sm text-muted-foreground">
                            Passageiros pagam apenas <strong>R$ 15,00</strong> por corridas de até 3km. 
                            Acima de 3km, apenas <strong>R$ 0,80 por 100 metros</strong> adicionais.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Modelo de Negócio Sustentável</h4>
                          <p className="text-sm text-muted-foreground">
                            Sem surpresas! Você sabe exatamente quanto vai pagar por mês, 
                            independente do número de corridas realizadas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground/80">
                      <strong>MVP em desenvolvimento:</strong> O Caryo está atualmente em fase de 
                      desenvolvimento como produto mínimo viável (MVP), oferecendo uma solução 
                      inovadora para motoristas que buscam autonomia financeira e transparência.
                    </p>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://caryo.app', '_blank')}
                  >
                    Confira Você Mesmo
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>

          {/* Mensagem de Futuras Marcas */}
          <div className="text-center mt-16 p-8 border rounded-lg bg-muted/30">
            <h3 className="text-2xl font-semibold mb-3">Mais Inovações em Breve</h3>
            <p className="text-muted-foreground">
              Estamos constantemente desenvolvendo novas soluções digitais. 
              Fique atento para conhecer as próximas marcas do Sistema Sem Fronteira!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
