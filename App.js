import { StyleSheet, Text, View, ImageBackground,Image, Button, ScrollView} from 'react-native';
import {useState} from 'react';
import { Ionicons,AntDesign,MaterialIcons,Entypo } from '@expo/vector-icons';
import  Food from './Food';

export default function App() {
  const [totalprice,setTotalprice, setItems, addItems] = useState(0);

  return (
    
    
    <View style={styles.container}>
    
      <View style={styles.header}>
      <Image style={styles.logo1} source={require("./assets/logo1.jpg")}/>
       <Text style={styles.header_text}>Wings Cafe</Text>
       <Image style={styles.logo} source={require('./assets/logo.webp')}/>
      </View>
      <ScrollView>
      <Food image={require('./assets/fish.jpg')} food_name={"Fish and Chips"}food_description={"2 fish and family chips with 2 russians"} amount={30} totalprice={totalprice} setTotalprice={setTotalprice}/> 
      <Food image={require('./assets/bread.webp')} food_name={"Sandwich"} food_description={"Bread toast served with eggs and a cup of tea"} amount={20} totalprice={totalprice} setTotalprice={setTotalprice}/>
      <Food image={require('./assets/chicken.jpg')} food_name={"Pap and Chicken"} food_description={"Pap served with chicken stew and rolls"} amount={25} totalprice={totalprice} setTotalprice={setTotalprice}/>
      <Food image={require('./assets/pork.jpg')} food_name={"Pap and Pork"} food_description={"Pap served with pork tortes and chakalaka"} amount={25} totalprice={totalprice} setTotalprice={setTotalprice}/>
      <Food image={require('./assets/wors.jpg')} food_name={"Pap and Wors"} food_description={"Pap served with grilled wors and chakalaka"} amount={30} totalprice={totalprice} setTotalprice={setTotalprice}/>
      <Food image={require('./assets/steak.webp')} food_name={"Pap and Steak"} food_description={"Pap served with steak and peri peri"} amount={40} totalprice={totalprice} setTotalprice={setTotalprice}/>
      </ScrollView>
      <View style={styles.header2}>
      <Text style={styles.total}>TOTAL COST: M{totalprice}.00</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.icon1}>
        <MaterialIcons name="free-breakfast" size={30} color="grey" />
        </View>
        <View style={styles.icon2}>
        <MaterialIcons name="lunch-dining" size={30} color="#F57F17" />
        </View>
        <View style={styles.icon5}>
        <Entypo name="drink" size={25} color="grey" />
        </View>
        <View style={styles.icon3}>
        <MaterialIcons name="dinner-dining" size={30} color="grey" />
        </View>
        <View style={styles.icon4}>
        <Ionicons name="settings" size={30} color="grey" />
        </View>
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  
header:{
  flexDirection: 'row',
  backgroundColor: '#333',
  textAlign: 'auto',
  width: '100%',
  height: 60,
  marginTop: 20,
  marginBottom: 2,
  alignContent: 'space-between'


},
header_text:{
  color: '#fff',
  fontSize: 30,
  marginLeft: 15,
  marginTop: 5,
  fontWeight: "600",
  marginLeft: 25,
  fontStyle: 'italic',
  fontWeight: 'bold'

},
header2:{
  backgroundColor: '#F57F17',
  width: '100%',
  height: 30,
  marginBottom: 2,
  borderWidth: 2,
  borderColor: 'white'

},
total:{
 fontSize: 20,
 marginLeft: 100,
 color: 'white',
 fontWeight: "bold",
 fontStyle: 'italic'
},
footer:{
  alignContent: 'space-between',
  flexDirection: 'row',
  backgroundColor: '#F5F5F5',
  width: '100%',
  height: 40,

},

logo1:{
  marginTop: 5,
  height: 40,
  width: 50,
  marginLeft: 25
},
logo:{
  height: 50,
  width: 50,
  marginLeft: 15
  
},
icon1:{
  marginLeft: 15,
  marginTop: 5
},
icon2:{
  marginLeft: 45,
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
  marginTop: 9
}
});
