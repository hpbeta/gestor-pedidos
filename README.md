
# 📦 Gestor de Pedidos

Aplicação web desenvolvida como **teste técnico**, para controle e gerenciamento de pedidos em tempo real — ideal para restaurantes, bares ou cozinhas que precisam organizar o fluxo de pedidos de forma eficiente.


🔗 [Acesse o projeto online](https://gestor-pedidos-tau.vercel.app/)

---

## 📸 Demonstração

**Desktop**  
<img src="./src/assets/desktop.gif" alt="Preview Desktop" width="100%" />

**Mobile**  
<img src="./src/assets/mobile.gif" alt="Preview Mobile" />
---

## 🚀 Funcionalidades

- 📋 Listagem de pedidos em diferentes ambientes (Cozinha, Bar)
- 💡 Interface dividida por páginas: Cozinha, Bar, Histórico e Home

---

## 🧠 Tecnologias utilizadas

- **React.js** – Biblioteca para interfaces reativas
- **Vite** – Ferramenta de build rápida
- **Styled-Components** – Estilização com CSS-in-JS
- **React Router DOM** – Sistema de rotas entre páginas
- **React Icons** – Ícones modernos e personalizáveis

---

## 📁 Estrutura de pastas

```bash
├── public/                     # Arquivos públicos
├── src/
│   ├── assets/                # Imagens e recursos visuais
│   ├── components/
│   │   └── orderList/         # Componentes reutilizáveis de listagem de pedidos
│   ├── contexts/              # Context API para controle global de estado
│   ├── globalStyles/          # Estilização global da aplicação
│   ├── layouts/               # Componentes de layout base
│   ├── pages/                 # Páginas da aplicação
│   │   ├── Bar/               # Tela de gerenciamento de pedidos do bar
│   │   ├── Header/            # Cabeçalho da aplicação
│   │   ├── History/           # Histórico de pedidos
│   │   ├── Home/              # Tela inicial
│   │   └── Kitchen/           # Tela de gerenciamento da cozinha
│   ├── App.jsx                # Componente raiz
│   ├── main.jsx               # Entrada principal da aplicação
│   └── router.jsx             # Configuração de rotas
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ▶️ Como executar localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/sistemas-pedidos.git
cd sistemas-pedidos
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o projeto:

```bash
npm run dev
```

4. Acesse no navegador:

```
http://localhost:5173
```

---

## 📌 Melhorias futuras

- [ ] Integração com banco de dados (Firebase ou PostgreSQL)
- [ ] Alteração de status (pendente, finalizado)
- [ ] Sistema de login para cada setor (cozinha/bar)

---

## 👨‍💻 Desenvolvedor

Desenvolvido por **João Lucas**  
📍 Belo Horizonte - MG

[![LinkedIn](https://img.shields.io/badge/-João%20Lucas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/joao-lucas-dev)](https://www.linkedin.com/in/hpbeta)

---
