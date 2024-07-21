# Documentação do Backend da Academia XYZ

**Status:** Em desenvolvimento.

**Funcionalidades Futuras:** Páginas de suporte, perfil de usuário, implementação do gateway para compras online, carrinho de compras e FAQ.

Este repositório contém o código-fonte para o backend da Academia XYZ. O backend foi desenvolvido utilizando TypeScript e Node.js, com banco de dados SQLite e ORM Prisma. Este backend oferece APIs para gerenciar clientes, instrutores, planos, produtos e interações diversas dentro do sistema da academia.

### Objetivo do Projeto

O objetivo principal deste backend é fornecer uma interface robusta e eficiente para a gestão dos diversos aspectos do sistema da academia, incluindo o gerenciamento de clientes, instrutores e produtos, além de permitir a criação e visualização de eventos, publicações e lembretes.

## Deployment

- **Frontend:** O frontend deste projeto está hospedado no Netlify. Você pode acessá-lo [aqui](https://academiaxyz.netlify.app). Utilize as seguintes credenciais para acessar a área de testes:
  - **Username:** visitante
  - **Senha:** senhaVisitante

- **Backend:** O backend está atualmente hospedado no Railway. No entanto, o deploy será desligado em breve, 01/08/2024. Para continuar testando o projeto, caso o servidor esteja offline, você pode rodar o backend localmente seguindo as instruções abaixo.

## Rodando o Backend Localmente

1. Clone este repositório: `git clone <url-do-repositorio>`
2. Navegue até a pasta do backend: `cd backend`
3. Instale as dependências: `npm install`
4. Configure as variáveis de ambiente conforme descrito na seção de configuração.
5. Inicie o backend: `npm start`
6. O backend estará disponível em `http://localhost:3030`


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

