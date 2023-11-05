CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(255),
  cpf VARCHAR(255)
);

INSERT INTO clientes (nome, email, cpf) VALUES ('Israel Santana', 'israel100santana@gmail.com', '488.829.428-30');