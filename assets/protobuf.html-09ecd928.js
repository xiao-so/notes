import{_ as p,r as o,o as l,c as i,a as n,b as s,d as t,e}from"./app-9157d7b3.js";const c={},d=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),u=n("p",null,"ProtoBuf 是一种轻便高效的二进制序列化数据结构的方法，比 XML 和 JSON 等传统文本数据序列化方案更加轻量，且利于多语言互操作。",-1),r=n("h2",{id:"快速开始",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#快速开始","aria-hidden":"true"},"#"),s(" 快速开始")],-1),k=n("p",null,"下面演示了如何 Java 和 Python 如何通过 protobuf 文件交互数据",-1),m={href:"https://github.com/protocolbuffers/protobuf/releases",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,"加入到环境变量中",-1),b=n("li",null,"编写 search.proto 文件",-1),g=e(`<div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token comment">// 使用 proto3 语法</span>
<span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">package</span> search<span class="token punctuation">;</span>
<span class="token keyword">option</span> java_multiple_files <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">option</span> java_package <span class="token operator">=</span> <span class="token string">&quot;com.github.xiaoso456.search&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">message</span> <span class="token class-name">SearchRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> query <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 查询内容</span>
  <span class="token positional-class-name class-name">PageInfo</span> page <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">PageInfo</span><span class="token punctuation">{</span>
  <span class="token builtin">int32</span> page_number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 总页数</span>
  <span class="token builtin">int32</span> page_size <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>  <span class="token comment">// 页大小</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>使用 <code>protoc --java_out . .\\search.proto</code> 编译到 Java 类</li><li>使用 <code>protoc --python_out . .\\search.proto</code> 编译到 python 模块</li><li>新建一个 maven 工程，引入如下依赖，添加示例代码如下</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.google.protobuf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>protobuf-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.22.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span> 

<span class="token comment">&lt;!--只是为了写出文件方便，非必要--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.hutool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>hutool-all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.8.15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 构造实体类</span>
<span class="token class-name">PageInfo</span> pageInfo <span class="token operator">=</span> <span class="token class-name">PageInfo</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setPageSize</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setPageNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SearchRequest</span> searchRequest <span class="token operator">=</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setQuery</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setPage</span><span class="token punctuation">(</span>pageInfo<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 序列化到文件 searchRequestFile</span>
<span class="token class-name">FileUtil</span><span class="token punctuation">.</span><span class="token function">writeBytes</span><span class="token punctuation">(</span>searchRequest<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;searchRequestFile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 反序列化并打印</span>
<span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> searchRequestBytes <span class="token operator">=</span> <span class="token class-name">FileUtil</span><span class="token punctuation">.</span><span class="token function">readBytes</span><span class="token punctuation">(</span><span class="token string">&quot;searchRequestFile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SearchRequest</span> file <span class="token operator">=</span> <span class="token class-name">SearchRequest</span><span class="token punctuation">.</span><span class="token function">parseFrom</span><span class="token punctuation">(</span>searchRequestBytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query: &quot;hello&quot;
page {
  page_number: 10
  page_size: 2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>新建 python 文件，反序列化 searchRequestFile 文件，并输出</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> search_pb2
filepath <span class="token operator">=</span> <span class="token string">&#39;./searchRequestFile&#39;</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filepath<span class="token punctuation">,</span><span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    data <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    search_empty <span class="token operator">=</span> search_pb2<span class="token punctuation">.</span>SearchRequest<span class="token punctuation">(</span><span class="token punctuation">)</span>
    search_empty<span class="token punctuation">.</span>ParseFromString<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>search_empty<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query: &quot;hello&quot;
page {
  page_number: 10
  page_size: 2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><h3 id="定义包" tabindex="-1"><a class="header-anchor" href="#定义包" aria-hidden="true">#</a> 定义包</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">xxx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="定义消息类型" tabindex="-1"><a class="header-anchor" href="#定义消息类型" aria-hidden="true">#</a> 定义消息类型</h3><p>一个消息使用 <code>message</code> 标记，如下定义了一个名为 SearchRequest 的消息，包含三个字段</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token comment">// 标记 SearchRequest 消息</span>
<span class="token keyword">message</span> <span class="token class-name">SearchRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> query <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">int32</span> page_number <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">int32</span> result_per_page <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消息字段" tabindex="-1"><a class="header-anchor" href="#消息字段" aria-hidden="true">#</a> 消息字段</h3><h4 id="字段类型" tabindex="-1"><a class="header-anchor" href="#字段类型" aria-hidden="true">#</a> 字段类型</h4><p>消息每个字段需要标记类型，类型和各个语言类型映射如下（<code>C#</code>和<code>PHP</code>请参考官网）</p><table><thead><tr><th>.proto Type</th><th>Notes</th><th>C++ Type</th><th>Java/Kotlin Type[1]</th><th>Python Type[3]</th><th>Go Type</th><th>Ruby Type</th></tr></thead><tbody><tr><td>double</td><td></td><td>double</td><td>double</td><td>float</td><td>float64</td><td>Float</td></tr><tr><td>float</td><td></td><td>float</td><td>float</td><td>float</td><td>float32</td><td>Float</td></tr><tr><td>int32</td><td>使用可变长度编码。编码负数效率低下-如果您的字段可能具有负值，请改用 sint32</td><td>int32</td><td>int</td><td>int</td><td>int32</td><td>Fixnum or Bignum (as required)</td></tr><tr><td>int64</td><td>使用可变长度编码。编码负数效率低下-如果您的字段可能具有负值，请改用 sint64</td><td>int64</td><td>long</td><td>int/long[4]</td><td>int64</td><td>Bignum</td></tr><tr><td>uint32</td><td>使用可变长度编码</td><td>uint32</td><td>int[2]</td><td>int/long[4]</td><td>uint32</td><td>Fixnum or Bignum (as required)</td></tr><tr><td>uint64</td><td>使用可变长度编码</td><td>uint64</td><td>long[2]</td><td>int/long[4]</td><td>uint64</td><td>Bignum</td></tr><tr><td>sint32</td><td>使用可变长度编码。带符号的整数值。与常规 int32 相比，它们对负数的编码效率更高。</td><td>int32</td><td>int</td><td>int</td><td>int32</td><td>Fixnum or Bignum (as required)</td></tr><tr><td>sint64</td><td>使用可变长度编码。带符号的整数值。与常规 int64 相比，它们对负数的编码效率更高。</td><td>int64</td><td>long</td><td>int/long[4]</td><td>int64</td><td>Bignum</td></tr><tr><td>fixed32</td><td>总是四个字节。如果值经常大于 2^28，则效率比 uint32 更高。</td><td>uint32</td><td>int[2]</td><td>int/long[4]</td><td>uint32</td><td>Fixnum or Bignum (as required)</td></tr><tr><td>fixed64</td><td>总是八个字节。如果值经常大于 2^56，则效率比 uint64 更高。</td><td>uint64</td><td>long[2]</td><td>int/long[4]</td><td>uint64</td><td>Bignum</td></tr><tr><td>sfixed32</td><td>总为 4 字节</td><td>int32</td><td>int</td><td>int</td><td>int32</td><td>Fixnum or Bignum (as required)</td></tr><tr><td>sfixed64</td><td>总为 8 字节</td><td>int64</td><td>long</td><td>int/long[4]</td><td>int64</td><td>Bignum</td></tr><tr><td>bool</td><td></td><td>bool</td><td>boolean</td><td>bool</td><td>bool</td><td>TrueClass/FalseClass</td></tr><tr><td>string</td><td>字符串必须始终包含 UTF-8 编码或 7 位 ASCII 文本，并且长度不能超过 2^32。</td><td>string</td><td>String</td><td>str/unicode[5]</td><td>string</td><td>String (UTF-8)</td></tr><tr><td>bytes</td><td>可以包含不超过 2^32 的任意字节序列</td><td>string</td><td>ByteString</td><td>str (Python 2) bytes (Python 3)</td><td>[]byte</td><td>String (ASCII-8BIT)</td></tr></tbody></table><h4 id="字段编号" tabindex="-1"><a class="header-anchor" href="#字段编号" aria-hidden="true">#</a> 字段编号</h4><p>每一个字段需要有不同的编号，用于标记字段。</p><p>编号从 1 开始，最大为 2^29</p><p>编号 1~15 会被编码为 1 个字节，16~2047 会被编码为 2 个字节，常用字段应该优先使用 1~15 编号。</p><p>如下 <code>query</code> 字段的编号是 1</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">SearchRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> query <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">int32</span> page_number <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">int32</span> result_per_page <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字段规则" tabindex="-1"><a class="header-anchor" href="#字段规则" aria-hidden="true">#</a> 字段规则</h4><p>消息字段有四种类型：</p>`,26),h=n("li",null,"singular：默认类型，表示有 0 个或 1 个元素，如果设置了值，会把值序列化，如果设置了默认值，不会序列化默认值。",-1),f=n("li",null,"optional：可选的，表示有 0 个或 1 个元素。如果设置了值，会把值序列化，如果设置了默认值，不会序列化默认值。（没懂和 singular 有啥区别）",-1),_=n("li",null,"repeated：表示有 0 个或多个有序元素，类似 list",-1),y={href:"https://protobuf.dev/programming-guides/encoding/#maps",target:"_blank",rel:"noopener noreferrer"},x=e(`<h4 id="保留字段" tabindex="-1"><a class="header-anchor" href="#保留字段" aria-hidden="true">#</a> 保留字段</h4><p>如果通过删除字段更新消息，之后又使用这些被删除字段的编号，容易导致各种文本，因此可以使用 reserved 关键字保留这些编号，不能够使用</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">reserved</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">9</span> <span class="token keyword">to</span> <span class="token number">11</span><span class="token punctuation">;</span> <span class="token comment">// 保留字段编号为 2,15,9~11 的</span>
  <span class="token keyword">reserved</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 保留字段名称为 foo 和 bar 的</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h4><p>如果显示指定的值为默认值，则不会被序列化。也就是说，对于标量字段，无法知道他们是被显式指定了默认值还是没有设置值</p><table><thead><tr><th>类型</th><th>默认值</th><th></th></tr></thead><tbody><tr><td>String</td><td>空字符串</td><td></td></tr><tr><td>byte</td><td>空 byte</td><td></td></tr><tr><td>bool</td><td>false</td><td></td></tr><tr><td>int32 等数值</td><td>0</td><td></td></tr><tr><td>enum</td><td>第一个枚举值，且为 0</td><td></td></tr><tr><td>message</td><td>取决于语言</td><td></td></tr></tbody></table><p>也可以自己定义字段的默认值，以下是简单的示例</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token annotation">default</span> <span class="token operator">=</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token builtin">int32</span> age <span class="token operator">=</span> <span class="token number">2</span> <span class="token punctuation">[</span><span class="token annotation">default</span> <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义枚举" tabindex="-1"><a class="header-anchor" href="#定义枚举" aria-hidden="true">#</a> 定义枚举</h3><p>枚举类型第一个编号必须为 0</p><p>如下，定义了枚举字段 Corpus，并在 message 中使用</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">enum</span> <span class="token class-name">Corpus</span> <span class="token punctuation">{</span>
  CORPUS_UNSPECIFIED <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  CORPUS_UNIVERSAL <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  CORPUS_WEB <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  CORPUS_IMAGES <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  CORPUS_LOCAL <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
  CORPUS_NEWS <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  CORPUS_PRODUCTS <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
  CORPUS_VIDEO <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">SearchRequest</span> <span class="token punctuation">{</span>
  <span class="token builtin">string</span> query <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">int32</span> page_number <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">int32</span> result_per_page <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token positional-class-name class-name">Corpus</span> corpus <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以给枚举定义相同的值，起到别名的作用。使用别名需要添加 <code>option allow_alias = true</code>，否则 protobuf 会弹出警告</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">EnumAllowingAlias</span> <span class="token punctuation">{</span>
  option allow_alias <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token constant">EAA_UNSPECIFIED</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token constant">EAA_STARTED</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token constant">EAA_RUNNING</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token constant">EAA_FINISHED</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>反序列化枚举类依赖语言实现，包含的信息可能放到 message 中或丢失</p></div><h3 id="import-message" tabindex="-1"><a class="header-anchor" href="#import-message" aria-hidden="true">#</a> import message</h3><p>可以使用 import 导入其他文件定义的 <code>message</code></p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">import</span> <span class="token string">&quot;myproject/other_protos.proto&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 import public ，可以导入依赖的依赖，如下定义后，a 才可以使用 c 中定义的消息</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token comment">// a.proto</span>
<span class="token keyword">import</span> <span class="token string">&quot;b.proto&quot;</span>

<span class="token comment">// b.proto</span>
<span class="token keyword">import</span> <span class="token keyword">public</span> <span class="token string">&quot;c.proto&quot;</span>

<span class="token comment">// c.proto</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消息嵌套" tabindex="-1"><a class="header-anchor" href="#消息嵌套" aria-hidden="true">#</a> 消息嵌套</h3><p>可以在消息中定义消息</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">SearchResponse</span> <span class="token punctuation">{</span>
  <span class="token keyword">message</span> <span class="token class-name">Result</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> url <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> title <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">repeated</span> <span class="token builtin">string</span> snippets <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">Result</span> results <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在消息中定义的消息，可以通过父消息引用</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token keyword">message</span> <span class="token class-name">SomeOtherMessage</span> <span class="token punctuation">{</span>
  <span class="token positional-class-name class-name">SearchResponse<span class="token punctuation">.</span>Result</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><p>选项在 proto 文件头部进行声明，常用于改变上下文处理文件的方式，下面列出 Java 一些常用选项</p><div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre class="language-protobuf"><code><span class="token comment">// 生成的 java 包名</span>
<span class="token keyword">option</span> java_package <span class="token operator">=</span> <span class="token string">&quot;com.example.foo&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 生成的外部 Java 类名</span>
<span class="token keyword">option</span> java_outer_classname <span class="token operator">=</span> <span class="token string">&quot;Ponycopter&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 如果为 true,一个 message 一个文件</span>
<span class="token keyword">option</span> java_multiple_files <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新-message-原则" tabindex="-1"><a class="header-anchor" href="#更新-message-原则" aria-hidden="true">#</a> 更新 message 原则</h2>`,29),q={href:"https://protobuf.dev/programming-guides/proto3/",target:"_blank",rel:"noopener noreferrer"},S=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),s(" 参考")],-1),w={href:"https://protobuf.dev/programming-guides/proto3/",target:"_blank",rel:"noopener noreferrer"};function R(I,P){const a=o("ExternalLinkIcon");return l(),i("div",null,[d,u,r,k,n("ol",null,[n("li",null,[s("下载 protobuf 二进制文件 "),n("a",m,[s("Github"),t(a)])]),v,b]),g,n("ul",null,[h,f,_,n("li",null,[s("map：类似 map，详情参考 "),n("a",y,[s("Map"),t(a)])])]),x,n("p",null,[n("a",q,[s("更新 message 原则 "),t(a)])]),S,n("p",null,[n("a",w,[s("Language Guide (proto 3) | Protocol Buffers Documentation "),t(a)])])])}const F=p(c,[["render",R],["__file","protobuf.html.vue"]]);export{F as default};