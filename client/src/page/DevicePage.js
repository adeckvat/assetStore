import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const DevicePage = () => {
    const device = {id: 1, name: 'SFP GCW', price: 1500, rating: 4, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'};
    const description = [
        {id:1, title: 'RAM', description: '8 GB'},
        {id:2, title: 'RAM', description: '8 GB'},
        {id:3, title: 'RAM', description: '8 GB'},
        {id:4, title: 'RAM', description: '8 GB'},
        {id:5, title: 'RAM', description: '8 GB'},
    ]
    return (
       <Container className="mt-3">
       <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img} />
            </Col>
           <Col md={4}>
               <Row className="d-flex align-items-center flex-column">
                   <h2 className="d-flex align-items-center flex-column">{device.name}</h2>
                   <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                        background:  'no-repeat center center', 
                        backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cpath fill="gray" d="M13.209 3.102c-.495-1.003-1.926-1.003-2.421 0L8.43 7.88l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719l-.9 5.25c-.19 1.104.968 1.945 1.959 1.424l5.064-2.663a.75.75 0 1 0-.698-1.327l-4.795 2.52l.862-5.029a1.35 1.35 0 0 0-.388-1.194l-3.654-3.562l5.05-.734c.44-.064.82-.34 1.016-.739l2.258-4.575l2.489 5.043a.75.75 0 0 0 .673.418h6.09a.75.75 0 0 0 0-1.5h-5.624l-2.417-4.898ZM14.5 12.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z"%2F%3E%3C%2Fsvg%3E')`, 
                        backgroundSize: 'cover', 
                        fontSize: 64, 
                        width: 240, 
                        height: 240
                        }}
                   >
                   {device.rating}
                   </div>
               </Row>
           </Col>
           <Col md={4}>
               <Card className="d-flex flex-column align-items-center justify-content-around"
                     style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}   
               >
                   <h3>By: {device.price} RUB</h3>
                   <Button variant="outline-dark">Add to basket</Button>
               </Card>
           </Col> 
       </Row>
       <Row className="d-flex flex-column m-3">
            <h1>Description:</h1>
           {description.map((info, index) =>
                <Row key={info.id}
                     style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}                       
                >
                    {info.title}:{info.description}
                </Row>
           )}
       </Row>
       </Container>
    );
};

export default DevicePage;