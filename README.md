# ELETRONICS - ECOMMERCE

### 	Ecommerce de equipamentos de informática

<b><img class="emoji" alt="bookmark_tabs" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2139.png?v8"> SOBRE</b>

O projeto Ecommerce eletronics é uma aplicação criada em Next.js que consome uma REST Api feita com NestJS, com rotas públicas, rotas autenticadas e integração com sistema de pagamentos em modo de teste.

```js
node
npm ou yarn
```
<img class="emoji" alt="bookmark_tabs" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2699.png?v8"> <b>INSTALAÇÃO</b>

Clonar repositório front-end
```js
git clone https://github.com/leonardoxavier01/ecommerce.git
```
Instalar as dependências
```js
npm install
```
Na raiz do projeto, crie um arquivo `.env` e adicione a váriável que fara a coneção com o a API

```js
NEXT_PUBLIC_API_URL=https://www.edinaldofcs.com
```
Após estes passos, você poderá testar a aplicação, com o comando

```js
npm run dev
```

<b>OBS: </b>Para ver o projeto da API, <a href="https://github.com/edinaldofcs/Eletronics-Ecommerce-back" target="_blank">Clique aqui</a>

<img class="emoji" alt="bookmark_tabs" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/1f440.png?v8"> <b>Acessando o projeto</b>

Caso opte por não clonar o repositório, você pode acessar a aplicação diretamente, pelo site https://eletronics.vercel.app/

### Página inicial
Ao acessar a aplicação, a página inicial consta com a lista de categorias, bem como os 5 produtos mais vendidos.
![image](https://user-images.githubusercontent.com/61365646/199386432-44f24314-4d1c-41b6-837a-1016fd7bdfbf.png)

- para ver detalhes dos produtos, ou os produtos de determinada categoria, basta clicar sobre um ítem:

![image](https://user-images.githubusercontent.com/61365646/199387801-1989450b-fcf9-4234-8f90-9e52f15f2956.png)

### Cadastro
Para conseguir realizar alguma compra, ou colocar ítens no carrinho, primeiramente é necessário fazer um cadastro e realizar o login

<p>Cadastro</p>

![image](https://user-images.githubusercontent.com/61365646/199387119-128cb1ce-4e1a-4d8f-89cd-7e9d22cdd391.png)

<p>Login</p>

![image](https://user-images.githubusercontent.com/61365646/199387168-7bb14394-8d6c-4512-a9cb-417afc602ac7.png)

### Carrinho
Uma vez feito o login, você poderá adicionar um produto ao carrinho
OBS: Ao colocar um produto no carrinho, caso você efetue o login em outro dispositivo, o ítem irá aparecer no seu carrinho.
![image](https://user-images.githubusercontent.com/61365646/199388265-e90f1dc0-7431-456a-90b5-a6958ce8c181.png)

Você pode aumentar ou diminuir a quantidade de ítens, além de remover o ítem completamente


### Finalizando compra
Para finalizar sua compra, você deve clicar em `Ir para o Pagamento`. Feito isso, você será redirecionado para o Checkout da `Stripe`. Não se preocupe, pois a ferramenta está em modo de teste

![image](https://user-images.githubusercontent.com/61365646/199388632-3d8afb92-b6a1-461c-b54b-79b697bbacb2.png)

<p>Para efetuar a compra, utilize as seguintes informações</p>
<p>E-mail: Qualquer email válido</p>
<p>Dados do cartão: 4242 4242 4242 4242</p>
<p>MM / AA: 01/24 (ou qualquer data posterior ao dia atual)</p>
<p>CVC: 123 (ou quais quer 3 números)</p>
<p>Nome no cartão: Qualquer nome</p>

Após a confirmação da compra, você será redirecionado para a pgina de sucesso
![image](https://user-images.githubusercontent.com/61365646/199389014-a1877806-400c-4319-8612-59734933bd15.png)

`Note que seu carrinho ficará vazio :)`

Caso ocorra alguma falha, você será redirecionado para a página de falha :(
![image](https://user-images.githubusercontent.com/61365646/199389109-a6b2d869-1c24-4828-bb76-5edd43ba9c25.png)

### Obrigado por Chegar até aqui

# Tecnologias utilizadas
- <a href="https://nextjs.org/" target="_blank">Nest.js</a> - Fremework React
- <a href="https://nextjs.org/" target="_blank">Typescript</a> Linguagem tipada
- <a href="https://nextjs.org/" target="_blank">Tailwind</a> - framework CSS
- <a href="https://www.radix-ui.com/" target="_blank">Radix</a> - biblioteca de componentes de interface
- <a href="https://github.com/s-yadav/react-number-format" target="_blank">React-number-format</a> - Biblioteca de formatadores de entrada/números

