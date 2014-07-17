---
layout: post_building
sort: 18
name: 评价 Evaluate
categories: building
---

# 评价

## 星级

`less/_evaluate/_star.less`

```html
<div class="eval-star">
    <span class="title">客户评价</span>
    <span class="start-on"></span>
    <span class="start-on"></span>
    <span class="start-on"></span>
    <span class="start-half"></span>
    <span></span>
    <span class="point">3.5分</span>
</div> 
```

<iframe class="markdown_example" src="/example/building/evaluate/star.html"></iframe>


## 气泡评价

`less/_evaluate/_eval-prompt.less`

```html
<div class="eval-prompt prompt-yellow">
    <div class="yellow-tip yellow-top"></div>
    <div class="yellow-info">
        <div class="prompt-tit">
            <span class="time">2013-08-05 15:37:03</span>新一站回复：
        </div>
        <div class="prompt-cont">
            您好，多次给您致电一直无人接听，我们这边推荐好友和分享产品都是可以获赠200积分的哟，
            前提是您的好友一定要在网站下单成功哦，感谢您的关注与支持！
        </div>
    </div>
    <div class="yellow-tip yellow-bottom"></div>
</div>
```

<iframe class="markdown_example" src="/example/building/evaluate/bubble.html"></iframe>