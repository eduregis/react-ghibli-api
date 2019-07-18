import React from 'react';
import { connect } from 'react-redux';

const FilmDetail = ({ modules, teste, dispatch }) => (
    <div>
        <h2>{teste}</h2>
        <button onClick={() => dispatch(toggleTest('test3'))}>trocar</button>
        <div>
            {modules.map(module => (
                <div key={module.id}>
                    <div>{module.title}</div>
                </div>
            ))}        
        </div>
    </div>
   
);

function toggleTest(str){
    return {
        type: 'SET_TEST',
        str,
    }
}



export default connect(
    state => ({ 
        teste: state.teste,
        modules: state.modules 
    }))(FilmDetail);