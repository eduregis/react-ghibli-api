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
                console.log(result)
        });    
    }

    render(){
        return (
            <div>
                <div>
                    <h1>{this.state.data.title}</h1>
                    <h3><strong>Diretor: </strong>{this.state.data.director}</h3>
                    <h3><strong>Produtor: </strong>{this.state.data.producer}</h3>
                    <h3><strong>Ano de lançamento: </strong>{this.state.data.release_date}</h3>                    
                    <h3><strong>Nota da Crítica: </strong>{this.state.data.rt_score}%</h3>
                    <p><strong>Descrição: </strong>{this.state.data.description}</p>
                
                </div>                
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
       
    }
}

function toggleTest(str){
    return {
        type: 'SET_TEST',
        str,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);