import React, { Component } from 'react';

import PropTypes from 'prop-types'

import {Button,Container,Header,Icon,
} from 'semantic-ui-react/dist/commonjs'
// ,
import {  Carousel} from 'antd';



function onCarouselChange(a, b, c) {
  // console.log(a, b, c);
}

export default class HomePageCarousel extends Component {
  render() {
    var mobile = this.props.mobile
    return (
      <div>
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

        
      </div>
    )
  }
}


HomePageCarousel.propTypes = {
  mobile: PropTypes.bool,
}