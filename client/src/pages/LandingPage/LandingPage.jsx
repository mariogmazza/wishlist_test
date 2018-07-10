
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import paragraph from '../../assets/images/shortparagraph.png'
import hslogo from '../../assets/images/hslogo.jpg'
import hslogoclear from '../../assets/images/hslogoclear.png'
import PropTypes from 'prop-types'
import {Button,Container,Divider,Grid,Header,Icon,Item,Image,Menu,Responsive,Segment,Sidebar,Visibility, Dropdown, Card, Popup, Label, Input, Sticky,Rail, Rating, Accordion, Form, 
} from 'semantic-ui-react/dist/commonjs'
import { Tabs,Breadcrumb, Pagination as PaginationPre, Radio,  Checkbox as CheckboxANT, Row as RowANT, Col as ColANT, Card as ANTDCard} from 'antd';
import { connect } from 'react-redux';
import { ReduxfetchItems } from '../../actions/postActions';
import API from "../../utils/API";
import Sparcoseat from '../../assets/images/sparcoseat.jpg'
import { withRouter } from 'react-router';
import HomePageCarousel from './HomePageCarousel';
import Footer from './Footer';
import NavMenuContainer from './NavMenuContainer'
import MobileContainer from './MobileContainer';
import ThreeCardsContainer from './ThreeCardsContainer';
import Pagination from './Pagination';
import SimpleExpansionPanel from './StickyFilter';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import * as helper from '../../utils/helper'


const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    {/* <TabletContainer>{children}</TabletContainer> */}
    {/* <MobileContainer>{children}</MobileContainer> */}
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}


const mapStateToProps = (state) => ({
  searchCar:state.posts.browseCar,
  authUser: state.sessionState.authUser,
  cart:state.cart
});

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true });


  render() {
    const { children } = this.props
    const { fixed } = this.state
  
    var textColor;
    var iconMargin;

    if (!fixed) { textColor = 'white' } else { textColor = 'black' }
    if (!fixed) { iconMargin = 0 } else { iconMargin = 3 }

    const sublabelStyle = {
      fontSize: 12,
      textAlign: 'center',
      color: textColor,
      marginBottom:iconMargin
    }
    
    console.log(...Responsive)
    

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
        <Segment textAlign='center' style={{ padding: '1em 0em' }} vertical>
          <NavMenuContainer fixed={fixed}/>
          <HomePageCarousel />
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

const TabPane = Tabs.TabPane;

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

/////////////////////////////////////////////////////////////////////////////

class PrePageBodyContents extends Component {
  constructor(props){
    super(props);
    this.state = {
      seat:[],
      subCatItems:[],
      bread:[],
      displayTitle:'',
      catTreeItems:[],
      displayCategories:true,
      displayBodyNav:false,
      uniqueBrandArray:[],
      searchedCatType:'',
      storedSearchCat:'',
      storedResults:[],
      minValue:0,
      maxValue:60,
      itemMax:1000,
      filteredBrands:[]
    }

    //Listens to changes in the the URL 
    this.props.history.listen((location, action) => {
      //removes the word shop from the url then calls CheckRetrievedURl
      this.checkRetrievedUrl(location.pathname.slice(6));
      ;
    }
  
  );
  }

//Takes the URL and calls next Component
  checkRetrievedUrl(retrievedUrl){

    if(retrievedUrl.length < 2 ){
      this.nextComponent('All Products');
    } else{
 
      this.nextComponent(this.getUrlToQuery(retrievedUrl))
    }
  }

  filterBrands(brandArray){
this.setState({uniqueBrandArray:brandArray})
  }
  

  componentWillMount(){
    console.log('in component will mount',this.getUrlToQuery(this.props.match.params.id))
    this.nextComponent(this.getUrlToQuery(this.props.match.params.id));
  }

  getUrlToQuery(toClean) {
    if (toClean.indexOf('_') == -1) {
      return toClean
    } else {
      var checkSecond = toClean.replace('_', ' ');
      if (checkSecond.indexOf('_') == -1) {
        return checkSecond
      } else {
       return checkSecond.replace('_', ' '); 
      }
    }
  }



  // i set this here so that the price is set before rendering
componentDidMount(){
  this.setState((state) => ({maxValue : state.itemMax}))
}

  onChangeBrand(brandBeingFiltered) {
    if (this.state.minValue !== 0 && this.state.maxValue !== this.state.itemMax) {
      // if there is a price filter
      var priceFilteredProducs = this.state.storedResults.filter(p => {
        if (p.price >= this.state.minValue && p.price <= this.state.maxValue) {
          return p
        }
      })
      var res = priceFilteredProducs.filter(f => brandBeingFiltered.includes(f.brand));
      this.setState({ catTreeItems: res, filteredBrands: brandBeingFiltered })
    } else {
      // if there is no price filter
      if (brandBeingFiltered && brandBeingFiltered.length) {
        var res = this.state.storedResults.filter(f => brandBeingFiltered.includes(f.brand));
        this.setState({ catTreeItems: res, filteredBrands: brandBeingFiltered })
      } else {
        this.setState({ catTreeItems: this.state.storedResults })
      }
    }
  }




  onChangePrice(values, priceFilteredProducs) {
    if (Array.isArray(values) && values.length === 2) {
      this.setState({
        minValue: values[0],
        maxValue: values[1],
        catTreeItems: priceFilteredProducs
      })
    }
  }


  handleOnAfterChangePrice(values){
    const minPrice = values[0];
    const maxPrice = values[1];
    // if there is no brand filter and the price is changed
    if(this.state.filteredBrands.length == undefined ||this.state.filteredBrands.length < 1){
      var priceFilteredProducs = this.state.storedResults.filter ( p => {
        if (p.price >= minPrice  && p.price <= maxPrice ){
          return p
        }
      })
      this.onChangePrice(values,priceFilteredProducs) 
    }else {

      var res = this.state.storedResults.filter(f => this.state.filteredBrands.includes(f.brand));

      var priceFilteredProducs = res.filter ( p => {
        if (p.price >= minPrice  && p.price <= maxPrice ){
          return p
        }
      })
      this.onChangePrice(values,priceFilteredProducs);   
    }
  }


  //sets max price from results
  filterPrice(prices){
  var maxPrice = prices.reduce(function(a, b) {
    return Math.max(a, b);
});
   this.setState({itemMax:maxPrice, maxValue:maxPrice})
  }
  

nextComponent(searchThisCat = 'All Products') {
  console.log('searching for', searchThisCat)
  if (this.props.history.location.pathname == '/') {
      API.getNavItems(searchThisCat).then((res) => {
        this.setState({
          subCatItems: res.data,
          bread: ['All Products'],
          displayBodyNav: true,
          searchedCatType:res.data[0].cattype
        })
      })
  } else {
      //Goes and checks to see the catType of Nav Items
      API.getNavItems(searchThisCat).then((res) => {
        var getNavData = res.data;
        // everything else falls under this
       

        if (getNavData[0].cattype === 'first') {
          const crumbPre = getNavData[0].route.split(",");
          this.setState({
            displayBodyNav: true,
            subCatItems: getNavData,
            bread: crumbPre,
            searchedCatType:getNavData[0].cattype
          })
        } else if (getNavData[0].cattype === 'second' || getNavData[0].cattype === 'third') {
          const crumbPre = getNavData[0].route.split(",");
          //gets items to be displayed
          API.getProductList(searchThisCat).then((response) => {
            // pulls individual brands out of the results
            this.filterBrands([...new Set(response.data.map(item => item.brand))]);
            this.filterPrice([...new Set(response.data.map(item => item.price))]
            );


            this.setState({
              catTreeItems: response.data,
              storedResults: response.data,
              displayBodyNav: false,
              displayCategories: true,
              subCatItems: getNavData,
              bread: crumbPre,
              displayTitle: searchThisCat,
              searchedCatType: getNavData[0].cattype,
              storedSearchCat: searchThisCat,
            })
          }).catch(error => console.log(error))


        } else if(getNavData[0].cattype === 'fourth') {
          console.log('im in else for 4th',getNavData)
          const crumbPre = getNavData[0].route.split(",");
          //gets items to be displayed
          
    API.getProductList(searchThisCat).then((response) => {
      // pulls individual brands out of the results
      console.log('this is the response', response)
    this.filterBrands([...new Set(response.data.map(item => item.brand))]);
    this.filterPrice([...new Set(response.data.map(item =>item.price ))]
    );
    

      this.setState({
        displayCategories: false,
        catTreeItems: response.data, 
        storedResults: response.data, 
        displayBodyNav: false, 
        displayCategories: false,
        subCatItems: getNavData,
        bread: crumbPre,
        displayTitle: searchThisCat,
        searchedCatType:getNavData[0].cattype,
        storedSearchCat:searchThisCat,
      })
    }).catch(error => console.log(error))
       
        //end of else clause
        } else{
          this.setState({displayBodyNav: true});
          console.log('im in else')
          //If the cattype is not found then
        }
        // End of the return of the navigation items cattypes
      }).catch(error => console.log(error))
      // end of the first if statement
    }
    //end of next Component
} 

  render() {
    return (
      <div 
      // style={{backgroundColor:'#F3F3F3'}}
      
      >
        <BreadcrumsContainer bread={this.state.bread} displayCategories={this.state.displayCategories} />
        <ItemsCategoryLinks {...this.props} subCatItems={this.state.subCatItems} displayCategories={this.state.displayCategories} />
        {this.state.displayBodyNav ? <TabsCategory {...this.props} /> : 
          <StickyContainer catTreeItems={this.state.catTreeItems} uniqueBrandArray={this.state.uniqueBrandArray} onChangeBrand={this.onChangeBrand.bind(this)}  minValue={this.state.minValue}
          maxValue={this.state.maxValue} handleOnAfterChangePrice={this.handleOnAfterChangePrice.bind(this)} itemMax={this.state.itemMax}/>
       }
      </div>
    )
  }
}

const PageBodyContents = withRouter(connect(mapStateToProps, { ReduxfetchItems })(PrePageBodyContents))




// class StickeyContainerPre extends Component {
//   constructor() {
//     super();

//     // an example array of 150 items to be paged
//     var exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

//     this.state = {
//         exampleItems: exampleItems,
//         pageOfItems: [],
//         current: 1,
//         pager: {}
//     };
//   }


//   getPager(totalItems, currentPage, pageSize) {
//     // default to first page
//     currentPage = currentPage || 1;

//     // default page size is 10
//     pageSize = pageSize || 10;

//     // calculate total pages
//     var totalPages = Math.ceil(totalItems / pageSize);

//     var startPage, endPage;
//     if (totalPages <= 10) {
//         // less than 10 total pages so show all
//         startPage = 1;
//         endPage = totalPages;
//     } else {
//         // more than 10 total pages so calculate start and end pages
//         if (currentPage <= 6) {
//             startPage = 1;
//             endPage = 10;
//         } else if (currentPage + 4 >= totalPages) {
//             startPage = totalPages - 9;
//             endPage = totalPages;
//         } else {
//             startPage = currentPage - 5;
//             endPage = currentPage + 4;
//         }
//     }

//     // calculate start and end item indexes
//     var startIndex = (currentPage - 1) * pageSize;
//     var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

//     // create an array of pages to ng-repeat in the pager control
//     var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

//     // return object with all pager properties required by the view
//     return {
//         totalItems: totalItems,
//         currentPage: currentPage,
//         pageSize: pageSize,
//         totalPages: totalPages,
//         startPage: startPage,
//         endPage: endPage,
//         startIndex: startIndex,
//         endIndex: endIndex,
//         pages: pages
//     };
// }



//   onChange = (page) => {
//     var items = this.state.items;
//     var pager = this.state.pager;
//     var pageSize = 10;
//     var itemsLength = this.state.exampleItems.length;
    

//      // get new pager object for specified page
//      pager = this.getPager(itemsLength , page, pageSize);
//      var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
//      this.setState({ pager: pager });
// console.log(items/pageSize);

//     console.log('the length',this.state.exampleItems.length, page);
//     // this.setState({
//     //   current: page,
//     // });
//   }
//   render() {
//     console.log('the length',this.state.exampleItems.length, this.state.current);
//     // console.log('the length',this.props.catTreeItems.length )
//     return (
//       <div>
//         <PaginationPre current={this.state.current} onChange={this.onChange} total={this.state.exampleItems.length}/>
//       </div>
//     )
//   }
// }



const BreadcrumsContainer = (props) => {
    var breadCrumbItems = props.bread.map((crumb)=>{
      var fixedItem;
      if(crumb == 'All Products'){
        fixedItem = "/shop/all_products"
      } else {
        fixedItem = crumb.replace(' ', '_')
      }
      return (
   <Breadcrumb.Item><a href={fixedItem}>{crumb}</a></Breadcrumb.Item>
      ) 
    })
  
  return (
    <Container>
      <Segment clearing style={{ padding: '2em 0em' }} >
        <Breadcrumb>
          {breadCrumbItems}
        </Breadcrumb>
      </Segment>
      <Segment clearing style={{ padding: '2em 0em' }}textAlight='center' >
        {!props.displayCategories ? null :
          <Header as='h1' textAlight='center'>
          <div style={{textAlign:'center'}}>
           CATEGORIES 
           </div>
        {/* {this.state.displayTitle} */}
          </Header>}
      </Segment>
    </Container>

  )
}



  


class ItemsCategoryLinks extends Component {
  nextComponentLink (addressLink ){
    //pushes link to new url
    var path = `/shop/${addressLink}`;
    console.log(path)
    this.props.history.push(path)

  }
  render() {
    return (
      <div>
        <Container>
          {!this.props.displayCategories ? null :
            <Grid columns='five' >
              {this.props.subCatItems.map((cats, index) => {
              
                return (
                  <Grid.Column >
                    <ANTDCard onClick={() => this.nextComponentLink(cats.linkto)}
                      hoverable
                      style={{ width: 180 ,border:'none',textAlight:'center'}}
                      cover={<img alt="example" src={cats.imglink}/>}
                    >
                    <Meta title={<div style={{textAlign:'center'}}>{cats.title}</div>}/>
                    </ANTDCard>

                  </Grid.Column>
                )
              })}
            </Grid>
          }
        </Container>
      </div>
    )
  }
}
2
const { Meta } = ANTDCard

class TabsCategory extends Component {
  state = { actionItem:'',
    catItems: [] }
  componentDidMount() {
    API.getNavItems('Interior').then((res) => {
      this.setState({ catItems: res.data })
    })
  }


  callback(key) {
    this.setState({ actionItem: key },()=>{
      API.getNavItems(this.state.actionItem).then((res) => {
        this.setState({ catItems: res.data })
      })
    })
  }

  render() {
    var returnedStuff = this.state.catItems.map((cats,index)=>{
      return (
        <Grid.Column >
          <Link to={"/shop/" + cats.linkto}>

           <ANTDCard 
                      hoverable
                      style={{ width: 180 ,border:'none',textAlight:'center'}}
                      cover={<img alt="example" src={cats.imglink}/>}
                    >
                    <Meta title={<div style={{textAlign:'center'}}>{cats.title}</div>}/>
                    </ANTDCard>

  {/* <ANTDCard
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </ANTDCard>
            <Card raised>
              <Image src={Sparcoseat} style={{ maxWidth: 120 }} />
              <Card.Content>
                <Card.Header textAlign='center' >{cats.title}</Card.Header>
                <Card.Meta textAlign='center'>
                  <span className='date'>(400)</span>
                </Card.Meta>
              </Card.Content>
            </Card> */}
          </Link>
        </Grid.Column>
      )
    })
      return (
        <div>
          <Container>
          <Tabs defaultActiveKey="Interior" onChange={(key) => this.callback(key)}>
            <TabPane tab='Interior' key='Interior' ><Grid columns='four'>{returnedStuff} </Grid></TabPane>
            <TabPane tab="Exterior" key="Exterior"><Grid columns='four'>{returnedStuff} </Grid></TabPane>
            <TabPane tab="Performance" key="Performance"><Grid columns='four'>{returnedStuff} </Grid></TabPane>
            <TabPane tab="Lighting" key="Lighting"><Grid columns='four'>{returnedStuff} </Grid></TabPane>
            <TabPane tab="Wheels & Tires" key="Wheels & Tires"><Grid columns='four'>{returnedStuff} </Grid></TabPane>
            <TabPane tab="Body Parts" key="Body Parts"><Grid columns='four'>{returnedStuff} </Grid></TabPane>
            <TabPane tab="Repair Parts" key="Repair Parts"><Grid columns='four'>{returnedStuff} </Grid></TabPane>
            <TabPane tab="Tools Garage" key="Tools Garage"><Grid columns='four'>{returnedStuff} </Grid></TabPane>
          </Tabs>
          </Container>
        </div>
    )
  }
}





const BrandFilter = (props)=>{
  return (
    <div>
      <CheckboxANT.Group style={{ width: '100%' }} onChange={props.onChange}>
        <RowANT>
          <ColANT span={8}><CheckboxANT value="A">0-50 </CheckboxANT></ColANT>
        </RowANT>
        <RowANT>
          <ColANT span={8}><CheckboxANT value="B">50-100</CheckboxANT></ColANT>
        </RowANT>
        <RowANT>
          <ColANT span={8}><CheckboxANT value="C">100-300</CheckboxANT></ColANT>
        </RowANT>
        <RowANT>
          <ColANT span={8}><CheckboxANT value="D">300-500</CheckboxANT></ColANT>
        </RowANT>
        <RowANT>
          <ColANT span={8}><CheckboxANT value="E">500-700</CheckboxANT></ColANT>
        </RowANT>
      </CheckboxANT.Group>
    </div>
  )
}





//Rating stars
class RatingExampleOnRate extends Component {
  state = {}

  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

  render() {
    return (
      <div>
        <Rating   icon='star' maxRating={5} onRate={this.handleRate} style={{backgroundColor:'none'}} />
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    )
  }
}









class StickyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        pageOfItems: [],
        size: 30,
        look:'single'
    };
    this.onChangePage = this.onChangePage.bind(this);
}

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }
  handleContextRef = contextRef => this.setState({ contextRef });

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  handleChangeLook = (e) => {
    this.setState({ look: e.target.value });
  }

  fixDescription(item){
    var fixedDescription = item.DESCRIPTION
    if (fixedDescription.indexOf('</p>') == -1){
  return fixedDescription
    } else {
      fixedDescription =  fixedDescription.slice(0,fixedDescription.indexOf('</p>'))
      fixedDescription = fixedDescription.replace('<p>', ' ')
      return fixedDescription;
    }
   
  }
  

  returnSingleContent(item,theImage){
    return (
      <Item.Group divided>
      <Item>
        <Image circular className="ui large circular image" src={theImage[0]} size="large" style={{ borderRadius: 12, maxHeight: 294, maxWidth:294 }} />
        <Item.Content>
          <Item.Header as='a'>{item.brand} {item.DISPLAY_NAME}</Item.Header>
         <Item.Meta>
          {/* <Label style={{backgroundColor:'none'}}><RatingExampleOnRate /></Label> */}
            
          
            <Typography variant="headline" gutterBottom>
            {item.price == 0 ? <Label as='a' color='yellow' tag>Product Coming Soon</Label> : helper.formatCurrency(parseFloat(item.price) )}
            </Typography>

            </Item.Meta>
          <Item.Meta>
            <span  >Brand: <span style={{ color: 'red' }}>{item.brand}</span></span>
          </Item.Meta>
          <Item.Meta>
            <span  >Availability: <span style={{ color: 'red' }}> In Stock</span></span>
          </Item.Meta>
          <Item.Meta>
            <span  >Item #: <span>{item.stockID}</span></span>
          </Item.Meta>
          <Item.Description>{this.fixDescription(item)} </Item.Description>
          <Item.Extra>
            {/* <label className="control-label" htmlFor="Quantity">Qty:</label> */}
            {/* <div className="quantity-box">
              <input type="text" name="quantity" value="1" size="2" id="Quantity" className="form-control" />
              <input type="button" id="minus" value="-" className="form-control" />
              <input type="button" id="plus" value="+" className="form-control" />
            </div> */}
            <button className="button button-cart btn" type="button" id="button-cart" data-loading-text="Loading..."> <Icon name='shop' size='big' />
              View Item
          </button>
          </Item.Extra>
        </Item.Content>
      </Item>
      <Divider />
    </Item.Group>
    )
  }
 


  render() {
    const size = this.state.size;
    const look = this.state.look;
    const { contextRef } = this.state
    // console.log(this.props)
  

    return (
      <Segment style={{ padding: '3em 0em' }} vertical clearing >

        <Container >
          <Segment style={{ padding: '3em 0em' }} clearing >
            <Grid >

              <Grid.Column width={4} >
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                  <Radio.Button value={30}>30</Radio.Button>
                  <Radio.Button value={60}>60</Radio.Button>
                  <Radio.Button value={90}>90</Radio.Button>
                </Radio.Group>
              </Grid.Column>

              <Grid.Column width={8} textAlign='center'>
                <Pagination items={this.props.catTreeItems} onChangePage={this.onChangePage} pageSize={this.state.size} look={this.state.look}/>
              </Grid.Column>

              <Grid.Column width={4}>
                <Radio.Group value={look} onChange={this.handleChangeLook} style={{ float: 'right' }}>
                  <Radio.Button value='single'><Icon size='large' name=' list layout' /></Radio.Button>
                  <Radio.Button value='multi'><Icon size='large' name='grid layout' /></Radio.Button>
                </Radio.Group>
              </Grid.Column>

            </Grid>
          </Segment>
        </Container>

        <Grid centered >
          <Grid.Row columns={2}>
            <Grid.Column width={9}>
              <div ref={this.handleContextRef}>
                <Segment>
                  
                <Rail position='left'>
                <Sticky context={contextRef} pushing offset={60}>
                  {/* <Header as='h3' style={{textAlign
                  :'center'}}>Stuck Content</Header> */}
                  {/* <Image src={logo} /> */}
                  {/* <Sider/> */}
                  {/* <AccordionExampleNested  /> */}
                  {/* <Accordion defaultActiveIndex={[0,1]} panels={rootPanels} exclusive={false} styled filterBrands={this.props.filterBrands} /> */}
                  <SimpleExpansionPanel  uniqueBrandArray={this.props.uniqueBrandArray}  onChangeBrand={this.props.onChangeBrand} minValue={this.props.minValue}
          maxValue={this.props.maxValue} handleOnAfterChangePrice={this.props.handleOnAfterChangePrice} itemMax={this.props.itemMax}/>
            
                </Sticky>
              </Rail>
    
<div>

{this.state.look === 'single' 
? 
<div>
{this.state.pageOfItems.map((item) =>{                      
  return (
    <div>
      {this.returnSingleContent(item,item.image.split(";"))}
    </div>)
})}
</div> 
:
<Grid columns={3}>


{this.state.pageOfItems.map((item) =>{                      
  return (
    <ThreeCardsContainer item={item} />
    // <div>
    //   {this.returnSingleContent(item,item.image.split(";"))}
    // </div>
    )
})}


</Grid>
} </div>


              
             

            
            </Segment>
          </div>
        </Grid.Column>
        </Grid.Row>
      </Grid>
      </Segment>
    )
  }
}








const LandingPage= () => (
  <ResponsiveContainer>
    <PageBodyContents />
    {/* <CatagoriesSubWithRouter/> */}
  
     
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>We are your LIFT KIT LEADERS!</Header>
            <p style={{ fontSize: '1.33em' }}>
            High Standards 4x4 is your #1 source for lift kit sales and installation. Choose from leading brands Full Throttle Suspension, Fabtech, Pro Comp, Rough Country, and Bulletproof Suspension.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='medium'
              src={hslogoclear}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Us Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>

      <Container text>
        {/* <VehicleForm /> */}
      </Container>

    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
<Footer />
    </Segment>
  </ResponsiveContainer>
)

export default LandingPage