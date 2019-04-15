import { Navigation } from "react-native-navigation";

const goProfile = () => {
    Navigation.setRoot({
        root: {
            id: 'profileComponent',
            component: {
                name: 'profileComponent'
            }
        
            }
        })
}

export default goProfile