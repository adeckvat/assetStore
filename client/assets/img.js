import { Icon } from "@iconify/react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const icon = () => {
    const device = {id: 1, name: 'SFP GCW', price: 1500, rating: 4, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'};
    return (
        <Container>
            <Col md={4}>
               <Row className="d-flex flex-column align-items-center ">
                   <h2>{device.name}</h2>
                   <div
                        className="d-flex align-items-center justify-content-center"
                        style={{background:  'no-repeat center center', width: 240, height: 240, backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"%3E%3Cpath fill="currentColor" d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7L323.1 772l36.1-210.3l-152.8-149L417.6 382L512 190.7L606.4 382l211.2 30.7l-152.8 148.9z"%2F%3E%3C%2Fsvg%3E')`, backgroundSize: 'cover', fontSize: 64}}
                   >
                   {device.rating}
                       <Icon icon="ant-design:star-outlined"
                             className="d-flex align-items-center justify-content-center"
                             style={{background:  'no-repeat center center', width: 240, height: 240, backgroundSize: 'cover',}}

                       >   {device.rating} </Icon>
                   </div>
               </Row>
           </Col>
        </Container>
    )
    
}

export default icon;