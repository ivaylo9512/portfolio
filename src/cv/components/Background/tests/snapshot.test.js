import Background from "../Background";
import { shallow } from 'enzyme';

describe('Background snapshot tests', () => {
    const createWrapper = () => shallow(
        <Background />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});