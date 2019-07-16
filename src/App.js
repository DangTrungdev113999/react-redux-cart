import React, { Component } from 'react';
import Header from './components/Header';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/cartContainer';
import Message from './components/Message';
import Footer from './components/Footer';

class App extends Component {
    
    render() {
        return (
            <div className="hidden-sn animated deep-purple-skin">
            <Header/>
            <main id="mainContainer">
                <div className="container">
                    <ProductContainer/>
                    <Message/>
                    <CartContainer/>
                </div>
            </main>
            <Footer/>
        </div>
        )
    }
}

export default App;
