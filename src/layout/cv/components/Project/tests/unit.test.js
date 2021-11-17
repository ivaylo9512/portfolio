import { shallow } from 'enzyme';
import Project from '../Project';
import * as Redux from 'react-redux';

describe('Project unit tests', () => {
    let selectorSpy;
   
    beforeEach(() => {
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (state) => {
        selectorSpy.mockReturnValue(state);
        
        return shallow(
            <Project />
        )
    }

    it('should set tab index prop on projects', () => {
        const wrapper = createWrapper(true);

        expect(wrapper.findByTestid('github-link').props().tabIndex).toEqual('-1');
    })

    it('should not set tab index on projects to false', () => {
        const wrapper = createWrapper(false);

        expect(wrapper.findByTestid('github-link').props().tabIndex).toBeUndefined();
    })
})