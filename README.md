<!-- markdownlint-disable MD033 MD041 -->

<div id="top"></div>

> **Note**: this is not done

<!-- todo: image -->
<img width="68.5" height="97" style="float:left;margin:0 10px 0 0;" alt="logo" src="img/Screenshot%202023-06-16%20212118.png">

# very accurate bsod

very accurate bsod made in html. Fear the [fake bsod](https://fakebsod.com).

* **Truely authentic** - Uses the Segoe UI font, and uses the qrcode5.bmp file from *bootres.dll*, a file from the operating system.

* **Scales to monitors <a href="#1"><sup>1</sup></a>** - No matter your **COMPUTER** screen size, anything above ~600px width & length should fit. <a href="#2"><sup>2</sup></a>

* **More accurate than other solutions** - try to search for fake bsod online. Some may be accurate, some may not be.

<!-- why is this a link -->

* **Open source** - Absolutely true

* **Minimal** - CSS and HTML are so simple that even beginners can understand it, and small enough that the network can load it in time. <sup>forget about javascript</sup>

* **Tested** - please laugh.

## why did i make this?

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

## how do i use it

**FOR STUDENTS** don't use this to skip school.

**FOR WEBSITE ADMINISTRATORS** if you're thinking of putting this on your website to get users to install malware, firstly, what the heck is wrong with you, and two, this won't get anyone either. Unless you get them to hit f11 first or something or autofullscreen javascript etc

In other words, if you're an administator, and you want to use this maliously, make sure your target is grandmas. This actually won't trick anyone.

**ANYTHING ELSE** this wont work either

## features

<details>
<summary>Windows documentation</summary>

hit any key to increment the ``% complete`` counter

> **don't want that to happen?** use the #disablePercentDone web argument/link fragment.
>>*okay dont tell anyone but i couldn't get the counter to work by timing because while(true) lags everything*.

</details>

<!-- <details>
<summary>Mac documentation</summary>
nah
</details> -->

<details>
<summary>Linux documentation</summary>

You dont do anything here. The javascript is a blinking cursor.

</details>

### configurable

How to configure the pages to your liking

<details>
<summary>Configuring the fake Windows BSOD</summary>

in javascript, call ``changeProgressPercentage();``.

**example**:

```JAVASCRIPT
changeProgressPercentage("69");
```

this will change the thing from "0% complete" to "69% complete".

> **Warning**: you do not need to add a "%".
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

*maybe* add macos screen as an option

~~Add Linux's kernel panic.~~

Extend Linux's kernel panic.

*scale* display size if your display size is small.

### disclaimers

<div id="1"></div><sup>1 - it works on MY machine.</sup>
<div id="2"></div><sup>2 - i never tested this</sup>

# <a href="#top">back to top</a>
