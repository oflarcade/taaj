import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native'
import { connect } from 'react-redux';
import { Card, CardItem, Body, Header, Content, Icon, Left, Right } from 'native-base';
import Colors from "../constants/Colors";
import Layout from '../constants/Layout';
export class ItemScreen extends Component {
  

  handleDrawer(){
    this.props.navigation.openDrawer();
  }
  render() {
    
    return (
      <View style={{flex: 1}} /* refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.pullData} /> } */>
        <Header style={{backgroundColor: Colors.green,}}>
          <Left>
            <TouchableOpacity onPress={()=> this.handleDrawer()}>
                <Icon name= "ios-menu" style={{color: Colors.white, fontSize: Math.round(Layout.window.width / 20), marginTop: 3, marginLeft: 5,  }} />
            </TouchableOpacity>
          </Left>
          <Body style={{flex: 1}}>
            <Text style={{ fontSize: Math.round(Layout.window.width / 20), color: Colors.white}}>{this.props.itemName}</Text>
          </Body>
          <Right>

          </Right>
        </Header>
        <Content padder>
          <Card transparent >
            <CardItem>
              <Body>
                <Image source={{ uri : this.props.itemUri}} style={{width: Layout.window.width, height: Layout.window.height / 2 }} />
              </Body>              
            </CardItem>
            <CardItem transparent>
            <Text>{this.props.itemLocation}</Text>
            </CardItem>
            <CardItem transparent>
            <Text>{this.props.itemPrice}</Text>
            </CardItem>
          </Card>
        </Content>
      </View>
    )
  };
};

function mapStateToProps(state){
    return {
        itemName: state.itemName,
        itemUri: state.itemUri,
        itemPrice: state.itemPrice,
        itemLocation: state.itemLocation,
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemScreen)
