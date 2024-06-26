+++
title = 'Perfect Match X-treme'
+++

**Category:** Reverse Engineering
**Points:** 100
**Solved By:** Apicius

## Challenge
>Can you qualify Fall Guy’s _Perfect Match_ and get the flag?
>
>
>*Author: sahuang & enscribe*

Files: `Perfect_Match_X-treme.zip`

## Solution

This problem required you beat a game of 'Fall Guys' icon matching in a Unity made game. However, by a cruel twist of fate, in the third round all of the platforms disappear. How unfair.

![](fallguys.png)

Because this is a Unity game and we have the whole Build folder, I thought I'd take a look at the code. I loaded up `Build/PerfectMatch_Data/Managed/Assembly-CSharp.dll` in dnSpy and took a look at it. Within the UI class we can see where the win condition is checked for and where the flag is displayed. 

![](fallguyscode.png)

This code snippet is what's executed when the game is over (either losing or winning). If the game is won, game objects that store the flag text will be popped into existence and shown to the player. In order to get the flag, I simply edited the decompiled method to set the game text to `this.text1.text+this.text2.text+this.text3.text` when you lose. I recompiled the code and reran the game. Now all I need to do is lose! I accomplished this by jumping off the edge as soon as the round started. The flag is then printed straight to the screen.

**Flag:**  `SEKAI{F4LL_GUY5_H3CK_15_1LL3G4L}`
 
![](fallguysflag.png)