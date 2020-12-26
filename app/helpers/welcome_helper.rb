module WelcomeHelper
  def random_card_color
    colors = ['blue-light', 'cyan', 'green', 'green-light', 'yellow']
    colors[rand(5)]
  end
end
