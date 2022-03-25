import React, { useContext } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(context)



    return (
      <Modal
      show={show}
      onHide={onHide}  
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add devices
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Form>
                <Dropdown id="dropdown-basic">
                  <Dropdown.Toggle>
                    Choose the type
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {device.types.map(type =>
                      <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
            </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="outline-danger" onClick={onHide}>Close</Button>
      <Button variant="outline-success" onClick={onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default CreateDevice;