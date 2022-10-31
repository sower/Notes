import{_ as e,c as l,b as s,a,d as n,o as p}from"./app.7d58ac0d.js";const m=JSON.parse('{"title":"SSH","description":"","frontmatter":{"title":"SSH","created_at":"2022-02-01T05:44:39.000Z","updated_at":"2022-02-11T13:01:55.000Z","word_count":2350},"headers":[{"level":2,"title":"OpenSSH","slug":"openssh","link":"#openssh","children":[]},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E","link":"#\u914D\u7F6E","children":[]},{"level":2,"title":"\u7AEF\u53E3\u8F6C\u53D1\uFF08Port forwarding\uFF09","slug":"\u7AEF\u53E3\u8F6C\u53D1\uFF08port-forwarding\uFF09","link":"#\u7AEF\u53E3\u8F6C\u53D1\uFF08port-forwarding\uFF09","children":[{"level":3,"title":"\u52A8\u6001\u8F6C\u53D1","slug":"\u52A8\u6001\u8F6C\u53D1","link":"#\u52A8\u6001\u8F6C\u53D1","children":[]},{"level":3,"title":"\u8FDC\u7A0B\u8F6C\u53D1","slug":"\u8FDC\u7A0B\u8F6C\u53D1","link":"#\u8FDC\u7A0B\u8F6C\u53D1","children":[]}]},{"level":2,"title":"\u7B80\u6613 VPN","slug":"\u7B80\u6613-vpn","link":"#\u7B80\u6613-vpn","children":[]},{"level":2,"title":"ssh\u514D\u5BC6\u767B\u5165","slug":"ssh\u514D\u5BC6\u767B\u5165","link":"#ssh\u514D\u5BC6\u767B\u5165","children":[]}],"relativePath":"CS/SSH.md","lastUpdated":1667217212000}'),o={name:"CS/SSH.md"},r=a(`<h1 id="ssh" tabindex="-1">SSH <a class="header-anchor" href="#ssh" aria-hidden="true">#</a></h1><p><strong>\u8FDC\u7A0B\u7BA1\u7406\u534F\u8BAE</strong></p><ul><li>RDP\uFF08remote desktop protocol\uFF0C\u8FDC\u7A0B\u684C\u9762\u534F\u8BAE\uFF09\uFF1A\u5927\u90E8\u5206 Windows \u7CFB\u7EDF\u90FD\u9ED8\u8BA4\u652F\u6301\u6B64\u534F\u8BAE\uFF0CWindows \u7CFB\u7EDF\u4E2D\u7684\u8FDC\u7A0B\u684C\u9762\u7BA1\u7406\u5C31\u57FA\u4E8E\u8BE5\u534F\u8BAE\u3002</li><li>RFB\uFF08Remote FrameBuffer\uFF0C\u56FE\u5F62\u5316\u8FDC\u7A0B\u7BA1\u7406\u534F\u8BAE\uFF09\uFF1AVNC \u8FDC\u7A0B\u7BA1\u7406\u5DE5\u5177\u57FA\u4E8E\u6B64\u534F\u8BAE\u3002</li><li>Telnet\uFF08\u547D\u4EE4\u884C\u754C\u9762\u8FDC\u7A0B\u7BA1\u7406\u534F\u8BAE\uFF09\uFF1A\u51E0\u4E4E\u6240\u6709\u7684\u64CD\u4F5C\u7CFB\u7EDF\u90FD\u9ED8\u8BA4\u652F\u6301\u6B64\u534F\u8BAE\u3002\u6570\u636E\u4F20\u9001\u4F7F\u7528\u660E\u6587\u4F20\u8F93\u7684\u65B9\u5F0F\u3002</li><li>SSH\uFF08Secure Shell\uFF0C\u547D\u4EE4\u884C\u754C\u9762\u8FDC\u7A0B\u7BA1\u7406\u534F\u8BAE\uFF09\uFF1A\u51E0\u4E4E\u6240\u6709\u64CD\u4F5C\u7CFB\u7EDF\u90FD\u9ED8\u8BA4\u652F\u6301\u6B64\u534F\u8BAE\u3002\u6570\u636E\u4F20\u8F93\u4F1A\u5BF9\u6570\u636E\u8FDB\u884C\u52A0\u5BC6\u5E76\u538B\u7F29\uFF0C\u5B89\u5168\u5FEB\u901F\u3002</li></ul><p>SSH <br> <strong>Secure Shell</strong>\uFF08\u5B89\u5168\u5916\u58F3\u534F\u8BAE\uFF09\u662F\u4E00\u79CD\u52A0\u5BC6\u7684<a href="https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE" target="_blank" rel="noreferrer">\u7F51\u7EDC\u4F20\u8F93\u534F\u8BAE</a>\uFF0C\u53EF\u5728\u4E0D\u5B89\u5168\u7684\u7F51\u7EDC\u4E2D\u4E3A\u7F51\u7EDC\u670D\u52A1\u63D0\u4F9B\u5B89\u5168\u7684\u4F20\u8F93\u73AF\u5883</p><ul><li>\u901A\u8FC7\u5728\u7F51\u7EDC\u4E2D\u521B\u5EFA\u5B89\u5168\u96A7\u9053\u6765\u5B9E\u73B0SSH\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u8FDE\u63A5</li><li>\u4EE5\u975E\u5BF9\u79F0\u52A0\u5BC6\u5B9E\u73B0\u8EAB\u4EFD\u9A8C\u8BC1</li></ul><p>\u534F\u8BAE\u6846\u67B6</p><ul><li>\u4F20\u8F93\u5C42\u534F\u8BAE\uFF08The Transport Layer Protocol\uFF09\uFF1A\u4F20\u8F93\u5C42\u534F\u8BAE\u63D0\u4F9B\u670D\u52A1\u5668\u8BA4\u8BC1\uFF0C\u6570\u636E\u673A\u5BC6\u6027\uFF0C\u4FE1\u606F\u5B8C\u6574\u6027\u7B49\u7684\u652F\u6301\u3002</li><li>\u7528\u6237\u8BA4\u8BC1\u534F\u8BAE\uFF08The User Authentication Protocol\uFF09\uFF1A\u7528\u6237\u8BA4\u8BC1\u534F\u8BAE\u4E3A\u670D\u52A1\u5668\u63D0\u4F9B\u5BA2\u6237\u7AEF\u7684\u8EAB\u4EFD\u9274\u522B\u3002</li><li>\u8FDE\u63A5\u534F\u8BAE\uFF08The Connection Protocol\uFF09\uFF1A\u8FDE\u63A5\u534F\u8BAE\u5C06\u52A0\u5BC6\u7684\u4FE1\u606F\u96A7\u9053\u590D\u7528\u6210\u82E5\u5E72\u4E2A\u903B\u8F91\u901A\u9053\uFF0C\u63D0\u4F9B\u7ED9\u66F4\u9AD8\u5C42\u7684\u5E94\u7528\u534F\u8BAE\u4F7F\u7528\u3002</li></ul><h2 id="openssh" tabindex="-1"><a href="http://www.openssh.com/" target="_blank" rel="noreferrer">OpenSSH</a> <a class="header-anchor" href="#openssh" aria-hidden="true">#</a></h2><p><strong>\u7EC4\u4EF6</strong></p><ul><li><a href="https://man.openbsd.org/ssh" target="_blank" rel="noreferrer">ssh</a> \u2014 The basic rlogin/rsh-like client program</li><li><a href="https://man.openbsd.org/sshd" target="_blank" rel="noreferrer">sshd</a> \u2014 The daemon that permits you to log in</li><li><a href="https://man.openbsd.org/ssh-agent" target="_blank" rel="noreferrer">ssh-agent</a> \u2014 An authentication agent that can store private keys</li><li><a href="https://man.openbsd.org/ssh-add" target="_blank" rel="noreferrer">ssh-add</a> \u2014 Tool which adds keys to in the above agent</li><li><a href="https://man.openbsd.org/sftp" target="_blank" rel="noreferrer">sftp</a> \u2014 FTP-like program that works over SSH1 and SSH2 protocol</li><li><a href="https://man.openbsd.org/scp" target="_blank" rel="noreferrer">scp</a> \u2014 File copy program that acts like rcp</li><li><a href="https://man.openbsd.org/ssh-keygen" target="_blank" rel="noreferrer">ssh-keygen</a> \u2014 Key generation tool</li><li><a href="https://man.openbsd.org/sftp-server" target="_blank" rel="noreferrer">sftp-server</a> \u2014 SFTP server subsystem (started automatically by sshd)</li><li><a href="https://man.openbsd.org/ssh-keyscan" target="_blank" rel="noreferrer">ssh-keyscan</a> \u2014 Utility for gathering public host keys from a number of hosts</li><li><a href="https://man.openbsd.org/ssh-keysign" target="_blank" rel="noreferrer">ssh-keysign</a> \u2014 Helper program for host-based authentication</li></ul><p><strong>ssh</strong> [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface]</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code>[-b bind_address] [-c cipher_spec] [-D [bind_address:]port]
       [-E log_file] [-e escape_char] [-F configfile] [-I pkcs11]
       [-i identity_file] [-J [user@]host[:port]] [-L address]
       [-l login_name] [-m mac_spec] [-O ctl_cmd] [-o option] [-p port]
       [-Q query_option] [-R address] [-S ctl_path] [-W host:port]
       [-w local_tun[:remote_tun]] destination [command]
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>ssh-keygen</strong> [-q] [-a rounds] [-b bits] [-C comment] [-f output_keyfile] [-m format] [-N new_passphrase] [-O option] [-t dsa | ecdsa | ecdsa-sk | ed25519 | ed25519-sk | rsa] [-w provider] [-Z cipher] <br> <strong>ssh-keygen</strong> -R hostname\xA0[-f known_hosts_file]\xA0 \xA0\xA0Removes all keys belonging to the specified\xA0hostname\xA0(with optional port number) from a\xA0known_hosts\xA0file <br> <strong>scp</strong> [-346BCpqrv] [-c cipher] [-F ssh_config] [-i identity_file] <br> [-l limit] [-o ssh_option] [-P port] [-S program] source ... target <br> <a href="https://man.openbsd.org/scp#r" target="_blank" rel="noreferrer">-r\xA0 \xA0\xA0</a>Recursively copy entire directories. Note that scp follows symbolic links encountered in the tree traversal.</p><p><strong>ssh-copy-id</strong> [-h|-?|-f|-n] [-i [identity_file]] [-p port] [[-o ] ...] [user@]hostname <br> \u81EA\u52A8\u5C06\u516C\u94A5\u62F7\u8D1D\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u7684~/.ssh/authorized_keys\u6587\u4EF6(authorized_keys\u6587\u4EF6\u7684\u672B\u5C3E\u5FC5\u987B\u662F\u6362\u884C\u7B26) <br> \u67E5\u770B\u516C\u94A5\u7684\u6307\u7EB9</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">keygen </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">l </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">f </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ssh</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ssh_host_ecdsa_key</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pub</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>SSH \u8FDE\u63A5\u7684\u63E1\u624B\u9636\u6BB5\uFF0C\u5BA2\u6237\u7AEF\u5FC5\u987B\u8DDF\u670D\u52A1\u7AEF\u7EA6\u5B9A\u52A0\u5BC6\u53C2\u6570\u96C6\uFF08cipher suite\uFF09</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">TLS_RSA_WITH_AES_128_CBC_SHA</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>TLS\uFF1A\u534F\u8BAE</li><li>RSA\uFF1A\u5BC6\u94A5\u4EA4\u6362\u7B97\u6CD5</li><li>AES\uFF1A\u52A0\u5BC6\u7B97\u6CD5</li><li>128\uFF1A\u52A0\u5BC6\u5F3A\u5EA6</li><li>CBC\uFF1A\u52A0\u5BC6\u6A21\u5F0F</li><li>SHA\uFF1A\u6570\u5B57\u7B7E\u540D\u7684 Hash \u51FD\u6570</li></ul><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u6BCF\u4E2A\u547D\u4EE4\u5360\u636E\u4E00\u884C\u3002 <br> \u6BCF\u884C\u90FD\u662F\u914D\u7F6E\u9879\u548C\u5BF9\u5E94\u7684\u503C\uFF0C\u914D\u7F6E\u9879\u7684\u5927\u5C0F\u5199\u4E0D\u654F\u611F\uFF0C\u4E0E\u503C\u4E4B\u95F4\u4F7F\u7528\u7A7A\u683C\u5206\u9694\u3002 <br> \u914D\u7F6E\u9879\u4E0E\u503C\u4E4B\u95F4\u6709\u4E00\u4E2A\u7B49\u53F7\uFF0C\u7B49\u53F7\u524D\u540E\u7684\u7A7A\u683C\u53EF\u9009\u3002 <br> #\u5F00\u5934\u7684\u884C\u8868\u793A\u6CE8\u91CA\uFF0C\u53EA\u80FD\u653E\u5728\u4E00\u884C\u7684\u5F00\u5934 <br> <a href="https://man.openbsd.org/ssh_config" target="_blank" rel="noreferrer">ssh_config</a> \u2014 The client configuration file</p><h4 id="\u914D\u7F6E\u547D\u4EE4" tabindex="-1">\u914D\u7F6E\u547D\u4EE4 <a class="header-anchor" href="#\u914D\u7F6E\u547D\u4EE4" aria-hidden="true">#</a></h4><ul><li>AddressFamily inet\uFF1A\u4F7F\u7528 IPv4 \u534F\u8BAE\u3002\u5982\u679C\u8BBE\u4E3Ainet6\uFF0C\u8868\u793A\u53EA\u4F7F\u7528 IPv6 \u534F\u8BAE\u3002</li><li>BindAddress 192.168.10.235\uFF1A\u6307\u5B9A\u672C\u673A\u7684 IP \u5730\u5740\uFF08\u5982\u679C\u672C\u673A\u6709\u591A\u4E2A IP \u5730\u5740\uFF09\u3002</li><li>CheckHostIP yes\uFF1A\u68C0\u67E5 SSH \u670D\u52A1\u5668\u7684 IP \u5730\u5740\u662F\u5426\u8DDF\u516C\u94A5\u6570\u636E\u5E93\u543B\u5408\u3002</li><li>Ciphers blowfish,3des\uFF1A\u6307\u5B9A\u52A0\u5BC6\u7B97\u6CD5\u3002</li><li>Compression yes\uFF1A\u662F\u5426\u538B\u7F29\u4F20\u8F93\u4FE1\u53F7\u3002</li><li>ConnectionAttempts 10\uFF1A\u5BA2\u6237\u7AEF\u8FDB\u884C\u8FDE\u63A5\u65F6\uFF0C\u6700\u5927\u7684\u5C1D\u8BD5\u6B21\u6570\u3002</li><li>ConnectTimeout 60\uFF1A\u5BA2\u6237\u7AEF\u8FDB\u884C\u8FDE\u63A5\u65F6\uFF0C\u670D\u52A1\u5668\u5728\u6307\u5B9A\u79D2\u6570\u5185\u6CA1\u6709\u56DE\u590D\uFF0C\u5219\u4E2D\u65AD\u8FDE\u63A5\u5C1D\u8BD5\u3002</li><li>DynamicForward 1080\uFF1A\u6307\u5B9A\u52A8\u6001\u8F6C\u53D1\u7AEF\u53E3\u3002</li><li>GlobalKnownHostsFile /users/smith/.ssh/my_global_hosts_file\uFF1A\u6307\u5B9A\u5168\u5C40\u7684\u516C\u94A5\u6570\u636E\u5E93\u6587\u4EF6\u7684\u4F4D\u7F6E\u3002</li><li>Host <a href="http://server.example.com" target="_blank" rel="noreferrer">server.example.com</a>\uFF1A\u6307\u5B9A\u8FDE\u63A5\u7684\u57DF\u540D\u6216 IP \u5730\u5740\uFF0C\u4E5F\u53EF\u4EE5\u662F\u522B\u540D\uFF0C\u652F\u6301\u901A\u914D\u7B26\u3002Host\u547D\u4EE4\u540E\u9762\u7684\u6240\u6709\u914D\u7F6E\uFF0C\u90FD\u662F\u9488\u5BF9\u8BE5\u4E3B\u673A\u7684\uFF0C\u76F4\u5230\u4E0B\u4E00\u4E2AHost\u547D\u4EE4\u4E3A\u6B62\u3002</li><li>HostKeyAlgorithms ssh-dss,ssh-rsa\uFF1A\u6307\u5B9A\u5BC6\u94A5\u7B97\u6CD5\uFF0C\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\u6392\u5217\u3002</li><li>HostName <a href="http://myserver.example.com" target="_blank" rel="noreferrer">myserver.example.com</a>\uFF1A\u5728Host\u547D\u4EE4\u4F7F\u7528\u522B\u540D\u7684\u60C5\u51B5\u4E0B\uFF0CHostName\u6307\u5B9A\u57DF\u540D\u6216 IP \u5730\u5740\u3002</li><li>IdentityFile keyfile\uFF1A\u6307\u5B9A\u79C1\u94A5\u6587\u4EF6\u3002</li><li>LocalForward 2001 localhost:143\uFF1A\u6307\u5B9A\u672C\u5730\u7AEF\u53E3\u8F6C\u53D1\u3002</li><li>LogLevel QUIET\uFF1A\u6307\u5B9A\u65E5\u5FD7\u8BE6\u7EC6\u7A0B\u5EA6\u3002\u5982\u679C\u8BBE\u4E3AQUIET\uFF0C\u5C06\u4E0D\u8F93\u51FA\u5927\u90E8\u5206\u7684\u8B66\u544A\u548C\u63D0\u793A\u3002</li><li>MACs hmac-sha1,hmac-md5\uFF1A\u6307\u5B9A\u6570\u636E\u6821\u9A8C\u7B97\u6CD5\u3002</li><li>NumberOfPasswordPrompts 2\uFF1A\u5BC6\u7801\u767B\u5F55\u65F6\uFF0C\u7528\u6237\u8F93\u9519\u5BC6\u7801\u7684\u6700\u5927\u5C1D\u8BD5\u6B21\u6570\u3002</li><li>PasswordAuthentication no\uFF1A\u6307\u5B9A\u662F\u5426\u652F\u6301\u5BC6\u7801\u767B\u5F55\u3002\u4E0D\u8FC7\uFF0C\u8FD9\u91CC\u53EA\u662F\u5BA2\u6237\u7AEF\u7981\u6B62\uFF0C\u771F\u6B63\u7684\u7981\u6B62\u9700\u8981\u5728 SSH \u670D\u52A1\u5668\u8BBE\u7F6E\u3002</li><li>Port 2035\uFF1A\u6307\u5B9A\u5BA2\u6237\u7AEF\u8FDE\u63A5\u7684 SSH \u670D\u52A1\u5668\u7AEF\u53E3\u3002</li><li>PreferredAuthentications publickey,hostbased,password\uFF1A\u6307\u5B9A\u5404\u79CD\u767B\u5F55\u65B9\u6CD5\u7684\u4F18\u5148\u7EA7\u3002</li><li>Protocol 2\uFF1A\u652F\u6301\u7684 SSH \u534F\u8BAE\u7248\u672C\uFF0C\u591A\u4E2A\u7248\u672C\u4E4B\u95F4\u4F7F\u7528\u9017\u53F7\u5206\u9694\u3002</li><li>PubKeyAuthentication yes\uFF1A\u662F\u5426\u652F\u6301\u5BC6\u94A5\u767B\u5F55\u3002\u8FD9\u91CC\u53EA\u662F\u5BA2\u6237\u7AEF\u8BBE\u7F6E\uFF0C\u8FD8\u9700\u8981\u5728 SSH \u670D\u52A1\u5668\u8FDB\u884C\u76F8\u5E94\u8BBE\u7F6E\u3002</li><li>RemoteForward 2001 server:143\uFF1A\u6307\u5B9A\u8FDC\u7A0B\u7AEF\u53E3\u8F6C\u53D1\u3002</li><li>SendEnv COLOR\uFF1ASSH \u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001\u7684\u73AF\u5883\u53D8\u91CF\u540D\uFF0C\u591A\u4E2A\u73AF\u5883\u53D8\u91CF\u4E4B\u95F4\u4F7F\u7528\u7A7A\u683C\u5206\u9694\u3002\u73AF\u5883\u53D8\u91CF\u7684\u503C\u4ECE\u5BA2\u6237\u7AEF\u5F53\u524D\u73AF\u5883\u4E2D\u62F7\u8D1D\u3002</li><li>ServerAliveCountMax 3\uFF1A\u5982\u679C\u6CA1\u6709\u6536\u5230\u670D\u52A1\u5668\u7684\u56DE\u5E94\uFF0C\u5BA2\u6237\u7AEF\u8FDE\u7EED\u53D1\u9001\u591A\u5C11\u6B21keepalive\u4FE1\u53F7\uFF0C\u624D\u65AD\u5F00\u8FDE\u63A5\u3002\u9ED8\u8BA4\u503C\u4E3A3\u3002</li><li>ServerAliveInterval 300\uFF1A\u5BA2\u6237\u7AEF\u5EFA\u7ACB\u8FDE\u63A5\u540E\uFF0C\u5982\u679C\u5728\u7ED9\u5B9A\u79D2\u6570\u5185\uFF0C\u6CA1\u6709\u6536\u5230\u670D\u52A1\u5668\u53D1\u6765\u7684\u6D88\u606F\uFF0C\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u5668\u53D1\u9001keepalive\u6D88\u606F\u3002\u5982\u679C\u4E0D\u5E0C\u671B\u5BA2\u6237\u7AEF\u53D1\u9001\uFF0C\u8FD9\u4E00\u9879\u8BBE\u4E3A0\u3002</li><li>StrictHostKeyChecking yes\uFF1Ayes\u8868\u793A\u4E25\u683C\u68C0\u67E5\uFF0C\u670D\u52A1\u5668\u516C\u94A5\u4E3A\u672A\u77E5\u6216\u53D1\u751F\u53D8\u5316\uFF0C\u5219\u62D2\u7EDD\u8FDE\u63A5\u3002no\u8868\u793A\u5982\u679C\u670D\u52A1\u5668\u516C\u94A5\u672A\u77E5\uFF0C\u5219\u52A0\u5165\u5BA2\u6237\u7AEF\u516C\u94A5\u6570\u636E\u5E93\uFF0C\u5982\u679C\u516C\u94A5\u53D1\u751F\u53D8\u5316\uFF0C\u4E0D\u6539\u53D8\u5BA2\u6237\u7AEF\u516C\u94A5\u6570\u636E\u5E93\uFF0C\u8F93\u51FA\u4E00\u6761\u8B66\u544A\uFF0C\u4F9D\u7136\u5141\u8BB8\u8FDE\u63A5\u7EE7\u7EED\u8FDB\u884C\u3002ask\uFF08\u9ED8\u8BA4\u503C\uFF09\u8868\u793A\u8BE2\u95EE\u7528\u6237\u662F\u5426\u7EE7\u7EED\u8FDB\u884C\u3002</li><li>TCPKeepAlive yes\uFF1A\u5BA2\u6237\u7AEF\u662F\u5426\u5B9A\u671F\u5411\u670D\u52A1\u5668\u53D1\u9001keepalive\u4FE1\u606F\u3002</li><li>User userName\uFF1A\u6307\u5B9A\u8FDC\u7A0B\u767B\u5F55\u7684\u8D26\u6237\u540D\u3002</li><li>UserKnownHostsFile /users/smith/.ssh/my_local_hosts_file\uFF1A\u6307\u5B9A\u5F53\u524D\u7528\u6237\u7684known_hosts\u6587\u4EF6\uFF08\u670D\u52A1\u5668\u516C\u94A5\u6307\u7EB9\u5217\u8868\uFF09\u7684\u4F4D\u7F6E\u3002</li><li>VerifyHostKeyDNS yes\uFF1A\u662F\u5426\u901A\u8FC7\u68C0\u67E5 SSH \u670D\u52A1\u5668\u7684 DNS \u8BB0\u5F55\uFF0C\u786E\u8BA4\u516C\u94A5\u6307\u7EB9\u662F\u5426\u4E0Eknown_hosts\u6587\u4EF6\u4FDD\u5B58\u7684\u4E00\u81F4\u3002</li></ul><p><a href="https://man.openbsd.org/sshd_config" target="_blank" rel="noreferrer">sshd_config</a> \u2014 The daemon configuration file</p><h2 id="\u7AEF\u53E3\u8F6C\u53D1\uFF08port-forwarding\uFF09" tabindex="-1">\u7AEF\u53E3\u8F6C\u53D1\uFF08Port forwarding\uFF09 <a class="header-anchor" href="#\u7AEF\u53E3\u8F6C\u53D1\uFF08port-forwarding\uFF09" aria-hidden="true">#</a></h2><p>\u53C8\u79F0 SSH \u96A7\u9053\uFF08tunnel\uFF09</p><h3 id="\u52A8\u6001\u8F6C\u53D1" tabindex="-1">\u52A8\u6001\u8F6C\u53D1 <a class="header-anchor" href="#\u52A8\u6001\u8F6C\u53D1" aria-hidden="true">#</a></h3><p>\u672C\u673A\u4E0E SSH \u670D\u52A1\u5668\u4E4B\u95F4\u521B\u5EFA\u4E86\u4E00\u4E2A\u52A0\u5BC6\u8FDE\u63A5\uFF0C\u7136\u540E\u672C\u673A\u5185\u90E8\u9488\u5BF9\u67D0\u4E2A\u7AEF\u53E3\u7684\u901A\u4FE1\uFF0C\u90FD\u901A\u8FC7\u8FD9\u4E2A\u52A0\u5BC6\u8FDE\u63A5\u8F6C\u53D1\u3002</p><p>\u547D\u4EE4</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D local</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">port tunnel</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">host </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">N</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u9700\u8981\u628A HTTP \u8BF7\u6C42\u8F6C\u6210 SOCKS5 \u534F\u8BAE\uFF0C\u624D\u80FD\u628A\u672C\u5730\u7AEF\u53E3\u7684\u8BF7\u6C42\u8F6C\u53D1\u51FA\u53BB <br> \u793A\u4F8B</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">curl </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">x </span><span style="color:#FFCB6B;">socks5</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;">//localhost:2121 http://www.example.com</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">DynamicForward tunnel</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">port</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,33),t=n("br",null,null,-1),i=n("br",null,null,-1),c=a(`<h3 id="\u8FDC\u7A0B\u8F6C\u53D1" tabindex="-1">\u8FDC\u7A0B\u8F6C\u53D1 <a class="header-anchor" href="#\u8FDC\u7A0B\u8F6C\u53D1" aria-hidden="true">#</a></h3><p>\u547D\u4EE4</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">R local</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">port</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">port </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">N local</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">Host test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">example</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">com</span></span>
<span class="line"><span style="color:#A6ACCD;">RemoteForward local</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">IP</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">port target</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">ip</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">port</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u7B80\u6613-vpn" tabindex="-1">\u7B80\u6613 VPN <a class="header-anchor" href="#\u7B80\u6613-vpn" aria-hidden="true">#</a></h2><p>VPN \u7528\u6765\u5728\u5916\u7F51\u4E0E\u5185\u7F51\u4E4B\u95F4\u5EFA\u7ACB\u4E00\u6761\u52A0\u5BC6\u901A\u9053\u3002\u5185\u7F51\u7684\u670D\u52A1\u5668\u4E0D\u80FD\u4ECE\u5916\u7F51\u76F4\u63A5\u8BBF\u95EE\uFF0C\u5FC5\u987B\u901A\u8FC7\u4E00\u4E2A\u8DF3\u677F\u673A\uFF0C\u5982\u679C\u672C\u673A\u53EF\u4EE5\u8BBF\u95EE\u8DF3\u677F\u673A\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528 SSH \u672C\u5730\u8F6C\u53D1\uFF0C\u7B80\u5355\u5B9E\u73B0\u4E00\u4E2A VPN\u3002</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">L </span><span style="color:#F78C6C;">2080</span><span style="color:#A6ACCD;">:corp</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">server</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">L </span><span style="color:#F78C6C;">2443</span><span style="color:#A6ACCD;">:corp</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">server</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">443</span><span style="color:#A6ACCD;"> tunnel</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">host </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">N</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762\u547D\u4EE4\u901A\u8FC7 SSH \u8DF3\u677F\u673A\uFF0C\u5C06\u672C\u673A\u76842080\u7AEF\u53E3\u7ED1\u5B9A\u5185\u7F51\u670D\u52A1\u5668\u768480\u7AEF\u53E3\uFF0C\u672C\u673A\u76842443\u7AEF\u53E3\u7ED1\u5B9A\u5185\u7F51\u670D\u52A1\u5668\u7684443\u7AEF\u53E3\u3002</p><h2 id="ssh\u514D\u5BC6\u767B\u5165" tabindex="-1">ssh\u514D\u5BC6\u767B\u5165 <a class="header-anchor" href="#ssh\u514D\u5BC6\u767B\u5165" aria-hidden="true">#</a></h2><p>1 \u672C\u673A\u751F\u6210\u5BC6\u94A5\u5BF9</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">keygen </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">t rsa   # </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">t\u8868\u793A\u7C7B\u578B\u9009\u9879\uFF0C\u8FD9\u91CC\u91C7\u7528rsa\u52A0\u5BC6\u7B97\u6CD5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u6839\u636E\u63D0\u793A\u4E00\u6B65\u6B65\u7684\u6309enter\u952E\u5373\u53EF\uFF0C\u6267\u884C\u7ED3\u675F\u4EE5\u540E\u4F1A\u5728\xA0/home/user \u4E0B\u751F\u6210\u4E00\u4E2A\xA0.ssh \u6587\u4EF6\u5939\uFF0C\u5305\u542B\u79C1\u94A5\u6587\u4EF6 id_rsa\xA0\u548C\u516C\u94A5\u6587\u4EF6 id_rsa.pub\u3002</p><p>2 \u5C06\u516C\u94A5\u590D\u5236\u5230\u8FDC\u7A0B\u4E3B\u673A\u4E2D <br> ssh-copy-id \u5C06\u516C\u94A5\u5199\u5230\u8FDC\u7A0B\u4E3B\u673A\u7684 ~/ .ssh/authorized_key \u6587\u4EF6\u4E2D</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">copy</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">id ldz@</span><span style="color:#F78C6C;">192.168</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">0.1</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u672C\u673A .ssh/config</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#A6ACCD;"># \u522B\u540D\uFF08Host\uFF09\uFF1AHost \u548C HostName \u7684\u503C\u53EF\u4EE5\u76F8\u540C</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u5982 ssh aliyun \u7B49\u4E8E ssh </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">i </span><span style="color:#FFCB6B;">C</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">\\Users\\\u6CF7\\</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ssh\\id_rsa_aliyun root@</span><span style="color:#F78C6C;">172.20</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">217.87</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u6BCF\u9879\u914D\u7F6E\u90FD\u662F\u53C2\u6570\u540D \u53C2\u6570\u503C\u6216\u53C2\u6570\u503C</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">\u53C2\u6570\u540D\u7684\u5F62\u5F0F\uFF0C\u5176\u4E2D\u53C2\u6570\u540D\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u800C\u53C2\u6570\u503C\u533A\u5206\u5927\u5C0F\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">Host vm</span></span>
<span class="line"><span style="color:#A6ACCD;">    User darkiny				# \u7528\u6237\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">    HostName </span><span style="color:#F78C6C;">172.20</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">217.87</span><span style="color:#A6ACCD;">			# \u4E3B\u673A\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">    # IdentityFile </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~/.ssh/id_rsa</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">	# \u8BA4\u8BC1\u6587\u4EF6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">\u79C1\u94A5\u6587\u4EF6\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    # Port </span><span style="color:#F78C6C;">22</span><span style="color:#A6ACCD;">                      # \u6307\u5B9A\u7AEF\u53E3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Windows</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u67E5\u770B</span></span>
<span class="line"><span style="color:#A6ACCD;">Get-WindowsCapability -Online </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> Name -like </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">OpenSSH*</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5F00\u542F SSHD \u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">Start-Service sshd</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8BBE\u7F6E\u670D\u52A1\u5F00\u673A\u81EA\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;">Set-Service -Name sshd -StartupType </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Automatic</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">\u786E\u8BA4\u9632\u706B\u5899\u662F\u5426\u662F\u5F00\u653E\uFF08 OpenSSH-Server-In-TCP \u662F enabled \uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">Get-NetFirewallRule -Name </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ssh</span><span style="color:#89DDFF;">*</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,19);function d(y,C,h,D,b,u){return p(),l("div",null,[r,s(),t,s(" ### \u672C\u5730\u8F6C\u53D1\uFF08local forwarding\uFF09 SSH \u670D\u52A1\u5668\u4F5C\u4E3A\u4E2D\u4ECB\u7684\u8DF3\u677F\u673A\uFF0C\u5EFA\u7ACB\u672C\u5730\u8BA1\u7B97\u673A\u4E0E\u7279\u5B9A\u76EE\u6807\u7F51\u7AD9\u4E4B\u95F4\u7684\u52A0\u5BC6\u8FDE\u63A5\u3002 "),i,s(" \u547D\u4EE4 ```javascript ssh -L local-port:target-host:target-port tunnel-host ``` \u914D\u7F6E ```javascript Host test.example.com LocalForward client-IP:client-port server-IP:server-port ``` "),c])}const F=e(o,[["render",d]]);export{m as __pageData,F as default};