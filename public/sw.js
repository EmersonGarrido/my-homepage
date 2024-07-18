self.addEventListener('push', function (event) {
  var data = {};
  if (event.data) {
    data = event.data.json();
  }

  var title = data.title || 'Notificação Padrão';
  var body = data.body || 'Você tem uma nova notificação';
  var icon = data.icon || 'img/default-icon.png';
  var tag = data.tag || 'default-tag';

  var options = {
    body: body,
    icon: icon,
    tag: tag,
    data: {
      url: data.url
    }
  };


  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({
      type: 'window'
    }).then(function (windowClients) {
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        if (client.url === event.notification.data.url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(event.notification.data.url);
      }
    })
  );
});
