
ng-emoji
===================

emojify directive.

**See the <a href="https://github.com/Mehrdad-Dadkhah/ng-emoji/tree/master/demo" target="_blank">DEMO</a> page.

Table of Content:
* [Features](#features)
* [Install](#install) ([Manual](#manual))
* [Usage](#usage)

##<a name="features"></a> Features
* show/hide emoji panel
* add emoji code to input

##<a name="install"></a> Install

* <a name="manual"></a>**Manual**: download latest from [here](https://github.com/Mehrdad-Dadkhah/ng-emoji/tree/master)

```html
<script src="../src/emojify/src/emojify.js" type="text/javascript"></script>
<script src="../src/angular.min.js" type="text/javascript"></script>
<script src="../src/ngEmoji.js" type="text/javascript"></script>
<script src="./demoApp.js" type="text/javascript"></script>
```

##<a name="usage"></a> Usage

```html
<h2>input</h2>
<input name="test[1]" ng-model="test[1]" value=""/>

<h2>emoji panel</h2>
<emoji input-model="1" input-name="test"></emoji>
```