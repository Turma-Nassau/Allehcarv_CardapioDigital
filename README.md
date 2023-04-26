# CARDÁPIO ONLINE

## 📝Descrição
Desenvolvimento de projeto para disciplina de Códigos de Alta Performance.

## 📚Funcionalidades
Plataforma responsável pela elaboração de pedidos de clientes de forma automatizada.

## 🔧Tecnologias Utilizadas
* HTML
* CSS
* Javascript
* NodeJS
* MySQL
* Figma
* Docker

## 🔐Atualizações Futuras
Sistema de envios de notificações com informações do pedido.

Métodos de pagamento

## 🤝Colaboradores
<tabela>
    <tr> 
        <td align= 'center'>
            <a href= 'https://github.com/allehcarv'> 
                <sub>
                    <b>Alessandro Lindemberg</b>
                </sub>
            </a>
        </td>
    </tr>
</tabela>

## 🎯status do projeto
Em fase de desenvolvimento.

## :hammer_and_wrench: Estrutura de Dados
- cliente

```s
    CREATE TABLE cliente (
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  sexo VARCHAR(10),
  idade INT,
  endereco VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  qtd_pedidos INT NOT NULL DEFAULT 0
);
```

- produto

```s
   CREATE TABLE cliente (
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  sexo VARCHAR(10),
  idade INT,
  endereco VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL
);
```

- pedido
 
```s
    CREATE TABLE pedido (
  id_pedido INT AUTO_INCREMENT PRIMARY KEY,
  id_cliente INT NOT NULL,
  data_hora DATETIME NOT NULL,
  valor_total DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);
```

- item_pedido 

```s
    CREATE TABLE item_pedido (
  id_item_pedido INT AUTO_INCREMENT PRIMARY KEY,
  id_pedido INT NOT NULL,
  id_produto INT NOT NULL,
  quantidade INT NOT NULL,
  FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
  FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);
```
