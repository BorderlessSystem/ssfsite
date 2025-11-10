import { useState, useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2, Download, LogOut, Upload } from "lucide-react";
import { toast } from "sonner";
import { useLocation } from "wouter";

export default function Admin() {
  const { user, logout, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("contacts");

  // Verificar se é admin
  const checkAdminQuery = trpc.admin.checkAdmin.useQuery(undefined, {
    enabled: isAuthenticated,
    retry: false,
  });

  // Listar contatos
  const contactsQuery = trpc.admin.listContacts.useQuery(undefined, {
    enabled: isAuthenticated && activeTab === "contacts",
  });

  // Listar candidaturas
  const jobAppsQuery = trpc.admin.listJobApplications.useQuery(undefined, {
    enabled: isAuthenticated && activeTab === "applications",
  });

  // Obter informações do fundador
  const aboutQuery = trpc.admin.getAboutContent.useQuery();

  // Deletar contato
  const deleteContactMutation = trpc.admin.deleteContact.useMutation({
    onSuccess: () => {
      toast.success("Contato deletado com sucesso!");
      contactsQuery.refetch();
    },
    onError: () => {
      toast.error("Erro ao deletar contato");
    },
  });

  // Deletar candidatura
  const deleteJobAppMutation = trpc.admin.deleteJobApplication.useMutation({
    onSuccess: () => {
      toast.success("Candidatura deletada com sucesso!");
      jobAppsQuery.refetch();
    },
    onError: () => {
      toast.error("Erro ao deletar candidatura");
    },
  });

  // Atualizar informações do fundador
  const updateAboutMutation = trpc.admin.updateAboutContent.useMutation({
    onSuccess: () => {
      toast.success("Informações atualizadas com sucesso!");
      aboutQuery.refetch();
    },
    onError: () => {
      toast.error("Erro ao atualizar informações");
    },
  });

  // Upload de foto
  const uploadPhotoMutation = trpc.admin.uploadFounderPhoto.useMutation({
    onSuccess: () => {
      toast.success("Foto enviada com sucesso!");
      aboutQuery.refetch();
    },
    onError: () => {
      toast.error("Erro ao enviar foto");
    },
  });

  // Redirecionar se não autenticado
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Acesso Restrito</CardTitle>
            <CardDescription>
              Você precisa estar autenticado para acessar o painel administrativo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full"
              onClick={() => setLocation("/")}
            >
              Voltar para Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Redirecionar se não é admin
  if (checkAdminQuery.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  if (checkAdminQuery.isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Acesso Negado</CardTitle>
            <CardDescription>
              Você não tem permissão para acessar o painel administrativo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full"
              onClick={() => {
                logout();
                setLocation("/");
              }}
            >
              Voltar para Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Painel Administrativo</h1>
            <p className="text-muted-foreground">
              Bem-vindo, {user?.name || "Administrador"}
            </p>
          </div>
          <Button 
            variant="outline"
            onClick={() => {
              logout();
              setLocation("/");
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contacts">Contatos</TabsTrigger>
            <TabsTrigger value="applications">Candidaturas</TabsTrigger>
            <TabsTrigger value="founder">Fundador</TabsTrigger>
          </TabsList>

          {/* Contatos */}
          <TabsContent value="contacts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contatos Recebidos</CardTitle>
                <CardDescription>
                  {contactsQuery.data?.length || 0} contato(s)
                </CardDescription>
              </CardHeader>
              <CardContent>
                {contactsQuery.isLoading ? (
                  <p>Carregando...</p>
                ) : contactsQuery.data?.length === 0 ? (
                  <p className="text-muted-foreground">Nenhum contato recebido ainda</p>
                ) : (
                  <div className="space-y-4">
                    {contactsQuery.data?.map((contact) => (
                      <div key={contact.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold">{contact.name}</h3>
                            <p className="text-sm text-muted-foreground">{contact.email}</p>
                            <p className="text-sm text-muted-foreground">{contact.phone}</p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {new Date(contact.createdAt).toLocaleString("pt-BR")}
                            </p>
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteContactMutation.mutate({ id: contact.id })}
                            disabled={deleteContactMutation.isPending}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Candidaturas */}
          <TabsContent value="applications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Candidaturas Recebidas</CardTitle>
                <CardDescription>
                  {jobAppsQuery.data?.length || 0} candidatura(s)
                </CardDescription>
              </CardHeader>
              <CardContent>
                {jobAppsQuery.isLoading ? (
                  <p>Carregando...</p>
                ) : jobAppsQuery.data?.length === 0 ? (
                  <p className="text-muted-foreground">Nenhuma candidatura recebida ainda</p>
                ) : (
                  <div className="space-y-4">
                    {jobAppsQuery.data?.map((app) => (
                      <div key={app.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold">{app.name}</h3>
                            <p className="text-sm text-muted-foreground">{app.email}</p>
                            <p className="text-sm text-muted-foreground">{app.phone}</p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {new Date(app.createdAt).toLocaleString("pt-BR")}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(app.resumeUrl, "_blank")}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => deleteJobAppMutation.mutate({ id: app.id })}
                              disabled={deleteJobAppMutation.isPending}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fundador */}
          <TabsContent value="founder" className="space-y-4">
            <FounderEditor 
              data={aboutQuery.data}
              onUpdate={updateAboutMutation}
              onPhotoUpload={uploadPhotoMutation}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function FounderEditor({ data, onUpdate, onPhotoUpload }: any) {
  const [bio, setBio] = useState(data?.ownerBio || "");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (data?.ownerBio) {
      setBio(data.ownerBio);
    }
  }, [data]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Por favor, envie apenas imagens");
        e.target.value = "";
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error("A imagem deve ter no máximo 5MB");
        e.target.value = "";
        return;
      }
      setPhotoFile(file);
    }
  };

  const handlePhotoUpload = async () => {
    if (!photoFile) {
      toast.error("Selecione uma imagem");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result?.toString().split(",")[1];
      if (base64) {
        onPhotoUpload.mutate({
          imageFile: {
            name: photoFile.name,
            type: photoFile.type,
            data: base64,
          },
        });
        setPhotoFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    };
    reader.readAsDataURL(photoFile);
  };

  const handleBioSave = () => {
    if (bio.length > 1500) {
      toast.error("Biografia não pode exceder 1500 caracteres");
      return;
    }
    onUpdate.mutate({ ownerBio: bio });
  };

  return (
    <div className="space-y-6">
      {/* Foto */}
      <Card>
        <CardHeader>
          <CardTitle>Foto do Fundador</CardTitle>
          <CardDescription>Recomendado: 500x500 pixels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {data?.ownerPhotoUrl && (
            <div className="flex justify-center">
              <img
                src={data.ownerPhotoUrl}
                alt="Fundador"
                className="w-48 h-48 rounded-lg object-cover"
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="photo">Selecionar Imagem</Label>
            <Input
              id="photo"
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
            {photoFile && (
              <p className="text-sm text-muted-foreground">
                Arquivo selecionado: {photoFile.name}
              </p>
            )}
          </div>
          <Button
            onClick={handlePhotoUpload}
            disabled={!photoFile || onPhotoUpload.isPending}
            className="w-full"
          >
            <Upload className="mr-2 h-4 w-4" />
            {onPhotoUpload.isPending ? "Enviando..." : "Enviar Foto"}
          </Button>
        </CardContent>
      </Card>

      {/* Biografia */}
      <Card>
        <CardHeader>
          <CardTitle>Biografia do Fundador</CardTitle>
          <CardDescription>
            Máximo 1500 caracteres ({bio.length}/1500)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value.slice(0, 1500))}
            placeholder="Conte sua história..."
            className="w-full min-h-48 p-3 border rounded-lg resize-none"
          />
          <Button
            onClick={handleBioSave}
            disabled={onUpdate.isPending}
            className="w-full"
          >
            {onUpdate.isPending ? "Salvando..." : "Salvar Biografia"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

import { useRef } from "react";
