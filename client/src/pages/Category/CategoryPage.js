import _ from 'lodash'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import paragraph from '../../assets/images/shortparagraph.png'
import Brakes from '../../assets/images/brakes.jpg'
import Sparcoseat from '../../assets/images/sparcoseat.jpg'
import PropTypes from 'prop-types'
import SearchCategory from '../../components/NavSearch/navSearchComponent';
import {Button,Container,Divider,Grid,Header,Icon,Item,Image,List,Menu,Responsive,Segment,Sidebar,Visibility, Dropdown,Breadcrumb, Header as SUIHeader, Card, Popup, Label, Input, Sticky, Rail, Rating,Pagination, Accordion, Form, Checkbox, Tab, Select, 
} from 'semantic-ui-react'
import {  Popover,  Badge, Icon as AntIcons, Carousel, Tabs, Card as CardAntd , Timeline, Button as AntdButton, Modal} from 'antd';
import SignOutButton from '../../firebase/SignOut';
import { connect } from 'react-redux';
import * as routes from '../../constants/routes';
import { fetchNewCar } from '../../actions/postActions';
import API from "../../utils/API";





const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <TabletContainer>{children}</TabletContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}



const mapStateToProps = (state) => ({
  searchCar:state.posts.browseCar,
  authUser: state.sessionState.authUser,
});

// const VehicleForm = connect(mapStateToProps, { fetchNewCar })(PreVehicleForm);


const  fixedMenuStyle  = {
  backgroundColor :  ' #fff ' ,
  border :  ' 1px solid #ddd ' ,
  boxShadow :  ' 0px 3px 5px rgba (0, 0, 0, 0.2) ' ,
}

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
          {/* <MenuExampleSecondaryPointing fixed={fixed}/> */}
       {/* <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              style={fixed ? fixedMenuStyle : null}
            > */}
          {/* <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical> */}
      
        {/*<Container>
          <Menu.Item style={{ backgroundColor: 'transparent', pointer: 'none' }} className='iconRedHover'>
            <Popover
                placement="bottom"
                title={NavBarAccountTitle()}
                content={<NewNavBarAccountContent/>}
                trigger="hover"
                style={{ minWidth: 300 }}>
                <Button>
                  <span >My Account</span>
                  <p style={{ fontSize: 12 }} className='new-cycle-font'>Hello. Sign In</p>
                </Button>
              </Popover>
            </Menu.Item>
 
  </Container>
</Menu> */}
      
            <HomepageHeading />
            {/* <FilterSearchForms/> */}
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






function onCarouselChange(a, b, c) {
  // console.log(a, b, c);
}

const HomepageHeading = ({ mobile }) => (
  <Carousel autoplay easing afterChange={onCarouselChange}>
    <div style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968')" }}>
      <Container text>
        <Header
          as='h1'
          content='Imagine-a-Company'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </div>

   <div style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968')" }}>
      <Container text>
        <Header
          as='h1'
          content='Imagine-a-Company'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </div>
    <div style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968')" }}>
      <Container text>
        <Header
          as='h1'
          content='Imagine-a-Company'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </div>
    <div style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968')" }}>
      <Container text>
        <Header
          as='h1'
          content='Imagine-a-Company'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Do whatever you want when you want to.'
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    </div>
  </Carousel>


)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}
















const CatagoryForm = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label='Red' name='color' value='red' />
      <Form.Checkbox label='Orange' name='color' value='orange' />
      <Form.Checkbox label='Green' name='color' value='green' />
      <Form.Checkbox label='Blue' name='color' value='blue' />
    </Form.Group>
  </Form>
)

const PriceRangeOps = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label='< 50' name='50' value='50' />
      <Form.Checkbox label='50-100' name='50-100' value='50-100' />
      <Form.Checkbox label='100-300' name='100-300' value='100-300' />
      <Form.Checkbox label='300-500' name='300-500' value='300-500' />
    </Form.Group>
  </Form>
)

const BrandOps = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label='Toyo' name='Toyo' value='Toyo' />
      <Form.Checkbox label='Good Year' name='Good Year' value='Good Year' />
      <Form.Checkbox label='Kumo' name='Kumo' value='Kumo' />
    </Form.Group>
  </Form>
)

const BrandsOps = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label='< 50' name='50' value='50' />
      <Form.Checkbox label='50-100' name='50-100' value='50-100' />
      <Form.Checkbox label='100-300' name='100-300' value='100-300' />
      <Form.Checkbox label='300-500' name='300-500' value='300-500' />
    </Form.Group>
  </Form>
)

const StarOps = (
  <Form>
    <Form.Group grouped>
      <Form.Checkbox label='1 Stars' name='1 Stars' value='1 Stars' />
      <Form.Checkbox label='2 Stars' name='2 Stars' value='2 Stars' />
      <Form.Checkbox label='3 Stars' name='3 Stars' value='3 Stars' />
      <Form.Checkbox label='4 Stars' name='4 Stars' value='4 Stars' />
    </Form.Group>
  </Form>
)



const SizeForm = (
  <Form>
    <Form.Group grouped>
      <Form.Radio label='Small' name='size' type='radio' value='small' />
      <Form.Radio label='Medium' name='size' type='radio' value='medium' />
      <Form.Radio label='Large' name='size' type='radio' value='large' />
      <Form.Radio label='X-Large' name='size' type='radio' value='x-large' />
    </Form.Group>
  </Form>
)

const level1Panels = [
  { title: 'Level 1A', content: 'Level 1A Contents' },
  { title: 'Level 1B', content: 'Level 1B Contents' },
]

const Level1Content = (
  <div>
    {PriceRangeOps}
    {/* <Accordion.Accordion panels={level1Panels} /> */}
  </div>
)

const level2Panels = [
  { title: 'Level 2A', content: 'Level 2A Contents' },
  { title: 'Level 2B', content: 'Level 2B Contents' },
]

const Level2Content = (
  <div>
    {PriceRangeOps}
    {/* <Accordion.Accordion panels={level2Panels} /> */}
  </div>
)

const Level3Content = (
  <div>
    {BrandOps}
    {/* <Accordion.Accordion panels={level2Panels} /> */}
  </div>
)

const Level4Content = (
  <div>
    {StarOps }
    {/* <Accordion.Accordion panels={level2Panels} /> */}
  </div>
)

const rootPanels = [
  { title: 'Catagory', content: { content: Level1Content, key: 'content-1' } },
  { title: 'Price Range', content: { content: Level2Content, key: 'content-2' } },
  { title: 'Brand', content: { content: Level3Content, key: 'content-3' } },
  { title: 'Rating', content: { content: Level4Content, key: 'content-4' } },
]

const AccordionExampleNested = () => (
  <Accordion defaultActiveIndex={[0,2]} panels={rootPanels} exclusive={false} styled />
)







 class StickyExamplePushing extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    return (

      <Grid centered columns={2}> 
      <Grid.Row>
        
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>
            <Grid divided='vertically'>

    <Grid.Row columns={3}>
      <Grid.Column>
        Show Items
    
                        <Button.Group basic>
                       
                         <Button active >60</Button>
                         
                             <Button>90</Button>
                             <Button>120</Button>
                           </Button.Group>
      </Grid.Column>
      <Grid.Column>
        Choose Page
      <Pagination
                           defaultActivePage={1}
                           firstItem={null}
                           lastItem={null}
                           pointing
                           secondary
                           totalPages={3}
                         />
      </Grid.Column>
      <Grid.Column>
        Choose View
      <Button.Group basic>
                         <Button><Icon size='large' name=' list layout'/></Button>
                            
                             <Button><Icon size='large' name='grid layout'/></Button>
                           </Button.Group>      </Grid.Column>
    </Grid.Row>
  </Grid>
  <hr/>
            {/* <span>Display Items : </span>
                        <Button.Group basic>
                       
                         <Button active >60</Button>
                         
                             <Button>90</Button>
                             <Button>120</Button>
                           </Button.Group>
                         
                           
                       
                       
                                 <Pagination
                           defaultActivePage={1}
                           firstItem={null}
                           lastItem={null}
                           pointing
                           secondary
                           totalPages={3}
                         />
                                  
                              
                         <Button.Group basic>
                         <Button><Icon size='large' name=' list layout'/></Button>
                            
                             <Button><Icon size='large' name='grid layout'/></Button>
                           </Button.Group>
                           <hr /> */}
              {_.times(5, i => (
                <div  key={i} >
                       
              <ItemContents/>
              
              </div>)
            
            
            )
              
              
              }
              {/* {_.times(5, i => <CardExampleGroupsItems key={i} />)} */}
              
              <Rail position='left'>
                <Sticky context={contextRef} pushing offset={120}>
                  <Header as='h3' style={{textAlign
                  :'center'}}>Stuck Content</Header>
                  {/* <Image src={logo} /> */}
                  {/* <Sider/> */}
                  <AccordionExampleNested />
            
                </Sticky>
              </Rail>

              {/* <Rail position='right'>
                {_.times(3, i => <Placeholder key={i} />)}

                <Sticky context={contextRef} pushing>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src={logo} />
                </Sticky>
              </Rail> */}
            </Segment>
          </div>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}


class CheckboxExampleRemoteControl extends Component {
  state = { checked: false }
  toggle = () => this.setState({ checked: !this.state.checked })

  render() {
    return (
      <div>
        {/* <Button onClick={this.toggle}>Toggle it</Button> */}
        <Checkbox label='Check this box' onChange={this.toggle} checked={this.state.checked} />
      </div>
    )
  }
}




// const panels = _.times(3, () => ({
//   title: faker.lorem.sentence(),
//   content: faker.lorem.paragraphs(),
// }))



// const ColorForm = (
//   <Form>
//     <Form.Group grouped>
//       <Form.Checkbox label='Red' name='color' value='red' />
//       <Form.Checkbox label='Orange' name='color' value='orange' />
//       <Form.Checkbox label='Green' name='color' value='green' />
//       <Form.Checkbox label='Blue' name='color' value='blue' />
//     </Form.Group>
//   </Form>
// )

// const SizeForm = (
//   <Form>
//     <Form.Group grouped>
//       <Form.Radio label='Small' name='size' type='radio' value='small' />
//       <Form.Radio label='Medium' name='size' type='radio' value='medium' />
//       <Form.Radio label='Large' name='size' type='radio' value='large' />
//       <Form.Radio label='X-Large' name='size' type='radio' value='x-large' />
//     </Form.Group>
//   </Form>
// )

// const panels = [{
//   title:'Item Price',
//   content: ColorForm 
// },
// {
//   title:'Item Price',
//   content:ColorForm
// }
// ]

// const AccordionExampleExclusive = () => (
//   <Accordion defaultActiveIndex={[0, 2]} panels={panels} exclusive={false} fluid />
// )


// const SubMenu = Menuantd.SubMenu;
// const MenuItemGroup = Menuantd.ItemGroup;

// class Sider extends React.Component {
//   handleClick = (e) => {
//     console.log('click ', e);
//   }
//   render() {
//     return (
//       <Menuantd
//         onClick={this.handleClick}
//         style={{ width: 256 }}
//         defaultSelectedKeys={['2']}
//         defaultOpenKeys={['sub1']}
//         mode="inline"
//       >
//         <SubMenu key="sub1" title={<span><AntIcons type="mail" /><span>Price Range</span></span>}>
//           <Menuantd.Item key="1">Option 1</Menuantd.Item>
//           <Menuantd.Item key="2">Option 2</Menuantd.Item>
//           <Menuantd.Item key="3">Option 3</Menuantd.Item>
//           <Menuantd.Item key="4">Option 4</Menuantd.Item>
//         </SubMenu>
//         <SubMenu key="sub2" title={<span><AntIcons type="appstore" /><span>Manufacturer</span></span>}>
//         <Menuantd.Item key="1">Option 1</Menuantd.Item>
//             <Menuantd.Item key="2">Option 2</Menuantd.Item>
//           <SubMenu key="sub3" title="Submenu">
//           <Menuantd.Item key="1">Option 1</Menuantd.Item>
//             <Menuantd.Item key="2">Option 2</Menuantd.Item>
//           </SubMenu>
//         </SubMenu>
//         <SubMenu key="sub4" title={<span><AntIcons type="setting" /><span>Navigation Three</span></span>}>
//               <Menuantd.Item key="1">Option 1</Menuantd.Item>
//             <Menuantd.Item key="2">Option 2</Menuantd.Item>
//         </SubMenu>
//       </Menuantd>
//     );
//   }
// }



const CardExampleCard = () => (
  <Card>
    <Image src='/assets/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      {/* <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta> */}
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      
        
        (22)
      
    </Card.Content>
  </Card>
)



class CatagoriesSub extends Component {
  state={seat:[],
    subCatItems:[]}

  componentWillMount(){
    var searchThisCat = this.props.history.location.pathname.slice(8).replace('_', ' ')
    console.log('search for',searchThisCat)
    API.getNavItems(searchThisCat).then((res) => {
      this.setState({subCatItems:res.data})
      console.log('Here is subcat data',this.state.seat)
var brakes = [];
var suspensions = [];
var light = [];
var bumper = [];
var tailgate = [];
var tires = [];
var seats = []
var mats = [];
var stepBars = [];
var bulls = [];
var wheel = [];
var exhaust = [];
var bed = [];
var liner = [];
var gauge = [];
var dash = [];
var fender = [];
var pedals = [];
var winch = [];
var grille = [];
var storage = [];
var covers = [];
var tow = [];
var windows = [];
var detailing = [];
var lift = [];
var mud = [];
var air = [];
var calipers =[];
var kits = [];
var doors = [];
var trailer = []
var net = [];
var cover = [];
var mirror = [];
var hood = [];
var D_ring = [];
var tow = [];
var ATV = [];
var battery = [];
var braket = [];
var windshield = [];
var wire = [];
var wiring = [];
var wiper = [];
var bezel = [];
var body = [];
var dash = [];
var intake = [];
var throttle = [];
var oil = [];
var lock = [];
var ladder = [];
var license = [];
var axle = []
var tonneau = [];
var truck = [];
var wheel = [];
var hitch = [];
var carrier = [];
var jack = [];
var roof = [];
var adhesive = [];
var fuel = [];
var gooseneck = [];
var cargo = [];


      // res.data.forEach((cat) => {
      //   if (cat.search(/suspension/i) !== -1) {
      //     suspensions.push(cat)
      //   } 
      //    if (cat.search(/light/i) !== -1) {
      //     light.push(cat)
      //   } 
        
      //   if (cat.search(/bumper/i) !== -1) {
      //     bumper.push(cat)
      //   } 
      //   if (cat.search(/tailgate/i) !== -1) {
      //     tailgate.push(cat)
      //   } 
      //    if (cat.search(/brake/i) !== -1) {
      //     brakes.push(cat)
      //   }
      //   if (cat.search(/tire/i) !== -1) {
      //     tires.push(cat)
      //   }
      //   if (cat.search(/seat/i) !== -1) {
      //     seats.push(cat)
      //   } 
      //   if (cat.search(/mat/i) !== -1) {
      //     mats.push(cat)
      //   } 
      //   if (cat.search(/nerf/i) !== -1) {
      //     stepBars.push(cat)
      //   } 
      //   if (cat.search(/step bar/i) !== -1) {
      //     stepBars.push(cat)
      //   } 
      //   if (cat.search(/bull/i) !== -1) {
      //     bulls.push(cat)
      //   } 
      //   if (cat.search(/wheel/i) !== -1) {
      //     wheel.push(cat)
      //   } 
      //   if (cat.search(/exhaust/i) !== -1) {
      //     exhaust.push(cat)
      //   } 
      //   if (cat.search(/bed/i) !== -1) {
      //     bed.push(cat)
      //   } 
      //   if (cat.search(/rotors/i) !== -1) {
      //     brakes.push(cat)
      //   } 
      //   if (cat.search(/liner/i) !== -1) {
      //     liner.push(cat)
      //   } 
      //   if (cat.search(/gauge/i) !== -1) {
      //     gauge.push(cat)
      //   } 
      //   if (cat.search(/dash/i) !== -1) {
      //     dash.push(cat)
      //   } 
      //   if (cat.search(/fender/i) !== -1) {
      //     fender.push(cat)
      //   } 
      //   if (cat.search(/pedal/i) !== -1) {
      //     pedals.push(cat)
      //   } 
      //   if (cat.search(/winch/i) !== -1) {
      //     winch.push(cat)
      //   } 
      //   if (cat.search(/grille/i) !== -1) {
      //     grille.push(cat)
      //   } 
      //   if (cat.search(/storage/i) !== -1) {
      //     storage.push(cat)
      //   } 
      //   if (cat.search(/cover/i) !== -1) {
      //     covers.push(cat)
      //   } 
      //   if (cat.search(/tow/i) !== -1) {
      //     tow.push(cat)
      //   } 
      //   if (cat.search(/running/i) !== -1) {
      //     stepBars.push(cat)
      //   } 
      //   if (cat.search(/window/i) !== -1) {
      //     windows.push(cat)
      //   } 
      //   if (cat.search(/detailing/i) !== -1) {
      //     detailing.push(cat)
      //   } 
      //   if (cat.search(/lift/i) !== -1) {
      //     lift.push(cat)
      //   } 
      //   if (cat.search(/mud/i) !== -1) {
      //     mud.push(cat)
      //   } 
      //   if (cat.search(/air/i) !== -1) {
      //     air.push(cat)
      //   } 
      //   if (cat.search(/calipers/i) !== -1) {
      //     calipers.push(cat)
      //   } 
      //   if (cat.search(/kits/i) !== -1) {
      //     kits.push(cat)
      //   } 
      //   if (cat.search(/door/i) !== -1) {
      //     doors.push(cat)
      //   } 
      //   if (cat.search(/trailer/i) !== -1) {
      //     trailer.push(cat)
      //   } 

      //   if (cat.search(/cover/i) !== -1) {
      //     cover.push(cat)
      //   } 
      //   if (cat.search(/mirror/i) !== -1) {
      //     mirror.push(cat)
      //   } 
      //   if (cat.search(/hood/i) !== -1) {
      //     hood.push(cat)
      //   } 

      //   if (cat.search(/net/i) !== -1) {
      //     net.push(cat)
      //   } 

      //   if (cat.search(/d-ring/i) !== -1) {
      //     D_ring.push(cat)
      //   } 
      //   if (cat.search(/tow/i) !== -1) {
      //     tow.push(cat)
      //   } 

      //   if (cat.search(/ATV/i) !== -1) {
      //     ATV.push(cat)
      //   } 
      //   if (cat.search(/battery/i) !== -1) {
      //     battery.push(cat)
      //   } 

      //   if (cat.search(/braket/i) !== -1) {
      //     braket.push(cat)
      //   } 
      //   if (cat.search(/windshield/i) !== -1) {
      //     windshield.push(cat)
      //   } 
      //   if (cat.search(/wire/i) !== -1) {
      //     wire.push(cat)
      //   } 
      //   if (cat.search(/wiring/i) !== -1) {
      //     wiring.push(cat)
      //   } 
      //   if (cat.search(/wiper/i) !== -1) {
      //     wiper.push(cat)
      //   } 
      //   if (cat.search(/bezel/i) !== -1) {
      //     bezel.push(cat)
      //   } 
      //   if (cat.search(/body/i) !== -1) {
      //     body.push(cat)
      //   } 
      //   if (cat.search(/dash/i) !== -1) {
      //     dash.push(cat)
      //   } 

      //   if (cat.search(/intake/i) !== -1) {
      //     intake.push(cat)
      //   } 

      //   if (cat.search(/throttle/i) !== -1) {
      //    throttle.push(cat)
      //   } 

      //   if (cat.search(/oil/i) !== -1) {
      //     oil.push(cat)
      //   } 

      //   if (cat.search(/lock/i) !== -1) {
      //     lock.push(cat)
      //   } 
      //   if (cat.search(/ladder/i) !== -1) {
      //     ladder.push(cat)
      //   } 

      //   if (cat.search(/license/i) !== -1) {
      //     license.push(cat)
      //   } 

      //   if (cat.search(/axel/i) !== -1) {
      //     axle.push(cat)
      //   } 

      //   if (cat.search(/tonneau/i) !== -1) {
      //     tonneau.push(cat)
      //   } 
      //   if (cat.search(/truck/i) !== -1) {
      //     truck.push(cat)
      //   } 

      //   if (cat.search(/hitch/i) !== -1) {
      //   hitch.push(cat)
      //   } 
      //   if (cat.search(/wheel/i) !== -1) {
      //     wheel.push(cat)
      //   } 

      //   if (cat.search(/carrier/i) !== -1) {
      //     carrier.push(cat)
      //   } 

      //   if (cat.search(/jack/i) !== -1) {
      //     jack.push(cat)
      //   } 
        
      //   if (cat.search(/roof/i) !== -1) {
      //     roof.push(cat)
      //   }

      //   if (cat.search(/adhesive/i) !== -1) {
      //     adhesive.push(cat)
      //   } 

      //   if (cat.search(/fuel/i) !== -1) {
      //     fuel.push(cat)
      //   } 

      //   if (cat.search(/gooseneck/i) !== -1) {
      //     gooseneck.push(cat)
      //   } 

      //   if (cat.search(/cargo/i) !== -1) {
      //     cargo.push(cat)
      //   } 
      // })

     

      console.log(mats)
      // console.log(brakes, 
      //   suspensions ,
      //   light ,
      //   bumper ,
      //   tailgate ,
      //   tires ,
      //   seats,
      //   'Mats',mats ,
      //   stepBars ,
      //   bulls ,
      //   wheel,
      //   exhaust ,
      //   bed ,
      //   liner ,
      //   gauge ,
      //   dash ,
      //   fender ,
      //   pedals ,
      //   winch ,
      //   grille ,
      //   storage ,
      //   covers ,
      //   tow ,
      //   windows ,
      //   detailing ,
      //   lift ,
      //   mud ,
      //   air ,
      //   calipers, kits, doors, trailer)

    })}




  render() {
    return (
      <div>
        <ResponsiveContainer>
    <Container>
      <Segment clearing style={{ padding: '2em 0em' }} >
        <Breadcrumb floated='left'>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right angle' />
          <Breadcrumb.Section >All products</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right angle' />
          <Breadcrumb.Section >Interior</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right angle' />
              <Breadcrumb.Section active >Seats</Breadcrumb.Section>
        </Breadcrumb>
      </Segment>
      <Segment clearing style={{ padding: '2em 0em' }} >
        <SUIHeader as='h1'>
          Vehicle Seats
      </SUIHeader>
      </Segment>
    </Container>

    <Container>
    <Grid columns='five' >
    {this.state.subCatItems.map((cats,index)=>{
      console.log('mapped cats', cats)
      // var fixedItem = item.replace(' ', '_');
            return(
              <Grid.Column >

        <Link to={"/category/"+ cats.linkto}>
              <Card raised>
                <Image src={Sparcoseat} style={{maxWidth:120}}/>
                <Card.Content>
                  <Card.Header textAlign='center' >{cats.title}</Card.Header>
                  <Card.Meta textAlign='center'>
                    <span className='date'>(400)</span>
                  </Card.Meta>
                  {/* <Card.Description textAlign='center'>
                    Matthew is 
                  </Card.Description> */}
                </Card.Content>
                {/* <Card.Content textAlign='center' extra>
              
                (22)
                </Card.Content> */}
              </Card>
              </Link>
            </Grid.Column>

            )
          })}
          </Grid>
          </Container>
    
     <Segment style={{ padding: '8em 0em' }} vertical>
    <StickyExamplePushing />

      </Segment>
        {/* <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
      <StickyExamplePushing />
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible. Let us delight
              your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
            </p>
          </Grid.Column>
      
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>We Help Companies and Companions</Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible. Let us delight
              your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='large'
              src='https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968'
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
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





        {/* <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the art of doing
          nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
          and worth your attention.
        </p>
        <Button as='a' size='large'>Read More</Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
          true.
          It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as='a' size='large'>I'm Still Quite Interested</Button> */}
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>Footer Header</Header>
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
        
      </div>
    )
  }
}







const friendOptions = [
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
  }
]

const DropdownExampleInline = () => (
  <span>
    Show me posts by
    {' '}
    <Dropdown inline options={friendOptions} defaultValue={friendOptions[0].value} />
  </span>
)





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


const ItemContents = () => (
  <Item.Group divided>
    <Item>
      <Image circular className="ui large circular image" src='https://cdn.shopify.com/s/files/1/3012/8606/products/10-600x600_a19d3308-c9ac-40fa-ae8e-853a378e0592.jpg?v=1519629467' size="large" style={{ borderRadius: 12, maxHeight: 294, maxWidth:294 }} />
      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
       <Item.Meta>
        <Label style={{backgroundColor:'none'}}><RatingExampleOnRate /></Label>
          <Label as='a' color='yellow' tag>-33%</Label>
          <Label><p ><span id="comparePrice"><span data-currency-usd="$150.00" data-currency="USD" style={{ textDecoration: 'line-through' }}>$150.00</span></span></p></Label>

          <Label>   <p ><span id="productPrice"> <span ><span data-currency-usd="$100.00" data-currency="USD">$100.00</span></span></span></p>
          </Label>


          {/* <span className='cinema'>Union Square 14</span> */}
        </Item.Meta>
        <Item.Meta>
          <span  >Brand: <span style={{ color: 'red' }}> Toyo</span></span>
        </Item.Meta>
        <Item.Meta>
          <span  >Availability: <span style={{ color: 'red' }}> In Stock</span></span>
        </Item.Meta>
        <Item.Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
          <Label>Limited</Label>
        </Item.Extra>
        <Item.Extra>
          <label className="control-label" htmlFor="Quantity">Qty:</label>
          <div className="quantity-box">
            <input type="text" name="quantity" value="1" size="2" id="Quantity" className="form-control" />
            <input type="button" id="minus" value="-" className="form-control" />
            <input type="button" id="plus" value="+" className="form-control" />
          </div>

          <button className="button button-cart btn" type="button" id="button-cart" data-loading-text="Loading..."> <Icon name='shop' size='big' />
            Add to Cart
        </button>


        </Item.Extra>
        
      </Item.Content>
    </Item>
    <Divider />
  </Item.Group>
)







const Placeholder = () =>  
  <Item.Group>
    <Item>
      <Item.Image size='large' src={Brakes} style={{maxWidth:294}}/>

      <Item.Content>
        <Item.Header>Arrowhead Valley Camp</Item.Header>
        <Item.Meta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </Item.Meta>
        <Item.Description>{<Image src={paragraph} />} </Item.Description>
      </Item.Content>
      <hr />
    </Item>
    <hr />
    <Item>
    <Item.Image size='large' src='https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968' />
      <Item.Content>
        <Item.Header>Buck's Homebrew Stayaway</Item.Header>
        <Item.Meta content='$1000 2 Weeks' />
        <Item.Description>{<Image src={paragraph} />}</Item.Description>
      </Item.Content>
    </Item>
    <hr />
    <Item>
    <Item.Image size='large' src='https://cdn.shopify.com/s/files/1/3012/8606/files/slider1-aero3-1920x943_1920x846.jpg?v=1520185968' />
    <Item.Content>
        <Item.Header>Buck's Homebrew Stayaway</Item.Header>
        <Item.Meta content='$1000 2 Weeks' />
        <Item.Description>{<Image src={paragraph} />}</Item.Description>
        <hr />
      </Item.Content>
      </Item>
      <hr />
  </Item.Group>








class TabletContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    console.log(...Responsive)

    return (
      <Responsive {...Responsive.onlyTablet}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
          <Menu
  fixed={fixed ? 'top' : null}
  inverted={!fixed}
  pointing={!fixed}
  secondary={!fixed}
  size='large'
>
  <Container>
    <Menu.Item>
    <Button content='Click Here' />
      {/* <Image size='mini' src={logo} alt="logo" /> */}
    </Menu.Item>
    <Menu.Item as='a' active>Home</Menu.Item>
    <Menu.Item as='a'>Shop</Menu.Item>
    <Menu.Item as='a'>Company</Menu.Item>
    <Menu.Item as='a'>Careers</Menu.Item>
    <Menu.Item>
      <SearchCategory />
    </Menu.Item>
    <Menu.Item position='right'>
      <Button as='a' inverted={!fixed}>Log in</Button>
      <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
    </Menu.Item>
    <Menu.Item style={{ backgroundColor: 'transparent' }} className='iconRedHover'>

    </Menu.Item>
  </Container>
</Menu>
         
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

TabletContainer.propTypes = {
  children: PropTypes.node,
}


class MobileContainer extends Component {

  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })


  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { visible } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover'  icon='labeled' vertical  visible={sidebarOpened}>
          <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>Log in</Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}



export default CatagoriesSub