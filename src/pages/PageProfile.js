import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  CardImg,
  CardText,
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

export default function PageProfile() {
  const [user, setUser] = useState([]);
  const xusers = [];

  useEffect(() => {
    ambilData();
  }, []);

  let ambilData = async () => {
    const array = ['inanuriy', 'adityabimo29', 'indrasurya2019'];

    // for (const obj in array) {
    for (let i = 0; i <= array.length - 1; i++) {
      const response = await axios('https://api.github.com/users/' + array[i]);
      xusers.push(response);
    }
    const user = xusers;
    setUser(user);
    console.log(user);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridColumnGap: '15px',
              marginTop: '15px'
            }}
          >
            {user.map((item, id) => {
              console.log(item);
              console.log(id);
              return (
                <Card
                  style={{ backgroundColor: 'black', color: 'grey' }}
                  key={id}
                >
                  <CardImg
                    top
                    style={{
                      marginLeft: '40px',
                      margitnTop: '50px',
                      width: '250px',
                      justifyContent: 'center',
                      justifySelf: 'center'
                    }}
                    src={item.data.avatar_url}
                    alt='Card image cap'
                  />
                  <CardBody>
                    <CardTitle style={{ fontSize: '1.5rem', color: 'white' }}>
                      {' '}
                      Name:{item.data.name}
                    </CardTitle>
                    <CardSubtitle>Login: {item.data.login}</CardSubtitle>
                    <CardText>
                      Some quick example text to build on up the bulk of the
                      card's content.
                    </CardText>

                    <Button
                      style={{
                        marginLeft: '5px',
                        backgroundColor: 'red',
                        color: 'white'
                      }}
                    >
                      <a href={`${item.data.html_url}`}>link</a>
                    </Button>
                  </CardBody>
                </Card>
              );
            })}
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
