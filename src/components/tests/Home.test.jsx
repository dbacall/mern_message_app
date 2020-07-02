import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home.jsx';

describe('Home component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  test('Renders the title', () => {
    expect(wrapper.find('#title').text()).toBe('Home Feed');
  });
});
