import React, { Component } from 'react';
import {connect} from 'react-redux'
class Test extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div>
                <h4>{this.props.data1}</h4>
                <input type='text' ref='ipt'/>
                <button onClick={this.passData.bind(this)}>传值</button>
                <span>{this.props.data2}</span>
            </div>
        );
    }
    passData(){
        console.log(this.props)
        this.props.getData()
    }
}

export default connect(null,function(dispatch){
    return {
        getData(){
            dispatch({
                type:'updateAsync',
                payload:123
            })
        }
    }
})(Test);
