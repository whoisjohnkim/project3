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
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            </CardBody>
                            <CardImg className="secondcardimage" img-fluid width="80%" height="300px" src="https://i5.walmartimages.com/asr/cf3a2658-2f36-4d7d-887c-b57f7d5bdd03_1.2acac3766810ce6641b3aede6633b599.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <CardLink target="_blank" href="https://www.walmart.com/ip/Mac-N-Cheetos-Mac-Cheese-Snacks-Creamy-Cheddar-Flavored-14-4-oz/695622000">Buy</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle>Mac N Cheese</CardTitle>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            </CardBody>
                            <CardImg img-fluid width="20px" height="300px" src="https://www.qsrmagazine.com/sites/qsrmagazine.com/files/styles/story_page/public/slideshow-images/slides/phut.jpg?itok=0DtjruF9" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <CardLink target="_blank" href="https://www.walmart.com/ip/Mac-N-Cheetos-Mac-Cheese-Snacks-Creamy-Cheddar-Flavored-14-4-oz/695622000">Buy</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle>Mac N Cheese</CardTitle>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            </CardBody>
                            <CardImg img-fluid width="100%" height="300px" src="https://i5.walmartimages.com/asr/cf3a2658-2f36-4d7d-887c-b57f7d5bdd03_1.2acac3766810ce6641b3aede6633b599.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <CardLink target="_blank" href="https://www.walmart.com/ip/Mac-N-Cheetos-Mac-Cheese-Snacks-Creamy-Cheddar-Flavored-14-4-oz/695622000">Buy</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle>Mac N Cheese</CardTitle>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            </CardBody>
                            <CardImg img-fluid width="200px" height="300px" src="https://i5.walmartimages.com/asr/cf3a2658-2f36-4d7d-887c-b57f7d5bdd03_1.2acac3766810ce6641b3aede6633b599.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <CardLink target="_blank" href="https://www.walmart.com/ip/Mac-N-Cheetos-Mac-Cheese-Snacks-Creamy-Cheddar-Flavored-14-4-oz/695622000">Buy</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle>Mac N Cheese</CardTitle>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            </CardBody>
                            <CardImg img-fluid width="100%" height="300px" src="https://i5.walmartimages.com/asr/cf3a2658-2f36-4d7d-887c-b57f7d5bdd03_1.2acac3766810ce6641b3aede6633b599.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <CardLink target="_blank" href="https://www.walmart.com/ip/Mac-N-Cheetos-Mac-Cheese-Snacks-Creamy-Cheddar-Flavored-14-4-oz/695622000">Buy</CardLink>
                            </CardBody>
                        </Card>
                    </div>

                    <div className='foodcard'>
                        <Card>
                            <CardBody>
                            <CardTitle>Mac N Cheese</CardTitle>
                            <CardSubtitle>If you haven't had it, you have to try it!</CardSubtitle>
                            </CardBody>
                            <CardImg img-fluid width="100%" height="300px" src="https://i5.walmartimages.com/asr/cf3a2658-2f36-4d7d-887c-b57f7d5bdd03_1.2acac3766810ce6641b3aede6633b599.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF" alt="Card image cap" />
                            <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <CardLink target="_blank" href="https://www.walmart.com/ip/Mac-N-Cheetos-Mac-Cheese-Snacks-Creamy-Cheddar-Flavored-14-4-oz/695622000">Buy</CardLink>
                            </CardBody>
                        </Card>
                    </div>
                {/* ))} */}
            </div>
        )
    }
}

export default Food;
