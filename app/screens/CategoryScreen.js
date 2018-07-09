import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux';
import { Container, Content, Header, Left, Right, Body, Card, CardItem, List, ListItem, Icon   } from 'native-base';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export class CategoryScreen extends Component {

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: Colors.green}}>
          <Left>
            <TouchableOpacity>
            <Icon name= "ios-menu" style={{color: Colors.white, fontSize: Math.round(Layout.window.width / 20), marginTop: 3, marginLeft: 5,  }} />
            </TouchableOpacity>
          </Left>
          <Body>
                <Text style={{ fontSize: 22, color: Colors.white}}>{this.props.productName}</Text>
          </Body>
          <Right></Right>
        </Header>
        <Content>

        </Content>
      </Container>
    )
  };
};

function mapStateToProps(state){
    return {
      productName: state.productName,
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen)
