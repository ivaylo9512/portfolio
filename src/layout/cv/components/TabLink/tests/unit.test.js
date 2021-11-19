import { shallow } from 'enzyme';
import TabLink from '../TabLink';
import * as Redux from 'react-redux';

describe('TabLink unit tests', () => {
    let selectorSpy;
   
    beforeEach(() => {
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (state, shouldMatch) => {
        selectorSpy.mockReturnValue(state);
        
        return shallow(
            <TabLink shouldMatch={shouldMatch} href='https://link.com' text='text' />
        )
    }

    it('should set tab index prop on isProjects to true and shouldMatch to true', () => {
        const wrapper = createWrapper(true, true);

        expect(wrapper.find('a').props().tabIndex).toEqual('-1');
    })

    it('should not set tab index on isProjects to true and shouldMatch to false', () => {
        const wrapper = createWrapper(true, false);

        expect(wrapper.find('a').props().tabIndex).toBeUndefined();
    })

    it('should set tab index prop on isProjects to false and shouldMatch to false', () => {
        const wrapper = createWrapper(false, false);

        expect(wrapper.find('a').props().tabIndex).toEqual('-1');
    })

    it('should not set tab index on isProjects to false and shouldMatch to true', () => {
        const wrapper = createWrapper(false, true);

        expect(wrapper.find('a').props().tabIndex).toBeUndefined();
    })
})