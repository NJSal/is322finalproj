//App.js will have react-router

import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import PageTabs from './PageTabs';
import VariablePage from "./VariablePage";
import { setAccounts, setTransactions, tasksError} from "../actions";
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

class App extends React.Component {             //if made into a class component, then able to  use getData & axios calls
                                                //but unable to use react router
    componentDidMount() {
        this.getData();                         //if made into a functional component, then able to use react router
    }


    getData() {
        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/accounts')
            .then(response => {
                this.props.setAccounts(response.data);
            }).catch(error => {
            this.props.tasksError();
        });

        axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/transactions')
            .then(response => {
                this.props.setTransactions(response.data);
            }).catch(error => {
            this.props.tasksError();
        });
    }

    /****
     sortAccounts(_id)       //sort by Account name
     {

    }

     sortTransactions(_id)   //sort by id & name
     {

    }
     ****/
    render() {
        return (
            <di>
                <BrowserRouter>
                    <PageTabs/>
                    <div>
                        <Route path="/" exact component={Page1}/>
                        <Route path="/page2" component={Page2}/>
                        <Route path="/page3" component={Page3}/>
                        <Route path="/page/:id" component={VariablePage}/>
                    </div>
                </BrowserRouter>
            </di>
        )
    }
}

    const mapStateToProps = (state) => {                    //what gets mapped here will be returned to the properties of the component
        return {
            errorMessage: state.errors.getTasks
        };
    }


export default connect(mapStateToProps, {setAccounts, setTransactions})(App);