// import React, { Component } from 'react';
// import API from "../utils/API";

// class ChatRoom extends Component {
//   constructor(){
//     super();
//     this.state = {
//       messages:[
//         {id:0, text:'text 1'},
//         {id:1, text:'text 2'},
//         {id:2, text:'text 3'},
//       ],
//       response: false,
//       texted: '',
//       conversation:[],
//       confirmedMessage:'',
//       message:''
//     }

//     // API.foundData((err, data)=>this.foundData2(data));
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.updateMessageState = this.updateMessageState.bind(this);
//     this.myTime = this.myTime.bind(this);
//   }

//   foundData2(data){
//     console.log(data);
//     this.setState({ 
//       theData:data
//     })
//   }



//   componentDidMount() {
  
//     API.getFirstMessage(this.myTime,(err, data) => {
//       this.state.conversation.push(data)
//     this.setState(
//       this.state
//     )
   
//     console.log(this.state.conversation)
    
//     });

//   }

// updateMessageState(data){
// console.log(data)
// }


// handleChange(event) {
//   this.setState({texted: event.target.value});

// }

// myTime(){
//   function addZero(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }

// var d = new Date();
// var x = document.getElementById("demo");
// var h = addZero(d.getHours());
// var m = addZero(d.getMinutes());


// var theTime = h + ":" + m ;
// return theTime

// }

//   handleSubmit(event) {

//     var sentData = {message:this.state.texted, handle:'jose' , time: this.myTime() }

//     event.preventDefault();
//     API.secondMessage(sentData,
      
//       (err, message) => {
//       this.state.conversation.push(message)
//     this.setState(
//       this.state
//     )

//     }
  
  
//   );

    
  
//   }

//   render() {
   
//     const { conversation } = this.state;
// console.log("convo in render",conversation)
//     var theconvo = this.state.conversation.map((sentMessage)=>{
//       return (
//         <div>
//         <div>{sentMessage.handle}</div>
//       <div>{sentMessage.message}</div>
//       <div>{sentMessage.time}</div>
//       </div>
//     )

//     })
//     return (
//   <div>
//     <div>{theconvo}</div>
//     <div>{this.state.message.message}</div>
    
//     <form onSubmit={this.handleSubmit}>
//         <label>
//           message:
//           <input type="text" value={this.state.texted} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>

//   </div>
//     );
//   }
// }

// export default ChatRoom;

