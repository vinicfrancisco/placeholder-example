# Criando placeholders para loading page em ReactJS

Olá! Hoje aprenderemos como criar um componente de placeholder para qualquer tela de carregamento no ReactJS utilizando apenas CSS puro.

Para iniciarmos, precisamos primeiro criar o componente em que aplicaremos o placeholder. Neste exemplo utilizaremos um card com Título, Valor e um figura genérica como no exemplo abaixo.

````

import React from 'react';

import './styles.css';

function App() {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card-content">
          <span className="card-title">Título</span>
          <span className="card-value">Valor</span>
        </div>

        <div className="card-icon" />
      </div>
    </div>
  );
}

export default App;

````

Os arquivo de estilos deste projeto estão disponíveis no link do GitHub no topo do post.
Agora, tendo a estrutura do layout do card, precisamos criar o componente de placeholder.

Este componente receberá duas props:
— children;
— loading
Sendo a primeira responsável por passar para o componente o que deverá ser renderizado após o loading completo, e a segunda um boolean para informar ao componente que ele deve mostrar o placeholder e não o conteúdo.

Além disso, ele será montado seguindo a mesma estrutura de layout do card feito anteriormente, trocando os textos e imagens por blocos cinzas como mostra o exemplo:

Segue abaixo o código do componente Placeholder:

```

import React from 'react';

import './styles.css';

export default function Placeholder({ children, loading }) {
  return (
    <>
      {loading ? (
        <div className="card">
          <div className="content">
            <div className="title" />
            <div className="value" />
          </div>

          <div className="icon" />
        </div>
      ) : (
        children
      )}
    </>
  );
}
```

Com o componente devidamente criado e estilizado, precisamos agora aplicar o efeito de pulse nos objetos cinza. Para isso, utilizaremos keyframes para controlar a opacidade das divs.

```
@keyframes pulse {
  0% {
    opacity: 0.9;
  } 
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.9;
  }
}

```

Agora, com a animação criada, basta aplicarmos ela em todas as divs da classe card:

```
.card div {
   animation: pulse 1s infinite ease-in-out;
}
```

Com este componente finalizado, basta agora chamarmos ele em nossa página e passarmos a prop de loading. 

Para simular o tempo de carregamento da página, utilizaremos o método setTimeout e controlaremos o loading com um state da nossa página.

```
import React, { useState, useEffect } from 'react';

import Placeholder from './Placeholder';

import './styles.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="container">
        <Placeholder loading={loading}>
          <div className="card-container">
            <div className="card-content">
              <span className="card-title">Título</span>
              <span className="card-value">Valor</span>
            </div>

            <div className="card-icon" />
          </div>
        </Placeholder>
    </div>
  );
}

export default App;
```

Obrigado pelo seu tempo e espero ter contribuído de alguma forma para seus futuros projeto. Aquele abraço!