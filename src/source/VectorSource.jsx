import React from 'react';
import PropTypes from 'prop-types';

class VectorSource extends React.Component {

  static displayName = 'VectorSource';

  componentWillMount() {
    this.map = this.props.map;

    if (this.props.isLoaded && !this.props.source.nocache) {
      return;
    }

    this.addSource();
  }

  componentWillUnmount() {
    if (this.props.source.nocache) {
      this.map.removeSource(this.props.source.id);
    }
  }

  addSource = () => {
    if (this.map.getSource(this.props.source.id)) {
      this.map.removeSource(this.props.source.id);
    }

    this.map.addSource(this.props.source.id, {
      type: 'vector',
      tiles: this.props.source.tiles,
    });

    this.props.onLoaded(this.map.getStyle().sources);
  };

  updateSource = (template) => {
    const newStyle = this.map.getStyle();
    newStyle.sources[this.props.source.id].tiles = [template];
    this.map.setStyle(newStyle);
  };

  render() {
    return null;
  }
}

VectorSource.propTypes = {
  map: PropTypes.shape({
    mapObject: PropTypes.object,
  }).isRequired,
  source: PropTypes.shape({
    tiles: PropTypes.array,
    id: PropTypes.string,
  }).isRequired,
  onLoaded: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool,
  nocache: PropTypes.bool,
};

export default VectorSource;
