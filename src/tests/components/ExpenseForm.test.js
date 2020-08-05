import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseForm } from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

describe('ExpenseForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExpenseForm />);
  });

  describe('should render', () => {
    it('correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('with expense data', () => {
      wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('with error for invalid form submission', () => {
      wrapper.find('form').simulate('submit', {
        preventDefault: () => {},
      });
      expect(wrapper.find('p').length).toBeGreaterThan(0);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('should on input change', () => {
    it('show description', () => {
      const name = 'description';
      const value = 'New description';
      wrapper
        .find('input')
        .at(0)
        .simulate('change', {
          target: {
            name,
            value,
          },
        });
      expect(
        wrapper
          .find('input')
          .at(0)
          .props().value,
      ).toBe(value);
    });

    it('show note', () => {
      const name = 'note';
      const value = 'New note';
      wrapper.find('textarea').simulate('change', {
        target: {
          name,
          value,
        },
      });
      expect(wrapper.find('textarea').props().value).toBe(value);
    });

    it('show amount', () => {
      const name = 'amount';
      const value = '99.99';
      wrapper
        .find('input')
        .at(1)
        .simulate('change', {
          target: {
            name,
            value,
          },
        });
      expect(
        wrapper
          .find('input')
          .at(1)
          .props().value,
      ).toBe(value);
    });

    it('not show amount', () => {
      const name = 'amount';
      const value = '99.999';
      wrapper
        .find('input')
        .at(1)
        .simulate('change', {
          target: {
            name,
            value,
          },
        });
      expect(
        wrapper
          .find('input')
          .at(1)
          .props().value,
      ).toBe(0);
    });
  });
});
