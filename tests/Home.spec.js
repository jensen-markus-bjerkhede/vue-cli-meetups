import { shallowMount } from '@vue/test-utils'
import Home from "/src/views/Home.vue";

describe('Home.vue', () => {
  it('Should display the upcomming meetups names when you enter the site', () => {
    const wrapper = shallowMount(Home, {
      propsData: {
        meetup: FakeData()
      }
    });
   
    const expected = "Workout";
    const actual = wrapper.text(meetup.name);

    console.log(expected)
   
expect(actual).toMatch(expected);
  });
});

function FakeData() {
    return [{
      "id": 1,
      "name": "Workout",
      "place": "Hammarby",
    }];
  }