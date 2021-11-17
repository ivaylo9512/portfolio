import { shallow } from 'enzyme';
import AnimationWrapper from '../AnimationWrapper'
import * as Redux from 'react-redux';
import { setVisited, resetVisited } from 'app/slices/animationsSlice';
import ChatAnimation from '@projects/svgAnimations/ChatAnimation/ChatAnimation';

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
        
        wrapper.findByTestid('animation-wrapper').props().onTouchStart();

        expect(dispatchMock).toHaveBeenCalledWith(setVisited('chat-visited'));
    })

    it('should dispatch on mouse enter', () => {
        const wrapper = createWrapper();
        
        wrapper.findByTestid('animation-wrapper').props().onMouseEnter();

        expect(dispatchMock).toHaveBeenCalledWith(setVisited('chat-visited'));
    })

    it('should dispatch on mouse leave', () => {
        const wrapper = createWrapper();
        
        wrapper.findByTestid('animation-wrapper').props().onMouseLeave();

        expect(dispatchMock).toHaveBeenCalledWith(resetVisited());
    })

    it('should dispatch on touch end', () => {
        const wrapper = createWrapper();
        
        wrapper.findByTestid('animation-wrapper').props().onMouseLeave();

        expect(dispatchMock).toHaveBeenCalledWith(resetVisited());
    })
})