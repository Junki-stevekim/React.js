import React,{Component} from 'react';

class TOC extends Component{
  shouldComponentUpdate(newProps, newState){ //페이지를 새로 고치거나 행동을 할때, render함수의 재 호출 여부를 개발자가 정할수있음, 성능향상위해
    if(this.props.data === newProps.data){
      return false;
    }
    
    return true; // true면 render() 호출, false면 호출하지 않도록 약속되어있다.
  }  
  render(){
      var lists =[];
      var data =this.props.data;
      var i=0;
      while(i<data.length){
        lists.push(
        <li key={data[i].id}>
          <a 
          href={"/content/"+data[i].id}
          data-id={data[i].id} //속성값을 부여
          onClick={function(e){
            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id); //onChangePage Props 실행
          }.bind(this)}>
            {data[i].title}</a></li>);
        i=i+1;
      }
      return(
        <ul>
          {lists}
        </ul>
      );
    }
  }

  export default TOC;