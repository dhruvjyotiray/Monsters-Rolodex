// import { Component } from "react";
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component"

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);

  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    let newFiltered = monsters.filter((monsters) => {
      let smallCase = monsters.name.toLowerCase();
      let len = searchField.length;
      let currVal = smallCase.slice(0, len);
      return searchField.toLowerCase() === currVal;
    });
    setFilteredMonster(newFiltered);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    let searchFieldString = event.target.value.toUpperCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">The Monsters' Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search monsters..."
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         return response.json();
//       })
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     let searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     // console.log('render from App.js')
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     let filtered = monsters.filter((monsters) => {
//       let smallCase = monsters.name.toLowerCase();
//       let len = searchField.length;
//       let currVal = smallCase.slice(0, len);
//       return searchField.toLowerCase() === currVal;
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">The Monsters' Registry</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Search monsters..."
//           className="monsters-search-box"
//         />
//         <CardList monsters={filtered} />
//       </div>
//     );
//   }
// }

export default App;
