import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View,  TouchableOpacity, TextInput, Button, Menu } from 'react-native';

const IP=require("./Ipcim")
export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
        isLoading: true,
        
        dataSource:[]
    }
  }

  
  

  componentDidMount(){
    return fetch(IP.ipcim+"statisztika1" )
    
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

  felvitel=()=>{
      
  
    fetch(IP.ipcim+"statisztika1", {
        method: "POST",
        body: "",
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
        <FlatList
        
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View style={{borderWidth:2,borderColor:"blue", borderRadius:7, marginLeft:10, marginRight:10, marginTop:10}}>
           <Text style={{marginLeft:10, marginTop:10, marginRight:10, marginBottom:10, fontSize:20}}>Összes idézet: {item.idezet_statisztika}</Text>
           <Text style={{marginLeft:10, marginTop:10, marginRight:10, marginBottom:10, fontSize:20}}>Összes vélemény: {item.velemeny_statisztika}</Text>

          </View> 
        
        }

        
          keyExtractor={({film_id}, index) => film_id}
        />

       
       
       

        {/*---------------------------------------------------talalatok */}
        
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