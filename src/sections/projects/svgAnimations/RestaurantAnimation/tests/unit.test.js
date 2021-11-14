const { shallow } = require("enzyme");
const { default: RestaurantAnimation } = require("../RestaurantAnimation");

describe('RestaurantAnimation unit tests', () => {
    const setTransform = jest.fn();

    const createWrapper = () => shallow(
        <RestaurantAnimation setTransform={setTransform}/>
    )

    it('should set transform on touch start', () => {
        const wrapper = createWrapper();
        
        wrapper.find('svg').props().onTouchStart();

        expect(setTransform).toHaveBeenCalledWith("translate(-10%, -12%)");
    })

    it('should set transform on mouse enter', () => {
        const wrapper = createWrapper();
        
        wrapper.find('svg').props().onMouseEnter();

        expect(setTransform).toHaveBeenCalledWith("translate(-10%, -12%)");
    })

    it('should reset transform on mouse leave', () => {
        const wrapper = createWrapper();
        
        wrapper.find('svg').props().onMouseLeave();

        expect(setTransform).toHaveBeenCalledWith("translate(0, 0)");
    })

    it('should reset transform on touch end', () => {
        const wrapper = createWrapper();
        
        wrapper.find('svg').props().onMouseLeave();

        expect(setTransform).toHaveBeenCalledWith("translate(0, 0)");
    })

    it('should reset transform on mouse leave', () => {
        const wrapper = createWrapper();
        
        wrapper.find('svg').props().onMouseLeave();

        expect(setTransform).toHaveBeenCalledWith("translate(0, 0)");
    })
})