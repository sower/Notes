<h1>—— PHP Hypertext Preprocessor 超文本预处理器 ——</h1>
<p>1994 年，拉斯姆斯·勒多夫（Rasmus Lerdorf）创造的一种跨平台的、开源的、免费的脚本语言</p>
<p>除变量外，用户定义的函数、类和关键词大小写不敏感</p>
<p>namespace 命名空间名;</p>
<p>use namespace;</p>
<p>use 命名空间 as 别名;</p>
<p><strong>注释</strong></p>
<pre data-syntax="php"><code class="lang-php hljs raw">// 单行注释

# 单行注释

/*
多行
注释块
*/

</code></pre>
<h1>数据类型</h1>
<p><strong>boolean（布尔型）</strong>：true， false</p>
<p><strong>integer（整型）</strong>： -2E31 ~ 2E31 ，可用三种格式来表示，即十进制、十六进制（以 0x 为前缀）和八进制（以 0 为前缀）</p>
<p><strong>float（浮点型）</strong>：1.8E-308 ~ 1.8E+308</p>
<p><strong>string（字符串）</strong></p>
<p>单引号方式、双引号方式、Heredoc 方式</p>
<pre><code>$s = &lt;&lt;&lt;EOF

url：

http://c.biancheng.net/php/
</code></pre>
<p>EOF;</p>
<p>单引号无需考虑变量的解析，处理速度较快</p>
<table>
<thead>
<tr>
<th style="text-align:center">函数</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_addcslashes.asp" target="_blank">addcslashes()</a></td>
<td style="text-align:center">返回在指定的字符前添加反斜杠的字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_addslashes.asp" target="_blank">addslashes()</a></td>
<td style="text-align:center">返回在预定义的字符前添加反斜杠的字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_bin2hex.asp" target="_blank">bin2hex()</a></td>
<td style="text-align:center">把 ASCII 字符的字符串转换为十六进制值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_chop.asp" target="_blank">chop()</a></td>
<td style="text-align:center">删除字符串右侧的空白字符或其他字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_chr.asp" target="_blank">chr()</a></td>
<td style="text-align:center">从指定的 ASCII 值返回字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_chunk_split.asp" target="_blank">chunk_split()</a></td>
<td style="text-align:center">把字符串分割为一系列更小的部分。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_convert_cyr_string.asp" target="_blank">convert_cyr_string()</a></td>
<td style="text-align:center">把字符串由一种 Cyrillic 字符集转换为另一种。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_convert_uudecode.asp" target="_blank">convert_uudecode()</a></td>
<td style="text-align:center">解码 uuencode 编码字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_convert_uuencode.asp" target="_blank">convert_uuencode()</a></td>
<td style="text-align:center">使用 uuencode 算法对字符串进行编码。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_count_chars.asp" target="_blank">count_chars()</a></td>
<td style="text-align:center">返回有关字符串中所用字符的信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_crc32.asp" target="_blank">crc32()</a></td>
<td style="text-align:center">计算字符串的 32 位 CRC。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_crypt.asp" target="_blank">crypt()</a></td>
<td style="text-align:center">单向的字符串加密法（hashing）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_echo.asp" target="_blank">echo()</a></td>
<td style="text-align:center">输出一个或多个字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_explode.asp" target="_blank">explode()</a></td>
<td style="text-align:center">把字符串打散为数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_fprintf.asp" target="_blank">fprintf()</a></td>
<td style="text-align:center">把格式化的字符串写入到指定的输出流。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_get_html_translation_table.asp" target="_blank">get_html_translation_table()</a></td>
<td style="text-align:center">返回由 htmlspecialchars() 和 htmlentities() 使用的翻译表。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_hebrev.asp" target="_blank">hebrev()</a></td>
<td style="text-align:center">把希伯来文本转换为可见文本。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_hebrevc.asp" target="_blank">hebrevc()</a></td>
<td style="text-align:center">把希伯来文本转换为可见文本，并把新行（\n）转换为 <br />。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_hex2bin.asp" target="_blank">hex2bin()</a></td>
<td style="text-align:center">把十六进制值的字符串转换为 ASCII 字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_html_entity_decode.asp" target="_blank">html_entity_decode()</a></td>
<td style="text-align:center">把 HTML 实体转换为字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_htmlentities.asp" target="_blank">htmlentities()</a></td>
<td style="text-align:center">把字符转换为 HTML 实体。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_htmlspecialchars_decode.asp" target="_blank">htmlspecialchars_decode()</a></td>
<td style="text-align:center">把一些预定义的 HTML 实体转换为字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_htmlspecialchars.asp" target="_blank">htmlspecialchars()</a></td>
<td style="text-align:center">把一些预定义的字符转换为 HTML 实体。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_implode.asp" target="_blank">implode()</a></td>
<td style="text-align:center">返回由数组元素组合成的字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_join.asp" target="_blank">join()</a></td>
<td style="text-align:center">implode() 的别名。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_lcfirst.asp" target="_blank">lcfirst()</a></td>
<td style="text-align:center">把字符串的首字符转换为小写。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_levenshtein.asp" target="_blank">levenshtein()</a></td>
<td style="text-align:center">返回两个字符串之间的 Levenshtein 距离。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_localeconv.asp" target="_blank">localeconv()</a></td>
<td style="text-align:center">返回本地数字及货币格式信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_ltrim.asp" target="_blank">ltrim()</a></td>
<td style="text-align:center">移除字符串左侧的空白字符或其他字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_md5.asp" target="_blank">md5()</a></td>
<td style="text-align:center">计算字符串的 MD5 散列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_md5_file.asp" target="_blank">md5_file()</a></td>
<td style="text-align:center">计算文件的 MD5 散列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_metaphone.asp" target="_blank">metaphone()</a></td>
<td style="text-align:center">计算字符串的 metaphone 键。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_money_format.asp" target="_blank">money_format()</a></td>
<td style="text-align:center">返回格式化为货币字符串的字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_nl_langinfo.asp" target="_blank">nl_langinfo()</a></td>
<td style="text-align:center">返回特定的本地信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_nl2br.asp" target="_blank">nl2br()</a></td>
<td style="text-align:center">在字符串中的每个新行之前插入 HTML 换行符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_number_format.asp" target="_blank">number_format()</a></td>
<td style="text-align:center">以千位分组来格式化数字。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_ord.asp" target="_blank">ord()</a></td>
<td style="text-align:center">返回字符串中第一个字符的 ASCII 值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_parse_str.asp" target="_blank">parse_str()</a></td>
<td style="text-align:center">把查询字符串解析到变量中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_print.asp" target="_blank">print()</a></td>
<td style="text-align:center">输出一个或多个字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_printf.asp" target="_blank">printf()</a></td>
<td style="text-align:center">输出格式化的字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_quoted_printable_decode.asp" target="_blank">quoted_printable_decode()</a></td>
<td style="text-align:center">把 quoted-printable 字符串转换为 8 位字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_quoted_printable_encode.asp" target="_blank">quoted_printable_encode()</a></td>
<td style="text-align:center">把 8 位字符串转换为 quoted-printable 字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_quotemeta.asp" target="_blank">quotemeta()</a></td>
<td style="text-align:center">引用元字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_rtrim.asp" target="_blank">rtrim()</a></td>
<td style="text-align:center">移除字符串右侧的空白字符或其他字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_setlocale.asp" target="_blank">setlocale()</a></td>
<td style="text-align:center">设置地区信息（地域信息）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_sha1.asp" target="_blank">sha1()</a></td>
<td style="text-align:center">计算字符串的 SHA-1 散列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_sha1_file.asp" target="_blank">sha1_file()</a></td>
<td style="text-align:center">计算文件的 SHA-1 散列。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_similar_text.asp" target="_blank">similar_text()</a></td>
<td style="text-align:center">计算两个字符串的相似度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_soundex.asp" target="_blank">soundex()</a></td>
<td style="text-align:center">计算字符串的 soundex 键。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_sprintf.asp" target="_blank">sprintf()</a></td>
<td style="text-align:center">把格式化的字符串写入变量中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_sscanf.asp" target="_blank">sscanf()</a></td>
<td style="text-align:center">根据指定的格式解析来自字符串的输入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_str_getcsv.asp" target="_blank">str_getcsv()</a></td>
<td style="text-align:center">把 CSV 字符串解析到数组中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_str_ireplace.asp" target="_blank">str_ireplace()</a></td>
<td style="text-align:center">替换字符串中的一些字符（对大小写不敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_str_pad.asp" target="_blank">str_pad()</a></td>
<td style="text-align:center">把字符串填充为新的长度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_str_repeat.asp" target="_blank">str_repeat()</a></td>
<td style="text-align:center">把字符串重复指定的次数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_str_replace.asp" target="_blank">str_replace()</a></td>
<td style="text-align:center">替换字符串中的一些字符（对大小写敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_str_rot13.asp" target="_blank">str_rot13()</a></td>
<td style="text-align:center">对字符串执行 ROT13 编码。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_str_shuffle.asp" target="_blank">str_shuffle()</a></td>
<td style="text-align:center">随机地打乱字符串中的所有字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_str_split.asp" target="_blank">str_split()</a></td>
<td style="text-align:center">把字符串分割到数组中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_str_word_count.asp" target="_blank">str_word_count()</a></td>
<td style="text-align:center">计算字符串中的单词数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strcasecmp.asp" target="_blank">strcasecmp()</a></td>
<td style="text-align:center">比较两个字符串（对大小写不敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strchr.asp" target="_blank">strchr()</a></td>
<td style="text-align:center">查找字符串在另一字符串中的第一次出现。（strstr() 的别名。）</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strcmp.asp" target="_blank">strcmp()</a></td>
<td style="text-align:center">比较两个字符串（对大小写敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strcoll.asp" target="_blank">strcoll()</a></td>
<td style="text-align:center">比较两个字符串（根据本地设置）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strcspn.asp" target="_blank">strcspn()</a></td>
<td style="text-align:center">返回在找到某些指定字符的任何部分之前，在字符串中查找的字符数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strip_tags.asp" target="_blank">strip_tags()</a></td>
<td style="text-align:center">剥去字符串中的 HTML 和 PHP 标签。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_stripcslashes.asp" target="_blank">stripcslashes()</a></td>
<td style="text-align:center">删除由 addcslashes() 函数添加的反斜杠。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_stripslashes.asp" target="_blank">stripslashes()</a></td>
<td style="text-align:center">删除由 addslashes() 函数添加的反斜杠。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_stripos.asp" target="_blank">stripos()</a></td>
<td style="text-align:center">返回字符串在另一字符串中第一次出现的位置（对大小写不敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_stristr.asp" target="_blank">stristr()</a></td>
<td style="text-align:center">查找字符串在另一字符串中第一次出现的位置（大小写不敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strlen.asp" target="_blank">strlen()</a></td>
<td style="text-align:center">返回字符串的长度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strnatcasecmp.asp" target="_blank">strnatcasecmp()</a></td>
<td style="text-align:center">使用一种"自然排序"算法来比较两个字符串（对大小写不敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strnatcmp.asp" target="_blank">strnatcmp()</a></td>
<td style="text-align:center">使用一种"自然排序"算法来比较两个字符串（对大小写敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strncasecmp.asp" target="_blank">strncasecmp()</a></td>
<td style="text-align:center">前 n 个字符的字符串比较（对大小写不敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strncmp.asp" target="_blank">strncmp()</a></td>
<td style="text-align:center">前 n 个字符的字符串比较（对大小写敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strpbrk.asp" target="_blank">strpbrk()</a></td>
<td style="text-align:center">在字符串中查找一组字符的任何一个字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strpos.asp" target="_blank">strpos()</a></td>
<td style="text-align:center">返回字符串在另一字符串中第一次出现的位置（对大小写敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strrchr.asp" target="_blank">strrchr()</a></td>
<td style="text-align:center">查找字符串在另一个字符串中最后一次出现。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strrev.asp" target="_blank">strrev()</a></td>
<td style="text-align:center">反转字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strripos.asp" target="_blank">strripos()</a></td>
<td style="text-align:center">查找字符串在另一字符串中最后一次出现的位置（对大小写不敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strrpos.asp" target="_blank">strrpos()</a></td>
<td style="text-align:center">查找字符串在另一字符串中最后一次出现的位置（对大小写敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strspn.asp" target="_blank">strspn()</a></td>
<td style="text-align:center">返回在字符串中包含的特定字符的数目。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strstr.asp" target="_blank">strstr()</a></td>
<td style="text-align:center">查找字符串在另一字符串中的第一次出现（对大小写敏感）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strtok.asp" target="_blank">strtok()</a></td>
<td style="text-align:center">把字符串分割为更小的字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strtolower.asp" target="_blank">strtolower()</a></td>
<td style="text-align:center">把字符串转换为小写字母。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strtoupper.asp" target="_blank">strtoupper()</a></td>
<td style="text-align:center">把字符串转换为大写字母。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_strtr.asp" target="_blank">strtr()</a></td>
<td style="text-align:center">转换字符串中特定的字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_substr.asp" target="_blank">substr()</a></td>
<td style="text-align:center">返回字符串的一部分。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_substr_compare.asp" target="_blank">substr_compare()</a></td>
<td style="text-align:center">从指定的开始位置（二进制安全和选择性区分大小写）比较两个字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_substr_count.asp" target="_blank">substr_count()</a></td>
<td style="text-align:center">计算子串在字符串中出现的次数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_substr_replace.asp" target="_blank">substr_replace()</a></td>
<td style="text-align:center">把字符串的一部分替换为另一个字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_trim.asp" target="_blank">trim()</a></td>
<td style="text-align:center">移除字符串两侧的空白字符和其他字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_ucfirst.asp" target="_blank">ucfirst()</a></td>
<td style="text-align:center">把字符串中的首字符转换为大写。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_ucwords.asp" target="_blank">ucwords()</a></td>
<td style="text-align:center">把字符串中每个单词的首字符转换为大写。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_vfprintf.asp" target="_blank">vfprintf()</a></td>
<td style="text-align:center">把格式化的字符串写到指定的输出流。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_vprintf.asp" target="_blank">vprintf()</a></td>
<td style="text-align:center">输出格式化的字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_vsprintf.asp" target="_blank">vsprintf()</a></td>
<td style="text-align:center">把格式化字符串写入变量中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_string_wordwrap.asp" target="_blank">wordwrap()</a></td>
<td style="text-align:center">打断字符串为指定数量的字串</td>
</tr>
</tbody>
</table>
<p><strong>数组（Array）</strong></p>
<ul>
<li>
<p>索引数组 - 带有数字索引的数组</p>
</li>
<li>
<p>关联数组 - 带有指定键的数组（=&gt;）</p>
</li>
<li>
<p>多维数组 - 包含一个或多个数组的数组</p>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">函数</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array.asp" target="_blank">array()</a></td>
<td style="text-align:center">创建数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_change_key_case.asp" target="_blank">array_change_key_case()</a></td>
<td style="text-align:center">把数组中所有键更改为小写或大写。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_chunk.asp" target="_blank">array_chunk()</a></td>
<td style="text-align:center">把一个数组分割为新的数组块。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_column.asp" target="_blank">array_column()</a></td>
<td style="text-align:center">返回输入数组中某个单一列的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_combine.asp" target="_blank">array_combine()</a></td>
<td style="text-align:center">通过合并两个数组来创建一个新数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_count_values.asp" target="_blank">array_count_values()</a></td>
<td style="text-align:center">用于统计数组中所有值出现的次数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_diff.asp" target="_blank">array_diff()</a></td>
<td style="text-align:center">比较数组，返回差集（只比较键值）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_diff_assoc.asp" target="_blank">array_diff_assoc()</a></td>
<td style="text-align:center">比较数组，返回差集（比较键名和键值）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_diff_key.asp" target="_blank">array_diff_key()</a></td>
<td style="text-align:center">比较数组，返回差集（只比较键名）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_diff_uassoc.asp" target="_blank">array_diff_uassoc()</a></td>
<td style="text-align:center">比较数组，返回差集（比较键名和键值，使用用户自定义的键名比较函数）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_diff_ukey.asp" target="_blank">array_diff_ukey()</a></td>
<td style="text-align:center">比较数组，返回差集（只比较键名，使用用户自定义的键名比较函数）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_fill.asp" target="_blank">array_fill()</a></td>
<td style="text-align:center">用给定的键值填充数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_fill_keys.asp" target="_blank">array_fill_keys()</a></td>
<td style="text-align:center">用指定键名的给定键值填充数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_filter.asp" target="_blank">array_filter()</a></td>
<td style="text-align:center">用回调函数过滤数组中的元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_flip.asp" target="_blank">array_flip()</a></td>
<td style="text-align:center">交换数组中的键和值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_intersect.asp" target="_blank">array_intersect()</a></td>
<td style="text-align:center">比较数组，返回交集（只比较键值）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_intersect_assoc.asp" target="_blank">array_intersect_assoc()</a></td>
<td style="text-align:center">比较数组，返回交集（比较键名和键值）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_intersect_key.asp" target="_blank">array_intersect_key()</a></td>
<td style="text-align:center">比较数组，返回交集（只比较键名）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_intersect_uassoc.asp" target="_blank">array_intersect_uassoc()</a></td>
<td style="text-align:center">比较数组，返回交集（比较键名和键值，使用用户自定义的键名比较函数）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_intersect_ukey.asp" target="_blank">array_intersect_ukey()</a></td>
<td style="text-align:center">比较数组，返回交集（只比较键名，使用用户自定义的键名比较函数）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_key_exists.asp" target="_blank">array_key_exists()</a></td>
<td style="text-align:center">检查指定的键名是否存在于数组中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_keys.asp" target="_blank">array_keys()</a></td>
<td style="text-align:center">返回数组中所有的键名。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_map.asp" target="_blank">array_map()</a></td>
<td style="text-align:center">把数组中的每个值发送到用户自定义函数，返回新的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_merge.asp" target="_blank">array_merge()</a></td>
<td style="text-align:center">把一个或多个数组合并为一个数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_merge_recursive.asp" target="_blank">array_merge_recursive()</a></td>
<td style="text-align:center">递归地合并一个或多个数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_multisort.asp" target="_blank">array_multisort()</a></td>
<td style="text-align:center">对多个数组或多维数组进行排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_pad.asp" target="_blank">array_pad()</a></td>
<td style="text-align:center">用值将数组填补到指定长度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_pop.asp" target="_blank">array_pop()</a></td>
<td style="text-align:center">删除数组的最后一个元素（出栈）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_product.asp" target="_blank">array_product()</a></td>
<td style="text-align:center">计算数组中所有值的乘积。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_push.asp" target="_blank">array_push()</a></td>
<td style="text-align:center">将一个或多个元素插入数组的末尾（入栈）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_rand.asp" target="_blank">array_rand()</a></td>
<td style="text-align:center">返回数组中一个或多个随机的键。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_reduce.asp" target="_blank">array_reduce()</a></td>
<td style="text-align:center">通过使用用户自定义函数，以字符串返回数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_replace.asp" target="_blank">array_replace()</a></td>
<td style="text-align:center">使用后面数组的值替换第一个数组的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_replace_recursive.asp" target="_blank">array_replace_recursive()</a></td>
<td style="text-align:center">递归地使用后面数组的值替换第一个数组的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_reverse.asp" target="_blank">array_reverse()</a></td>
<td style="text-align:center">以相反的顺序返回数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_search.asp" target="_blank">array_search()</a></td>
<td style="text-align:center">搜索数组中给定的值并返回键名。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_shift.asp" target="_blank">array_shift()</a></td>
<td style="text-align:center">删除数组中首个元素，并返回被删除元素的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_slice.asp" target="_blank">array_slice()</a></td>
<td style="text-align:center">返回数组中被选定的部分。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_splice.asp" target="_blank">array_splice()</a></td>
<td style="text-align:center">删除并替换数组中指定的元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_sum.asp" target="_blank">array_sum()</a></td>
<td style="text-align:center">返回数组中值的和。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_udiff.asp" target="_blank">array_udiff()</a></td>
<td style="text-align:center">比较数组，返回差集（只比较值，使用一个用户自定义的键名比较函数）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_udiff_assoc.asp" target="_blank">array_udiff_assoc()</a></td>
<td style="text-align:center">比较数组，返回差集（比较键和值，使用内建函数比较键名，使用用户自定义函数比较键值）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_udiff_uassoc.asp" target="_blank">array_udiff_uassoc()</a></td>
<td style="text-align:center">比较数组，返回差集（比较键和值，使用两个用户自定义的键名比较函数）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_uintersect.asp" target="_blank">array_uintersect()</a></td>
<td style="text-align:center">比较数组，返回交集（只比较值，使用一个用户自定义的键名比较函数）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_uintersect_assoc.asp" target="_blank">array_uintersect_assoc()</a></td>
<td style="text-align:center">比较数组，返回交集（比较键和值，使用内建函数比较键名，使用用户自定义函数比较键值）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_uintersect_uassoc.asp" target="_blank">array_uintersect_uassoc()</a></td>
<td style="text-align:center">比较数组，返回交集（比较键和值，使用两个用户自定义的键名比较函数）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_unique.asp" target="_blank">array_unique()</a></td>
<td style="text-align:center">删除数组中的重复值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_unshift.asp" target="_blank">array_unshift()</a></td>
<td style="text-align:center">在数组开头插入一个或多个元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_values.asp" target="_blank">array_values()</a></td>
<td style="text-align:center">返回数组中所有的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_walk.asp" target="_blank">array_walk()</a></td>
<td style="text-align:center">对数组中的每个成员应用用户函数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_walk_recursive.asp" target="_blank">array_walk_recursive()</a></td>
<td style="text-align:center">对数组中的每个成员递归地应用用户函数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_arsort.asp" target="_blank">arsort()</a></td>
<td style="text-align:center">对关联数组按照键值进行降序排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_asort.asp" target="_blank">asort()</a></td>
<td style="text-align:center">对关联数组按照键值进行升序排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_compact.asp" target="_blank">compact()</a></td>
<td style="text-align:center">创建包含变量名和它们的值的数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_count.asp" target="_blank">count()</a></td>
<td style="text-align:center">返回数组中元素的数目。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_current.asp" target="_blank">current()</a></td>
<td style="text-align:center">返回数组中的当前元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_each.asp" target="_blank">each()</a></td>
<td style="text-align:center">返回数组中当前的键／值对。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_end.asp" target="_blank">end()</a></td>
<td style="text-align:center">将数组的内部指针指向最后一个元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_extract.asp" target="_blank">extract()</a></td>
<td style="text-align:center">从数组中将变量导入到当前的符号表。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_in_array.asp" target="_blank">in_array()</a></td>
<td style="text-align:center">检查数组中是否存在指定的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_key.asp" target="_blank">key()</a></td>
<td style="text-align:center">从关联数组中取得键名。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_krsort.asp" target="_blank">krsort()</a></td>
<td style="text-align:center">对数组按照键名逆向排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_ksort.asp" target="_blank">ksort()</a></td>
<td style="text-align:center">对数组按照键名排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_list.asp" target="_blank">list()</a></td>
<td style="text-align:center">把数组中的值赋给一些变量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_natcasesort.asp" target="_blank">natcasesort()</a></td>
<td style="text-align:center">用“自然排序”算法对数组进行不区分大小写字母的排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_natsort.asp" target="_blank">natsort()</a></td>
<td style="text-align:center">用“自然排序”算法对数组排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_next.asp" target="_blank">next()</a></td>
<td style="text-align:center">将数组中的内部指针向前移动一位。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_pos.asp" target="_blank">pos()</a></td>
<td style="text-align:center">current() 的别名。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_prev.asp" target="_blank">prev()</a></td>
<td style="text-align:center">将数组的内部指针倒回一位。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_range.asp" target="_blank">range()</a></td>
<td style="text-align:center">创建包含指定范围单元的数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_reset.asp" target="_blank">reset()</a></td>
<td style="text-align:center">将数组的内部指针指向第一个元素。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_rsort.asp" target="_blank">rsort()</a></td>
<td style="text-align:center">对数组逆向排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_shuffle.asp" target="_blank">shuffle()</a></td>
<td style="text-align:center">将数组打乱。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_sizeof.asp" target="_blank">sizeof()</a></td>
<td style="text-align:center">count() 的别名。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_sort.asp" target="_blank">sort()</a></td>
<td style="text-align:center">对数组排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_uasort.asp" target="_blank">uasort()</a></td>
<td style="text-align:center">使用用户自定义的比较函数对数组中的键值进行排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_uksort.asp" target="_blank">uksort()</a></td>
<td style="text-align:center">使用用户自定义的比较函数对数组中的键名进行排序。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_array_usort.asp" target="_blank">usort()</a></td>
<td style="text-align:center">使用用户自定义的比较函数对数组进行排序。</td>
</tr>
</tbody>
</table>
<p><strong>对象（Object）</strong></p>
<pre data-syntax="php"><code class="lang-php hljs raw">&lt;?php
    class Car  //使用 class 声明一个类对象
    {
        var $color;
        function car($color="black") {
            $this-&gt;color = $color;
        }
        function getColor() {
            return $this-&gt;color;
        }
    }
    $car = new Car();
    $car-&gt;car('red');
    echo $car-&gt;getColor();
?&gt;

</code></pre>
<p><strong>NULL</strong></p>
<ul>
<li>
<p>变量被指定为 NULL 值；</p>
</li>
<li>
<p>变量在没有被赋值前，默认值为 NULL；</p>
</li>
<li>
<p>使用 unset() 函数删除一个变量后，这个变量值也为 NULL。</p>
</li>
</ul>
<p>资源（Resource）</p>
<p><strong>变量</strong></p>
<ul>
<li>
<p>以 $ 符号开头，其后是变量的名称</p>
</li>
<li>
<p>名称只能包含字母数字字符和下划线（A-z、0-9 以及 _），且不能以数字开头</p>
</li>
</ul>
<p>可变变量（$+）：一个变量以另外一个变量的值作为变量名</p>
<pre data-syntax="php"><code class="lang-php hljs raw">&lt;?php
    $name = 'PHP';
    $str = 'name';
    echo $$str.'&lt;br&gt;';     #输出 PHP
    
    $url = 'www.google.com';
    $website = 'url';
    $link = 'website';
    echo $$$link;   #输出 www.google.com
?&gt;

</code></pre>
<p>预定义变量</p>
<ul>
<li>
<p>$GLOBALS：全局作用域中的全部可用变量；</p>
</li>
<li>
<p>$_SERVER：服务器和执行环境的信息；</p>
</li>
<li>
<p>$<em>REQUEST：包含了 <div data-type="math" data-display="inline" data-text="_GET%EF%BC%8C"></div></em>POST 和 $_COOKIE 的所有信息；</p>
</li>
<li>
<p>$_POST：通过 POST 方法提交的数据；</p>
</li>
<li>
<p>$_GET：通过 GET 方法提交的数据；</p>
</li>
<li>
<p>$_FILES：通过 POST 方式上传到服务器的文件数据；</p>
</li>
<li>
<p>$_ENV：通过环境方式传递给当前脚本的变量组成的数组；</p>
</li>
<li>
<p>$_COOKIE：通过 HTTP Cookies 方式传递给当前脚本的变量所组成的数组；</p>
</li>
<li>
<p>$_SESSION：当前脚本可用 SESSION 变量组成的数组。</p>
</li>
</ul>
<p><strong>常量</strong></p>
<p>用 define() 和 const 定义，作用域是全局的</p>
<ul>
<li>
<p>define(string $name, mixed $value [, bool $case_insensitive = false])</p>
</li>
<li>
<p>const 常量名 = 常量值;</p>
</li>
</ul>
<p>预定义常量</p>
<ul>
<li>
<p>PHP_VERSION：当前 PHP 的版本号；</p>
</li>
<li>
<p>PHP_OS：当前的操作系统名称；</p>
</li>
<li>
<p>PHP_EOL：系统换行符，Windows 是（\r\n），Linux 是（\n），MAC 是（\r）；</p>
</li>
<li>
<p>PHP_INT_MAX：当前 PHP 支持的最大整数；</p>
</li>
<li>
<p>PHP_INT_MIN：当前 PHP 支持的最小整数；</p>
</li>
<li>
<p>PHP_EXTENSION_DIR：PHP 的扩展目录；</p>
</li>
<li>
<p>TRUE：布尔类型的 true；</p>
</li>
<li>
<p>FALSE：布尔类型的 false；</p>
</li>
<li>
<p>NULL：Null 值。</p>
</li>
</ul>
<p>魔术常量</p>
<ul>
<li>
<p><strong>LINE</strong> ：文件中的当前行号；</p>
</li>
<li>
<p><strong>FILE</strong>：当前文件的绝对路径（包含文件名）；</p>
</li>
<li>
<p><strong>DIR</strong>：当前文件的绝对路径（不包含文件名），等价于 dirname(<strong>FILE</strong>)；</p>
</li>
<li>
<p><strong>FUNCTION</strong>：当前函数（或方法）的名称；</p>
</li>
<li>
<p><strong>CLASS</strong>：当前的类名（包括该类的作用区域或命名空间）；</p>
</li>
<li>
<p><strong>TRAIT</strong>：当前的 trait 名称（包括该 trait 的作用区域或命名空间）；</p>
</li>
<li>
<p><strong>METHOD</strong>：当前的方法名（包括类名）；</p>
</li>
<li>
<p><strong>NAMESPACE</strong>：当前文件的命名空间的名称。</p>
</li>
</ul>
<p>数组$GLOBALS[index] 存储了所有的全局变量。下标为变量名</p>
<ul>
<li>
<p>echo - 能够输出一个以上的字符串</p>
</li>
<li>
<p>print - 只能输出一个字符串，并始终返回 1</p>
</li>
</ul>
<p>echo 比 print 稍快，因为它不返回任何值。</p>
<h1>运算符</h1>
<p>连接运算符（.)</p>
<p>算术运算符</p>
<table>
<thead>
<tr>
<th style="text-align:center">运算符</th>
<th style="text-align:center">名称</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">x+y</td>
<td style="text-align:center">加</td>
</tr>
<tr>
<td style="text-align:center">x-y</td>
<td style="text-align:center">减</td>
</tr>
<tr>
<td style="text-align:center">x*y</td>
<td style="text-align:center">乘</td>
</tr>
<tr>
<td style="text-align:center">x/y</td>
<td style="text-align:center">除</td>
</tr>
<tr>
<td style="text-align:center">x%y</td>
<td style="text-align:center">取模</td>
</tr>
<tr>
<td style="text-align:center">-x</td>
<td style="text-align:center">取反</td>
</tr>
<tr>
<td style="text-align:center">intdiv(x,y)</td>
<td style="text-align:center">整除</td>
</tr>
<tr>
<td style="text-align:center">++</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">--</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<p>比较</p>
<table>
<thead>
<tr>
<th style="text-align:center">运算符</th>
<th style="text-align:center">名称</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">x==y</td>
<td style="text-align:center">等于</td>
</tr>
<tr>
<td style="text-align:center">x===y</td>
<td style="text-align:center">恒等于，x == y且两者数据类型相同</td>
</tr>
<tr>
<td style="text-align:center">x!=y</td>
<td style="text-align:center">不等于</td>
</tr>
<tr>
<td style="text-align:center">x&lt;&gt;y</td>
<td style="text-align:center">不等于</td>
</tr>
<tr>
<td style="text-align:center">x!==y</td>
<td style="text-align:center">不恒等于，x != y或两者数据类型不同</td>
</tr>
<tr>
<td style="text-align:center">x&gt;y</td>
<td style="text-align:center">大于</td>
</tr>
<tr>
<td style="text-align:center">x&lt;y</td>
<td style="text-align:center">小于</td>
</tr>
<tr>
<td style="text-align:center">x&gt;=y</td>
<td style="text-align:center">大于等于</td>
</tr>
<tr>
<td style="text-align:center">x&lt;=y</td>
<td style="text-align:center">小于等于</td>
</tr>
<tr>
<td style="text-align:center">x&lt;=&gt;y</td>
<td style="text-align:center">组合比较符 x==y，0；x&gt;y，1；x&lt;y，-1</td>
</tr>
</tbody>
</table>
<p>逻辑</p>
<table>
<thead>
<tr>
<th style="text-align:center">运算符</th>
<th style="text-align:center">名称</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">a and b</td>
<td style="text-align:center">与</td>
</tr>
<tr>
<td style="text-align:center">x or y</td>
<td style="text-align:center">或</td>
</tr>
<tr>
<td style="text-align:center">a xor b</td>
<td style="text-align:center">异或</td>
</tr>
<tr>
<td style="text-align:center">a &amp;&amp; b</td>
<td style="text-align:center">与</td>
</tr>
<tr>
<td style="text-align:center">a</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">!a</td>
<td style="text-align:center">非</td>
</tr>
</tbody>
</table>
<p>(expr1) ? (expr2) : (expr3)</p>
<p>(expr1) ?? (expr2)	当 expr1 != NULL 时返回 expr1 的值，否则返回 expr2 的值</p>
<h2>优先级</h2>
<table>
<thead>
<tr>
<th style="text-align:center">优先级</th>
<th style="text-align:center">结合方向</th>
<th style="text-align:center">运算符</th>
<th style="text-align:center">附加信息</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">无结合</td>
<td style="text-align:center">clone、new</td>
<td style="text-align:center">clone 和 new</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">从右向左</td>
<td style="text-align:center">**</td>
<td style="text-align:center">算术运算符</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">从右向左</td>
<td style="text-align:center">++、--、~、(int)、(float)、(string)、(array)、(object)、(bool)、@</td>
<td style="text-align:center">类型、递增／递减、错误控制</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">无结合</td>
<td style="text-align:center">instanceof</td>
<td style="text-align:center">类型</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">从右向左</td>
<td style="text-align:center">!</td>
<td style="text-align:center">逻辑运算符</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">从左向右</td>
<td style="text-align:center">*、/、%</td>
<td style="text-align:center">算术运算符</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">从左向右</td>
<td style="text-align:center">+、-、.</td>
<td style="text-align:center">算术运算符和字符串运算符</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">从左向右</td>
<td style="text-align:center">&lt;&lt;、&gt;&gt;</td>
<td style="text-align:center">位运算符</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center">无结合</td>
<td style="text-align:center">&lt;、&lt;=、&gt;、&gt;=</td>
<td style="text-align:center">比较运算符</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center">无结合</td>
<td style="text-align:center"><mark>、!=、</mark>=、!==、&lt;&gt;、&lt;=&gt;</td>
<td style="text-align:center">比较运算符</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:center">从左向右</td>
<td style="text-align:center">&amp;</td>
<td style="text-align:center">位运算符和引用</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:center">从左向右</td>
<td style="text-align:center">^</td>
<td style="text-align:center">位运算符</td>
</tr>
<tr>
<td style="text-align:center">13</td>
<td style="text-align:center">从左向右</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">14</td>
<td style="text-align:center">从左向右</td>
<td style="text-align:center">&amp;&amp;</td>
<td style="text-align:center">逻辑运算符</td>
</tr>
<tr>
<td style="text-align:center">15</td>
<td style="text-align:center">从左向右</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">16</td>
<td style="text-align:center">从右向左</td>
<td style="text-align:center">??</td>
<td style="text-align:center">null 合并运算符</td>
</tr>
<tr>
<td style="text-align:center">17</td>
<td style="text-align:center">从左向右</td>
<td style="text-align:center">? :</td>
<td style="text-align:center">三元运算符</td>
</tr>
<tr>
<td style="text-align:center">18</td>
<td style="text-align:center">从右向左</td>
<td style="text-align:center">=、+=、-=、*=、**=、/=、.=、%=、&amp;=、</td>
<td style="text-align:center">=、^=、&lt;&lt;=、&gt;&gt;=</td>
</tr>
<tr>
<td style="text-align:center">19</td>
<td style="text-align:center">从左向右</td>
<td style="text-align:center">and</td>
<td style="text-align:center">逻辑运算符</td>
</tr>
<tr>
<td style="text-align:center">20</td>
<td style="text-align:center">从左向右</td>
<td style="text-align:center">xor</td>
<td style="text-align:center">逻辑运算符</td>
</tr>
<tr>
<td style="text-align:center">21</td>
<td style="text-align:center">从左向右</td>
<td style="text-align:center">or</td>
<td style="text-align:center">逻辑运算符</td>
</tr>
</tbody>
</table>
<h1>流程控制</h1>
<pre data-syntax="php"><code class="lang-php hljs raw">if (判断条件 1) {
    语句块 1;
} else if (判断条件 2) {
    语句块 2;
......
else{
    语句块 ;
}


switch(表达式){
    case 值 1:
        语句块 1;
        break;
    ... ...
    case 值 n:
        语句块 n;
        break;
    default:
        语句块 n+1;
}


while (表达式) {
    语句块;
}

do {
    语句块;
} while (表达式);

for (初始化表达式; 条件判断; 变量更新) {
    循环体;
}


foreach (array_expression as $value){
    statement
}

foreach (array_expression as $key =&gt; $value){
    statement
}

</code></pre>
<ul>
<li>
<p>break</p>
</li>
<li>
<p>continue</p>
</li>
<li>
<p>goto lable</p>
</li>
</ul>
<p>文件包含</p>
<ul>
<li>
<p>include ‘’</p>
</li>
<li>
<p>require ‘’</p>
</li>
<li>
<p>include_once</p>
</li>
<li>
<p>require_onc</p>
</li>
</ul>
<h1>函数</h1>
<pre data-syntax="php"><code class="lang-php hljs raw">function 函数名 (参数1, 参数2, ..., 参数n){
    函数体;
    return 返回值;
}

</code></pre>
<ul>
<li>
<p>传值</p>
</li>
<li>
<p>传引用&amp;</p>
</li>
<li>
<p>默认值</p>
</li>
<li>
<p>可变长度参数（...）</p>
</li>
</ul>
<p>匿名函数（Anonymous functions）</p>
<pre data-syntax="php"><code class="lang-php hljs raw">function (参数列表) {
    ...
}

</code></pre>
<p>可变函数（变量函数）：如果一个变量名后有小括号( )，那么 PHP 就会寻找与变量值同名的函数并执行它。</p>
<pre data-syntax="php"><code class="lang-php hljs raw">&lt;?php
    function title($string){
        echo $string;
    }
   
    $funcname = 'title';
    $funcname('PHP');
?&gt;

</code></pre>
<h1>OOP</h1>
<p><strong>定义</strong></p>
<pre data-syntax="php"><code class="lang-php hljs raw">[修饰类的关键字 abstract | final] class 类名 [ extends 父类名] {     # 单继承
    类的属性和方法;
    [
    $this -&gt; 成员属性;
    $this -&gt; 成员方法(参数列表);
    ]
    
    [
    # 构造函数
    public function __construct(参数列表){
    ... ...
    }
    
    # 析构函数
    public function __destruct(){
    ... ...
    }
    
    ]
    
    
}

# 实例化
变量名 = new 类名(参数数列表);
或
变量名 = new 类名;

克隆对象名称 = clone 原对象名称;

对象名 instanceof 类名;

</code></pre>
<p>访问权限修饰符</p>
<ul>
<li>
<p>public：公共的，在类的内部、子类中或者类的外部都可以使用，不受限制；</p>
</li>
<li>
<p>protected：受保护的，在类的内部和子类中可以使用，但不能在类的外部使用；</p>
</li>
<li>
<p>private：私有的，只能在类的内部使用，在类的外部或子类中都无法使用。</p>
</li>
</ul>
<pre data-syntax="php"><code class="lang-php hljs raw">&lt;?php
    class Students{
        var $name;
        public $age;
        private $sex;
        public static $school;
        public function Write(string $a, int $b):bool{
           
        }
        protected static function Read(string $str):int{
        }
        function Listen(int $num):bool{
        }
    }
    
    
    $student = new Students();
    $student -&gt; name = '中文';
    echo $student -&gt; name.'&lt;br&gt;';
    $student -&gt; Listen(1);
?&gt;



</code></pre>
<table>
<thead>
<tr>
<th style="text-align:center">魔术方法</th>
<th style="text-align:center">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">__construct()</td>
<td style="text-align:center">实例化类时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__destruct()</td>
<td style="text-align:center">类对象使用结束时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__set()</td>
<td style="text-align:center">在给未定义的属性赋值时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__get()</td>
<td style="text-align:center">调用未定义的属性时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__isset()</td>
<td style="text-align:center">使用 isset() 或 empty() 函数时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__unset()</td>
<td style="text-align:center">使用 unset() 时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__sleep()</td>
<td style="text-align:center">使用 serialize 序列化时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__wakeup()</td>
<td style="text-align:center">使用 unserialize 反序列化时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__call()</td>
<td style="text-align:center">调用一个不存在的方法时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__callStatic()</td>
<td style="text-align:center">调用一个不存在的静态方法时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__toString()</td>
<td style="text-align:center">把对象转换成字符串时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__invoke()</td>
<td style="text-align:center">当尝试把对象当方法调用时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__set_state()</td>
<td style="text-align:center">当使用 var_export() 函数时自动调用，接受一个数组参数</td>
</tr>
<tr>
<td style="text-align:center">__clone()</td>
<td style="text-align:center">当使用 clone 复制一个对象时自动调用</td>
</tr>
<tr>
<td style="text-align:center">__debugInfo()</td>
<td style="text-align:center">使用 var_dump() 打印对象信息时自动调用</td>
</tr>
</tbody>
</table>
<p><strong>接口</strong></p>
<pre data-syntax="php"><code class="lang-php hljs raw">interface 接口名称{
    // 常量成员
    // 抽象方法
}

class 类名 extends 父类名 implements 接口一, 接口二, ..., 接口 n {
    // 实现所有接口中的抽象方法
}

</code></pre>
<h1>会话控制</h1>
<h2>Cookies</h2>
<p>setcookie(string $name [, string $value = "" [, int $expire = 0 [, string $path = "" [, string $domain = "" [, bool $secure = false [, bool $httponly = false ]]]]]])</p>
<ul>
<li>
<p>$name：设置 Cookie 的名称；</p>
</li>
<li>
<p>$value：可选参数，用来设置 Cookie 的值。可以通过 <div data-type="math" data-display="inline" data-text="_COOKIE%5B'"></div>name'] 的形式来获取 $value 的值；</p>
</li>
<li>
<p>$expire：可选参数，用来设置 Cookie 的过期时间，这个时间是 Unix 时间戳的形式。如果设置成零或者忽略该参数，Cookie 会在会话结束时过期（也就是关掉浏览器时）；</p>
</li>
<li>
<p>$path：可选参数，用来设置 Cookie 有效的服务器路径。 设置成 '/' 时，Cookie 对整个域名 $domain 有效。</p>
</li>
<li>
<p>$domain：可选参数，用来设置 Cookie 的有效域名/子域名。</p>
</li>
<li>
<p>$secure：可选参数，用来设置这个 Cookie 是否仅仅通过安全的 HTTPS 连接传给客户端。</p>
</li>
<li>
<p>$httponly：可选参数，设置成 TRUE 时，Cookie 仅可通过 HTTP 协议访问，也就是说 Cookie 无法通过类似 JavaScript 这样的脚本语言访问。设置该参数可以有效的减少受到 XSS 攻击的风险。</p>
</li>
</ul>
<p>获取Cookie值</p>
<pre data-syntax="php"><code class="lang-php hljs raw">&lt;?php
    if(!isset($_COOKIE['time'])){                           //检测 Cookie 文件是否存在
        setcookie('time',date('Y-m-d H:i:s'));              //设置一个 Cookie 变量
        echo "第一次访问&lt;br&gt;";
    }else{
        echo "上次访问的时间为：".$_COOKIE['time'].'&lt;br&gt;';    //输出上次访问网站的时间
        setcookie('time',date('Y-m-d H:i:s'),time()+60);      //设置保存 Cookie 失效的时间的变量
    }
    echo "本次访问的时间为：".date('Y-m-d H:i:s');            //输出当前的访问时间
?&gt;

</code></pre>
<p>使用 setcookie() 函数将 Cookie 的值（也就是第二个参数）设置为空</p>
<h2>Session</h2>
<p>session_start ([array $options = array()])</p>
<h1>异常处理（Exception）</h1>
<p>Throwable</p>
<p>├─ Error</p>
<p>│    ├─ ArithmeticError</p>
<p>│    │     └─ DivisionByZeroError</p>
<p>│    ├─ AssertionError</p>
<p>│    ├─ CompileError</p>
<p>│    │    └─ ParseError</p>
<p>│    └─ TypeError</p>
<p>│           └─ ArgumentCountError</p>
<p>└─ Exception</p>
<pre><code>     └─ ...（各种 Exception 的子类）
</code></pre>
<p>异常处理类——Exception</p>
<ul>
<li>
<p>getMessage()：返回异常的消息内容；</p>
</li>
<li>
<p>getCode()：以数字形式返回异常代码；</p>
</li>
<li>
<p>getFile()：返回发生异常的文件名；</p>
</li>
<li>
<p>getLine()：返回发生错误的代码行号；</p>
</li>
<li>
<p>getTrace()：返回 backtrace() 数组；</p>
</li>
<li>
<p>getTraceAsString()：返回已格式化成字符串的、由函数 getTrace() 函数所产生的信息；</p>
</li>
<li>
<p>__toString()：产生异常的字符串信息，它可以重载。注意，该函数最前部是两个下划线。</p>
</li>
</ul>
<p>捕获错误</p>
<pre data-syntax="php"><code class="lang-php hljs raw">try{
    // 可能出现异常或错误的代码，比如文件操作、数据库操作等
}catch(Exception $e){    // $e 为一个异常类的对象
    // 输出错误信息
[throw]
}

</code></pre>
<p>错误类型</p>
<table>
<thead>
<tr>
<th style="text-align:center">值</th>
<th style="text-align:center">常量</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">E_ERROR</td>
<td style="text-align:center">致命的运行时错误，一般是不可恢复的情况，例如内存分配导致的问题，后果是导致脚本终止、不再继续运行。</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">E_WARNING</td>
<td style="text-align:center">运行时警告（非致命错误），仅给出提示信息，但是脚本不会终止运行。</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">E_PARSE</td>
<td style="text-align:center">编译时语法解析错误，仅由分析器产生。</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">E_NOTICE</td>
<td style="text-align:center">运行时通知，表示脚本遇到可能会表现为错误的情况，但是在可以正常运行的脚本里面也可能会有类似的通知。</td>
</tr>
<tr>
<td style="text-align:center">16</td>
<td style="text-align:center">E_CORE_ERROR</td>
<td style="text-align:center">在 PHP 初始化启动过程中发生的致命错误，类似 E_ERROR，但是是由 PHP 引擎核心产生的。</td>
</tr>
<tr>
<td style="text-align:center">32</td>
<td style="text-align:center">E_CORE_WARNING</td>
<td style="text-align:center">PHP 初始化启动过程中发生的警告（非致命错误），类似 E_WARNING ，但是是由 PHP 引擎核心产生的。</td>
</tr>
<tr>
<td style="text-align:center">64</td>
<td style="text-align:center">E_COMPILE_ERROR</td>
<td style="text-align:center">致命编译时错误，类似 E_ERROR，但是是由 Zend 脚本引擎产生的。</td>
</tr>
<tr>
<td style="text-align:center">128</td>
<td style="text-align:center">E_COMPILE_WARNING</td>
<td style="text-align:center">编译时警告（非致命错误），类似 E_WARNING，但是是由 Zend 脚本引擎产生的。</td>
</tr>
<tr>
<td style="text-align:center">256</td>
<td style="text-align:center">E_USER_ERROR</td>
<td style="text-align:center">用户产生的错误信息，类似 E_ERROR，但是是由用户自己在代码中使用 PHP 函数 trigger_error() 来产生的。</td>
</tr>
<tr>
<td style="text-align:center">512</td>
<td style="text-align:center">E_USER_WARNING</td>
<td style="text-align:center">用户产生的警告信息，类似 E_WARNING，但是是由用户自己在代码中使用 PHP 函数 trigger_error() 来产生的。</td>
</tr>
<tr>
<td style="text-align:center">1024</td>
<td style="text-align:center">E_USER_NOTICE</td>
<td style="text-align:center">用户产生的通知信息，类似 E_NOTICE，但是是由用户自己在代码中使用 PHP 函数 trigger_error() 来产生的。</td>
</tr>
<tr>
<td style="text-align:center">1024</td>
<td style="text-align:center">E_STRICT</td>
<td style="text-align:center">启用 PHP 对代码的修改建议，以确保代码具有最佳的互操作性和向前兼容性。</td>
</tr>
<tr>
<td style="text-align:center">2048</td>
<td style="text-align:center">E_RECOVERABLE_ERROR</td>
<td style="text-align:center">可被捕捉的致命错误，表示发生了一个可能非常危险的错误，但是还没有导致 PHP 引擎处于不稳定的状态。如果该错误没有被用户自定义句柄捕获，将成为一个 E_ERROR，从而使脚本终止运行。</td>
</tr>
<tr>
<td style="text-align:center">8192</td>
<td style="text-align:center">E_DEPRECATED</td>
<td style="text-align:center">运行时通知，启用后将会对在未来版本中可能无法正常工作的代码给出警告。</td>
</tr>
<tr>
<td style="text-align:center">16384</td>
<td style="text-align:center">E_USER_DEPRECATED</td>
<td style="text-align:center">用户产生的警告信息，类似 E_DEPRECATED，但是是由用户自己在代码中使用 PHP 函数 trigger_error() 来产生的。</td>
</tr>
<tr>
<td style="text-align:center">30719</td>
<td style="text-align:center">E_ALL</td>
<td style="text-align:center">E_STRICT 除外的所有错误和警告信息。</td>
</tr>
</tbody>
</table>
<h1>IO</h1>
<h1>内置函数</h1>
<h2>Math</h2>
<table>
<thead>
<tr>
<th style="text-align:center">函数</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_abs.asp" target="_blank">abs()</a></td>
<td style="text-align:center">绝对值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_acos.asp" target="_blank">acos()</a></td>
<td style="text-align:center">反余弦。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_acosh.asp" target="_blank">acosh()</a></td>
<td style="text-align:center">反双曲余弦。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_asin.asp" target="_blank">asin()</a></td>
<td style="text-align:center">反正弦。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_asinh.asp" target="_blank">asinh()</a></td>
<td style="text-align:center">反双曲正弦。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_atan.asp" target="_blank">atan()</a></td>
<td style="text-align:center">反正切。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_atan.asp" target="_blank">atan2()</a></td>
<td style="text-align:center">两个参数的反正切。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_atanh.asp" target="_blank">atanh()</a></td>
<td style="text-align:center">反双曲正切。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_base_convert.asp" target="_blank">base_convert()</a></td>
<td style="text-align:center">在任意进制之间转换数字。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_bindec.asp" target="_blank">bindec()</a></td>
<td style="text-align:center">把二进制转换为十进制。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_ceil.asp" target="_blank">ceil()</a></td>
<td style="text-align:center">向上舍入为最接近的整数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_cos.asp" target="_blank">cos()</a></td>
<td style="text-align:center">余弦。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_cosh.asp" target="_blank">cosh()</a></td>
<td style="text-align:center">双曲余弦。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_decbin.asp" target="_blank">decbin()</a></td>
<td style="text-align:center">把十进制转换为二进制。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_dechex.asp" target="_blank">dechex()</a></td>
<td style="text-align:center">把十进制转换为十六进制。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_decoct.asp" target="_blank">decoct()</a></td>
<td style="text-align:center">把十进制转换为八进制。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_deg2rad.asp" target="_blank">deg2rad()</a></td>
<td style="text-align:center">将角度转换为弧度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_exp.asp" target="_blank">exp()</a></td>
<td style="text-align:center">返回 Ex 的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_expm1.asp" target="_blank">expm1()</a></td>
<td style="text-align:center">返回 Ex - 1 的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_floor.asp" target="_blank">floor()</a></td>
<td style="text-align:center">向下舍入为最接近的整数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_fmod.asp" target="_blank">fmod()</a></td>
<td style="text-align:center">返回除法的浮点数余数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_getrandmax.asp" target="_blank">getrandmax()</a></td>
<td style="text-align:center">显示随机数最大的可能值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_hexdec.asp" target="_blank">hexdec()</a></td>
<td style="text-align:center">把十六进制转换为十进制。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_hypot.asp" target="_blank">hypot()</a></td>
<td style="text-align:center">计算直角三角形的斜边长度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_is_finite.asp" target="_blank">is_finite()</a></td>
<td style="text-align:center">判断是否为有限值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_is_infinite.asp" target="_blank">is_infinite()</a></td>
<td style="text-align:center">判断是否为无限值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_is_nan.asp" target="_blank">is_nan()</a></td>
<td style="text-align:center">判断是否为合法数值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_lcg_value.asp" target="_blank">lcg_value()</a></td>
<td style="text-align:center">返回范围为 (0, 1) 的一个伪随机数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_log.asp" target="_blank">log()</a></td>
<td style="text-align:center">自然对数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_log10.asp" target="_blank">log10()</a></td>
<td style="text-align:center">以 10 为底的对数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_log1p.asp" target="_blank">log1p()</a></td>
<td style="text-align:center">返回 log(1 + number)。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_max.asp" target="_blank">max()</a></td>
<td style="text-align:center">返回最大值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_min.asp" target="_blank">min()</a></td>
<td style="text-align:center">返回最小值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_mt_getrandmax.asp" target="_blank">mt_getrandmax()</a></td>
<td style="text-align:center">显示随机数的最大可能值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_mt_rand.asp" target="_blank">mt_rand()</a></td>
<td style="text-align:center">使用 Mersenne Twister 算法返回随机整数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_mt_srand.asp" target="_blank">mt_srand()</a></td>
<td style="text-align:center">播种 Mersenne Twister 随机数生成器。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_octdec.asp" target="_blank">octdec()</a></td>
<td style="text-align:center">把八进制转换为十进制。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_pi.asp" target="_blank">pi()</a></td>
<td style="text-align:center">返回圆周率的值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_pow.asp" target="_blank">pow()</a></td>
<td style="text-align:center">返回 x 的 y 次方。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_rad2deg.asp" target="_blank">rad2deg()</a></td>
<td style="text-align:center">把弧度数转换为角度数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_rand.asp" target="_blank">rand()</a></td>
<td style="text-align:center">返回随机整数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_round.asp" target="_blank">round()</a></td>
<td style="text-align:center">对浮点数进行四舍五入。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_sin.asp" target="_blank">sin()</a></td>
<td style="text-align:center">正弦。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_sinh.asp" target="_blank">sinh()</a></td>
<td style="text-align:center">双曲正弦。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_sqrt.asp" target="_blank">sqrt()</a></td>
<td style="text-align:center">平方根。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_srand.asp" target="_blank">srand()</a></td>
<td style="text-align:center">播下随机数发生器种子。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_tan.asp" target="_blank">tan()</a></td>
<td style="text-align:center">正切。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_math_tanh.asp" target="_blank">tanh()</a></td>
<td style="text-align:center">双曲正切。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">常量名</th>
<th style="text-align:center">常量名</th>
<th style="text-align:center">常量值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">M_E</td>
<td style="text-align:center">e</td>
<td style="text-align:center">2.7182818284590452354</td>
</tr>
<tr>
<td style="text-align:center">M_EULER</td>
<td style="text-align:center">Euler 常量</td>
<td style="text-align:center">0.57721566490153286061</td>
</tr>
<tr>
<td style="text-align:center">M_LNPI</td>
<td style="text-align:center">log_e(pi)</td>
<td style="text-align:center">1.14472988584940017414</td>
</tr>
<tr>
<td style="text-align:center">M_LN2</td>
<td style="text-align:center">log_e 2</td>
<td style="text-align:center">0.69314718055994530942</td>
</tr>
<tr>
<td style="text-align:center">M_LN10</td>
<td style="text-align:center">log_e 10</td>
<td style="text-align:center">2.30258509299404568402</td>
</tr>
<tr>
<td style="text-align:center">M_LOG2E</td>
<td style="text-align:center">log_2 e</td>
<td style="text-align:center">1.4426950408889634074</td>
</tr>
<tr>
<td style="text-align:center">M_LOG10E</td>
<td style="text-align:center">log_10 e</td>
<td style="text-align:center">0.43429448190325182765</td>
</tr>
<tr>
<td style="text-align:center">M_PI</td>
<td style="text-align:center">Pi</td>
<td style="text-align:center">3.14159265358979323846</td>
</tr>
<tr>
<td style="text-align:center">M_PI_2</td>
<td style="text-align:center">pi/2</td>
<td style="text-align:center">1.57079632679489661923</td>
</tr>
<tr>
<td style="text-align:center">M_PI_4</td>
<td style="text-align:center">pi/4</td>
<td style="text-align:center">0.78539816339744830962</td>
</tr>
<tr>
<td style="text-align:center">M_1_PI</td>
<td style="text-align:center">1/pi</td>
<td style="text-align:center">0.31830988618379067154</td>
</tr>
<tr>
<td style="text-align:center">M_2_PI</td>
<td style="text-align:center">2/pi</td>
<td style="text-align:center">0.63661977236758134308</td>
</tr>
<tr>
<td style="text-align:center">M_SQRTPI</td>
<td style="text-align:center">sqrt(pi)</td>
<td style="text-align:center">1.77245385090551602729</td>
</tr>
<tr>
<td style="text-align:center">M_2_SQRTPI</td>
<td style="text-align:center">2/sqrt(pi)</td>
<td style="text-align:center">1.12837916709551257390</td>
</tr>
<tr>
<td style="text-align:center">M_SQRT1_2</td>
<td style="text-align:center">1/sqrt(2)</td>
<td style="text-align:center">0.70710678118654752440</td>
</tr>
<tr>
<td style="text-align:center">M_SQRT2</td>
<td style="text-align:center">sqrt(2)</td>
<td style="text-align:center">1.41421356237309504880</td>
</tr>
<tr>
<td style="text-align:center">M_SQRT3</td>
<td style="text-align:center">sqrt(3)</td>
<td style="text-align:center">1.73205080756887729352</td>
</tr>
</tbody>
</table>
<h2>Date / Time</h2>
<p>Runtime 配置</p>
<p>Date/Time 函数的行为受到 php.ini 中设置的影响</p>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:center">描述</th>
<th style="text-align:center">默认</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">date.timezone</td>
<td style="text-align:center">默认时区（所有的 Date/Time 函数使用该选项）</td>
<td style="text-align:center">""</td>
</tr>
<tr>
<td style="text-align:center">date.default_latitude</td>
<td style="text-align:center">默认纬度（date_sunrise() 和 date_sunset() 使用该选项）</td>
<td style="text-align:center">"31.7667"</td>
</tr>
<tr>
<td style="text-align:center">date.default_longitude</td>
<td style="text-align:center">默认经度（date_sunrise() 和 date_sunset() 使用该选项）</td>
<td style="text-align:center">"35.2333"</td>
</tr>
<tr>
<td style="text-align:center">date.sunrise_zenith</td>
<td style="text-align:center">默认日出天顶（date_sunrise() 和 date_sunset() 使用该选项）</td>
<td style="text-align:center">"90.83"</td>
</tr>
<tr>
<td style="text-align:center">date.sunset_zenith</td>
<td style="text-align:center">默认日落天顶（date_sunrise() 和 date_sunset() 使用该选项）</td>
<td style="text-align:center">"90.83"</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">函数</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_checkdate.asp" target="_blank">checkdate()</a></td>
<td style="text-align:center">验证格利高里日期。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_date_add.asp" target="_blank">date_add()</a></td>
<td style="text-align:center">添加日、月、年、时、分和秒到日期。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_create_from_format.asp" target="_blank">date_create_from_format()</a></td>
<td style="text-align:center">返回根据指定格式进行格式化的新的 DateTime 对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_date_create.asp" target="_blank">date_create()</a></td>
<td style="text-align:center">返回新的 DateTime 对象。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_date_set.asp" target="_blank">date_date_set()</a></td>
<td style="text-align:center">设置新日期。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_default_timezone_get.asp" target="_blank">date_default_timezone_get()</a></td>
<td style="text-align:center">返回由所有的 Date/Time 函数使用的默认时区。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_default_timezone_set.asp" target="_blank">date_default_timezone_set()</a></td>
<td style="text-align:center">设置由所有的 Date/Time 函数使用的默认时区。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_date_diff.asp" target="_blank">date_diff()</a></td>
<td style="text-align:center">返回两个日期间的差值。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_date_format.asp" target="_blank">date_format()</a></td>
<td style="text-align:center">返回根据指定格式进行格式化的日期。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_get_last_errors.asp" target="_blank">date_get_last_errors()</a></td>
<td style="text-align:center">返回日期字符串中的警告/错误。</td>
</tr>
<tr>
<td style="text-align:center">date_interval_create_from_date_string()</td>
<td style="text-align:center">从字符串的相关部分建立 DateInterval。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_interval_format.asp" target="_blank">date_interval_format()</a></td>
<td style="text-align:center">格式化时间间隔。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_isodate_set.asp" target="_blank">date_isodate_set()</a></td>
<td style="text-align:center">设置 ISO 日期。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_modify.asp" target="_blank">date_modify()</a></td>
<td style="text-align:center">修改时间戳。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_offset_get.asp" target="_blank">date_offset_get()</a></td>
<td style="text-align:center">返回时区偏移。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_parse_from_format.asp" target="_blank">date_parse_from_format()</a></td>
<td style="text-align:center">根据指定的格式返回带有关于指定日期的详细信息的关联数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_date_parse.asp" target="_blank">date_parse()</a></td>
<td style="text-align:center">返回带有关于指定日期的详细信息的关联数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_date_sub.asp" target="_blank">date_sub()</a></td>
<td style="text-align:center">从指定日期减去日、月、年、时、分和秒。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_sun_info.asp" target="_blank">date_sun_info()</a></td>
<td style="text-align:center">返回包含有关指定日期与地点的日出/日落和黄昏开始/黄昏结束的信息的数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_sunrise.asp" target="_blank">date_sunrise()</a></td>
<td style="text-align:center">返回指定日期与位置的日出时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_sunset.asp" target="_blank">date_sunset()</a></td>
<td style="text-align:center">返回指定日期与位置的日落时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_time_set.asp" target="_blank">date_time_set()</a></td>
<td style="text-align:center">设置时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_timestamp_get.asp" target="_blank">date_timestamp_get()</a></td>
<td style="text-align:center">返回 Unix 时间戳。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_timestamp_set.asp" target="_blank">date_timestamp_set()</a></td>
<td style="text-align:center">设置基于 Unix 时间戳的日期和时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_timezone_get.asp" target="_blank">date_timezone_get()</a></td>
<td style="text-align:center">返回给定 DateTime 对象的时区。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_timezone_set.asp" target="_blank">date_timezone_set()</a></td>
<td style="text-align:center">设置 DateTime 对象的时区。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_date.asp" target="_blank">date()</a></td>
<td style="text-align:center">格式化本地日期和时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_getdate.asp" target="_blank">getdate()</a></td>
<td style="text-align:center">返回某个时间戳或者当前本地的日期/时间的日期/时间信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_gettimeofday.asp" target="_blank">gettimeofday()</a></td>
<td style="text-align:center">返回当前时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_gmdate.asp" target="_blank">gmdate()</a></td>
<td style="text-align:center">格式化 GMT/UTC 日期和时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_gmmktime.asp" target="_blank">gmmktime()</a></td>
<td style="text-align:center">返回 GMT 日期的 UNIX 时间戳。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_gmstrftime.asp" target="_blank">gmstrftime()</a></td>
<td style="text-align:center">根据区域设置对 GMT/UTC 日期和时间进行格式化。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_idate.asp" target="_blank">idate()</a></td>
<td style="text-align:center">将本地时间/日期格式化为整数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_localtime.asp" target="_blank">localtime()</a></td>
<td style="text-align:center">返回本地时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_microtime.asp" target="_blank">microtime()</a></td>
<td style="text-align:center">返回当前时间的微秒数。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_mktime.asp" target="_blank">mktime()</a></td>
<td style="text-align:center">返回日期的 Unix 时间戳。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_strftime.asp" target="_blank">strftime()</a></td>
<td style="text-align:center">根据区域设置对本地时间/日期进行格式化。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_strptime.asp" target="_blank">strptime()</a></td>
<td style="text-align:center">解析由 strftime() 生成的时间/日期。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_strtotime.asp" target="_blank">strtotime()</a></td>
<td style="text-align:center">将任何英文文本的日期或时间描述解析为 Unix 时间戳。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_time.asp" target="_blank">time()</a></td>
<td style="text-align:center">返回当前时间的 Unix 时间戳。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_timezone_abbreviations_list.asp" target="_blank">timezone_abbreviations_list()</a></td>
<td style="text-align:center">返回包含夏令时、偏移量和时区名称的关联数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_timezone_identifiers_list.asp" target="_blank">timezone_identifiers_list()</a></td>
<td style="text-align:center">返回带有所有时区标识符的索引数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_timezone_location_get.asp" target="_blank">timezone_location_get()</a></td>
<td style="text-align:center">返回指定时区的位置信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_timezone_name_from_abbr.asp" target="_blank">timezone_name_from_abbr()</a></td>
<td style="text-align:center">根据时区缩略语返回时区名称。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_timezone_name_get.asp" target="_blank">timezone_name_get()</a></td>
<td style="text-align:center">返回时区的名称。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_timezone_offset_get.asp" target="_blank">timezone_offset_get()</a></td>
<td style="text-align:center">返回相对于 GMT 的时区偏移。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_timezone_open.asp" target="_blank">timezone_open()</a></td>
<td style="text-align:center">创建新的 DateTimeZone 对象。</td>
</tr>
<tr>
<td style="text-align:center">timezone_transitions_get()</td>
<td style="text-align:center">返回时区的所有转换。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_date_timezone_version_get.asp" target="_blank">timezone_version_get()</a></td>
<td style="text-align:center">返回时区数据库的版本。</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">常量</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">DATE_ATOM</td>
<td style="text-align:center">Atom （例如：2005-08-15T16:13:03+0000）</td>
</tr>
<tr>
<td style="text-align:center">DATE_COOKIE</td>
<td style="text-align:center">HTTP Cookies （例如：Sun, 14 Aug 2005 16:13:03 UTC）</td>
</tr>
<tr>
<td style="text-align:center">DATE_ISO8601</td>
<td style="text-align:center">ISO-8601 （例如：2005-08-14T16:13:03+0000）</td>
</tr>
<tr>
<td style="text-align:center">DATE_RFC822</td>
<td style="text-align:center">RFC 822 （例如：Sun, 14 Aug 2005 16:13:03 UTC）</td>
</tr>
<tr>
<td style="text-align:center">DATE_RFC850</td>
<td style="text-align:center">RFC 850 （例如：Sunday, 14-Aug-05 16:13:03 UTC）</td>
</tr>
<tr>
<td style="text-align:center">DATE_RFC1036</td>
<td style="text-align:center">RFC 1036 （例如：Sunday, 14-Aug-05 16:13:03 UTC）</td>
</tr>
<tr>
<td style="text-align:center">DATE_RFC1123</td>
<td style="text-align:center">RFC 1123 （例如：Sun, 14 Aug 2005 16:13:03 UTC）</td>
</tr>
<tr>
<td style="text-align:center">DATE_RFC2822</td>
<td style="text-align:center">RFC 2822 （Sun, 14 Aug 2005 16:13:03 +0000）</td>
</tr>
<tr>
<td style="text-align:center">DATE_RSS</td>
<td style="text-align:center">RSS （Sun, 14 Aug 2005 16:13:03 UTC）</td>
</tr>
<tr>
<td style="text-align:center">DATE_W3C</td>
<td style="text-align:center">World Wide Web Consortium （例如： 2005-08-14T16:13:03+0000）</td>
</tr>
</tbody>
</table>
<h2>Directory</h2>
<table>
<thead>
<tr>
<th style="text-align:center">函数</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_directory_chdir.asp" target="_blank">chdir()</a></td>
<td style="text-align:center">改变当前的目录。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_directory_chroot.asp" target="_blank">chroot()</a></td>
<td style="text-align:center">改变根目录。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_directory_closedir.asp" target="_blank">closedir()</a></td>
<td style="text-align:center">关闭目录句柄。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_directory_dir.asp" target="_blank">dir()</a></td>
<td style="text-align:center">返回 Directory 类的实例。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_directory_getcwd.asp" target="_blank">getcwd()</a></td>
<td style="text-align:center">返回当前工作目录。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_directory_opendir.asp" target="_blank">opendir()</a></td>
<td style="text-align:center">打开目录句柄。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_directory_readdir.asp" target="_blank">readdir()</a></td>
<td style="text-align:center">返回目录句柄中的条目。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_directory_rewinddir.asp" target="_blank">rewinddir()</a></td>
<td style="text-align:center">重置目录句柄。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_directory_scandir.asp" target="_blank">scandir()</a></td>
<td style="text-align:center">返回指定目录中的文件和目录的数组。</td>
</tr>
</tbody>
</table>
<h2>Filesystem</h2>
<table>
<thead>
<tr>
<th style="text-align:center">函数</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_basename.asp" target="_blank">basename()</a></td>
<td style="text-align:center">返回路径中的文件名部分。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_chgrp.asp" target="_blank">chgrp()</a></td>
<td style="text-align:center">改变文件组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_chmod.asp" target="_blank">chmod()</a></td>
<td style="text-align:center">改变文件模式。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_chown.asp" target="_blank">chown()</a></td>
<td style="text-align:center">改变文件所有者。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_clearstatcache.asp" target="_blank">clearstatcache()</a></td>
<td style="text-align:center">清除文件状态缓存。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_copy.asp" target="_blank">copy()</a></td>
<td style="text-align:center">复制文件。</td>
</tr>
<tr>
<td style="text-align:center">delete()</td>
<td style="text-align:center">参见 <a href="https://www.w3school.com.cn/php/func_filesystem_unlink.asp" target="_blank">unlink() </a>或 unset()。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_dirname.asp" target="_blank">dirname()</a></td>
<td style="text-align:center">返回路径中的目录名称部分。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_disk_free_space.asp" target="_blank">disk_free_space()</a></td>
<td style="text-align:center">返回目录的可用空间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_disk_total_space.asp" target="_blank">disk_total_space()</a></td>
<td style="text-align:center">返回一个目录的磁盘总容量。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_diskfreespace.asp" target="_blank">diskfreespace()</a></td>
<td style="text-align:center">disk_free_space() 的别名。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fclose.asp" target="_blank">fclose()</a></td>
<td style="text-align:center">关闭打开的文件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_feof.asp" target="_blank">feof()</a></td>
<td style="text-align:center">测试文件指针是否到了文件结束的位置。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fflush.asp" target="_blank">fflush()</a></td>
<td style="text-align:center">向打开的文件输出缓冲内容。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fgetc.asp" target="_blank">fgetc()</a></td>
<td style="text-align:center">从打开的文件中返回字符。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fgetcsv.asp" target="_blank">fgetcsv()</a></td>
<td style="text-align:center">从打开的文件中解析一行，校验 CSV 字段。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fgets.asp" target="_blank">fgets()</a></td>
<td style="text-align:center">从打开的文件中返回一行。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fgetss.asp" target="_blank">fgetss()</a></td>
<td style="text-align:center">从打开的文件中读取一行并过滤掉 HTML 和 PHP 标记。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_file.asp" target="_blank">file()</a></td>
<td style="text-align:center">把文件读入一个数组中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_file_exists.asp" target="_blank">file_exists()</a></td>
<td style="text-align:center">检查文件或目录是否存在。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_file_get_contents.asp" target="_blank">file_get_contents()</a></td>
<td style="text-align:center">将文件读入字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_file_put_contents.asp" target="_blank">file_put_contents()</a></td>
<td style="text-align:center">将字符串写入文件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fileatime.asp" target="_blank">fileatime()</a></td>
<td style="text-align:center">返回文件的上次访问时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_filectime.asp" target="_blank">filectime()</a></td>
<td style="text-align:center">返回文件的上次改变时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_filegroup.asp" target="_blank">filegroup()</a></td>
<td style="text-align:center">返回文件的组 ID。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fileinode.asp" target="_blank">fileinode()</a></td>
<td style="text-align:center">返回文件的 inode 编号。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_filemtime.asp" target="_blank">filemtime()</a></td>
<td style="text-align:center">返回文件的上次修改时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fileowner.asp" target="_blank">fileowner()</a></td>
<td style="text-align:center">文件的 user ID （所有者）。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fileperms.asp" target="_blank">fileperms()</a></td>
<td style="text-align:center">返回文件的权限。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_filesize.asp" target="_blank">filesize()</a></td>
<td style="text-align:center">返回文件大小。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_filetype.asp" target="_blank">filetype()</a></td>
<td style="text-align:center">返回文件类型。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_flock.asp" target="_blank">flock()</a></td>
<td style="text-align:center">锁定或释放文件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fnmatch.asp" target="_blank">fnmatch()</a></td>
<td style="text-align:center">根据指定的模式来匹配文件名或字符串。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fopen.asp" target="_blank">fopen()</a></td>
<td style="text-align:center">打开一个文件或 URL。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fpassthru.asp" target="_blank">fpassthru()</a></td>
<td style="text-align:center">从打开的文件中读数据，直到 EOF，并向输出缓冲写结果。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fputcsv.asp" target="_blank">fputcsv()</a></td>
<td style="text-align:center">将行格式化为 CSV 并写入一个打开的文件中。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fputs.asp" target="_blank">fputs()</a></td>
<td style="text-align:center">fwrite() 的别名。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fread.asp" target="_blank">fread()</a></td>
<td style="text-align:center">读取打开的文件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fscanf.asp" target="_blank">fscanf()</a></td>
<td style="text-align:center">根据指定的格式对输入进行解析。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fseek.asp" target="_blank">fseek()</a></td>
<td style="text-align:center">在打开的文件中定位。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fstat.asp" target="_blank">fstat()</a></td>
<td style="text-align:center">返回关于一个打开的文件的信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_ftell.asp" target="_blank">ftell()</a></td>
<td style="text-align:center">返回文件指针的读/写位置</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_ftruncate.asp" target="_blank">ftruncate()</a></td>
<td style="text-align:center">将文件截断到指定的长度。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_fwrite.asp" target="_blank">fwrite()</a></td>
<td style="text-align:center">写入文件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_glob.asp" target="_blank">glob()</a></td>
<td style="text-align:center">返回一个包含匹配指定模式的文件名/目录的数组。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_is_dir.asp" target="_blank">is_dir()</a></td>
<td style="text-align:center">判断指定的文件名是否是一个目录。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_is_executable.asp" target="_blank">is_executable()</a></td>
<td style="text-align:center">判断文件是否可执行。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_is_file.asp" target="_blank">is_file()</a></td>
<td style="text-align:center">判断指定文件是否为常规的文件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_is_link.asp" target="_blank">is_link()</a></td>
<td style="text-align:center">判断指定的文件是否是连接。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_is_readable.asp" target="_blank">is_readable()</a></td>
<td style="text-align:center">判断文件是否可读。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_is_uploaded_file.asp" target="_blank">is_uploaded_file()</a></td>
<td style="text-align:center">判断文件是否是通过 HTTP POST 上传的。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_is_writable.asp" target="_blank">is_writable()</a></td>
<td style="text-align:center">判断文件是否可写。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_is_writeable.asp" target="_blank">is_writeable()</a></td>
<td style="text-align:center">is_writable() 的别名。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_link.asp" target="_blank">link()</a></td>
<td style="text-align:center">创建一个硬连接。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_linkinfo.asp" target="_blank">linkinfo()</a></td>
<td style="text-align:center">返回有关一个硬连接的信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_lstat.asp" target="_blank">lstat()</a></td>
<td style="text-align:center">返回关于文件或符号连接的信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_mkdir.asp" target="_blank">mkdir()</a></td>
<td style="text-align:center">创建目录。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_move_uploaded_file.asp" target="_blank">move_uploaded_file()</a></td>
<td style="text-align:center">将上传的文件移动到新位置。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_parse_ini_file.asp" target="_blank">parse_ini_file()</a></td>
<td style="text-align:center">解析一个配置文件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_pathinfo.asp" target="_blank">pathinfo()</a></td>
<td style="text-align:center">返回关于文件路径的信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_pclose.asp" target="_blank">pclose()</a></td>
<td style="text-align:center">关闭有 popen() 打开的进程。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_popen.asp" target="_blank">popen()</a></td>
<td style="text-align:center">打开一个进程。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_readfile.asp" target="_blank">readfile()</a></td>
<td style="text-align:center">读取一个文件，并输出到输出缓冲。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_readlink.asp" target="_blank">readlink()</a></td>
<td style="text-align:center">返回符号连接的目标。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_realpath.asp" target="_blank">realpath()</a></td>
<td style="text-align:center">返回绝对路径名。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_rename.asp" target="_blank">rename()</a></td>
<td style="text-align:center">重名名文件或目录。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_rewind.asp" target="_blank">rewind()</a></td>
<td style="text-align:center">倒回文件指针的位置。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_rmdir.asp" target="_blank">rmdir()</a></td>
<td style="text-align:center">删除空的目录。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_set_file_buffer.asp" target="_blank">set_file_buffer()</a></td>
<td style="text-align:center">设置已打开文件的缓冲大小。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_stat.asp" target="_blank">stat()</a></td>
<td style="text-align:center">返回关于文件的信息。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_symlink.asp" target="_blank">symlink()</a></td>
<td style="text-align:center">创建符号连接。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_tempnam.asp" target="_blank">tempnam()</a></td>
<td style="text-align:center">创建唯一的临时文件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_tmpfile.asp" target="_blank">tmpfile()</a></td>
<td style="text-align:center">建立临时文件。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_touch.asp" target="_blank">touch()</a></td>
<td style="text-align:center">设置文件的访问和修改时间。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_umask.asp" target="_blank">umask()</a></td>
<td style="text-align:center">改变文件的文件权限。</td>
</tr>
<tr>
<td style="text-align:center"><a href="https://www.w3school.com.cn/php/func_filesystem_unlink.asp" target="_blank">unlink()</a></td>
<td style="text-align:center">删除文件。</td>
</tr>
</tbody>
</table>
