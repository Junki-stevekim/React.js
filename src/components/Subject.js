import React,{Component} from 'react';

class Subject extends Component{
    render(){
      return(
        // 컴포넌트는 항상 하나의 최상의 태그로 시작한다.
        <header>  
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage(); //Component안의 함수호출
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;