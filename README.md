ToTheBeat
=========

ToTheBeat :: [Pics] -> [Durations] -> Song -> Sexy Montage

ToTheBeat is a Flask webapp that allows a user to upload photos, 
approximate durations for each photo, and a song, and get a sexy 
montage of the photos changing to the beat of the music as the output.

I will use OpenCV and QueryFrames to write the video and NumPy to do 
some crazy liner algebra on the input song to get a best fit curve
of the slideshow cuts based on the approximate durations.
