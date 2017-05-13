import React, { PropTypes } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

const App = ({ children }) =>
    <div className="container">
        <Header />
        { children }
        <Footer />
    </div>;

// App.PropTypes = {
//     children: PropTypes.object
// }

export default App;