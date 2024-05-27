import React, {useState, useEffect, useRef} from "react";
import {Modal, Button, Form} from 'react-bootstrap';

function AddTipoCanchaPopup({ show, handleClose, addTipoCancha }) {

    const [inputDescription, setInputDescription] = useState('');
    const [inputId, setInputId] = useState('');
    const [inputCost, setInputCost] = useState('');
    const inputIdRef = useRef(null);

    useEffect(() => {
        if (show) {
            inputIdRef.current.focus();
        }
    }, [show]);

    const handleSubmit = () => {
        addTipoCancha(inputId, inputDescription, inputCost);
        setInputCost('');
        setInputDescription('');
        setInputId('');
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar un nuevo Tipo de Cancha</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3">
                        <Form.Label>ID del tipo de cancha</Form.Label>
                        <Form.Control
                            type="text"
                            value={inputId}
                            onChange={e => setInputId(e.target.value)}
                            placeholder="Ingrese ID"
                            ref = {inputIdRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            type="text"
                            value={inputDescription}
                            onChange={e => setInputDescription(e.target.value)}
                            placeholder="Ingrese descripción"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Costo de Reserva</Form.Label>
                        <Form.Control
                            type="Number"
                            value={inputCost}
                            onChange={e => setInputCost(e.target.value)}
                            placeholder="Ingrese costo de reserva"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                <Button variant="primary" onClick={handleSubmit}>Guardar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddTipoCanchaPopup;