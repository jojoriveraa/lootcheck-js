import * as constants from './constants';

export const setBalance = balance => {
  return {
    type: constants.SET_BALANCE,
    balance
  };
};

export const withdraw = amount => {
  return {
    type: constants.WITHDRAW,
    withdraw: amount
  };
};

export const deposit = amount => {
  return {
    type: constants.DEPOSIT,
    deposit: amount
  };
};
