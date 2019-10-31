# 面食计时器应用

| [义大利语](https://github.com/jenkin/pasta-timers-app/blob/master/README.md) | [英文](https://github.com/jenkin/pasta-timers-app/blob/master/README-en.md) | [西班牙文](https://github.com/jenkin/pasta-timers-app/blob/master/README-es.md) | [葡萄牙语](https://github.com/jenkin/pasta-timers-app/blob/master/README-pt.md) | [简体中文](https://github.com/jenkin/pasta-timers-app/blob/master/README-zh_HANS.md) | [...](https://github.com/jenkin/pasta-timers-app/issues/15)

意大利面定时器显示了市场上最常见类型和品牌的意大利面的建议烹饪时间。

![screenshot](https://repository-images.githubusercontent.com/214686946/4b0a8980-ed27-11e9-827f-88954c137291)

## 如何安装

您可以通过浏览器使用此应用程序，也可以通过单击菜单>添加到主屏幕（在Chrome上）将其安装在智能手机上。

## 使用方法

使用下面的按钮搜索意大利面的烹饪时间（左侧图标）或快速访问您喜欢的意大利面（右侧图标）。触摸心脏图标可在您的收藏夹列表中添加或删除粘贴。触摸面食的图像可打开生产者的官方页面，并发现所有详细信息和推荐的食谱。

## 如何贡献

该应用程序是一个基于React和Create React App的渐进式Web应用程序，烹饪时间数据库是中的静态文件`build/timers.json`。数据方案由文件中的`json-schema`描述`timers.schema.json`。您可以检查使用数据库的有效性`AJV-CLI：npx ajv -s timers.schema.json -d public/timers.json`。

要对数据库做出贡献，请打开一个包含以下信息的问题：

* 名字
* 品牌
* 产品线
* 意大利面类型（短或长）
* 烹饪时间（以分钟为单位）
* 官方页面的网址（在制造商的网站上）
* 官方图片网址（在制造商的网站上）

## 煮意大利面

* 在带盖的高锅中煮沸足够的水。每人添加约100克意大利面。
* 当水沸腾时，每700毫升水中加一茶匙的粗盐加盐。
* 扔意大利面，盖上锅盖，直到水再次开始沸腾，然后关闭加热。
* 从煮沸开始到指定的时间煮。
* 在烹饪过程中用钢包转动几次。
* 排干意大利面，调味并趁热食用。
* 敷料中可以少量使用热的煮食水，也可以用手洗碗。

## 警告

所指示的烹饪时间旨在按照制造商的建议用于“义齿”烹饪。
对于口感较软的面团，根据您的口味添加一到两分钟。

## 担保

本应用程序按原样提供，无任何形式的明示或暗示保证。
在任何情况下，作者或版权所有者都不对任何索赔，损害或其他责任负责。

## 个人资料

此应用程序不收集任何个人用户数据
应用程序托管由Github管理 (请参阅 <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">Github Pages</a>).
收藏夹使用  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" rel="noopener noreferrer" target="_blank">localStorage</a> 保存在用户的设备上.

## 版权

所有注册商标和所有图像均为其各自所有者，并且位于其服务器上。
该应用程序徽标的作者是 <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> 的 <a href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a>.

重用许可证

该应用程序的源代码已通过  <a href="https://tldrlegal.com/license/mit-license" rel="noopener noreferrer" target="_blank">MIT</a> 许可以开源形式发布.
通心粉烹饪时间数据库（文件timers.json）使用 <a href="https://tldrlegal.com/license/odc-open-database-license-(odbl)" rel="noopener noreferrer" target="_blank">ODbL</a> 许可证发布.

## 联络

要报告故障，提出更改或提出问题，您可以在 <a href="https://github.com/jenkin/pasta-timers-app/issues" rel="noopener noreferrer" target="_blank">Github</a> 上的项目存储库中打开问题.
