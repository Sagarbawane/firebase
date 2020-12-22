import React from 'react';
import firebase from '../Util/firebase';
import Form from "./Form"

class DataTable extends React.Component {
constructor(props) {
    
    super(props);
   this.state = {users : [],accounts:[],id:"",name:"",title:""}
    }
    
  componentDidMount() {
    firebase.database().ref("users").on("value", snapshot => {
        let users = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
           users.push(snap.val());
        });
        this.setState({ users: users });
      });
}
 data=(formData)=>{
     console.log(formData.name)
    const value= this.state.users.find((ele)=>{
         if(ele.name===formData.name){
             this.setState({name:ele.name})
             this.setState({id:ele.account})
            return ele
         }
     })
  firebase.database().ref("accounts").on("value", snapshot => {
        console.log(snapshot.key)
      let accounts = [];
     snapshot.forEach(snap => {
         if(snap.key===value.account){
          
            accounts.push(snap.val());
         accounts.map((ele)=>{
             for(var value in ele){
                 console.log(ele[value])
                for(var title in ele[value]){
                  for(var titleValue in ele[value][title]){
                        this.setState({title:ele[value][title][titleValue]})
                    }
                }
             }
         })
       }
         });
     this.setState({ accounts: accounts });
    });
    console.log(this.state.accounts)
   
 }

  
  render(){
   console.log(this.state.title)
    return (
    <div className='container '>
    <Form data={this.data}/>
    <h1></h1>
<table border="1px"class="table">
  <thead class="thead-light">
    <tr>
     <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">App</th>
      <th scope="col">title</th>
     </tr>
  </thead>
  <tbody>
       {this.state.accounts.map((ele)=>{
             return(
               <tr>
                <td >{this.state.id}</td>
                <td>{this.state.name}</td>
                <td>{Object.keys(ele.apps)}</td>
                <td>{this.state.title}</td>
                </tr>
             )
            })}
     </tbody>
</table>
     
    </div>
  );
}
}

export default DataTable