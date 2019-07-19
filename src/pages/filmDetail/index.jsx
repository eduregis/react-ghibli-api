import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilmDetail extends Component{

    state = {
        url: this.props.base_url + '/films/' + this.props.film_url,
        dataInfo: {},
        data: []
      };

    componentDidMount() {
        fetch(this.state.url)
            .then(result => result.json())
            .then(result => {
                this.setState({ data: result });
        });    
    }

    render(){
        return (
            <div>
                <div>
                    {console.log(this.state.data)}
                </div>                         
                <button onClick={this.props.onToggleTest}>trocar</button>                
            </div>           
        );
    }
}

const mapStateToProps = state => {
    return {
        base_url: state.base_url,
        film_url: state.film_url
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleTest: () => dispatch(toggleTest('test3'))
    }
}

function toggleTest(str){
    return {
        type: 'SET_TEST',
        str,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);