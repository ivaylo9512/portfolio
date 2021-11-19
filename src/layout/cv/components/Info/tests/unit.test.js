import { shallow } from 'enzyme';
import Info from '../Info';
import * as Redux from 'react-redux';

describe('Info unit tests', () => {
    let selectorSpy;
   
    beforeEach(() => {
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (state) => {
        selectorSpy.mockReturnValue(state);
        
        return shallow(
            <Info />
        )
    }

    it('should set tab index prop on isProjects to true', () => {
        const wrapper = createWrapper(true);

        expect(wrapper.findByTestid('github-link').props().tabIndex).toEqual('-1');
    })

    it('should not set tab index on isProjects to false', () => {
        const wrapper = createWrapper(false);

        expect(wrapper.findByTestid('github-link').props().tabIndex).toBeUndefined();
    })
})