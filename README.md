# SIMULA CRÉDITOS
## **FrontEnd**

![Imagem Site](/public/img/screenshot.png)

### Desafio Hackaton CAIXA

<details>
<summary>Descrição da Demanda</summary>  

#### Perfil: FRONT-END

Construa uma aplicação que permita que o cliente realize a simulação de um produto de crédito.

A aplicação pode ser desenvolvida em qualquer linguagem de programação e para qualquer plataforma, mobile ou desktop.

Vamos desenvolver uma aplicação Front-end em qualquer linguagem de programação que terá como requisitos:

- Permitir que o cliente acesse por meio de aplicativo mobile OU página WEB a aplicação;
- Permitir que o cliente informe valor desejado de contratação e prazo para realizar a
simulação;
- Realizar chamada a serviço REST que realiza a simulação;
- Exibir os dados da simulação de forma intuitiva.

Links e Referências
- https://design.caixa

Serão avaliados critérios de usabilidade, performance, responsividade e aderência às boas práticas de design.
Para construção de sua aplicação deve ser utilizado o serviço abaixo, para realização da simulação:
- **URL API**: https://apphackaixades.azurewebsites.net/api/Simulacao
- **Documentação da API**: https://apphackaixades.azurewebsites.net/swagger/index.html

Exemplo de chamada:
```
curl -X 'POST' \
    'https://apphackaixades.azurewebsites.net/api/Simulacao' \
    -H 'accept: text/plain' \
    -H 'Content-Type: application/json' \
    -d '{
    "valorDesejado": 500,
    "prazo": 5
}
```

</details>


<br/>

### [Publicação em ambiente de testes](https://davidjeiel.github.io/simula-creditos/)

<br/>

## **Tecnologias usadas**

![JavaScript](https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript)
![React](https://img.shields.io/badge/-React-000?&logo=React)
![MUI](https://img.shields.io/badge/-mui-000?&logo=mui)
![Bootstrap](https://img.shields.io/badge/-bootstrap-000?&logo=Bootstrap)


 ## **Como implementar**

  Após realizar o clone do projeto realize a instalação das dependências

![NPM](https://img.shields.io/badge/-npm-000?&logo=npm)

  ```
  npm install
  npm start
  ```

![YARN](https://img.shields.io/badge/-yarn-000?&logo=yarn)

  ```
  yarn install
  yarn start
  ```