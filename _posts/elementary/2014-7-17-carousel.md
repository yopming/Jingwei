---
layout: post_building
sort: 13
name: 轮播 Carousel
categories: building
---

# 轮播
`less/_carousel/_carousel.less`

indicator元素不需要写在html中，js会自动拼起来。

```html
<div class="carousel">
    <div class="carousel-loading dev_loading" style="display: none;"></div>
    <div id="home_banner_wrapper" class="carousel-inner">
        <a href="#"><img src="/img/banner_0.jpg" alt="" width="760" height="270"></a>
        <a href="#"><img src="/img/banner_1.jpg" alt="" width="760" height="270"></a>
        <a href="#"><img src="/img/banner_2.jpg" alt="" width="760" height="270"></a>
        <a href="#"><img src="/img/banner_3.jpg" alt="" width="760" height="270"></a>
    </div>
</div>
```

<iframe class="markdown_example" src="/example/building/carousel/carousel.html"></iframe>