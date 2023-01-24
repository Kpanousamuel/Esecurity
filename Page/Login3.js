import * as React from 'react';
import {
  Button,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const Login3 = Props => {
  return (
    <View style={{flex: 1, paddingHorizontal: '5%', paddingVertical: '3%'}}>
      <View
        style={{
          height: '8%',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 14, color: '#5E38AF'}}>Grant Entry</Text>
      </View>

      <View
        style={{
          height: '25%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '15%',
        }}>
        <Image
          style={{height: 90, width: 90, borderRadius: 50}}
          source={require('../images/successful.png')}
        />
      </View>

      <View
        style={{
          height: '10%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 19, color: '#000000'}}>
          Visitor’s Confirmation
        </Text>
        <Text style={{fontSize: 19, color: '#000000'}}>Successful</Text>
      </View>

      <View
        style={{
          height: '10%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
        }}>
        <Text style={{fontSize: 38, color: '#3A25A0'}}>Granted Entry</Text>
      </View>

      <View
        style={{
          height: '10%',
          width: '100%',
          marginTop: '35%',
          justifyContent: 'center',
          paddingLeft: '5%',
        }}>
        <TouchableOpacity>
          <View
            style={{
              height: '75%',
              width: '95%',
              backgroundColor: '#5E38AF',
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login3;
