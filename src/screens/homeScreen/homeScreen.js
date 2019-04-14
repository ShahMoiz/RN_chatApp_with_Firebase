import { Navigation } from "react-native-navigation";

const goHome = () => {
    Navigation.setRoot({
        root: {
            id: 'authScreen',
            component: {
                name: 'home'
            }
        
            }
        })
}

export default goHome