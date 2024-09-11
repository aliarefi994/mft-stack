# Stack Data Structure Implementation

A simple stack data structure in Node.js, featuring basic stack operations with colorful console logging via the `chalk` library.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

This project provides a basic implementation of a stack, a Last-In-First-Out (LIFO) data structure. It supports push, pop, peek, clear, and length operations with a simple interface and logs each action to the console with colors using `chalk`.

## Features

- **Push** and **pop** elements to and from the stack.
- View the **current length** of the stack.
- **Peek** at specific elements without removing them.
- **Clear** the entire stack.
- **Print** the current state of the stack.
- Color-coded console output for better readability using `chalk`.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher).

## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/stack-implementation.git
    ```

2. Navigate to the project directory:
    ```bash
    cd stack-implementation
    ```

3. Install the required dependencies:
    ```bash
    npm install chalk
    ```

## Usage

You can interact with the stack implementation through the provided `test.js` file, or you can import it into your own project.

To run the example provided in `test.js`, execute:

```bash
node test.js
