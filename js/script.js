// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the area and perimeter of rectangle.
 */
function calcAreaClicked () {
  // get user input
  let side_a = parseFloat(document.getElementById('side-a').value)
  let side_b = parseFloat(document.getElementById('side-b').value)
	let height = parseFloat(document.getElementById('height').value)


  // calculate the area
  let area = (side_a + side_b) / 2 * height 

  // display the results
  document.getElementById('area').innerHTML = "The area is " + area.toFixed(2) + "cm<sup>2</sup>"
}