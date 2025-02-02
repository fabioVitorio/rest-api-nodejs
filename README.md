# API Rest de Estudo - Node.js e Express

Esta é uma API Rest simples criada para fins de estudo utilizando Node.js e o framework Express. A API gerencia uma lista de "clientes", permitindo realizar operações CRUD (Criar, Ler, Atualizar, Excluir) sobre os dados.

### Funcionalidades
- **GET /customers**: Lista todos os clientes.
- **GET /customers/:id**: Mostra os dados de um cliente específico pelo seu `id`.
- **POST /customers**: Cria um novo cliente.
- **PUT /customers/:id**: Atualiza os dados de um cliente específico.
- **DELETE /customers/:id**: Exclui um cliente específico.

### Tecnologias Utilizadas
- [Node.js](https://nodejs.org/) (versão 14 ou superior recomendada)
- [Express](https://expressjs.com/) (framework web para Node.js)
- [Postman](https://www.postman.com/) ou outra ferramenta de testes para consumir a API (opcional)

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/api-rest-estudo-nodejs.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd backend-nodejs
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
   O servidor estará rodando na porta 3000 por padrão.


##

### Postman - Client Consumindo os Endpoints da API

- **GET /customers**: Lista todos os clientes
![image](https://github.com/user-attachments/assets/aabeb4fb-a4e4-491a-9d9a-a0237d884d30)

- **GET /customers/:id**: Mostra os dados de um cliente específico pelo seu `id`.
![image](https://github.com/user-attachments/assets/6fe0f68c-86f9-465f-af4f-a0a56234dd74)

- **POST /customers**: Cria um novo cliente.
![image](https://github.com/user-attachments/assets/2d431501-f7ef-4b64-9338-c6882d2c24d0)

- **PUT /customers/:id**: Atualiza os dados de um cliente específico.
![image](https://github.com/user-attachments/assets/dff0f81c-e1dc-4967-8387-7945707d0c5a)

- **DELETE /customers/:id**: Exclui um cliente específico.
![image](https://github.com/user-attachments/assets/3a1d5ea3-d4e1-4036-8d40-a07f6284641f)


