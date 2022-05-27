import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

 class Contact extends Component {

     static navigationOptions = {
         title: 'Contact Us'
     };

     render() {

         return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card title="Contact Information">
                 <Text>3500 Posner Blvd #1122</Text>
                 <Text>Davenport, Fl 33837</Text>
                 <Text style={{marginBottom: 10}}>U.S.A.</Text>
                 <Text>Phone: 1-917-274-7592</Text>
                 <Text>Email: muvabeautybar817@gmail.com</Text>
                 </Card>
                </Animatable.View>
            </ScrollView>
         );
     }
 }

 export default Contact; 