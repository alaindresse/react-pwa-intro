// eslint-disable-next-line no-restricted-globals
const serviceWorkerScope = self;

serviceWorkerScope.onnotificationclick = function handleNotificationClick(event) {
  event.notification.close();

  const origin = serviceWorkerScope.location.origin;
  event.waitUntil(
    serviceWorkerScope.clients.matchAll({ type: "window" }).then(windowClientList => {
      const focusClient = windowClientList.find(client => client.url.includes(origin));
      if (focusClient) {
        focusClient.focus();
      } else {
        if (serviceWorkerScope.clients.openWindow) {
          serviceWorkerScope.clients.openWindow(serviceWorkerScope.location.origin);
        }
      }
    })
  );
};

serviceWorkerScope.addEventListener("push", function showPushNotification(event) {
  const { notification = {} } = event.data.json();
  const { title = "no title", body = "no body" } = notification;
  const options = { body, icon: "./logo-192x192.png" };
  event.waitUntil(serviceWorkerScope.registration.showNotification(title, options));
});

serviceWorkerScope.addEventListener("message", function skipWaiting(event) {
  if (event.data === "skipWaiting") serviceWorkerScope.skipWaiting();
});
