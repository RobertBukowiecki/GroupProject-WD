import React from 'react';
import styles from './FeaturedSection.module.scss';
import PropTypes from 'prop-types';
import HotDealProductBox from '../HotDealProductBox/HotDealProductBoxContainer';
import Swipeable from '../../common/Swipeable/Swipeable';

const FeaturedSection = hotDeals => {
  let indexOfItem = 2;
  const activeItem = hotDeals.hotDeals[indexOfItem];
  const increment = indexOfItem++;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col ' + styles.hotDeals}>
            <Swipeable className='swipe' onSwipedRight={increment}>
              <HotDealProductBox {...activeItem} />
            </Swipeable>
          </div>
          <div className={'col ' + styles.slide}>
            <div className={styles.slider}>
              <img
                src='https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt='sofa'
              ></img>
              <div className={styles.shopNow}></div>
              <div className={styles.text}>
                <span>
                  INDOOR <b>FURNITURE</b>
                </span>
                <span>SAVE UP TO 50% OF ALL FURNITURE</span>
              </div>
              <div>
                <a className={styles.button}>SHOP NOW</a>
              </div>
            </div>
            <div className={'row ' + styles.buttons}>
              <div className={'col ' + styles.buttonLeft}>{'<'}</div>
              <div className={'col ' + styles.buttonRight}>{'>'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// hotDeals.hotDealsPropTypes.arrayOf(
//   PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//     category: PropTypes.string,
//     price: PropTypes.number,
//     stars: PropTypes.number,
//     promo: PropTypes.string,
//     newFurniture: PropTypes.bool,
//     favorite: PropTypes.bool,
//     hotDeals: PropTypes.node,
//   })
// );

FeaturedSection.defaultProps = {
  hotDeals: [],
};

export default FeaturedSection;
