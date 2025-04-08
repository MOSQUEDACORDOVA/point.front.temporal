# Point

This project is bootstrapped by [aurelia/new](https://github.com/aurelia/new).

## Start dev web server

    npm start

## Build the app in production mode

    npm run build


## Unit Tests

    npm run test

Run unit tests in watch mode.

    npm run test:watch


## Playwright e2e test

You may need to install playwright test browsers if have not.

   npx playwright install --with-deps

All e2e tests are in `e2e/`.

Run e2e tests with:

    npm run test:e2e

Note the playwright config automatically runs "npm start" before playwright.

For more information, visit https://playwright.dev/docs/test-cli

# FIREBASE
firebase init
firebase deploy --only hosting

# LOGOS
convert favicon.png -resize 48x48 favicon.ico


# EXPORTAR APK

npx cap add android

npx capacitor-assets generate
npm run build
npx cap sync
npx cap open android

