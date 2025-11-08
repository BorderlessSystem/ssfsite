import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, UserCheck, AlertCircle } from "lucide-react";

export default function TermosLGPD() {
  return (
    <div className="w-full py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Termos LGPD
            </h1>
            <p className="text-xl text-muted-foreground">
              Lei Geral de Proteção de Dados Pessoais
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          {/* Introdução */}
          <Card className="mb-8 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-foreground/80 leading-relaxed">
                O <strong>Sistema Sem Fronteira</strong> está comprometido com a proteção da 
                privacidade e dos dados pessoais de todos os usuários, parceiros e visitantes 
                de nossos sites e aplicativos. Esta política de privacidade foi elaborada em 
                conformidade com a <strong>Lei nº 13.709/2018 (Lei Geral de Proteção de Dados 
                Pessoais - LGPD)</strong> e descreve como coletamos, usamos, armazenamos e 
                protegemos suas informações pessoais.
              </p>
            </CardContent>
          </Card>

          {/* Seções */}
          <div className="space-y-6">
            {/* 1. Coleta de Dados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  1. Dados Coletados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground/80">
                  Coletamos os seguintes tipos de dados pessoais:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li><strong>Dados de Identificação:</strong> Nome completo, e-mail e telefone (WhatsApp)</li>
                  <li><strong>Dados Profissionais:</strong> Currículo e informações de candidatura (quando aplicável)</li>
                  <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas e tempo de acesso</li>
                  <li><strong>Cookies:</strong> Utilizamos cookies para melhorar a experiência do usuário</li>
                </ul>
              </CardContent>
            </Card>

            {/* 2. Finalidade do Uso */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  2. Finalidade do Uso dos Dados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground/80">
                  Os dados pessoais coletados são utilizados para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Responder solicitações de contato e dúvidas</li>
                  <li>Processar candidaturas de emprego</li>
                  <li>Melhorar nossos serviços e experiência do usuário</li>
                  <li>Enviar comunicações relacionadas aos nossos produtos e serviços</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                  <li>Prevenir fraudes e garantir a segurança de nossos sistemas</li>
                </ul>
              </CardContent>
            </Card>

            {/* 3. Compartilhamento de Dados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCheck className="h-5 w-5 text-primary" />
                  </div>
                  3. Compartilhamento de Dados
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground/80">
                  O Sistema Sem Fronteira <strong>não vende, aluga ou compartilha</strong> seus 
                  dados pessoais com terceiros para fins comerciais. Seus dados podem ser 
                  compartilhados apenas nas seguintes situações:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Com prestadores de serviços que nos auxiliam em operações (hospedagem, armazenamento)</li>
                  <li>Quando exigido por lei ou ordem judicial</li>
                  <li>Para proteção de direitos, propriedade ou segurança da empresa</li>
                  <li>Com seu consentimento expresso</li>
                </ul>
              </CardContent>
            </Card>

            {/* 4. Segurança dos Dados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  4. Segurança e Armazenamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground/80">
                  Implementamos medidas técnicas e organizacionais adequadas para proteger 
                  seus dados pessoais contra acesso não autorizado, perda, destruição ou 
                  alteração. Isso inclui:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Criptografia de dados sensíveis</li>
                  <li>Controle de acesso restrito a dados pessoais</li>
                  <li>Monitoramento contínuo de sistemas</li>
                  <li>Backups regulares e seguros</li>
                  <li>Treinamento de equipe sobre proteção de dados</li>
                </ul>
                <p className="text-foreground/80 mt-3">
                  Os dados são armazenados pelo período necessário para cumprir as finalidades 
                  descritas ou conforme exigido por lei.
                </p>
              </CardContent>
            </Card>

            {/* 5. Direitos dos Titulares */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  5. Seus Direitos (Titulares de Dados)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground/80">
                  De acordo com a LGPD, você tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li><strong>Confirmação e Acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
                  <li><strong>Correção:</strong> Solicitar correção de dados incompletos ou desatualizados</li>
                  <li><strong>Anonimização ou Bloqueio:</strong> Solicitar anonimização ou bloqueio de dados desnecessários</li>
                  <li><strong>Eliminação:</strong> Solicitar exclusão de dados tratados com seu consentimento</li>
                  <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                  <li><strong>Revogação do Consentimento:</strong> Retirar consentimento a qualquer momento</li>
                  <li><strong>Oposição:</strong> Opor-se ao tratamento de dados em certas situações</li>
                </ul>
                <p className="text-foreground/80 mt-4">
                  Para exercer seus direitos, entre em contato através do e-mail: 
                  <strong> contato@sistemasemfronteira.com.br</strong>
                </p>
              </CardContent>
            </Card>

            {/* 6. Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                  6. Uso de Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground/80">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência 
                  em nosso site. Os cookies são pequenos arquivos de texto armazenados em 
                  seu dispositivo que nos ajudam a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Lembrar suas preferências</li>
                  <li>Analisar o tráfego e uso do site</li>
                  <li>Personalizar conteúdo</li>
                </ul>
                <p className="text-foreground/80 mt-3">
                  Você pode configurar seu navegador para recusar cookies, mas isso pode 
                  afetar algumas funcionalidades do site.
                </p>
              </CardContent>
            </Card>

            {/* 7. Alterações */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  7. Alterações nesta Política
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Esta política de privacidade pode ser atualizada periodicamente para refletir 
                  mudanças em nossas práticas ou na legislação. Recomendamos que você revise 
                  esta página regularmente. A data da última atualização está indicada no início 
                  deste documento.
                </p>
              </CardContent>
            </Card>

            {/* 8. Contato */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle>Contato - Encarregado de Dados (DPO)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-3">
                  Para questões relacionadas à proteção de dados pessoais, dúvidas sobre esta 
                  política ou para exercer seus direitos, entre em contato:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground/80">
                    <strong>E-mail:</strong> contato@sistemasemfronteira.com.br
                  </p>
                  <p className="text-foreground/80">
                    <strong>Assunto:</strong> LGPD - Proteção de Dados
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
