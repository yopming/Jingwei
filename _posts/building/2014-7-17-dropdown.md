---
layout: post_building
sort: 17
name: 下拉 Dropdown
categories: building
---

# 下拉

需要搭配相应的脚本才能正常工作，具体的样式在具体的地方定义，只是提供基本样式。

`less/_dropdown/_dropdown.less`

```html
<ul>
    <li><a href="#">Test</a></li>
    <li class="dropdown-menu">
        <a href="#" class="dropdown-remote">
            Foled 
            <span class="icon-dropdown"></span>
        </a>
        <div class="dropdown-panel ly-none">
            Globally optimize multifunctional.
        </div>
    </li>
    <li class="dropdown-menu">
        <a href="#" class="dropdown-remote dropdown-on">
            Site map 
            <span class="icon-dropdown"></span>
        </a>
        <div class="dropdown-panel">
            Globally optimize multifunctional.
        </div>
    </li>
</ul>
```

<iframe class="markdown_example" src="/example/building/dropdown/dropdown.html"></iframe>
