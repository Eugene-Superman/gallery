import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

import PropTypes from "prop-types";

class FullImage extends Component {
  constructor(props) {
    super(props);
    this.state = { imageUrl: this.props.navigation.state.params.imageUrl }
  }

  render() {
    return (
      <Image
        style={styles.fullImageStyles}
        source={{ uri: this.state.imageUrl }}
      />
    )
  }
}

FullImage.propTypes = {
  navigation: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  fullImageStyles: {
    flex: 1,
    resizeMode: 'cover',
  }
})

export default FullImage