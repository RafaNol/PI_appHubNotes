# Projeto Integrador Hub Notes

## Apresentação

Ao revisitar o projeto decidimos fazer a implementação da funcionalidade do bloco de notas. Apresentaremos a jornada completa para essa funcionalidade através de um CRUD, sendo a criação de uma nova nota, a consulta das notas existentes no banco de dados, a edição de uma nota que também já exista no banco de dados e por fim a exclusão de uma nota, fechando a jornada da funcionalidade escolhida.

Todos os integrantes do grupo contribuirão para o planejamento, o desenvolvimento e a montagem da funcionalidade escolhida para que ficasse funcional.

## Membros

- Leonardo Weslley
- Rafael Machado Nolasco
- Pedro Rocha Campos
- Matheus Selis Salustiano
- Rafael Souto de Souza

# Tecnologias utilizadas

## Back-end

### Linguagens

- Java

### Framework

- Springboot

### Ferramentas

- Docker
- MongoDB

## Front-end

### Linguagens

- Javascript

### Framework

- Reactjs
- React Router
- Vitejs
- Nodejs

# Passos para a execução local do projeto

## 1° Execute o back-end:

- Abra o Terminal Docker

- Navegue até a pasta Back/

- Execute o comando:

```bash
docker-compose up -d
```
- Aguarde carregar e já será feito uma instância do banco de dados

- Na sua IDE execute o metodo Main na pasta hubNotes\hubNotes

## 2° Execute o front-end:

- No terminal Node acesse a pasta Front/PI_appHubNotes rode os comandos:

```bash
node --version
```
- Para checar a versão do node instalado. Caso esteja ok continue.

```bash
npm install
```
- Em seguida

```bash
npm run dev
```
- Acesse http://localhost:3000/ no seu navegador que o projeto estará rodando.
