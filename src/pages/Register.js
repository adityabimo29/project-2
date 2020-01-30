import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.email);
    console.log(this.state.password);
  };
  handleSubmit = event => {
    const { name, email, password } = this.state;
    event.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password
    };

    if (name !== '' && email !== '' && password !== '') {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('status', false);
    }
  };

  render() {
    return (
      <Row>
        <Col lg={4}></Col>

        <div className='MyMiddleCol'>
          <Col lg={4}>
            <Form onSubmit={this.handleSubmit}>
              <h3 style={{ textAlign: 'center' }}>Please Register:</h3>
              <FormGroup>
                <Label for='Name'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='Name'
                  placeholder='Please Your Complete Name'
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for='exampleEmail'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='exampleEmail'
                  placeholder='something@idk.cool'
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </FormGroup>

              <FormGroup>
                <Label for='examplePassword'>Password</Label>
                <br />
                <Input
                  type='password'
                  name='password'
                  id='examplePassword'
                  placeholder='please input Password!'
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </FormGroup>

              <Button style={{ margin: '7px' }}>Submit</Button>
            </Form>
          </Col>
        </div>

        <Col lg={4}></Col>
      </Row>
    );
  }
}

//https://reacttraining.com/
