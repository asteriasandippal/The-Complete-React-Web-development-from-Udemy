import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePage from '../../components/HomePage';

test('should render HomePage correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});
