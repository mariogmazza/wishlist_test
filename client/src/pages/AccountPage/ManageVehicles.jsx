import React, { Component } from 'react'
import { Card, Header as SUIHeader, Segment, Button, Grid, Divider } from 'semantic-ui-react'
import SwitchSavedBrowsed from './SwitchSavedBrowsed';

export default class ManageVehicles extends Component {
  render() {
    return (
      <div>
           <Card fluid padded="true">
            <SUIHeader attached="top" as="h4" inverted>
              Manage Vehicles
            </SUIHeader>
            <Segment secondary padded>
              <Card.Description>
                <Grid columns="equal" stackable columns={2}>
                  <Grid.Column>
                    <Card fluid color="red" raised>
                      <Card.Content>
                        <Card.Header>
                          <Segment clearing>
                            <SUIHeader floated="left">Car Garage</SUIHeader>

                            <Button floated="right">+ Add Vehicle</Button>
                          </Segment>
                        </Card.Header>
                        <Divider />
                        <Card.Description>

                          <SwitchSavedBrowsed/>

                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                

                  <Grid.Column>
                    <Card fluid color="red" raised>
                      <Card.Content>
                        <Card.Header>
                          <Segment clearing>
                            <SUIHeader floated="left">
                              Recently Viewed Vehicles
                            </SUIHeader>
                          </Segment>
                        </Card.Header>
                        <Divider />
                        <Card.Description>
                          {/* {NavBarGarageContent()} */}
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                </Grid>
              </Card.Description>
            </Segment>
          </Card>
        
      </div>
    )
  }
}
