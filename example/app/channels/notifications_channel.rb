class NotificationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "notifications_channel"
  end
end
