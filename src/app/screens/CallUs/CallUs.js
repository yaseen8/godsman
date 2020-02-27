import React, {useEffect, useState} from 'react';
import {Linking} from 'react-native';
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
import PhoneIcon from '../../assets/images/phone-icon-small.png';
import {bookingActions} from '../../redux/booking/actions';
import {connect} from 'react-redux';
import {commonActions} from '../../redux/common/actions';

const CallUs = props => {
  useEffect(() => {
    props.getCompanyInfo();
  }, [props]);
  const call = () => {
    Linking.openURL('tel:' + props.companyDetail.phone);
  };
  return (
    <View>
      <View style={{height: '100%'}}>
        <TopHeader navigation={props.navigation} callUs={true} />
        <View style={styles.bgTop}>
          <ImageBackground style={styles.bgPattern} source={BgPattern}>
            <View style={styles.positionTitle}>
              <Text style={styles.titleText}>
                Talk directly with our representative
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.completeWrap}>
          <View style={styles.completeInner}>
            <TouchableOpacity style={styles.circleIcon} onPress={call}>
              <Image source={PhoneIcon} />
            </TouchableOpacity>
            <Text style={styles.innerTitle}>Click to Call</Text>
            <Text style={styles.descText}>
              Call will be made to our call center using your newtork. Charges
              apply.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const {companyDetail} = state.common;
  return {companyDetail};
};

const mapDispatchToProps = {
  getCompanyInfo: commonActions.getCompanyInfo,
};

const connectedCallUsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CallUs);

export {connectedCallUsPage as CallUs};

const styles = StyleSheet.create({
  bgTop: {
    height: 236,
    marginTop: 0,
  },
  bgPattern: {
    width: '100%',
    flex: 1,
    position: 'relative',
    zIndex: 999,
  },
  positionTitle: {
    position: 'absolute',
    bottom: 60,
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
  },

  completeWrap: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 45,
  },
  completeInner: {
    maxWidth: '70%',
  },
  circleIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#62e05b',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 25,
  },
  innerTitle: {
    fontSize: 30,
    lineHeight: 34,
    color: '#000',
    marginBottom: 15,
    textAlign: 'center',
  },
  descText: {
    fontSize: 16,
    lineHeight: 17,
    color: '#6f6f6f',
    textAlign: 'center',
  },
});
