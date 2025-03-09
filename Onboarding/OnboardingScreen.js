import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import Welcome from '../Static/welcome.png';
import Anywhere from '../Static/anywhere.png';
import Success from '../Static/success.png';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
    const onGetStartedPress = () => {
        // Handle the 'Get Started' button press
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Swiper
                    activeDotStyle={styles.activeDot}
                    style={styles.wrapper}
                    showsButtons={false}
                    loop={false}
                >
                    {/* Slide 1 */}
                    <View style={styles.slide}>
                        <Image source={Welcome} style={styles.image} />
                        <Text style={styles.heading}>WELCOME TO LEARNEASY</Text>
                        <Text style={styles.text}>
                            Explore videos, quizes and excercises designed to make learning engage.
                        </Text>
                    </View>

                    {/* Slide 2 */}
                    <View style={styles.slide}>
                        <Image source={Anywhere} style={styles.image} />
                        <Text style={styles.heading}>LEARN ANYTIME, ANYWHERE</Text>
                        <Text style={styles.text}>
                            Customize your course and set goals to match your interests and needs.
                        </Text>
                    </View>

                    {/* Slide 3 */}
                    <View style={styles.slide}>
                        <Image source={Success} style={styles.image} />
                        <Text style={styles.heading}>YOUR PATH TO SUCCESS</Text>
                        <Text style={styles.text}>
                           Monitor your achievements and track your growth with detailed reports.
                        </Text>
                    </View>
                </Swiper>

                {/* Get Started Button */}
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={onGetStartedPress}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: width * 0.8, // 80% of screen width
        height: height * 0.4, // 40% of screen height
        resizeMode: 'contain',
        marginBottom: height * 0.03, // 3% of screen height
    },
    heading: {
        color: '#000000',
        fontSize: width * 0.05, // 5% of screen width
        fontWeight: 'bold',
        marginVertical: height * 0.02, // 2% of screen height
    },
    text: {
        color: '#000000',
        fontSize: width * 0.04, // 4% of screen width
        textAlign: 'center',
        marginHorizontal: width * 0.05, // 5% of screen width
        marginBottom: height * 0.03, // 3% of screen height
    },
    button: {
        backgroundColor: '#50D133',
        padding: height * 0.021, // 2% of screen height
        borderRadius: 10,
        margin: width * 0.05, // 5% of screen width
    },
    buttonText: {
        color: '#ffffff',
        fontSize: width * 0.05, // 5% of screen width
        textAlign: 'center',
    },
    activeDot: {
        backgroundColor: '#50D133',
        width: 8,
        height: 8,
    },
});

export default OnboardingScreen;
