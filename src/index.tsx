import * as React from 'react';
import * as ReactDOM  from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import { main } from '../dist/bisemutum';
import { App } from './app';

main()
console.log("Hello webpack!")

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById("root"));