$(document).ready(function(){
  console.log(1)
  App.notifications = App.cable.subscriptions.create(
    {
      channel: 'NotificationsChannel',
    },
    {
      connected: function() {
        console.log('Connected to notifications channel');
      },
      received: function(data) {
        console.log(data)
      }
    }
  )
})
