import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import logo from './logo.svg';
import datasource from './data.csv';
import * as d3 from 'd3';
import './App.css';

class App extends Component {

  state = {
    page: 0,
    count: 100,
    data: []
  };


  getData(source){
      return d3.csv(source, function(data) {
       console.log(data); 
        return [data.einheit,data.abkürzung];
      }).then((data) => {
        console.log(JSON.stringify(data));
        this.setState({ data });
      })
  }

  componentDidMount() {
    return this.getData(datasource);
}
  

  render() {
    const columns = ["Einheit", "Abkürzung"];
    const { data, page, count } = this.state;

    const options = {
      filterType: "dropdown",
      responsive: "stacked",
      filter: true,
      download: false,
      print: true,
      count: count,
      page: page
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ultimate ultimate Einheitenregister</h1>
        </header>
        
      <MUIDataTable
        data={data}
        columns={columns}
        options={options}
      />
      </div>
    );  
  }
}

export default App;
