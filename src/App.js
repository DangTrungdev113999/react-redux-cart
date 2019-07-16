import React, { Component } from 'react';
import Header from './components/Header';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/cartContainer';
import MessageContainer from './containers/MessageContainer';
import Footer from './components/Footer';

class App extends Component {

    render() {
        return (
            <div className="hidden-sn animated deep-purple-skin">
            <Header/>
            <main id="mainContainer">
                <div className="container">
                    <ProductContainer/>
                    <MessageContainer/>
                    <CartContainer/>
                </div>
            </main>
            <Footer/>
        </div>
        )
    }
}

export default App;
