import React from 'react';
import './App.css';
import DirectoryPage from './components/DirectoryPage';
import employees from './employees.json'
import original from './original.json'
import Form from './components/Form'
import Wrapper from './components/Wrapper'
import Title from './components/Title'
import cloneDeep from 'lodash/cloneDeep';


let toggle=false;

class App extends React.Component {
  state={
    search: "",
    employees
  };

  handlesort=()=>{ 
   
    if(toggle){
      const abc = cloneDeep(original)
      this.setState({employees: abc})
      toggle=false

    }else{
      const empl=this.state.employees.sort((a,b) => {
      // this.setState({employees:employees})
      // var upperA= a.firstname.toUpperCase();
      // var upperB= b.firstname.toUpperCase();
      if (a.firstname<b.firstname) return -1;
      else if(a.firstname>b.firstname) return 1;
      else return 0;
  }); 
    toggle=true;

    this.setState({employees:empl})
  }

    
  }


  handleInputChange=(event)=>{
    console.log("Hii")
    this.setState({employees:employees});
    event.preventDefault();
    // let value=event.target.value;
    this.setState({
      search:event.target.value
    },()=>this.handlefilter())

  }

  handlefilter=()=>{
    // this.setState({employees:employees});
    console.log("88888888",this.state.search)
    const emp= this.state.employees.filter(person=>person.firstname.toLowerCase().includes(this.state.search.toLowerCase()))
    console.log("Befor state",emp)
    this.setState({employees:emp})
    console.log("after state",emp)
  }

  render(){
    return (
      <Wrapper>
        <Title>Employee Directory
        <p className="phead">Click on carrot to filter by Name or use the search box to narrow your results</p>
        </Title>
        
        <Form
        handleInputChange={this.handleInputChange.bind(this)}
        handleSubmit={this.handleSubmit}
        search= {this.state.search}
        
        />
        
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className="columnimg">Image</th>
            <th scope="col"className="column"onClick={this.handlesort}>Name ▼</th>
            <th scope="col"className="column">Phone</th>
            <th scope="col"className="column">Email</th>
            <th scope="col"className="column">DOB</th>
          </tr>
        </thead>
        </table>
      {this.state.employees.map(employee=>(
        <DirectoryPage
        id={employee.id}
        key={employee.id}
        image={employee.image}
        name={employee.fullname}
        phone={employee.phone}
        email={employee.email}
        dob={employee.dob}
        />
      ))}
    
      </Wrapper>
      );
  }
  
  }
  
export default App;
