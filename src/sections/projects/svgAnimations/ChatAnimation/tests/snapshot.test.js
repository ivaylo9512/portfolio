import { shallow } from "enzyme";
import ChatAnimation from "../ChatAnimation"

describe('ChatAnimation snapshot tests', () => {
    const createWrapper = () => shallow(
        <ChatAnimation />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})