import cx from 'classnames';
import React from 'react';

export default class LikeDislike extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like: {
        counter: 100,
        isClicked: false
      },
      dislike: {
        counter: 25,
        isClicked: false
      }
    };
  }

  handleLikeButtonClick = () => {
    const { like, dislike } = this.state;
    like.isClicked = !like.isClicked;
    if (like.isClicked) {
      like.counter++;
      if (dislike.isClicked) {
        this.handleDislikeButtonClick();
      }
    } else {
      like.counter--;
    }
    this.setState({ like });
  };

  handleDislikeButtonClick = () => {
    const { like, dislike } = this.state;
    dislike.isClicked = !dislike.isClicked;
    if (dislike.isClicked) {
      dislike.counter++;
      if (like.isClicked) {
        this.handleLikeButtonClick();
      }
    } else {
      dislike.counter--;
    }
    this.setState({ dislike });
  };

  render() {
    const { like, dislike } = this.state;
    return (
      <div>
        <div>
          <button
            className={cx('like-button', { liked: like.isClicked })}
            onClick={this.handleLikeButtonClick}
          >
            Like | <span className="likes-counter">{like.counter}</span>
          </button>
          <button
            className={cx('dislike-button', { disliked: dislike.isClicked })}
            onClick={this.handleDislikeButtonClick}
          >
            Like | <span className="dislikes-counter">{dislike.counter}</span>
          </button>
        </div>
        <style>{`
                .like-button, .dislike-button {
                    font-size: 1rem;
                    padding: 5px 10px;
                    color:   #585858;
                }

                .liked, .disliked {
                    font-weight: bold;
                    color: #1565c0;
                }
                .likes-counter, .dislikes-counter {

                }
                `}</style>
      </div>
    );
  }
}
