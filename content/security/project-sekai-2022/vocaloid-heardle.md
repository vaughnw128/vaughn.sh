+++
title = 'Vocaloid Heardle'
+++

**Category:** Misc
**Points:** 325
**Solved By:** Apicius

## Challenge
>Well, it’s just too usual to hide a flag in stegano, database, cipher, or server. What if we decide to sing it out instead?
>
>
>*Author: pamLELcu*

Files: `flag.mp3`, `vocaloid_heardle.py`

## Solution

Before looking at the python script, I thought I'd first give `flag.mp3` a listen. Upon listening to it, it seems that it's spliced together vocaloid songs of about 3 seconds in length each, with the whole file being 33 seconds long.

Next up was to check out the script. I went through the script and added comments detailing what it was doing in order to properly understand it. 


![](commented-code.png)

The function of this script is to take a file `flag.txt` and encode it into unicode characters, fetch a song with an ID that matches the unicode character, and then add the first three seconds of it to the `flag.mp3` file.

Rather than coming up with a fancy way to do this, I solved it using a rather simple method. I created a file named `flag.txt`, supplied unicode characters 33 through 126, and then ran the program. This gave me a folder full of tracks with the title being a number that corresponds with a unicode character. From here I split `flag.mp3` into 11 parts, and then listened to each song and matched it with a unicode character. The resulting characters being:

`[118, 48, 67, 97, 108, 111, 73, 100, 60, 51, 117]`

When I took these numbers and converted them to ASCII I was given the flag:

**Flag:** `SEKAI{v0CaloId<3u}`

