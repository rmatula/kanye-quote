import React, { useState, useEffect } from 'react';
import { Quote, Button, Footer } from './components';
import { fetchData } from './api';
import anime from 'animejs';
import './App.scss';
const App = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    let tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 300,
    });

    tl.add({
      targets: '.quote-text',
      opacity: 1,
      translateY: -40,
    });
  }, [quote]);

  async function handleSearch() {
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
    setQuote(quote || '');
  }

  return (
    <div className="container">
      <div className="outer-container">
        <div className="main-container">
          <Quote quote={quote} />
        </div>
        <Button handleSearch={handleSearch} />
        <Footer />
      </div>
    </div>
  );
};

export default App;

//   async componentDidMount() {
//     const { quote } = await fetchData();
//     this.setState({ quote: `"${quote}"` });

//     let tl = anime.timeline({
//       easing: 'easeOutExpo',
//       duration: 600,
//     });

//     tl.add({
//       targets: '.quote-text',
//       opacity: 1,
//       translateY: -40,
//     });
//   }
