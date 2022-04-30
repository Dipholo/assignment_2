import { StyleSheet, Text, View, ImageBackground, Image, Pressable, ScrollView,TouchableOpacity} from 'react-native';
import {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';




export default function Food({food_name,image, amount, totalprice , setTotalprice, food_description}) {
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
        <Text style={styles.food_price}>M{amount}.00</Text>
        <View style={styles.cart}>
        <Pressable style={styles.button} onPress={addItems}>
          <Text style={styles.item_number}>+</Text>
        </Pressable>
        <Text style={styles.item}>{items}</Text>
        <Pressable style={styles.button} onPress={reduceItems}>
          <Text style={styles.item_number}>-</Text>
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
    backgroundColor: '#F57F17',
    width: '100%',
    marginBottom: 4,
    shadowRadius: 7,
    shadowColor: 'grey',
    height: 160,
    padding: 2
  },
  bac:{
    flex: 1,
    justifyContent: "center"

  },
  food_details:{
    width: 200,
    marginTop: 2,
   
  },
  food_name:{
    fontSize: 22,
    fontStyle: 'italic',
    color: '#FAFAFA',
    marginLeft: 10,
    fontWeight: "bold"
  },
  food_description:{
    color: '#ECEFF1',
    fontSize: 18,
    marginLeft: 6,
    fontStyle: 'italic'
  },
  image:{
    height: 155,
    width: 160,
    borderRadius: 5,

  },
  food_price:{
    fontSize: 28,
    marginLeft: 10,
    fontStyle: 'italic',
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
  item_number:{
    fontSize: 15,
    marginLeft:0,
    marginTop: 0,
    color: 'red'
  },
  item:{
    fontSize: 15,
    color: 'white',
    marginLeft: 10,
    marginTop: 0

  },
  cart:{
    alignContent: 'space-between',
    flexDirection: 'row'
   
  }
  
})