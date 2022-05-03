import { StyleSheet, Text, View, ImageBackground,Image,TouchableOpacity, Button,TextInput, ScrollView} from 'react-native';
import {useState} from 'react';
import { Ionicons,AntDesign,MaterialIcons,Entypo,Feather,FontAwesome } from '@expo/vector-icons';
import  Food from './Food';


export default function App() {
  const [totalprice,setTotalprice, setItems, addItems] = useState(0);

  return (
    
    
    <View style={styles.container}>
      <ImageBackground style={styles.bac} source={require('./assets/bac1.jpg')}>
      <View style={styles.header}>
      <Image style={styles.logo} source={require("./assets/wings_logo.jpg")}/>
      <View style={styles.search}>
      <Text style={{fontSize: 15, color: "white", marginLeft: 0, marginTop: 5}}>Search</Text>
      </View>
      <View style={styles.icon2}>
      <TouchableOpacity>
      <FontAwesome name="user-circle-o" size={24} color="white" /></TouchableOpacity></View>
      <View style={styles.icon1}>
        <TouchableOpacity>
      <Ionicons name="ios-menu" size={40} color="white" /></TouchableOpacity></View>
      </View>
      <View style={styles.header3}>
      <Text style={{color:"white",  fontSize: 20, marginLeft: 5, fontWeight: 'bold'}}>Breakfast</Text>
      <View style={{flexDirection: 'column', height: 50, width: 100, marginLeft: 20}}>
      <Text style={{color:"white",  fontSize: 20, marginLeft: 10, fontWeight: 'bold'}}>Lunch</Text>
      <View style={{height: 3, width:60, backgroundColor: "white", marginLeft: 10}}></View></View> 
      <Text style={{color:"white", fontSize: 20, marginLeft: 1,  fontWeight: 'bold'}}>Drinks</Text>
      <Text style={{color:"white", fontSize: 20, marginLeft: 20,  fontWeight: 'bold'}}>Snacks</Text>
      </View>
      <ScrollView>
      <Food image={require('./assets/fish.jpg')} food_name={"Fish and Chips"}food_description={"2 fish and family chips with 2 russians"} amount={30} totalprice={totalprice} setTotalprice={setTotalprice}/> 
      <Food image={require('./assets/mince.jpg')} food_name={"Rice and mince"} food_description={"Rice served with mince. Plus a cold-drink"} amount={20} totalprice={totalprice} setTotalprice={setTotalprice}/>
      <Food image={require('./assets/chicken.jpg')} food_name={"Pap and Chicken"} food_description={"Pap served with chicken stew and rolls"} amount={25} totalprice={totalprice} setTotalprice={setTotalprice}/>
      <Food image={require('./assets/pork.jpg')} food_name={"Pap and Pork"} food_description={"Pap served with pork tortes and chakalaka"} amount={25} totalprice={totalprice} setTotalprice={setTotalprice}/>
      <Food image={require('./assets/wors.webp')} food_name={"Pap and Wors"} food_description={"Pap served with grilled wors and chakalaka"} amount={30} totalprice={totalprice} setTotalprice={setTotalprice}/>
      <Food image={require('./assets/steak.webp')} food_name={"Pap and Steak"} food_description={"Pap served with steak and peri peri"} amount={40} totalprice={totalprice} setTotalprice={setTotalprice}/>
      </ScrollView>
      <View style={styles.header2}>
      <Text style={styles.total}>Total Cost: M{totalprice}.00</Text>
      </View>
      
      </ImageBackground>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  
header:{
  flexDirection: 'row',
  backgroundColor: '#E53935',
  textAlign: 'auto',
  width: '100%',
  height: '10%',
  marginTop: 0,
  alignContent: 'center',
  alignItems: 'center',
  

},
logo:{
  height: 50,
  width: 50,
  marginLeft: 15,
  marginTop: 10
},
header_text:{
  color: '#fff',
  fontSize: 25,
  marginLeft: 15,
  marginTop: 5,
  fontWeight: "600",
  marginLeft: 25,
  fontWeight: 'bold'

},
header2:{
  backgroundColor: '#333',
  width: '100%',
  height: 30,
  marginBottom: 2,


},
total:{
 fontSize: 20,
 marginLeft: 100,
 color: 'white',
 fontWeight: "bold",
 fontStyle: 'italic'
},
header3:{
  alignContent: 'space-between',
  flexDirection: 'row',
  backgroundColor: '#E53935',
  width: '100%',
  height: 30,
  marginBottom: 5

},
search:{
  width: 200,
  height: 30,
  backgroundColor: '#777',
  borderRadius: 20,
  alignItems: 'center',
  padding: 0,
  marginLeft: 10,
  marginTop: 6
},
icon1:{
  marginLeft: 10,
  marginTop: 5
},
icon2:{
  marginLeft: 10,
  marginTop: 5
},
icon3:{
  marginLeft: 50,
  marginTop: 5
},
icon4:{
  marginLeft: 45,
  marginTop: 5
},
icon5:{
  marginLeft: 50,
  marginTop: 777
},
bac:{
  flex: 1,
  marginTop: 20,
  height: '100%',
  width: '100%',

}
});
