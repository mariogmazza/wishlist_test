import PropTypes from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react/dist/commonjs'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
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
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
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

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
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

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your company superpowers to do things that they never thought possible.
              Let us delight your customers and empower your needs... through pure data analytics.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/assets/images/wireframe/white-image.png' />
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
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/assets/images/avatar/large/nan.jpg' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
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
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout



componentWillMount(){
  API.getCats().then((res) => {
    console.log('Here is the data',res.data)
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


    res.data.forEach((cat) => {
      if (cat.search(/suspension/i) !== -1) {
        suspensions.push(cat)
      } 
       if (cat.search(/light/i) !== -1) {
        light.push(cat)
      } 
      
      if (cat.search(/bumper/i) !== -1) {
        bumper.push(cat)
      } 
      if (cat.search(/tailgate/i) !== -1) {
        tailgate.push(cat)
      } 
       if (cat.search(/brake/i) !== -1) {
        brakes.push(cat)
      }
      if (cat.search(/tire/i) !== -1) {
        tires.push(cat)
      }
      if (cat.search(/seat/i) !== -1) {
        seats.push(cat)
      } 
      if (cat.search(/mat/i) !== -1) {
        mats.push(cat)
      } 
      if (cat.search(/nerf/i) !== -1) {
        stepBars.push(cat)
      } 
      if (cat.search(/step bar/i) !== -1) {
        stepBars.push(cat)
      } 
      if (cat.search(/bull/i) !== -1) {
        bulls.push(cat)
      } 
      if (cat.search(/wheel/i) !== -1) {
        wheel.push(cat)
      } 
      if (cat.search(/exhaust/i) !== -1) {
        exhaust.push(cat)
      } 
      if (cat.search(/bed/i) !== -1) {
        bed.push(cat)
      } 
      if (cat.search(/rotors/i) !== -1) {
        brakes.push(cat)
      } 
      if (cat.search(/liner/i) !== -1) {
        liner.push(cat)
      } 
      if (cat.search(/gauge/i) !== -1) {
        gauge.push(cat)
      } 
      if (cat.search(/dash/i) !== -1) {
        dash.push(cat)
      } 
      if (cat.search(/fender/i) !== -1) {
        fender.push(cat)
      } 
      if (cat.search(/pedal/i) !== -1) {
        pedals.push(cat)
      } 
      if (cat.search(/winch/i) !== -1) {
        winch.push(cat)
      } 
      if (cat.search(/grille/i) !== -1) {
        grille.push(cat)
      } 
      if (cat.search(/storage/i) !== -1) {
        storage.push(cat)
      } 
      if (cat.search(/cover/i) !== -1) {
        covers.push(cat)
      } 
      if (cat.search(/tow/i) !== -1) {
        tow.push(cat)
      } 
      if (cat.search(/running/i) !== -1) {
        stepBars.push(cat)
      } 
      if (cat.search(/window/i) !== -1) {
        windows.push(cat)
      } 
      if (cat.search(/detailing/i) !== -1) {
        detailing.push(cat)
      } 
      if (cat.search(/lift/i) !== -1) {
        lift.push(cat)
      } 
      if (cat.search(/mud/i) !== -1) {
        mud.push(cat)
      } 
      if (cat.search(/air/i) !== -1) {
        air.push(cat)
      } 
      if (cat.search(/calipers/i) !== -1) {
        calipers.push(cat)
      } 
      if (cat.search(/kits/i) !== -1) {
        kits.push(cat)
      } 
      if (cat.search(/door/i) !== -1) {
        doors.push(cat)
      } 
      if (cat.search(/trailer/i) !== -1) {
        trailer.push(cat)
      } 

      if (cat.search(/cover/i) !== -1) {
        cover.push(cat)
      } 
      if (cat.search(/mirror/i) !== -1) {
        mirror.push(cat)
      } 
      if (cat.search(/hood/i) !== -1) {
        hood.push(cat)
      } 

      if (cat.search(/net/i) !== -1) {
        net.push(cat)
      } 

      if (cat.search(/d-ring/i) !== -1) {
        D_ring.push(cat)
      } 
      if (cat.search(/tow/i) !== -1) {
        tow.push(cat)
      } 

      if (cat.search(/ATV/i) !== -1) {
        ATV.push(cat)
      } 
      if (cat.search(/battery/i) !== -1) {
        battery.push(cat)
      } 

      if (cat.search(/braket/i) !== -1) {
        braket.push(cat)
      } 
      if (cat.search(/windshield/i) !== -1) {
        windshield.push(cat)
      } 
      if (cat.search(/wire/i) !== -1) {
        wire.push(cat)
      } 
      if (cat.search(/wiring/i) !== -1) {
        wiring.push(cat)
      } 
      if (cat.search(/wiper/i) !== -1) {
        wiper.push(cat)
      } 
      if (cat.search(/bezel/i) !== -1) {
        bezel.push(cat)
      } 
      if (cat.search(/body/i) !== -1) {
        body.push(cat)
      } 
      if (cat.search(/dash/i) !== -1) {
        dash.push(cat)
      } 

      if (cat.search(/intake/i) !== -1) {
        intake.push(cat)
      } 

      if (cat.search(/throttle/i) !== -1) {
       throttle.push(cat)
      } 

      if (cat.search(/oil/i) !== -1) {
        oil.push(cat)
      } 

      if (cat.search(/lock/i) !== -1) {
        lock.push(cat)
      } 
      if (cat.search(/ladder/i) !== -1) {
        ladder.push(cat)
      } 

      if (cat.search(/license/i) !== -1) {
        license.push(cat)
      } 

      if (cat.search(/axel/i) !== -1) {
        axle.push(cat)
      } 

      if (cat.search(/tonneau/i) !== -1) {
        tonneau.push(cat)
      } 
      if (cat.search(/truck/i) !== -1) {
        truck.push(cat)
      } 

      if (cat.search(/hitch/i) !== -1) {
      hitch.push(cat)
      } 
      if (cat.search(/wheel/i) !== -1) {
        wheel.push(cat)
      } 

      if (cat.search(/carrier/i) !== -1) {
        carrier.push(cat)
      } 

      if (cat.search(/jack/i) !== -1) {
        jack.push(cat)
      } 
      
      if (cat.search(/roof/i) !== -1) {
        roof.push(cat)
      }

      if (cat.search(/adhesive/i) !== -1) {
        adhesive.push(cat)
      } 

      if (cat.search(/fuel/i) !== -1) {
        fuel.push(cat)
      } 

      if (cat.search(/gooseneck/i) !== -1) {
        gooseneck.push(cat)
      } 

      if (cat.search(/cargo/i) !== -1) {
        cargo.push(cat)
      } 
    })


    console.log('seat data',seats , mats, pedals)
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

  {
    "data": [
      "Air Intake Tube Cutter",
      "Suspension Air Compressor",
      "Suspension Air Line Kit",
      "Air Helper Spring Hardware Kit",
      "Suspension Air Bag / Bellows",
      "Torsion Bar Load Assist",
      "Air Helper Spring Spacer",
      "Air Helper Spring/Load Leveling Kit",
      "Grille Guard/Brush Guard",
      "Headache Rack/Cab Protector",
      "Tie Down Anchor",
      "Light Mount-Headache Rack",
      "Light Mount-Universal",
      "Doors",
      "Fenders/Fender Flares",
      "Side Marker Light Assembly",
      "Inner Fenders",
      "Worklight Wire Harness",
      "Worklight",
      "Worklight Cover",
      "LED Light Bar",
      "LED Light Bar Cover",
      "LED Lights-Hood Kit",
      "Light Mounting Bar-Roof",
      "LED Lights-Windshield Kit",
      "Bumper- Front",
      "Bumper Corner Set",
      "Bull Bar",
      "Winch Fairlead Mount Bracket",
      "Tow Hook",
      "Light Mount-Roof",
      "Light Mount-Hood",
      "Nerf/Step Bar",
      "Running Board",
      "Nerf/Step Bar Mount Kit",
      "Nerf/Step Bar Pad",
      "Bull Bar Cover",
      "Cargo Bracket",
      "Cargo Divider",
      "Bumper- Rear",
      "Winch Mount Plate",
      "D-Ring/Shackle",
      "Winch Fairlead",
      "Winch Shackle",
      "License Plate Bracket",
      "Spare Tire Relocation Bracket",
      "Third Brake Light Bracket",
      "Floor Mat Set",
      "Seat Cover",
      "Travel Blanket",
      "Nerf/Step Bar (Wheel to Wheel)",
      "Cargo Area Liner",
      "Mud Flap",
      "Light Mount-Windshield/A-Pillar",
      "Winter Front Screen/Bug Screen",
      "Grille Guard Cover",
      "Light Mounting Bar-Bumper",
      "Rainguard/Window Visor/Vent Visor",
      "Bug Shield/Hood Protector",
      "Fender Corner Guard",
      "Tail Light Cover",
      "Head Light Cover",
      "Miscellaneous",
      "Exterior Door Handle Cover",
      "Tailgate Handle Cover",
      "Door Mirror Cover",
      "Fuel Door Cover/Trim",
      "Sunroof Visor",
      "Hood Scoop",
      "Side Window Cover",
      "Door Sill Protector",
      "Rear Window Deflector",
      "Tape-Adhesive Grip",
      "Cargo Net",
      "Cargo Bar",
      "Car Cover",
      "Hard Top Storage",
      "Tailgate Net",
      "Bumper Apron Cover",
      "Door/Window Storage Bag",
      "Spare Tire Cover",
      "Tire Cover",
      "Seat Storage Bag",
      "Trunk Storage Bag",
      "Window Heat Shield/Shade",
      "Motorcycle Cover",
      "ATV Cover",
      "Motorcycle Seat Cover",
      "Personal Watercraft Cover",
      "Car Cover Bag",
      "Car Cover Lock",
      "Window Heat Shield Bag",
      "Tailgate Seal",
      "Detailing-Cleaner/Protectant",
      "Tonneau Cover/Truck Bed Cover",
      "Cargo Area Light",
      "Air Intake Tube",
      "Air Adjustable Leveling Control Panel",
      "Air Pressure Monitor",
      "Air Line Fitting",
      "Air Compressor Mounting Bracket",
      "Air Suspension System",
      "Axle Bracket",
      "Fuse Power Tap",
      "Air Pressure Gauge",
      "Air Compressor Check Valve",
      "Shock Absorber",
      "Inflation Valve Bracket",
      "Air Pressure Switch",
      "Air Suspension Sensor Linkage Kit",
      "Multi Purpose Switch",
      "Air Suspension Pressure Transducer",
      "Air Suspension Exhaust Solenoid",
      "Air Tank",
      "Air Compressor Filter Service Pack",
      "Height Control Valve",
      "Suspension Air Compressor Wiring Harness",
      "Gloves",
      "Air Compressor Isolator",
      "Bed Step/Side Step",
      "Garage Organizer/Job Site Box",
      "Light Mount-Bumper",
      "Bumper Mounting Kit",
      "LED Lights-Bumper Kit",
      "Trailer Hitch Step",
      "Sport Bar/Roll Bar",
      "Bull Bar Mount Bracket",
      "Roof Rack",
      "Roof Rack Mount Kit",
      "Light Mount-Roof Rack",
      "Running Board Drop Step",
      "Bed Rail/Side Rail",
      "Apparel/Merchandise",
      "Exhaust Tip/Tail Pipe Tip",
      "Nerf/Step Bar End Cap",
      "Underseat Storage Box",
      "Interior Storage Box",
      "Flow-through Tailgate",
      "Back Up Camera Mount",
      "Trailer Hitch Ball Mount",
      "Floor Center Hump Mat",
      "Fender Liner/Wheel Well Liner",
      "Truck Bed Cap-Side Rail",
      "LED Lights-Fog Lights",
      "Driving Light",
      "LED Lights-Auxiliary Lights",
      "LED Cube/Offroad Light",
      "Flood Light",
      "Replacement Bulbs",
      "Fog Light Lens",
      "Light Mount-Fog/Driving Light",
      "Light Mount-Interior",
      "Driving Light Lens",
      "Auxiliary Light Wire Harness",
      "Universal Relay",
      "Driving Light Wire Harness",
      "Offroad/Racing Lamp Cover",
      "Light Switches/Housing",
      "Horn",
      "Detailing-Glass Cleaner",
      "Wiper Blade Refill",
      "Wiper Blade",
      "Head Light Kits",
      "Tail Light Set",
      "License Plate Frame",
      "Light Strips/Dayliner",
      "Grille Insert/Trim",
      "Rocker Panel Molding/Accents",
      "Rear View Mirror Cover",
      "Fog/Driving Light Trim Ring",
      "Emblem/Decal",
      "Third Brake Light Cover",
      "Door Hinge Cover",
      "Hood Vent",
      "Head Light Bezel Set",
      "Window Hinge Cover",
      "Window Trim",
      "Door Mirror Bracket Cover",
      "Pillar Post Trim",
      "Bumper Valance Cover",
      "Tailgate Trim",
      "Side Marker Light Cover",
      "Hood Latch/Hinge",
      "Wheel Fender Trim",
      "Air Dam Cover",
      "Body Side Molding Accent",
      "Trunk Lid Molding Accent",
      "Antenna Bezel",
      "Air Intake Cover",
      "Exterior Trim Kit",
      "Roof Marker Light Cover",
      "Interior Trim Kit",
      "Truck Bed Cap-Bulkhead",
      "Tailgate Cap Protector",
      "Bed Rail Anchor",
      "Bumper Valance Grille Insert",
      "Wiring Harness - LED",
      "Light Controller/Remote",
      "Tailgate Light Bar",
      "Third Brake Light Assembly",
      "Door Mirror Turn Signal Indicator",
      "Roof Marker Light",
      "LED Light Anti-Theft Kit",
      "Pedal Pad",
      "Foot Rest",
      "Bumper Step Pad",
      "Replacement Bulbs-Dome Light",
      "Winch Mount Kit",
      "Winch Controller Connector",
      "Winch Rope Cover",
      "Snatch Block",
      "Locking Hub Kit",
      "Locking Hub Service Kit",
      "Winch Controller",
      "Winch Cover",
      "Winch Rope",
      "Winch",
      "Replacement Bulb-Offroad Light",
      "Winch Brake",
      "Winch Wire Harness Connector",
      "Winch Rope Extension",
      "Winch Fairlead Cover",
      "Trailer Hitch",
      "Winch Solenoid Bracket",
      "Winch Cradle",
      "Winch Wire Harness",
      "Battery Jumper Cable",
      "Locking Hub Spindle Nut",
      "Winch Carrier",
      "D-Ring/Shackle Receiver Mount",
      "Winch Accessory Kit",
      "Wire Rope Tension Kit",
      "Industrial Hoist",
      "Locking Hub Screw",
      "Locking Hub Stud Kit",
      "Grille Guard Mounting Kit",
      "Trailer Hitch Receiver Cover",
      "Snow Plow Accessories",
      "Winch Remote Clutch Kit",
      "ATV Gravel Skit Kit",
      "Bumper Skirting",
      "Tow Strap",
      "Floating Axle Hub Lock",
      "Winch End Housing",
      "Battery Cutoff Switch",
      "Winch Solenoid",
      "Rock Slider/Rocker Panel Guards",
      "Trailer Hitch Pin",
      "Winch Contactor",
      "Spare Tire Carrier",
      "ATV 4WD Actuator Seal Kit",
      "Winch Drum Support",
      "Skid Plate",
      "Winch Battery Charger",
      "Winch Battery",
      "Winch Carry Bag",
      "Trailer Hitch Mount Adapter",
      "Winch Motor",
      "Winch Module",
      "Winch Seal Kit",
      "Winch Ring Gear",
      "Winch Solenoid Box Assembly",
      "Winch Fairlead Adapter",
      "Winch Drum",
      "Clevis Hook",
      "Winch Controller Transmitter",
      "ATV Chassis Guard/Body Armor",
      "Skid Plate Hardware Kit",
      "Dual Battery Control Kit",
      "Overload Interrupt Switch",
      "Head Light Guard",
      "Light Mount-ATV",
      "Light Mount-Motorcycle",
      "Tree Trunk Protector",
      "Winch Controller Mount Bracket",
      "4x4 Jack Mount",
      "ATV Control Arm Guard",
      "Winch Cable Breakage Damper",
      "Winch Hook",
      "Battery Cable",
      "Winch Accessory Case",
      "Winch Cable Stop",
      "Bumper Pad",
      "License Plate Light",
      "Fog/Driving Light Cover",
      "Interior LED Wire Harness",
      "LED Lights-Exterior",
      "LED Lights-Flush Mounts",
      "Light Mounting Bar-Windshield",
      "Tailgate Ladder",
      "Merchandise Display",
      "Running Board Mount Kit",
      "Running Board Light",
      "Running Board Light Cover",
      "Running Board Wiring Kit",
      "Running Board End Cap",
      "Light Mount-Bull Bar",
      "Grille Replacements",
      "LED Light Bar Wire Cover",
      "Tail Light Guard",
      "Parking Aid Sensor Bracket",
      "Grille Guard Trim Strip",
      "Winch Mount Plate Trim",
      "Snatch Block Strap",
      "Tow Bar Shackle",
      "4x4 Jack",
      "Winch Cable",
      "Air Compressor",
      "Truck Bed Mat",
      "Tailgate Mat",
      "Auxiliary Light Clamp",
      "Light Mount-Grille",
      "Ladder Rack",
      "Truck Bed Rack Mount",
      "Tool Box - Crossover",
      "Tool Box - Side Mount",
      "Tool Box - Chest Box",
      "Truck Cab Protector/Headache Rack Mount",
      "Trailer Wire Connector/Wiring Harness",
      "Trailer Hitch Safety Chain",
      "Trailer Hitch Receiver Tube/Adapters",
      "Back Up Cameras/Sensors",
      "Trailer Wire Tester",
      "Wire Splice/Butt Connector",
      "Trailer Brake Control",
      "Trailer Wire Adapter",
      "Tail Light Converter",
      "Trailer Hitch Ball",
      "Cowl Scoop",
      "Soft Top Wind Deflector",
      "Soft Top",
      "Floor Linings/BedTred Kits",
      "Conduit Carrier Box",
      "Tool Box - Accessories",
      "Tool Box - Underbody",
      "Bed Slide/Cargo Slide",
      "Tool Box - Step Box",
      "Tool Box - Tower/Drawer Box",
      "Tool Box - Wheel Well",
      "Tool Box - Gooseneck",
      "Tool Box - Trailer Tongue Box",
      "Detailing-Car Wash Kit",
      "Seat",
      "Roll Bar Carrier Bracket",
      "Tailgate Carrier Bracket",
      "Universal Rack Tray",
      "Dog Divider",
      "Center Console Tray",
      "Cargo Box",
      "Soft Top Storage",
      "Bumper Roller",
      "Bumper End Caps",
      "Windshield Channel",
      "Seat Mounting Bracket",
      "Door Hinge Pin",
      "Exterior Door Handle",
      "Door Mirror Bracket",
      "Door Mirror Kit",
      "Soft Top Bow Bracket",
      "Door Panel",
      "Hard Top Retractable Sunshade",
      "Soft Top Tailgate Bar",
      "Door Skin",
      "Saddle Bag",
      "Interior Organizer",
      "Tailgate Organizer",
      "Defroster Wire Harness",
      "Windshield Wiper Motor",
      "Soft Top Hardware Kit",
      "Door Surround Molding Kit",
      "Tinted Window Kit",
      "Truck Bed Soft Camper Top",
      "Roll Bar Pad",
      "Wind Break/Wind Screen",
      "Speaker Sound Bar Cover",
      "Hood Appearance Set",
      "Fender Flare Hardware Kit",
      "Body Protector Kit",
      "Side Marker Hardware",
      "Step Plate",
      "Grab Handle",
      "Liquid Transfer Tank Pump",
      "Liquid Transfer Tank Pump Meter",
      "Tailgate Liner",
      "Tailgate Assist",
      "Trailer Hitch Cargo Carrier",
      "Vehicle Mounted Ladder",
      "Liquid Transfer Tank",
      "Tool Box - Dog Box",
      "Trailer Hitch Cargo Carrier Light Kit",
      "Watersport Carrier Block",
      "Liquid Transfer Tank Connector Kit",
      "Liquid Transfer Tank Fuel Cap",
      "Tool Box - Footlocker/ATV",
      "Cab Spoiler",
      "Spot Light",
      "Fog/Driving/Offroad Light Lens",
      "Convoluted Tubing",
      "Exterior LED Bezel",
      "Fog/Driving Light Relay",
      "Under Hood Light",
      "Back Up Light Kit",
      "Flasher Wiring Harness",
      "Wiring Pigtail",
      "Fog/Driving/Offroad Light Shield",
      "Flashlight",
      "Wiper Cowl",
      "Rocker Panel Guard Side/Drop Step",
      "License Plate Relocator",
      "Cargo Bag",
      "Bike Carrier",
      "Truck Bed Tailgate Extension",
      "Truck Bed Ramp",
      "Tool Box - Fifth Wheel Box",
      "Performance Tuner/Programmer",
      "Air Intake Power Tuner Kit",
      "Dash Panel",
      "Gauge Pillar",
      "Air Filter",
      "Air Intake Housing",
      "Throttle Body Spacer",
      "Throttle Body Booster",
      "Air Intake Kit",
      "Air Intake Tube Clamp",
      "Air Cleaner Adapter",
      "Air Cleaner Bracket",
      "Air Intake Mounting Bracket",
      "Hood Scoop Air Intake Adapter",
      "Oil Breather Filter",
      "Air Filter Cleaner And Degreaser",
      "Air Filter Oil",
      "Air Filter Wrap",
      "Air Cleaner Assembly",
      "Air Cleaner Cover",
      "Air Snorkel",
      "Air Flow Sensor Block-Off Plate",
      "Truck Bed Tailgate Extension Bracket Kit",
      "Power Running Board",
      "Power Running Board Extension Arm",
      "Power Running Board Trim Strip Kit",
      "Power Running Board Plug-Play Conversion Kit",
      "Power Running Board Wire Harness",
      "Air Tank Mount Kit",
      "Power Running Board Switch",
      "Strobe Light",
      "Trailer Light",
      "LED Lights-Rock Lights",
      "Arm Rest Cover",
      "Fifth Wheel Trailer Hitch Cover",
      "Front End Cover Hardware Kit",
      "Sandblast Hood/Mask",
      "Tailgate Lock",
      "Spare Tire Lock",
      "Tonneau Cover Keyless Entry Kit",
      "Tailgate Wiring Harness",
      "Tailgate Lock Switch Kit",
      "Tailgate Handle",
      "Truck Bed Liner",
      "Truck Bed Liner Installation Kit",
      "Tailgate Liner Install Kit",
      "Fender Liner Installation Kit",
      "Truck Bed Stake Pocket Cover",
      "Ladder Rack Base Rail",
      "Ladder Rack Base Rail Extension",
      "Truck Bed Rack Lock",
      "Tie Downs/Ratchet Straps",
      "Tool Box Antenna Mount",
      "Tool Box - Topsider",
      "Truck Bed Liner Underliner",
      "Garage Floor Tiles",
      "License Plate Cover",
      "Dog Ramp",
      "Storage Bag",
      "Drink Coaster",
      "Detailing-Cleaning Cloth",
      "Detailing-Finishing Cloth",
      "Detailing-Drying Towel",
      "Detailing-Sponge",
      "Battery Charger",
      "Detailing-Wash Mit",
      "Detailing-Squeegee",
      "Cargo Area Organizer",
      "Detailing-Car Wax",
      "Detailing-Wheel Cleaning Kit",
      "Detailing-Floor Mat Cleaner Kit",
      "Detailing-Floor Mat Protector Kit",
      "Detailing Kit",
      "Detailing-Leather Conditioner",
      "Lens Protection Film",
      "Utility Mat",
      "Winch Strap",
      "Coil Spring",
      "Add A Leaf",
      "Lift Kit-Suspension",
      "Suspension Front Leveling Kit",
      "Suspension Block",
      "Leaf Spring",
      "Coil Spring Spacer",
      "Alignment Cam Bolt",
      "Drive Shaft Spacer",
      "Steering Stabilizer",
      "Axle U-Bolt",
      "Bar Pin/Slip Yoke Eliminator",
      "Body Corner Guard",
      "Cable Lock",
      "Bike Lock",
      "Trailer Hitch Locking Pin",
      "Trailer Hitch Coupler Lock",
      "Trailer Hitch Receiver Anti Rattle Kit",
      "Wheel Lock",
      "Fifth Wheel Trailer Hitch Lock",
      "Padlock",
      "Tonneau Cover/Truck Bed Rack Kit",
      "Tonneau Cover Tool Box",
      "Tonneau Cover Clamp",
      "Watersport Carrier",
      "Cargo Rack Load Holder",
      "Tonneau Cover Cargo Accessories",
      "Tonneau Cover Ladder Rack",
      "Tonneau Cover Hardware",
      "Truck Bed Rack Load Stabilizer",
      "Tonneau Cover Seal",
      "Tonneau Cover Rail Seal",
      "Tonneau Cover Pull Strap",
      "Tonneau Cover Lift Support",
      "Trailer Hitch Safety Chain Link",
      "Fifth Wheel Trailer Hitch Mount Leg",
      "Fifth Wheel Trailer Hitch Bracket",
      "Fifth Wheel Trailer Hitch Roller",
      "Fifth Wheel Trailer Hitch Head Unit",
      "Fifth Wheel Trailer Hitch",
      "Gooseneck Trailer Hitch",
      "Bed Rail Hardware Kit",
      "Fifth Wheel Trailer Hitch Mount Kit",
      "Fifth Wheel Trailer Hitch Adapter",
      "Fifth Wheel Trailer Hitch Lube Plate",
      "Sound Damping Material",
      "Trailer Hitch Receiver Clip",
      "Fifth Wheel Trailer Hitch Wedge",
      "Weight Distributing Hitch",
      "Weight Distributing Hitch Chain Hanger",
      "Weight Distributing Hitch Bracket",
      "Weight Distributing Hitch Bar",
      "Weight Distributing Hitch Head Assembly",
      "Weight Distributing Hitch Bolt Kit",
      "Weight Distributing Hitch Shank",
      "Weigh Distribution Hitch Safety Chain U-Bolt Kit",
      "Weight Distributing Hitch Handle",
      "Weight Distributing Hitch Rivet",
      "Trailer Hitch Ball Shank",
      "Weight Distributing Hitch Sway Control",
      "Gooseneck Trailer Hitch Ball",
      "Weight Distributing Hitch Hardware",
      "Bike Carrier Strap",
      "Bike Carrier Lock",
      "Bike Carrier Tire Holder",
      "Step Bumper Drop Hitch Mount",
      "Tow Bar",
      "Wrench",
      "Towing Mirror",
      "Trailer Hitch Ball Adapter Bushing",
      "Trailer Hitch Ball Cover",
      "Wheel Bearing Protector",
      "Wheel Chock",
      "Wheel Bearing Kit",
      "Fifth Wheel Trailer Hitch King Pin Lock",
      "Trailer Hitch Coupler Safety Pin",
      "Trailer Jack Lock Pin",
      "Trailer Hitch Coupler Repair Kit",
      "Trailer Hitch Coupler",
      "Pintle Mount",
      "Trailer Jack",
      "Trailer Jack Foot",
      "Trailer Jack Caster",
      "Trailer Winch",
      "Winch Mount Handle",
      "Spare Tire Carrier Mount",
      "Skid Plate-Hitch Receiver",
      "Trailer Hitch Sway Control Ball",
      "Trailer Hitch Ball Hardware",
      "Trailer Hitch Ball Sphere",
      "Trailer Hitch Ball Shank Cover",
      "ATV Trailer Hitch Receiver Adapter",
      "Trailer Sway Control Bracket",
      "Tow Strap Mount",
      "D-Ring Bracket",
      "Trailer Hitch Ball Wrench",
      "Trailer Hitch Shank Mount",
      "Pintle Hook",
      "Drawbar",
      "Lunette Eye",
      "Pintle Ball",
      "Trailer Hitch Collar",
      "Trailer Brake Control Bracket",
      "Trailer Brake Control Wire Harness",
      "Circuit Tester",
      "Trailer Break-Away Switch",
      "Trailer Brake Control Lanyard/Pull Wire",
      "Battery Box",
      "Battery",
      "Trailer Break-Away Kit",
      "Trailer Wire Converter",
      "Trailer Relay Kit",
      "Trailer Wire",
      "Trailer Wire Installation Kit",
      "Trailer Wire Connector Mounting Bracket",
      "Flasher",
      "Trailer Wire Cigarette Lighter Adapter",
      "Circuit Breaker",
      "Fuse",
      "Fuse Holder",
      "Wire Terminal End",
      "Wire Tie Strap",
      "Electrical Tape",
      "Convoluted Tubing Clamp",
      "Wire Nut",
      "Gooseneck Trailer Hitch Mount Kit",
      "Gooseneck Trailer Hitch Alignment Tool",
      "Gooseneck Trailer Hitch Chain U-Bolt Kit",
      "Gooseneck Trailer Hitch Cap",
      "Gooseneck Trailer Hitch Template",
      "Trailer Hitch Safety Chain Hook",
      "Tie Down Anchor Plate",
      "Tie Down Anchor Trim Ring",
      "Roof Rack Cross Bar",
      "Shovel Holder Bracket",
      "Spare Tire Strap",
      "Roof Rack Tray",
      "Watersport Carrier Pad",
      "Ski/Snowboard Carrier",
      "Awning",
      "Awning Leg",
      "Tonneau Cover Handle",
      "Tonneau Cover Tailgate Lock Assembly",
      "Tonneau Cover Hinge",
      "Adhesive",
      "Grille-Angry Brow Molding",
      "Tonneau Cover Buckle",
      "Tonneau Cover Drain Tube",
      "Tonneau Cover Ring",
      "Tonneau Cover Adapter Kit",
      "Truck Bed Storage Box",
      "Detailing-Vinyl Cleaner",
      "Cargo Retrieval Tool",
      "Headache Rack-Ladder Rack Rear Bar",
      "Truck Bed Rack Installation Kit",
      "Tonneau Cover Headache Rack Adapter",
      "Antenna Bracket",
      "Wheel Spacer",
      "Jounce/Bump Stop Kit",
      "Coil Over Shock Absorber",
      "Suspension Block and U-Bolt Kit",
      "Shock Absorber Mount",
      "Truck Bed Cage",
      "Leaf Spring Shackle",
      "Tie Rod End",
      "Control Arm",
      "Radius Arm",
      "Suspension Strut Spacer",
      "Lift Kit-Long Arm/Upgrade Kit",
      "Suspension Subframe",
      "Steering Knuckle",
      "Shock Absorber Adapter Bracket",
      "Tie Rod Reinforcing Sleeve",
      "Track Bar Bracket",
      "Pitman Arm",
      "Sway Bar Link",
      "Control Arm Bushing",
      "Shock Absorber Extension",
      "Brake Line Relocation Bracket",
      "Exhaust Pipe Extension",
      "Sway Bar Drop Bracket",
      "Brake Hose/Brake Line Kits",
      "Ball Joint",
      "Heim Joint",
      "Control Arm Sleeve",
      "Suspension Air Bag Spacer",
      "Torsion Key Unloading Tool",
      "Steering Gear Brace",
      "Suspension Strut Nut",
      "Steering Stabilizer Relocation Bracket",
      "Differential Drop Spacer Kit",
      "Radius Arm Bracket",
      "Track Bar",
      "Steering Kit",
      "Shock Absorber Reservoir",
      "Bumper Cruise Control Module",
      "Leaf Spring Installation Tool",
      "Leaf Helper Spring Installation Tool",
      "Leaf Helper Spring Mount Kit",
      "Leaf Helper Spring",
      "Leaf Spring Sway Control",
      "Gooseneck Coupler",
      "Gooseneck Hitch Plug",
      "Gooseneck Kingpin",
      "Gooseneck Extender",
      "Trailer Biker Bar",
      "Headliner",
      "Transmission Shift Adapter",
      "Gauge Pod Adapter",
      "Gauge Cover",
      "Rear View Mirror Mounting Kit",
      "Performance Tuner/Programmer Cable",
      "Sensor Docking Station",
      "Pyrometer Sensor",
      "Oxygen Sensor",
      "Performance Tuner/Programmer OBD Block",
      "Computer Chip",
      "Engine Control Module Switch",
      "Memory Card",
      "Wheel Cover",
      "Tool Box Tray",
      "Tool Box Mount",
      "Tool Box Mat",
      "Tool Box Light",
      "Tool Box Polish",
      "Truck Cab Cover",
      "Center Console",
      "Floor Console",
      "Auxiliary Heater",
      "Billet Shift Knob",
      "Soft Top Bow Disconnect",
      "Tailgate Stopper",
      "Windshield Hinge",
      "Door Hinge",
      "Spare Tire Carrier Stop",
      "Cowl Cover",
      "Roll Bar Grab Handle",
      "Door Check Strap",
      "Cup Holder",
      "Traction Mats",
      "Inclinometer",
      "Door Mirror Relocation Bracket",
      "Spare Tire Spacer",
      "Storage Rack",
      "Gas/Water Can Mount Bracket",
      "Windshield Tie Down Kit",
      "Door Window Frame",
      "Soft Top Spreader Bar",
      "Seat Storage Case",
      "Gun Storage",
      "Ice Scraper",
      "Interior Storage Box Lock Kit",
      "Sway Bar Disconnect",
      "Dana Ring & Pinion/Gears",
      "Differential Guard",
      "Spare Tire Mount Delete",
      "Seat Support",
      "Traction Bar Kit",
      "Transfer Case Drop Kit",
      "Rear Bar Pin Flag Nut",
      "Control Arm Relocation Kit",
      "Coil Spring Correction Plate",
      "Shackle Relocation Kit",
      "Bumper Relocation Bracket",
      "Sway Bar Clamp Kit",
      "Coil Spring Clamp Kit",
      "Hood Assist",
      "Motor Mount Lift",
      "Lift Kit-Body",
      "Seat Riser Kit",
      "Spring Eye Bolts",
      "Kicker Bar Kit",
      "Lowering Kit-Suspension",
      "Lift Kit-Performance Strut",
      "CV Drive Shaft",
      "LED Lights-Grille Kit",
      "LED Lights-Hitch Mount Kit",
      "Light Mount-Flush Mounts",
      "Crossmember",
      "Shock Boot",
      "Speedometer Calibrator",
      "Van Window Screen",
      "Van Storage Shelf",
      "Van Wheel Well Cabinet",
      "Van Storage Shelf Door",
      "Van Partition/Bulkhead",
      "Van Refrigerant Tank Rack",
      "Fuel Transfer Pump",
      "Fuel Tank Attaching Hardware",
      "Fuel Tank Pump Filter",
      "Fuel Utility Hose",
      "Fuel Meter",
      "RV Level",
      "Trailer Frame Mounting Plate",
      "Deer Alert",
      "Trailer Brake Control Installation Kit",
      "Trailer Wire Dust Cover",
      "Power Outlet",
      "Diodes",
      "Light Mount-Magnet",
      "Fuel Diesel Install Kit",
      "Fuel Cap",
      "Fuel Tank",
      "Tool Box Lock Cylinder",
      "Tool Box Latch",
      "Fuel Pump Gasket Kit",
      "Fuel Tank Strap",
      "Fuel Line Extension",
      "Fuel Tank Brace",
      "Fuel Tank Sending Unit Kit",
      "Fuel Tank Insulator Kit",
      "Fuel Tank Vent Line",
      "Fuel Shutoff Solenoid",
      "Fuel Tank Drain Kit",
      "Replacement Bulbs-Interior",
      "Turn Signal Kit",
      "Head Light Wire Harness",
      "Spray Liner Brush",
      "Spray Liner Additive",
      "Spray Liner Spray Gun Cleaner",
      "Spray Liner Spray Gun",
      "Window Tint Film",
      "Window Tint Film Tool Kit",
      "Bumper Touch Up Paint",
      "Bull Bar Cushion",
      "Parking Aid Sensor",
      "LED Lights-Diffused",
      "Marine Light",
      "Flashlight Holder",
      "Light Mount-Suction Cup",
      "Cigarette Lighter Adapter",
      "Lamp Base Mount",
      "Grille Bracket",
      "Offroad/Racing Lamp Harness",
      "Back Up Light Wiring Harness",
      "Courtesy Light",
      "Light Mount-Dome Light",
      "Light Mount-Rock Light",
      "Light Mount-Head Lights",
      "Light Mount-Fender",
      "Head Light Adapter",
      "GPS Navigation Control Module",
      "Bed Slide/Cargo Slide Accessories",
      "LED Lights-Interior",
      "LED Lights-Wheel Light",
      "Step Light",
      "Alarm Lights",
      "Underbody Light Kit",
      "Winch Lock",
      "Gauge Pod",
      "Spare Tire Carrier Cargo Rack",
      "D-Ring Isolator",
      "Door Step",
      "Fuel Tank Bracket",
      "Fog Light Wire Harness",
      "Third Brake Light Wire Harness",
      "Fire Extinguisher Holder",
      "Roll Bar Cup Holder",
      "Bumper Fog Light Assembly",
      "Fifth Wheel to Gooseneck Conversion",
      "Spray-In Bedliner",
      "Spray-in Bedliner Supplies",
      "Wheels",
      "LED Light-Door Mirror",
      "Truck Conversion Kit",
      "Hood Replacements",
      "Hard Top",
      "Cooler Mount",
      "Van Storage Bin",
      "Van Storage Cabinet",
      "Van Wing Kit",
      "CATEGORYTREE"
    ],
    "status": 200,
    "statusText": "OK",
    "headers": {
      "date": "Fri, 22 Jun 2018 11:45:45 GMT",
      "content-encoding": "gzip",
      "x-powered-by": "Express",
      "etag": "W/\"4dfe-Q+AghkRbj0cwkVLDvkDl/o0iAiA\"",
      "vary": "Accept-Encoding",
      "access-control-allow-methods": "GET, POST, OPTIONS, PUT, DELETE",
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "access-control-allow-headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
    "config": {
      "transformRequest": {},
      "transformResponse": {},
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "headers": {
        "Accept": "application/json, text/plain, */*"
      },
      "method": "get",
      "url": "/getVehicle/info/getcats/"
    },
    "request": {}
  }

    {/* <Rail position='right'>
                {_.times(3, i => <Placeholder key={i} />)}

                <Sticky context={contextRef} pushing>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src={logo} />
                </Sticky>
              </Rail> */}