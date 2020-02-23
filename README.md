# dev.wtf

[![Netlify Status](https://api.netlify.com/api/v1/badges/56042058-f77b-4bfd-a9a6-edd42683528a/deploy-status)](https://app.netlify.com/sites/devwtf/deploys)

## WTF developers are talking about?

Modern software development is a complex discipline. A lot of jargon, terminology, slang, emojis, memes and cultural references make it harder for newbies to start.

What if we collectively build reference ~~book~~ website of terminology and jargon that modern software developers use.

I imagine it like a mix of urbandictionary for developers and encyclopedia of the basics of computer science.

### Alternatives

"But there are a lot of alternatives" you may think, for example:

- [Self-Defined Dictionary](https://github.com/tatianamac/selfdefined) A modern dictionary about us. We define our words, but they don't define us.
- [urbandictionary](https://www.urbandictionary.com/) is great for phenomena jargon, but not developer specific
- [MDN](https://developer.mozilla.org) is a great resource, but it scoped to browser/JS specific subjects
- [emojipedia](https://emojipedia.org/) all you want to know about emojis
- [Functional Programming Jargon](https://github.com/hemanth/functional-programming-jargon) - about functional terminology
- [WikiWikiWeb](http://wiki.c2.com/) - some interesting opinions about software development
- [The Jargon File](http://www.catb.org/~esr/jargon/html/go01.html) - a comprehensive compendium of hacker slang illuminating many aspects of hackish tradition, folklore, and humor
- [New Hacker's Dictionary](https://archive.org/stream/jarg422/jarg422.txt)

(do you know good alternatives? please let me know)

Yes and no. Yes, there are a lot of great resources. No, they are not covering all areas, so you need to consult more than one source, terminology can differ. I feel like the situation can be improved.

## What?

### For developers

When the developer says "PR" they most likely mean pull request rather than public relations. This reference would focus on software development related topics.

### Newbie friendly

> A monad is a monoid in the category of endofunctors, what's the problem?
>
> -- Joke from [A Brief, Incomplete, and Mostly Wrong History of Programming Languages](http://james-iry.blogspot.com/2009/05/brief-incomplete-and-mostly-wrong.html)

Explanations should be done in an approachable way, obviously, there are limits to which things can be simplified. We still can't properly explain quantum physics to 5 years old, but we need to keep trying.

A good example of an explanation of complex subject made approachable is [Khan Academy explanation of public-key cryptography with colors](https://www.khanacademy.org/computing/computer-science/cryptography/modern-crypt/v/diffie-hellman-key-exchange-part-1).

### Basics

I struggle to find some basics explained, people often skip explaining basics and write about complex stuff (something they find interesting and challenging, I guess).

There is a good piece on that matter - [Fundamental Concepts in Programming Languages](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.332.3161&rep=rep1&type=pdf) by Christopher Strachey, but it is from 1967 (a lot of things are still relevant, but some terminology is outdated).

### Consistency

Different programming languages use different terminology to represent the same concept, for example, vector, array, list, queue all can mean the same (or not). It would be nice to reach some consistency and to be able to list correspondence between different languages, (so-called [Rosetta Stone](http://rosettacode.org/wiki/Rosetta_Code:About)).

### Not an API reference

The idea is to cover basic concepts and jargon, not to become a reference of API. We don't want to replace [devdocs](https://devdocs.io/) or [MDN](https://developer.mozilla.org).

### Critical thinking

A lot of ideas are presented as "best" practices, but there are no silver bullets, all solutions come with trade-offs. Those tradeoffs should be highlighted, so the reader could reach their conclusions.

For example:

- design patterns often presented without listing [downsides](https://www.deconstructconf.com/2017/brian-marick-patterns-failed-why-should-we-care) or [alternatives](https://github.com/thma/LtuPatternFactory)
- functional programming is often advocated as the ultimate solution, but [there are use cases for other paradigms as well](https://www.youtube.com/watch?v=449j7oKQVkc&t=1s)

### Standing on the shoulder of giants

This is not an attempt to redo everything from scratch. If some of the subjects already explained in a good way by other sources, we can quote that.

### Correct, but not boring

The idea is to give correct definitions for computer science terminology, but we can have fun along the way and drop memes and some art here or there.

## How?

This will be an opensource project. A static website generated from markdown files with front matter, same concept as Jekyll, Hugo or Gatsby.

For now, the [source will be hosted at Github](https://github.com/stereobooster/dev.wtf), so anybody with Github account would be able to contribute the content.

### Implementation

The main focus is on the content, implementation is less important. Anything that works with markdown files will work. I chose to use Hugo for MVP (minimal viable product), but this can be changed later.

## Examples

Some examples of subjects that reference may cover (or may not, because this is a community-driven project):

- Computer science terminology: array, closure
- Development terminology: console, server
- Acronyms: a11y (accessibility), l10n (localization)
- Phenomena jargon: bikeshedding, gatekeeping, 10x
- Professional jargon: vulns (vulnerabilities), repo (repository)
- Internet shortenings and emojis: thx (thanks), `(╯°□°)╯︵ ┻━┻` (flip table)

## Details

Each article composed of at least title and definition. Optional parameters:

- cover image: for social networks
  - can be generated automatically. like they do for dev.to
- tags
- related - related articles
- aka - other names for the terms
  - can be used to generate redirect pages

## How can I help?

- [Ask questions](https://github.com/stereobooster/dev.wtf/issues). If you find some terminology confusing open issue asking for an explanation
- [Answer questions](https://github.com/stereobooster/dev.wtf/new/master/content/posts). Send pull requests with answers
- Edit language. Some authors will appreciate help in fixing typos and errors
- Add pictures. You don't have to be a developer to contribute, you can help by providing cover images and helping with design-related things
- [Improve code](https://github.com/stereobooster/dev.wtf). Do you have an idea on how to improve the website? Please send PR.

## Other ideas

- [Multi-Layer Dictionary](http://learnthesewordsfirst.com/about/what-is-a-multi-layer-dictionary.html)
- [Interactive, visual explanations](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)

## PS

I need to mention that Sara Vieira, best developer avocado I know, had the [same idea](https://github.com/SaraVieira/webdev.wtf/issues/1).

## Development

- [Hugo](http://gohugo.io/) - A general-purpose website framework—written in Go—that generates static webpages.
- [Parcel](https://parceljs.org/) - A "blazing" fast, zero configuration web application bundler.
- PostCSS
- fork of [hugo-pipes-parcel](https://github.com/budparr/hugo-pipes-parcel)
- see package.json (lazysizes, quicklink)

## License

Content is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/) unless stated otherwise.

Code is licensed under [MIT](https://opensource.org/licenses/MIT).
