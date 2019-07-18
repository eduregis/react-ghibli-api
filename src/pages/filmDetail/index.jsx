import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilmDetail extends Component{
    render(){
        return (
            <div>
                <h2>{this.props.teste}</h2>
                <button onClick={this.props.onToggleTest}>trocar</button>
                <div>
                    {this.props.modules.map(module => (
                        <div key={module.id}>
                            <div>{module.title}</div>
                        </div>
                    ))}        
                </div>
            </div>           
        );
    }
}

const mapStateToProps = state => {
    return {
        teste: state.teste,
        modules: state.modules
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