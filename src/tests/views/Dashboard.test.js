import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../../views/Dashboard';

describe('should render Dashboard view', () => {
  it('correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
