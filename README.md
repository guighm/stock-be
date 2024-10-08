# NightMall

## Descrição do Projeto
A **NightMall** é um sistema de estoque cujo público-alvo são os profissionais de TI, e entusiastas da área de tecnologia e jogos. No site, o usuário pode comprar diferentes tipos de produtos, como teclado, mouse, computador, livro de TI, etc. Além de comprar, ele pode vender, isto é, pode ser o próprio fornecedor. 

## Funcionalidades

## Status
<img alt="Static Badge" src="https://img.shields.io/badge/STATUS-EM_DESENVOLVIMENTO-green?style=for-the-badge">

## Passos de execução
### Pré-requisitos
- Node.js
- NPM
- Nest CLI
- Docker
- Docker Compose
- WSL (caso use Windows, ela será usada para executar os comandos do Docker Compose)
### Passos
1. Instale o [Node.js](https://nodejs.org/pt).

Verifique a versão do Node.js e do NPM no seu terminal:
```
node -v
npm -v
```
2. Instale o Nest CLI:
```
npm install -g @nestjs/cli
```

Verifique a versão do NestJS no seu terminal:
```
nest -v
```

3. Clone o repositório para a sua máquina:
```
git clone https://github.com/guighm/stock-be.git
```

4. Mude para o repositório do projeto:
```
cd stock-be
```

5. Instale as dependências:
```
npm install
```

6. Instale a WSL (**OPCIONAL**, caso use **Windows**):

Instale a WSL:
```
wsl --install
```

Após a instalação, execute a WSL:
```
wsl
```

A partir daqui, você pode executar os comandos do Docker Compose! 😄

7. Instale o [Docker](https://www.docker.com/) e o [Docker Compose](https://www.docker.com/):

Verifique a versão do Docker e do Docker Compose no seu terminal:
```
docker -v
docker compose version
```

8. Levante o banco de dados (execute o comando no WSL, caso seja seu caso):
```
docker compose up -d
```

Verifique se o container foi executado com sucesso:
```
docker ps
```

9. Dentro do diretório do seu projeto (`stock-be`), crie um arquivo `.env` e dentro dele ponha as seguintes credenciais:
```
DATABASE_URL="postgresql://root:123@localhost:5432/stock?schema=public"
JWT_SECRET="chave-super-secreta"
```

10. Rode o projeto:
```
npm run start:dev
```

O projeto vai rodar na URL: `http://localhost:3000`

## Tecnologias utilizadas

<div>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" width="60px"/> 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="60px"/>     
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="60px"/>  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" width="60px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" width="60px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="60px"/>          
</div>
          
