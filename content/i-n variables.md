---
title: "i-n variables"
date: 2024-06-18T00:00:00+00:00
draft: false
tags: legacy
year: 1954
---

Have you ever wonder why typically people use `i`, `j`, `k` variables in "for loops"? Example from [wikipedia article](https://en.wikipedia.org/wiki/For_loop):

```c
for (i = 0; i < 100; i++) {
    for (j = i; j < 10; j++) {
        some_function(i, j);
    }
}
```

It is believed that this tradition comes from [Fortran, 1954](https://archive.computerhistory.org/resources/text/Fortran/102679231.05.01.acc.pdf). There were only two types of variables: fixed point (integer) and floating point (real). All variables starting with `i` - `n` were integers. It is not specified in manual, but I think that `i` - `n` were selected as mnemonic technique - it is two first letters in the word i-n-teger.

Here we are 70 years later still using this convention, even so many modern developer haven't even heard about Fortran.
