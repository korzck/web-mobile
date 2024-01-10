import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export interface ObjectInt {
  id: number;
  imgurl: string;
  info: string;
  price: string;
  subtitle: string;
  title: string;
  type: string;
  url: string
}
interface ObjectCardProps {
  object: ObjectInt;
  onDetailsPress: () => void; 
}

const ObjectCard: React.FC<ObjectCardProps> = ({ object, onDetailsPress }) => {
  const mapMaterial = (material: string) => {
    if (material == "wood") {
        return "дерево"
    }
    if (material == "metal") {
        return "металл"
    }
    if (material == "wire") {
      return "проволка"
    }
    if (material == "alloy") {
      return "сплав"
    }
    if (material == "clean") {
      return "чистый металл"
    }
  }


  return (
    <View style={styles.card}>
      <Image source={{ uri: object.imgurl}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{object.title}</Text>
        <Text style={styles.info}>{object.subtitle}</Text>
        <Text style={styles.info}>Цена: {object.price}</Text>
        <Text style={styles.material}>{mapMaterial(object.type)}</Text>

 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  material: {
    // fontSize: 14,
    fontWeight: 'bold',
    // color: "#198754"
    backgroundColor: "#198754",
    color: "white",
    borderRadius: 5,
    padding: 5,
    width: "auto"
  },
  info: {
    fontSize: 16,
    color: 'gray',
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  detailsButton: {
    backgroundColor: '#17ff17',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ObjectCard;