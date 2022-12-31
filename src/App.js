import React,{Component} from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';

// 컴포넌트 생성 코드
// 클래스를 생성하고 render라는 Method를 가지고 컴포넌트를 생성한다.
// 템플릿이라고 생각하자.
class App extends Component{
  constructor(props){ //constructor 함수는 항상 컴포넌트 최상위에 위치.
    super(props); //state값을 초기화.
    this.max_content_id=3;
    this.state={
      mode:'create', // 페이지 구분 , 동적페이지 생성
      selected_content_id:2, //기본적으로 2번 컨텐트가 선택되게 설정.
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
    var _title,_desc,_article=null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article= <ReadContent title={_title}  desc={_desc}></ReadContent>
    }else if (this.state.mode === 'read'){
      var i=0; //contente안의 id값을 반복문을 통해 선택되게 설정.
      while(i<this.state.contents.length){
        var data = this.state.contents[i]; //현재 데이터
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break; //while문 종료
        }
        i= i+1; //1씩증가
      }
      _article= <ReadContent title={_title}  desc={_desc}></ReadContent>
    } else if(this.state.mode === 'create'){
      _article= <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id =this.max_content_id+1;
        
       
          var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title,desc:_desc}
          )
        this.setState({
          contents:_contents
        });
      }.bind(this)}></CreateContent>
    }
    return(
      <div className="App">
        <Subject title={this.state.subject.title} 
        sub={this.state.subject.sub}
          onChangePage={function(){ //Component안의 event만들기 함수를 호출하도록한다.
            this.setState({mode:'welcome'});
          }.bind(this)}>
        </Subject>
           {/* <header>  
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault(); // 태그에 기본동작을 막는다. 즉 a태그는 페이지가 새로 렌더링되는것을 막아줌.
            // this.state.mode='welcome'; //리액트에서는 event function안의 this는 정의된값이없다. 그래서 함수가 끝난직후 bind(this)를 선언
            this.setState({ // state값을 변경하기위해 setState함수선언
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <TOC onChangePage={function(id){ //event 호출 -> 함수실행
          this.setState({mode:'read',selected_content_id:Number(id)});
        }.bind(this)} 
        data={this.state.contents}></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>  
        {_article} 
      </div>
    );
  }
}




export default App;
