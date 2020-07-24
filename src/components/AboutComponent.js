import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderPartner({partner}){
    
    if (partner){
        return (
            <React.Fragment>
               <Media object width="150" src={partner.image} alt={partner.name} /> 
               <Media body className="ml-5 mb-4">
                   <Media heading>{partner.name}</Media>
                   {partner.description}
               </Media>                   
            </React.Fragment>
         ); 
        }return <div/>;
     }




function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner}/>
            </Media>
        );
    });


 

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>The Waffle Story</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>The Waffle Story</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>What's in a Waffle?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Our Waffle Team</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Executive Chef:</dt>
                                <dd className="col-6">Riggsy Saia</dd>
                                <dt className="col-6">Waffle Builders:</dt>
                                <dd className="col-6">Joe, Tori, Maria, and Mom</dd>
                                <dt className="col-6">Where are We:</dt>
                                <dd className="col-6">Wrentham Commons</dd>
                                <dt className="col-6">Waffle Time:</dt>
                                <dd className="col-6">7am - 6pm</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <h3 className="mb-0">“We need to remember what's important in life: friends, waffles, work. Or waffles, friends, work. Doesn't matter, but work is third.”</h3>
                                <footer className="blockquote-footer">Riggsy{' '}
                                    <cite title="Source Title">"Early Morning Wisdom" -
                                    Wrentham</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Waffle Wisdom</h3>
                </div>
                <div className="col mt-4">
                    { <Media list>
                        {partners}
                    </Media> }
                
                </div>
            </div>
        </div>
    );
}

export default About;