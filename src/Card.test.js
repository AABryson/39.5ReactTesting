import React from 'react'
import Card from ('./Card')
import { render, fireEvent } from "@testing-library/react";

test('the component renders without breaking', function(){
    render(<Card />)
})

test('the component matches the snapshot', function(){
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
})