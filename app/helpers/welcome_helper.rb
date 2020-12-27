module WelcomeHelper
  def random_card_color
    colors = ['blue-light', 'cyan', 'green', 'green-light', 'yellow', 'pink', 'beige', 'salmon', 'gray', 'purple']
    colors[rand(colors.length)]
  end
end
