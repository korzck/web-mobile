import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavigationBar = () => {
  const handleNavigation = (routeName: string) => {
    // Обработка нажатия на кнопку навигации
    console.log('Navigating to:', routeName);
    // navigation.navigate('ObjectDetailsScreen', { object });

    // В этой функции вы можете добавить логику для навигации по разным экранам вашего приложения
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={[styles.navItem,  { backgroundColor: '#198754' }]}
        onPress={() => handleNavigation('Главная')}
      >
        <Text style={styles.navText}>ЧПУ-программы</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.navItem, { backgroundColor: '#198754' }]}
        onPress={() => handleNavigation('Выйти')}
      >
        <Text style={styles.navText}></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#198754',
    width: '100%',
    paddingVertical: 20,
  },
  navItem: {
    flex: 1,
    // color: "#198754",
    alignItems: 'center',
  },
  navText: {
    color: 'white', 
    fontSize: 16,
    marginTop: 50,
  },
});

export default NavigationBar;