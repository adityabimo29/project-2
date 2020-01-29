import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  Container,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get("https://api.github.com/users").then(response => {
      const data = response.data;
      this.setState({ data });
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center", margin:"10px"}}>GET PROFILE FROM GITHUB</h1>
        <Container
          fluid={true}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {data.map((item, index) => (
            <Card key={index} style={{ width: "200px", alignItems: "center", margin:"5px"}}>
              <CardImg
                top
                width="100%"
                src={item.avatar_url}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle style={{textAlign: "center"}}>{item.login}</CardTitle>
                <CardSubtitle style={{textAlign: "center"}}>{item.id}</CardSubtitle>
              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}
