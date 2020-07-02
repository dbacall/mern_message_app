import React from 'react';
import { shallow, mount } from 'enzyme';
import AddPost from '../AddPost.jsx';

describe('AddPost component:', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddPost />);
  });

  test('renders the title', () => {
    expect(wrapper.find('#title').text()).toBe('Add Post');
  });

  test('renders input with placeholder text', () => {
    expect(wrapper.find('.input').prop('placeholder')).toBe('Your message...');
    expect(wrapper.find('.input').prop('value')).toBe('');
  });

  test('user can add text to the message input', () => {
    wrapper.find('.input').simulate('change', {
      target: { value: 'New message' },
    });
    expect(wrapper.find('.input').prop('value')).toBe('New message');
  });

  // test('user can submit a message', () => {
  //   wrapper = mount(<AddPost />);
  //   wrapper.find('.input').simulate('change', {
  //     target: { value: 'New message' },
  //   });
  //   wrapper.find('.form').simulate('submit', {
  //     preventDefault: () => {},
  //   });
  //   expect(wrapper.find('.input').prop('value')).toBe('');
  // });
});
