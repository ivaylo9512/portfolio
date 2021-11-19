import { shallow } from 'enzyme';
import MoreGithub from '../MoreGithub';

describe('MoreGithub snapshot tests', () => {
    const createWrapper = () => shallow(
        <MoreGithub />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})