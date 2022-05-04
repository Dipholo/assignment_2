import { StyleSheet, Text, View, ImageBackground, Image, Pressable, ScrollView,TouchableOpacity} from 'react-native';
import {useState} from 'react';
import { MaterialCommunityIcons, MaterialIcons, Fontisto} from '@expo/vector-icons';




export default function Food({bac, food_name,image, amount, totalprice , setTotalprice, food_description}) {
  let food_price= amount;
  const[items, setItems]=useState(0);

  function addItems(){
    setItems(items + 1)
    setTotalprice(totalprice + amount );
  }

  function reduceItems(){
    setItems(items - 1)
    setTotalprice(totalprice - amount );
  }
  return (
    <View style={styles.everything}>
       <View style={styles.food_item}>
        <Image style={styles.image} source={image}/>
        <View style={styles.food_details}>
        <Text style={styles.food_name}>{food_name}</Text>
        <Text style={styles.food_description}>{food_description}</Text>
        <View style={styles.heart}>
        <MaterialIcons name="star-rate" size={24} color="red" />
        <MaterialIcons name="star-rate" size={24} color="red" />
        <MaterialIcons name="star-rate" size={24} color="red" />
        <MaterialIcons name="star-rate" size={24} color="red" />
        <MaterialIcons name="star-rate" size={24} color="red" /></View>
        <Text style={styles.food_price}>M{amount}.00</Text>
        <View style={styles.cart}>
        <Pressable style={styles.button} onPress={addItems}>
        <MaterialCommunityIcons name="cart-plus" size={20} color="black" />
        </Pressable>
        <Text style={styles.item}>x {items}</Text>
        <Pressable style={styles.button} onPress={reduceItems}>
        <MaterialCommunityIcons name="cart-minus" size={20} color="black" />
        </Pressable>
        
        </View>
        </View>
       </View>
    </View>
       
  
  
    
  )
}

const styles = StyleSheet.create({
  everything:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  food_item:{
    flexDirection: 'row',
    borderColor: '#E0E0E0',
    borderRadius: 5,

    width: '100%',
    marginBottom: 4,
    shadowRadius: 7,
    shadowColor: 'grey',
    height: 185,
    padding: 2,
  
  },
  food_details:{
    width: 200,
    marginTop: 2,
   
  },
  food_name:{
    fontSize: 22,
    color: '#FAFAFA',
    marginLeft: 10,
    fontWeight: "bold"
  },
  food_description:{
    color: '#ECEFF1',
    fontSize: 18,
    marginLeft: 6,

  },
  image:{
    height: 180,
    width: 160,
    borderRadius: 5,

  },
  food_price:{
    fontSize: 28,
    marginLeft: 10,
    color: '#F5F5F5'
  },
  button:{
    width: 50,
    backgroundColor: 'orange',
    borderRadius: 10,
    alignItems: 'center',
    height: 20,
    padding: 0,
    marginLeft: 10,
    marginTop: 1
  },
  item:{
    fontSize: 15,
    color: 'white',
    marginLeft: 10,
    marginTop: 0,
    

  },
  cart:{
    alignContent: 'space-between',
    flexDirection: 'row'
   
  },
  heart:{
    marginLeft: 10,
    marginTop: 10,
    flexDirection: 'row'
  },
  
})