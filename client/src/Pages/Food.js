import React, {Component} from 'react';
import "./Food/Food.css";
import Navbar from "../components/Navbar";
import { Card, CardImg, CardText, CardBody, CardLink,
CardTitle, CardSubtitle, Button } from 'reactstrap';


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
            
            <div className= "divContainer">
                <Navbar />
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">DRUNCHIES!!!</h1>
                        <p className="lead">This is all the food that your drunchies heart desires!</p>
                    </div>
                </div>

                {/* {this.state.foods.map(food => ( */}
                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle>Mac N Cheese</CardTitle>
                            <br></br>
                            <CardSubtitle className="cardsubtitle">If you haven't had it, you have to try it!</CardSubtitle>
                            <br></br>
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src="https://i5.walmartimages.com/asr/cf3a2658-2f36-4d7d-887c-b57f7d5bdd03_1.2acac3766810ce6641b3aede6633b599.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <br></br>
                            <CardLink target="_blank" href="https://www.walmart.com/ip/Mac-N-Cheetos-Mac-Cheese-Snacks-Creamy-Cheddar-Flavored-14-4-oz/695622000">Buy</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle>Pizza Hut</CardTitle>
                            <br></br>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            <br></br>
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src="https://www.qsrmagazine.com/sites/qsrmagazine.com/files/styles/story_page/public/slideshow-images/slides/phut.jpg?itok=0DtjruF9" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <br></br>
                            <CardLink className="linkButton" target="_blank" href="https://www.pizzahut.com/?gclid=Cj0KCQjw9NbdBRCwARIsAPLsnFbOQolxeOtsJpAcdueFQ5IwoM3eKGqaEr4LWeoZTE-b1O4LmC9rzmsaAkAYEALw_wcB&gclsrc=aw.ds&dclid=CJifw83h7d0CFY6-wAodCEwGpA">Order</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle>Tyson's Tacos</CardTitle>
                            <br></br>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            <br></br>
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src="https://static1.squarespace.com/static/57ae2aaee58c62414bd26a20/57ae31e55016e1690c423e21/57ae322ce3df28c4ce928147/1484591339729/Tyson%27s+Tacos.jpg?format=1500w" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <br></br>
                            <CardLink target="_blank" href="http://www.tysonstacos.com/">Tyson's Taco</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle>Chili Dog</CardTitle>
                            <br></br>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            <br></br>
                            </CardBody>
                            <CardImg className="secondcardimage" width="200px" height="300px" src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/06/The-chilli-dog-600x398.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <br></br>
                            <CardLink target="_blank" href="https://www.allrecipes.com/recipe/223538/jeffs-hot-dog-chili/">Make Your Own</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle>Nachos</CardTitle>
                            <br></br>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            <br></br>
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/06/Nachos_with_Chilli-600x400.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some nachos are always great but you can also add whatever you have at home!</CardText>
                            <br></br>
                            <CardLink target="_blank" href="https://www.allrecipes.com/recipe/51147/super-nachos/">Build Your Own</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle>Taco Bell</CardTitle>
                            <br></br>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            <br></br>
                            </CardBody>
                            <CardImg className="secondcardimage" width="100%" height="300px" src="https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Fjeffhyman%2Ffiles%2F2018%2F05%2FTaco-Bell-Delivery-2015.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some foods are just only enjoyed after you've had a lot to drink. This place is the first on that list.</CardText> 
                            <br></br>
                            <CardLink target="_blank" href="https://www.tacobell.com/locations">Find The Closetest Taco Bell</CardLink>
                            </CardBody>
                        </Card>
                    </div>
                {/* ))} */}
            </div>
        )
    }
}

export default Food;
