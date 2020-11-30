import React from 'react';
import './SeriesView.css';

class SeriesView extends React.Component {
    constructor() {
      super();
      this.state = {}
    }

    componentDidMount() {

    }

    render() {
     return (
        <div className="scroll-bar">
          <div className="nft-series-item shadow"/>
          <div className="nft-series-item shadow"/>
          <div className="nft-series-item shadow"/>
          <div className="nft-series-item shadow"/>
          <div className="nft-series-item shadow"/>
          <div className="nft-series-item shadow"/>
          <div className="nft-series-item shadow"/>
          <div className="nft-series-item shadow"/>
          <div className="nft-series-item shadow"/>
          <div className="nft-series-item shadow"/>
          <div className="nft-series-item shadow"/>
          <div className="nft-series-item shadow"/>
        </div>
     );
    }
  }
export default SeriesView;