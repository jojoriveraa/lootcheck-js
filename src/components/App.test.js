import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App', () => {
  const app = shallow(<App></App>);
  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });
});
