import React, { Fragment } from 'react'
import {Col} from 'reactstrap';
import Cardy from './Card';

export default function CardList(props) {
    const {data,handleDelete,handlePut,total} = props;
    
    //let dead = {}
    return (
        <Fragment>

        {
            data.map( (item) => {
                 
                return(
                    <Col md={3} key={item.id}>
                        <Cardy total={total} handlePut={handlePut} handleDelete={handleDelete}  id={item.id} old={{id:item.id,name:item.name,avatar:item.avatar,country:item.country,city:item.city,email:item.email}} avatar={item.avatar} name={item.name} />
                    </Col>
                )
            })
        }
        </Fragment>
        
    )
}
