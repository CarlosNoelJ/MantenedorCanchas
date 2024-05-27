// src/components/CanchaList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URLS from '../config';

function CanchaList() {
  const [canchas, setCanchas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios(API_URLS.canchas);
      setCanchas(result.data);
    } catch (error) {
      console.error('Error fetchin data', error);
    }
  }

  const fetchCanchas = async () => {
    const result = await axios.get(API_URLS.canchas);
    setCanchas(result.data);
  }

  return (
    <div className="container mt-4">
      <h2>Lista de Canchas</h2>
      <ul>
        {canchas.map(cancha => (
          <li key={cancha.canchaId}>{cancha.tCanchaId} - {cancha.estado}</li>
        ))}
      </ul>
    </div>
  );
}
export default CanchaList;
