import React from 'react'
import { Tab } from 'semantic-ui-react'
import Products_Comments from './Products_Comments';

const panes = [
    {
      menuItem: "Description",
      render: () => (
        <Tab.Pane attached={false}>
          Tab 1 Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make Content{" "}
        </Tab.Pane>
      )
    },
    {
      menuItem: "Product Specs",
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
    },
    {
      menuItem: "Review",
      render: () => (
        <Tab.Pane attached={false}>
          
          <Products_Comments />

        </Tab.Pane>
      )
    }
  ];




const Products_Description = () => {
  return (
    <div>
      <Tab menu={{ text: true }} panes={panes} />
      
    </div>
  )
}

export default Products_Description




