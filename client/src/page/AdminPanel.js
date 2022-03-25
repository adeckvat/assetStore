import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/Modals/CreateBrand";
import CreateDevice from "../components/Modals/CreateDevice";
import CreateType from "../components/Modals/CreateType";

const AdminPanel = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
            <Container className="d-flex flex-column">
                <Button 
                variant="outline-dark" 
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
                >
                    Add type
                </Button>
                <Button 
                variant="outline-dark" 
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
                >
                    Add brand
                </Button>
                <Button 
                variant="outline-dark" 
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
                >
                    Add devices
                </Button>
                <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}></CreateBrand>
                <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}></CreateDevice>
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}></CreateType>
            </Container>
        );
};

export default AdminPanel;