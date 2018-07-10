import React, { Component } from "react";
import "./ItemProductContainer.css";
import ImagesGallery from "../Item_Product_Componets/ImagesGallery";
import ItemMenu from "../Item_Product_Componets/Item_Menu/ItemMenu";

export default class ItemProductContainer extends Component {
  render() {
    return (
      <div class="container">
        <div class="imgGal">
          <ImagesGallery />
        </div>
        <div class="imgMenu">
          <ItemMenu />
        </div>
      </div>
    );
  }
}
