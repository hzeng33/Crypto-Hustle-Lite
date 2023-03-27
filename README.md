# Crypto Hustle Pro 

## Overview

This app displays information about cryptocurrencies and allows for clicking on each currency to get more detailed information, which was accessed using API calls. It also includes a search bar that allows users to search for a specific currency.

## Project Gif Walkthrough
<img src="https://github.com/hzeng33/Crypto_Hustle_Pro/blob/main/gifWalkthrough.gif"   height="400px" width="750px"/>


## Setup

### Dependencies

* [Vite](https://www.npmjs.com/package/vite)
* [Vite React Plugin](https://www.npmjs.com/package/@vitejs/plugin-react)
* [React](https://www.npmjs.com/package/react)
* [React-DOM](https://www.npmjs.com/package/react-dom)
* [React Router DOM](https://www.npmjs.com/package/react-router-dom) (v.6)
* [Recharts](https://www.npmjs.com/package/recharts)

---

### Install Dependencies

Before installing dependiencies, you will need `node` and `npm` installed globally on your machine by installing [NodeJS](https://nodejs.org/en/download/) onto your machine.

To install the dependencies, run:

```sh
npm install
```

### Run Crypto Hustle Pro

Note: In the 'required features only' version of this lab, there is no chart at the bottom of the detail page with the mapping of the coin price over the last 30 days, however the current state of this repo includes the stretch features, where that price graph is included.

In the repo directory, run the following in your terminal:

```sh
npm run dev

```

Visit the web application in the browser

```console
http://localhost:5173/
```

### Deploy Crypto Hustle Pro

To deploy this application on Netlify, run the following in the repo directory:

```sh
npm install
npm run build

```

Upload the generated `dist` file to Netlify at:

```html
https://app.netlify.com/drop
```

<br/>

---

*Last Updated: December 2022*
