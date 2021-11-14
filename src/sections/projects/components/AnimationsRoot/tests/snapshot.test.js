import { shallow } from "enzyme";
import AnimationsRoot from "../AnimationsRoot"

describe('AnimationsRoot snapshot tests', () => {
    const createWrapper = () => shallow(
        <AnimationsRoot />
    )

    it('should match snapshot', () => {
        const wrapper = createWrapper();

        expect(wrapper).toMatchSnapshot();
    })
})