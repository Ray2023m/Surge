#!/bin/bash
# ZTE Modem Stats Collector for Surge - Rabbit-Spec
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

/usr/bin/expect <<EOF
set timeout 5
spawn telnet 192.168.1.1
expect "Login:"
send "root\r"
expect "Password:"
send "Zte521\r"
expect "/ # "

# 同时抓取运行时间、CPU 占用、光功率和温度
send "uptime; top -n 1 | grep CPU; cat /proc/pon_info\r"
expect "/ # "
send "exit\r"
expect eof
EOF