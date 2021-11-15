import { shallow } from 'enzyme';
import AnimationWrapper from '../AnimationWrapper'
import * as Redux from 'react-redux';
import { setVisited, resetVisited } from 'app/slices/animationsSlice';

describe('AnimationWrapper unit tests', () => {
    const dispatchMock = jest.fn();

    beforeEach(() => {
        jest.spyOn(Redux, 'useDispatch').mockReturnValue(dispatchMock);
    }) 

    const createWrapper = () => shallow(
        <AnimationWrapper SvgAnimation={ChatAnimation} className='chat'/>
    )

    it('should dispatch on touch start', () => {
        const wrapper = createWrapper();
        
        wrapper.find('svg').props().onTouchStart();

        expect(dispatchMock).toHaveBeenCalledWith('translate(-10%, -12%)');
    })

    it('should dispatch on mouse enter', () => {
        const wrapper = createWrapper();
        
        wrapper.find('svg').props().onMouseEnter();

        expect(dispatchMock).toHaveBeenCalledWith('translate(-10%, -12%)');
    })

    it('should dispatch on mouse leave', () => {
        const wrapper = createWrapper();
        
        wrapper.find('svg').props().onMouseLeave();

        expect(dispatchMock).toHaveBeenCalledWith(resetVisited());
    })

    it('should dispatch on touch end', () => {
        const wrapper = createWrapper();
        
        wrapper.find('svg').props().onMouseLeave();

        expect(dispatchMock).toHaveBeenCalledWith(resetVisited());
    })

    it('should dispatch on mouse leave', () => {
        const wrapper = createWrapper();
        
        wrapper.find('svg').props().onMouseLeave();

        expect(dispatchMock).toHaveBeenCalledWith(resetVisited());
    })
})