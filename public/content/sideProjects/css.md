The CSS project is a small package of helpers I find useful when using a theming object. Instead of wrestling with a theme with ten different shades per colour, a Colour class allows you to save a definition of a colour and re-export it in HSLA/RGBA/Hex while giving partial definitions of what you'd like the saturation or alpha to be like when consuming. Works really well with CSS-in-JS libraries like `styled-components`.

```
// Copy a colour but at 50% saturation and get it as a hex code
const someColour = otherColour.override({s: 50}).getHexA()
```