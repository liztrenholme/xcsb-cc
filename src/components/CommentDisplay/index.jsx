import React from 'react';
// import './display.css';
import SingleComment from '../SingleComment';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import PropTypes from 'prop-types';

const CommentDisplay = (props) => {
  console.log('props.comments', props.comments)
  return (
    <div className='comment-display' data-testid="display-box-test">
      {props.comments.length ?
       <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {props.comments.map(comment => <SwiperSlide><SingleComment comment={comment} /></SwiperSlide>)}
    </Swiper> : 'null'}
    </div>
  );
};

// CommentDisplay.propTypes = {
//   color: PropTypes.string
// };

export default CommentDisplay;