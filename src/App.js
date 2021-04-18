import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {
    Products,
    Header,
    ProductDetails,
    CartDetails,
    WishlistDetails,
    MenClothingCategory,
    AscSort
} from "./components";

const App = () => {

    return (
        <Router>
            <div className="App">
                <Header/>

                <Switch>

                    <Route path="/" exact>
                        <Redirect to="/products"/>
                    </Route>

                    <Route path="/products" exact>
                        <Products/>
                    </Route>

                    <Route path="/products/:id">
                        <ProductDetails/>
                    </Route>

                    <Route path="/cart">
                        <CartDetails/>
                    </Route>

                    <Route path="/wishlist">
                        <WishlistDetails/>
                    </Route>

                    <Route path="/men-clothing">
                        <MenClothingCategory/>
                    </Route>

                    <Route path="/sort=asc">
                        <AscSort/>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
