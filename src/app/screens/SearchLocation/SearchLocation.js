import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {bookingActions} from '../../redux/booking/actions';
import {connect} from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from '../../styles/style';

const SearchLocation = props => {
  return (
    <View style={{zIndex: 9999999999, position: 'relative', flex: 1}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2} // minimum length of text to search
        autoFocus={false}
        returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
        listViewDisplayed={false} // true/false/undefined
        fetchDetails={true}
        renderDescription={row => row.description} // custom description render
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(details);
          props.closeModal(details);
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyBNulbH7z0tPb7zlzL8UVM-mn_0ZfIVeLk',
          language: 'en', // language of the results
        }}
        styles={{
          textInputContainer: {
            backgroundColor: "rgba(255, 205, 40, 0.5)",
            margin: 0,
            padding: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            paddingVertical: 5,
            height: 60
          },
          textInput: {
            // textAlign: 'center',
            borderColor: "transparent",
            borderBottomWidth: 1,
            color: '#ac879a',
            fontSize: 14,
            backgroundColor: '#ffcd28',
            borderWidth: 0,
            padding:  15,
            height: 35,
            marginRight: 55,
            borderRadius: 20,
          },
          description: {
            color: '#ac879a',
            fontWeight: '300',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />
      <TouchableOpacity style={{
        position: "absolute",
        top: 20,
        right: 10
      }} onPress={() => props.closeModal()}>
        <Text style={{color: "#000"}}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  const {bookingData} = state.booking;
  return {bookingData};
};

const mapDispatchToProps = {
};

const connectedSearchLocationPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchLocation);

export {connectedSearchLocationPage as SearchLocation};
