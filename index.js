import { Navigation } from 'react-native-navigation';

import App from './App';
import InitializeComponent from './src/components/initialize/initialize';
import SignInComponent from './src/components/signIn/signIn';
import SignUpComponent from './src/components/signUp/signUp';
import ContactList from './src/components/contactList/contactList';
import ProfileComponent from './src/components/profile/profile';

Navigation.registerComponent('home', () => App);
Navigation.registerComponent('initialize',() => InitializeComponent);
Navigation.registerComponent('signIn', () => SignInComponent);
Navigation.registerComponent('signUp', () => SignUpComponent);
Navigation.registerComponent('contactList', () => ContactList);
Navigation.registerComponent('profileComponent', () => ProfileComponent);


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            id: 'initialize',
            component: {
                name: 'initialize'
            }
        }
    })
})

