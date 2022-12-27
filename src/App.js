import React,{Component} from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';


// 컴포넌트 생성 코드
// 클래스를 생성하고 render라는 Method를 가지고 컴포넌트를 생성한다.
// 템플릿이라고 생각하자.
class App extends Component{
  constructor(props){ //constructor 함수는 항상 컴포넌트 최상위에 위치.
    super(props); //state값을 초기화.
    this.state={
      subject:{title:'React',sub:'World Wide Web!'}
    }
  }
  render(){
    return(
      <div className="App">
        <Subject title={this.state.subject.title} 
        sub={this.state.subject.sub}>

        </Subject>
        <TOC></TOC>
      </div>
    );
  }
}




export default App;
