import CvRoot from '../CvRoot';
import { shallow } from 'enzyme';

describe('CvRoot snapshot tests', () => {
    const createWrapper = () => shallow(
        <CvRoot />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});