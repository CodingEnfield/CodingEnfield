import React from "react";
import { Text, View } from "react-native";
import LoginScreen from "./AuthenticationScreen/LoginScreen"
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from "./TabNavigation/TabNavigation";

const App = () => {
    return(
        <View style={{flex:1}}>
           <NavigationContainer>
                <TabNavigation/>
            </NavigationContainer> 
        </View>
    )
}

export default App;