import DotsLine from "../DotsLine";
import { shallow } from 'enzyme';

describe('DotsLine snapshot tests', () => {
    const createWrapper = () => shallow(
        <DotsLine />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});