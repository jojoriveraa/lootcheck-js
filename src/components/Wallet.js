import React, { Component } from 'react';
import { connect } from 'react-redux';

import balanceReducer from '../reducers/balance';
import * as constants from '../actions/constants';

export class Wallet extends Component {
  constructor() {
    super();
    this.state = { balance: undefined };
  }

  updateBalance = event =>
    this.setState({ balance: parseInt(event.target.value) });

  render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
        <br />
        <input className="input-wallet" onChange={this.updateBalance}></input>
      </div>
    );
  }
}

export default connect(
  state => {
    return { balance: state };
  },
  null
)(Wallet);
