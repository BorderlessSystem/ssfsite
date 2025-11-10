# Sistema Sem Fronteira - TODO

## Estrutura e Layout
- [x] Configurar tema e cores do site (azul corporativo/tecnológico)
- [x] Criar estrutura de navegação principal
- [x] Implementar rodapé com copyright 2025 e links

## Página Principal (Home)
- [x] Seção hero apresentando Sistema Sem Fronteira
- [x] Seção explicando objetivo e ramo de atuação da holding
- [x] Seção "Confira nossas marcas" com card do Caryo
- [x] Design responsivo para todas as seções

## Card Caryo
- [x] Criar card com imagem 500x500px
- [x] Adicionar marketing sobre qualidades do Caryo
- [x] Implementar botão "Confira você mesmo" com link externo
- [x] Explicar modelo de negócio (R$200/mês, 100% receita motorista)
- [x] Explicar modelo de preços (R$15 até 3km, R$0,80/100m após)

## Formulário de Contato
- [x] Criar página/modal de Contato
- [x] Campos: Nome, E-mail, Telefone (WhatsApp)
- [x] Implementar envio de formulário
- [x] Salvar contatos no banco de dados
- [x] Validação de campos

## Formulário Trabalhe Conosco
- [x] Criar página/modal Trabalhe Conosco
- [x] Campos: Nome, E-mail, Telefone (WhatsApp)
- [x] Campo para upload de currículo em PDF
- [x] Implementar upload de arquivo para S3
- [x] Enviar notificação ao proprietário com dados do candidato
- [x] Validação de campos e tipo de arquivo

## Página Sobre Nós
- [x] Criar seção Missão da empresa
- [x] Criar seção Visão da empresa
- [x] Adicionar campo para foto do proprietário (placeholder)
- [x] Adicionar campo de texto editável (até 1500 caracteres) sobre o dono
- [x] Design atrativo e profissional

## Página Termos LGPD
- [x] Criar conteúdo completo sobre LGPD
- [x] Explicar coleta e uso de dados
- [x] Direitos dos usuários
- [x] Política de privacidade
- [x] Formatação clara e objetiva

## Banco de Dados
- [x] Schema para contatos (formulário contato)
- [x] Schema para candidatos (trabalhe conosco)
- [x] Schema para conteúdo editável (sobre nós)

## Finalização
- [x] Testar todos os formulários
- [x] Verificar responsividade em mobile/tablet/desktop
- [x] Otimizar imagens e performance
- [x] Criar checkpoint final

## Deploy Netlify
- [x] Adicionar arquivo _redirects para roteamento SPA
- [x] Adicionar netlify.toml com configurações de build
- [x] Testar configurações de deploy

## Painel Administrativo
- [x] Criar rotas tRPC para listar contatos e candidaturas
- [x] Criar rotas tRPC para atualizar informações do fundador
- [x] Criar página de login do admin
- [x] Criar dashboard com abas para contatos, candidaturas e fundador
- [x] Implementar visualização de contatos com opção de deletar
- [x] Implementar visualização de candidaturas com download de currículo
- [x] Implementar editor de foto do fundador (upload 500x500)
- [x] Implementar editor de biografia do fundador (1500 caracteres)
- [x] Testar todas as funcionalidades do painel
