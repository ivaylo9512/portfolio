import { shallow } from 'enzyme';
import ProjectsRoot from '../ProjectsRoot'
import * as Redux from 'react-redux';

describe('ProjectsRoot unit tests', () => {
    let selectorSpy;

    beforeEach(() => {
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (curretnSlide) => {
        selectorSpy.mockReturnValue(curretnSlide); 
     
        return shallow(
            <ProjectsRoot />
        )
    }

    it('should match class first', () => {
        const wrapper = createWrapper('first');

        expect(wrapper.findByTestid('projects-root').props().className).toContain('first');
    })

    it('should match class second', () => {
        const wrapper = createWrapper('second');

        expect(wrapper.findByTestid('projects-root').props().className).toContain('second');
    })
})