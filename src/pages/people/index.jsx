import React, { Component } from 'react';
import { connect } from 'react-redux';

class People extends Component {
    state = {
        url: this.props.base_url + '/people',
        data: []
      };
    
      componentDidMount() {
        fetch(this.state.url)
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
                    <p>{value.name}</p>                                         
                </div>
              ))}
            </div>
          </div>
        );
    }    
}

const mapStateToProps = state => {
    return {
      base_url: state.base_url
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
     
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(People);