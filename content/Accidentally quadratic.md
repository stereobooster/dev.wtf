---
title: "Accidentally quadratic"
date: 2024-06-19T00:00:00+00:00
draft: false
tags: easy-to-make-mistake
---

Alogrithm that can be implemented in linear time (or space) $0(n)$ instead implemented as quadratic $0(n^2)$. Often happens by accident or due to inattentiveness.

It is very easy to do this mistake by accident. For example, you have function that runs in linear time and you call this function inside the loop - and you have quadratic algorithm.

Terminology taken [here](https://www.tumblr.com/accidentallyquadratic).
