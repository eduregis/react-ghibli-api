import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Header extends Component {
    render(){
        return (
            <div>
                <Link to="/films">
                    <span>Film</span>
                </Link>
                <Link to="/people">
                    <span>People</span>
                </Link>
                <hr/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        teste: state.teste,
        film_url: state.film_url
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);