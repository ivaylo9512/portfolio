import Cources from "../Cources";
import { shallow } from 'enzyme';

describe('Cources snapshot tests', () => {
    const createWrapper = () => shallow(
        <Cources />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});