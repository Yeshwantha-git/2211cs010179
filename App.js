function App(){
    const data="Hello! Iam Guna"
    return(
      <div>
        <User1 data={data}/> 
      </div>
    );
  };
  
  //user 1 component
  function User1({data}){
    return<User2 data={data}/>
  }
  
  //user 2 component
  function User2({data}){
    return<User3 data={data}/>
  }
  
  //user 3 component
  function User3({data}){
    return<User4 data={data}/>
  }
  
  //user 4 component
  function User4({data}){
    return<div>(data)</div>
  
  }
  
  export default App;