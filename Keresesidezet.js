import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View,  TouchableOpacity, TextInput, Button, Menu } from 'react-native';
const IP=require("./Ipcim")
export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
        isLoading: true,
        szo:"",
        bevitelv:"",
        dataSource:[]
    }
  }

  
  componentDidMount(){
    return fetch(IP.ipcim+"idezet")
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  keres=()=>{
      //alert("Hello")
      var bemenet={
        bevitelv:this.state.szo
      }
  
    fetch(IP.ipcim+"idezet", {
        method: "POST",
        body: JSON.stringify(bemenet),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }
    
    )
    .then(x => x.json())
    .then(y => {
      (JSON.stringify (y))
      this.setState({dataSource: y})
    }
      
      );
  
  }
  velemeny=(id)=>{
    alert("sikeres")
    var bemenet={
      bevitelvelemeny:this.state.bevitelvelemeny
      
    }
    fetch(IP.ipcim+"idezet", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.json())
  .then(y => {
    (JSON.stringify (y))
    this.setState({dataSource: y})
  }
    
    );
  }
  
  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        {/*---------------------------------------------------kereses */}
        <Text style={{marginLeft:10, marginTop:10, marginRight:10, marginBottom:10, fontSize:20}}>Add meg a keresendő szót:</Text>
        <TextInput
        style={{height: 40,marginLeft:10,marginRight:10}}
        placeholder="Szó megadása"
        onChangeText={(beirtszoveg)=>this.setState({szo:beirtszoveg})}
        value={this.state.szo}
      />
        <TouchableOpacity style={{marginTop:10}}
        
        onPress={()=>this.keres()}
      >
        <Text style={{textAlign:"center",color:"white",fontWeight:"bold",fontSize:15,marginLeft:10,marginRight:10, backgroundColor:"blue"}}  >Keresés</Text>
      </TouchableOpacity>

        {/*---------------------------------------------------talalatok */}
        <FlatList
        
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{borderWidth:2,borderColor:"blue", borderRadius:7, marginLeft:10, marginRight:10, marginTop:10}}>

         
          <Text style={{marginRight:"auto",marginLeft:"auto",color:"blue",fontSize:20,textAlign:"center",marginLeft:10, marginRight:10, marginTop:10}}   >{item.idezet_szoveg} </Text>
     
          
    
          <Text style={{fontStyle:"italic", fontSize:20,textAlign:"left",marginLeft:10, marginRight:10, marginTop:10}}   >{item.idezet_konyv} {item.idezet_fejezet_vers}  </Text>
       
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Időpont: {item.idezet_datum} </Text>
         
          </View> 
        
        }

        
          keyExtractor={({film_id}, index) => film_id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
     marginTop:10
  }
});