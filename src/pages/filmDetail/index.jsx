import React, { Component } from 'react';
import { connect } from 'react-redux';

const FilmDetail = ({ modules }) => (
    <div>
        {modules.map(module => (
            <div key={module.id}>
                <div>{module.title}</div>
            </div>
        ))}        
    </div>
);



export default connect(state => ({ modules: state }))(FilmDetail);