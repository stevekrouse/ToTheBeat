ToTheBeat
=========

ToTheBeat :: [Pics] -> Song -> [Durations] -> Sexy Montage

ToTheBeat is a Flask webapp that allows a user to upload photos, a song,
and, by tapping to the beat of the music, get a montage of the photos
changing to the beat of the music.

First, I tried to use OpenCV and QueryFrames to write the video and NumPy to do
some crazy liner algebra on the input song to get a best fit curve
of the slideshow cuts based on the approximate durations. However, that didn't
work so I switched to user-based timing input.

Much of my project's logic is indeed in javascript. However, I did spend
many fruitless hours working on beat-detection in python as well as significant
time setting up my flask server, backed by pymongo and then hosting my
app on heroku (which is non-trival for Flask!) and setting up hosted
mongodb on mongolabs.

Check it out at www.2thebe.at
