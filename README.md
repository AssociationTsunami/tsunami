#Association Tsunami

Experimental single page HTML5 website, works best in Chrome and Safari, inspired by http://www.paulrhayes.com/2010-09/3d-css-cube-ii-touch-gestures-click-and-drag/

In order to get the zen player to function, we must have the audio files converted to .ogg using the following command:

    $ ffmpeg -i "03 - input.m4a" -acodec vorbis -aq 60 -vn -ac 2 -map_meta_data outfile.ogg:"01 - input.m4a" output.ogg

* not sure if the metadata works.