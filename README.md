# javascriptVanillaChallenge

Notes on my learning:
-- DRUM KIT --

my first and naive attempt is to use keypress.
    with this method i found a issue. the returned for the letter (a) is different from expected.
    keypress for a return 97 instead of 65.
    First idea was to map letter with required value.
    Due to the evident overcoding I decided for other option and changed method from keypress to keyup.
    according to MDN that mark keyCode as deprecated method of KeyBoardEvent I decided to go for KeyBoardEvent.which.
    keypress identifies typed characters
    keydown and keyup identify the physical characters.
    https://unixpapa.com/js/key.html