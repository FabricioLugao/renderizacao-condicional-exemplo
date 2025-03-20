import React, { useState } from "react";

const ConditionalRendering = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [items, setItems] = useState([]);

  const mudarVisibilidade = () => {
    setIsVisible(!isVisible);
  };

  const mudarVisibilidadeLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Renderização Condicional em React</h1>
      <p>
        Antes do React, a renderização condicional era feita com JavaScript
        puro, manipulando o DOM diretamente. Agora, com React, podemos fazer
        isso de forma muito mais simples e declarativa.
      </p>

      <p>
        A renderização condicional é fundamental no desenvolvimento web, pois
        permite que componentes reajam a diferentes estados e condições,
        proporcionando uma experiência de usuário mais dinâmica e interativa.
      </p>

      <h2>Exemplo 1: Renderização Simples</h2>
      <button onClick={mudarVisibilidade}>
        {isVisible ? "Esconder" : "Mostrar"} Mensagem
      </button>
      {isVisible && <p>Esta é uma mensagem condicional!</p>}

      <h2>Exemplo 2: Renderização Baseada em Estado</h2>
      <button onClick={mudarVisibilidadeLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      {isLoggedIn ? (
        <p>Bem-vindo, usuário!</p>
      ) : (
        <div>Por favor, faça login.</div>
      )}

      <h2>Exemplo 3: Renderização de Lista Condicional</h2>
      <ul>
        {items.length > 0 ? (
          items.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>Não há itens na lista.</p>
        )}
      </ul>
    </div>
  );
};

export default ConditionalRendering;
