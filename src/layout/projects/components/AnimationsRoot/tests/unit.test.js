import { shallow } from 'enzyme';
import AnimationsRoot from '../AnimationsRoot';
import * as Redux from 'react-redux';

describe('AnimationsRoot unit tests', () => {
    let selectorSpy;

    beforeEach(() => {
        selectorSpy = jest.spyOn(Redux, 'useSelector');
    })

    const createWrapper = (isVisited) => {
        selectorSpy.mockReturnValue(isVisited);

        return shallow(
            <AnimationsRoot />
        )
    }

    it('should match snapshot with visited', () => {
        const wrapper = createWrapper('tasks');

        expect(wrapper.findByTestid('animations').props().className).toEqual('animations tasks')
    })

    it('should match snapshot without visited', () => {
        const wrapper = createWrapper();

        expect(wrapper.findByTestid('animations').props().className).toEqual('animations ')
    })
})