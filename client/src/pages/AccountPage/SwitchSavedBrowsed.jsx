// switchSavedBrowsed=()=> {
//     const radioStyle = {
//       display: "block",
//       height: "30px",
//       lineHeight: "30px"
//     };
//     return (
//       <RadioGroup
//         onChange={this.onBillingChange}
//         value={this.state.addressBillingValue}
//       >
//         <div>
//           {billingAddressArray.map((address, index) => (
//             <div key={index}>
//               <Grid columns={2} container stackable>
//                 {/* <Radio style={radioStyle} value={index + 1}> */}

//                 <Grid.Column>
//                   <Grid columns={2}>
//                     <Grid.Column>
//                       <Radio  value={index + 1}>
//                         <p>
//                           {this.state.addressBillingValue !== index + 1
//                             ? null
//                             : "Default"}{" "}
//                           {address.name}
//                           <br />
//                           {address.street}
//                           <br />
//                           {address.state}
//                         </p>
//                       </Radio>
//                     </Grid.Column>

//                     <Grid.Column>
//                       <Grid columns={2}>
//                         <Grid.Column>{"      "}</Grid.Column>
//                         <Grid.Column>
//                           <a style={{}} className="redex">
//                             <span className="ex"> ✘</span>
//                           </a>
//                         </Grid.Column>
//                       </Grid>
//                     </Grid.Column>
//                   </Grid>
//                 </Grid.Column>

//                 <Grid.Column>
//                   <Button
//                     // floated="right"
//                     fluid
//                     onClick={() => {
//                       this.changeBillingAddress(address);
//                     }}
//                   >
//                     Browse
//                   </Button>
//                 </Grid.Column>
//               </Grid>
//             </div>
//           ))}
//         </div>
//       </RadioGroup>
//     );
//   }