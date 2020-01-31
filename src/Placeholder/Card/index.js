import React from 'react';

import './styles.css';

export default function Card({ children, loading }) {
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
