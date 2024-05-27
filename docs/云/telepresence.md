## 简介
Telepresence 是一个用于在 Kubernetes 集群中创建虚拟网络代理的工具。能够让开发在本地连接 k8s 网络、拦截集群网络转发到本地等

## 快速开始



### 下载

下载二进制文件 [Releases · telepresenceio/telepresence (github.com)](https://github.com/telepresenceio/telepresence/releases/)

:::Tip

Telepresence 在 2.17.0 以后才正式支持 arm 镜像，建议使用2.17.0+

:::

### 安装 Traffic Manager

Traffic Manager是安装在k8s集群的网络流量管理器，是用户本地和集群流量的中转站。



telepresence 客户端使用如下命令可以在集群安装 Traffic Manager

```sh
telepresence helm install
```

:::Tips

注意安装环境需要有目标集群的 config 文件，并配置在默认读取目录，因此可以考虑直接在集群机器中安装

:::



本质是使用 helm 进行安装，可以使用设置一些参数，例如

```sh
telepresence helm install --set image.registry=docker.io/datawire \
	--set image.name=tel2 \
	--set image.tag=2.17.0 \
	--set image.pullPolicy=IfNotPresent \
```

更多参数参考官方 helm charts：[telepresence 2.20.0-test.2 · helm/datawire (artifacthub.io)](https://artifacthub.io/packages/helm/datawire/telepresence)



升级：`telepresence helm install --upgrade`

卸载：`telepresence helm uninstall`

### 本地连接集群

首先按上面步骤安装 Traffic Manager

连接集群网络： ` telepresence connect`

例如：`telepresence connect --kubeconfig /root/.kube/config --namepsace ns1`，使用指定目录的k8s文件连接到命名空间ns1网络



退出连接：`telepresence quit` 



::: Warning

如果你用Windows且在使用大量网络流量，你的体验可能会相当糟糕，可能会出现莫名其妙的断连、无响应、内存飙升等问题。且使用时最好不要开其他网络代理

:::

其他常用命令如下，摘自官网

| COMMAND       | DESCRIPTION                                                  |
| :------------ | :----------------------------------------------------------- |
| `connect`     | Starts the local daemon and connects Telepresence to your cluster and installs the Traffic Manager if it is missing. After connecting, outbound traffic is routed to the cluster so that you can interact with services as if your laptop was another pod (for example, curling a service by it's name) |
| `status`      | Shows the current connectivity status                        |
| `quit`        | Tell Telepresence daemons to quit                            |
| `list`        | Lists the current active intercepts                          |
| `intercept`   | Intercepts a service, run followed by the service name to be intercepted and what port to proxy to your laptop: `telepresence intercept <service name> --port <TCP/UDP port>` (use `port/UDP` to force UDP). This command can also start a process so you can run a local instance of the service you are intercepting. For example the following will intercept the hello service on port 8000 and start a Python web server: `telepresence intercept hello --port 8000 -- python3 -m http.server 8000`. A special flag `--docker-run` can be used to run the local instance [in a docker container](https://www.getambassador.io/docs/telepresence-oss/2.17/reference/docker-run). |
| `leave`       | Stops an active intercept: `telepresence leave hello`        |
| `loglevel`    | Temporarily change the log-level of the traffic-manager, traffic-agents, and user and root daemons |
| `gather-logs` | Gather logs from traffic-manager, traffic-agents, user, and root daemons, and export them into a zip file that can be shared with others or included with a github issue. Use `--get-pod-yaml` to include the yaml for the `traffic-manager` and `traffic-agent`s. Use `--anonymize` to replace the actual pod names + namespaces used for the `traffic-manager` and pods containing `traffic-agent`s in the logs. |
| `version`     | Show version of Telepresence CLI + Traffic-Manager (if connected) |
| `uninstall`   | Uninstalls Telepresence from your cluster, using the `--agent` flag to target the Traffic Agent for a specific workload, the `--all-agents` flag to remove all Traffic Agents from all workloads, or the `--everything` flag to remove all Traffic Agents and the Traffic Manager. |

## 常见问题

### 使用connect命令连接提示 x509 .. not valid

原因是启动了证书验证，集群内主机用float ip对外暴露，集群内无法感知该ip，证书不认这ip。

解决：[kubeadm - kubernetes master 的 x509 证书无效 - 堆栈溢出 (stackoverflow.com)](https://stackoverflow.com/questions/46360361/invalid-x509-certificate-for-kubernetes-master)

1. 在所有节点上执行下面命令

```
kubeadm init --apiserver-cert-extra-sans=外部ip
kubeadm reset
```

2. 在 master节点执行

```
rm /etc/kubernetes/pki/apiserver.*
kubeadm init phase certs all --apiserver-advertise-address=0.0.0.0 --apiserver-cert-extra-sans=10.161.233.80,114.215.201.87
docker rm `docker ps -q -f 'name=k8s_kube-apiserver*'`
systemctl restart kubelet
```

