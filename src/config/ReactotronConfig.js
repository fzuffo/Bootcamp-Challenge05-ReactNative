import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure() // passar { host: 'ip'} para usb
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
