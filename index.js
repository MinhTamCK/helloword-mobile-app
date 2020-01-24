import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('autonomous_control_desk', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('autonomous_control_desk', { rootTag });
}
