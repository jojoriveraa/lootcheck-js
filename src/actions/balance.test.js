import * as actions from './balance';
import * as constants from './constants';

it('creates an action to set the balance', () => {
  const balance = 0;
  const expectedAction = { type: constants.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', () => {
  const deposit = 10;
  const expectedAction = { type: constants.DEPOSIT, deposit };
  expect(actions.deposit(deposit)).toEqual(expectedAction);
});
