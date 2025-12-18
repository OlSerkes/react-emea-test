## Table of contents

- [Overview](#overview)
  - [The task](#the-task)
  - [Links](#links)
- [Built with](#built-with)
  - [Project structure](#Project-structure)
  - [Installation and run](#Installation-and-run)
- [Author](#author)

## Overview

The task is to build a product slider component based on the following Figma reference:

Figma: https://www.figma.com/design/gC5kMZTTEKykbZnHrrc8KV

The goal of this task is to demonstrate:

- Component-based architecture
- Working with external APIs
- Basic loading and error handling
- Display products inside a carousel
- Support basic responsiveness

### The task

- Product slider with pagination and navigation
- Responsive layout (desktop / tablet / mobile)
- Category filtering via menu
- Loading state while fetching data
- Error handling for API requests

### Links

- Solution URL: [GitHub Pages](https://github.com/OlSerkes/phps-sncare-hx368942)
- Live Site URL: [Live site URL](https://olserkes.github.io/phps-sncare-hx368942/)

### Built with

- React (Vite)
- react-slick (slider)
- SASS (CSS preprocessor)
- Fake Store API (https://fakestoreapi.com/)

### Project structure

src/
├── api/
│ └── fetchProduct.js
├── components/
│ ├── CategoryMenu/
| ├── Header/
│ ├── Loader/
│ ├── ProductCard/
│ └── ProductSlider/
├── pages/
│ └── Home.jsx
├── styles/
| ├── \_buttons.sass
│ ├── \_variables.sass
│ ├── \_mixins.sass
│ └── global.sass
├── App
└── main.jsx

### Installation and run

1. Clone the repository
2. Install dependencies
3. Run the project

## Author

- Website - [Oleksandra Serkes](https://github.com/OlSerkes)
- Linkedin - [Oleksandra Serkes](https://www.linkedin.com/in/oleksandra-serkes-65580620a/)
