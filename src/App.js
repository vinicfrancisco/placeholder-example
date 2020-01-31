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
