import RightPanel from '../RightPanel';
import { shallow } from 'enzyme';

describe('RightPanel snapshot tests', () => {
    const createWrapper = () => shallow(
        <RightPanel />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});