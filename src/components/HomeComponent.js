import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function RenderCard({item}) {
    return (
       
         
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
       
    );
}



function Home(props) {
    return (
        <div className="container">
             <div className="row">
            <h1>Today's Specials</h1>
                </div>
            <div className="row">
                <div className="col-md-6 m-0">
                    <RenderCard item={props.campsite} />
                </div>
                <div className="col-md-6 m-0">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-md m-0">
                    <RenderCard item={props.partner} />
                </div>
            </div>
        </div>
    );
}




export default Home;   