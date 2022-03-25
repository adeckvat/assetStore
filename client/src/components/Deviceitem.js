import { Icon } from '@iconify/react';
import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { generatePath, useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const history = useNavigate();
    const path = generatePath(DEVICE_ROUTE + '/' + device.id );
    return (
       <Col md={3} className={'mt-3'} onClick={() => history(path)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={device.img}/>
                <div className='text-black-50 d-flex justify-content-between align-items-center mt-1'>
                    <div>SFP...</div>
                        <div className='d-flex align-items-center'>
                            <div>{device.rating}</div>
                            <Icon icon="ant-design:star-outlined" width={18} height={18} />
                        </div>
                </div>
                <div className=''>{device.name}</div>    
            </Card>
       </Col>
    );
};

export default DeviceItem;