import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import TopHeader from '../../components/Header';
import BgPattern from '../../assets/images/bg2.png';
import ArrowIcon from '../../assets/images/arrow-icon.png';
import Select from '../../assets/images/select.png';
import {connect} from 'react-redux';
import {servicesAction} from '../../redux/services/actions';
import {bookingActions} from '../../redux/booking/actions';
import firebase from 'react-native-firebase';
import {authActions} from '../../redux/auth/actions';

const Home = props => {
  let [showDropDown, setDropDown] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const {
    getTypes,
    types,
    getCategories,
    categories,
    getServices,
    services,
    selectedServiceData,
    bookingData,
    saveUserObject,
  } = props;
  useEffect(() => {
    console.log('data', props);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (!bookingData.userID) {
          bookingData.userID = user._user.uid;
          bookingData.status = 'PENDING';
          saveUserObject(user._user);
          selectedServiceData(bookingData);
        }
      } else {
        props.navigation.navigate('Auth');
      }
    });
    getAllTypes();
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });
  }, [bookingData, getAllTypes, props, saveUserObject, selectedServiceData]);
  const showService = () => {
    if (showDropDown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  };
  const getAllTypes = () => {
    getTypes();
  };
  const goToDateTime = () => {
    if (!bookingData.serviceID) {
      alert('Select service');
      return;
    }
    props.navigation.navigate('DateTime');
  };
  const typeSelected = event => {
    getCategories(event.id);
    setDropDown(false);
  };
  const getServiceList = category => {
    categories.forEach(item => {
      item.selected = item.id === category.id;
    });
    getServices(category.id);
  };
  const userSelectedService = service => {
    services.forEach(object => {
      object.selected = object.id === service.id;
    });
    console.log(service);
    setSelectedService(service.id);
    bookingData.serviceID = service.id;
    bookingData.serviceName = service.name;
    selectedServiceData(bookingData);
  };
  return (
    <View>
      <View style={{height: '100%'}}>
        <TopHeader navigation={props.navigation} />
        <View style={styles.bgTop}>
          <ImageBackground style={styles.bgPattern} source={BgPattern}>
            <TouchableOpacity
              style={styles.positionTitle}
              onPress={showService}>
              <Text style={styles.titleText}>What you need</Text>
              <Image style={styles.arrowIcon} source={ArrowIcon} />
            </TouchableOpacity>
          </ImageBackground>

          {showDropDown && (
            <View style={styles.dropdownApp}>
              {types.map((item, index) => (
                <TouchableOpacity
                  style={styles.dropdownLink}
                  key={index}
                  onPress={() => typeSelected(item)}>
                  <Text style={styles.dropdownText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.homeSlide}>
          {categories.length ? (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.slideBadges}>
                {categories.map((category, index) => (
                  <TouchableOpacity
                    style={
                      category.selected
                        ? styles.badgeSelected
                        : styles.slideBadge
                    }
                    key={index}
                    onPress={() => getServiceList(category)}>
                    <Text style={styles.badgeText}>{category.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          ) : (
            []
          )}
        </View>
        <View style={styles.homeSlide}>
          {services.length ? (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.slideBoxes}>
                {services.map((service, index) => (
                  <TouchableOpacity
                    style={
                      service.selected ? styles.iconBoxSelected : styles.iconBox
                    }
                    key={index}
                    onPress={() => userSelectedService(service)}>
                    <Image
                      style={styles.slideIcon}
                      source={{uri: service.image}}
                    />
                    <Text style={styles.slideText}>{service.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          ) : (
            []
          )}
          {!services.length ? (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.slideBoxes}>
                <TouchableOpacity style={styles.iconBox}>
                  <Image style={styles.slideIcon} source={Select} />
                  <Text style={styles.slideText}>
                    Select Service from above
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          ) : (
            []
          )}
        </View>

        <View style={styles.stepsFooter}>
          <View style={styles.stepsInfo}>
            <View style={styles.stepCol}>
              <View style={styles.stepDot} />
              <Text style={styles.stepText}>Step 1/3</Text>
            </View>
            <Text style={styles.stepDesc}>
              You will be asked to set preferred date in next step
            </Text>
          </View>
          <TouchableOpacity
            style={selectedService ? styles.stepBtn : styles.disabledBtn}
            onPress={goToDateTime}
            disabled={!selectedService}>
            <Image source={ArrowIcon} style={styles.stepArrow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  const {types, categories, services} = state.services;
  const {bookingData} = state.booking;
  return {types, categories, services, bookingData};
};

const mapDispatchToProps = {
  getTypes: servicesAction.getTypes,
  getCategories: servicesAction.getCategories,
  getServices: servicesAction.getServices,
  selectedServiceData: bookingActions.selectedServiceData,
  saveUserObject: authActions.saveUserObject,
};

const connectedHomePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export {connectedHomePage as Home};

const styles = StyleSheet.create({
  bgTop: {
    height: 236,
  },
  bgPattern: {
    width: '100%',
    flex: 1,
    position: 'relative',
    zIndex: -1,
  },
  positionTitle: {
    position: 'absolute',
    bottom: 70,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
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
  arrowIcon: {
    width: 30,
    height: 20,
  },

  dropdownApp: {
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

  homeSlide: {
    paddingTop: 30,
    paddingLeft: 15,
  },
  slideBadges: {
    flexDirection: 'row',
  },
  slideBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeSelected: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#cde5fd',
    marginRight: 10,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cde5fd',
  },
  badgeText: {
    fontSize: 14,
    lineHeight: 17,
    color: '#353535',
    fontWeight: '300',
  },

  slideBoxes: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 25,
  },
  iconBox: {
    minWidth: 150,
    backgroundColor: '#fff',
    elevation: 3,
    textAlign: 'left',
    padding: 15,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 10,
    marginRight: 15,
    flex: 1,
  },
  iconBoxSelected: {
    minWidth: 150,
    backgroundColor: '#fff',
    elevation: 3,
    textAlign: 'left',
    padding: 15,
    borderWidth: 1,
    borderColor: '#f45c04',
    borderRadius: 10,
    marginRight: 15,
    borderLeftColor: '#f45c04',
    borderRightColor: '#fdb924',
  },
  slideIcon: {
    width: 53,
    height: 47,
    marginBottom: 10,
  },
  slideText: {
    fontSize: 14,
    lineHeight: 16,
    color: '#000',
    fontWeight: '300',
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
  disabledBtn: {
    width: 65,
    height: 65,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BBBBBB',
  },
  stepArrow: {
    width: 30,
    height: 25,
    transform: [{rotate: '-90deg'}],
    marginLeft: 6,
  },
});
