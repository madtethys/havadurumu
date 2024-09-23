// App.tsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Weather from './components/Weather';

const API_KEY = 'API_ANAHTARINIZ'; // OpenWeatherMap API anahtarınızı buraya koyun

const App = () => {
  const [city, setCity] = useState<string>('');  // Şehir adını tutan state
  const [weatherData, setWeatherData] = useState<any>(null);  // Hava durumu verisini tutan state
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeather = async () => {
    if (city.trim() === '') return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('API Fetch error: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity style={styles.button} onPress={fetchWeather}>
        <Text style={styles.buttonText}>Get Weather</Text>
      </TouchableOpacity>
      {loading && <Text style={styles.loadingText}>Loading...</Text>}
      {weatherData && !loading && <Weather weatherData={weatherData} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#6200ea',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#6200ea',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default App;
