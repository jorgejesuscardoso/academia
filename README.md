# Documentação do Backend da Academia XYZ

Este repositório contém o código fonte do backend para a Academia `XYZ`. Abaixo está a documentação do esquema do banco de dados utilizado pelo backend.

## Esquema do Banco de Dados

O banco de dados utilizado pela Academia `XYZ` possui duas tabelas principais: Cliente e Instrutor.

### Tabela: Cliente

- **id_cliente** (INT, PK): Identificador único do cliente.
- **nome** (VARCHAR): Nome do cliente.
- **email** (VARCHAR): Endereço de email do cliente.
- **telefone** (VARCHAR): Número de telefone do cliente.
- **data_matricula** (DATE): Data de matrícula do cliente na academia.
- **data_vencimento** (DATE): Data de vencimento do plano do cliente.
- **data_nascimento** (DATE): Data de nascimento do cliente.
- **endereco** (VARCHAR): Endereço do cliente.

### Tabela: Instrutor

- **id_instrutor** (INT, PK): Identificador único do instrutor.
- **nome** (VARCHAR): Nome do instrutor.
- **email** (VARCHAR): Endereço de email do instrutor.
- **telefone** (VARCHAR): Número de telefone do instrutor.

## Relacionamentos

Não há relacionamentos entre as tabelas Cliente e Instrutor neste esquema.

## SQL

```sql
CREATE TABLE Cliente (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    data_matricula DATE NOT NULL,
    data_vencimento DATE NOT NULL,
    data_nascimento DATE,
    endereco VARCHAR(200)
);

CREATE TABLE Instrutor (
    id_instrutor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
);
```

## Funcionamento das APIs

O backend da Academia `XYZ` possui as seguintes APIs:

### Clientes

- **POST /clientes**: Cria um novo cliente com os dados fornecidos.
- **GET /clientes**: Retorna a lista de todos os clientes cadastrados.
- **GET /clientes/{id}**: Retorna os detalhes de um cliente específico.
- **PUT /clientes/{id}**: Atualiza os dados de um cliente específico.
- **DELETE /clientes/{id}**: Remove um cliente específico do banco de dados.

### Instrutores

- **POST /instrutores**: Cria um novo instrutor com os dados fornecidos.
- **GET /instrutores**: Retorna a lista de todos os instrutores cadastrados.
- **GET /instrutores/{id}**: Retorna os detalhes de um instrutor específico.
- **PUT /instrutores/{id}**: Atualiza os dados de um instrutor específico.
- **DELETE /instrutores/{id}**: Remove um instrutor específico do banco de dados.

## Swagger

A documentação completa das APIs pode ser acessada através do Swagger em `http://localhost:3030/docs`.

## Rodando o Backend

Para rodar o backend da Academia `XYZ`, siga os passos abaixo:

1. Clone este repositório.
2. Entre na pasta do backend: `cd backend`.
3. Instale as dependências: `npm install`.
4. Rode o backend: `npm start`.

O backend estará disponível em `http://localhost:3030`.
