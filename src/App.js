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
        <div className="main-container">
          <Quote quote={this.state.quote} />
          <Button handleSearch={this.handleSearch} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
