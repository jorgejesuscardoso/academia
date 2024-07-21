# Documentação do Projeto da Academia XYZ

**Status:** Em desenvolvimento.

**Funcionalidades Futuras:** Páginas de suporte, perfil de usuário, implementação do gateway para compras online, carrinho de compras e FAQ.

Este repositório contém o código-fonte para o backend e o frontend da Academia XYZ. O backend foi desenvolvido utilizando TypeScript e Node.js, com banco de dados SQLite e ORM Prisma. Ele fornece APIs para gerenciar clientes, instrutores, planos, produtos e interações diversas dentro do sistema da academia.

### Objetivo do Projeto

O objetivo principal deste backend é fornecer uma interface robusta e eficiente para a gestão dos diversos aspectos do sistema da academia, incluindo o gerenciamento de clientes, instrutores e produtos, além de permitir a criação e visualização de eventos, publicações e lembretes.

## Deployment

- **Frontend:** O frontend deste projeto está hospedado no Netlify. Você pode acessá-lo [aqui](https://academiaxyz.netlify.app). Utilize as seguintes credenciais para acessar a área de testes:
  - **Username:** visitante
  - **Senha:** senhaVisitante

  O acesso ao frontend será limitado, não permitindo operações de CRUD nos dados de teste, registro de novos usuários ou modificação de usuários existentes.

  Os dados exibidos na interface do projeto são fictícios e foram gerados por IA (Copilot, Amazon Q Developer, GPT-3). As imagens e ícones utilizados foram obtidos de fontes como `https://icons8.com.br/`, `https://www.shutterstock.com/`, `https://pixabay.com` e `https://br.pexels.com`. Se você encontrar alguma imagem ou ícone de sua autoria e não autorizou o uso, por favor, entre em contato pelo e-mail: `bushido.devlab@gmail.com`. Após confirmação dos direitos autorais, farei a remoção no prazo de 24 horas.

- **Backend:** O backend está atualmente hospedado no Railway. No entanto, o deploy será desligado em breve, no dia 01/08/2024. Para continuar testando o projeto, caso o servidor esteja offline, você pode rodar o backend localmente seguindo as instruções abaixo.

## Rodando o Backend Localmente

1. Clone este repositório: `git clone <url-do-repositorio>`
2. Navegue até a pasta do backend: `cd server`
3. Instale as dependências: `npm install`
4. Inicie o backend: `npm start`
5. O backend estará disponível em `http://localhost:3030`

## Rodando o Frontend Localmente

1. Clone este repositório: `git clone <url-do-repositorio>`, ignore esta etapa se já tiver feito para o backend.
2. Navegue até a pasta do frontend: `cd ui`, se estiver na pasta do backend, use `cd .. && cd ui`.
3. Instale as dependências: `npm install`
4. Inicie o frontend: `npm run dev`
5. O frontend estará disponível em `http://localhost:5050`. Caso o seu navegador padrão não abra automaticamente, provavelmente isso ocorreu devido a algumas configurações para rodar offline no Windows. Abra o seu navegador e digite a URL manualmente.

## Opção para Rodar no Windows com Instalador do Projeto (.exe)

1. Clone este repositório: `git clone <url-do-repositorio>`, ignore esta etapa se já tiver feito para o backend.
2. Procure pelo instalador: `GymManagerInstaller.exe`.
3. Execute o instalador e escolha o local de instalação de sua preferência; por padrão, é instalado em `C:`.
4. Procure pelo ícone do projeto na sua tela inicial; ele terá o nome `GymManager`.
5. Dê dois cliques no ícone e divirta-se.

   O programa irá rodar localmente o backend e o frontend do projeto sem a necessidade de instalar nenhuma dependência, pois tudo está incluso no instalador (`GymManagerInstaller.exe`). Também será possível acessar o projeto pelo navegador através das URLs: frontend (ui): `http://localhost:5050` e backend (server): `http://localhost:3030`.


## Esquema do Banco de Dados

O banco de dados utilizado pela Academia XYZ possui várias tabelas:

1. **cliente**: Armazena os dados dos alunos da academia.
2. **instrutor**: Armazena os dados dos instrutores da academia.
3. **plano**: Armazena os dados dos planos oferecidos pela academia.
4. **usuario**: Armazena os dados dos usuários do sistema.
5. **produto**: Armazena os dados dos produtos vendidos na academia.
6. **publicacao**: Armazena as publicações feitas por usuários do sistema.
7. **evento**: Armazena todos os eventos postados por usuários do sistema.
8. **lembrete**: Armazena todos os lembretes criados por usuários do sistema (apenas usuários de alto nível, como admin, gerente e funcionários, têm acesso).

Em breve, será implementada uma funcionalidade para que todos os clientes possam acessar o sistema e visualizar publicações e eventos.

## SQL

```sql
CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(255),
    username VARCHAR(255),
    senha VARCHAR(255) NOT NULL,
    turno VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    foto VARCHAR(255),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Lembrete (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo VARCHAR(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    data DATETIME NOT NULL,
    conteudo TEXT NOT NULL,
    concluido BOOLEAN NOT NULL,
    imagem VARCHAR(255),
    usuarioId INTEGER NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy VARCHAR(255),
    FOREIGN KEY (usuarioId) REFERENCES User(id) ON DELETE CASCADE
);

CREATE TABLE Evento (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo VARCHAR(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    imagem VARCHAR(255),
    usuarioId INTEGER NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy VARCHAR(255),
    FOREIGN KEY (usuarioId) REFERENCES User(id)
);

CREATE TABLE Publicacao (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo VARCHAR(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    usuarioId INTEGER NOT NULL,
    imagem VARCHAR(255),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updatedBy VARCHAR(255),
    FOREIGN KEY (usuarioId) REFERENCES User(id)
);


CREATE TABLE Cliente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(255),
    dataNascimento DATETIME NOT NULL,
    dataInicio DATETIME DEFAULT CURRENT_TIMESTAMP,
    vencimento DATETIME,
    status VARCHAR(255) DEFAULT 'Ativo',
    planoId INTEGER NOT NULL,
    FOREIGN KEY (planoId) REFERENCES Plano(id) ON DELETE CASCADE
);

CREATE TABLE Instrutor (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(255),
    turno VARCHAR(255) NOT NULL
);

CREATE TABLE Plano (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) UNIQUE NOT NULL,
    valor FLOAT NOT NULL,
    descricao TEXT
);

CREATE TABLE Product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    stored INTEGER NOT NULL,
    brand VARCHAR(255),
    category VARCHAR(255),
    thumbnail VARCHAR(255),
    description TEXT
);

CREATE TABLE Purchase (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clientId INTEGER NOT NULL,
    productId INTEGER NOT NULL,
    qtd_saled INTEGER NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (clientId) REFERENCES Cliente(id),
    FOREIGN KEY (productId) REFERENCES Product(id)
);

