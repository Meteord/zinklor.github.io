import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import logo from './logo.svg';
import datasource from './ultimatedata.txt';
import * as d3 from 'd3';
import './App.css';
import EinheitenCard from "./EinheitenCard";

class App extends Component {

  state = {
    page: 0,
    data: []
  };
  columns = ["Name", "Abkürzung", 'Kosten', 'Kraft',	'Schuss', 'Geschwindigkeit', 'Transport', 'Typ',	'Effekt/Erforschung',	'Hinweise'];
    
  getData(source, columns){
      return d3.tsv(source, function(data) {
        let dataslide = [];
        columns.forEach(column => {
           dataslide.push(data[column])
        });
        return dataslide;
      }).then((data) => {
        console.log(data);
        debugger;
        this.setState({ data });
      })
  }

  componentDidMount() {
    return this.getData(datasource, this.columns);
}
  

  render() {
    const { data, page } = this.state;

    const options = {
      filterType: "dropdown",
      responsive: "stacked",
      filter: true,
      download: false,
      print: true,
      page: page
    };

    const content = data.map((row) =>  
      <div key={row.name} name={row.Name}>      
      <EinheitenCard></EinheitenCard>
  </div>
);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ultimate ultimate Einheitenregister</h1>
        </header>
        
      <MUIDataTable
        data={data}
        columns={this.columns}
        options={options}
      />
      <div>{content}</div>
      </div>
    );  
  }
}

export default App;
