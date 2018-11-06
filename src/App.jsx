import React, { Component } from 'react';
import RouterView from './router/route'
import config from './router/route.config.js'
// import Test from './views/common/Test'

class App extends Component {
    render() {
        return (
            <div>
                <RouterView routes={config.routes}></RouterView>
            </div>
        );
    }
   
}

export default App;