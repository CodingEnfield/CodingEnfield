import React, { useState, useEffect, useCallback, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginScreen = ({ checkAuthenticate }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [hidePassword, setHidePassword] = useState(true);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = useCallback((input) => {
    setForm((prev) => ({ ...prev, email: input }));
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prev) => ({
      ...prev,
      email: emailRegex.test(input) ? '' : 'Invalid email address',
    }));
  }, []);

  const validatePassword = useCallback((input) => {
    setForm((prev) => ({ ...prev, password: input }));
    setErrors((prev) => ({
      ...prev,
      password: input.length >= 6 ? '' : 'Password must be at least 6 characters',
    }));
  }, []);

  useEffect(() => {
    setIsFormValid(
      !errors.email && !errors.password && form.email !== '' && form.password !== ''
    );
  }, [errors, form]);

  const handleSignUpPress = () => {
    navigation.navigate('RegistrationScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../Static/micon.png')} style={styles.image} />
      </View>
      <Text style={styles.label}>WELCOME BACK</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.email && styles.errorBorder]}
          placeholder="EMAIL ID"
          placeholderTextColor="#aaa"
          value={form.email}
          onChangeText={validateEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.passwordInput, errors.password && styles.errorBorder]}
          placeholder="PASSWORD"
          placeholderTextColor="#aaa"
          secureTextEntry={hidePassword}
          value={form.password}
          onChangeText={validatePassword}
        />
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)} style={styles.iconContainer}>
          <FontAwesomeIcon icon={hidePassword ? faEyeSlash : faEye} size={20} />
        </TouchableOpacity>
      </View>
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forget Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.loginButton, !isFormValid && styles.disabledButton]}
        disabled={!isFormValid || isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.loginButtonText}>Login</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.orText}>---- OR ----</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image style={styles.socialImage} source={{ uri: 'https://img.icons8.com/color/48/facebook.png' }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.socialImage} source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.socialImage} source={{ uri: 'https://img.icons8.com/color/48/linkedin.png' }} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signupContainer} onPress={handleSignUpPress}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <Text style={styles.signupLink}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    resizeMode: 'contain',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  passwordInput: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
    color: '#000',
  },
  iconContainer: {
    padding: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  errorBorder: {
    borderColor: 'red',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#50D133',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#50D133',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#aaa',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  socialImage: {
    height: 50,
    width: 50,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#aaa',
  },
  signupLink: {
    color: '#50D133',
  },
});

export default LoginScreen;
