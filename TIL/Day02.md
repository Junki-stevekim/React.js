### 👀Day02
---
1. Component를 만드는방법
- 항상 기술은 절망감을 제물로삼는다.
- 기술의 등장으로 문명이 발달하고 사람들은 환호한다...
- React가 없다면?->
  ```html
  <html>
    <body>
      
        <h1>WEB</h1>
    <ul>
    <li><a href="1.html">HTML</li>
    <li><a html="2.CSS">CSS</li>
    <li><a html="3.JavaScript"></li>
    </ul>
    </body>
     </html>
    ```
    - 해당코드가 1억줄이라고 생각해보자..한눈에 코드가 안들어오기때문에 우리의 인지능력밖이게된다.
    - 1억줄의 코드 대신 해당 태그 부분을  특정 이름으로 호출할수 있게해주는것이 Component이다.

  ```html
   <html>
    <body>
      
    <Article></Article> -><h1>Web</h1>
    <Table></Table> -> <ul>의내용</ul>
    </body>
     </html>
     ```
     ---

2. JSX?
    - 우리가 React에서 사용하는 JS언어는 완전한 JavaScript언어가 아닌 유사 JS언어이다.
    - Facebook에서 만든 컴퓨터 언어인 JSX.
    - 우리가 JSX로 코딩을 작성하면, Create-react-App 이 JS언어로 Convert해준다.
  ---
  ### 👀Props
  ---
  1. 우리가 만든 컴포넌트내에 태그들은 언제나 똑같은 값을 구현하기에 아쉽다..
  2. 태그는 속성을 통해 각 태그의 이름을 붙여준다.
  3. React 에서도 Props를 통해 Component에 속성값을 부여해준다.
  ```js
  class Subject extends Component{
  render(){
    return(
      // 컴포넌트는 항상 하나의 최상의 태그로 시작한다.
      <header>  
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}
```

```js
class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject></Subject>
        <TOC></TOC> // 항상 <h1></h1>값과 world wide web이라는 문구를 출력한다...
        <TOC></TOC>
        <TOC></TOC>
      </div>
    );
  }
}
```
---
```js
class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject title="WEB" sub="world wide web"</Subject>
        //이라 지정해주고,
        //컴포넌트를 렌더링할때마다 값을 다르게 주고싶을때,  훨씬 효율적으로 코딩을 할수가있다. 즉 입력값이 되서 Props에 따라 달라지는 출력값을 보여줄수있다.
        //이것이 바로 React props를 활용해서 속성값을 부여해주는 JSX언어이다.
        -------------------------------
      </div>
    );
  }
}
```
EX)
  ```js
  class Subject extends Component{
  render(){
    return(
      // 컴포넌트는 항상 하나의 최상의 태그로 시작한다.
      <header>  
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}
```