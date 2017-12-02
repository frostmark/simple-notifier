require "simple_notifier/version"

module SimpleNotifier
  class << self
    def call(template, values = {})
      renderer = ApplicationController.renderer

      ActionCable.server.broadcast(
        "notifications_channel",
        html_message: renderer.render(partial: template, locals: values)
      )
    end
  end
end
