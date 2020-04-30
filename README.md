<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://hotmart.s3.amazonaws.com/product_pictures/6bd576fb-5d9f-4c15-b59d-482ff6a26cbe/GO1.png" alt="Desafio fundamentos Node.js"></a>
</p>

<h3 align="center">Desafio fundamentos Node.js</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/larabeatrizms/desafio-fundamentos-nodejs.svg)](https://github.com/larabeatrizms/desafio-fundamentos-nodejs/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/larabeatrizms/desafio-fundamentos-nodejs.svg)](https://github.com/larabeatrizms/desafio-fundamentos-nodejs/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Projeto contruído com conhecimento nos fundamentos do Node.js. Utilizando dois patterns dentro de aplicações back-end e comparando com outros padrões comuns como os controllers do MVC. Projeto focado no Data Mapper Pattern e nos princípios dos SOLID e DDD. Para conhecer mais sobre as diferenças com o MVC <a href="https://www.notion.so/Repository-service-e-patterns-82419cceb11c4c4fbbc055ade7fb1ac5">acesse este link</a>.
    <br>
</p>

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Iniciando](#getting_started)
- [Preview](#preview)
- [Testes](#tests)
- [Uso](#usage)
- [Construído utilizando](#built_using)
- [Authors](#authors)

## 🧐 Sobre <a name = "about"></a>

Projeto criado para estudar e praticar os fundamentos do Node.js. Assim, fazendo o desafio 4 - Fundamentos Node.js da Rocketseat no GoStack 11. Abordando os conceitos do SOLID, com Services, Models e Repositories.

### 🚀: Sobre o desafio

Nesse desafio, você deve criar uma aplicação para continuar treinando o que você aprendeu até agora no Node.js junto ao TypeScript, utilizando o conceito de models, repositories e services!

Essa será uma aplicação para que deve armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.

Descrição completa sobre o desafio, [acessar descrição](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-fundamentos-nodejs)

## 🏁 Iniciando <a name = "getting_started"></a>
### Rotas da Aplicação

- **`POST /transactions`**: A rota deve receber `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saidas (retiradas).

- **`GET /transactions`**: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito.

## 🚀 Preview<a name = "preview"></a>

![Gif](https://i.gyazo.com/a96c1e3481fab9909a8f76f4b10bc3ad.gif)

### Requisitos

Ter instalado pelo menos um gerenciador de pacotes do Node, [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).

### Installing

Executar na raiz do projeto o seguinte comando para instalar as dependências

```sh
yarn install
```

ou

```sh
npm install
```


## 🔧 Executando os tests <a name = "tests"></a>

```sh
yarn test
```

### Sobre os testes

Para esse desafio temos os seguintes testes:

- **`should be able to create a new transaction`**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.

- **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: `{ error: string }`


## 🎈 Uso <a name="usage"></a>

```sh
yarn dev:server
```

## ⛏️ Construído utilizando <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Typescript](https://www.typescriptlang.org/) - Language for application-scale JavaScript

## ✍️ Authors <a name = "authors"></a>

👤 **Lara Beatriz**

* Twitter: [@LaraBeatrizMS](https://twitter.com/LaraBeatrizMS)
* Github: [@larabeatrizms](https://github.com/larabeatrizms)
* LinkedIn: [@larabeatrizms](https://linkedin.com/in/larabeatrizms)

