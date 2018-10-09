import React, {Component} from 'react';
import "./Food/Food.css";
import NewNavbar from "../components/Navbar";
import { Card, CardImg, CardText, CardBody, CardLink,
CardTitle, CardSubtitle, Button } from 'reactstrap';

// const pizza = require('../images/pizza.png');

import food from "../images/food.jpg";
import pizza from "../images/pizza.png";

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
            
            <div className= "FoodDivContainer">
                <NewNavbar />
                <div className="foodjumbotron">
                
                    <div className="container">
                        <h1 className="display-3">DRUNCHIES</h1>
                        <br></br>
                        <p className="lead">All the fried and saucy late night snacks we know you're craving.</p>
                    </div>
                </div>

                {/* {this.state.foods.map(food => ( */}
                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">MAC N CHEETOS</CardTitle>
                            <br></br>
                            <CardSubtitle className="CardSubtitle">If you haven't had it, you have to try it!</CardSubtitle>
                            
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src="https://i5.walmartimages.com/asr/cf3a2658-2f36-4d7d-887c-b57f7d5bdd03_1.2acac3766810ce6641b3aede6633b599.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF" alt="Card image cap" />
                            <CardBody>
                            <CardText>It's like fried macaroni but better! Instead of regualr breadding around the macaroni it's a Cheetos breading to make it even cheesier!</CardText>
                            <br></br>
                            <CardLink className="link" target="_blank" href="https://www.walmart.com/ip/Mac-N-Cheetos-Mac-Cheese-Snacks-Creamy-Cheddar-Flavored-14-4-oz/695622000">Buy</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">PIZZA HUT</CardTitle>
                            <br></br>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            <br></br>
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src="../images/pizza.png"/>
                            <CardBody>
                            <CardText>Nothing more comforting then a PIZZA this.</CardText>
                            <br></br>
                            <CardLink className="link" target="_blank" href="https://www.pizzahut.com/?gclid=Cj0KCQjw9NbdBRCwARIsAPLsnFbOQolxeOtsJpAcdueFQ5IwoM3eKGqaEr4LWeoZTE-b1O4LmC9rzmsaAkAYEALw_wcB&gclsrc=aw.ds&dclid=CJifw83h7d0CFY6-wAodCEwGpA">Order</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">TYSON'S TACOS</CardTitle>
                            <br></br>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src="https://static1.squarespace.com/static/57ae2aaee58c62414bd26a20/57ae31e55016e1690c423e21/57ae322ce3df28c4ce928147/1484591339729/Tyson%27s+Tacos.jpg?format=1500w" alt="Card image cap" />
                            <CardBody>
                            <CardText>Tyson Taco's has some of the best tacos in the Austin area.</CardText>
                            <br></br>
                            <CardLink className="link" target="_blank" href="http://www.tysonstacos.com/">Tyson's Taco</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">CHILI DOG</CardTitle>
                            <br></br>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            <br></br>
                            </CardBody>
                            <CardImg className="secondcardimage" width="200px" height="300px" src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/06/The-chilli-dog-600x398.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardText>Chili Dogs are a classic stomach filler. They are easy to make but still amazing.</CardText>
                            <br></br>
                            <CardLink className="link" target="_blank" href="https://www.allrecipes.com/recipe/223538/jeffs-hot-dog-chili/">Make Your Own</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">NACHOS</CardTitle>
                            <br></br>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            <br></br>
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/06/Nachos_with_Chilli-600x400.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some nachos are always great but you can also add whatever you have at home!</CardText>
                            <br></br>
                            <CardLink className="link" target="_blank" href="https://www.allrecipes.com/recipe/51147/super-nachos/">Build Your Own</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle className="cardTitle">KERBEY LANE</CardTitle>
                            <br></br>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            <br></br>
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src="https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Fjeffhyman%2Ffiles%2F2018%2F05%2FTaco-Bell-Delivery-2015.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardText>KERBEY LANE is a Austinite fan favorite and is open 24/7! Get your friends together and split some of that Kerby Queso goodness. </CardText> 
                            <br></br>
                            <CardLink className="link" target="_blank" href="https://kerbeylanecafe.com/locations">Find The Closetest Taco Bell</CardLink>
                            </CardBody>
                        </Card>
                    </div>
                {/* ))} */}
            </div>
        )
    }
}

export default Food;


