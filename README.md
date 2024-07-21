# Documentação do Backend da Academia XYZ
- **Status: ** Em desenvolvimento.
  
Este repositório contém o código-fonte para o backend da Academia XYZ. O backend foi desenvolvido utilizando [tecnologia específica, por exemplo, AdonisJS ou Laravel] e fornece APIs para gerenciar clientes, instrutores e suas interações com o sistema de academia.

## Deployment

- **Frontend**: O frontend deste projeto está hospedado no Netlify. Você pode acessá-lo [aqui](https://academiaxyz.netlify.app). Utilize as seguintes credenciais para acessar a área de testes:
  - **Username**: visitante
  - **Senha**: senhaVisitante

- **Backend**: O backend está atualmente hospedado no Railway. No entanto, o deploy será desligado em breve, 01/08/2024. Para continuar testando o projeto se o servidor estiver offline, siga as instruções abaixo para rodar o backend localmente.

## Rodando o Backend Localmente

1. Clone este repositório: `git clone <url-do-repositorio>`
2. Navegue até a pasta do backend: `cd backend`
3. Instale as dependências: `npm install`
4. Configure as variáveis de ambiente conforme descrito na seção de configuração.
5. Inicie o backend: `npm start`
6. O backend estará disponível em `http://localhost:3030`


## Esquema do Banco de Dados

O banco de dados utilizado pela Academia `XYZ` possui varias tabelas.
1. **cliente:** Armazena os dados dos alunos da academia.
2. **instrutor:** Armazena os dados dos personal(instrutores) da academia.
3. **planos:** Armazena os dados de todos os planos fornecido pela academia.
4. **usuario:** Armazena os dados dos usuários do sistema.
5. **store:** Armazena os dados dos produtos vendidos na academia.
6. **publicacao:** Armazena as publicações feita por um usuário do sistema.
7. **eventos:** Armazena todos os eventos postado por um usuário do sistema.
8. **lembretes:** Armazena todos os lembretes criado por um usuário do sistema(Apenas os usuarios de alto nivel(roles: admin, gerente, funcionarios), tem acesso.

   Em breve sera feita um feat para que todos os clientes tenha um acesso ao sistema e possa ver essas publicações e eventos.

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
