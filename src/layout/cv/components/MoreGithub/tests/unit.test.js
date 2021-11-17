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

    it('should set tab index prop on matching section', () => {
        const wrapper = createWrapper(true, true);

        expect(wrapper.findByTestid('github-link').props().tabIndex).toEqual('-1');
    })

    it('should not set tab index on not matching section', () => {
        const wrapper = createWrapper(true, false);

        expect(wrapper.findByTestid('github-link').props().tabIndex).toBeUndefined();
    })
})