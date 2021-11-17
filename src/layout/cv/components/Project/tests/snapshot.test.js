import Project from '../Project';
import { shallow } from 'enzyme';

describe('Project snapshot tests', () => {
    const createWrapper = () => shallow(
        <Project />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});