---
title: SSH
created_at: 2022-02-01T05:44:39.000Z
updated_at: 2022-02-11T13:01:55.000Z
word_count: 2350
---
# SSH  


**远程管理协议**

- RDP（remote desktop protocol，远程桌面协议）：大部分 Windows 系统都默认支持此协议，Windows 系统中的远程桌面管理就基于该协议。
- RFB（Remote FrameBuffer，图形化远程管理协议）：VNC 远程管理工具基于此协议。
- Telnet（命令行界面远程管理协议）：几乎所有的操作系统都默认支持此协议。数据传送使用明文传输的方式。
- SSH（Secure Shell，命令行界面远程管理协议）：几乎所有操作系统都默认支持此协议。数据传输会对数据进行加密并压缩，安全快速。

SSH  <br />  **Secure Shell**（安全外壳协议）是一种加密的[网络传输协议](https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE)，可在不安全的网络中为网络服务提供安全的传输环境

- 通过在网络中创建安全隧道来实现SSH客户端与服务器之间的连接
- 以非对称加密实现身份验证

协议框架

- 传输层协议（The Transport Layer Protocol）：传输层协议提供服务器认证，数据机密性，信息完整性等的支持。
- 用户认证协议（The User Authentication Protocol）：用户认证协议为服务器提供客户端的身份鉴别。
- 连接协议（The Connection Protocol）：连接协议将加密的信息隧道复用成若干个逻辑通道，提供给更高层的应用协议使用。
## [OpenSSH](http://www.openssh.com/)
**组件**

- [ssh](https://man.openbsd.org/ssh) — The basic rlogin/rsh-like client program
- [sshd](https://man.openbsd.org/sshd) — The daemon that permits you to log in
- [ssh-agent](https://man.openbsd.org/ssh-agent) — An authentication agent that can store private keys
- [ssh-add](https://man.openbsd.org/ssh-add) — Tool which adds keys to in the above agent
- [sftp](https://man.openbsd.org/sftp) — FTP-like program that works over SSH1 and SSH2 protocol
- [scp](https://man.openbsd.org/scp) — File copy program that acts like rcp
- [ssh-keygen](https://man.openbsd.org/ssh-keygen) — Key generation tool
- [sftp-server](https://man.openbsd.org/sftp-server) — SFTP server subsystem (started automatically by sshd)
- [ssh-keyscan](https://man.openbsd.org/ssh-keyscan) — Utility for gathering public host keys from a number of hosts
- [ssh-keysign](https://man.openbsd.org/ssh-keysign) — Helper program for host-based authentication

**ssh** [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface]
```
[-b bind_address] [-c cipher_spec] [-D [bind_address:]port]
       [-E log_file] [-e escape_char] [-F configfile] [-I pkcs11]
       [-i identity_file] [-J [user@]host[:port]] [-L address]
       [-l login_name] [-m mac_spec] [-O ctl_cmd] [-o option] [-p port]
       [-Q query_option] [-R address] [-S ctl_path] [-W host:port]
       [-w local_tun[:remote_tun]] destination [command]
```


**ssh-keygen**	[-q] [-a rounds] [-b bits] [-C comment] [-f output_keyfile] [-m format] [-N new_passphrase] [-O option] [-t dsa | ecdsa | ecdsa-sk | ed25519 | ed25519-sk | rsa] [-w provider] [-Z cipher]  <br />  **ssh-keygen** -R hostname [-f known_hosts_file]    Removes all keys belonging to the specified hostname (with optional port number) from a known_hosts file  <br />  **scp** [-346BCpqrv] [-c cipher] [-F ssh_config] [-i identity_file]  <br />       [-l limit] [-o ssh_option] [-P port] [-S program] source ... target  <br />  [-r    ](https://man.openbsd.org/scp#r)Recursively copy entire directories. Note that scp follows symbolic links encountered in the tree traversal.

**ssh-copy-id** [-h|-?|-f|-n] [-i [identity_file]] [-p port] [[-o ] ...] [user@]hostname  <br />  自动将公钥拷贝到远程服务器的~/.ssh/authorized_keys文件(authorized_keys文件的末尾必须是换行符)  <br />  查看公钥的指纹
```javascript
ssh-keygen -l -f /etc/ssh/ssh_host_ecdsa_key.pub
```

SSH 连接的握手阶段，客户端必须跟服务端约定加密参数集（cipher suite）
```javascript
TLS_RSA_WITH_AES_128_CBC_SHA
```

- TLS：协议
- RSA：密钥交换算法
- AES：加密算法
- 128：加密强度
- CBC：加密模式
- SHA：数字签名的 Hash 函数


## 配置
每个命令占据一行。  <br />  每行都是配置项和对应的值，配置项的大小写不敏感，与值之间使用空格分隔。  <br />  配置项与值之间有一个等号，等号前后的空格可选。  <br />  #开头的行表示注释，只能放在一行的开头  <br />  [ssh_config](https://man.openbsd.org/ssh_config) — The client configuration file

#### 配置命令

- AddressFamily inet：使用 IPv4 协议。如果设为inet6，表示只使用 IPv6 协议。
- BindAddress 192.168.10.235：指定本机的 IP 地址（如果本机有多个 IP 地址）。
- CheckHostIP yes：检查 SSH 服务器的 IP 地址是否跟公钥数据库吻合。
- Ciphers blowfish,3des：指定加密算法。
- Compression yes：是否压缩传输信号。
- ConnectionAttempts 10：客户端进行连接时，最大的尝试次数。
- ConnectTimeout 60：客户端进行连接时，服务器在指定秒数内没有回复，则中断连接尝试。
- DynamicForward 1080：指定动态转发端口。
- GlobalKnownHostsFile /users/smith/.ssh/my_global_hosts_file：指定全局的公钥数据库文件的位置。
- Host server.example.com：指定连接的域名或 IP 地址，也可以是别名，支持通配符。Host命令后面的所有配置，都是针对该主机的，直到下一个Host命令为止。
- HostKeyAlgorithms ssh-dss,ssh-rsa：指定密钥算法，优先级从高到低排列。
- HostName myserver.example.com：在Host命令使用别名的情况下，HostName指定域名或 IP 地址。
- IdentityFile keyfile：指定私钥文件。
- LocalForward 2001 localhost:143：指定本地端口转发。
- LogLevel QUIET：指定日志详细程度。如果设为QUIET，将不输出大部分的警告和提示。
- MACs hmac-sha1,hmac-md5：指定数据校验算法。
- NumberOfPasswordPrompts 2：密码登录时，用户输错密码的最大尝试次数。
- PasswordAuthentication no：指定是否支持密码登录。不过，这里只是客户端禁止，真正的禁止需要在 SSH 服务器设置。
- Port 2035：指定客户端连接的 SSH 服务器端口。
- PreferredAuthentications publickey,hostbased,password：指定各种登录方法的优先级。
- Protocol 2：支持的 SSH 协议版本，多个版本之间使用逗号分隔。
- PubKeyAuthentication yes：是否支持密钥登录。这里只是客户端设置，还需要在 SSH 服务器进行相应设置。
- RemoteForward 2001 server:143：指定远程端口转发。
- SendEnv COLOR：SSH 客户端向服务器发送的环境变量名，多个环境变量之间使用空格分隔。环境变量的值从客户端当前环境中拷贝。
- ServerAliveCountMax 3：如果没有收到服务器的回应，客户端连续发送多少次keepalive信号，才断开连接。默认值为3。
- ServerAliveInterval 300：客户端建立连接后，如果在给定秒数内，没有收到服务器发来的消息，客户端向服务器发送keepalive消息。如果不希望客户端发送，这一项设为0。
- StrictHostKeyChecking yes：yes表示严格检查，服务器公钥为未知或发生变化，则拒绝连接。no表示如果服务器公钥未知，则加入客户端公钥数据库，如果公钥发生变化，不改变客户端公钥数据库，输出一条警告，依然允许连接继续进行。ask（默认值）表示询问用户是否继续进行。
- TCPKeepAlive yes：客户端是否定期向服务器发送keepalive信息。
- User userName：指定远程登录的账户名。
- UserKnownHostsFile /users/smith/.ssh/my_local_hosts_file：指定当前用户的known_hosts文件（服务器公钥指纹列表）的位置。
- VerifyHostKeyDNS yes：是否通过检查 SSH 服务器的 DNS 记录，确认公钥指纹是否与known_hosts文件保存的一致。

[sshd_config](https://man.openbsd.org/sshd_config) — The daemon configuration file

## 端口转发（Port forwarding）
又称 SSH 隧道（tunnel）

### 动态转发
本机与 SSH 服务器之间创建了一个加密连接，然后本机内部针对某个端口的通信，都通过这个加密连接转发。

命令
```javascript
ssh -D local-port tunnel-host -N
```

需要把 HTTP 请求转成 SOCKS5 协议，才能把本地端口的请求转发出去  <br />  示例
```javascript
curl -x socks5://localhost:2121 http://www.example.com
```
配置
```javascript
DynamicForward tunnel-host:local-port
```
  <br />  
### 本地转发（local forwarding）
SSH 服务器作为中介的跳板机，建立本地计算机与特定目标网站之间的加密连接。  <br />  命令 
```javascript
ssh -L local-port:target-host:target-port tunnel-host
```
配置
```javascript
Host test.example.com
LocalForward client-IP:client-port server-IP:server-port
```


### 远程转发
命令
```javascript
ssh -R local-port:target-host:target-port -N local
```
配置
```javascript
Host test.example.com
RemoteForward local-IP:local-port target-ip:target-port
```


## 简易 VPN
VPN 用来在外网与内网之间建立一条加密通道。内网的服务器不能从外网直接访问，必须通过一个跳板机，如果本机可以访问跳板机，就可以使用 SSH 本地转发，简单实现一个 VPN。
```javascript
ssh -L 2080:corp-server:80 -L 2443:corp-server:443 tunnel-host -N
```
上面命令通过 SSH 跳板机，将本机的2080端口绑定内网服务器的80端口，本机的2443端口绑定内网服务器的443端口。

## ssh免密登入
1 本机生成密钥对
```javascript
ssh-keygen -t rsa   # -t表示类型选项，这里采用rsa加密算法
```
然后根据提示一步步的按enter键即可，执行结束以后会在 /home/user 下生成一个 .ssh 文件夹，包含私钥文件 id_rsa 和公钥文件 id_rsa.pub。

2 将公钥复制到远程主机中  <br />  ssh-copy-id 将公钥写到远程主机的 ~/ .ssh/authorized_key 文件中
```javascript
ssh-copy-id ldz@192.168.0.1
```
本机 .ssh/config
```javascript
# 别名（Host）：Host 和 HostName 的值可以相同
# 如 ssh aliyun 等于 ssh -i C:\Users\泷\.ssh\id_rsa_aliyun root@172.20.217.87
# 每项配置都是参数名 参数值或参数值=参数名的形式，其中参数名不区分大小写，而参数值区分大小写
Host vm
    User darkiny				# 用户名
    HostName 172.20.217.87			# 主机地址
    # IdentityFile "~/.ssh/id_rsa"	# 认证文件,私钥文件位置
    # Port 22                      # 指定端口
```




Windows
```shell
查看
Get-WindowsCapability -Online | ? Name -like 'OpenSSH*'
安装
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
开启 SSHD 服务
Start-Service sshd
设置服务开机自启
Set-Service -Name sshd -StartupType 'Automatic'
确认防火墙是否是开放（ OpenSSH-Server-In-TCP 是 enabled ）
Get-NetFirewallRule -Name *ssh*
```
