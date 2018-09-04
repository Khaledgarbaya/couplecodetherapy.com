---
title: "Getting Started with CSS"
number: 3
url: https://anchor.fm/couple-code-therapy/embed/episodes/Getting-Started-with-CSS-e24prj
slug: "therapies/getting-started-with-css"
date: "2018-09-05"
type: "show"
publish: true
tags:
    - programming
    - html
    - css
---

# Getting Started with CSS

In this episode, we talk about CSS and how someone can style HTML element in their website.
We'll cover how to select an element to style in CSS, CSS specificities and more...

## Show Notes

### What is CSS ?

- CSS stands for Cascading Style Sheets.
- CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
- CSS saves a lot of work. It can control the layout of multiple web pages all at once.

### How to include css in your page

CSS can be added to HTML elements in 3 ways:

- Inline - by using the style attribute in HTML elements
- Internal - by using a `<style>` element in the `<head>` section
- External - by using an external CSS file

The common way to add css is to keep the styles in a seperate css file example: style.css

### CSS Selector

when using Internal and external css you can select an element to style using the html element name, classes and ids.

A class can be used in multiple HTML element to share the same style and for unique styles you can use ids.
An HTML element can have multiple classes.

### CSS specificities

If there are two or more conflicting CSS rules that point to the same element, the browser follows some rules to determine which one is most specific and therefore wins out.

Example:
- `p`
- `#content p`
- `<div id="content"><p style="color: #ffffff">this is some text</p></div>`

The specificity of the frist selector is 1 (one element)
The specificity of the second selector is 101 (one ID reference and one element)
The specificity of the third selector is 1000 (inline styling)

Since 1 < 101 < 1000, the third rule has a greater level of specificity, and therefore will be applied.

### Links
 
Visual studio code: [https://code.visualstudio.com/](https://code.visualstudio.com/)

Website: [https://couplecodetherapy.com](https://couplecodetherapy.com)

Twitter: [https://twitter.com/cplecodetherapy](https://twitter.com/cplecodetherapy)
