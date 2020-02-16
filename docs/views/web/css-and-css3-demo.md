---
author: 星火燎原@vxhly
title: css 和 css3 实用例子
categories: [web]
tags: [Code, CSS]
date: 2019-08-06 17:03:51
---

::: tip 前言
收集 css3 实用样式表, 内包含 less 和 sass 实用工具, 更多的例子可以前往 [CSS Tricks](https://qishaoxuan.github.io/css_tricks/)
:::
<!-- more -->

## 箭头

### 上箭头

``` css
.top-arrow {
    position: relative;
    height: 20px;
}

.top-arrow:before,
.top-arrow:after {
    position: absolute;
    content: '';
    border-top: 10px transparent dashed;
    border-left: 10px transparent dashed;
    border-right: 10px transparent dashed;
    border-bottom: 10px #fff solid;
}

.top-arrow:before {
    border-bottom: 10px #00adb5 solid;
}

.top-arrow:after {
    top: 1px;
    border-bottom: 10px #fff solid;
}
```

显示效果

<style>.top-arrow { position: relative; height: 20px; }.top-arrow:before, .top-arrow:after { position: absolute; content: ''; border-top: 10px transparent dashed; border-left: 10px transparent dashed; border-right: 10px transparent dashed; border-bottom: 10px #fff solid; }.top-arrow:before { border-bottom: 10px  #00adb5 solid; }.top-arrow:after { top: 1px; border-bottom: 10px #fff solid; }</style>

<div class="top-arrow"></div>

### 左箭头

``` css
.left-arrow {
    position: relative;
    height: 20px;
}

.left-arrow:before,
.left-arrow:after {
    position: absolute;
    content: '';
    border-top: 10px transparent dashed;
    border-left: 10px transparent dashed;
    border-bottom: 10px transparent dashed;
    border-right: 10px #fff solid;
}

.left-arrow:before {
    border-right: 10px #00adb5 solid;
}

.left-arrow:after {
    left: 1px;
    border-right: 10px #fff solid;
}
```

显示效果

<style>.left-arrow{ position: relative; height: 20px; }.left-arrow:before, .left-arrow:after{position: absolute; content: ''; border-top: 10px transparent dashed; border-left: 10px transparent dashed; border-bottom: 10px transparent dashed; border-right: 10px #fff solid; }.left-arrow:before{ border-right: 10px  #00adb5 solid; }.left-arrow:after{ left: 1px; border-right: 10px #ff solid; }</style>

<div class="left-arrow"></div>

## Hover underline animation

::: demo 使用 `transform` 动画

``` vue
<template>
  <p class="hover-underline-animation">把你的鼠标移动到这个文本上看看！</p>
</template>

<style>
.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: #0087ca;
}
.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
```

:::

## underline 代替方案

::: demo 提供代替 `text-decoration: underline` 实现的方案

``` vue
<template>
  <p class="pretty-text-underline">Pretty text underline without clipping descending letters.</p>
</template>

<style>
.pretty-text-underline {
  display: inline;
  text-shadow: 1px 1px #f5f6f9, -1px 1px #f5f6f9, -1px -1px #f5f6f9, 1px -1px #f5f6f9;
  background-image: linear-gradient(90deg, currentColor 100%, transparent 100%);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 1px;
}
.pretty-text-underline::-moz-selection {
  background-color: rgba(0, 150, 255, 0.3);
  text-shadow: none;
}
.pretty-text-underline::selection {
  background-color: rgba(0, 150, 255, 0.3);
  text-shadow: none;
}
</style>
```

::: 

## loading 加载

::: demo 使用 CSS3 实现的加载效果

``` vue
<template>
  <div class="bouncing-loader">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style>
@keyframes bouncing-loader {
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
}
.bouncing-loader {
  display: flex;
  justify-content: center;
}
.bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #8385aa;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}
.bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}
.bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}
</style>
```

:::

## 三角镂空

::: demo 使用 background 中的 `linear-gradient` 来镂空背景

``` vue
<template>
  <div class="eh-flex eh-m-t40 eh-f-ac">

    <div class="hollow-triangle-projecture eh-m-r40"></div>
    <div class="hollow-triangle-sunken"></div>

  </div>
</template>

<style lang="scss">
  @function sqrt($r) {

    $x0: 1;
    $x1: $x0;

    @for $i from 1 through 10 {
      $x1: $x0 - ($x0 * $x0 - abs($r)) / (2 * $x0);
      $x0: $x1;
    }

    @return $x1 * 1px;

  }
  @mixin hollow-triangle-projecture($width, $color) {

    background: linear-gradient(45deg, transparent sqrt($width * $width/2), $color 0) bottom left /50% 100% no-repeat,
    linear-gradient(-45deg, transparent sqrt($width * $width/2), $color 0) bottom right /50% 100% no-repeat;

  }

  @mixin hollow-triangle-sunken($width, $color) {

    background: linear-gradient(-45deg, transparent sqrt($width * $width/2), $color 0) bottom left /50% 100% no-repeat,
    linear-gradient(45deg, transparent sqrt($width * $width/2), $color 0) bottom right /50% 100% no-repeat;

  }

  .hollow-triangle-projecture {

    width: 60px;
    height: 150px;
    @include hollow-triangle-projecture(60, #00adb5);

  }

  .hollow-triangle-sunken {

    width: 60px;
    height: 150px;
    @include hollow-triangle-sunken(60, #00adb5);

  }
</style>

``` 

:::

## 三角镂空-svg

::: demo 使用 svg 来镂空背景

``` vue
<template>
  <div class="shape-separator"></div>
</template>

<style lang="scss">
  .shape-separator {
  position: relative;
  height: 48px;
  background: #333;
}
.shape-separator::after {
  content: '';
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12'%3E%3Cpath d='m12 0l12 12h-24z' fill='%23fff'/%3E%3C/svg%3E");
  position: absolute;
  width: 100%;
  height: 12px;
  bottom: 0;
}
</style>
```

:::

## 排版竖文

::: demo `writing-mode` 可以指定文本的显示方向

``` vue
<template>
  <div class="docs-demo-css">

    <p>会向瑶台月下逢。</p>
    <p>若非群玉山头见, </p>
    <p>春风拂槛露华浓。</p>
    <p>云想衣裳花想容, </p>
    <p>唐·李白</p>
    <p>《清平调·其一》</p>

  </div>
</template>

<style lang="scss">
.docs-demo-css {
  display: flex; 
  text-align: center; 
  p{

    writing-mode: vertical-rl;

  }
}
</style>

``` 

:::

## 文本两端对齐

::: demo 配置 `text-align-last` 可以实现文本两端对齐

``` vue
<template>
  <div>
    <ul class="justify-text">
      <li>账号</li>
      <li>密码</li>
      <li>电子邮件</li>
      <li>通讯地址</li>
    </ul>
  </div>
</template>

<style lang="scss">
.justify-text {
	li {
		margin-top: 5px;
		padding: 0 20px;
		width: 120px;
		height: 40px;
		background-color: #00adb5;
		line-height: 40px;
		text-align-last: justify;
		color: #fff;
		&:first-child {
			margin-top: 0;
		}
	}
}
</style>
```

:::

## 方格背景

::: demo 使用 `linear-gradient` 描绘方格背景

``` vue
<template>
  <div class="square-bg"></div>
</template>

<style lang="scss">
.square-bg {

	width: 500px;
	height: 300px;
	background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%),
		linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);
	background-position: 0 0, 20px 20px;
	background-size: 40px 40px;

}
</style>

``` 

:::

## 多边形

### 三角形

::: demo

``` vue
<template>
  <div class="triangle">
    <div class="triangle-up"></div>
    <div class="triangle-down"></div>
    <div class="triangle-left"></div>
    <div class="triangle-right"></div>
    <div class="triangle-topleft"></div>
    <div class="triangle-topright"></div>
    <div class="triangle-bottomleft"></div>
    <div class="triangle-bottomright"></div>
  </div>
</template>

<style lang="scss">
.triangle {
  display: flex;
  flex-wrap: wrap;
  > div {
    margin: 20px;
  }

  &-up {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid #00adb5;
  }

  &-down {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid #00adb5;
  }

  &-left {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-right: 100px solid #00adb5;
    border-bottom: 50px solid transparent;
  }

  &-right {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 100px solid #00adb5;
    border-bottom: 50px solid transparent;
  }

  &-topleft {
    width: 0;
    height: 0;
    border-top: 100px solid #00adb5;
    border-right: 100px solid transparent;
  }

  &-topright {
    width: 0;
    height: 0;
    border-top: 100px solid #00adb5;
    border-left: 100px solid transparent;
  }

  &-bottomleft {
    width: 0;
    height: 0;
    border-bottom: 100px solid #00adb5;
    border-right: 100px solid transparent;
  }

  &-bottomright {
    width: 0;
    height: 0;
    border-bottom: 100px solid #00adb5;
    border-left: 100px solid transparent;
  }
}
</style>
```

:::

### 弧形箭头

::: demo

``` vue
<template>
  <div class="curvedarrow"></div>
</template>

<style lang="scss">
  .curvedarrow {
    position: relative;
    width: 0;
    height: 0;
    border-top: 9px solid transparent;
    border-right: 9px solid #00adb5;
    transform: rotate(10deg);
    &::after {
      content: "";
      position: absolute;
      border: 0 solid transparent;
      border-top: 3px solid #00adb5;
      border-radius: 20px 0 0 0;
      top: -12px;
      left: -9px;
      width: 12px;
      height: 12px;
      transform: rotate(45deg);
    }
  }
</style>
```

:::

### 爱心

::: demo

``` vue
<template>
  <div class="heart"></div>
</template>

<style lang="scss">
  .heart {
    position: relative;
    width: 100px;
    height: 90px;

    &::after,&::before {
      position: absolute;
      content: "";
      left: 50px;
      top: 0;
      width: 50px;
      height: 80px;
      background: #00adb5;
      border-radius: 50px 50px 0 0;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }

    &::after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }
  }
</style>
```

:::

### 徽章

::: demo

``` vue
<template>
  <div class="badge-ribbon"></div>
</template>

<style lang="scss">
  .badge-ribbon {
    position: relative;
    background: #00adb5;
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-bottom: 40px;

    &::after,&::before {
      content: '';
      position: absolute;
      border-bottom: 70px solid #00adb5;
      border-left: 40px solid transparent;
      border-right: 40px solid transparent;
      top: 70px;
      left: -10px;
      transform: rotate(-140deg);
    }

    &::after {
      left: auto;
      right: -10px;
      transform: rotate(140deg);
    }
  }
</style>
```

:::

