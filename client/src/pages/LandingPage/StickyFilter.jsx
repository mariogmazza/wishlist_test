import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
 import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Checkbox as CheckboxANT, Row as RowANT, Col as ColANT} from 'antd';
import PriceFilter from './PriceFilter'




// const PriceFilters = (props)=>{
//   return (
//     <div>
//       <CheckboxANT.Group style={{ width: '100%' }} onChange={props.onChange}>
//         <RowANT style={{marginBottom:6}}>
//           <ColANT span={8}><CheckboxANT value="A">0-50 </CheckboxANT></ColANT>
//         </RowANT>
//         <RowANT>
//           <ColANT span={8}><CheckboxANT value="B">50-100</CheckboxANT></ColANT>
//         </RowANT>
//         <RowANT>
//           <ColANT span={8}><CheckboxANT value="C">100-300</CheckboxANT></ColANT>
//         </RowANT>
//         <RowANT>
//           <ColANT span={8}><CheckboxANT value="D">300-500</CheckboxANT></ColANT>
//         </RowANT>
//         <RowANT>
//           <ColANT span={8}><CheckboxANT value="E">500-700</CheckboxANT></ColANT>
//         </RowANT>
//       </CheckboxANT.Group>
//     </div>
//   )
// }





const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
          <Typography className={classes.heading}>Price</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
       
        <PriceFilter {...props} />
        
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
          <Typography className={classes.heading}>Brand</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <CheckboxANT.Group style={{ width: '100%' }} onChange={props.onChangeBrand}>
          {props.uniqueBrandArray.map((brand)=>{
            return (
          <RowANT style={{marginBottom:6}}>
          <ColANT span={8}><CheckboxANT value={brand}>{brand}</CheckboxANT></ColANT>
        </RowANT>
            )

          })}
        
        
      </CheckboxANT.Group>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel> 
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
// expandIcon={<ExpandMoreIcon />}
// expandIcon={<ExpandMoreIcon />}