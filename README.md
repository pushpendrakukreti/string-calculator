# String Calculator Project

This project is a simple **String Calculator** application built with **React** and follows **Test-Driven Development (TDD)** principles. It allows users to input comma-separated numbers, calculates the sum, and displays the result. Additionally, it supports custom delimiters and handles newline-separated numbers.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Features

- Input comma-separated numbers in a multi-line format.
- Support for newline characters as delimiters.
- Option for custom delimiters.
- Displays error message if input contains negative numbers.
- Follows Test-Driven Development (TDD) principles with frequent commits.

## Technologies

- **React**: Frontend framework used for building the UI.
- **CSS**: For styling the components in a separate CSS file.
- **Jest**: Testing framework for ensuring code quality and correctness.
- **Git**: Version control to track development progress.

## Project Structure

## Project Structure

```plaintext

.
├── public
│   └── index.html
├── src
│   ├── components
│   │   └── Calculator
│   │       ├── Calculator.jsx     # Main calculator component
│   │       └── Calculator.css     # CSS file for Calculator component styling
│   ├── utils
│   │   ├── StringCalculator.js    # Contains add function with TDD logic
│   │   └── StringCalculator.test.js # Test file for StringCalculator.js
│   ├── App.js                     # Root component
│   ├── App.css                    # CSS file for Root component
│   └── index.js                   # Entry point
├── package.json
└── README.md                      # Project documentation
```

## Installation

1. **Clone the Repository**

```bash
   git clone https://github.com/pushpendrakukreti/string-calculator.git
   cd string-calculator

```

2. **Install Dependencies**

```bash
   npm install
```

## Usage

1. **Run the application**

```bash
   npm start
```

2. **Open the App in Browser**

Go to http://localhost:3000 to view the app in the browser.

3. **Using the Calculator**

- Enter Numbers: Use the provided textarea to input numbers separated by commas or newlines.
- Calculate: Click on the Calculate button to see the sum.
- Result: The result will appear below the button.
- Error Handling: If negative numbers are entered, an error message will be displayed.

## Testing

```bash
   npm test
```
