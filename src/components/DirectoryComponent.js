import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <Link to={`/directory/${campsite.id}`}>
                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                
            </Link>
        </Card>
   );
}

function Directory (props) {
    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-4 p-0 m-0">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });



    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>All Day Breakfast Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>All Day Breakfast Menu</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}


export default Directory;