---
layout: post_skeleton
name: 组织结构
categories: skeleton
---

# 组织结构


## 目录
主工作路径为`apollo-master/apollo-static/src/main/webapp/assets`，下含less、css、psd、img四个目录。


### less目录
存放的是基础less文件和页面less文件，为了区分基础文件和页面文件，所有被@import的less文件的前缀为`_`.  
需要编译的目录为`/assets/less/webpages`和`/assets/less/_total`目录下的`skeleton.less`，`skeleton-x1200.less`和`skeleton-special.less`三个文件。

### css目录
目录内全都是单页面less文件生成的，除了一个previous.css文件（精简之后的global.css，主要包含头部、底部和弹出层等的样式）之外，不要修改此目录下的文件，改了也会被覆盖。

### psd目录
目录下大部分为拼图的源文件和需要经常维护的图片，留存psd方便修改，目录下readme.md文件记录了生成之后文件的存放位置，方便查找。

### img目录
目录下按照目录存放了常用图片。 在修改此目录图片之前记得先去psd目录下寻找有没有同名的psd文件，一般拼图需要这么操作。


## less文件以及命名方式
`/assets/less`下的是基础less文件，按照用途来分文件夹存放。文档中每个大类都有一个文件夹，内含至少一个less文件。  
`/assets/less/webpages`下的都是页面文件。  
一个单独页面或者一整个模块（比如找回密码4个页面）使用一个less文件，命名尽量使用能代表页面或者模块意思的英文来命名。  
如果一整个模块比较大的话，可以把less文件拆分，使用同一个文件前缀来保证文件的统一命名，比如join-reg.less, join-retrieve.less等，这些文件需要放在同一个目录下面，如`webpages/join/`。


## less文件内部
页面头部一定要最先引入skeleton.less这个文件。

![less文件内部](/image/less_file.png "less文件内部")

另外在引用文件的时候，如果某个目录下面存在一个和目录名称相同的less文件，那么这个文件代表是其他文件的基础，也就代表着两件事情：

1. 这个文件在使用当前目录中其他less样式的时候一定要引入，是必须的； 
2. 引入的顺序一定是这个文件先于目录中其他文件，否则又要发生一些奇怪的事情。


## 过渡时期解决方案
由于存在新老页面交替的情况，有些页面使用less来组织，有些则不是，存在一个样式不统一的情况。所以把现有的骨架样式生成为css文件，让之前的全局样式global.css来import，保证了头部、页脚等公共部分的样式统一。