import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Image, Text, PixelRatio } from 'react-native';
import { Container, Content, Card, Body, Thumbnail, Footer, Button, Icon, FooterTab } from 'native-base';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Words from '../constants/Word';
import {setItemType} from '../action';

export class CustomDrawer extends Component {

  handleLogo = () => {
    this.props.navigation.navigate('Store');
    this.props.navigation.closeDrawer();
  }

  handleProductNavigation = (productName) =>{
    this.props.onDispatchSetItemType(productName);
    this.props.navigation.navigate('Product');
    this.props.navigation.closeDrawer();
  }

  render() {
    return (
      <Container style={{ backgroundColor: Colors.grey }}>
        <Content contentContainerStyle={{ flexDirection: 'column', }}>

          <Card transparent style={{ marginBottom: 30 }}>
            <ImageBackground resizeMode='center' source={require('../asset/images/promo.jpg')} style={{ width: undefined, height: undefined, }}>
              <TouchableOpacity onPress={() => this.handleLogo()}>
                <Thumbnail large source={require('../asset/images/logo.png')} />
              </TouchableOpacity>
            </ImageBackground>
          </Card>

          {/* this is the separator */}
          

          <Card transparent style={{ flex: 1, flexDirection: 'column' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              
              <TouchableOpacity onPress={()=> this.handleProductNavigation('Fruits')}>
                <View style={{ width: Math.round(Layout.window.width / 7), height: Math.round(Layout.window.width / 7), backgroundColor: Colors.lightGreen, flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius:5 }}>
                    <Image resizeMode='contain' source={require('../asset/images/carrot.png')} style={{width: Math.round(Layout.window.width / 20), height:Math.round(Layout.window.width / 20) }} />
                    <View style={{marginTop: 30}}>
                    <Text style={{fontSize: 15, color:Colors.white,}} >{ Words['French'].fruits }</Text>
                    </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> this.handleProductNavigation('Boucherie')}>
                <View style={{width: Math.round(Layout.window.width / 7), height: Math.round(Layout.window.width / 7), backgroundColor: Colors.meat, flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius:5 }}>
                    <Image source={require('../asset/images/meat.png')} style={{width: Math.round(Layout.window.width / 20), height:Math.round(Layout.window.width / 20) }} />
                    <View style={{marginTop: 30}}>
                    <Text style={{fontSize: 15, color:Colors.white,}} >{ Words['French'].boucherie }</Text>
                    </View>
                </View>
              </TouchableOpacity>
            </View>

          </Card>

          <Card transparent style={{ flex: 1, flexDirection: 'column' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <TouchableOpacity onPress={()=> this.handleProductNavigation('Boulangerie')}>
                <View style={{width: Math.round(Layout.window.width / 7), height: Math.round(Layout.window.width / 7) , backgroundColor: Colors.bread, flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius:5 }}>
                    <Image source={require('../asset/images/bread.png')} style={{width: Math.round(Layout.window.width / 20), height:Math.round(Layout.window.width / 20) }} />
                    <View style={{marginTop: 30}}>
                    <Text style={{fontSize: 15, color:Colors.white,}} >{ Words['French'].boulangerie }</Text>
                    </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> this.handleProductNavigation('Poissonnerie')}>
                <View style={{width: Math.round(Layout.window.width / 7), height: Math.round(Layout.window.width / 7) , backgroundColor: Colors.blue, flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius:5 }}>
                    <Image source={require('../asset/images/fish.png')} style={{width: Math.round(Layout.window.width / 20), height:Math.round(Layout.window.width / 20) }} />
                    <View style={{marginTop: 30}}>
                    <Text style={{fontSize: 15, color:Colors.white,}} >{ Words['French'].poissonerie }</Text>
                    </View>
                </View>
              </TouchableOpacity>

            </View>

          </Card>

          <Card transparent style={{ flex: 1, flexDirection: 'column' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity onPress={()=> this.handleProductNavigation('Alimentation')}>
                <View style={{width: Math.round(Layout.window.width / 7), height: Math.round(Layout.window.width / 7) , backgroundColor: Colors.alimentation, flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius:5 }}>
                    <Image source={require('../asset/images/wine-bottle.png')} style={{width: Math.round(Layout.window.width / 20), height:Math.round(Layout.window.width / 20) }} />
                    <View style={{marginTop: 30}}>
                    <Text style={{fontSize: 15, color:Colors.white,}} >{ Words['French'].Alimentation }</Text>
                    </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=> this.handleProductNavigation('NoFood')}>
                <View style={{width: Math.round(Layout.window.width / 7), height: Math.round(Layout.window.width / 7) , backgroundColor: Colors.noFood, flexDirection:'column', alignItems:'center', justifyContent:'center', borderRadius:5 }}>
                    <Image source={require('../asset/images/no-food.png')} style={{width: Math.round(Layout.window.width / 20), height:Math.round(Layout.window.width / 20) }} />
                    <View style={{marginTop: 30}}>
                    <Text style={{fontSize: 15, color:Colors.white,}} >{ Words['French'].noFood }</Text>
                    </View>
                </View>
              </TouchableOpacity>

            </View>

          </Card>

        </Content>

        <Footer>
          <FooterTab style={{backgroundColor: Colors.green}}>
            <Button>
              <Icon name= 'phone-classic' type='MaterialCommunityIcons' style={{color: Colors.white}} /> 
            </Button>
            <Button>
            
              <Icon name= 'ios-call-outline' style={{color: Colors.white}}/> 
            </Button>
            <Button>
              <Icon name= 'ios-map-outline' style={{color: Colors.white}}/> 
            </Button>
            <Button>
              <Icon name= 'logo-facebook' style={{color: Colors.white}}/> 
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  };
};

function mapStateToProps(state) {
  return {
      ProductName: state.ProductName
  }
}

function mapDispatchToProps(dispatch) {
  return {
      onDispatchSetItemType: (item) => dispatch(setItemType(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)
