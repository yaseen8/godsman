import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {bookingActions} from '../../redux/booking/actions';
import {connect} from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const SearchLocation = props => {
  return (
    <View style={{marginTop: 40, zIndex: 9999999999, position: 'relative', flex: 1}}>
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
            backgroundColor: 'transparent',
            margin: 0,
            padding: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            textAlign: 'center',
            borderColor: '#cbb4c0',
            borderBottomWidth: 1,
            color: '#5d5d5d',
            fontSize: 14,
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
      <TouchableOpacity onPress={() => props.closeModal()}>
        <Text>Close</Text>
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
