import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './RandomQuoteMachine.css';

import { Card, CardContent, CardActions, Button } from '@mui/material';

const RandomQuoteMachine = () => {
  const [quote, setQuote] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [loadQuote, setLoadQuote] = useState(false);

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = async () => {
    try {
      setLoadQuote(true);
      setErrorMessage('');

      const randomQuote = await axios.get('https://api.quotable.io/random');
      setQuote(randomQuote.data);
      setLoadQuote(false);
    } catch (error) {
      setErrorMessage(error.message);
      setLoadQuote(false);
    }
  };

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          {loadQuote ? (
            <div>
              <h5>Loading...</h5>
            </div>
          ) : quote.content ? (
            <div>
              <div className="quote-text">{quote.content}</div>
              <br />
              <div>
                <div className="author-text">~ {quote.author}</div>
              </div>
            </div>
          ) : (
            <p>{errorMessage}</p>
          )}
        </CardContent>

        <CardActions className="card-footer">
          <div>
            <button
              onClick={getRandomQuote}
              className="btn"
            >
              New Quote
            </button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default RandomQuoteMachine;
