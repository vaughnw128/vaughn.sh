+++
title = 'Bynary Encoding'
+++

**Category:** Crypto
**Points:** ???
**Solved By:** Apicius

## Challenge
>Starfleet has received a transmission from [Bynaus](https://memory-alpha.fandom.com/wiki/Bynar). However, the message apears to be blank. Is there some kind of hidden message here?
>
>
>*Author: Curtíco*

Files: `transmission.txt`

## Solution

When opening the transmission.txt file, all we see is whitespace! My first thought is that this may be the whitespace language, but that was wrong.

![](whitespace.png)

Next, I decided to read the bytes of the file with python, and I got this:

![](whitespace_bytes.png)

We can work with this! We can see that the length of each line is nine, then minus the newline character it's 8. This means that each line is a byte, and can be read as characters. To solve this challenge I wrote a quick script that would find the character for the byte and then print it out.

```python
chars = []
with open("transmission.txt", "r") as f:
	for line in f.readlines():
		binary_str = ""
		for i in line.encode():
			if i == 32:
				binary_str+="0"
			if i == 9: 
				binary_str+="1"
			chars.append(binary_str)
			
outstring = "" 
for char in chars: 
	outstring+=chr(int(char,2)) 
print(outstring)
```

When this script is run, it gives the flag.

**Flag:**  `shctf{a_bl1nd_m4n_t3aching_an_4ndr0id_h0w_to_pa1nt}`
