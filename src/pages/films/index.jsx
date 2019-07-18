import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Films extends Component {

    state = {
        api_url: 'https://ghibliapi.herokuapp.com/films/',
        data: []
      };
    
      componentDidMount() {
        fetch(this.state.api_url)
          .then(result => result.json())
          .then(result => {
            console.log(result);
            this.setState({ data: result });
          });
      }

      render() {
        return (
          <div> 
            <div>
              {this.state.data.map((value, key) => (          
                <div key={value.id}>
                    <p>{value.title}</p>  
                    <Link to='/films/aaa'>
                      <button onClick={() => this.props.onCheckFilmDetail(value.title)}>details</button>   
                    </Link>                    
                </div>
              ))}
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckFilmDetail: (film_url) => dispatch({type: 'SET_FILM_URL', val: film_url})
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Films);