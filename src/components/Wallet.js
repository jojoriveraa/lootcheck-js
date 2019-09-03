import React, { Component } from 'react';
import { connect } from 'react-redux';
import balance from '../reducers/balance';

export class Wallet extends Component {
  render() {
    return (
      <div>
        <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
      </div>
    );
  }
}

export default connect(
  state => {
    balance: state;
  },
  null
)(Wallet);
