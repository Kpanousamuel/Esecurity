import React, { useState, useEffect } from 'react';
import { Button, View, SafeAreaView, Text, TouchableOpacity, } from 'react-native';

const guestDetails = props => {


  useEffect(() => {
    console.warn('Info coming 7',
      props
        ? props.route
          ? props.route.params
            ? props.route.params.info
              ? props.route.params.info
                ? props.route.params.info
                : null
              : null
            : null
          : null
        : null)
    console.warn('Info coming 6',
      props
        ? props.route
          ? props.route.params
            ? props.route.params.info
              ? props.route.params.info.guest
                ? props.route.params.info.guest.houseAddress[0]
                  ? props.route.params.info.guest.houseAddress[0].value
                    ? props.route.params.info.guest.houseAddress[0].value
                    : null
                  : null
                : null
              : null
            : null
          : null
        : null)
    console.warn('Info coming 5',
      props
        ? props.route
          ? props.route.params
            ? props.route.params.info
              ? props.route.params.info.guest
                ? props.route.params.info.guest.phoneNumber
                  ? props.route.params.info.guest.phoneNumber.value
                    ? props.route.params.info.guest.phoneNumber.value
                    : null
                  : null
                : null
              : null
            : null
          : null
        : null)
    console.warn('Info coming 4',
      props
        ? props.route
          ? props.route.params
            ? props.route.params.info
              ? props.route.params.info.guest
                ? props.route.params.info.guest.phoneNumber
                  ? props.route.params.info.guest.phoneNumber.countryCode
                    ? props.route.params.info.guest.phoneNumber.countryCode
                    : null
                  : null
                : null
              : null
            : null
          : null
        : null)
    console.warn('Info coming 3',
      props
        ? props.route
          ? props.route.params
            ? props.route.params.info
              ? props.route.params.info.guest
                ? props.route.params.info.guest.plateNumber
                  ? props.route.params.info.guest.plateNumber.value
                    ? props.route.params.info.guest.plateNumber.value
                    : null
                  : null
                : null
              : null
            : null
          : null
        : null)
    console.warn('Info coming 2',
      props
        ? props.route
          ? props.route.params
            ? props.route.params.info
              ? props.route.params.info.guest
                ? props.route.params.info.guest.name
                  ? props.route.params.info.guest.name.value
                    ? props.route.params.info.guest.name.value
                    : null
                  : null
                : null
              : null
            : null
          : null
        : null)
    console.warn('Info coming 1',
      props
        ? props.route
          ? props.route.params
            ? props.route.params.info
              ? props.route.params.info
                ? props.route.params.info.destination
                  ? props.route.params.info.destination.value
                    ? props.route.params.info.destination.value
                    : null
                  : null
                : null
              : null
            : null
          : null
        : null)
    console.warn('Info coming 0',
      props
        ? props.route
          ? props.route.params
            ? props.route.params.info
              ? props.route.params.info.guest
                ? props.route.params.info.guest.numberOfGuests
                  ? props.route.params.info.guest.numberOfGuests
                  : null
                : null
              : null
            : null
          : null
        : null)
  }, []);

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

  return (
    <View style={{ flex: 1, paddingHorizontal: '5%', paddingVertical: '3%' }}>
      <View
        style={{
          height: '8%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 15, color: '#5E38AF' }}>Visitor’s Code</Text>
      </View>

      <View
        style={{
          height: '15%',
          width: '100%',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '20%',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 12, color: '#000000' }}>House Address </Text>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 12, color: '#5E38AF' }}>
              {props
                ? props.route
                  ? props.route.params
                    ? props.route.params.info
                      ? props.route.params.info.guest
                        ? props.route.params.info.guest.houseAddress[0]
                          ? props.route.params.info.guest.houseAddress[0].value
                            ? props.route.params.info.guest.houseAddress[0].value
                            : null
                          : null
                        : null
                      : null
                    : null
                  : null
                : null}
            </Text>
          </View>
        </View>

        <View
          style={{
            height: '20%',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 12, color: '#000000' }}>
            Residence’s Name{' '}
          </Text>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 12, color: '#5E38AF' }}> {props
              ? props.route
                ? props.route.params
                  ? props.route.params.info
                    ? props.route.params.info
                      ? props.route.params.info.destination
                        ? props.route.params.info.destination.value
                          ? props.route.params.info.destination.value
                          : null
                        : null
                      : null
                    : null
                  : null
                : null
              : null}  </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          height: '20%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10%',
        }}>
        <View
          style={{
            height: '20%',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 12, color: '#000000' }}>Visitor’s Name </Text>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 12, color: '#5E38AF' }}>
              {props
                ? props.route
                  ? props.route.params
                    ? props.route.params.info
                      ? props.route.params.info.guest
                        ? props.route.params.info.guest.name
                          ? props.route.params.info.guest.name.value
                            ? props.route.params.info.guest.name.value
                            : null
                          : null
                        : null
                      : null
                    : null
                  : null
                : null}
            </Text>
          </View>
        </View>

        <View
          style={{
            height: '25%',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 12, color: '#000000' }}>
            Visitors Phone Number {' '}
          </Text>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 12, color: '#5E38AF' }}>{props
              ? props.route
                ? props.route.params
                  ? props.route.params.info
                    ? props.route.params.info.guest
                      ? props.route.params.info.guest.phoneNumber
                        ? props.route.params.info.guest.phoneNumber.countryCode
                          ? props.route.params.info.guest.phoneNumber.countryCode
                          : null
                        : null
                      : null
                    : null
                  : null
                : null
              : null} {props
                ? props.route
                  ? props.route.params
                    ? props.route.params.info
                      ? props.route.params.info.guest
                        ? props.route.params.info.guest.phoneNumber
                          ? props.route.params.info.guest.phoneNumber.value
                            ? props.route.params.info.guest.phoneNumber.value
                            : null
                          : null
                        : null
                      : null
                    : null
                  : null
                : null}</Text>
          </View>
        </View>

        <View
          style={{
            height: '25%',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 12, color: '#000000' }}>
            Number of Visitors{' '}
          </Text>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 12, color: '#5E38AF' }}>{props
              ? props.route
                ? props.route.params
                  ? props.route.params.info
                    ? props.route.params.info.guest
                      ? props.route.params.info.guest.numberOfGuests
                        ? props.route.params.info.guest.numberOfGuests
                        : null
                      : null
                    : null
                  : null
                : null
              : null} </Text>
          </View>
        </View>

        <View
          style={{
            height: '25%',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 12, color: '#000000' }}>
            Vehicle Plate Number{' '}
          </Text>
          <View style={{ marginLeft: 15 }}>

            <Text style={{ fontSize: 12, color: '#5E38AF' }}>{props
              ? props.route
                ? props.route.params
                  ? props.route.params.info
                    ? props.route.params.info.guest
                      ? props.route.params.info.guest.plateNumber
                        ? props.route.params.info.guest.plateNumber.value
                          ? props.route.params.info.guest.plateNumber.value
                          : null
                        : null
                      : null
                    : null
                  : null
                : null
              : null} </Text>

          </View>
        </View>
      </View>

      <View
        style={{
          height: '10%',
          width: '100%',
          marginTop: '65%',
          justifyContent: 'center',
          paddingLeft: '5%',
        }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login3')}>
          <View
            style={{
              height: '75%',
              width: '95%',
              backgroundColor: '#5E38AF',
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
              Grant Access
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default guestDetails;
