import { Navigation } from "react-native-navigation";

const goContactList = () => {
    Navigation.setRoot({
        root: {
            id: 'authScreen',
            component: {
                name: 'contactList'
            }
        
            }
        })
}

export default goContactList