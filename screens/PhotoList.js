import React, {Component} from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class PhotoList extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  static navigationOptions = {
    title: 'Photos',
  };

  componentDidMount() {
    return fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  _onPress = () => {
    console.log("проверка")
  }

  _renderItem = ({item}) => (
    <TouchableOpacity onPress={this._onPress}>
      <View style={styles.item} onPress={this._onPressItem}>        
        <Image
          style={styles.itemImage}
          source={{uri: item.urls.small}}
        />
        <Text style={styles.itemText}>{item.user.name}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activityIndicator}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this._renderItem}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1, 
    padding: 20,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
    marginBottom: 5,
  },
  itemImage: {
    width: 100, 
    height: 100,
  },
  itemText: {
    paddingLeft: 15,  
    fontSize: 20,
  }
})