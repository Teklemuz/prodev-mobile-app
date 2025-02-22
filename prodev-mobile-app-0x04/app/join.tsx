import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

const Join = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleJoin = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navGroup}>
        <Ionicons name="arrow-back" size={25} />
        <Image source={require('@/assets/images/logo.png')} />
      </View>

      <Text style={styles.largeText}>Create your</Text>
      <Text style={styles.largeText}>Account</Text>
      <Text style={styles.smallText}>Enter your email and password to get started.</Text>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.placeholderText}>Email</Text>
          <TextInput
            keyboardType="email-address"
            style={styles.inputField}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.placeholderText}>Password</Text>
          <View style={styles.passwordGroup}>
            <TextInput
              style={{ flex: 1 }}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleJoin}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.socialMediaButtonGroup}>
        <TouchableOpacity style={styles.socialMediaButton}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Image source={require('@/assets/images/google.png')} />
            <Text style={styles.socialMediaButtonText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialMediaButton}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Image source={require('@/assets/images/facebook.png')} />
            <Text style={styles.socialMediaButtonText}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.subTextGroup}>
        <Text style={styles.subText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.subTextJoin}>Sign in now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Join;
