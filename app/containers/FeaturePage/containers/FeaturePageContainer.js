import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';
import FeatureComponent from '../components/FeatureComponent';
import LikeDislike from '../components/LikeDislike';

console.log('--Load Feature page --')

export default class FeaturePage extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="feature-page">
        <Helmet>
          <title>Feature Page 1</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <h1>Features11</h1>
        <button onClick={e => {
          this.props.history.push('/')
        }}>Back to home</button>
        <LikeDislike />
        <i>and much more...</i>
      </div>
    );
  }
}
