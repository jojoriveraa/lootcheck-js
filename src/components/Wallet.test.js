import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const balance = 20;
  const props = { balance, deposit: mockDeposit, withdraw: mockWithdraw };
  const wallet = shallow(<Wallet {...props} />);
  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual(
      `Wallet Balance: ${balance}`
    );
  });

  it('creates an input to deposit or withdraw from the balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  describe('when the user types into the wallet input', () => {
    const userBalance = '25';

    beforeEach(() => {
      wallet
        .find('.input-wallet')
        .simulate('change', { target: { value: userBalance } });
    });

    it('updates the local wallet balance in `state` and converts that into a number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance));
    });

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click');
      });

      it('it dispatches the `deposit()` it recieves with the local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance));
      });
    });

    describe('and the user wants to make a withdrawal', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click');
      });

      it('it dispatches the `withdraw()` it recieves with the local balance', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance));
      });
    });
  });
});
