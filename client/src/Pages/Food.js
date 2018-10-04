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
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>

                <div className='foodcard'>
                    <Card>
                        <CardBody>
                        <CardTitle>Mac n Cheetos</CardTitle>
                        <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                        </CardBody>
                        <CardImg img-fluid width="100%" height="300px" src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/06/Tacos.jpg" alt="Card image cap" />
                        <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                        </CardBody>
                    </Card>
                </div>

                <div className='foodcard2'>
                    <Card>
                        <CardBody>
                        <CardTitle>Chili Cheese Dog</CardTitle>
                        <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                        </CardBody>
                        <img width="100%" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.foodnetwork.com%2Fcontent%2Fdam%2Fimages%2Ffood%2Fvideo%2F0%2F01%2F013%2F0136%2F0136859.jpg&imgrefurl=https%3A%2F%2Fwww.foodnetwork.com%2Frecipes%2Frachael-ray%2Fdevilish-chili-cheese-dogs-recipe-1942655&docid=cqgHNl-S7e_G4M&tbnid=bvhBsjb6QPRYRM%3A&vet=10ahUKEwixvPCQouvdAhVHUK0KHTqUArkQMwhiKAAwAA..i&w=630&h=355&bih=816&biw=1680&q=chili%20cheese%20dog&ved=0ahUKEwixvPCQouvdAhVHUK0KHTqUArkQMwhiKAAwAA&iact=mrc&uact=8" alt="Card image cap" />
                        <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink href="https://www.foodnetwork.com/recipes/rachael-ray/devilish-chili-cheese-dogs-recipe-1942655" target="_blank">Recipe</CardLink>
                        </CardBody>
                    </Card>
                </div>

                <div>
                    <Card>
                        
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardImg bottom width="100%" height="300px" src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/06/Tacos.jpg" alt="Card image cap" />
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
 
                  
            </div>
        )
    }
}

export default Food;
