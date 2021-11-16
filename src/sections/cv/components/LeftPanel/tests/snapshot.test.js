import LeftPanel from '../LeftPanel';
import { shallow } from 'enzyme';

describe('LeftPanel snapshot tests', () => {
    const createWrapper = () => shallow(
        <LeftPanel />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});