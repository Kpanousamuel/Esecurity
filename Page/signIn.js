import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import CodeInput from 'react-native-confirmation-code-input';

import { createStackNavigator } from '@react-navigation/native-stack';
import { axiosCallsNoAuth } from '../helper/api';
import { storeData, storeData2 } from '../helper/storage';
import { ToastLong } from '../helper/toast';

const SignIn = props => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const next = async value => {
    setIsLoading(true);
    setOtp(value);
    console.warn('coming value', value);

    const palyLoad = {
      email: 'security@test.com',
      password: value,
    };
    console.warn('???', palyLoad);
    try {
      setIsLoading(true);
      const res = await axiosCallsNoAuth('/login', 'POST', palyLoad);
      if (res.er) {
        setIsLoading(false);
        ToastLong(res.er.message)
        console.warn('ressss coming >>>>>.', res);
        // console.warn(res.er.message)
      } else {
        ToastLong(res.data.message)
        console.warn('hey>>>>>', res)
        console.warn('ressss coming =====', res.data.token);
        storeData2('token', res.data.token)
        props.navigation.navigate('PassVerify')
      }
    } catch (e) {
      console.warn('eee', e);
    }
    console.warn('....');
  };




  return (
    <View style={{ flex: 1, paddingHorizontal: '5%', paddingVertical: '3%' }}>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20%',
        }}>
        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 17 }}>
          E-Manager
        </Text>
      </View>

      <View
        style={{
          height: '10%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '15%',
        }}>
        <Text style={{ color: '#000000' }}>Enter your password</Text>
      </View>

      <View
        style={{
          height: '10%',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '10%',
        }}>
        <CodeInput
          secureTextEntry
          activeColor="#5E38AF"
          inactiveColor="#9E9797"
          autoFocus={false}
          codeLength={4}
          keyboardType="numeric"
          ignoreCase={true}
          inputPosition="center"
          size={45}
          value={otp}
          space={37}
          onFulfill={isValid => next(isValid)}
          containerStyle={{ marginTop: 30, marginLeft: 14, borderRadius: 20 }}
          codeInputStyle={{ borderWidth: 1.5, borderRadius: 6 }}
        />
      </View>
      <View
        style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity loading={isLoading}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '15%',
            backgroundColor: '#FFFFFF',
          }}>
          <Text style={{ color: '#000000' }}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
