import React, {Component} from 'react';
import "./Food/Food.css";
import Navbar from "../components/Navbar";
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button } from 'reactstrap';




class Food extends Component {

    render() {
        return (
            
            <div className= "divContainer">
                <Navbar />
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is all the food that your dru</p>
                    </div>
                </div>

                <div className='foodcard'>
                    <Card>
                        <CardBody>
                        <CardTitle>Mac n Cheetos</CardTitle>
                        <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                        </CardBody>
                        <CardImg img-fluid width="100%" height="300px" src="https://i5.walmartimages.com/asr/cf3a2658-2f36-4d7d-887c-b57f7d5bdd03_1.2acac3766810ce6641b3aede6633b599.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF" alt="Card image cap" />
                        <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink target="_blank" href="https://www.walmart.com/ip/Mac-N-Cheetos-Mac-Cheese-Snacks-Creamy-Cheddar-Flavored-14-4-oz/695622000">Buy</CardLink>
                        </CardBody>
                    </Card>
                </div>
 
                  
            </div>
        )
    }
}

export default Food;
