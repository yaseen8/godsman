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
import BgPattern from '../../assets/images/bg2.png';
import ArrowIcon from '../../assets/images/arrow-icon.png';
import DatePicker from 'react-native-datepicker';
import {bookingActions} from '../../redux/booking/actions';
import {connect} from 'react-redux';
import Moment, {unix} from 'moment';

const DateTime = props => {
  const {bookingData, selectedServiceData} = props;
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [show, setShow] = useState(false);
  const [showMorning, setMorning] = useState(true);
  const [showAfternoon, setAfternoon] = useState(false);
  const [showEvening, setEvening] = useState(false);
  useEffect(() => {
    getCurrentDate();
  }, [getCurrentDate]);
  const getCurrentDate = () => {
    setSelectedDate(Moment().format('YYYY-MM-DD'));
    setCurrentDate(Moment().format('YYYY-MM-DD'));
    setCurrentTime(Moment().format('HH:MM a'));
  };
  const showDatePicker = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const selectedData = date => {
    setSelectedDate(date);
    bookingData.date = date;
    selectedServiceData(bookingData);
  };
  const morningTime = () => {
    setAfternoon(false);
    setEvening(false);
    if (showMorning) {
      setMorning(false);
    } else {
      setMorning(true);
    }
  };
  const afternoonTime = () => {
    setMorning(false);
    setEvening(false);
    if (showAfternoon) {
      setAfternoon(false);
    } else {
      setAfternoon(true);
    }
  };
  const eveningTime = () => {
    setAfternoon(false);
    setMorning(false);
    if (showEvening) {
      setEvening(false);
    } else {
      setEvening(true);
    }
  };
  const selectBookingTime = time => {
    setSelectedTime(time);
    bookingData.time = time;
    selectedServiceData(bookingData);
  };
  const location = () => {
    if (!bookingData.date || !bookingData.time) {
      alert('Please select date and time');
      return;
    }
    props.navigation.navigate('Location');
  };
  bookingData.date = selectedDate;
  return (
    <View>
      <View style={{height: '100%'}}>
        <TopHeader navigation={props.navigation} />
        <View style={styles.bgTop}>
          <ImageBackground style={styles.bgPattern} source={BgPattern}>
            <TouchableOpacity
              style={styles.positionTitle}
              onPress={showDatePicker}>
              <Text style={styles.titleText}>
                {selectedDate ? selectedDate : 'Select Date'}{' '}
              </Text>
              <DatePicker
                mode="date"
                format="YYYY-MM-DD"
                iconSource={ArrowIcon}
                onDateChange={date => selectedData(date)}
                minDate={currentDate}
                customStyles={{
                  dateIcon: {
                    opacity: 100,
                    width: 30,
                    height: 20,
                    marginRight: 10,
                  },

                  dateInput: {
                    opacity: 0,
                  },
                }}
              />
              {/*<Image style={styles.arrowIcon} source={ArrowIcon} />*/}
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.homeSlide}>
          <View style={styles.slideBadges}>
            <View>
              <TouchableOpacity
                style={showMorning ? styles.badgeSelected : styles.slideBadge}
                onPress={morningTime}>
                <Text style={styles.badgeText}>Morning</Text>
              </TouchableOpacity>
              {showMorning && (
                <View style={[styles.timeBadges, {display: 'flex'}]}>
                  <TouchableOpacity
                    style={
                      selectedTime === '09:00 AM'
                        ? styles.selectedTimeBadge
                        : styles.slideBadge
                    }
                    onPress={() => selectBookingTime('09:00 AM')}>
                    <Text
                      style={
                        selectedTime === '09:00 AM'
                          ? styles.badgeTextSelected
                          : styles.badgeText
                      }>
                      09:00 AM
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selectedTime === '10:00 AM'
                        ? styles.selectedTimeBadge
                        : styles.slideBadge
                    }
                    onPress={() => selectBookingTime('10:00 AM')}>
                    <Text
                      style={
                        selectedTime === '10:00 AM'
                          ? styles.badgeTextSelected
                          : styles.badgeText
                      }>
                      10:00 AM
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selectedTime === '11:00 AM'
                        ? styles.selectedTimeBadge
                        : styles.slideBadge
                    }
                    onPress={() => selectBookingTime('11:00 AM')}>
                    <Text
                      style={
                        selectedTime === '11:00 AM'
                          ? styles.badgeTextSelected
                          : styles.badgeText
                      }>
                      11:00 AM
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View>
              <TouchableOpacity
                style={showAfternoon ? styles.badgeSelected : styles.slideBadge}
                onPress={afternoonTime}>
                <Text style={styles.badgeText}>Afternoon</Text>
              </TouchableOpacity>
              {showAfternoon && (
                <View style={[styles.timeBadges, {display: 'flex'}]}>
                  <TouchableOpacity
                    style={
                      selectedTime === '01:00 PM'
                        ? styles.selectedTimeBadge
                        : styles.slideBadge
                    }
                    onPress={() => selectBookingTime('01:00 PM')}>
                    <Text
                      style={
                        selectedTime === '01:00 PM'
                          ? styles.badgeTextSelected
                          : styles.badgeText
                      }>
                      01:00 PM
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selectedTime === '02:00 PM'
                        ? styles.selectedTimeBadge
                        : styles.slideBadge
                    }
                    onPress={() => selectBookingTime('02:00 PM')}>
                    <Text
                      style={
                        selectedTime === '02:00 PM'
                          ? styles.badgeTextSelected
                          : styles.badgeText
                      }>
                      02:00 PM
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selectedTime === '03:00 PM'
                        ? styles.selectedTimeBadge
                        : styles.slideBadge
                    }
                    onPress={() => selectBookingTime('03:00 PM')}>
                    <Text
                      style={
                        selectedTime === '03:00 PM'
                          ? styles.badgeTextSelected
                          : styles.badgeText
                      }>
                      03:00 PM
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selectedTime === '04:00 PM'
                        ? styles.selectedTimeBadge
                        : styles.slideBadge
                    }
                    onPress={() => selectBookingTime('04:00 PM')}>
                    <Text
                      style={
                        selectedTime === '04:00 PM'
                          ? styles.badgeTextSelected
                          : styles.badgeText
                      }>
                      04:00 PM
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View>
              <TouchableOpacity
                style={showEvening ? styles.badgeSelected : styles.slideBadge}
                onPress={eveningTime}>
                <Text style={styles.badgeText}>Evening</Text>
              </TouchableOpacity>
              {showEvening && (
                <View style={[styles.timeBadges, {display: 'flex'}]}>
                  <TouchableOpacity
                    style={
                      selectedTime === '05:00 PM'
                        ? styles.selectedTimeBadge
                        : styles.slideBadge
                    }
                    onPress={() => selectBookingTime('05:00 PM')}>
                    <Text
                      style={
                        selectedTime === '05:00 PM'
                          ? styles.badgeTextSelected
                          : styles.badgeText
                      }>
                      05:00 PM
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      selectedTime === '06:00 PM'
                        ? styles.selectedTimeBadge
                        : styles.slideBadge
                    }
                    onPress={() => selectBookingTime('06:00 PM')}>
                    <Text
                      style={
                        selectedTime === '06:00 PM'
                          ? styles.badgeTextSelected
                          : styles.badgeText
                      }>
                      06:00 PM
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
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
          <TouchableOpacity
            style={
              selectedDate && selectedTime ? styles.stepBtn : styles.disabledBtn
            }
            onPress={location}
            disabled={!selectedDate || !selectedTime}>
            <Image source={ArrowIcon} style={styles.stepArrow} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const {bookingData} = state.booking;
  return {bookingData};
};

const mapDispatchToProps = {
  selectedServiceData: bookingActions.selectedServiceData,
};

const connectedDateTimePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateTime);

export {connectedDateTimePage as DateTime};

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
    fontSize: 25,
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
