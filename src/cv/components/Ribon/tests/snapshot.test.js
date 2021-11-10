import Ribon from "../Ribon";
import { shallow } from 'enzyme';

describe('Ribon snapshot tests', () => {
    const createWrapper = () => shallow(
        <Ribon />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});