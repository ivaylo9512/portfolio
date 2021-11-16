import { shallow } from 'enzyme';
import MoreGithub from '../MoreGithub';
import * as Redux from 'react-redux';

describe('MoreGithub snapshot tests', () => {
    let selectorSpy;
   
    beforeEach(() => {
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (state, shouldEqual) => {
        selectorSpy.mockReturnValue(state);
        
        return shallow(
            <MoreGithub shouldEqual={shouldEqual}/>
        )
    }

    it('should match snapshot with matching section', () => {
        const wrapper = createWrapper(true, true);

        expect(wrapper).toMatchSnapshot();
    })

    it('should match snapshot without matching section', () => {
        const wrapper = createWrapper(true, false);

        expect(wrapper).toMatchSnapshot();
    })
})