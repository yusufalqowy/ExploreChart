import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Constants from 'expo-constants';
import AccordionView from './components/AccordionView';
import MyWebView from './components/MyWebView';
import RadioTag from './components/RadioTag';
import { useState } from 'react';
import AutoHeightWebView from 'react-native-autoheight-webview';

export default function App() {
  const [filterSalesTarget, setFilterSalesTarget] = useState("CV");
  const cvChartUrl = 'https://www.chartjs.org/samples/2.6.0/scales/gridlines-display.html';
  const lcvChartUrl = 'https://www.chartjs.org/samples/2.6.0/charts/pie.html';


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView overScrollMode='never'>
      <Text style={{fontSize:21, fontWeight:'bold', margin:8}}>Sample WebView</Text>
      <View style={{flexDirection:'row'}}>
                        <RadioTag
                            label="CV"
                            condition={filterSalesTarget === 'CV'}
                            onPress={() => setFilterSalesTarget('CV')}
                        />
                        <RadioTag
                            label="LCV"
                            condition={filterSalesTarget === 'LCV'}
                            onPress={() => setFilterSalesTarget('LCV')}
                        />
          </View>
          {filterSalesTarget === 'CV' ?
            <AutoHeightWebView
            scalesPageToFit={true}
            source={{
              uri: cvChartUrl,
            }}
            />
            :
            <AutoHeightWebView
            scalesPageToFit={true}
            source={{
              uri: lcvChartUrl,
            }}
            />
          }
      <AutoHeightWebView
      scalesPageToFit={true}
      source={{
        uri: 'https://www.chartjs.org/samples/2.6.0/charts/bar/horizontal.html',
      }}/>

      <AutoHeightWebView
      scalesPageToFit={true}
      source={{
        uri: 'https://www.chartjs.org/samples/2.6.0/charts/bar/horizontal.html',
      }}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    marginTop:Constants.statusBarHeight
  },
  cardNumber:{
    width:103,
    height:66,
    flexDirection:'column',
    alignContent:'flex-start',
    backgroundColor:'#F33053',
    borderRadius:8,
    padding:8
  }
});
