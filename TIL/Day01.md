### ๐Day01
---

1. React.js ๊ฐ๋ฐํ๊ฒฝ์ ์ข๋ฅ
 - ๊ณต์๋ฌธ์์ ์ต์ํด์ง๋๋กํ์.
  >[๊ณต์๋ฌธ์]https://reactjs.org
 - Create a New React APP
   - ์ฌ๋ฌ๊ฐ์ง React.js๊ฐ๋ฐ์ ํ์ํ ToolChains
   ---
   ```js
   //๊ณต์๋ฌธ์
   npx creat-react-app my-app(๋ง๋ค์ฑ์ด๋ฆ)   
   cd my-app(Directory Change)
   npm start
   ```
   ---
   -Create React App ์ ํ์ฉํ์ฌ ๊ฐ๋ฐํ ์์๋๋กํ์.
 - npm์ ์ฌ์ฉํด์ Create React App์ ์ค์นํ ์ ์๋ค.
 - npm ์ด๋? -> node.js ํ๊ฒฝ์ ์ฌ๋ฌ๊ฐ์ง ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ค์นํ ์ ์๋ ๊ฐ๋ฐ ํด์ด๋ผ๊ณ  ์ดํดํ์.
  ```js
  npm install -g create-react-app
  //error ๋ฐ์์
  Sudo npm install create-react-app
  //๋ฒ์ ํ์ธ
  create-react-app -v
  ```
  ---

  - npm๊ณผ npx์ ์ฐจ์ด -> 
  - npm์ ํ๋ก๊ทธ๋จ์ ์ค์นํ๋ ํ๋ก๊ทธ๋จ์ด๋ผ๋ฉด
  - npx๋ create-react-app์ด๋ผ๋ ํ๋ก๊ทธ๋จ์ ์ ์์๋ก ์ค์นํด์ ํ๋ฒ๋ง ์คํํ๊ณ , ์ง์ด๋ค. ์ฅ์ ์ ์ปดํจํฐ์ ๊ณต๊ฐ์ ๋ญ๋นํ์ง์๊ณ , ์คํํ ๋๋ง๋ค ๋ค์ ๋ค์ด๋ฐ๊ธฐ๋๋ฌธ์ ํญ์ ์ต์ ๋ฒ์ ์ ์ ์งํ๋ค.
  ---
 ### React-create-app์ ๋๋ ํ ๋ฆฌ ๊ตฌ์กฐ
 ---
1. public
- index.html์ด ์์น
- React-create-app์ผ๋ก ๋ง๋  app์ด ์น๋ธ๋ผ์ฐ์ ์์์  index.html์ด ์คํ๋๊ฒ
- id ๊ฐ root์ธ ํ๊ทธ div ์์ ์ฐ๋ฆฌ๊ฐ ๋ง๋  ์ปดํฌ๋ํธ๋ค์ด ๋ค์ด๊ฐ์ ๋ ๋๋ง๋๋ค.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```
  
2. src
- ์ฐ๋ฆฌ๊ฐ ๋ง๋  ๋ชจ๋  ์ปดํฌ๋ํธ๋ค์ ์์ค ๋๋ ํ ๋ฆฌ.
- App.js๋ฅผ ํตํด root div์ ๋ ๋๋ง๋๋ค.
- App.js ์ค์  ์ฐ๋ฆฌ๊ฐ ๋ง๋  React ์ปดํฌ๋ํธ.
- import๋ฅผ ํตํด index.js์ ๋ ๋๋ง๋๋ค.
- App.js ํ์ผ์ function type๊ณผ class type์ด ์๋ค.
```js
import React,{Component} from 'react';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">

      </div>
    );
  }
}

export default App;
```


