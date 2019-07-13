import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/films/aaa">
                      <button>details</button>   
                    </Link>                    
                </div>
              ))}
            </div>
          </div>
        );
    }
}

export default Films;