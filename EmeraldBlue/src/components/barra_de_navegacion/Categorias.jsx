import React, {Component} from 'react';
// Importing Module
import ReactDOM from 'react-dom';

class Categorias extends React.Component {
    state = {
      isOpen: false
    };
  
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    
    render() {
      const titulo = this.props.titulo;
      const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
      return (
        <div className="dropdown" onClick={this.toggleOpen} style={this.props.estilo}>
          <a
            className="links"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            {this.props.titulo}
          </a>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <a to="/categorias"  className="dropdown-item">
              {this.props.categorias.uno} 
            </a>
            <a className="dropdown-item" href="#nogo">
              {this.props.categorias.dos}
            </a>
            <a className="dropdown-item" href="#nogo">
              {this.props.categorias.tres}
            </a>
          </div>
        </div>
      );
    }
  }
  export default Categorias;
