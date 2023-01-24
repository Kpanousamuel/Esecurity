// login form built from this tutorial:
// https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import SubmitButton from './components/component/submitButton';

// Form

// Form model
const Entrycode = props => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'White',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: '12%',
          width: '100%',

          alignItems: 'center',
          marginTop: '1%',

          flexDirection: 'row',
        }}>
        <View
          style={{
            height: '100%',
            width: '25%',

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('./Images/Ellipse5.png')}
            style={{height: '90%', width: '100%'}}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            height: '50%',
            width: '70%',

            justifyContent: 'center',

            marginLeft: '3%',
          }}>
          <Text style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
            Hi Kareem
          </Text>
        </View>
      </View>
      <View
        style={{
          height: '5%',
          width: '100%',

          justifyContent: 'center',

          marginTop: '1%',
          marginLeft: '5%',
        }}>
        <Text style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
          Welcome Back!
        </Text>
      </View>
      <View
        style={{
          height: '10%',
          width: '70%',

          alignItems: 'center',
          justifyContent: 'center',

          marginLeft: '3%',
        }}>
        <Text style={{color: '#5E38AF', fontSize: 20, fontWeight: '600'}}>
          Visitor's Entry
        </Text>
      </View>
      <View
        style={{
          height: '6%',
          width: '70%',

          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '13%',

          marginLeft: '3%',
        }}>
        <Text style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
          Insert visitor"s entry code
        </Text>
      </View>

      <CodeInput
        secureTextEntry
        compareWithCode="AsDW2"
        activeColor="blue"
        inactiveColor="black"
        autoFocus={false}
        codeLength={4}
        keyboardType="numeric"
        ignoreCase={true}
        inputPosition="center"
        size={50}
        onFulfill={isValid => console.log(isValid)}
        containerStyle={{marginTop: 30}}
        codeInputStyle={{borderWidth: 1.5}}
      />

      <View
        style={{
          height: '20%',
          width: '100%',
          marginTop: '2%',
        }}>
        <SubmitButton
          Bg={'#5E38AF'}
          Color={'white'}
          text={'Next'}
          onPress={() => props.navigation.navigate('vistorsCode')}
        />
      </View>
    </View>
  );
};
export default Entrycode;
