+++
title = 'Galactic Federation'
+++

**Category:** Reverse Engineering
**Points:** ???
**Solved By:** Apicius

## Challenge
>After escaping galactic federal prison, you (the legendary Rick Sanchez) have just given yourself Level 9 access to the federation headquarters. Now, you must break into their computer systems and find a way to topple the galactic government.
>
>
>*Author: monkey_noises*

Files: `galactic_federation.bin`

## Solution

When this program is opened we first get a login page. Guess I need to check if passwords are coded into the binary...

![](fed_login.png)

Opening it in Ghidra, we can see the username and password hardcoded in the binary as strings, with a simple obfuscate function running on it in order to make it slightly more annoying to steal.

![](password_checker.png)

```c
#include <stdio.h>
#include <string.h>
int main() {
	char password[] = "hktpu"; 
	for (int i = 0; i < strlen(password); i++) {
		char out = password[i]-'\a';
		printf("%c", out);
	}
}
```

I rewrote the inverse of the simple obfuscate in C, and got the username and password from it:

`username: admin`
`password: 1_l0v3_wR4ngL3r_jE4nS`

With this username and password we can start our search for the flag. Theres a fairly suspicious function called collapse_economy(), and that seems to be what we want to get. The function where collapse_economy() is called checks for two conditions: that the value of the currency is 0, and that the currency is called "usd."

![](collapse_economy.png)

The line `currency = currency + (local_60/100) * currency` can be easily taken advantage of by just passing -100 in as our variable so that it sets the currency to be currency + -currency. Then, in another portion of the admin console we can simply change the currency type to USD. We're then given the flag after we collapse the economy.

![](galactic_fed_console.png)

**Flag**: `shctf{w4it_uH_wh0s_P4y1Ng_m3_2_y3L1_@_tH15_gUy?}`