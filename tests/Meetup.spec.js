import { shallowMount } from '@vue/test-utils'
import Meetup from "@/components/Meetup";

describe('Meetup.vue', () => {
  it('Should display the upcomming meetups names when you enter the site', () => {
    const wrapper = shallowMount(Meetup, {
      propsData: {
        meetup: fakeData()
      }
    });
   
    const expected = "Workout";
    const actual = wrapper.find(".hej").text();

    console.log(expected)
   
expect(actual).toMatch(expected);
  });
});

function fakeData() {
    let meetup = 
    {
      "id": 1,
      "name": "Workout",
      "place": "Hammarby",
    };
    return meetup
  }