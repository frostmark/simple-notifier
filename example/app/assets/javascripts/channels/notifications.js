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
        // var notification =
        // $container.prepend(`<div class="alert alert-success fade in"><a href="#" class="close" data-dismiss="alert">&times;</a>${data.html_message}</div>`)
      }
    }
  )
})
