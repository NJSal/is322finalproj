import React from 'react';
import { connect } from 'react-redux';
import { depositCash, withdrawCash } from "../actions";



class factionCard extends React.Component {

    state = { moneyAmount: ''}

    onFormSubmit = (event) => {
        event.preventDefault();

        if(event === depositCash){ this.props.depositCash(this.state.moneyAmount); }
        //min 38 in lecture video change
        if(event === withdrawCash){ this.props.withdrawCash(this.state.moneyAmount); }

        this.setState({ moneyAmount: '' });    //clear out of
    }



    render(){
        return (
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"> {this.props.account.name} </h5> {/***kingdom name****/}
                    <p class="card-text"> {this.props.account.balance} </p> {/****kingdom balance*****/}
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <label> Amount </label>
                            <input type="text" className="form-control"
                                   value={this.state.moneyAmount}
                                   onChange={(e) => this.setState({moneyAmount: e.target.value})}/>

                        </div>



                        <button type = "button"
                                onClick = {() => this.props.depositCash(this.props.account.id, this.props.account.amount, this.props.account.balance)} //parentheses changed from this.amount
                                className = "btn btn-success">
                            Deposit
                        </button>

                        <button type = "button"
                                onClick = {() => this.props.withdrawCash(this.props.account.id, this.props.account.amount, this.props.account.balance)}
                                className = "btn btn-danger">
                            Withdraw
                        </button>
                        {/****
                         <button type = "button"
                         onClick = {() => props.depositCash(props.amount)}
                         className = "btn btn-success">
                         Deposit
                         </button>

                         <button type = "button"
                         onClick = {() => props.withdrawCash(props.amount)}
                         className = "btn btn-danger">
                         Withdraw
                         </button>
                         *****/}

                        {/***<input type="submit" className="btn btn-success"/>***/}
                    </form>
                </div>
            </div>
        );
    }
}
/*****
 const mapStateToProps = state => {
    return {
        name : state.characters.players,          //b/c do not know which one we want, but can decide to render out according to user input
        enemies: state.characters.enemies
    };
};
 *********/

export default connect(null, {depositCash, withdrawCash})(factionCard);