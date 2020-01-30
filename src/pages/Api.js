
import React, { Component, Fragment} from 'react';
import axios from 'axios';
import {Container,Row,Col} from 'reactstrap';
import CardList from '../component/CardList';
import ModalPost from '../component/ModalPost';

export default class Api extends Component {

    constructor(props){

        super(props);

        this.state = {
            data:'',
            isLoading:true,
            name:'',
            avatar:'',
            total:0,
            currData:'',
            datatu:[]
        }

    }
   

    //Register
    //Login
    //Home
    //Profile
    //Api Mock
    //Bebas
    // 3 Hooks 3 Class

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        axios.get('http://5e313f3c576f9d0014d64535.mockapi.io/rac/users')
        .then(res => {
            if(res.status === 200){
            const data =  res.data ;
            this.setState({data:data,isLoading:false,total:data.length});
            }else{
                console.log('Something is wrong with that status data');
            }
        })
    }

    getById = (e) => {
        axios.get(`http://5e313f3c576f9d0014d64535.mockapi.io/rac/users/${e.target.id}`)
        .then(res => {
            if(res.status === 200){
            const data =  res.data ;
            // setName('');
            
            // setAvatar('');
            console.log(data);
            }else{
                console.log('Something is wrong with that status data');
            }
        })
    }

    handleChange = e => {

        if(e.target.name === 'name'){
            this.setState({name:e.target.value});
        }else{
            this.setState({avatar:e.target.value});
        }
        
    }

    handlePut = e => {

        const name = prompt('Name');
        const avatar= prompt('Url Avatar');


        axios.put(`http://5e313f3c576f9d0014d64535.mockapi.io/rac/users/${e.target.id}`, {
            name:name,avatar:avatar
        })
        .then(response => {
                //console.log(response);
                this.fetchData();
            })
        .then(error => {
                console.log(error)
            })
    }

    handleDelete = e => {
        //console.log(e.target.id)
        axios.delete(`http://5e313f3c576f9d0014d64535.mockapi.io/rac/users/${e.target.id}`)
	    .then(res => this.fetchData());
    }

    handlePost = e => {
        axios.post('http://5e313f3c576f9d0014d64535.mockapi.io/rac/users', {
        name:this.state.name,
        avatar:this.state.avatar
        })
        .then(response => {
            alert("Sukses di Inputkan");
            this.setState({name:'',avatar:''})
            this.fetchData()
            //console.log(response);
        })
        .then(error => {
            console.log(error)
        })
        e.preventDefault();
    }


    render() {
        const {isLoading,data} = this.state;
        console.log(this.state.data)
        return (
            <Container>
            { !isLoading ? ( 
            <Fragment>
                <Row className='mt-4'>
                    
                    <Col md={{size:6,offset:3}}>
                    <h1 className='text-center alert alert-info '>API MOCK</h1>
                        <ModalPost />
                    </Col>
                </Row>
                <Row>
                    <CardList total={data.total} handlePut={this.handlePut} handleDelete={this.handleDelete} data={data} />
                </Row>
            </Fragment>
            ) : (<p className='text-center'>Loading</p>)
            }
            </Container>
        )
    }
}
