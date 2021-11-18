import { shallow } from 'enzyme';
import ProjectsRoot from '../ProjectsRoot'
import * as Redux from 'react-redux';

describe('ProjectsRoot snapshot tests', () => {
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

    it('should match snapshot', () => {
        const wrapper = createWrapper('first');

        expect(wrapper).toMatchSnapshot();
    })

    it('should match snapshot with second slide', () => {
        const wrapper = createWrapper('second');

        expect(wrapper).toMatchSnapshot();
    })
})