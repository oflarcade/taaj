import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ScrollView, RefreshControl, ImageBackground } from 'react-native'
import { connect } from 'react-redux';
import Reactotron from 'reactotron-react-native'
import { Container, Content, Header, Left, Right, Body, Icon, List, ListItem, Button, Text, Card, Footer, FooterTab, CardItem, Form, Picker, Col } from 'native-base';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import CardColor from '../constants/CardColor';
import { DangerZone } from 'expo';
const { Localization } = DangerZone;

import Firebase from '../config/Firebase';
import { setListData, setItemData,setLanguage } from '../action';
import axios from 'axios';






export class MainScreen extends Component {

  state = { items: [], refreshing: false, selected: "key1", path: 'http://seedup.tn/promoapp/public/promo' }


  componentWillMount(){
    this.props.onDispatchSetLang();
    Expo.DangerZone.Localization.getCurrentLocaleAsync().then(res=>{
      Reactotron.log(res)
    })
  }

  componentDidMount() {
      Reactotron.log('language from store:',this.props.lang)
      this.pullData()
  }
  

  pullData = () => {
    this.setState({ refreshing: true })
    axios.get('http://seedup.tn/promoapp/public/promo')
      .then((response) => {
        //Reactotron.log(response.data)
        this.setState({ items: response.data, refreshing: false  })
      }).catch((err) => {
        Reactotron.log(err)
      })
  }


  handleNav = (name, location, price, uri) => {

    this.props.onDispatchSetItemData(name, location, price, uri);
    this.props.navigation.navigate('Item')
  }

  onValueChange(value) {
    this.setState({
      selected: value
    })
  }
  handleDrawer() {
    this.props.navigation.openDrawer()
  }

  noteSection(item) {
    if(item.remarque === null )
      return(
        <View>

        </View>
      )
     else if (item.remarque !== null ){
       return (
         <View style={{flex: 1, flexDirection:'row'}}>
            <Text style={{fontSize: 16, color:'white'}}>* </Text>
            <Text style={{fontSize: 15, color:'white'}}>{item.remarque}</Text>
         </View>
       )
     } 
  }

  cardRenderer(item) {

        switch(item.nomt){
          case 'reduction':{
            var urlImage = `http://seedup.tn/promoapp/public${item.image}`
            
            
          } return (
            
            <Card padder style={{ flex: 1, flexDirection: 'column', backgroundColor: CardColor[item.nomcat], }} >
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, }}>
              <Text style={{ fontSize: 18, color: 'white' }}>{item.nomcat}</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf:'center' }}>
              <Text style={{ fontSize: 18, color: 'white', marginLeft: 15 }} >{item.produit}</Text>
              <Image  source={{uri: urlImage}} style={{ width: Layout.window.widthS  / 7 , height: Layout.window.widthS / 7, marginRight: 45, marginBottom: 15, borderRadius: 10, marginLeft: 20 }} />
            </View>

            <View style={{ width: Layout.window.width, height: 1, backgroundColor: 'white', }} /> {/* white line */}

            <View style={{ flexDirection: 'row', }}>
              {this.noteSection(item)}
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <Text style={{ fontSize: 18, color: 'black', marginRight: 25, textDecorationLine:'line-through' }}> {item.ancienprix}/{item.unite}</Text>
              <Text style={{ fontSize: 18, color: 'white', }}> {item.nouveauprix}/{item.unite}</Text>
              
            </View>

          </Card>
          )
          case 'promotion libre':{
            var urlImage = `http://seedup.tn/promoapp/public${item.image}`
          } return (
            <Card padder style={{ flex: 1, flexDirection: 'column', backgroundColor: CardColor[item.nomcat], }} >
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, }}>
              <Text style={{ fontSize: 18, color: 'white' }}>{item.nomcat} </Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf:'center' }}>
              <View style={{flex: 1, flexDirection:'column', alignItems:'center'}}>
                <Text style={{ fontSize: 18, color: 'white', marginLeft: 15 }} >{item.produit}</Text>
                <Text style={{fontSize: 18, color: 'white', marginLeft: 15}}></Text>
              </View>
              <Image  source={{uri: urlImage}} style={{ width: Layout.window.widthS  / 7 , height: Layout.window.widthS / 7, marginRight: 45, marginBottom: 15, borderRadius: 10, marginLeft: 20 }} />
            </View>

            <View style={{ width: Layout.window.width, height: 1, backgroundColor: 'white', }} /> {/* white line */}

            <View style={{ flexDirection: 'row', }}>
              {this.noteSection(item)}
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <Text style={{ fontSize: 18, color: 'black',marginRight: 25, textDecorationLine:'line-through' }}> {item.ancienprix}/{item.unite}</Text>
              <Text style={{ fontSize: 18, color: 'white' }}>{item.nouveauprix}/{item.unite}</Text>
            </View>

          </Card>
          )
          case 'gratuite':{
            var urlImage = `http://seedup.tn/promoapp/public${item.image}`
          } return (
            <Card padder style={{ flex: 1, flexDirection: 'column', backgroundColor: CardColor[item.nomcat], }} >
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, }}>
              <Text style={{ fontSize: 18, color: 'white' }}>{item.nomcat}</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf:'center' }}>
              <Text style={{ fontSize: 18, color: 'white', marginLeft: 15 }} >{item.produit}</Text>
              <Image  source={{uri: urlImage}} style={{ width: Layout.window.widthS  / 7 , height: Layout.window.widthS / 7, marginRight: 45, marginBottom: 15, borderRadius: 10, marginLeft: 20 }} />
            </View>

            <View style={{ width: Layout.window.width, height: 1, backgroundColor: 'white', }} /> {/* white line */}

            <View style={{ flexDirection: 'row', }}>
              {this.noteSection(item)}
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <Text style={{ fontSize: 18, color: 'black', marginRight: 25, textDecorationLine:'line-through' }}> {item.ancienprix}/{item.unite}</Text>
              <Text style={{ fontSize: 18, color: 'white', }}> {item.nouveauprix}/{item.unite}</Text>
              
            </View>

          </Card>
          )
          case 'solde':{
            var urlImage = `http://seedup.tn/promoapp/public${item.image}`
          } return (
            <Card padder style={{ flex: 1, flexDirection: 'column', backgroundColor: CardColor[item.nomcat], }} >
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, }}>
              <Text style={{ fontSize: 18, color: 'white' }}>{item.nomcat}</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf:'center' }}>
              <Text style={{ fontSize: 18, color: 'white', marginLeft: 15 }} >{item.produit}</Text>
              <Image  source={{uri: urlImage}} style={{ width: Layout.window.widthS  / 7 , height: Layout.window.widthS / 7, marginRight: 45, marginBottom: 15, borderRadius: 10, marginLeft: 20 }} />
            </View>

            <View style={{ width: Layout.window.width, height: 1, backgroundColor: 'white', }} /> {/* white line */}

            <View style={{ flexDirection: 'row', }}>
              {this.noteSection(item)}
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <Text style={{ fontSize: 18, color: 'black', marginRight: 25, textDecorationLine:'line-through' }}> {item.ancienprix}/{item.unite}</Text>
              <Text style={{ fontSize: 18, color: 'white', }}> {item.nouveauprix}/{item.unite}</Text>
              
            </View>

          </Card>
          )
         case 'information':{
          var urlImage = `http://seedup.tn/promoapp/public${item.image}`
         } return (
          <Card padder style={{ flex: 1, flexDirection: 'column', backgroundColor: CardColor[item.nomcat], }} >
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10, }}>
              <Text style={{ fontSize: 18, color: 'white' }}>{item.nomcat}</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf:'center' }}>
              <Text style={{ fontSize: 18, color: 'white', marginLeft: 15 }} >{item.produit}</Text>
              <Image  source={{uri: urlImage}} style={{ width: Layout.window.widthS  / 7 , height: Layout.window.widthS / 7, marginRight: 45, marginBottom: 15, borderRadius: 10, marginLeft: 20 }} />
            </View>

            <View style={{ width: Layout.window.width, height: 1, backgroundColor: 'white', }} /> {/* white line */}

            <View style={{ flexDirection: 'row', }}>
              {this.noteSection(item)}
            </View>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <Text style={{ fontSize: 18, color: 'black', marginRight: 25, textDecorationLine:'line-through' }}> {item.ancienprix}/{item.unite}</Text>
              <Text style={{ fontSize: 18, color: 'white', }}> {item.nouveauprix}/{item.unite}</Text>
              
            </View>

          </Card>
         ) 
        }
  }



  render() {

    return (
      <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.pullData} />} >
      
        <Header style={{ backgroundColor: Colors.green, }}>
          <Left>
            <TouchableOpacity onPress={() => this.handleDrawer()}>
              <Icon name="ios-menu" style={{ color: Colors.white, fontSize: Math.round(Layout.window.width / 20), marginTop: 3, marginLeft: 5, }} />
            </TouchableOpacity>
          </Left>
          <Body style={{ flex: 1 }}>
            <Text style={{ fontSize: Math.round(Layout.window.width / 41  ), color: Colors.white }}>{this.props.headerTitle}</Text>
          </Body>
          <Right>
            <TouchableOpacity>
              <Form style={{ flexDirection: 'row', margin: 2 }}>

                <Picker note mode='dropdown' placeholder={<Icon name='language' type='Entypo' style={{ color: 'white' }} />} selectedValue={this.state.selected} onValueChange={this.onValueChange.bind(this)} itemTextStyle={{ color: 'black' }} textStyle={{ color: 'white' }} >
                  <Picker.Item label="Flamon" value="key0" style={{ color: 'white' }} />
                  <Picker.Item label="French" value="key1" style={{ color: 'white' }} />
                </Picker>
              </Form>
            </TouchableOpacity>
          </Right>
        </Header>
          <Image source={require('../asset/images/promo.jpg')} style={{ width: 320  , height: 200, }} />
        <Content padder>
          <List dataArray={this.state.items} renderRow={
            (item) => <ListItem itemDivider={false} style={{ flexDirection: 'column' }} key={item.id} onPress={() => this.handleNav(item.name, 'Belgique', item.price, item.image)}>
              {/* this is where we build our card here */}
              {this.cardRenderer(item)}

              
            </ListItem>
          }>
          </List>

          

        </Content>
      
      </ScrollView>
    )
  };
};

function mapStateToProps(state) {
  return {
    headerTitle: state.headerTitle,
    itemsList: state.itemsList,
    lang: state.lang
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDispatchSetListData: (list) => dispatch(setListData(list)),
    onDispatchSetItemData: (name, location, price, uri) => dispatch(setItemData(name, location, price, uri)),
    onDispatchSetLang: () => dispatch(setLanguage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
