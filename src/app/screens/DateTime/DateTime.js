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
import ArrowIcon from '../../assets/images/arrow-icon.png';
import HomeIcon1 from '../../assets/images/slide-icon1.png';
import HomeIcon2 from '../../assets/images/slide-icon2.png';
import HomeIcon3 from '../../assets/images/slide-icon3.png';

const DateTime = props => {
  return (
    <View>
      <View style={{height: '100%'}}>
        <TopHeader />
        <View style={styles.bgTop}>
          <ImageBackground style={styles.bgPattern} source={BgPattern}>
            <TouchableOpacity style={styles.positionTitle}>
              <Text style={styles.titleText}>When? 21-02-20</Text>
              <Image style={styles.arrowIcon} source={ArrowIcon} />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.homeSlide}>
          <View style={styles.slideBadges}>
            <View>
              <TouchableOpacity style={styles.badgeSelected}>
                <Text style={styles.badgeText}>Morning</Text>
              </TouchableOpacity>
              <View style={[styles.timeBadges, {display: 'flex'}]}>
                <TouchableOpacity style={styles.slideBadge}>
                  <Text style={styles.badgeText}>09:00 AM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.selectedTimeBadge}>
                  <Text style={styles.badgeTextSelected}>10:00 AM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.slideBadge}>
                  <Text style={styles.badgeText}>11:00 AM</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.slideBadge}>
                <Text style={styles.badgeText}>Afternoon</Text>
              </TouchableOpacity>
              <View style={styles.timeBadges}>
                <TouchableOpacity style={styles.slideBadge}>
                  <Text style={styles.badgeText}>09:00 AM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.selectedTimeBadge}>
                  <Text style={styles.badgeTextSelected}>10:00 AM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.slideBadge}>
                  <Text style={styles.badgeText}>11:00 AM</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.slideBadge}>
                <Text style={styles.badgeText}>Evening</Text>
              </TouchableOpacity>
              <View style={styles.timeBadges}>
                <TouchableOpacity style={styles.slideBadge}>
                  <Text style={styles.badgeText}>09:00 AM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.selectedTimeBadge}>
                  <Text style={styles.badgeTextSelected}>10:00 AM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.slideBadge}>
                  <Text style={styles.badgeText}>11:00 AM</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.warningText}>
            Please select date and time of the day from above
          </Text>
        </View>

        <View style={styles.stepsFooter}>
          <View style={styles.stepsInfo}>
            <View style={styles.stepCol}>
              <View style={styles.stepDot} />
              <Text style={styles.stepText}>Step 2/3</Text>
            </View>
            <Text style={styles.stepDesc}>
              You will be ask to set up job location in next step
            </Text>
          </View>
          <TouchableOpacity style={styles.stepBtn}>
            <Image source={ArrowIcon} style={styles.stepArrow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DateTime;

const styles = StyleSheet.create({
  bgTop: {
    height: 236,
    marginTop: -50,
  },
  bgPattern: {
    width: '100%',
    flex: 1,
    position: 'relative',
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
    fontSize: 36,
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
    bottom: '-50%',
    left: 0,
    width: '93%',
    display: 'none',
    opacity: 0,
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
    alignItems: 'flex-start',
    marginBottom: 5,
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
    marginBottom: 13,
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
    marginBottom: 13,
  },
  selectedTimeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#f56407',
    marginRight: 10,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f56407',
    marginBottom: 13,
  },
  badgeText: {
    fontSize: 14,
    lineHeight: 17,
    color: '#353535',
    fontWeight: '300',
  },
  badgeTextSelected: {
    fontSize: 14,
    lineHeight: 17,
    color: '#fff',
    fontWeight: '300',
  },
  timeBadges: {
    display: 'none',
  },

  warningText: {
    fontSize: 15,
    lineHeight: 17,
    color: '#f68048',
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
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ffcd28',
    borderWidth: 1,
    borderColor: '#989487',
    marginRight: 5,
  },
  stepText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
  },
  stepDesc: {
    fontSize: 14,
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
    width: 30,
    height: 25,
    transform: [{rotate: '-90deg'}],
    marginLeft: 6,
  },
});
