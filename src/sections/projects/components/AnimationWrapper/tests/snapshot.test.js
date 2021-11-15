import { shallow } from 'enzyme';
import ChatAnimation from 'sections/projects/svgAnimations/ChatAnimation/ChatAnimation';
import AnimationWrapper from '../AnimationWrapper'
import * as Redux from 'react-redux';

describe('AnimationWrapper snapshot tests', () => {
    beforeEach(() => {
        jest.spyOn(Redux, 'useDispatch').mockReturnValue(jest.fn());
    }) 

    const createWrapper = () => shallow(
        <AnimationWrapper SvgAnimation={ChatAnimation} className='chat'/>
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})