import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            Derek G.
          </a>
          <div className='metadata'>
            <span className='date'>Today at 4:20pm</span>
          </div>
          <div className='text'>Yo, fuck this Daniel Wise kid. Straight trash.</div>
        </div>
      </div>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            John F.
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6:04pm</span>
          </div>
          <div className='text'>Heard he can't get past the buttcheeks. Probz true no DOUBT</div>
        </div>
      </div>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' src={faker.image.avatar()} />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            Lucas T.
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6:69pm</span>
          </div>
          <div className='text'>Worst part is... I heard he doesn't even burn bro...</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
