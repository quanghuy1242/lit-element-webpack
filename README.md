# Install
```
git clone git@github.com:quanghuy1242/lit-element-webpack.git my-app
cd my-app
rm -rf .git (Unix base)
rm -force .git (Powershell)
git init
git add .
git commit -m 'initial commit'
npm install
```

# Build
```
npm run build
```

# Serve
```
npm start
```

# Demo
[Demo](https://lit-element-qh.netlify.com)

# Alternative (Not Recommended)
## Install Dependencies
```
npm install --save-dev polymer-cli
npm install lit-element
```
## Create `app-main.js`
```javascript
import { LitElement, html, css } from 'lit-element';

class AppMain extends LitElement {
  static get properties() {
    return {
      name: { type: String }
    }
  }

  static get styles() {
    return css`
      :host {
        background-color: white;
        color: black;
      }
    `;
  }
  
  constructor() {
    super();
    this.name = 'Quang Huy';
  }

  render() {
    return html`
      <p>Home: ${this.name}</p>
    `;
  }
}

customElements.define('app-main', AppMain);
```
## Create `index.js`
```javascript
import './app-main';
```
## Create `index.html`
```html
<!doctype html>
<html>
<head>
  <title>LitElement Example</title>
</head>
  <body>
    <app-main></app-main>
    <script type="module" src="index.js"></script>
  </body>
</html>
```
## Serve and Build
```
polymer serve
polymer build
```
