import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/layout'

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";


const SiteRoot = () => {
    return (
        <React.Fragment>
            <Layout>
                <App />
            </Layout>
        </React.Fragment>
    );
}

ReactDOM.render(<SiteRoot />, document.getElementById('root'));