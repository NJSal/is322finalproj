//App.js will have react-router

import React from 'react';
import axios from 'axios';
//import { BrowserRouter, Route } from 'react-router-dom';

//import PageTabs from './PageTabs';
import VariablePage from "./VariablePage";
import { setAccounts } from "../actions";

class App extends React.Component {
    componentDidMount() {
        this.getData();
    }
    getData(){
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/accounts')
            .then(response => {
                this.props.setAccounts(response.data);
            }).catch(error => {
                this.props.tasksError();
        });

        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/transactions')
            .then(response => {
                this.props.setAccounts(response.data);
            }).catch(error => {
            this.props.tasksError();
        });
    }

    onViewChange(view){
        this.setState({ view });
    }

    wrapPage(jsx) {
        const { view } = this.state;
        return (
            <div className = "container">
                <PageTabs currentview = {view}
                          onviewChange = {this.onViewChange.bind(this)}/>
            </div>

        );
    }
    render(){
        const { view } = this.state;
        switch (view) {
            case 'accounts':
                return (this.wrapPage(<Page1 />));
            case 'transactions':
                return (this.wrapPage(<Page2 />));
            case 'newaccount':
                return (this.wrapPage(<Page3/>));
            default:
                return (this.wrapPage(<h2>Please make a valid selection</h2>));
        }
    }
}

export default App;