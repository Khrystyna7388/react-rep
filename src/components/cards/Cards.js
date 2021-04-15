import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import './Cards.css';
import {fetchProducts} from "../../redux/action-creators"
import {Spinner} from "react-bootstrap";
import {LikeIcon} from "../header/icons/LikeIcon";
import {BasketIcon} from "../header/icons/BasketIcon";
import {ALT_BASKET, ALT_LIKE, URL_BASKET, URL_LIKE} from "../types";


export const Cards = () => {
    const {isLoading, products} = useSelector(({isLoading, products}) =>
        ({
            isLoading: isLoading,
            products: products
        }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    return (
        <div>
            {isLoading && (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )}

            {products && !isLoading &&
            products.map(el => <div className="cards" key={el.id}>
                <img src={el.image} alt={el.title}/>
                <h4>{el.title}</h4>
                <h3>{el.price}</h3>
                <p>{el.description}</p>
                <div className="icons">
                    <button style={{background: "white"}} onClick={console.log('hi')}><LikeIcon/></button>
                    <button style={{background: 'white'}} onClick={console.log('hi')}><BasketIcon/></button>

                    {/*<img onClick={console.log('hi')} src={URL_BASKET} alt={ALT_BASKET} />*/}
                </div>
            </div>)
            }


            {/*{products &&*/}
            {/*products.map(el =>*/}
            {/*    <Card className="bg-dark text-white mt-3 bg-primary d-inline-block">*/}
            {/*        <Card.Img src={el.image} alt={el.title} />*/}
            {/*        <Card.ImgOverlay>*/}
            {/*            <Card.Title>{el.title}</Card.Title>*/}
            {/*            <Card.Title>{el.price}</Card.Title>*/}
            {/*            <Card.Text>*/}
            {/*                {el.description}*/}
            {/*            </Card.Text>*/}
            {/*            <Card.Text>Last updated 3 mins ago</Card.Text>*/}
            {/*        </Card.ImgOverlay>*/}
            {/*    </Card>)}*/}


            {/*{products &&*/}
            {/*products.map(el =>*/}
            {/*    <Card style={{width: '18rem'}}>*/}
            {/*        <Card.Img variant="top" src={el.image} alt={el.title}/>*/}
            {/*        <Card.Body>*/}
            {/*            <Card.Title>{el.title}</Card.Title>*/}
            {/*            <Card.Title>{el.price}</Card.Title>*/}
            {/*            <Card.Text>*/}
            {/*                {el.description}*/}
            {/*            </Card.Text>*/}
            {/*            /!*<Button variant="primary">Go somewhere</Button>*!/*/}
            {/*        </Card.Body>*/}
            {/*    </Card>*/}
            {/*)}*/}
        </div>
    )
}