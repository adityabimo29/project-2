import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  Container,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item1: [],
      item2: [],
      item3: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const data1 = await axios.get("https://api.github.com/users/inanuriy")
    const data2 = await  axios.get("https://api.github.com/users/adityabimo29")
    const data3 = await  axios.get("https://api.github.com/users/indrasurya2019")
    // axios
    //   .all([
    //     axios.get("https://api.github.com/users/inanuriy"),
    //     axios.get("https://api.github.com/users/adityabimo29"),
    //     axios.get("https://api.github.com/users/indrasurya2019")
    //   ])
    //   .then(axios.spread((item1, item2, item3) => {
    //     this.setState({item1})
    //     this.setState({item2})
    //     this.setState({item3})
    //   }))

    this.setState({item1: data1.data})
    this.setState({item2: data2.data})
    this.setState({item3: data3.data})
  };

  render() {
    const { item1,item2,item3 } = this.state;console.log(item1, item2, item3)    

    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "10px", marginTop: "50px" }}>
          GET PROFILE FROM GITHUB
        </h1>
        <Container
          fluid={true}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <Card style={{width: "400px", alignItems: "center", margin: "15px", padding: "15px", boxShadow: "3px 3px 10px #000000"}}>
            <CardImg
              top
              width="100%"
              src={item1.avatar_url}
              alt="Card image cap"
            />
            <CardBody>
              <h3 style={{ textAlign: "center" }}>{item1.name}</h3>
              <CardTitle style={{ textAlign: "center" }}>
                {item1.login}
              </CardTitle>
              <CardSubtitle style={{ textAlign: "center" }}>
                {item1.id}
              </CardSubtitle>
              <CardSubtitle style={{ textAlign: "center" }}>
                {item1.url}
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card style={{width: "400px", alignItems: "center", margin: "15px", padding: "15px", boxShadow: "3px 3px 10px #000000"}}>
            <CardImg
              top
              width="100%"
              src={item2.avatar_url}
              alt="Card image cap"
            />
            <CardBody>
              <h3 style={{ textAlign: "center" }}>{item2.name}</h3>
              <CardTitle style={{ textAlign: "center" }}>
                {item2.login}
              </CardTitle>
              <CardSubtitle style={{ textAlign: "center" }}>
                {item2.id}
              </CardSubtitle>
              <CardSubtitle style={{ textAlign: "center" }}>
                {item2.url}
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card style={{width: "400px", alignItems: "center", margin: "15px", padding: "15px", boxShadow: "3px 3px 10px #000000"}}>
            <CardImg
              top
              width="100%"
              src={item3.avatar_url}
              alt="Card image cap"
            />
            <CardBody>
              <h3 style={{ textAlign: "center" }}>{item3.name}</h3>
              <CardTitle style={{ textAlign: "center" }}>
                {item3.login}
              </CardTitle>
              <CardSubtitle style={{ textAlign: "center" }}>
                {item3.id}
              </CardSubtitle>
              <CardSubtitle style={{ textAlign: "center" }}>
                {item3.url}
              </CardSubtitle>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}
