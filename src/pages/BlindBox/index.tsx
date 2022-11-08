import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import { Carousel, Button } from 'antd';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import BlindBoxResult from '../../assets/images/blindbox_result.png';
import coin1 from '../../assets/images/coin1.png';
import coin2 from '../../assets/images/coin2.png';
import coin3 from '../../assets/images/coin3.png';
import coin4 from '../../assets/images/coin4.png';
import styles from './index.module.less';

const Identity = () => {
  useEffect(()=>{
    const container = document.body;
    if (container != null) {
      container.className = 'blindbox_container';
    }
  }, []);
  const isMobile = () => {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  }
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const renderInfo = () => {
    return (
      <div className={styles.blindbox_view_info}>
        <div>
          <div className={styles.blindbox_view_info_logo}>
            <img
              src='https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F03087bf40ad162d99cceb8fcaea5a0e78b13cdb0.jpeg%3Ftoken%3D5b50aec78619ebf9158c666e8a73ef1f&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1664816400&t=4bc4bab899c142a89ce9f811ac9dd504'
              className={styles.blindbox_view_info_logo_img}
            />
          </div>
          <p className={styles.blindbox_view_info_author}>作者名称</p>
          <p className={styles.blindbox_view_info_intro}>作者简短的小介绍作者简短的小介绍作者简短的小介绍作者简短的小介绍</p>
          <p className={styles.blindbox_view_info_price}>$ <span>000.00</span></p>
          <div className={styles.blindbox_view_info_flex}>
            <Button className={styles.blindbox_view_info_action}>
            立即购买
            </Button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={`${styles.blindbox_view}`}>
      <div className={`${styles.blindbox_view_main}`}>
        <img
          src={BlindBoxResult}
          className={styles.blindbox_view_main_img}
        />
        <div className={styles.blindbox_view_main_actions}>
          <div className={styles.blindbox_view_main_actions_item}>
            <img
              src={coin1}
              className={styles.blindbox_view_main_actions_item_bg}
            />
            <p className={styles.blindbox_view_main_actions_item_text}>拍1次</p>
          </div>
          <div className={styles.blindbox_view_main_actions_item}>
            <img
              src={coin2}
              className={styles.blindbox_view_main_actions_item_bg}
            />
            <p className={styles.blindbox_view_main_actions_item_text}>拍5次</p>
          </div>
          <div className={styles.blindbox_view_main_actions_item}>
            <img
              src={coin3}
              className={styles.blindbox_view_main_actions_item_bg}
            />
            <p className={styles.blindbox_view_main_actions_item_text}>拍10次</p>
          </div>
          <div className={styles.blindbox_view_main_actions_item}>
            <img
              src={coin4}
              className={styles.blindbox_view_main_actions_item_bg}
            />
            <p className={styles.blindbox_view_main_actions_item_text}>拍50次</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Identity;