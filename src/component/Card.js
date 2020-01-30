import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button,Row,Col
  } from 'reactstrap';

import Modalia from './Modal';

export default function Cardy(props) {

    const {name,id,avatar,handleDelete,total,old} = props ;
    
    
    return (
        <Card key={id} className='my-4'>
            <CardImg top width="100%" style={{maxHeight:"200px"}} src={avatar} alt="Card image cap" />
            <CardBody>
            <CardTitle className='text-center'>{name}</CardTitle>
            <CardText className='left'>ID is : {id}</CardText>
            <CardText className='text-left'>{old.country}</CardText>
            <CardText className='text-left'>{old.city}</CardText>
            <CardText className='text-left'>{old.email}</CardText>
            <Row>
                <Col md={6}>
                <Modalia totalia={total} id={id} curName={name} curAvatar={avatar} old={old} />
                {/* <Button color="warning" onClick={handlePut} id={id}  className='btn-block'>Edit</Button> */}
                </Col>
                <Col md={6}>
                <Button color="danger" onClick={handleDelete} id={id} className='btn-block' >Delete</Button>
                </Col>
            </Row>
            
            
            </CardBody>
        </Card>
    )
}
