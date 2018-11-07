import React from 'react';

export class Loading extends React.Component {
  render() {
    return (
      <div className="landing-loader-div">
        <img src="https://media.giphy.com/media/Vov4SPSPhxl8k/giphy.gif" alt="loading" />
      </div>
    );
  }
}

export default Loading;
