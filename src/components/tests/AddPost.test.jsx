import React from 'react';
import { shallow } from 'enzyme';
import AddPost from '../AddPost.jsx';

describe('AddPost component:', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddPost />);
  });

  test('renders the title', () => {
    expect(wrapper.find('#title').text()).toEqual('Add Post');
  });
});
