import React,{Component} from 'react';
import './App.css';


// 컴포넌트 생성 코드
// 클래스를 생성하고 render라는 Method를 가지고 컴포넌트를 생성한다.
// 템플릿이라고 생각하자.
class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject title="React" sub="For Powerful FE Framework"></Subject>
        <TOC></TOC>
      </div>
    );
  }
}

class TOC extends Component{
  render(){
    return(
      <ul>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.css">CSS</a></li>
        <li><a href="3.javascript">JavaScript</a></li>
      </ul>
    );
  }
}
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
export default App;
