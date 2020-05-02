import React from 'react';
import './css/main.css';
import { Quote, Button, Footer } from './components';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    quote: '',
  };

  async componentDidMount() {
    const { quote } = await fetchData();

    this.setState({ quote: `"${quote}"` });
  }

  handleSearch = async () => {
    const { quote } = await fetchData();
    this.setState({ quote: `"${quote}"` });
  };

  render() {
    return (
      <React.Fragment>
        <div className="outer-container">
          <div className="main-container">
            <Quote quote={this.state.quote} />
          </div>
          <Button handleSearch={this.handleSearch} />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
