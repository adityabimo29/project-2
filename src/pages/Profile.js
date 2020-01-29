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
    return (
      <div>
        <h1>GET PROFILE FROM GITHUB</h1>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {data.map((item, index) => (
            <Card key={index} style={{ width: "200px", alignItems: "center" }}>
              <CardImg
                top
                width="100%"
                src={item.avatar_url}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{item.login}</CardTitle>
                <CardSubtitle>{item.id}</CardSubtitle>
                <CardSubtitle>{item.followers_url}</CardSubtitle>

              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}
