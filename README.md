# AIRhitect

This is Landing page created with [next](https://nextjs.org/docs/getting-started), [material-ui](https://material-ui.com/getting-started/installation/), [framer-motion](https://www.framer.com/api/motion/), [styled-components](https://styled-components.com/docs)

## Demo

If you want to see the demo of this proyect deployed, you can visit [Demo of the proyect](https://air-hitect-eight.vercel.app/)

## Installation

To install and run this proyect just type and execute

```bash
npm install
```

You need install the styled components babel plugin as a dev dependency

```bash
npm i -D babel-plugin-styled-components
```

or

```bash
yarn add -D babel-plugin-styled-components
```

and set .babelrc

```bash
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```
