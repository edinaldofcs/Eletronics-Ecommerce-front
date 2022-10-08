Definições:

- Será uma SPA

Página de login (com google)

Página inicial

- Cate  
- mais vendidos
- Campo de busca (por texto e produto)

Página de Produtos
- Descrição
- preço
- Ver mais

Página de produto individual
- Botão de comprar
- Descrição
- Imagem
- Adicionar ao carrinho
- Preço

Página carrinho
- Listar produtos
- Alterar quantidade
- Remover produto
- Valor total
- ir para Checkout

Carrinho de compras

Página de pagamento

Endpoints front
/
/product/:id
/cart
/categorias/[slug]

Endpoints Back
/maisVendidos - get
/categorias/[slug] - get
/product/[slug] - get
/cart/add - post
/cart/remove - delete
/cart/amount - path
/checkout - (Ver integração com stripe)
/product/?q=xxxx - get


--- Tabelas ---

usuarios
- nome
- email
- id
- imagem

carrinho 
- id usuario
- id produto
- quantidade

Categorias
- id
- imagem
- title
- slug

Produtos
- id
- slug
- preco
- descricao

Produto Image
 - id Imagem
 - produto id Fk
 - url

Vendas
 - idVenda
 - idProduto fk
 - IdUsuario fk
 - qtde
 - valorUnitario
 - Ordem
 

- Criar novo endpoint
- 
