/*
* ZTE Modem Monitor Panel - Universal Version (Fixed for Mac/iOS)
* GitHub: Rabbit-Spec/ZTE-Modem-TimeSync-Shortcut
* v0.2
*/

const IP = "192.168.1.1";
const USER = "root";
const PASS = "Zte521";
const EXPECT_PATH = "/opt/homebrew/bin/expect"; 

// 更加精准的环境判断
const isMac = (typeof $environment !== "undefined" && $environment.system === "macOS") || (typeof $utils !== "undefined" && typeof $utils.exec === "function");

if (isMac) {
    // Mac 端执行逻辑：抓取并存储数据
    const cmd = `${EXPECT_PATH} -c 'set timeout 5; spawn telnet ${IP}; expect "Login:"; send "${USER}\\r"; expect "Password:"; send "${PASS}\\r"; expect "/ # "; send "uptime; top -n 1 | grep CPU; cat /proc/pon_info\\r"; expect "/ # "; send "exit\\r"; expect eof'`;

    $utils.exec("bash", ["-c", cmd], (stdout, stderr) => {
        if (stdout) {
            const rxPower = stdout.match(/Rx Power\s+:\s+([-\d.]+)/)?.[1] || "N/A";
            const cpuUsage = stdout.match(/CPU:\s+([\d.]+%)/)?.[1] || "N/A";
            const uptime = stdout.match(/up\s+([\d\s\w,:]+),/)?.[1] || "N/A";

            const content = `🌡 光衰: ${rxPower} dBm  |  💻 CPU: ${cpuUsage}\n⏱ 运行时间: ${uptime}`;
            
            // 写入缓存，供 iOS 端同步读取
            $persistentStore.write(content, "ZTE_Modem_Data");

            $done({
                title: "中兴光猫状态 (Mac)",
                content: content,
                icon: "router",
                "icon-color": "#007AFF"
            });
        } else {
            $done({
                title: "中兴光猫 (连接异常)",
                content: "请检查 Telnet 是否开启及 expect 环境",
                icon: "exclamationmark.triangle",
                "icon-color": "#FF3B30"
            });
        }
    });
} else {
    // iOS 端执行逻辑：仅读取缓存
    const cachedData = $persistentStore.read("ZTE_Modem_Data");
    $done({
        title: "中兴光猫状态 (iOS)",
        content: cachedData ? cachedData : "⏳ 待同步：请确保 Mac 端 Surge 已运行脚本",
        icon: "iphone",
        "icon-color": "#34C759"
    });
}
