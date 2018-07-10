import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';

import * as helper from '../../utils/helper'  
import Typography from '@material-ui/core/Typography';
const { Meta } = Card;
const BlackAndRedButton=()=>{
  return (
    <div>
    {/* <label className="control-label" htmlFor="Quantity">Qty:</label>
    <div className="quantity-box">
      <input type="text" name="quantity" value="1" size="2" id="Quantity" className="form-control" />
      <input type="button" id="minus" value="-" className="form-control" />
      <input type="button" id="plus" value="+" className="form-control" />
    </div> */}
    <button className="button button-cart btn" type="button" id="button-cart" data-loading-text="Loading..."> <Icon name='shop' size='big' />
      Add to Cart
  </button>
  </div>
  )
}


class ThreeCardsContainer extends Component {
fixDescription(item){
  var fixedDescription = item.description
  if (fixedDescription.indexOf('</p>') == -1){
return fixedDescription
  } else {
    fixedDescription =  fixedDescription.slice(0,fixedDescription.indexOf('</p>'))
    fixedDescription = fixedDescription.replace('<p>', ' ')
    return fixedDescription;
  }
 
}

  render() {
    var item = this.props.item;
    var theImage =item.image.split(";")
 
    return (
      <div style={{marginBottom:16}}>
        <Card
        hoverable
style={{ width: 250 }}
cover={<img alt="example" src={theImage[0]}  />}
actions={[<BlackAndRedButton />]}
>
<Meta
  title={item.DISPLAY_NAME}
  // description={this.fixDescription(item)} 
  description={<Typography variant="headline" gutterBottom>
  {item.price == 0 ? 'Product Coming Soon' : helper.formatCurrency(parseFloat(item.price) )}
  </Typography>}
/>
</Card>
        
      </div>
    )
  }
}

export default ThreeCardsContainer

///////////////////////////////////////////////////////////////////////

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Icon from '@material-ui/core/Icon';
// import * as helper from '../../utils/helper'

// const styles = theme => ({
//   card: {
//     maxWidth: 270,
//     minWidth: 270,
//     marginBottom:12
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   actions: {
//     display: 'flex',
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//     marginLeft: 'auto',
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// });

// class ThreeCardsContainer extends React.Component {
//   state = { expanded: false };

//   handleExpandClick = () => {
//     this.setState(state => ({ expanded: !state.expanded }));
//   };

//   fixDescription(item){
//     var fixedDescription = item.description
//     if (fixedDescription.indexOf('</p>') == -1){
//   return fixedDescription
//     } else {
//       fixedDescription =  fixedDescription.slice(0,fixedDescription.indexOf('</p>'))
//       fixedDescription = fixedDescription.replace('<p>', ' ')
//       return fixedDescription;
//     }
   
//   }

//   render() {
//     var item = this.props.item;
//     var theImage =item.image.split(";")
//     const { classes } = this.props;

//     return (
//       <div>
//         <Card className={classes.card}>
//           {/* <CardHeader
//             action={
//               <IconButton>
//                 <MoreVertIcon />
//               </IconButton>
//             }
//             title={item.DISPLAY_NAME}
//             subheader={`Item # ${item.stockID}`}
//           /> */}
//           <CardMedia
//             className={classes.media}
//             image={theImage[0]}
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography component="p">
//             {<Typography variant="Subheading" gutterBottom>
//   {item.price == 0 ? 'Product Coming Soon' : helper.formatCurrency(parseFloat(item.price) )}
//   </Typography>}
//             </Typography>
//           </CardContent>
//           <CardActions className={classes.actions} disableActionSpacing>
//             <IconButton aria-label="Add to favorites">
//               <FavoriteIcon />
//             </IconButton>
//             <IconButton aria-label="Share">
//               <ShareIcon />
//             </IconButton>
//             {/* <button className="button button-cart btn" type="button" id="button-cart" data-loading-text="Loading..."> <Icon  color="disabled" style={{ fontSize: 36 }}>
//         shopping_cart
//       </Icon>
//               Add to Cart
//           </button> */}
//             <IconButton
//               className={classnames(classes.expand, {
//                 [classes.expandOpen]: this.state.expanded,
//               })}
//               onClick={this.handleExpandClick}
//               aria-expanded={this.state.expanded}
//               aria-label="Show more"
//             >
//               <ExpandMoreIcon />
//             </IconButton>
//           </CardActions>
//           <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
//             <CardContent>
//               <Typography paragraph variant="body2">
//               {this.fixDescription(item)} 
//               </Typography>
//               {/* <Typography paragraph>
//                 Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//                 minutes.
//               </Typography> */}
           
             
//             </CardContent>
//           </Collapse>
//         </Card>
//       </div>
//     );
//   }
// }

// ThreeCardsContainer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ThreeCardsContainer);
