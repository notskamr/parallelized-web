---
title: '|parallelized| - what/why'
toc: false
layout: "layouts/md-layout.njk"
---

## what is _parallelized?_

*parallelized* is a code optimization competition - one where you optimize code in a way that your **software** can actually take advantage of the **hardware**. Teams compete to achieve the maximum possible speedup (over a very naive staff implementation) within three hours, offline! There are teams of two and whichever team achieves the highest speed-up multiple, wins.

- Each team is assigned the same tasks and must complete all tasks
- Teams must first develop the tasks themselves and then optimize them to achieve the highest speedup multiple
- All problem guidelines must be followed and all tasks must be completed
- The guidelines contain details about the elements of the program that must be implemented for correctness (eg. required functions, classes)
  - &gt;= **Note:** Local tests check for correctness and speedup. However, the speedup multiple may not be indicative of the speedup used for scoring due to discrepancies in the hardware used for testing and your systems - thus, it is better if you use the local speedup as a gauge for performance {.text-xs}
