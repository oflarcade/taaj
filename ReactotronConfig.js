import Reactotron from 'reactotron-react-native'

Reactotron
  .configure({host: '10.0.13.142' }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!