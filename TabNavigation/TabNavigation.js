import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookOpen, faHouse,faUserTie, faBookmark, faMessage } from '@fortawesome/free-solid-svg-icons';
import HomeScreen from '../NavigationScreen/HomeScreen';
import FeedScreen from '../NavigationScreen/FeedScreen';
import CourseScreen from '../NavigationScreen/CourseScreen';
import ProfileScreen from '../NavigationScreen/ProfileScreen';
import MyCourseScreen from '../NavigationScreen/MyCourseScreen';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                activeTintColor: "#007bff",
                inactiveTintColor: 'gray',
                unmountOnBlur:true,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = faHouse;
                            break;
                        case 'Profile':
                            iconName = faUserTie;
                            break;
                        case 'Feed':
                            iconName = faBookmark;
                            break;
                        case 'MyCourse':
                            iconName = faMessage;
                            break;
                        case 'Course':
                            iconName = faBookOpen;
                            break;
                        default:
                            iconName = faHouse;
                    }
                    return <FontAwesomeIcon icon={iconName} size={size} color={color}/>;
                }
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Course" component={CourseScreen}/>
            <Tab.Screen name="Feed" component={FeedScreen}/>
            <Tab.Screen name="MyCourse" component={MyCourseScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    );
}

export default TabNavigation;
