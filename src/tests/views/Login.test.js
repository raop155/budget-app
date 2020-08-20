import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../views/Login';

describe('<Login> view should', () => {
  it('render correctly', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it('call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<Login startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
  });
});
