# An introduction to progressive web apps with Create react app

Progressive web apps (PWAs) are the future of web.

Create React App (CRA) brings all the tools necessary to generate a first-class PWA, focusing on three benefits

- Cached static assets (http, css, js, images,...)
- Offline mode
- Add to home screen on mobile devices

This guide starts by taking you through the few steps to achieve this in your app, and builds on it to bring two additional benefits

- Allow users to upgrade in one click when a new version is available
- Handle incoming push notifications

## Three practical steps to a rich-featured PWA with CRA

1. Make your app "Install on home page ready"

   - add the icons
   - register your service worker
   - manual test with Lighthouse

2. Allow your users to upgrade from within the app

   - create service worker context
   - add notification for new content available
   - manual test by changing files from build

3. Get ready to receive push notifications
   - allow users to register to notifications
   - handle push notifications in your service worker
   - manual test from application tab in developer tools

## Highlights in the code

- Lighthouse readiness
  - icons
- Changes to serice worker registration (src/serviceWorker.js)
  - make it work even if register called after page has loaded
  - add onRegistration callback in config
- Service worker context
  - hasNewContent flag
- New content notification
- Register to push notifications
- Service worker extension (custom-service-worker.js)
  - cra-append-sw
  - trigger update without closing tab
  - handle incoming push notification

## References

### Facebook

- [Progressive web apps in Create react app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Google

- [Progressive Web App Checklist](https://developers.google.com/web/progressive-web-apps/checklist)
- [The Web App Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/)
- [Progressive Web Apps with React.js](https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12)

  Rich source of well presented information on progressive web apps with react, even if somewhat dated (end 2016).

### Mozilla

- [MDN Progressive web apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
