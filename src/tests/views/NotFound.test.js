import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from '../../views/NotFound';

describe('should render NotFound view', () => {
  it('correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
