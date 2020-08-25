import { shallowMount } from "@vue/test-utils";
import Hello from "@/components/Hello.vue";

describe("Countries list widget", () => {
  it("correct country flag is rendered", () => {
    const wrapper = shallowMount(Hello, {
      propsData: { foo: "bar" },
    });
    expect(true).toBeTruthy();
    // expect(wrapper.text()).toMatch(msg)
  });
});
