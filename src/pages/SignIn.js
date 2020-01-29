import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.password);
  };
  handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    // localStorage.setItem('user', JSON.stringify(user));

    let userSave = JSON.parse(localStorage.getItem('user'));
    console.log('this is userSave :', userSave);
    console.log('this is user:', user);
    if (userSave == null) {
      alert('you arent registered yet');
      this.props.history.push('/Register');
    } else if (
      user.name === userSave.name &&
      user.email === userSave.email &&
      user.password === userSave.password
    ) {
      localStorage.setItem('status', true);

      alert('You can access Profile Page');
      this.props.history.push('/PageProfile');
    } else {
      alert('email and password wrong,please Register');
      this.props.history.push('/Register');
    }
  };

  render() {
    console.log(this.props);

    return (
      <Row>
        <Col lg={4}></Col>

        <Col lg={4} className='MyMiddleCol'>
          <div>
            <h3 style={{ textAlign: 'center' }}>Please SignIn :</h3>
            <Form onSubmit={this.handleSubmit}>
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
          </div>
        </Col>

        <Col lg={4}></Col>
      </Row>
    );
  }
}

//https://reacttraining.com/
export default withRouter(Login);
