import React, { useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import axios from 'axios';
import { useFormik } from "formik";

const Modalia = (props) => {
  const {
    id,old
  } = props;
 
  //const [name,setName] = useState(curName);
  //const [avatar,setAvatar] = useState(curAvatar);
  //const [currData,setCurrData] = useState(old);


const formik = useFormik({
    initialValues:{
        name:old.name,
        avatar:old.avatar,
        country:old.country,
        city:old.city,
        email:old.email,
    },
    onSubmit: values => {

      axios.put(`https://5e313f3c576f9d0014d64535.mockapi.io/rac/users/${old.id}`, {
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

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className='btn-block' color="warning" onClick={toggle}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle} className={id}>
        <ModalHeader toggle={toggle}>Form Edit</ModalHeader>
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

export default Modalia;