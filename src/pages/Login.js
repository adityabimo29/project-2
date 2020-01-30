import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input,Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
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
    //jika handlenya lebih dari satu maka sebaiknya di masing input dibaut
    //proprety name ,setelahnya setStatenya event.target.name mewakili semua
    //nama2 input
    console.log(this.state.email);
    console.log(this.state.password);
  };
  handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    // localStorage.setItem('user', JSON.stringify(user));

    let userSave = JSON.parse(localStorage.getItem('user'));
    console.log('this is userSave :', userSave);
    console.log('this is user:', user);
    if (userSave == null) {
      alert('you arent registered yet');
      this.props.history.push('/register');
    } else if (
      user.email === userSave.email &&
      user.password === userSave.password
    ) {
      localStorage.setItem('status', true);

      alert('Access Accepted.');
      this.props.history.push('/profile');
      window.location.reload();
    } else {
      alert('email and password wrong');
    }
  };

  render() {
    console.log(this.props);

    return (
      <Container className='mt-4'>
      <Row>
          <Col lg={{size:4,offset:4}} style={{backgroundColor:"#64b5f6",padding:"10px"}}>
            <Form onSubmit={this.handleSubmit}>
              <h3 className='text-center'>Login Form:</h3>
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

              <Button className='mt-2' color="success">Login</Button>
            </Form>
          </Col>
      </Row>
      </Container>
    );
  }
}

//https://reacttraining.com/
export default withRouter(Login);
