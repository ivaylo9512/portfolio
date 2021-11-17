import Project from '../Project';
import { shallow } from 'enzyme';
import * as Redux from 'react-redux';

describe('Project snapshot tests', () => {
    let selectorSpy = jest.fn();

    beforeEach(() => {
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (state) => {
        selectorSpy.mockReturnValue(state);
        
        return shallow(
            <Project />
        )
    }

    it('should match snapshot with projects', () => {
        const wrapper = createWrapper(true);
     
        expect(wrapper).toMatchSnapshot();
    })

    it('should match snapshot with projects to false', () => {
        const wrapper = createWrapper(false);
     
        expect(wrapper).toMatchSnapshot();
    })
});