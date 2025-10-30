---
title: 通配符
description: 的通配符查找
pubDate: 2025-10-30
date: 2023-10-28
published: 2025-10-30
draft: true
tags: [通配符, PC]
category: PC
---

> [!TIP]
> 通配符是计算机领域中用于模糊匹配的特殊语句<br>
> [引用自百度百科](https://baike.baidu.com/item/%E9%80%9A%E9%85%8D%E7%AC%A6/92991)

# `*` 通配符

匹配任意数量的任意字符<br>
如 `a*` 即匹配所有 `a` 开头的字符串

# `?` 通配符

匹配单个任意字符<br>
如 `a?c` 即匹配 `a` 开头中间任意一个字符后接 `c` 的字符串

# `[]`通配符

> [!WARNING]
> 此通配符仅Linux shell可用

此通配符有多种用法
- `[list]` 匹配 `list` 中的字符
- `[字符-字符]` 匹配字符区间 如 `[a-c]` 即 `abc`<br> **注意:** 多个字符区间格式为 `[a-zA-Z]`
- `[!list]` 或 `[^list]` 匹配**除 `list` 以外的字符** (此语法适用字符区间)

# `{}` 通配符

> [!WARNING]
> 此通配符仅Linux shell可用

匹配 `{}` 中的字符串
如 `{.txt,.word}` 即匹配 `.txt` 或 `.word`