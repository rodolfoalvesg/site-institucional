# RA Desenvolvimento de Sistemas — README

## Descrição
Site institucional para empresa fictícia de desenvolvimento e consultoria de software voltada a pequenos e médios negócios.

Desenvolvido como entregável prático para a disciplina **Padrões Web para No Code e Low Code** — Graduação em IA, UniFECAF.

**Acesso online:** [https://rodolfoalvesg.github.io/site-institucional/](https://rodolfoalvesg.github.io/site-institucional/)

---

## Como usar

### Opção 1 — Acessar online
O site está publicado via **GitHub Pages** e pode ser acessado diretamente em:
[https://rodolfoalvesg.github.io/site-institucional/](https://rodolfoalvesg.github.io/site-institucional/)

### Opção 2 — Rodar localmente
1. Clone o repositório: `git clone https://github.com/rodolfoalvesg/site-institucional.git`
2. Abra o arquivo `index.html` com qualquer navegador moderno (Chrome, Firefox, Edge, Safari)
3. Nenhuma dependência ou servidor necessário

---

## Estrutura de arquivos

```
/
├── index.html                  ← Página principal (HTML semântico)
├── README.md                   ← Este arquivo
└── assets/
    ├── css/
    │   ├── main.css            ← Importa todos os módulos CSS abaixo
    │   ├── 01-variables.css    ← Custom Properties (cores, fontes, espaçamentos)
    │   ├── 02-base.css         ← Reset, tipografia e estilos globais
    │   ├── 03-components.css   ← Botões, cards, formulário, tags
    │   ├── 04-layout.css       ← Navbar, hero, seções, footer
    │   └── 05-responsive.css   ← Media queries (900px e 500px)
    └── js/
        ├── main.js             ← Inicialização e orquestração dos módulos
        ├── scroll-reveal.js    ← Animações via IntersectionObserver
        ├── nav-highlight.js    ← Destaque de link ativo por seção visível
        └── contact-form.js     ← Validação e feedback do formulário de contato
```

---

## Funcionalidades

| Seção      | Funcionalidade                                                               |
|------------|------------------------------------------------------------------------------|
| Hero       | Headline animada, botões de CTA, estatísticas da empresa                     |
| Serviços   | Grade responsiva com 6 cards animados no hover                               |
| Sobre      | Bloco visual com snippet de código + descrição e stack tecnológica           |
| Contato    | Formulário com validação JS, feedback acessível (aria-live)                  |
| Navegação  | Navbar fixa com efeito glass, link ativo destacado por seção visível         |
| Animações  | Scroll reveal via IntersectionObserver, hero com animações staggered         |

---

## Tecnologias utilizadas

- **HTML5** semântico (nav, section, article, footer, form)
- **CSS3 modular**: Custom Properties, Grid, Flexbox, clip-path, @keyframes, media queries
- **JavaScript ES6+ modular**: IntersectionObserver, validação de formulário, DOM manipulation
- **Google Fonts**: Syne + Space Mono (via CDN)
- **Hospedagem**: GitHub Pages (gratuito, integrado ao repositório)

---

## Integração com APIs externas (como fazer em produção)

O formulário em `assets/js/contact-form.js` está pronto para integrar com serviços externos.
Substitua o bloco `setTimeout` por um `fetch`:

```javascript
// Integração com Formspree (formulário grátis)
const res = await fetch('https://formspree.io/f/SEU_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nome, email, mensagem })
});

// Integração com Airtable
const res = await fetch('https://api.airtable.com/v0/SUA_BASE/Contatos', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer SUA_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ fields: { Nome: nome, Email: email, Mensagem: mensagem } })
});
```

---

## Acessibilidade

- WCAG 2.1 AA — atributos ARIA em todos os elementos interativos
- Navegação por teclado com `:focus-visible`
- Contraste adequado texto/fundo
- Textos alternativos em elementos visuais
- Formulário com `labels` associados e `autocomplete`

---

## Responsividade

- Mobile-first com breakpoints em 900px e 500px (`assets/css/05-responsive.css`)
- Fontes fluidas com `clamp()`
- Layout adaptativo com CSS Grid `auto-fit`

---

## Conformidade
- LGPD: formulário não envia dados a terceiros sem consentimento
- Sem cookies de rastreamento ou scripts de analytics
- Sem dados sensíveis armazenados client-side

---

*Projeto acadêmico — RA Desenvolvimento de Sistemas é uma empresa fictícia criada para fins didáticos.*
