import { shallowMount } from '@vue/test-utils'
import Meetup from '@/components/Meetup.vue';

describe('Meetup.vue', () => {
  it('Should display the upcomming meetups names when you enter the site', () => {
    const wrapper = shallowMount(Meetup, {
      propsData: {
        meetup: fakeData()
      }
    });
   
    const expected = "Workout";
    const actual = wrapper.find(".name").text();
   
expect(actual).toMatch(expected);
  });

it('Should display the upcomming meetups places when you enter the site', () => {
  const wrapper = shallowMount(Meetup, {
    propsData: {
      meetup: fakeData()
    }
  });
 
  const expected = "Hammarby";
  const actual = wrapper.find(".place").text();
 
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