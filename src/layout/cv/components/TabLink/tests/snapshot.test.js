import { shallow } from 'enzyme';
import TabLink from '../TabLink';
import * as Redux from 'react-redux';

describe('TabLink snapshot tests', () => {
    let selectorSpy;
   
    beforeEach(() => {
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (state, shouldMatch) => {
        selectorSpy.mockReturnValue(state);
        
        return shallow(
            <TabLink shouldMatch={shouldMatch} href='https://link.com'>
                <span>text</span>
            </TabLink>
        )
    }

    it('should match snapshot on isProjects to true and shouldMatch to true', () => {
        const wrapper = createWrapper(true, true);

        expect(wrapper).toMatchSnapshot();
    })

    it('should match snapshot on isProjects to true and shouldMatch to false', () => {
        const wrapper = createWrapper(true, false);

        expect(wrapper).toMatchSnapshot();
    })

    it('should match snapshot on isProjects to false and shouldMatch to false', () => {
        const wrapper = createWrapper(false, false);

        expect(wrapper).toMatchSnapshot();
    })

    it('should match snapshot on isProjects to false and shouldMatch to true', () => {
        const wrapper = createWrapper(false, true);

        expect(wrapper).toMatchSnapshot();
    })
})