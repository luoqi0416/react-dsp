import React, { Component,Fragment } from 'react';
import {Link} from 'react-router-dom';
import _echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';
const option ={
    xAxis: {
        type: 'category',
        data: ['2016/10', '2016/11', '2016/12', '2017/01', '2017/02'],
        boundaryGap:false
    },
    yAxis: {
        type: 'value',
        max:1700,
        min:1100,
    },
    series: [{
        type: 'line',
        data: [1100, 1380, 1350, 1600, 1580, 1600, 1700]
    }]
};
class AdvCreative extends Component {
    constructor(){
        super();
        this.gw = React.createRef();
    }
    componentDidMount(){
        let myChart = _echarts.init(document.getElementById('main'));
        myChart.setOption(option);
        //原生监听视口变化事件
        window.onresize = ()=>{
            //echarts内置方法
            myChart.resize()
        }
    }
    render() {
        console.log(this.gw.current)
        return (
            <Fragment>
                <div id='main' ref={this.gw} style={{ flex:1, height: 500 }}></div>
            </Fragment>
        );
    }
    
}

export default AdvCreative;