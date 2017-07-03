/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Header from '../components/Header';
/*
describe('Index.js page', () => {
    it('has a "<p>" tag', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('p').length).toBe(1)
    })
});
*/
describe('<Header />', () => {

    /**
     * TODO
     */
    it('has a "<title>" tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('title').text()).toBe('Estimeo Highlights')
    })
});