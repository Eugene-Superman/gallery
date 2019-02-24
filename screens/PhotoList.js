import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { connect } from "react-redux";
import { getPhotosAsync } from '../redux/actions';

const mapStateToProps = state => ({
  allPhotos: state.items,
  isLoading: state.itemsIsLoading,

})
const mapDispatchToProps = {
  getPhotosAsync
};

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  static navigationOptions = {
    title: 'Photos',
  };

  componentDidMount() {
    if (this.props.allPhotos.length == 0) {
      let requestUrl = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
      this.props.getPhotosAsync(requestUrl);
    }
  }

  _onPress = () => {
    console.log("check");
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity onPress={this._onPress}>
      <View style={styles.item}>
        <Image
          style={styles.itemImage}
          source={{ uri: item.urls.small }}
        />
        <Text style={styles.itemText}>{item.user.name}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    if (this.props.hasErrored) {
      return (
        <View>
          <Text>Sorry! There was an error loading the items</Text>
        </View>
      )
    }
    if (this.props.isLoading) {
      return (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.allPhotos}
          renderItem={this._renderItem}
          keyExtractor={({ id }, index) => id}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList);