import React from "react";
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
} from 'semantic-ui-react'

export const Footer = props =>
<Segment
inverted
style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
vertical
>
<Container textAlign='center'>
  <Grid columns={4} divided stackable inverted>
    <Grid.Row>
      <Grid.Column>
        <Header inverted as='h4' content='Group 1' />
        <List link inverted>
          <List.Item as='a'>Link One</List.Item>
          <List.Item as='a'>Link Two</List.Item>
          <List.Item as='a'>Link Three</List.Item>
          <List.Item as='a'>Link Four</List.Item>
        </List>
      </Grid.Column>
      <Grid.Column>
        <Header inverted as='h4' content='Group 2' />
        <List link inverted>
          <List.Item as='a'>Link One</List.Item>
          <List.Item as='a'>Link Two</List.Item>
          <List.Item as='a'>Link Three</List.Item>
          <List.Item as='a'>Link Four</List.Item>
        </List>
      </Grid.Column>
      <Grid.Column>
        <Header inverted as='h4' content='Group 3' />
        <List link inverted>
          <List.Item as='a'>Link One</List.Item>
          <List.Item as='a'>Link Two</List.Item>
          <List.Item as='a'>Link Three</List.Item>
          <List.Item as='a'>Link Four</List.Item>
        </List>
      </Grid.Column>
      <Grid.Column>
        <Header inverted as='h4' content='Footer Header' />
        <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  <Divider inverted section />
  <Image src='/logo.png' centered size='mini' />
  <List horizontal inverted divided link>
    <List.Item as='a' href='#'>Site Map</List.Item>
    <List.Item as='a' href='#'>Contact Us</List.Item>
    <List.Item as='a' href='#'>Terms and Conditions</List.Item>
    <List.Item as='a' href='#'>Privacy Policy</List.Item>
  </List>
</Container>
</Segment>
