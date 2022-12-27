import React,{Component} from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Contents from './components/Contents';


// 컴포넌트 생성 코드
// 클래스를 생성하고 render라는 Method를 가지고 컴포넌트를 생성한다.
// 템플릿이라고 생각하자.
class App extends Component{
  constructor(props){ //constructor 함수는 항상 컴포넌트 최상위에 위치.
    super(props); //state값을 초기화.
    this.state={
      mode:'welcome', // 페이지 구분 , 동적페이지 생성
      subject:{title:'React',sub:'World Wide Web!'},
      welcome:{title:'Welcome',desc:'Hello React!!'},
      contents:[
        {id:1,title:"HTML", desc:"HTML is HyperText...."},
        {id:2,title:"CSS", desc:"CSS is for Design...."},
        {id:3,title:"JavaScript", desc:"JavaScript is for interactive...."}
      ]
    }
  }
  render(){ //props나 state가 새로고침되면 render함수도 새로 호출된다. 즉 다시 렌더링됨.
    var _title,_desc=null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if (this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return(
      <div className="App">
        <Subject title={this.state.subject.title} 
        sub={this.state.subject.sub}>

        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Contents title={_title}  desc={_desc}></Contents>
      </div>
    );
  }
}




export default App;
