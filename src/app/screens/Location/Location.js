import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TopHeader from '../../components/Header';
import {Container, Content} from 'native-base';
import BgPattern from '../../assets/images/bg2.png';
import ArrowIcon from '../../assets/images/arrow-icon-small.png';
import MapImg from '../../assets/images/map-img.png';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';
import Geocoder from 'react-native-geocoding';

const Location = props => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [location, setLocation] = useState('');
  const [mapRegion, setMapRegion] = useState(null);
  const [currentLatLong, setCurrentLatLong] = useState({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);
  const getCurrentLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Example App',
          message: 'Example App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            let current = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            setCurrentLatLong(current);
            let region = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.00922 * 1.5,
              longitudeDelta: 0.00421 * 1.5,
            };
            onRegionChange(region);
            fetch(
              'https://maps.googleapis.com/maps/api/geocode/json?address=' +
                position.coords.latitude +
                ',' +
                position.coords.longitude +
                '&key=' +
                'AIzaSyBNulbH7z0tPb7zlzL8UVM-mn_0ZfIVeLk',
            )
              .then(response => response.json())
              .then(responseJson => {
                console.log(
                  'ADDRESS GEOCODE is BACK!! => ' +
                    JSON.stringify(responseJson),
                );
              });
            console.log('latitude', latitude);
          },
          error => {
            console.log('error', error);
          },
          {
            enableHighAccuracy: false,
            timeout: 20000,
            maximumAge: 1000,
          },
        );
      } else {
        console.log('location permission denied');
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const onRegionChange = region => {
    setMapRegion(region);
  };
  return (
    <View>
      <View style={{height: '100%'}}>
        <TopHeader navigation={props.navigation} />
        <View style={styles.bgTop}>
          <ImageBackground style={styles.bgPattern} source={BgPattern}>
            <TouchableOpacity style={styles.positionTitle}>
              <Text style={styles.titleText}>59, Tulsa Rd</Text>
              <Image style={styles.arrowIcon} source={ArrowIcon} />
            </TouchableOpacity>
          </ImageBackground>

          <View style={styles.locationDropdown}>
            {/*<ScrollView>*/}
            {/*  <TouchableOpacity style={styles.dropdownLink}>*/}
            {/*    <Text style={styles.dropdownText}>Secter C, DHA</Text>*/}
            {/*  </TouchableOpacity>*/}
            {/*  <TouchableOpacity style={styles.dropdownLink}>*/}
            {/*    <Text style={styles.dropdownText}>*/}
            {/*      Street 43, Secter C, DHA*/}
            {/*    </Text>*/}
            {/*  </TouchableOpacity>*/}
            {/*  <TouchableOpacity style={styles.dropdownLink}>*/}
            {/*    <Text style={styles.dropdownText}>*/}
            {/*      Street 46, Secter C, DHA*/}
            {/*    </Text>*/}
            {/*  </TouchableOpacity>*/}
            {/*  <TouchableOpacity style={styles.dropdownLink}>*/}
            {/*    <Text style={styles.dropdownText}>*/}
            {/*      Street 56, Secter C, DHA*/}
            {/*    </Text>*/}
            {/*  </TouchableOpacity>*/}
            {/*  <TouchableOpacity style={styles.dropdownLink}>*/}
            {/*    <Text style={styles.dropdownText}>*/}
            {/*      Street 59, Secter C, DHA*/}
            {/*    </Text>*/}
            {/*  </TouchableOpacity>*/}
            {/*  <TouchableOpacity style={styles.dropdownLink}>*/}
            {/*    <Text style={styles.dropdownText}>*/}
            {/*      Street 65, Secter C, DHA*/}
            {/*    </Text>*/}
            {/*  </TouchableOpacity>*/}
            {/*  <TouchableOpacity style={styles.dropdownLink}>*/}
            {/*    <Text style={styles.dropdownText}>*/}
            {/*      Street 73, Secter C, DHA*/}
            {/*    </Text>*/}
            {/*  </TouchableOpacity>*/}
            {/*</ScrollView>*/}
          </View>
        </View>

        <View style={styles.locationInner}>
          <View style={styles.mapSec}>
            {/*<Image source={MapImg} style={styles.mapImg} />*/}
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.mapImg}
              region={mapRegion}>
              <MapView.Marker coordinate={currentLatLong} />
            </MapView>
          </View>
        </View>

        <View style={styles.stepsFooter}>
          <View style={styles.stepsInfo}>
            <View style={styles.stepCol}>
              <View style={styles.stepDot} />
              <Text style={styles.stepText}>Step 3/3</Text>
            </View>
            <Text style={styles.stepDesc}>Thats all!</Text>
            <Text style={styles.stepDesc}>Click Next to complete.</Text>
          </View>
          <TouchableOpacity
            style={styles.stepBtn}
            onPress={() => props.navigation.navigate('BookingComplete')}>
            <Image source={ArrowIcon} style={styles.stepArrow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  bgTop: {
    height: 236,
    marginTop: -30,
  },
  bgPattern: {
    width: '100%',
    flex: 1,
    position: 'relative',
    zIndex: 999,
  },
  positionTitle: {
    position: 'absolute',
    bottom: 70,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
  titleText: {
    fontSize: 34,
    lineHeight: 39,
    fontWeight: '300',
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  // arrowIcon: {
  //     width: 30,
  //     height: 20
  // },

  locationDropdown: {
    backgroundColor: '#fff',
    elevation: 3,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 5,
    position: 'absolute',
    top: '75%',
    width: '90%',
    left: 0,
    maxHeight: 200,
    // width: "93%",
    // opacity: 0
  },
  dropdownLink: {
    paddingVertical: 10,
  },
  dropdownText: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '300',
    color: '#000',
  },

  locationInner: {
    flex: 0.95,
    marginTop: -65,
  },
  mapSec: {
    height: '100%',
  },
  mapImg: {
    ...StyleSheet.absoluteFillObject,
  },

  stepsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    alignContent: 'flex-end',
    marginTop: 'auto',
    paddingBottom: 20,
  },
  stepsInfo: {
    flex: 0.75,
  },
  stepCol: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  stepDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#ffcd28',
    borderWidth: 1,
    borderColor: '#989487',
    marginRight: 10,
  },
  stepText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
  },
  stepDesc: {
    fontSize: 16,
    lineHeight: 17,
    color: '#6f6f6f',
  },
  stepBtnDisabled: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepBtn: {
    width: 65,
    height: 65,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f88613',
  },
  stepArrow: {
    transform: [{rotate: '-90deg'}],
    marginLeft: 6,
  },
});
