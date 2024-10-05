import React from 'react';

function App() {
  
  let [contador, setearConteo] = React.useState(0);

  function aumentarConteo(){
    setearConteo(contador + 1);
  }
  
  return (
  <div>
    <h1>Contador: {contador}</h1>
    <button onClick={aumentarConteo}>Incrementar</button>
  </div>  
  );
}

export default App;
