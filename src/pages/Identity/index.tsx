import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import { Carousel, Button } from 'antd';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import identityPng from '../../assets/images/Identity.jpg';
import identityBgPng from '../../assets/images/Identity/identity.jpg';
import styles from './index.module.less';

const Identity = () => {
  useEffect(()=>{
    const container = document.body;
    if (container != null) {
      container.className = 'identity_container';
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
      <div className={styles.identity_view_info}>
        <div>
          <div className={styles.identity_view_info_logo}>
            <img
              src='https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F03087bf40ad162d99cceb8fcaea5a0e78b13cdb0.jpeg%3Ftoken%3D5b50aec78619ebf9158c666e8a73ef1f&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1664816400&t=4bc4bab899c142a89ce9f811ac9dd504'
              className={styles.identity_view_info_logo_img}
            />
          </div>
          <p className={styles.identity_view_info_author}>作者名称</p>
          <p className={styles.identity_view_info_intro}>作者简短的小介绍作者简短的小介绍作者简短的小介绍作者简短的小介绍</p>
          <p className={styles.identity_view_info_price}>$ <span>000.00</span></p>
          <div className={styles.identity_view_info_flex}>
            <Button className={styles.identity_view_info_action}>
            立即购买
            </Button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={`${styles.identity_view}`}>
      {
        isMobile() &&
        renderInfo()
      }
      <div className={`${styles.identity_view_main} ${styles.identity_container}`}>
        <img
          src={identityBgPng}
          className={styles.identity_view_main_bg}
        />
        <img
          src={identityPng}
          className={styles.identity_view_main_img}
        />
        <Swiper
          slidesPerView={isMobile()? 3: 6}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.identity_view_main_mySwiper}
        >
          {
            [1,2,3,4,5,6,7,8,9,10].map((item:number)=>
              <SwiperSlide key={item}>
                <img
                  src='https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F03087bf40ad162d99cceb8fcaea5a0e78b13cdb0.jpeg%3Ftoken%3D5b50aec78619ebf9158c666e8a73ef1f&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1664816400&t=4bc4bab899c142a89ce9f811ac9dd504'
                  className={styles.identity_view_main_mySwiper_item}
                />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
      {
        !isMobile() &&
        renderInfo()
      }
    </div>
  )
}
export default Identity;