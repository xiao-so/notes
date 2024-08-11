##  简介

SpringBoot Actuator 是一个Spring Boot应用程序的工具。可以提供基本的健康检查、线程信息等。

## 快速开始
### 引入依赖包
引入SpringBoot后引入以下包
```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
```
如果需要访问健康检查以外的端点信息，需要在配置文件中配置
```yaml
server:
  port: 8080
management:
  server:
    port: 8081
  endpoints:
    jmx:
      exposure:
        include: "*"
    web:
      exposure:
        include: "*"
  endpoint:
    health:
      show-details: always

```
### 访问端点

访问 `http://127.0.0.1:8081/actuator` 即可查看所有端点

端点可参考：[Spring Boot Reference Documentation](https://docs.spring.io/spring-boot/docs/2.6.13/reference/htmlsingle/#actuator)

## 实践

### 定制一个健康检查端口

继承并实现AbstractHealthIndicator接口，类名以HealthIndicator结尾

```java
package io.github.xiaoso456.springactuatordemo.actuator;

import org.springframework.boot.actuate.health.AbstractHealthIndicator;
import org.springframework.boot.actuate.health.Health;
import org.springframework.stereotype.Component;


@Component
public class DemoHealthIndicator extends AbstractHealthIndicator {

    @Override
    protected void doHealthCheck(Health.Builder builder) throws Exception {
        // do your check
        try {
            boolean check = check();
            if(check){
                builder.up().withDetail("xxKey","ok");
            }else {
                builder.down().withDetail("xxKey","error");
            }
        }catch (Exception e){
            builder.down().withException(e);
        }

    }

    private boolean check(){
        return false;
    }
}
```

访问`/actuator/health`接口，可以看到下面接口响应

```json
{
    "status": "DOWN",
    "components": {
        "db": {
            "status": "UP",
            "details": {
                "database": "MySQL",
                "validationQuery": "isValid()"
            }
        },
        "demo": {
            "status": "DOWN",
            "details": {
                "xxKey": "error"
            }
        },
        "diskSpace": {
            "status": "UP",
            "details": {
                "total": 1000186310656,
                "free": 107933786112,
                "threshold": 10485760,
                "exists": true
            }
        },
        "ping": {
            "status": "UP"
        }
    }
}
```

访问`/actuator/health/demo`，可以查看下面内容

```java
{
    "status": "DOWN",
    "details": {
        "xxKey": "error"
    }
}
```



### 定制info端点

实现 InfoContributor接口

```java
package io.github.xiaoso456.springactuatordemo.info;

import org.springframework.boot.actuate.info.Info;
import org.springframework.boot.actuate.info.InfoContributor;
import org.springframework.stereotype.Component;

@Component
public class DemoInfo implements InfoContributor {
    @Override
    public void contribute(Info.Builder builder) {
        builder.withDetail("app-name", "DemoApp");
    }
}

```

访问`/actuator/info`

```json
{
    "app-name": "DemoApp"
}
```

### 定制 Metrics

一般搭配prometheus、grafana使用

引入下面类，不作更多介绍

```xml
        <dependency>
            <groupId>io.micrometer</groupId>
            <artifactId>micrometer-registry-prometheus</artifactId>
        </dependency>
```

### 定制 Endpoint

定制 endpoint ,可以用于定制探针,默认提供的k8s探针如[Spring Boot Reference Documentation](https://docs.spring.io/spring-boot/docs/2.6.13/reference/htmlsingle/#actuator.endpoints.kubernetes-probes)

```java
@Component
@Endpoint(id = "demo-endpoint")
public class DemoEndpoint {

    public static Map demoEndpointInfo = new HashMap();
    static {
        demoEndpointInfo.put("test-endpoint","true");
    }
    @ReadOperation
    public Map getInfo(){
        return demoEndpointInfo;
    }

    @WriteOperation
    public void setInfo(String key,String value){
        demoEndpointInfo.put(key, value);
    }


}

```

访问`/actuator/demo-endpoint`

## 参考

[10【Actuator监控管理】定制info端点_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Mx4y1i7ZZ?p=10&vd_source=a7294b5d53441a33f427f8cd4d5333c2)
