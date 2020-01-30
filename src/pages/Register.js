import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Row, Container } from 'reactstrap';
import { withRouter } from 'react-router';
class Register extends React.Component {
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
      alert('register success');
      this.props.history.push('/login');
    }
  };

  render() {
    return (
      <Container className='mt-4'>
      <Row>
          <Col lg={{size:4,offset:4}} style={{backgroundColor:"#64b5f6",padding:"10px"}}>
            <Form onSubmit={this.handleSubmit}>
              <h3 className='text-center'>Please Register:</h3>
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

              <Button className='mt-2' color="success">Register</Button>
            </Form>
          </Col>
      </Row>
      </Container>
    );
  }
}

export default withRouter(Register);
