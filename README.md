# Hava Durumu

Hava Durumu, React Native ve TypeScript kullanılarak oluşturulmuş basit bir hava durumu uygulamasıdır. Uygulama, OpenWeatherMap API'sini kullanarak güncel hava durumu bilgilerini sunar.

## Özellikler

- Şehir adına göre hava durumu bilgilerini getirme
- Sıcaklık, nem ve hava durumu açıklamaları
- Modern ve şık bir kullanıcı arayüzü

## Gereksinimler

- Node.js (>= 14.x)
- React Native CLI
- Android Studio veya Xcode (iOS için)

## Kurulum

1. Projeyi klonlayın:

   ```bash
   git clone https://github.com/kullaniciadi/weather-app.git
   cd weather-app
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. Android veya iOS için platform bağımlılıklarını kurun:

   Android:
   ```bash
   npx react-native run-android
   ```

   iOS (macOS gerektirir):
   ```bash
   npx react-native run-ios
   ```

## API Anahtarı Ekleme

Hava durumu verilerini almak için OpenWeatherMap API anahtarına ihtiyacınız olacak.

1. [OpenWeatherMap](https://openweathermap.org/) sitesinden API anahtarınızı alın.
2. `App.tsx` dosyasındaki `API_KEY` değişkenine kendi API anahtarınızı ekleyin:

   ```typescript
   const API_KEY = 'API_ANAHTARINIZ';
   ```

## Kullanım

1. Uygulama başlatıldıktan sonra, giriş alanına bir şehir adı yazın.
2. "Get Weather" butonuna basarak hava durumu bilgilerini görüntüleyin.

## Proje Yapısı

- **App.tsx**: Ana uygulama bileşeni. Şehir bilgisini alır ve API isteği yapar.
- **components/Weather.tsx**: Hava durumu verilerini gösteren bileşen.
- **styles**: Uygulamanın stil dosyaları.

## Kullanılan Teknolojiler

- **React Native**: Mobil uygulama geliştirme için kullanılan framework.
- **TypeScript**: Statik tür denetimi ve daha güvenli kod yazma olanağı sağlar.
- **Axios**: HTTP istekleri yapmak için kullanılır.
- **OpenWeatherMap API**: Hava durumu verilerini sağlayan API.

## Geliştirme

1. Uygulamayı geliştirmek için `npm start` komutuyla geliştirme modunu başlatabilirsiniz.
2. Kod değişikliklerini cihazda görmek için uygulamayı canlı olarak yeniden yükleyebilirsiniz.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Detaylar için [LICENSE](./LICENSE) dosyasına bakabilirsiniz.
