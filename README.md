<!-- markdownlint-disable MD033 MD041 -->

<div id="top"></div>

<!-- > **Note**: this is not done -->

<!-- todo: image -->
<img width="68.5" height="97" style="float:left;margin:0 10px 0 0;" alt="logo" src="img/Screenshot%202023-06-16%20212118.png">

# Very Accurate BSOD

<br>

<!-- damn forthebadge has expired or something -->
[![forthebadge](https://raw.githubusercontent.com/BraveUX/for-the-badge/master/src/images/badges/ctrl-c-ctrl-v.svg)](https://github.com/BraveUX/for-the-badge)
[![forthebadge](https://raw.githubusercontent.com/BraveUX/for-the-badge/master/src/images/badges/open-source.svg)](https://github.com/BraveUX/for-the-badge)

[![forthebadge](https://raw.githubusercontent.com/BraveUX/for-the-badge/master/src/images/badges/you-didnt-ask-for-this.svg)](https://github.com/BraveUX/for-the-badge)
[![forthebadge](https://raw.githubusercontent.com/BraveUX/for-the-badge/master/src/images/badges/validated-html5.svg)](https://github.com/BraveUX/for-the-badge)

[![forthebadge](img/works-exclusively-on-firefox.svg)](https://github.com/BraveUX/for-the-badge)
[![forthebadge](img/you-can-milk-this.svg)](https://github.com/BraveUX/for-the-badge)

The ultimate fake 'crash screen' for nobody's everyday needs

## "Features"

* **Truely authentic** - Uses the right font & also images extracted from system files if needed

* **Scales to monitors <a href="#1"><sup>1</sup></a>** - No matter your **COMPUTER** screen size, anything above ~600px width & length should fit. <a href="#2"><sup>2</sup></a>

* **Not just an image** - It's text.

* **Open source** - Absolutely true

* **Minimal** - CSS and HTML are so simple that even beginners can understand it, and small enough that the network can load it in time. <sup>forget about javascript</sup>

* **Tested** - you cant test html.

## Why did I make this?

every single fake bsod website has some inaccuracy, so i thoght, "what is so difficult in making one?"

**now i know**.

> **You**: wait doesn't this mean this also has some inaccuracy?
>
> **Me**: <u>***yes***</u>
>
> **You**: then why would i use this?
>
> **Me**: ***you don't.*** if you still want to, read below
>
> **You**: 👍

## How do I use it

**FOR STUDENTS** yeah I wouldn't try using this to skip classes.

**FOR WEBSITE ADMINISTRATORS** if you're thinking of putting this on your website to get users to install malware, firstly, what the heck is wrong with you, and two, this won't trick anyone. You're welcome to try, though.

**ANYTHING ELSE** this wont work either

> **You**: but what if
>
> **Me**: nah
>
> **You**: b-
>
> **Me**: nope.
> <!-- lmao trailing whitespace -->
> **You**:  
>
> **Me**: absolutely not.

## Features

<details>
<summary>Windows BSOD specific features</summary>

The ``% complete`` counter increments automagically.

> **don't want that to happen?** use the #disablePercentDone web argument/link fragment.

</details>

<!-- <details>
<summary>Mac documentation</summary>
nah
</details> -->

<details>
<summary>Linux Kernel Panic specific features</summary>

You dont do anything here. The javascript is a blinking cursor.

</details>

### configurable

How to configure the pages to your liking

<details>
<summary>Configuring the fake Windows BSOD</summary>

So you may use javascript to manage it, just remember to link it, or make it inline.

in javascript, call ``changeProgressPercentage();``.

**example**:

```JAVASCRIPT
changeProgressPercentage("69");
```

this will change the thing from "0% complete" to "69% complete".

> **Warning**: Do not add a "%".
>
> **Note**: you can make this call say anything you want, and is not limited to numbers.

**Changing the bugcheck code**:

You can make the bugcheck code anything, so you can change it from ``CRITICAL_PROCESS_DIED`` to ``CRITICAL_OBJECT_TERMINATION``.

do it like this:

```JAVASCRIPT
changeBugcheckCode("CRITCAL_OBJECT_TERMINATION");
```

</details>

<details>
<summary>Configuring the fake Linux Kernel panic</summary>

**Currently, you do not.**

</details>

## requirements

You need the segoe ui font, in other words, just use Windows to load this

A browser capable of loading spaghetti css and spaghetti js.

**TESTED ON FIREFOX ONLY**.

## roadmap

**Strikethrough text are completed tasks.**

add macos screen as an option

~~Add Linux's kernel panic.~~

Extend Linux's kernel panic.

*scale* display size if your display size is small.

## Legal

Licensed under mit, attribution is required.

### disclaimers

<div id="1"></div><sup>1 - it works on MY machine.</sup>
<div id="2"></div><sup>2 - i never tested this</sup>

# <a href="#top">back to top</a>
