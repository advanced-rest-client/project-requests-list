[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/project-requests-list.svg)](https://www.npmjs.com/package/@advanced-rest-client/project-requests-list)

[![Build Status](https://travis-ci.org/advanced-rest-client/project-requests-list.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/project-requests-list)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/project-requests-list)

# project-requests-list

A list of requests in the project details view.

```html
<project-requests-list></project-requests-list>
```

### API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/project-requests-list
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@advanced-rest-client/project-requests-list/project-requests-list.js';
    </script>
  </head>
  <body>
    <project-requests-list></project-requests-list>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from '@polymer/polymer';
import '@advanced-rest-client/project-requests-list/project-requests-list.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <project-requests-list></project-requests-list>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Installation

```sh
git clone https://github.com/advanced-rest-client/project-requests-list
cd api-url-editor
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
