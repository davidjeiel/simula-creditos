# SIMULA CRÉDITOS

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

