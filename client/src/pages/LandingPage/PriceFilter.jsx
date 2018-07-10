import React, { Component } from 'react'
import * as helper from '../../utils/helper'
import { Slider, Switch, Icon } from 'antd';


const marks = {
  0: helper.formatCurrency(0),
  100: {
    style: {
      color: '#ffffff',
    },
    // label: <strong>100°C</strong>,
  },
};

export default class PriceFilter extends React.Component {

constructor (props){
  super(props)
  this.state = {
    minValue: props.minValue > 0 ? props.minValue : props.minPrice,
    maxValue: props.maxValue > 0 ? props.maxValue : props.maxPrice
  }
}

// componentWillReceiveProps(nextProps) {
//   console.log('next prop', nextProps)
//   if (nextProps.minPrice !== this.props.minPrice || nextProps.maxPrice !== this.props.maxPrice) {
//     this.setState({
//       minValue: nextProps.minPrice,
//       maxValue: nextProps.maxPrice
//     });
//   }
// }



  handleOnAfterChange = (values) => {

    // if(Array.isArray(values) && values.length === 2) {
    //   this.setState({
    //     minValue: values[0],
    //     maxValue: values[1]
    //   })
    // }
  }
  

  handleOnChange(values){


  }

  render() {
const { minValue, maxValue} = this.state
const { itemMax} = this.props
var marks = {minValue, maxValue};
    return (
      <div style={{minWidth:'100%'}}>
      
  
        
    
        <Slider range  defaultValue={[0, itemMax]}  max={itemMax} step={10} onChange={this.handleOnChange} onAfterChange={(values)=>this.props.handleOnAfterChangePrice(values)}
        />
        <h4 style={{float:'left'}}>{helper.formatCurrency(parseFloat(this.props.minValue) )}</h4>
    <h4 style={{float:'right'}}>{helper.formatCurrency(parseFloat(this.props.maxValue) )}</h4>
        </div>
    
    );
  }
}




// <Slider {...this.props} onChange={this.handleChange} value={value} />
// <Icon style={{ color: nextColor }} type="smile-o" />

