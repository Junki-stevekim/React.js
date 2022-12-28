import React,{Component} from 'react';

class TOC extends Component{
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