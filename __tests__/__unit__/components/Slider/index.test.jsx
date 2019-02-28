import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import wait from 'waait';
import Slider from '../../../../components/Slider';

const mockStore = configureStore();

const initialState = {
  testimonialData: {
    slider: {
      title: 'Our customers love us',
      reviews: [
        {
          name: 'Pete Zahut',
          position: 'Chief @ Maniak',
          comment:
            "It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail"
        },
        {
          name: 'Bernabe',
          position: 'Tech Lead @ Maniak',
          comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus quam. Curabitur ultricies pretium orci nec finibus. Nullam congue quis tortor a tempus. Morbi rutrum, nunc at hendrerit gravida, tortor turpis molestie nibh, vel varius augue ante eu velit.'
        }
      ]
    }
  }
};

describe('Slider', () => {
  it('renders slider', () => {
    const component = shallow(<Slider />);
    expect(component).toMatchSnapshot();
  });

  it('renders title correctly', async () => {
    const store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <Slider />
      </Provider>
    );

    await wait(0);
    component.update();

    const title = component.find('h1#title').text();
    expect(title).toBe(initialState.testimonialData.slider.title);

    component.unmount();
  });

  it('renders first info correctly', async () => {
    const store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <Slider />
      </Provider>
    );

    await wait(0);
    component.update();

    const authorName = component.find('h2#author-name').text();
    const authorPosition = component.find('h3#author-position').text();
    const authorComment = component.find('p#author-comment').text();
    expect(authorName).toBe(initialState.testimonialData.slider.reviews[0].name);
    expect(authorPosition).toBe(initialState.testimonialData.slider.reviews[0].position);
    expect(authorComment).toBe(initialState.testimonialData.slider.reviews[0].comment);

    component.unmount();
  });

  it('renders first info correctly, then when clicking renders next info', async () => {
    const store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <Slider />
      </Provider>
    );

    await wait(0);
    component.update();

    let authorName;
    let authorPosition;
    let authorComment;

    authorName = component.find('h2#author-name').text();
    authorPosition = component.find('h3#author-position').text();
    authorComment = component.find('p#author-comment').text();
    const nextButton = component.find('div#next-button');

    expect(authorName).toBe(initialState.testimonialData.slider.reviews[0].name);
    expect(authorPosition).toBe(initialState.testimonialData.slider.reviews[0].position);
    expect(authorComment).toBe(initialState.testimonialData.slider.reviews[0].comment);

    nextButton.simulate('click');

    await wait(0);
    component.update();

    authorName = component.find('h2#author-name').text();
    authorPosition = component.find('h3#author-position').text();
    authorComment = component.find('p#author-comment').text();

    expect(authorName).toBe(initialState.testimonialData.slider.reviews[1].name);
    expect(authorPosition).toBe(initialState.testimonialData.slider.reviews[1].position);
    expect(authorComment).toBe(initialState.testimonialData.slider.reviews[1].comment);

    component.unmount();
  });

  it('renders first info correctly, then when clicking renders next info, then goes back', async () => {
    const store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <Slider />
      </Provider>
    );

    await wait(0);
    component.update();

    let authorName;
    let authorPosition;
    let authorComment;

    authorName = component.find('h2#author-name').text();
    authorPosition = component.find('h3#author-position').text();
    authorComment = component.find('p#author-comment').text();
    const nextButton = component.find('div#next-button');
    const prevButton = component.find('div#prev-button');

    expect(authorName).toBe(initialState.testimonialData.slider.reviews[0].name);
    expect(authorPosition).toBe(initialState.testimonialData.slider.reviews[0].position);
    expect(authorComment).toBe(initialState.testimonialData.slider.reviews[0].comment);

    nextButton.simulate('click');

    await wait(0);
    component.update();

    authorName = component.find('h2#author-name').text();
    authorPosition = component.find('h3#author-position').text();
    authorComment = component.find('p#author-comment').text();

    expect(authorName).toBe(initialState.testimonialData.slider.reviews[1].name);
    expect(authorPosition).toBe(initialState.testimonialData.slider.reviews[1].position);
    expect(authorComment).toBe(initialState.testimonialData.slider.reviews[1].comment);

    prevButton.simulate('click');

    await wait(0);
    component.update();

    authorName = component.find('h2#author-name').text();
    authorPosition = component.find('h3#author-position').text();
    authorComment = component.find('p#author-comment').text();

    expect(authorName).toBe(initialState.testimonialData.slider.reviews[0].name);
    expect(authorPosition).toBe(initialState.testimonialData.slider.reviews[0].position);
    expect(authorComment).toBe(initialState.testimonialData.slider.reviews[0].comment);

    component.unmount();
  });

  it('renders first info correctly, then when clicking renders next info, then tries to click next and stays the same', async () => {
    const store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <Slider />
      </Provider>
    );

    await wait(0);
    component.update();

    let authorName;
    let authorPosition;
    let authorComment;

    authorName = component.find('h2#author-name').text();
    authorPosition = component.find('h3#author-position').text();
    authorComment = component.find('p#author-comment').text();
    const nextButton = component.find('div#next-button');

    expect(authorName).toBe(initialState.testimonialData.slider.reviews[0].name);
    expect(authorPosition).toBe(initialState.testimonialData.slider.reviews[0].position);
    expect(authorComment).toBe(initialState.testimonialData.slider.reviews[0].comment);

    nextButton.simulate('click');

    await wait(0);
    component.update();

    authorName = component.find('h2#author-name').text();
    authorPosition = component.find('h3#author-position').text();
    authorComment = component.find('p#author-comment').text();

    expect(authorName).toBe(initialState.testimonialData.slider.reviews[1].name);
    expect(authorPosition).toBe(initialState.testimonialData.slider.reviews[1].position);
    expect(authorComment).toBe(initialState.testimonialData.slider.reviews[1].comment);

    nextButton.simulate('click');

    await wait(0);
    component.update();

    authorName = component.find('h2#author-name').text();
    authorPosition = component.find('h3#author-position').text();
    authorComment = component.find('p#author-comment').text();

    expect(authorName).toBe(initialState.testimonialData.slider.reviews[1].name);
    expect(authorPosition).toBe(initialState.testimonialData.slider.reviews[1].position);
    expect(authorComment).toBe(initialState.testimonialData.slider.reviews[1].comment);

    component.unmount();
  });

  it('renders first info correctly, then when clicking previous it stays the same', async () => {
    const store = mockStore(initialState);

    const component = mount(
      <Provider store={store}>
        <Slider />
      </Provider>
    );

    await wait(0);
    component.update();

    let authorName;
    let authorPosition;
    let authorComment;

    authorName = component.find('h2#author-name').text();
    authorPosition = component.find('h3#author-position').text();
    authorComment = component.find('p#author-comment').text();
    const prevButton = component.find('div#prev-button');

    expect(authorName).toBe(initialState.testimonialData.slider.reviews[0].name);
    expect(authorPosition).toBe(initialState.testimonialData.slider.reviews[0].position);
    expect(authorComment).toBe(initialState.testimonialData.slider.reviews[0].comment);

    prevButton.simulate('click');

    await wait(0);
    component.update();

    authorName = component.find('h2#author-name').text();
    authorPosition = component.find('h3#author-position').text();
    authorComment = component.find('p#author-comment').text();

    expect(authorName).toBe(initialState.testimonialData.slider.reviews[0].name);
    expect(authorPosition).toBe(initialState.testimonialData.slider.reviews[0].position);
    expect(authorComment).toBe(initialState.testimonialData.slider.reviews[0].comment);

    component.unmount();
  });
});
