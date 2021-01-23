import { createLocalVue, mount } from "@vue/test-utils";
import StarsRating from "@/components/ui/StarsRating";

const factory = () => {
  return mount(StarsRating, {
    propsData: {
      stars: 4
    }
  })
}

describe('StarsRating', () => {
    const wrapper = factory()
    test("renders properly", () => {
      expect(wrapper.html()).toMatchSnapshot();
    });
})
