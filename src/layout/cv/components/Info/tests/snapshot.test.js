import Info from '../Info';
import { shallow } from 'enzyme';
import * as Redux from 'react-redux';

describe('Info snapshot tests', () => {
    let selectorSpy = jest.fn();

    beforeEach(() => {
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (state) => {
        selectorSpy.mockReturnValue(state);
        
        return shallow(
            <Info />
        )
    }

    it('should match snapshot', () => {
        const wrapper = createWrapper();
     
        expect(wrapper).toMatchSnapshot();
    })
});