// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  const [username, setUsername] = useState('parkhacker');
  const [message, setMessage] = useState('');
  const [tweets, setTweets] = useState(dummyTweets);

  const handleButtonClick = (event) => {
    const tweet = {
      id: tweets.length + 1,
      username: username,
      picture: 'https://randomuser.me/api/portraits/men/98.jpg',
      content: message,
      createdAt: new Date().toLocaleDateString('ko-kr'),
      updatedAt: new Date().toLocaleDateString('ko-kr')
    };
    
    setTweets([tweet, ...tweets]);
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeMsg = (event) => {
    setMessage(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  defaultValue="parkhacker"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  value={username}
                  onChange={handleChangeUser}
                ></input>
                <textarea className='tweetForm__input--message'
                value={message} 
                placeholder='your tweet message here...'
                onChange={handleChangeMsg}>
                </textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {'total: ' + tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button className='tweetForm__submitButton'
              onClick={handleButtonClick}>tweet!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {tweets.map(
          (tw) => <Tweet tweet={tw} />
        )};
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
