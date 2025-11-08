import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";
import { Briefcase, Upload, Users, Rocket } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";

export default function TrabalheConosco() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const submitMutation = trpc.jobApplication.submit.useMutation({
    onSuccess: () => {
      toast.success("Candidatura enviada com sucesso! Analisaremos seu currículo em breve.");
      setFormData({ name: "", email: "", phone: "" });
      setResumeFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    onError: (error) => {
      toast.error("Erro ao enviar candidatura. Tente novamente.");
      console.error(error);
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Por favor, envie apenas arquivos PDF");
        e.target.value = "";
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB
        toast.error("O arquivo deve ter no máximo 5MB");
        e.target.value = "";
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resumeFile) {
      toast.error("Por favor, anexe seu currículo em PDF");
      return;
    }

    // Converter arquivo para base64
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result?.toString().split(',')[1];
      if (base64) {
        submitMutation.mutate({
          ...formData,
          resumeFile: {
            name: resumeFile.name,
            type: resumeFile.type,
            data: base64,
          },
        });
      }
    };
    reader.readAsDataURL(resumeFile);
  };

  return (
    <div className="w-full py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Trabalhe Conosco
            </h1>
            <p className="text-xl text-muted-foreground">
              Faça parte de uma equipe que está transformando o futuro da tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulário */}
            <Card>
              <CardHeader>
                <CardTitle>Envie sua Candidatura</CardTitle>
                <CardDescription>
                  Preencha seus dados e anexe seu currículo em PDF
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone (WhatsApp)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Currículo (PDF - máx. 5MB)</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="resume"
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        required
                        className="cursor-pointer"
                      />
                    </div>
                    {resumeFile && (
                      <p className="text-sm text-muted-foreground">
                        Arquivo selecionado: {resumeFile.name}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? "Enviando..." : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        Enviar Candidatura
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações sobre a Empresa */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Por que trabalhar conosco?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Rocket className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Inovação Constante</h4>
                      <p className="text-sm text-muted-foreground">
                        Trabalhe em projetos que estão na vanguarda da tecnologia e 
                        transformam a vida das pessoas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Equipe Colaborativa</h4>
                      <p className="text-sm text-muted-foreground">
                        Faça parte de um time que valoriza a colaboração, o aprendizado 
                        contínuo e o crescimento profissional.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Oportunidades de Crescimento</h4>
                      <p className="text-sm text-muted-foreground">
                        Oferecemos um ambiente que incentiva o desenvolvimento de novas 
                        habilidades e a progressão na carreira.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Processo Seletivo</h4>
                  <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                    <li>Envio do currículo através deste formulário</li>
                    <li>Análise da candidatura pela nossa equipe</li>
                    <li>Entrevista inicial (online ou presencial)</li>
                    <li>Avaliação técnica (se aplicável)</li>
                    <li>Proposta e integração</li>
                  </ol>
                  <p className="text-sm text-muted-foreground mt-4">
                    Entraremos em contato em até 15 dias úteis caso seu perfil 
                    seja compatível com nossas vagas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
