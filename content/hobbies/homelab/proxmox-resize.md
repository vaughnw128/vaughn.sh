+++
title = "Proxmox LV/Disk Resizing"
+++

## How to resize your VMs disk in Proxmox

This is an activity I infrequently do and consistently forget. I document it here only to spur my own knowledge, but if you find  this useful that brings me immense joy.


Do as follows:
1. Expand the disk in Proxmox via the UI. This can be done via the Hardware > Disk Action > Expand button.
2. Reboot the VM
3. SSH in, and run the following commands

```shell
$ growpart /dev/sda3
$ pvresize /dev/sda 3
$ lvextend -l +100%FREE /dev/ubuntu-vg/ubuntu-lv
$ resize2fs /dev/ubuntu-vg/ubuntu-lv
```

Enjoy your newly acquired disk space!

