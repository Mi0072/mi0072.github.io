# Portfólio — GitHub Pages

Site pessoal de programação / CV técnico, pronto para publicar como GitHub Pages.

## Ficheiros

```
portfolio/
├── index.html   ← estrutura e conteúdo
├── style.css    ← estilos (cores, layout, responsivo)
├── script.js    ← menu mobile + navegação activa
└── README.md    ← este ficheiro
```

---

## Como publicar no GitHub Pages

1. **Cria um repositório no GitHub**
   - Vai a github.com → New repository
   - Nome sugerido: `portfolio` ou `SEU-USERNAME.github.io`

2. **Carrega os ficheiros**
   ```bash
   git init
   git add .
   git commit -m "init: portfólio"
   git branch -M main
   git remote add origin https://github.com/SEU-USERNAME/REPO.git
   git push -u origin main
   ```

3. **Activa o GitHub Pages**
   - No repositório: Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
   - Guarda — fica disponível em `https://SEU-USERNAME.github.io/REPO/`

---

## O que personalizar

Abre `index.html` e procura as marcações `TODO:`:

| O quê | Onde |
|---|---|
| Nome e apelido | `.hero-name` / `.hero-surname` |
| Bio / descrição | Secção `#sobre` e `#inicio` |
| Status actual | `.status-text` |
| GitHub username | Todos os `SEU-USERNAME` |
| LinkedIn username | Todos os `SEU-USERNAME` |
| Email | `mailto:SEU@EMAIL.COM` |
| Projetos | Cartões na secção `#projetos` |
| Competências | Lista em `#competencias` |

### Adicionar um projeto novo

Copia um bloco `<article class="project-card">` em `index.html` e preenche:
- `.project-tag` — categoria breve (ex: `NLP · Python`)
- `href` do `.project-link` — link do repositório
- `.project-title` — nome do projeto
- `.project-desc` — descrição curta
- `.stack-tag` — tecnologias usadas

### Mudar a cor de destaque

Em `style.css`, linha `:root`, altera:
```css
--accent:       #2563EB;  /* azul actual */
--accent-hover: #1D4ED8;
--accent-light: #EFF6FF;
--label-color:  #4F46E5;
--label-bg:     #EEF2FF;
```

---

## Tecnologias

- HTML5 semântico
- CSS puro (Custom Properties, Grid, Flexbox)
- JavaScript vanilla (sem dependências)
- Fontes: [Syne](https://fonts.google.com/specimen/Syne), [DM Sans](https://fonts.google.com/specimen/DM+Sans), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts
