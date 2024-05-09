import React from 'react'
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

test('check if componenet renders', function(){
  render(<Carousel />)
})

test('if component matches snapshot', function(){
  const {asFragment} = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot()
})

test('show that the left arrow does not move user back to prior/first image', function(){
  const {getByClass} = render(<Carousel />);
  let i_name = getByClass('bi bi-arrow-left-circle')
  let currCardIdx = 2;
  fireEvent.click(i_name);
  expect(currCardIdx).toBe(--currCardIdx)
  })


  test('show that left arrow is missing when on first photo and right arrow is missing for last photo', function(){
    let firstCard = photos[0];
    let lastIndex = photos.length - 1;
    let lastCard = photos[lastIndex] 
    expect(<i />).not.toBeInTheDocument()
  })
