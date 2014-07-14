---
layout: post_skeleton
sort: 3
name: 变量 Variable
categories: skeleton
---

# 变量

	less/_variable.less

_变量的意义_：再其他的文件中调用变量可以保证值的统一，可以有效控制全局中某样式的数量，保证规范的执行，方便后期统一修改。  
_变量不可混用_：目前，可能存在多个变量的值是相同的，是根据业务要求来定义的，**值相同不代表可以混用**，混用会造成非预期的恶劣影响。  
_变量名称定义_：变量名称的定义一定要清晰易懂，名称可以长一些，最终也不会反映到css文件中，不会增加页面负载，有格式要求的变量如果某部分不存在，可以省略；  


## global

	@baseColor          文档文本颜色
	@baseBackground     文档背景颜色
	@baseFontSize       文档字体大小
	@baseLineHeight     文档文字行高
	@minorBackground    注册等页面为灰色的body背景


## color
> 此项下的条目已不再适用，仅做了解即可

为了统一页面中文字的颜色，在定义文字颜色的时候不直接定义色值，把色值定义在变量中，然后引用变量。当然链接的颜色不包括在内，链接有自己的颜色设定。

在定义颜色变量的时候，变量名称使用color加上颜色色值的大写全6位命名，如果是RGB活着RGBA形式的颜色，把RGBA分别的值用中划线分割。


## font
定义某一类字体的时候一定要考虑到跨平台兼容性问题，比如标题的字体设定为“微软雅黑”，那么要考虑到没有微软雅黑的机器上的替代字体，设置字体的时候尽量使用变量。
	
	@baseFontFamily         文档字体
	@sansFontFamily         无衬线字体
	@serifFontFamily        衬线字体
	@monospaceFontFamily    等宽字体
	@moneyFontFamily        表示人民币符号的字体
	@westernFontFamily      西文字体


## hr
分割线

	@hrBorderSize   分割线尺寸
	@hrBorderStyle  分割线的类型(参考border的style)
	@hrColor        分割线的颜色
	@hrMargin       分割线的上下边距
	@hrHeight       不使用边框来定义的分割线的高度


## link
链接
链接的变量名称格式： @link + 类型 + 状态 + 属性
比如`@linkGray6HoverColor`


## form
表单

	@formColor                  表单文字颜色
	@formBackground             表单控件背景
	@formBorderColor            表单控件边框颜色
	@formFocusBorderColor       表单控件在focus状态下边框颜色
	@formInputWidth             输入框的默认宽度
	@formInputHeight            输入框的默认高度
	@formLineHeight             书框框的默认行高
	@formPadding                输入框、textarea的默认padding
	@formPaddingVertical        垂直padding
	@inputErrorBorderColor      输入框错误状态下边框颜色
	@inputWarningBorderColor    警告状态
	@inputDisableBorderColor    不可用状态
	@inputDisableBackground     不可用状态的输入框背景
	@inputDisableColor          不可用状态的文字颜色
	@tipError{Warning}Color     表单的错误提示/警告提示的颜色
	@tipLinkColor               提示信息中链接的颜色


## button
按钮
按钮变量名称格式： @button + 类型 + 状态 + 属性
比如`@buttonJadeLargeBackgroundPosition`, `@buttonVividTinyHoverBackgroundPosition`


## border
变量

	@normalBorderColor      边框默认颜色
	@lightBorderColor       BOX-HEADING的标题的下边框颜色，较为浅的颜色


## status 
错误状态

	@statusSucBorderColor       成功状态的边框颜色
	@statusSucBackground        成功状态的背景
	@statusFailBorderColor      错误报错边框颜色
	@statusFailBackground       错误报错背景


## alert
警告信息
警告信息变量名称格式： @alert + 类型 + 属性
比如`@alertInfoBackground`, `@alertMessageBorder`


## bubble
气泡提示

	@bubbleContentColor     气泡文字颜色


## breadcrumb
面包屑

	@breadLinkHoverDecoration   链接hover效果
	@breadArrowFontFamily       面包屑的>的字体


## box
容器
容器变量名称格式： @box + 类型 ＋ 容器部件 + 属性
比如`@boxBasicHeadingPadding`, `@boxSuperValueColor`


## money
金钱，人民币

	@moneyColor             “起”的颜色
	@moneySecondaryColor    金钱的符号的颜色
	@moneyDelColor          原价的颜色，包括符号和数字
	@moneyMarkColor         金钱符号的颜色
	@moneyFontSize          金钱符号和数字的字体大小
	@moneyUpFontSize        “起”的字体大小
	@moneyDelFontSize       原价的字体大小


## tag
tag标签

	@tagsCalHeight: tag标签的高度
	@tagsCalChosePanelOffsetTop: tag标签的弹出的位置offset


## z-index
整站所有的z-index都需要使用变量，从统一的高度来审查，防止出现莫名奇妙的遮盖现象。

z-index的取值范围：  
_页面内部_：1-999  
_公共组件_：1000-9999  
_弹出部分_：>9999  


## carousel
首页轮播

	@carouselIndicatorBackground        轮播指示的背景色
	@carouselIndicatorActiveBackground  轮播指示器的当前激活状态的背景色


## xyz-[header | top | nav | footer]
分别为头部、顶部、导航、页脚的涉及到的公共变量


## sharebox
分享组件

	@shareboxBackground             分享弹出box的背景色
	@shareboxInnerBackground        分享弹出的内部的背景色
	@shareboxInnerHeadBackground    分享弹出的内部的头部的背景色


## media query
定义统一的Media Query查询条件
	
	@iPadDetectQuery: ~"-webkit-min-device-pixel-ratio: 1.25";  查询iPad，供显示retina的logo所用 
