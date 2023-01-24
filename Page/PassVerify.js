import React, { useState, useEffect, useRef } from 'react';
import {

  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Modal
} from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import CodeInput from 'react-native-confirmation-code-input';
import { createStackNavigator } from '@react-navigation/native-stack';
import { axiosCalls } from '../helper/api';
import { ToastLong } from '../helper/toast';




const PassVerify = props => {
  const [pass, setPass] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);
  const [passRes, setPassRes] = useState('');

  const postPass = async value => {
    // setIsLoading(true)
    setPass(value);
    console.warn('coming value', value);

  };


  const Verify = async () => {
    try {
      if (pass.length != 6) {
        ToastLong('Enter correct pin')

      } else {
        setIsLoading(true);
        const payLoad = {
          pass: pass
        }
        console.warn('passss', payLoad);
        const res = await axiosCalls('/pass/check', 'POST', payLoad);

        if (res.data) {
          setIsLoading(false);
          console.warn('pass token', res)
          ToastLong(res.data.message)
          setPassRes(res.data)
          console.warn('pass token+++++=======', passRes)
          props.navigation.navigate('guestDetails', { info: passRes });
        }
        else {
          if (res.er.success == false) {
            setIsLoading(false);
            setPassRes(res.er.message)
            console.warn('error pass token+++++=======', passRes)
            console.warn('pass error token', res)
            ToastLong(res.er.message)
            setFailModal(true);
          }
        }
      }
    } catch (e) {

    }
  }


  const onFulfill = async code => {
    console.warn('hey, am here', code);
    setPass(code);
  };


  return (
    <View style={{ flex: 1, paddingHorizontal: '5%', paddingVertical: '3%' }}>
      <View
        style={{
          height: '10%',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{ height: 50, width: 50, borderRadius: 50 }}
          source={require('../images/profileimage.png')}
        />

        <View style={{ paddingLeft: '4%' }}>
          <Text style={{ fontSize: 13, color: '#000000' }}>Hi Kareem</Text>
        </View>
      </View>

      <View
        style={{
          height: '10%',
          width: '100%',
        }}>
        <Text style={{ paddingLeft: '2%', fontWeight: 'bold', color: '#000000' }}>
          Welcome Back!
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: '#5E38AF', fontWeight: 'bold', fontSize: 17 }}>
          Visitors’ Entry
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
        <Text style={{ color: '#000000' }}>Insert visitor’s entry code</Text>
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
        {/* <CodeInput
          secureTextEntry

          compareWithCode="AsDW2"
          activeColor="#5E38AF"
          inactiveColor="#9E9797"
          autoFocus={false}
          codeLength={6}
          keyboardType="numeric"
          ignoreCase={true}
          inputPosition="center"
          size={40}
          value={pass}
          space={20}
          // onFulfill={code => onFulfill(code)}
          onFulfill={code => console.warn('on fulfill>> code', code)}
          containerStyle={{ marginTop: 30, borderRadius: 20 }}
          codeInputStyle={{ borderWidth: 1.5, borderRadius: 6 }}
        /> */}
        <CodeInput
          secureTextEntry
          keyboardType="number-pad"
          activeColor="#5E38AF"
          inactiveColor="#9E9797"
          autoFocus={true}
          codeLength={6}
          inputPosition="center"
          size={40}
          onFulfill={code => onFulfill(code)}
          containerStyle={{ marginTop: 30, borderRadius: 20 }}
          codeInputStyle={{ borderWidth: 1.5, borderRadius: 6 }}
          cellBorderWidth={0}
        />
      </View>

      <View
        style={{
          height: '10%',
          width: '100%',
          marginTop: '60%',
          justifyContent: 'center',
          paddingLeft: '5%',
        }}>




        <TouchableOpacity onPress={() => Verify()} >
          <View
            style={{
              height: '75%',
              width: '95%',
              backgroundColor: '#5E38AF',
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {isLoading ? (<ActivityIndicator size="large" color="#00ff00" />) : (<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
              Next
            </Text>)}

          </View>
        </TouchableOpacity>

      </View>

      <Modal animationType="slide" transparent={true} visible={successModal} >

        <View style={{ backgroundColor: '#FFFFFF', shadowColor: '#5E38AF', shadowOpacity: 1, width: '80%', alignSelf: 'center', borderRadius: 26, marginTop: '60%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 15, backgroundColor: 'red', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 12 }} onPress={() => setSuccessModal(false)}>
            <Text style={{ color: 'white', }}>
              Cancle
            </Text>
          </TouchableOpacity>

          <View
            style={{

              justifyContent: 'center',
              alignItems: 'center',
              padding: 30
            }}>
            <Image
              style={{ height: 90, width: 90, borderRadius: 50 }}
              source={require('../images/successful.png')}
            />
          </View>


          <View
            style={{

              padding: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 19, color: '#5E38AF' }}>
              Visitor’s Confirmation
            </Text>
            <Text style={{ fontSize: 19, color: 'green' }}></Text>
            {/* {passRes.data.message} */}
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={true} visible={failModal} >

        <View style={{ backgroundColor: '#FFFFFF', shadowColor: '#5E38AF', shadowOpacity: 1, width: '80%', alignSelf: 'center', borderRadius: 26, marginTop: '60%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{ alignSelf: 'flex-start', marginTop: 20, marginLeft: 15, backgroundColor: 'red', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 12 }} onPress={() => setFailModal(false)}>
            <Text style={{ color: 'white', }}>
              Cancle
            </Text>
          </TouchableOpacity>

          <View
            style={{

              justifyContent: 'center',
              alignItems: 'center',
              padding: 12,
              backgroundColor: '#5E38AF',
              borderRadius: 50,
              width: 100,
              height: 100

            }}>
            <Text style={{ fontSize: 50, color: 'red' }}>❌</Text>
          </View>


          <View
            style={{

              padding: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 19, color: '#5E38AF' }}>
              Visitor’s Confirmation
            </Text>
            <Text style={{ fontSize: 19, color: 'red' }}>{passRes}</Text>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default PassVerify;
