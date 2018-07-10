import React, { Component } from 'react';
import { fetchNewCar } from '../../actions/postActions';
import API from "../../utils/API";
import { connect } from 'react-redux';

import { Select,
} from 'semantic-ui-react/dist/commonjs'

class PreVehicleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year:'',
      make:'',
      model: '',
      trim:'',
      yearOptions:[],
      makeOptions:[],
      modelOptions:[],
      trimOptions:[]
    };

    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeMake = this.handleChangeMake.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangeTrim = this.handleChangeTrim.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    var allYearModels = []
    var allYearModelSorted = []
    API.getYear().then((res) => {
      allYearModels = res.sort(function (a, b) { return b - a });
      allYearModels.forEach(function (element) {
        allYearModelSorted.push({ key: element, text: element, value: element })
      })
    }).then(() => {
      this.setState({ yearOptions: allYearModelSorted }, () => console.log(this.state))
    })
  }

 
  handleChangeYear = (e, { value }) => this.setState({ year: value }, ()=>{
    if (this.state.make != ''){
      this.setState({make:'', model:'', trim:''});
      API.getMake(this.state.year).then((res) => {})
    } else {
      console.log('sending year', this.state.year)
      API.getMake(this.state.year).then((res) => {
        console.log(res)
        this.setState({ makeOptions: res }, () => console.log(this.state))
      })
    }
   
  });
  handleChangeMake = (e, { value }) => this.setState({ make: value }, ()=>{  
    if (this.state.model != ''){
    this.setState({ model:'', trim:''})
  }else{
    API.getModel(this.state.year,this.state.make).then((res) => {
      console.log(res)
      this.setState({ modelOptions: res }, () => console.log(this.state))
    })
  }

});
  handleChangeModel = (e, { value }) => this.setState({ model:value}, ()=>{
    if (this.state.trim != ''){
      this.setState({ trim:''})
    }else{
      API.getTrim(this.state.year,this.state.make, this.state.model,).then((res) => {
        console.log(res)
        this.setState({ trimOptions: res }, () => console.log(this.state))
      })
    }
  
  });
  handleChangeTrim = (e, { value }) => this.setState({ trim: value }, ()=>{console.log('in Trim',this.state)})

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props)

    var browseNewCar = {year:this.state.year, make:this.state.make, model:this.state.model, trim:this.state.trim}
    this.props.fetchNewCar(browseNewCar);
  }

  returnTrim (){
    if (this.state.model  === ''){
      return null
    } else if (this.state.model  != '' && this.state.trimOptions == ''){
      return null
    } else {
      return <Select placeholder='Trim' search options={this.state.trimOptions} value={this.state.trim} onChange={this.handleChangeTrim}/>
    }
  }

  render() {
  console.log(this.props)
    var {year, make, model, trim} = this.state
   

    return (
      <form onSubmit={this.handleSubmit}>
        <Select placeholder='Select Year' search options={this.state.yearOptions} value={year} onChange={this.handleChangeYear}/>
        {year  === ''  ? 
         <Select placeholder='Make' search options={this.state.makeOptions} disabled /> :
          <Select placeholder='Make' search options={this.state.makeOptions} value={make} onChange={this.handleChangeMake} /> }
        {make  === ''  ?  
        <Select placeholder='Model' search options={this.state.modelOptions} disabled /> : 
        <Select placeholder='Model' search options={this.state.modelOptions} value={model} onChange={this.handleChangeModel} /> }
        {/* {model  === ''  ?  <Select placeholder='Trim' search options={this.state.trimOptions} disabled /> : 
        <Select placeholder='Trim' search options={this.state.trimOptions} value={trim} onChange={this.handleChangeTrim}/> } */}

        {this.returnTrim()}
        <input type="submit" value="Browse" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  searchCar:state.posts.browseCar,
  authUser: state.sessionState.authUser,
  cart:state.cart
});

const VehicleForm = connect(mapStateToProps, { fetchNewCar })(PreVehicleForm);
export default VehicleForm;



// const yearOptions = [{ key: 'F-150', value: 'F-150',  text: 'F-150' },{ key: 'Silveradi', value: 'Silverado',  text: 'Silverado' },{ key: 'Sierra', value: 'Sierra',  text: 'Sierra' }, ...{}]
// const makeOptions = [{ key: 'F-150', value: 'F-150',  text: 'F-150' },{ key: 'Silveradi', value: 'Silverado',  text: 'Silverado' },{ key: 'Sierra', value: 'Sierra',  text: 'Sierra' }, ...{}]
// const modelOptions = [{ key: 'F-150', value: 'F-150',  text: 'F-150' },{ key: 'Silveradi', value: 'Silverado',  text: 'Silverado' },{ key: 'Sierra', value: 'Sierra',  text: 'Sierra' }, ...{}]

// const SelectYear = () => (
//   <Select placeholder='Select Year' search options={yearOptions} />
// )

// const SelectMake = () => (
//   <Select placeholder='Make' search options={makeOptions} />
// )

// const SelectModel = () => (
//   <Select placeholder='Model' search options={modelOptions} />
// )

// const panes = [
//   {
//     menuItem: { key: 'users', icon: 'car', content: 'Select Vehicle' },
//     render: () =>
//       <Tab.Pane attached={false}>
//         <h1 style={{ color: '#dc3d31', fontWeight: 10 }}>Select Vehicle</h1>
//         <SelectYear />
//         <SelectMake />
//         <SelectModel />
//       </Tab.Pane>
//   },
//   {
//     menuItem: 'Search By Part #', textAlign: 'center',
//     render: () =>
//       <Tab.Pane attached={false}>
//         <h1 style={{ color: '#dc3d31', fontWeight: 10 }}>Part Number</h1>
//         <div style={{ marginLeft: '33.3%' }}>
//           <SearchCategory fluid placeholder='Enter Part #' />
//         </div>
//       </Tab.Pane>
//   },
//   {
//     menuItem: 'Other Filters',
//     render: () => <Tab.Pane attached={false}>Other Filters</Tab.Pane>
//   },
// ]


// const VehicleSearchTab = () => (
//   <Tab panes={panes} defaultActiveIndex={2} />
// )


