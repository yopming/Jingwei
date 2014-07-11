---
layout: post_guide
name:  专题规范
categories: guide
---

# 专题规范

## 入口地址
[http://cst.xyz.cn/](cst.xyz.cn) 进入运营系统进行专题的修改

## 新增专题步骤
1. 在本地按照视觉稿来进行页面编写和调试（因为在线上没有方便地修改专题的方法），此时没有页头页脚等元素；
2. 在线上建立目录，把html文件按照修改要求修改成为jsp文件，然后同css、js、图片等一同上传到目录当中；
3. 按照专题地址进行浏览器兼容性测试，线上地址属于正式版地址，在没有正式上线之前请勿公开传播。

## 修改专题步骤
**如果修改内容比较多，最好把最新的jsp还原为html，在本地进行编辑**

1. 从运营系统中相对应的目录中下载最新的需要修改的文件（最好不要在不对比的情况下使用本地文件把线上的覆盖）；
2. 在运营系统中删除已存在的文件（运营系统中不会自动覆盖文件）；
3. 拖动文件上传。

## 专题名称
在需求文档中会给出专题的URI，例如`http://www.xyz.cn/special/liuyi.html`，其中liuyi就是要求的专题名称，运营系统中的*目录名称*，*jsp名称*等都需要使用这个来命名，系统会根据liuyi.html来寻找liuyi目录下的liuyi.jsp文件。

## 专题模板
假设$TOPIC_NAME为专题名称，$TOPIC_TITLE为专题的title，$TOPIC_KEYWORDS与$TOPIC_DESCRIPTION为专题的SEO信息；

    <!DOCTYPE html>
    <html lang="cn">
    <head>
      <%@ page contentType="text/html; charset=GBK"%>
      <title>$TOPIC_TITLE</title>
      <meta content="$TOPIC_KEYWORDS" name="keywords">
      <meta content="$TOPIC_DESCRIPTION" name="description">
      <jsp:include page="../include/Apollo_SkeletonCSS.jsp"/>
      <link href="${cms_system_res}/$TOPIC_NAME/static/$TOPIC_NAME.css" rel="stylesheet" type="text/css">
    </head>
    <body>
      <jsp:include page="../include/Apollo_Header.jsp"/>
      <div class="fence-grow-down" id="topic-$TOPIC_NAME">
      ...
      </div>
      <jsp:include page="../include/Apollo_Footer.jsp" />
      <jsp:include page="../include/Apollo_JS.jsp" />
      <script src="${cms_system_res}/$TOPIC_NAME/static/$TOPIC_NAME.js"></script>
    </body>
    </html>

一般情况下，复制模板之后需要修改八处。
每个专题需要一个自己的ID，通常是`#topic-$TOPIC_NAME`这种形式，当然也可以使用#topic加其他名称。

## 静态文件目录
静态文件目录是专题主目录下包括css、js、图片等文件的目录，是专题目录的子目录，名称统一为`static`。

## 专题过期时间
有些专题有时效性，需要在过期时间之后显示弹出层的提示。
$TOPIC_ENDTIME为专题的结束时间，格式为`2014-4-21`。

    <jsp:include page="/WEB-INF/jspf/2012m/footer.jsp">
      <jsp:param value="2014-4-21" name="specialEndtime"/>
    </jsp:include>
    <jsp:include page="../include/Apollo_JS.jsp" />
    <script src="/mice/pngFix/jquery.pngFix.js" charset="utf-8"></script>
    <script src="/mice/special/special.js" charset="utf-8"></script>
    
用以上代码替换模板当中的以下代码

    <jsp:include page="../include/Apollo_Footer.jsp" />
    <jsp:include page="../include/Apollo_JS.jsp" />

