/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';


const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const { buttonShadow } = StyleSheet.create({
  buttonShadow: {
    height: heightDevice / 20,
    width: widthDevice / 2,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.5,
    elevation: 6,
    shadowRadius: 20,
    shadowOffset: { width: 5, height: 20 },
  }
})
renderButtonShadow = (colorHexCode) => {
  let buttonTemp = { ...buttonShadow };
  buttonTemp['backgroundColor'] = colorHexCode;
  buttonTemp['borderRadius'] = 3;
  return buttonTemp;
}

renderTextStyle = (color, marginTop, paddingLeft) => {
  return {
    color,
    marginTop,
    paddingLeft,
    fontWeight: 'bold'
  }
}

renderImageStyle = (marginLeft, marginTop, height, width) => {
  return {
    marginLeft,
    marginTop,
    height,
    width
  }
}
renderViewStyle = () => {
  return {
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
const App = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{
          flex: 1,
          backgroundColor: '#00B2EE',
          alignItems: 'flex-start',
          height: heightDevice / 15
        }}>
          <Text style={{
            flex: 1,
            marginLeft: 20,
            marginTop: 17,
            color: '#ffffff',
            fontWeight: 'bold', fontSize: 20
          }}>My FireBase App</Text>
        </View>
        <View style={{
          flex: 5,
          flexDirection: 'row',
          backgroundColor: 'white'
        }}>
          <Image style={{ width: widthDevice }}
            resizeMode="stretch"
            source={require('./src/assets/img/earth.jpg')}></Image>
        </View>
        <View style={{
          flex: 9,
          backgroundColor: '#ffffff'
        }}>
          <View style={renderViewStyle()}>
            <TouchableOpacity style={
              renderButtonShadow('#ffffff')
            }>
              <View style={buttonShadow, { flexDirection: 'row' }}>
                <Image
                  source={require('./src/assets/img/google-icon.png')} 
                  style={renderImageStyle('4%', '4%', 30, 30)}></Image>
                <View>
                  <Text style={
                    renderTextStyle('grey', '10%', '4%')}>Sign in with Google</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={renderViewStyle()}>
            <TouchableOpacity style={
              renderButtonShadow('#1D3C78')}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('./src/assets/img/facebook.png')} style={
                  renderImageStyle('4%', '4%', 30, 30)} ></Image>
                <View>
                  <Text style={
                    renderTextStyle('#FFFFFF', '9%', '4%')
                  }>Sign in with Facebook</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={renderViewStyle()}>
            <TouchableOpacity style={
              renderButtonShadow('rgb(29, 161, 242)')}>
              <View style={{ flexDirection: 'row' }}>
                <Image style={renderImageStyle('4%', '2%', 35, 35)}
                  source={require('./src/assets/img/Twitter_Sq-512.png')}></Image>
                <View>
                  <Text style={
                    renderTextStyle('#FFFFFF', '9%', '4%')}>Sign in with Twitter</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop: '10%',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <TouchableOpacity style={
              renderButtonShadow('red')}>
              <View style={{
                flexDirection: 'row',
                paddingLeft: '4%',
              }}>
                <Image
                  source={require('./src/assets/img/gmail.png')} style={renderImageStyle('4%', '3%', 30, 30)} />
                <View>
                  <Text style={
                    renderTextStyle('#FFFFFF', '9.5%', '4%')}>Sign in with Email</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={renderViewStyle()}>
            <TouchableOpacity style={
              renderButtonShadow('#00CD66')}>
              <View style={{
                flexDirection: 'row',
              }}>
                <Image
                  source={require('./src/assets/img/phone.png')}
                  style={renderImageStyle('5%', '3%', 30, 30)}
                ></Image>
                <View>
                  <Text style={
                    renderTextStyle('#FFFFFF', '9%', '6%')}>Sign in with Phone</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default App;
