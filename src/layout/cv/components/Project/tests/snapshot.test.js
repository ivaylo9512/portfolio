import Project from '../Project';
import { shallow } from 'enzyme';

describe('Project snapshot tests', () => {
    const createWrapper = () => shallow(
        <Project height='34' width='24' name='test-name' repo='test-repo' info='test-info' />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});