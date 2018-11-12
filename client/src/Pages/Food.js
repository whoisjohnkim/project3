import React, {Component} from 'react';
import "./Food/Food.css";
import NewNavbar from "../components/Navbar";
import { Card, CardImg, CardText, CardBody, CardLink,
CardTitle, CardSubtitle, Button } from 'reactstrap';
import Helmet from 'react-helmet';

import food from "../images/food.jpg";
import pizza from "../images/pizza.png";
import mac from "../images/macncheetos.jpg";
import tacos from "../images/tysonstacos.jpg";
import tots from "../images/tots.jpg";
import gyro from "../images/gyro.jpeg";
import pan from "../images/pancake.jpg";
import pou from "../images/poutine.jpg";
import lo from "../images/lomein.jpg";
import nacho from "../images/nachos.jpg";
import spoon from "../images/spoon.png";



const pizzahut = require('../images/pizza.png');
const macncheetos = require('../images/macncheetos.jpg');
const tysons = require('../images/tysonstacos.jpg');
const tatertots = require('../images/tots.jpg');
const gyros = require('../images/gyro.jpeg');
const pancake= require('../images/pancake.jpg');
const poutine= require('../images/poutine.jpg');
const lomein= require('../images/lomein.jpg');
const nachos= require('../images/nachos.jpg');




// import API from "../utils/API";


class Food extends Component {

    // state = {
    //     foods: [],
    //     id: ""
    // };

    // componentDidMount() {
    //     this.loadGuides();
    // };

    // loadGuides = () => {
    //     API.getFood()
    //         .then(res =>
    //             this.setState({foods: res.data})
    //         )
    //         .catch(err => console.log(err));
    // };

    render() {
        return (
            
            <div className="food-img">
            <Helmet bodyAttributes={{style: 'background: #eee'}}/>
            <div className= "FoodDivContainer">
                <NewNavbar />
                <div className="foodjumbotron">
                
                    <div className="container">
                        <h1 className="display-3">DRUNCHIES</h1>
                        <br />
                        <p className="lead">ALL THE FRIED AND SAUCY, LATE NIGHT SNACKS WE KNOW YOU'RE CRAVING.</p>
                    </div>
                </div>

                {/* {this.state.foods.map(food => ( */}

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">POUTINE</CardTitle>
                            <hr />
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src={poutine} />
                            <CardBody>
                            <CardText> A heart attack waiting to happen. Loaded fries drenched in gravy and cheese curds? Yes, cheese. </CardText> 
                        
                            <hr />
                            <CardLink className="link" target="_blank" href="https://www.seriouseats.com/recipes/2015/03/ultimate-perfect-poutine-fries-cheese-curds-gravy-recipe.html">MAKE IT AT HOME</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    
                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">LOADED TATER TOTS</CardTitle>
                            <hr />
                           
                            </CardBody>
                            <CardImg className="secondcardimage" width="200px" height="300px" src={tatertots} />
                            <CardBody>
                            <CardText>Cheese, green onions, and bacon? Just when you thought TATER TOTS couldn't get any better.</CardText>
                            <hr />
                            <CardLink className="link" target="_blank" href="https://www.savoryexperiments.com/cheesy-bacon-tots/">MAKE IT AT HOME</CardLink>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">PIZZA HUT</CardTitle>
                            <hr />
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src={pizzahut}/>
                            <CardBody>
                            <CardText> Damn, look at that melted cheese. <br/>Nothing more comforting then a PIZZA this. </CardText>
                           
                            <hr />
                            <CardLink className="link" target="_blank" href="https://www.pizzahut.com/?gclid=Cj0KCQjw9NbdBRCwARIsAPLsnFbOQolxeOtsJpAcdueFQ5IwoM3eKGqaEr4LWeoZTE-b1O4LmC9rzmsaAkAYEALw_wcB&gclsrc=aw.ds&dclid=CJifw83h7d0CFY6-wAodCEwGpA">ORDER</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                        <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">TSO CHINESE DELIVERY</CardTitle>
                            <hr />
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src={lomein} />
                            <CardBody>
                            <CardText> Chinese takeout, anyone? TSO CHINESE DELIVERY revolutionized the game with its delivery of fast and delicious Chinese food. <br/>It's TSO GOOD! </CardText> 
                            <hr />
                            <CardLink className="link" target="_blank" href="https://tsodelivery.com/">TSO READY TO ORDER</CardLink>
                            </CardBody>
                        </Card>
                    </div>
                    
                    
                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">KERBEY LANE</CardTitle>
                            <hr />
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src={pancake} />
                            <CardBody>
                            <CardText>KERBEY LANE is a Austinite fan favorite and is open 24/7! Get your friends together to enjoy a late night breakfast and split some of that Kerby Queso goodness. </CardText> 
                            <hr />
                            <CardLink className="link" target="_blank" href="https://kerbeylanecafe.com/locations">KERBEY NEAR ME</CardLink>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">NACHOS</CardTitle>
                            <hr />
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src={nachos} />
                            <CardBody>
                            <CardText>NEED <br /> WE <br /> SAY <br /> MORE?</CardText>
                            <hr />
                            <CardLink className="link" target="_blank" href="https://www.allrecipes.com/recipe/51147/super-nachos/">MAKE IT AT HOME</CardLink>
                            
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">TYSON'S TACOS</CardTitle>
                            <hr />
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src={tysons} />
                            <CardBody>
                            <CardText>Open 24/7 with an unbelievable selection of tacos, TYSON'S TACOS is an Austin gem.</CardText>
                            <hr />
                            <CardLink className="link" target="_blank" href="http://www.tysonstacos.com/">ORDER</CardLink>
                            </CardBody>
                        </Card>
                    </div>
                
                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">GYRO</CardTitle>
                            <hr />
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src={gyro} />
                            <CardBody>
                            <CardText>Warm, saucy, and pressed to perfection, GYROS are even more delicious late at night.</CardText> 
                            <hr />
                            <CardLink className="link" target="_blank" href="https://www.bonappetit.com/recipe/easiest-lamb-gyros-with-creamy-yogurt-sauce">MAKE IT AT HOME</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">MAC N CHEETOS</CardTitle>
                            <hr />
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src={macncheetos} />
                            <CardBody>
                            <CardText>Wait a second... Did someone say MAC N CHEETOS?? Help, I've fallen and I can't get up.</CardText>
                            <hr />
                            <CardLink className="link" target="_blank" href="https://www.walmart.com/ip/Mac-N-Cheetos-Mac-Cheese-Snacks-Creamy-Cheddar-Flavored-14-4-oz/695622000">Buy</CardLink>
                            </CardBody>
                        </Card>
                    </div>
                    

                {/* ))} */}
            </div>
        </div>
        )
    }
}

export default Food;


