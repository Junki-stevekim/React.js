### 👀Day01
---

1. React.js 개발환경의 종류
 - 공식문서에 익숙해지도록하자.
  >[공식문서]https://reactjs.org
 - Create a New React APP
   - 여러가지 React.js개발에 필요한 ToolChains
   ---
   ```js
   //공식문서
   npx creat-react-app my-app(만들앱이름)   
   cd my-app(Directory Change)
   npm start
   ```
   ---
   -Create React App 을 활용하여 개발할수있도록하자.
 - npm을 사용해서 Create React App을 설치할수 있다.
 - npm 이란? -> node.js 환경에 여러가지 라이브러리를 설치할수 있는 개발 툴이라고 이해하자.
  ```js
  npm install -g create-react-app
  //error 발생시
  Sudo npm install create-react-app
  //버전확인
  create-react-app -v
  ```
  ---

  - npm과 npx의 차이 -> 
  - npm은 프로그램을 설치하는 프로그램이라면
  - npx는 create-react-app이라는 프로그램을 을 임시로 설치해서 한번만 실행하고, 지운다. 장점은 컴퓨터의 공간을 낭비하지않고, 실행할때마다 다시 다운받기때문에 항상 최신버전을 유지한다.
  ---
 ### React-create-app의 디렉토리 구조
 ---
1. public
- index.html이 위치
- React-create-app으로 만든 app이 웹브라우저상에선 index.html이 실행된것
- id 가 root인 태그 div 안에 우리가 만든 컴포넌트들이 들어가서 렌더링된다.
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
- 우리가 만든 모든 컴포넌트들의 소스 디렉토리.
- App.js를 통해 root div에 렌더링된다.
- App.js 실제 우리가 만든 React 컴포넌트.
- import를 통해 index.js에 렌더링된다.
- App.js 파일은 function type과 class type이 있다.
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


