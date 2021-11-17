import { shallow } from 'enzyme';
import Background from '../Background'

describe('Background snapshot tests', () => {
    const createWrapper = () => shallow(
        <Background />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})