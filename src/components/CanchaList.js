// src/components/CanchaList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URLS from '../config';

function CanchaList() {
  const [canchas, setCanchas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API_URLS.canchas);
      setCanchas(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Lista de Canchas</h2>
      <ul>
        {canchas.map(cancha => (
          <li key={cancha.CanchaId}>{cancha.CanchaId} - {cancha.Estado}</li>
        ))}
      </ul>
    </div>
  );
}
export default CanchaList;
