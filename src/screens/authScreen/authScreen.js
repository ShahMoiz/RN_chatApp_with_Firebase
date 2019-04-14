import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/AntDesign';

const goAuth = () => {
    // Promise.all([
    //     Icon.getImageSource('adduser', 15),
    //     Icon.getImageSource('login', 15)
    // ]).then(source => {
        Navigation.setRoot({
            root: {
                id: 'authSccreen',
                bottomTabs: {
                    children: [{
                        component: {
                            name: 'signIn',
                            options: {
                                bottomTab: {
                                    text: 'signIn',
                                    icon: require('../../assets/logIn.png')
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: 'signUp',
                            options: {
                                bottomTab: {
                                    text: 'signUp',
                                    icon: require('../../assets/addUser.png')
                                }
                            }
                        }
                    }],
                }
            }
        })
    // })
}

export default goAuth