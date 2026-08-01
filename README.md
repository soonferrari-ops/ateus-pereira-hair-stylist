# Mateus Pereira Hair Stylist — Website

Website institucional para o cabeleireiro **Mateus Pereira Hair Stylist**, no Porto. Construído em Next.js (App Router), React, TypeScript, Tailwind CSS e Framer Motion.

## Como instalar e executar localmente

Requisitos: [Node.js](https://nodejs.org) 18 ou superior.

```bash
npm install
npm run dev
```

Depois abrir [http://localhost:3000](http://localhost:3000) no browser.

Outros comandos úteis:

```bash
npm run build   # build de produção
npm run start   # correr a build de produção
npm run lint    # verificar erros de lint
```

## Estrutura de pastas

```
mateus-pereira/
├── app/
│   ├── layout.tsx                     # Layout global, fontes, SEO e Schema.org
│   ├── page.tsx                       # Página principal (compõe todas as secções)
│   ├── globals.css                    # Estilos globais e tokens Tailwind
│   ├── robots.ts                      # robots.txt gerado automaticamente
│   ├── sitemap.ts                     # sitemap.xml gerado automaticamente
│   ├── politica-de-privacidade/       # Página da Política de Privacidade
│   └── livro-de-reclamacoes/          # Página do Livro de Reclamações
├── components/
│   ├── Header.tsx                     # Cabeçalho fixo + menu mobile
│   ├── Hero.tsx                       # Secção inicial
│   ├── Services.tsx                   # Cartões de serviços
│   ├── Gallery.tsx                    # Galeria com filtros + lightbox
│   ├── About.tsx                      # Secção "Sobre"
│   ├── Testimonials.tsx               # Testemunhos de clientes
│   ├── Booking.tsx                    # Secção de conversão / marcação
│   ├── Contact.tsx                    # Contactos + mapa + formulário
│   ├── ContactForm.tsx                # Formulário com validação
│   ├── Footer.tsx                     # Rodapé
│   ├── WhatsAppButton.tsx             # Botão flutuante de WhatsApp (mobile)
│   └── ui/
│       ├── AnimateIn.tsx              # Wrapper de animação ao entrar no ecrã
│       └── Strand.tsx                 # Elemento visual assinatura (linha fluida)
├── lib/
│   └── constants.ts                   # Todos os dados do negócio e conteúdo (⚠️ ver abaixo)
├── public/
│   └── images/                        # Imagens do site (ver LEIA-ME.txt)
├── tailwind.config.ts                 # Paleta de cores, tipografia e animações
└── package.json
```

Todo o texto e dados de contacto estão centralizados em **`lib/constants.ts`**, para serem fáceis de editar sem mexer nos componentes.

## Ligar o formulário de contacto a um serviço real

O formulário (`components/ContactForm.tsx`) está validado e funcional no lado do cliente, mas não envia dados para nenhum backend. Para ativar o envio real, o ficheiro já inclui, comentado, um exemplo de integração com o [Formspree](https://formspree.io) — basta descomentar e indicar o endpoint. Também é compatível com [Resend](https://resend.com) através de uma API route própria.

## Design

- **Paleta:** preto quente (`ink`), branco-osso (`bone`), bege (`sand`), cinzento quente (`stone`) e dourado acastanhado (`gold`) como cor de destaque.
- **Tipografia:** Fraunces (display, com itálico) para títulos + Manrope (corpo de texto) para leitura.
- **Elemento assinatura:** uma linha fluida ("Strand"), inspirada numa madeixa de cabelo em movimento, usada como separador discreto entre secções.

## ⚠️ Dados e imagens a fornecer antes de publicar

O website está pronto para apresentação, mas contém placeholders claramente assinalados no código (procurar por `PLACEHOLDER` em `lib/constants.ts` e nos componentes). Antes de publicar, é necessário substituir:

**Dados de contacto** (em `lib/constants.ts`):
- [ ] Número de WhatsApp real (`whatsappNumber`)
- [ ] Número de telefone real (`phoneDisplay` / `phoneHref`)
- [ ] Morada real do salão (`address`)
- [ ] Horário de funcionamento real (`hours`)
- [ ] Email de contacto real (`email`)
- [ ] Link real da página de Facebook (`facebook`)
- [ ] Localização real no Google Maps (`mapEmbedSrc`) — atualmente aponta para uma localização de exemplo no Porto

**Imagens** (ver também `public/images/LEIA-ME.txt`):
- [ ] Fotografia principal da secção Hero
- [ ] Fotografia do Mateus Pereira na secção "Sobre"
- [ ] Fotografias reais dos trabalhos para a Galeria (recomenda-se usar as do Instagram [@mateusrpereira](https://www.instagram.com/mateusrpereira/))
- [ ] Imagem de partilha para redes sociais / Open Graph (1200×630px)
- [ ] Favicon definitivo

**Conteúdo:**
- [ ] Testemunhos reais de clientes (atualmente marcados como "[Testemunho provisório]" em `lib/constants.ts`)
- [ ] Preços dos serviços, caso se pretenda apresentá-los (atualmente mostram "Desde €—")
- [ ] Texto definitivo da Política de Privacidade (`app/politica-de-privacidade`)
- [ ] Ligação ao Livro de Reclamações Eletrónico oficial (`app/livro-de-reclamacoes`)
- [ ] Domínio real do website (atualmente `mateuspereirahair.pt` como exemplo, usado em `app/layout.tsx`, `app/robots.ts` e `app/sitemap.ts`)

**Integrações:**
- [ ] Ligar o formulário de contacto a um serviço de envio de emails real (Formspree, Resend, ou outro)
