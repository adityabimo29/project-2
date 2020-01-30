import React, { useState, useEffect   } from 'react';
import axios from 'axios';
import {
    Card, CardImg,  CardBody,
    CardTitle,Container,Row,Col
  } from 'reactstrap';

export default function Free() {

    //const [total,setTotal] = useState(0);
    const [data,setData] = useState([]);
    //const [count, setCount] = useState(1);

    useEffect(() => {
        fetchData();
         
    }, [])
    
    //=YOUR_ACCESS_KEY
    //https://api.thecatapi.com/v1/images/search?size=full

    function fetchData() {
              axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                    if(response.status === 200){
                        const datas = response.data;
                    //setCount(count+1);
                    //let ur = `https://cdn2.thecatapi.com/images/${count}.jpg`
                    
                    setData(datas);
                    console.log(datas);
                    }
                    
                })
                .catch(err => {
                    console.error(err);
                });
        
    }
    
    

    return (
        
            <Container className='mt-4'>
            <Row>
                <Col md={{size:6,offset:3}}>
                <h3 className='alert alert-warning text-center'>OPEN API UNSPLASH</h3>
                </Col>
            </Row>
            <Row>
                
            {
                data.map( (item,index) => {
                    
                    return(
                        <Col key={item.id} md={3}>
                        <Card  className='my-4'>
                            <CardImg top width="100%" src={item.urls.small} alt="Card image cap" />
                            <CardBody>
                            <CardTitle className='text-center'>{item.alt_description}</CardTitle>
                            </CardBody>
                        </Card>
                        </Col>
                    )
                })
            }
            </Row>
            </Container>
        
    )
}
