import Projects from "../Projects";
import { shallow } from 'enzyme';

describe('Projects snapshot tests', () => {
    const createWrapper = () => shallow(
        <Projects />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});