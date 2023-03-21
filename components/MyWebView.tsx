import React, { useState, useRef, FC, Component } from 'react';
import { ActivityIndicator, View } from "react-native";
import AutoHeightWebView, { AutoHeightWebViewProps } from "react-native-autoheight-webview";

const MyWebView : FC<AutoHeightWebViewProps> = (props)=>{    
    return( 
        <View>
            <AutoHeightWebView
            {...props}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            setBuiltInZoomControls={false}
            setDisplayZoomControls={false}
            scrollEnabled={false}
            scalesPageToFit={true}
            onMessage={() => {}}
            viewportContent={'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}
            />
        </View>
    );
};

export default MyWebView;