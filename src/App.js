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

    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 600,
    });

    tl.add({
      targets: '.quote-text',
      opacity: 1,
      translateY: -40,
    });
  }

  componentDidUpdate() {
    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 300,
    });

    tl.add({
      targets: '.quote-text',
      opacity: 1,
      translateY: -40,
    });
  }

  handleSearch = async () => {
    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 300,
    });

    tl.add({
      targets: '.quote-text',
      opacity: 0,
      translateY: 40,
    });

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
          <Button handleSearch={this.handleSearch} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
