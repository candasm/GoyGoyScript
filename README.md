[GoyGoyScript](http://emirkarsiyakali.kd.io/goygoyscript)
==========
![Turkish Flag](/assets/img/flag.png)  
GoyGoyScript lets you write JavaScript in Turkish; Finally there is a way for Turks to code in their native language!
It is named after [goygoy](https://eksisozluk.com/goygoy--91713), the sacred Turkish schmooze.

See it in action [here](http://emirkarsiyakali.kd.io/goygoyscript). 
### Including GoyGoyScript files in your HTML

- Include [goygoyscript.js](dist/goygoyscript.js) and [goygoyscript.browser.js](dist/goygoyscript.browser.js).
- Make sure your html is set to allow utf-8 characters (add `<meta charset="utf-8">` in the <head>).

GoyGoyScript supports the `text/goygoyscript` MIME type. Any script tag with that type will be compiled and run automatically:
```html
<script type="text/goygoyscript">
  eğer (x < 5) {
    konsol.log("Merhaba!");
  } değilse {
    konsol.log("Merhaba!");
  }
</script>
```

You can also specify a `src` for your script tags: 
```html
<script type="text/goygoyscript" src="goygoyconf.goygoy"></script>
```

#### Optional

##### Convert from GoyGoyScript to JavaScript:

```javascript
GoyGoyScript.turkishToEnglish(code); // returns a string representing the translated code
```

##### Convert from JavaScript to GoyGoyScript:

```javascript
GoyGoyScript.englishToTurkish(code); // returns a string representing the translated code
```

### Missing/incorrect translations?
You can see the translations over [here](https://github.com/emir/GoyGoyScript/blob/gh-pages/dist/goygoyscript.js#L4). Feel free to submit a pull request!

###TO-DOs
- Syntax highlighting for unicode chars
- npm support for command line compiling
- Add more translations!!! (ex: Array.pop, push, etc...)
