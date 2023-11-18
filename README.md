# Projeto Integrador Hub Notes

## Apresentação

Focando na jornada de criar e visualizar anotações em nosso aplicativo. Cada passo, desde a Landing Page até a inclusão e exclusão de anotações, foi planejado para proporcionar uma experiência simples e eficiente aos usuários. O deploy do projeto será feito somente semestre que vem, onde será implementado todas as outras jornadas com login e etc.

## Membros

- Leonardo Weslley
- Rafael Nolasco
- Pedro
- Matheus Sales
- Rafael

# Tecnologias utilizadas

## Front

### Linguagens
 
- Javascript

### Framework

- Reactjs
- React Router
- Vitejs
- Nodejs

## Back

### Linguagens

- Java

### Framework

- Springboot

### Ferramentas

- Docker
- MongoDB


# Passos para a execução local do projeto

## Para executar o Front:
- No terminal Node acesse a pasta Front/PI_appHubNotes rode os comandos:

```bash
node --version
```
para checar a versão do node instalado. Caso ok continue.

```bash
npm install
```
e em seguida

```bash
npm run dev
```

e acesse o http://localhost:3000/ que o projeto vai estar rodando

## Para executar o Back 

- Abra o Terminal Docker

- Navegue até a pasta Back/

- Execute o comando:

```bash
docker-compose up -d
```
- Aguarde carregar e já será feito uma instância do banco de dados

- Na sua IDE execute o metodo Main na pasta hubNotes\hubNotes
