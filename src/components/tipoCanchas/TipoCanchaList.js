import React, {useEffect, useState} from 'react';
import axios  from "axios";
import API_URLS from '../../config';
import AddTipoCanchaPopup from './AddTipoCanchaPopup';

function TipoCanchaList(){
    const [tipos, setTipos] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchTipos();
    }, []);

    const fetchTipos = async () => {
        const result = await axios.get(API_URLS.tipoCancha);
        setTipos(result.data);
    };

    const addTipoCancha = async (id, descripcion, cost) => {
        if (!isNaN(cost) || cost > 0){
            const tCanchaObject = {
                Descripcion: descripcion, 
                MontoReserva: cost,
                TCanchaId: id
            };
            try {
                const result = await axios.post(API_URLS.tipoCancha, tCanchaObject );
                fetchTipos(); // Refetch the list after adding
            } catch (error) {
                console.error('Error adding tipo cancha:', error.response.data);
            }
        }
        else {
            console.error('El costo introducido no es un número válido');
        }
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
            <h2>Tipos de Canchas</h2>
            <button className='btn btn-success mt-2' onClick={() => setShowModal(true)}>Agregar Nuevo Tipo de Cancha</button>
            <AddTipoCanchaPopup
                show={showModal}
                handleClose={() => setShowModal(false)}
                addTipoCancha={addTipoCancha}
            />
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>T Cancha Id</th>
                        <th>Descripción</th>
                        <th>Monto de Reserva</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tipos.map(tipo => (
                            <tr key={tipo.tCanchaId}>
                                <td>{tipo.tCanchaId}</td>
                                <td>{tipo.descripcion}</td>
                                <td>{tipo.montoReserva}</td>
                                <td>
                                    <button className='btn btn-pimary' onClick={() => updateTipoCancha(tipo.tCanchaId)}>Actualizar</button>
                                    <button className='btn btn-danger' onClick={() => deleteTipoCancha(tipo.tCanchaId)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TipoCanchaList;