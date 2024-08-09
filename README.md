# The-Fruit-Basket

# Fruit Organizer

## Description

The Fruit Organizer is a web application that categorizes fruits based on their color and citrus status. The fruits are pre-listed in a fruit bank, and the application allows users to sort these fruits into color-specific and citrus-specific categories using interactive buttons.

## Features

- Display a list of fruits categorized by color and citrus status.
- Sort fruits into categories by clicking buttons for each color.
- Sort fruits into citrus and non-citrus categories.
- Sort all fruits by color or citrus status at once.

## Project Structure

- `index.html`: The HTML file that defines the structure and layout of the web page.
- `styles.css`: The CSS file for styling the application.
- `script.js`: The JavaScript file that contains the logic for sorting and displaying fruits.

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>


1. Define fruitBaskets as an object with color categories (red, yellow, green, blue, orange, purple)
2. Create empty arrays for redFruits, yellowFruits, greenFruits, blueFruits, orangeFruits, purpleFruits, citrusFruits, nonCitrusFruits
3 For each color category in fruitBaskets
    Add each fruit to the fruitBank
4 Define function sortByColor(color)
    Clear the corresponding color category array
    For each fruit in fruitBank
        If fruit's color matches the specified color
            Add fruit to the corresponding color category array
    Render the sorted color category
5 Function to render each category (red, yellow, green, blue, orange, purple, citrus, nonCitrus) by updating the respective output elements
6 Define function sortByColor(color)
    Clear the corresponding color category array
    For each fruit in fruitBank
        If fruit's color matches the specified color
            Add fruit to the corresponding color category array
    Render the sorted color category
7 Define function sortAllColors()
    For each color in color categories
        Call sortByColor with the current color
8 Define function sortOneCitrus()
    If fruitBank is not empty
        Remove the first fruit from fruitBank
        If the fruit is citrus
            Add fruit to citrusFruits
        Else
            Add fruit to nonCitrusFruits
    Render citrus and non-citrus categories
9 Define function sortAllCitrus()
    Clear citrusFruits and nonCitrusFruits
    For each fruit in fruitBank
        If fruit is citrus
            Add fruit to citrusFruits
        Else
            Add fruit to nonCitrusFruits
    Render citrus and non-citrus categories
10 Add event listener to each color button
    Call sortByColor with the respective color when clicked

Add event listener to sortAllColors button
    Call sortAllColors when clicked

Add event listener to sortOneCitrus button
    Call sortOneCitrus when clicked

Add event listener to sortAllCitrus button
    Call sortAllCitrus when clicked


### Explanation:

- **Initialization**: Defines and initializes fruit data and sorting arrays.
- **Rendering**: Provides functions for rendering fruits and categories.
- **Sorting Functions**: Describes how to sort fruits by color and citrus status.
- **Event Listeners**: Outlines the event handling for user interactions.

This pseudo code helps guide the development process and ensures all necessary functionality is implemented. Adjust the pseudo code as needed based on the actual logic and requirements of your project.

