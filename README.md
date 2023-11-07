# Sistema de Gerenciamento de Pessoas

O Sistema de Gerenciamento de Pessoas é uma aplicação web que permite o gerenciamento de informações de indivíduos, incluindo a criação, leitura, atualização e exclusão (CRUD) de registros de pessoas. Essa aplicação é construída com tecnologias modernas e é hospedada em contêineres Docker para garantir facilidade de implantação e escalabilidade.

## Tecnologias Utilizadas:

- [NodeJs](https://nodejs.org/en/docs)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://docs.docker.com/)

## Dependencias:
Para a execução do projeto, as seguintes dependências precisão ser satifeitas,
- [Docker](https://docs.docker.com/get-docker/).
- [NodeJS](https://nodejs.org/en), Versão: 18.x ou superior.


## Execução do Projeto:
Fazer o clone e ir na pasta do projeto:

```sh
git clone https://github.com/SantanaRael/api-template.git
cd crud-node-express-postgres
```

Instalar as dependências do projeto:

```sh
npm install
```

Subir tres containers um com a API e outro com postgres e outro com o Front-end:

```sh
docker-compose up -d
```

Verificar se os containers subiram corretamente:

```sh
docker ps
```

## Documentação da API
Acessar aplicação pelo link:

```sh
http://localhost:8080/index.html
```


Alguns screenshots da aplicação funcionando:


![image](https://github.com/SantanaRael/crud-node-express-postgres/assets/73674173/41700045-6fe7-46e6-9047-f8bdf2c471ad)

![image](https://github.com/SantanaRael/crud-node-express-postgres/assets/73674173/dbd86823-1a34-4503-9450-03331ff2af32)

![image](https://github.com/SantanaRael/crud-node-express-postgres/assets/73674173/69527daa-d17e-4d39-aff0-e30e13de106f)

![image](https://github.com/SantanaRael/crud-node-express-postgres/assets/73674173/a990bd30-7d94-4601-bacc-dadf0ff805fe)




