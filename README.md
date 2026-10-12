# QuickBite

QuickBite is a responsive, multi-page food ordering website built with HTML, CSS, and Vanilla JavaScript. It is designed as a beginner-friendly frontend portfolio project demonstrating a modern menu, shopping cart, checkout flow, and order confirmation experience using browser localStorage.

## Features

- Six connected pages: Home, Menu, Cart, Checkout, Confirmation, and About
- Responsive navigation with a mobile menu and live cart badge
- Search and category filtering on the menu page
- Persistent cart using localStorage
- Demo checkout form with validation and saved order data
- Confirmation page that reads the latest saved demo order
- Clean visual identity with warm colors, orange accents, and consistent component styling

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome for icons
- Google Fonts for typography
- Browser localStorage for cart and order persistence

## Project Structure

```text
quickbite/
├── index.html
├── menu.html
├── cart.html
├── checkout.html
├── confirmation.html
├── about.html
├── README.md
├── assets/
│   ├── favicon.svg
│   └── images/
│       ├── burgers/
│       ├── pizza/
│       ├── chicken/
│       ├── rice-pasta/
│       ├── sides/
│       └── drinks-desserts/
├── css/
│   ├── base.css
│   ├── navbar.css
│   ├── footer.css
│   ├── home.css
│   ├── menu.css
│   ├── cart.css
│   ├── checkout.css
│   ├── confirmation.css
│   ├── about.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── menu.js
│   ├── cart.js
│   ├── checkout.js
│   └── confirmation.js
└── ASSET_CHECKLIST.md
```

## How to Run the Website

Because this is a static site, it can run without a build step.

1. Open the project folder in VS Code.
2. Use a live preview extension or launch with VS Code Live Server.
3. Open the generated local URL in your browser.

This is a static frontend project, so there is no server setup needed beyond a local web server.

## Adding the 18 Food Images

This demonstration references the following image filenames. Add them to the matching folders before using the menu in a browser:

- burgers/
  - classic-beef-burger.jpg
  - double-cheeseburger.jpg
  - crispy-chicken-burger.jpg
- pizza/
  - pepperoni-pizza.jpg
  - bbq-chicken-pizza.jpg
  - margherita-pizza.jpg
- chicken/
  - crispy-fried-chicken.jpg
  - spicy-chicken-wings.jpg
  - grilled-chicken.jpg
- rice-pasta/
  - jollof-rice.jpg
  - fried-rice.jpg
  - creamy-chicken-pasta.jpg
- sides/
  - french-fries.jpg
  - onion-rings.jpg
  - mozzarella-sticks.jpg
- drinks-desserts/
  - fresh-lemonade.jpg
  - chocolate-milkshake.jpg
  - chocolate-cake.jpg

You can replace them with real food photography or local assets later. The code expects these exact filenames and paths.

## localStorage Cart Behavior

The cart and saved demo order are stored in browser localStorage using keys:

- `quickBiteCart`
- `quickBiteOrder`

This means cart contents stay available when the user navigates between pages or refreshes the browser. The app reads and writes those values safely and includes fallback behavior if storage is unavailable.

## Demo Checkout Notice

This project is a frontend demo only. It does not process real payments, collect sensitive data, or create a real delivery order. The checkout form saves demo order data locally for demonstration purposes.

## Asset Checklist

For exact file references and required filenames, please consult `ASSET_CHECKLIST.md`.
