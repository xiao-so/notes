import{_ as p,r as i,o as l,c,a,b as n,d as e,e as t}from"./app-9157d7b3.js";const o="/notes/assets/image-20230625173736441-248efba6.png",r="/notes/assets/image-20230625195802893-e24f72e7.png",u="/notes/assets/image-20230625210531658-26da1bdb.png",d="/notes/assets/image-20230625210610081-19f57606.png",k={},g=t('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>skywalking 是 Java 编写的开源的 APM（应用性能监视）系统，用于监视和诊断分布式系统，并提供实时性能分析、告警和故障诊断等功能，可用于云原生架构中</p><p>skywalking 一大特点是提供无侵入或低侵入的方式监控</p><p>skywalking 主要提供功能如下：</p><ul><li>分布式跟踪</li><li>堆栈代理</li><li>支持成熟的遥测生态系统</li><li>原生 APM 数据库</li><li>一致的指标聚合</li><li>日志管理管道</li><li>警报和遥测管道</li></ul><p><img src="'+o+'" alt="image-20230625173736441"></p><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><h3 id="运行-skywalking-后端以及-dashboard" tabindex="-1"><a class="header-anchor" href="#运行-skywalking-后端以及-dashboard" aria-hidden="true">#</a> 运行 skywalking 后端以及 dashboard</h3>',8),h={href:"https://skywalking.apache.org/downloads/",target:"_blank",rel:"noopener noreferrer"},v=a("p",null,"解压后运行 bin/startup.bat",-1),m=a("p",null,"访问：127.0.0.1:8080 可以看到 UI 面板",-1),b=a("p",null,[a("img",{src:r,alt:"image-20230625195802893"})],-1),y=a("h3",{id:"jave-agent",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#jave-agent","aria-hidden":"true"},"#"),n(" Jave agent")],-1),_={href:"https://skywalking.apache.org/docs/skywalking-java/v8.16.0/en/setup/service-agent/java-agent/readme/",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>下载：</p><p>要监测大部分 Java 应用，只需要在运行 java 程序时，加上参数运行即可，默认支持大部分 Java 框架</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-javaagent:/path/to/skywalking-package/agent/skywalking-agent.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动了一个最简单的 SpringBoot 应用，可以看到如下</p><p><img src="`+u+'" alt="image-20230625210531658"></p><p><img src="'+d+'" alt="image-20230625210610081"></p><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><h3 id="基础组件" tabindex="-1"><a class="header-anchor" href="#基础组件" aria-hidden="true">#</a> 基础组件</h3><ul><li><p>SkyWalking APM</p><p>可观测性分析平台和应用程序性能管理系统</p></li><li><p>Rocketbot UI</p><p>SkyWalking 的主要 UI</p></li></ul><h3 id="代理组件" tabindex="-1"><a class="header-anchor" href="#代理组件" aria-hidden="true">#</a> 代理组件</h3><p>代理组件主要提供各个语言项目的上报跟踪信息能力</p><p>主要一下语言和组件代理：</p><ul><li>Java</li><li>Python</li><li>Go</li><li>NodeJs</li><li>Nginx LUA</li><li>Kong</li><li>...</li></ul><h3 id="operation" tabindex="-1"><a class="header-anchor" href="#operation" aria-hidden="true">#</a> Operation</h3><ul><li><p>SkyWalking CLI</p><p>SkyWalking CLI 是 SkyWalking 用户或 OPS 团队的命令交互工具。</p></li><li><p>Kubernates Helm</p><p>在 k8s 环境的安装脚本</p></li><li><p>SkyWalking Cloud on Kubernetes</p></li></ul><h3 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h3><ul><li>BanyanDB Server</li><li>BanyanDB Java Client</li></ul><h3 id="开发测试工具" tabindex="-1"><a class="header-anchor" href="#开发测试工具" aria-hidden="true">#</a> 开发测试工具</h3><ul><li><p>skywalking eyes</p><p>一种全功能许可证工具，用于检查和修复许可证头，并解决依赖项的许可证问题。</p></li><li><p>skywalking infra e2e</p><p>一种端到端测试框架，旨在帮助开发人员轻松设置、调试和验证端到端测试。</p></li></ul><h2 id="java-agent" tabindex="-1"><a class="header-anchor" href="#java-agent" aria-hidden="true">#</a> Java Agent</h2><p>一般而言，快速开始的方式能够满足大部分场景</p>',21),x={href:"https://skywalking.apache.org/docs/skywalking-java/v8.16.0/en/setup/service-agent/java-agent/readme/",target:"_blank",rel:"noopener noreferrer"},w=t(`<h3 id="容器环境" tabindex="-1"><a class="header-anchor" href="#容器环境" aria-hidden="true">#</a> 容器环境</h3><h4 id="使用-skywalking-jdk-构建镜像" tabindex="-1"><a class="header-anchor" href="#使用-skywalking-jdk-构建镜像" aria-hidden="true">#</a> 使用 skywalking jdk 构建镜像</h4><p>docker 镜像可以基于官方镜像构建，这样启动 Java 程序就会自动启动 Java Agent</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> apache/skywalking-java-agent:8.5.0-jdk8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用代理" tabindex="-1"><a class="header-anchor" href="#使用代理" aria-hidden="true">#</a> 使用代理</h4><p>如果不方便使用官方 jdk 构建镜像，也可以继续用命令行参数的方式启动 Java 程序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-javaagent:/path/to/skywalking-package/agent/skywalking-agent.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="k8s-环境" tabindex="-1"><a class="header-anchor" href="#k8s-环境" aria-hidden="true">#</a> k8s 环境</h3><p>使用初始容器把 skywalking 的 jar 包挂到容器中，然后使用启动参数启动</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> agent<span class="token punctuation">-</span>as<span class="token punctuation">-</span>sidecar
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> Never

  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> skywalking<span class="token punctuation">-</span>agent
      <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

  <span class="token key atrule">initContainers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> agent<span class="token punctuation">-</span>container
      <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/skywalking<span class="token punctuation">-</span>java<span class="token punctuation">-</span>agent<span class="token punctuation">:</span>8.7.0<span class="token punctuation">-</span>alpine
      <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> skywalking<span class="token punctuation">-</span>agent
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /agent
      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/bin/sh&quot;</span> <span class="token punctuation">]</span>
      <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cp -R /skywalking/agent /agent/&quot;</span> <span class="token punctuation">]</span>

  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> app<span class="token punctuation">-</span>container
      <span class="token key atrule">image</span><span class="token punctuation">:</span> springio/gs<span class="token punctuation">-</span>spring<span class="token punctuation">-</span>boot<span class="token punctuation">-</span>docker
      <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> skywalking<span class="token punctuation">-</span>agent
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /skywalking
      <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> JAVA_TOOL_OPTIONS
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;-javaagent:/skywalking/agent/skywalking-agent.jar&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手动跟踪" tabindex="-1"><a class="header-anchor" href="#手动跟踪" aria-hidden="true">#</a> 手动跟踪</h3><p>使用 agent 的方式，有官方和社区支持，可以监控大部分场景，但有些场合仍需要侵入到程序才能跟踪监控：</p><ul><li>使用 GraalVM 本机镜像</li><li>官方没适配框架</li><li>...</li></ul><h4 id="添加工具包" tabindex="-1"><a class="header-anchor" href="#添加工具包" aria-hidden="true">#</a> 添加工具包</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.skywalking<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>apm-toolkit-trace<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${skywalking.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="trace-模型" tabindex="-1"><a class="header-anchor" href="#trace-模型" aria-hidden="true">#</a> trace 模型</h4>`,16),j={href:"https://skywalking.apache.org/docs/main/v9.5.0/en/api/trace-data-protocol-v3/",target:"_blank",rel:"noopener noreferrer"},S=t('<p><code>EntrySpan</code>：表示服务提供者，也是服务器端的端点。作为一个 APM 系统，SkyWalking 针对的是应用服务器。因此，几乎所有的服务和 MQ 消费者都是 EntrySpans。</p><p><code>LocalSpan</code>：表示与远程服务无关的跟踪片段（典型代表就是 Java 方法）。它既不是 MQ 生产者/消费者，也不是服务的提供者/消费者（例如 HTTP 服务）。</p><p><code>ExitSpan</code>：典型代表是客户端的服务或 MQ 生产者。在 SkyWalking 的早期版本被称为 LeafSpan。例如，通过 JDBC 访问数据库，以及读取 Redis/Memcached 均归类为 ExitSpans。</p><p><code>跨线程/进程父 span</code>：称为“reference”。参考承载了 trace ID、segment ID、span ID、service name, service instance name, endpoint name 以及用于 client 的目标地址（注意：在跨线程操作中，这并不是必需的）中的此请求的信息。欲了解更多详情，请参阅 https://skywalking.apache.org/docs/main/v9.5.0/en/api/x-process-propagation-headers-v3</p><p><code>Span＃skipAnalysis</code>：如果 span 不需要进行后端分析，可能为 TRUE</p><h4 id="trace-api" tabindex="-1"><a class="header-anchor" href="#trace-api" aria-hidden="true">#</a> trace API</h4><p>创建一个 Span</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SpanRef</span> spanRef <span class="token operator">=</span> <span class="token class-name">Tracer</span><span class="token punctuation">.</span><span class="token function">createEnteySpan</span><span class="token punctuation">(</span><span class="token string">&quot;${operationName}&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个 LocalSpan</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SpanRef</span> spanRef <span class="token operator">=</span> <span class="token class-name">Tracer</span><span class="token punctuation">.</span><span class="token function">createLocalSpan</span><span class="token punctuation">(</span><span class="token string">&quot;${operationName}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个 ExitSpan</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SpanRef</span> spanRef <span class="token operator">=</span> <span class="token class-name">Tracer</span><span class="token punctuation">.</span><span class="token function">createExitSpan</span><span class="token punctuation">(</span><span class="token string">&quot;${operationName}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;${remotePeer}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止当前 span</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Tracer</span><span class="token punctuation">.</span><span class="token function">stopSpan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',14),A={href:"https://skywalking.apache.org/docs/skywalking-java/v8.16.0/en/setup/service-agent/java-agent/application-toolkit-tracer/",target:"_blank",rel:"noopener noreferrer"},q=a("h2",{id:"参考",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),n(" 参考")],-1),I={href:"https://github.com/apache/skywalking",target:"_blank",rel:"noopener noreferrer"};function P(J,M){const s=i("ExternalLinkIcon");return l(),c("div",null,[g,a("p",null,[n("下载 skywalking apm："),a("a",h,[n("Downloads | Apache SkyWalking"),e(s)])]),v,m,b,y,a("p",null,[n("文档："),a("a",_,[n("Setup java agent | Apache SkyWalking"),e(s)])]),f,a("p",null,[n("其他情况可以参考："),a("a",x,[n("Setup java agent | Apache SkyWalking"),e(s)])]),w,a("p",null,[n("为了理解 skywalking 跟踪模型你需要理解下面这些概念："),a("a",j,[n("Trace Data Protocol | Apache SkyWalking"),e(s)])]),S,a("p",null,[n("更多请参考官网："),a("a",A,[n("Create Span | Apache SkyWalking"),e(s)])]),q,a("p",null,[a("a",I,[n("apache/skywalking：APM，应用程序性能监控系统 (github.com)"),e(s)])])])}const E=p(k,[["render",P],["__file","skywalking.html.vue"]]);export{E as default};