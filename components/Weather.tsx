// components/Weather.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WeatherProps {
  weatherData: any;
}

const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  const { name, main, weather } = weatherData;
  const { temp, humidity } = main;
  const weatherDescription = weather[0].description;

  return (
    <View style={styles.card}>
      <Text style={styles.city}>Şehir: {name}</Text>
      <Text style={styles.info}>Sıcaklık: {temp}°C</Text>
      <Text style={styles.info}>Nem: {humidity}%</Text>
      <Text style={styles.info}>Durum: {weatherDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  city: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  info: {
    fontSize: 18,
    color: '#555',
    marginVertical: 5,
  },
});

export default Weather;
