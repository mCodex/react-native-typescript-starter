import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import Route from './src/routes/index.route';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Route);
