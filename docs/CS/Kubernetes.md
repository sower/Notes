---
title: Kubernetes
created_at: 2022-04-13T13:53:11.000Z
updated_at: 2022-10-23T15:34:18.000Z
word_count: 2396
---
# Kubernetes  
## [kubernetes](https://github.com/kubernetes/kubernetes)
  <br />  Kubernetes 是一个可移植的、可扩展的开源平台，用于管理容器化的工作负载和服务，可促进声明式配置和自动化。



## Pod
一组紧密关联的容器集合，它们共享 IPC 和 Network namespace，是 Kubernetes 调度的基本单位

![](./assets/1650705004461-112acb8c-2c3d-47aa-93d5-1bb9f326c1a6.svg)

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: hello
spec:
  template:
    # 这里是 Pod 模版
    spec:
      containers:
      - name: hello
        image: busybox
        command: ['sh', '-c', 'echo "Hello, Kubernetes!" && sleep 3600']
      restartPolicy: OnFailure
    # 以上为 Pod 模版
```



Node  <br />  节点是一个虚拟机或物理机器，每个节点包含运行 Pods 所需的服务


## [工作负载](https://kubernetes.io/zh/docs/concepts/workloads/)
### [Deployments](https://kubernetes.io/zh/docs/concepts/workloads/controllers/deployment/)
为 [Pod](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/) 和 [ReplicaSet](https://kubernetes.io/zh/docs/concepts/workloads/controllers/replicaset/) 提供声明式的更新能力

```yaml
# 创建了一个 ReplicaSet，负责启动三个 nginx
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```

### [ReplicaSet](https://kubernetes.io/zh/docs/concepts/workloads/controllers/replicaset/)
维护一组在任何时候都处于运行状态的 Pod 副本的稳定集合



### [StatefulSets](https://kubernetes.io/zh/docs/concepts/workloads/controllers/statefulset/)
管理某 [Pod](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/) 集合的部署和扩缩， 并为这些 Pod 提供持久存储和持久标识符

### [DaemonSet](https://kubernetes.io/zh/docs/concepts/workloads/controllers/daemonset/)


### [Jobs](https://kubernetes.io/zh/docs/concepts/workloads/controllers/job/)



## Service
将运行在一组 [Pods](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/) 上的应用程序公开为网络服务的抽象方法

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
```


### [Ingress](https://kubernetes.io/zh/docs/concepts/services-networking/ingress/)
对集群中服务的外部访问进行管理的 API 对象
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: minimal-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - http:
      paths:
      - path: /testpath
        pathType: Prefix
        backend:
          service:
            name: test
            port:
              number: 80
```



## [存储](https://kubernetes.io/zh/docs/concepts/storage/)

[卷](https://kubernetes.io/zh/docs/concepts/storage/volumes/)  <br />  [持久卷](https://kubernetes.io/zh/docs/concepts/storage/persistent-volumes/)  <br />  [投射卷](https://kubernetes.io/zh/docs/concepts/storage/projected-volumes/)  <br />  [临时卷](https://kubernetes.io/zh/docs/concepts/storage/ephemeral-volumes/)  <br />  [存储类](https://kubernetes.io/zh/docs/concepts/storage/storage-classes/)

## [配置](https://kubernetes.io/zh/docs/concepts/configuration/)

### [ConfigMap](https://kubernetes.io/zh/docs/concepts/configuration/configmap/)
将环境配置信息和 [容器镜像](https://kubernetes.io/zh/docs/reference/glossary/?all=true#term-image) 解耦，便于应用配置的修改

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: game-demo
data:
  # 类属性键；每一个键都映射到一个简单的值
  player_initial_lives: "3"
  ui_properties_file_name: "user-interface.properties"

  # 类文件键
  game.properties: |
    enemy.types=aliens,monsters
    player.maximum-lives=5    
  user-interface.properties: |
    color.good=purple
    color.bad=yellow
    allow.textmode=true    
```

### [Secret](https://kubernetes.io/zh/docs/concepts/configuration/secret/)
类似于 [ConfigMap](https://kubernetes.io/zh/docs/tasks/configure-pod-container/configure-pod-configmap/) 但专门用于保存机密数据




## CLI 
### [kubectl](https://kubernetes.io/zh/docs/reference/kubectl/) 
用于运行命令和管理 Kubernetes 集群。

   - [JSONPath](https://kubernetes.io/zh/docs/reference/kubectl/jsonpath/) - 通过 kubectl 使用 [JSONPath 表达式](https://goessner.net/articles/JsonPath/) 的语法指南。

`kubectl [command] [TYPE] [NAME] [flags]`

command

| 操作 | 语法 | 描述 |
| --- | --- | --- |
| alpha | kubectl alpha SUBCOMMAND [flags] | 列出与 alpha 特性对应的可用命令，这些特性在 Kubernetes 集群中默认情况下是不启用的。 |
| annotate | kubectl annotate (-f FILENAME &#124; TYPE NAME &#124; TYPE/NAME) KEY_1=VAL_1 ... KEY_N=VAL_N [--overwrite] [--all] [--resource-version=version] [flags] | 添加或更新一个或多个资源的注解。 |
| api-resources | kubectl api-resources [flags] | 列出可用的 API 资源。 |
| api-versions | kubectl api-versions [flags] | 列出可用的 API 版本。 |
| apply | kubectl apply -f FILENAME [flags] | 从文件或 stdin 对资源应用配置更改。 |
| attach | kubectl attach POD -c CONTAINER [-i] [-t] [flags] | 附加到正在运行的容器，查看输出流或与容器（stdin）交互。 |
| auth | kubectl auth [flags] [options] | 检查授权。 |
| autoscale | kubectl autoscale (-f FILENAME &#124; TYPE NAME &#124; TYPE/NAME) [--min=MINPODS] --max=MAXPODS [--cpu-percent=CPU] [flags] | 自动伸缩由副本控制器管理的一组 pod。 |
| certificate | kubectl certificate SUBCOMMAND [options] | 修改证书资源。 |
| cluster-info | kubectl cluster-info [flags] | 显示有关集群中主服务器和服务的端口信息。 |
| completion | kubectl completion SHELL [options] | 为指定的 shell （bash 或 zsh）输出 shell 补齐代码。 |
| config | kubectl config SUBCOMMAND [flags] | 修改 kubeconfig 文件。有关详细信息，请参阅各个子命令。 |
| convert | kubectl convert -f FILENAME [options] | 在不同的 API 版本之间转换配置文件。配置文件可以是 YAML 或 JSON 格式。 |
| cordon | kubectl cordon NODE [options] | 将节点标记为不可调度。 |
| cp | `kubectl cp <file-spec-src> <file-spec-dest> [options]` | 在容器之间复制文件和目录。 |
| create | kubectl create -f FILENAME [flags] | 从文件或 stdin 创建一个或多个资源。 |
| delete | kubectl delete (-f FILENAME &#124; TYPE [NAME &#124; /NAME &#124; -l label &#124; --all]) [flags] | 从文件、标准输入或指定标签选择器、名称、资源选择器或资源中删除资源。 |
| describe | kubectl describe (-f FILENAME &#124; TYPE [NAME_PREFIX &#124; /NAME &#124; -l label]) [flags] | 显示一个或多个资源的详细状态。 |
| diff | kubectl diff -f FILENAME [flags] | 将 live 配置和文件或标准输入做对比 (**BETA**) |
| drain | kubectl drain NODE [options] | 腾空节点以准备维护。 |
| edit | kubectl edit (-f FILENAME &#124; TYPE NAME &#124; TYPE/NAME) [flags] | 使用默认编辑器编辑和更新服务器上一个或多个资源的定义。 |
| exec | kubectl exec POD [-c CONTAINER] [-i] [-t] [flags] [-- COMMAND [args...]] | 对 pod 中的容器执行命令。 |
| explain | kubectl explain [--recursive=false] [flags] | 获取多种资源的文档。例如 pod, node, service 等。 |
| expose | kubectl expose (-f FILENAME &#124; TYPE NAME &#124; TYPE/NAME) [--port=port] [--protocol=TCP&#124;UDP] [--target-port=number-or-name] [--name=name] [--external-ip=external-ip-of-service] [--type=type] [flags] | 将副本控制器、服务或 pod 作为新的 Kubernetes 服务暴露。 |
| get | kubectl get (-f FILENAME &#124; TYPE [NAME &#124; /NAME &#124; -l label]) [--watch] [--sort-by=FIELD] [[-o &#124; --output]=OUTPUT_FORMAT] [flags] | 列出一个或多个资源。 |
| kustomize | kubectl kustomize `<dir>` [flags] [options] | 列出从 kustomization.yaml 文件中的指令生成的一组 API 资源。参数必须是包含文件的目录的路径，或者是 git 存储库 URL，其路径后缀相对于存储库根目录指定了相同的路径。 |
| label | kubectl label (-f FILENAME &#124; TYPE NAME &#124; TYPE/NAME) KEY_1=VAL_1 ... KEY_N=VAL_N [--overwrite] [--all] [--resource-version=version] [flags] | 添加或更新一个或多个资源的标签。 |
| logs | kubectl logs POD [-c CONTAINER] [--follow] [flags] | 在 pod 中打印容器的日志。 |
| options | kubectl options | 全局命令行选项列表，适用于所有命令。 |
| patch | kubectl patch (-f FILENAME &#124; TYPE NAME &#124; TYPE/NAME) --patch PATCH [flags] | 使用策略合并 patch 程序更新资源的一个或多个字段。 |
| plugin | kubectl plugin [flags] [options] | 提供用于与插件交互的实用程序。 |
| port-forward | kubectl port-forward POD [LOCAL_PORT:]REMOTE_PORT [...[LOCAL_PORT_N:]REMOTE_PORT_N] [flags] | 将一个或多个本地端口转发到一个 pod。 |
| proxy | kubectl proxy [--port=PORT] [--www=static-dir] [--www-prefix=prefix] [--api-prefix=prefix] [flags] | 运行 Kubernetes API 服务器的代理。 |
| replace | kubectl replace -f FILENAME | 从文件或标准输入中替换资源。 |
| rollout | kubectl rollout SUBCOMMAND [options] | 管理资源的部署。有效的资源类型包括：Deployments, DaemonSets 和 StatefulSets。 |
| run | kubectl run NAME --image=image [--env="key=value"] [--port=port] [--dry-run=server &#124; client &#124; none] [--overrides=inline-json] [flags] | 在集群上运行指定的镜像。 |
| scale | kubectl scale (-f FILENAME &#124; TYPE NAME &#124; TYPE/NAME) --replicas=COUNT [--resource-version=version] [--current-replicas=count] [flags] | 更新指定副本控制器的大小。 |
| set | kubectl set SUBCOMMAND [options] | 配置应用程序资源。 |
| taint | kubectl taint NODE NAME KEY_1=VAL_1:TAINT_EFFECT_1 ... KEY_N=VAL_N:TAINT_EFFECT_N [options] | 更新一个或多个节点上的污点。 |
| top | kubectl top [flags] [options] | 显示资源（CPU/内存/存储）的使用情况。 |
| uncordon | kubectl uncordon NODE [options] | 将节点标记为可调度。 |
| version | kubectl version [--client] [flags] | 显示运行在客户端和服务器上的 Kubernetes 版本。 |
| wait | kubectl wait ([-f FILENAME] &#124; resource.group/resource.name &#124; resource.group [(-l label &#124; --all)]) [--for=delete&#124;--for condition=available] [options] | 实验性：等待一种或多种资源的特定条件。 |


type

| 资源名 | 缩写名 | API 分组 | 按命名空间 | 资源类型 |
| --- | --- | --- | --- | --- |
| bindings |  |  | true | Binding |
| componentstatuses | cs |  | false | ComponentStatus |
| configmaps | cm |  | true | ConfigMap |
| endpoints | ep |  | true | Endpoints |
| events | ev |  | true | Event |
| limitranges | limits |  | true | LimitRange |
| namespaces | ns |  | false | Namespace |
| nodes | no |  | false | Node |
| persistentvolumeclaims | pvc |  | true | PersistentVolumeClaim |
| persistentvolumes | pv |  | false | PersistentVolume |
| pods | po |  | true | Pod |
| podtemplates |  |  | true | PodTemplate |
| replicationcontrollers | rc |  | true | ReplicationController |
| resourcequotas | quota |  | true | ResourceQuota |
| secrets |  |  | true | Secret |
| serviceaccounts | sa |  | true | ServiceAccount |
| services | svc |  | true | Service |
| mutatingwebhookconfigurations |  | admissionregistration.k8s.io | false | MutatingWebhookConfiguration |
| validatingwebhookconfigurations |  | admissionregistration.k8s.io | false | ValidatingWebhookConfiguration |
| customresourcedefinitions | crd,crds | apiextensions.k8s.io | false | CustomResourceDefinition |
| apiservices |  | apiregistration.k8s.io | false | APIService |
| controllerrevisions |  | apps | true | ControllerRevision |
| daemonsets | ds | apps | true | DaemonSet |
| deployments | deploy | apps | true | Deployment |
| replicasets | rs | apps | true | ReplicaSet |
| statefulsets | sts | apps | true | StatefulSet |
| tokenreviews |  | authentication.k8s.io | false | TokenReview |
| localsubjectaccessreviews |  | authorization.k8s.io | true | LocalSubjectAccessReview |
| selfsubjectaccessreviews |  | authorization.k8s.io | false | SelfSubjectAccessReview |
| selfsubjectrulesreviews |  | authorization.k8s.io | false | SelfSubjectRulesReview |
| subjectaccessreviews |  | authorization.k8s.io | false | SubjectAccessReview |
| horizontalpodautoscalers | hpa | autoscaling | true | HorizontalPodAutoscaler |
| cronjobs | cj | batch | true | CronJob |
| jobs |  | batch | true | Job |
| certificatesigningrequests | csr | certificates.k8s.io | false | CertificateSigningRequest |
| leases |  | coordination.k8s.io | true | Lease |
| endpointslices |  | discovery.k8s.io | true | EndpointSlice |
| events | ev | events.k8s.io | true | Event |
| ingresses | ing | extensions | true | Ingress |
| flowschemas |  | flowcontrol.apiserver.k8s.io | false | FlowSchema |
| prioritylevelconfigurations |  | flowcontrol.apiserver.k8s.io | false | PriorityLevelConfiguration |
| ingressclasses |  | networking.k8s.io | false | IngressClass |
| ingresses | ing | networking.k8s.io | true | Ingress |
| networkpolicies | netpol | networking.k8s.io | true | NetworkPolicy |
| runtimeclasses |  | node.k8s.io | false | RuntimeClass |
| poddisruptionbudgets | pdb | policy | true | PodDisruptionBudget |
| podsecuritypolicies | psp | policy | false | PodSecurityPolicy |
| clusterrolebindings |  | rbac.authorization.k8s.io | false | ClusterRoleBinding |
| clusterroles |  | rbac.authorization.k8s.io | false | ClusterRole |
| rolebindings |  | rbac.authorization.k8s.io | true | RoleBinding |
| roles |  | rbac.authorization.k8s.io | true | Role |
| priorityclasses | pc | scheduling.k8s.io | false | PriorityClass |
| csidrivers |  | storage.k8s.io | false | CSIDriver |
| csinodes |  | storage.k8s.io | false | CSINode |
| storageclasses | sc | storage.k8s.io | false | StorageClass |
| volumeattachments |  | storage.k8s.io | false | VolumeAttachment |











### [kubeadm](https://kubernetes.io/zh/docs/reference/setup-tools/kubeadm/)
配置安全的 Kubernetes 集群


## 组件
### [kubelet](https://kubernetes.io/zh/docs/reference/command-line-tools-reference/kubelet/)
在每个节点上运行的主代理。kubelet 接收一组 PodSpecs 并确保其所描述的容器健康地运行。

### [kube-apiserver](https://kubernetes.io/zh/docs/reference/command-line-tools-reference/kube-apiserver/)
用于验证和配置 API 对象（如 Pod、服务或副本控制器等）的数据。

- [kube-controller-manager](https://kubernetes.io/zh/docs/reference/command-line-tools-reference/kube-controller-manager/)

一个守护进程，其中包含 Kubernetes 所附带的核心控制回路。

- [kube-proxy](https://kubernetes.io/zh/docs/reference/command-line-tools-reference/kube-proxy/) - 可进行简单的 TCP/UDP 流转发或针对一组后端执行轮流 TCP/UDP 转发。

- [kube-scheduler](https://kubernetes.io/zh/docs/reference/command-line-tools-reference/kube-scheduler/) - 一个调度程序，用于管理可用性、性能和容量。
   - [调度策略](https://kubernetes.io/zh/docs/reference/scheduling/policies)
   - [调度配置](https://kubernetes.io/zh/docs/reference/scheduling/config#profiles)

[  <br />  ](https://kubernetes.io/zh/docs/reference/kubectl/)



















云原生（Cloud Native）  <br />  云原生技术有利于各组织在公有云、私有云和混合云等新型动态环境中，构建和运行可弹性扩展的应用。云原生的代表技术包括容器、服务网格、微服务、不可变基础设施和声明式 API。

设计理念

- 面向分布式设计（Distribution）：容器、微服务、API 驱动的开发；
- 面向配置设计（Configuration）：一个镜像，多个环境配置；
- 面向韧性设计（Resistancy）：故障容忍和自愈；
- 面向弹性设计（Elasticity）：弹性扩展和对环境变化（负载）做出响应；
- 面向交付设计（Delivery）：自动拉起，缩短交付时间；
- 面向性能设计（Performance）：响应式，并发和资源高效利用；
- 面向自动化设计（Automation）：自动化的 DevOps；
- 面向诊断性设计（Diagnosability）：集群级别的日志、metric 和追踪；
- 面向安全性设计（Security）：安全端点、API Gateway、端到端加密；

Resource

- [awesome-kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [kuboard-press](https://github.com/eip-work/kuboard-press)
- [devops-exercises](https://github.com/bregman-arie/devops-exercises)
- [kubernetes-handbook](https://github.com/rootsongjc/kubernetes-handbook)
- [microservices-demo](https://github.com/GoogleCloudPlatform/microservices-demo)

  <br />   
