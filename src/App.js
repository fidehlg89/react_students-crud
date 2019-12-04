import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Layout from "./components/layout"
import StudentList from "./components/student/index"

class App extends Component {
  render(){
    return (      
        <Layout className="col-xs-12">
          <StudentList/>
        </Layout> 
      
    );
  }  
}

export default App;
