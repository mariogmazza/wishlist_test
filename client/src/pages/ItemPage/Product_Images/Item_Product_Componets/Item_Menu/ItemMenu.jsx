import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Rating from "react-rating";
// import { Rating } from 'semantic-ui-react'
import "./ItemMenu.css";
import Quantity from "../Quantity_button/Quantity_BTN";

const styles = {
  root: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    background: "linear-gradient(45deg, #5faf4b 30%, #5faf4b 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 45,
    width: "50%",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  label: {
    textTransform: "capitalize"
  }
};

class ItemMenu extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="headline" gutterBottom>
          Best Brake Rotors
          <p>$9000</p>
        </Typography>

        <Rating
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          fractions={2}
        />

         {/* <Rating icon='star' defaultRating={3} maxRating={5}   size='large' disabled/> */}



        <Typography variant="headline" gutterBottom>
          <br />
          <p>Qty</p>
        </Typography>

        <Quantity />
        <br />
        <br />
        <Button
          classes={{
            root: classes.root, // class name, e.g. `classes-nesting-root-x`
            label: classes.label // class name, e.g. `classes-nesting-label-x`
          }}
        >
          add to cart
        </Button>

         <Button variant="contained" color="secondary" className={classes.button}>
        Wish List
      </Button>


      </div>
    );
  }
}

export default withStyles(styles)(ItemMenu);
