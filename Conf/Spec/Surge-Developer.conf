[General]
# 深巷有喵的「Surge_Developer」配置
# 日期：2026-02-06
# 版本：3.5.2
# 配置作者：https://github.com/Rabbit-Spec/Surge
# 适用版本：iOS/macOS的Surge 5

# > Wi-Fi助理
wifi-assist = true
# > IPv6 支持（默认关闭，如无特殊需求不应开启 IPv6，目前网络环境下 IPv6 只会带来问题。）
ipv6 = false
# > 跳过代理
skip-proxy = 192.168.0.0/24, 10.0.0.0/8, 172.16.0.0/12, 127.0.0.1, localhost, *.local
# > 排除简单主机名
exclude-simple-hostnames = true
# > 测试超时（秒）
test-timeout = 2
# > Internet 测试 URL
internet-test-url = http://www.baidu.com
# > 代理测速 URL
proxy-test-url = http://www.apple.com/library/test/success.html
# > DNS 服务器
dns-server = 223.5.5.5, 114.114.114.114
# > DNS 加密服务器（除非当地 ISP 有严重的 DNS 污染问题，否则没必要开启 DoH，传统 DNS 的性能最优，网络异常后恢复速度最快。）
# encrypted-dns-server = h3://223.5.5.5/dns-query

[Proxy Group]
Proxy = select, 🇭🇰 香港节点, 🇺🇸 美国节点, 🇯🇵 日本节点, 🇨🇳 台湾节点, 🇸🇬 新加坡节点, ✈️ 我的节点, icon-url=https://raw.githubusercontent.com/Irrucky/Tool/main/Surge/icon/surge_2.png

# > 外部节点
🇭🇰 香港节点 = smart, include-other-group=✈️ 我的节点, update-interval=0, no-alert=0, hidden=1, include-all-proxies=0, policy-regex-filter=(🇭🇰)|(香港)|(Hong)|(HK), icon-url=https://raw.githubusercontent.com/Semporia/Hand-Painted-icon/master/Rounded_Rectangle/Hong_Kong.png

🇺🇸 美国节点 = smart, include-other-group=✈️ 我的节点, update-interval=0, no-alert=0, hidden=1, include-all-proxies=0, policy-regex-filter=(🇺🇸)|(美国)|(States)|(US), icon-url=https://raw.githubusercontent.com/Semporia/Hand-Painted-icon/master/Rounded_Rectangle/United_States.png

🇯🇵 日本节点 = smart, include-other-group=✈️ 我的节点, update-interval=0, no-alert=0, hidden=1, include-all-proxies=0, policy-regex-filter=(🇯🇵)|(日本)|(Japan)|(JP), icon-url=https://raw.githubusercontent.com/Semporia/Hand-Painted-icon/master/Rounded_Rectangle/Japan.png

🇨🇳 台湾节点 = smart, include-other-group=✈️ 我的节点, update-interval=0, no-alert=0, hidden=1, include-all-proxies=0, policy-regex-filter=(🇨🇳)|(台湾)|(Tai)|(TW), icon-url=https://raw.githubusercontent.com/Semporia/Hand-Painted-icon/master/Rounded_Rectangle/China.png

🇸🇬 新加坡节点 = smart, include-other-group=✈️ 我的节点, update-interval=0, no-alert=0, hidden=1, include-all-proxies=0, policy-regex-filter=(🇸🇬)|(新加坡)|(Singapore)|(SG), icon-url=https://raw.githubusercontent.com/Semporia/Hand-Painted-icon/master/Rounded_Rectangle/Singapore.png

✈️ 我的节点 = select, policy-path=你的订阅地址, update-interval=0, no-alert=0, hidden=0, include-all-proxies=0, icon-url=https://raw.githubusercontent.com/Semporia/Hand-Painted-icon/master/Universal/Final.png

[Rule]
RULE-SET,https://github.com/Blankwonder/surge-list/raw/master/blocked.list,Proxy
RULE-SET,https://github.com/Blankwonder/surge-list/raw/master/cn.list,DIRECT
DOMAIN,apps.apple.com,Proxy
DOMAIN-SUFFIX,ls.apple.com,DIRECT // Apple Maps
DOMAIN-SUFFIX,store.apple.com,DIRECT // Apple Store Online
RULE-SET,SYSTEM,Proxy
RULE-SET,https://github.com/Blankwonder/surge-list/raw/master/apple.list,Proxy
# 以下规则将触发本地 DNS 解析
RULE-SET,LAN,DIRECT
GEOIP,CN,DIRECT
FINAL,Proxy,dns-failed