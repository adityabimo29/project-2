import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,  } from 'reactstrap';
import { useFormik } from "formik";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const ModalPost = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  const formik = useFormik({
      initialValues:{
          name:'',
          avatar:'',
          country:'',
          city:'',
          email:'',
      },
      onSubmit: values => {

        axios.post('https://5e313f3c576f9d0014d64535.mockapi.io/rac/users', {
            name:values.name,
            avatar:values.avatar,
            country:values.country,
            city:values.city,
            email:values.email,
            })
            .then(response => {
                alert("Sukses di Inputkan");
                //console.log(response);
                formik.resetForm();
                window.location.reload();
            })
            .then(error => {
                console.log(error)
            })
      }
  })

  return (
    <div>
      <Button color="info" className='btn-block' onClick={toggle}>Post</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add Data</ModalHeader>
        <ModalBody>
          <form onSubmit={formik.handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
              id='name'
              type='text' 
              name='name'
              {...formik.getFieldProps('name')}
              className='form-control'
              />
              <label htmlFor="avatar">Avatar Url</label>
              <input 
              id='avatar'
              name='avatar'
              type='text'
              {...formik.getFieldProps('avatar')}
              className='form-control'
              />
              <label htmlFor="country">Country</label>
              <input 
              id='country'
              name='country'
              type='text'
              {...formik.getFieldProps('country')}
              className='form-control'
              />
              <label htmlFor="city">City</label>
              <input 
              id='city'
              name='city'
              type='text'
              {...formik.getFieldProps('city')}
              className='form-control'
              />
              <label htmlFor="email">Email</label>
              <input 
              id='email'
              name='email'
              type='email'
              {...formik.getFieldProps('email')}
              className='form-control'
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <Button color="success" type="submit" onClick={toggle} >Submit</Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default withRouter(ModalPost);