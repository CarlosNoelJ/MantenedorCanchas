import React, {useEffect, useState} from 'react';
import axios  from "axios";
import API_URLS from '../config';

function TipoCanchaList(){
    const [tipos, setTipos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const result = await axios(API_URLS.tipoCancha);
            setTipos(result.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const fetchTipos = async () => {
        const result = await axios.get(API_URLS.tipoCancha);
        setTipos(result.data);
    };

    const addTipoCancha = async () => {
        const result = await axios.post(API_URLS.tipoCancha, { descripcion: inputValue, montoReserva: 100 });
        fetchTipos(); // Refetch the list after adding
      };
    
      const updateTipoCancha = async (id) => {
        const result = await axios.put(`${API_URLS.tipoCancha}/${id}`, { descripcion: 'Updated', montoReserva: 150 });
        fetchTipos(); // Refetch the list after updating
      };
    
      const deleteTipoCancha = async (id) => {
        const result = await axios.delete(`${API_URLS.tipoCancha}/${id}`);
        fetchTipos(); // Refetch the list after deleting
      };

    return (
        <div className='container mt-4'>
            <h2>Lista de Tipos de Cancha</h2>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={addTipoCancha}>Añadir Tipo de Cancha</button>
            <ul>
                {tipos.map(tipo => (
                    <li key = {tipo.tCanchaId}>
                        {tipo.descripcion} - {tipo.montoReserva}
                        <button onClick={() => updateTipoCancha(tipo.TCancaId)}>Actualizar</button>
                        <button onClick={() => deleteTipoCancha(tipo.TCancaId)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TipoCanchaList;