import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Constants from 'expo-constants';
import AccordionView from './components/AccordionView';
import MyWebView from './components/MyWebView';
import RadioTag from './components/RadioTag';
import { useState } from 'react';

export default function App() {
  const [filterSalesTarget, setFilterSalesTarget] = useState("CV");
  const cvChartUrl = 'https://apps-stg.isuzu.astra.co.id:8082/dashboard/salestargetdeliveredunit/cv/a1a0f0c1-552e-4edb-be02-ea79645555e6';
  const lcvChartUrl = 'https://apps-stg.isuzu.astra.co.id:8082/dashboard/salestargetdeliveredunit/lcv/293218b4-6e20-4d51-88f5-3fd25d38e802';


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView overScrollMode='never'>
      <Text style={{fontSize:21, fontWeight:'bold', margin:8}}>Sample WebView</Text>
      <AccordionView title='Sales Target & Delivery Unit By Model'>
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
            <MyWebView
            source={{
              uri: cvChartUrl,
            }}
            />
            :
            <MyWebView
            source={{
              uri: lcvChartUrl,
            }}
            />
          }
        
      </AccordionView>
      <AccordionView title='Ringkasan Aktivitas'>
        <MyWebView
            source={{
              uri: 'https://apps-stg.isuzu.astra.co.id:8082/dashboard/home/summaryactivity/bed9b7cf-47a7-485a-b112-cf905cfd7122',
            }}
          />
      </AccordionView>

      <AccordionView title='Ringkasan Alasan Lead Hilang'>
        <MyWebView
            source={{
              uri: 'https://apps-stg.isuzu.astra.co.id:8082/dashboard/droppedlead/3249cbe8-6642-43d8-a577-aeda2d00c715',
            }}
          />
      </AccordionView>
      <AccordionView title='Test Loading'>
        <MyWebView
            source={{
              uri: 'https://www.speedtest.net',
            }}
          />
      </AccordionView>
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
