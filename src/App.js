import React from 'react';
import { Quote, Button, Footer } from './components';
import { fetchData } from './api';
import anime from 'animejs';
import './App.scss';

class App extends React.Component {
  state = {
    quote: '',
  };

  async componentDidMount() {
    const { quote } = await fetchData();
    this.setState({ quote: `"${quote}"` });
  }

  handleHover = () => {
    anime({
      targets: '.button .div',
      translateX: 250,
    });
  };

  handleSearch = async () => {
    const { quote } = await fetchData();
    this.setState({ quote: `"${quote}"` });
  };

  render() {
    return (
      <div className="container">
        <div className="outer-container">
          <div className="main-container">
            <Quote quote={this.state.quote} />
          </div>
          <Button
            handleSearch={this.handleSearch}
            handleHover={this.handleHover}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
