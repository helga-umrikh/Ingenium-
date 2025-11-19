# Ingenium Movie observer APP

REACT | TYPESCRIPT

This document will provide you with an overview of the app and guide you through the process of setting it up and starting it.

![Ingenium Demo](Ingenium Cinema _app.gif)

# Getting Started

To start using the app, follow the steps below:

## Installation

To install the app and its dependencies, follow the steps below:

1.  **Navigate to the project directory:**
    Once the repository is cloned, navigate to the project directory using the following command:
    ```cpp
    cd frontend-advanced
    ```
2.  **Install dependencies:**
    Before running the app install the package manager npm to install all the dependencies.
    ```cpp
    npm install
    ```

## Starting the App

To start the app, run the following command:

```cpp
//development mode
npm run dev
```

To build the project in production mode use:

```cpp
//production mode
npm run build
```

## Setting env

To use Kinopoisk API you need to get the key from the Telegram bot @poiskkinodev_bot.
Also you read the documentation:
```
https://api.poiskkino.dev/documentation

```

After you successfully get the token, create a .env from the .env.exmaple.

```
REACT_APP_ACCESS_KEY=''
PORT = 8080 // you can set your preferable port

```

This will start the development server and open the app in your default web browser.
