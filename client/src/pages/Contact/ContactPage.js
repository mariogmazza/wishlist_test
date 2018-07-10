import React, { Component } from 'react';
import { db } from '../../firebase';
import { Link } from "react-router-dom";
import Email from '../../assets/images/svg/message.svg';
import Phone from '../../assets/images/svg/talking.svg';
import ChatIcon from '../../assets/images/svg/chat.svg';
import Address from '../../assets/images/svg/placeholder.svg';
import Clock from '../../assets/images/svg/clock.svg';
import FormEmail from '../../assets/images/svg/email.svg';
import GoogleMap from '../../components/google_map/GoogleMap'




import { Button, Container, Icon, Grid, Image, Header as SUIHeader, Segment, Breadcrumb, Card, Form } from 'semantic-ui-react'
import { Card as CardAntd } from 'antd';
import MapTest from './MapTest';




class ContactPage extends Component {

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
    const { onSetUsers } = this.props;

  }


  render() {
    return (
      <div>
        <Container>
          <Segment clearing >
            <Breadcrumb>
              <Breadcrumb.Section link>Home</Breadcrumb.Section>
              <Breadcrumb.Divider icon='right angle' />
              <Breadcrumb.Section active>Contact Us</Breadcrumb.Section>
            </Breadcrumb>
          </Segment>

          <Segment clearing style={{ marginTop: 20 }} >
            <SUIHeader as='h1' floated='left'>
              <Image src='generic-user.png' style={{ marginRight: 30 }} avatar />
              Contact Us</SUIHeader>
          </Segment>


          <Card fluid >
            <SUIHeader attached='top' as='h4' inverted>Contact Us Via</SUIHeader>
            <Segment secondary clearing padded>
              <Card.Content>
                <Card.Description>
                  <Grid stackable doubling columns={4}>
                    <Grid.Row>
                      <Grid.Column>
                        <CardAntd title="Phone" extra={<Image src={Phone} style={{ maxWidth: 20 }} />} >
                          <p>Sales: <strong>(863) 687-9000 </strong></p>
                          <p>Order Status: <strong>(863) 687-9000 </strong></p>
                          <p>Client Service: <strong>(863) 687-9000 </strong></p>
                        </CardAntd>
                      </Grid.Column>
                      <Grid.Column>
                        <CardAntd title="E-mail" extra={<Image src={Email} style={{ maxWidth: 20 }} />} >
                          <p>Sales: <strong>4x4@highstandars.com </strong></p>
                          <p>Tech Support: <strong>4x4@highstandars.com </strong></p>
                          {/* <p>Client Service: <strong>4x4@highstandars.com</strong></p> */}
                        </CardAntd>      </Grid.Column>
                      <Grid.Column>
                        <CardAntd title="Live Chat" extra={<Image src={ChatIcon} style={{ maxWidth: 20 }} />} >
                          <Link to='chat'>
                            <Button basic color='blue'><Icon name='wechat' />Chat With Our Specialist</Button>
                          </Link>
                        </CardAntd>      </Grid.Column>
                      <Grid.Column>
                        <CardAntd title="Address" extra={<Image src={Address} style={{ maxWidth: 20 }} />}>
                          <p> <strong>Highstandars 4x4</strong></p>
                          <p> <strong>923 West Memorial Blvd</strong></p>
                          <p><strong>Lakeland, FL 33815</strong></p>
                        </CardAntd>     
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Card.Description>
              </Card.Content>
            </Segment>
          </Card>


          <Card fluid >
            <SUIHeader attached='top' as='h4' inverted>Hours</SUIHeader>
            <Segment secondary clearing padded>
              <Card.Content>
                <Card.Description>
                  <Grid doubling columns={2}>
                    <Grid.Row>
                      <Grid.Column>
                        <CardAntd title="Sale Hours" extra={<Image src={Clock} style={{ maxWidth: 40 }} />} >
                          <p> Mon - Fri:  <strong>Open 24 Hours</strong></p>
                          <p> Sat:  <strong>Open 24 Hours</strong></p>
                          <p> Sun:  <strong>Open 24 Hours</strong></p>
                        </CardAntd>
                      </Grid.Column>
                      <Grid.Column>
                        <CardAntd title="Support Hours" extra={<Image src={Clock} style={{ maxWidth: 40 }} />}>
                          <p> Mon - Fri:  <strong>Open 24 Hours</strong></p>
                          <p> Sat:  <strong>Open 24 Hours</strong></p>
                          <p> Sun:  <strong>Open 24 Hours</strong></p>
                          
                        </CardAntd>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Card.Description>
              </Card.Content>
            </Segment>
          </Card>


          <Card fluid >
            <SUIHeader attached='top' as='h4' inverted>Contact Us</SUIHeader>
            <Segment secondary clearing padded>
              <Card.Content>
                <Card.Description>
                  <Grid doubling columns={1}>
                    <Grid.Row>
                      <Grid.Column>
                        <CardAntd title={<h3><strong>Contact Form</strong></h3>} extra={<Image src={FormEmail} style={{ maxWidth: 60 }} />} >
                          <Form>
                            <Form.Group unstackable widths={2}>
                              <Form.Input label='First name' placeholder='First name' />
                              <Form.Input label='Last name' placeholder='Last name' />
                            </Form.Group>
                            <Form.Group widths={2}>
                              <Form.Input label='E-mail' placeholder='E-mail' />
                              <Form.Input label='Phone' placeholder='Phone' />
                            </Form.Group>
                            <Form.TextArea label='Your Message' />
                            <Button type='submit'>Send</Button>
                          </Form>
                        </CardAntd>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Card.Description>
              </Card.Content>
            </Segment>
          </Card>

          <Card fluid padded='true'>
            <SUIHeader attached='top' as='h4' inverted>Addresses</SUIHeader>
            <Segment secondary padded>
              <Card.Content>
                <Grid columns='equal' stackable >
                  <Grid.Column>
                    <Card fluid color='red' raised  >
                      <Card.Content>


                        {/* <MapTest /> */}
                        <GoogleMap />
                        
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid>
              </Card.Content>
            </Segment>
          </Card>

        </Container>

      </div>
    );
  }
}



export default ContactPage