+++
title = 'Guardians of the Galaxy'
+++

**Category:** Reverse Engineering
**Points:** ???
**Solved By:** Apicius

## Challenge
>Only those who know the password can unlock the power of the system. But be warned, the password is as elusive as the Guardians themselves - **hidden in the depths of Xandar or floating in the vastness of Knowhere.**
>
>Are you ready to take on the challenge and prove yourself a true Guardian? Remember, as Groot would say, **'I am Groot'** is not the password you are looking for.
>
>
>*Author: bl4ckp4r4d1s3*

Files: `guardians_of_the_galaxy.bin`

## Solution

This reverse engineering challenge required that you send a properly formatted 'password' to the program in order to get the flag. However, it would seem that the password *is* the flag.

![](groot_password_prompt.png)

We're first prompted with an enter password screen. This doesn't do us much good so I opened it in Ghidra like any responsible reverse engineer-er.

Inside the main function there is some logic to check whether the password you entered is correct. First it checks if the password is 27 characters long, then checks if certain parts of it are equal to certain strings. These strings look suspicious, though.

![](groot_main.png)

When observing the code closely, the atox and r functions are performing operations on the 3 substrings of the flag and then checking to see if you've entered it properly. These can be easily reversed by seeing how the functions work.

![](r_func.png)
![](atox_func.png)

For the function r, it seems that the characters are having four subtracted from their value. This can be simply reversed by just doing the opposite: adding four. With atox on the other hand, all it's doing is converting the string to hex. If we reverse these and recombine them, we get the flag.

![](groot_flag.png)

**Flag:**  `shctf{5ky_1s_n0t_th3_l1m1t}`