import React, {useState} from 'react'
import ProductForm from './ProductForm'
import {Modal, Button} from 'react-bootstrap'
export default function AddProductModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className="container text-center"> 
        <Button variant="primary" onClick={handleShow} style={{margin: "2vh"}}>
          Add a new product
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Add a new product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProductForm />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        
      </div>
    );
  };
