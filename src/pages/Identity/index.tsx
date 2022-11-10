import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Carousel, Button } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import identityPng from "../../assets/images/Identity.jpg";
import identityBgPng from "../../assets/images/Identity/identity.jpg";
import styles from "./index.module.less";
import useRequest from "../../utils/request.js";

let doRequestType = 0;
const Identity = () => {
  const [data, setData] = useState<any>([]);
  const [current, setCurrent] = useState<any>(null);
  const [author, setAuthor] = useState<any>(null);

  const { doRequest, errors } = useRequest({
    onSuccess: (res: any) => {
      switch (doRequestType) {
        case 0:
          setData(res);
          setCurrent(res[0]);
          doRequestType = 1;
          getAuthor(res[0].id);
          break;
        case 1:
          {
            console.log("current", current);
            setAuthor(res);
          }
          break;
      }
    },
  });

  useEffect(() => {
    const container = document.body;
    if (container != null) {
      container.className = "identity_container";
    }
    getNfts();
  }, []);

  const getNfts = async () => {
    await doRequest("/nft/list", "get", {});
  };

  const getAuthor = async (id: any) => {
    await doRequest(`/user/nft/${id}`, "get", {});
  };

  const isMobile = () => {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  };
  const onChange = async (swiper: any) => {
    console.log(swiper);
    doRequestType = 1;
    const _item = data[swiper.activeIndex];
    setCurrent(_item);
    await getAuthor(_item.id);
  };
  const renderInfo = () => {
    return (
      <div className={styles.identity_view_info}>
        <div>
          {author !== null && (
            <>
              <div className={styles.identity_view_info_logo}>
                <img
                  src={author.logo ? author.logo : ""}
                  className={styles.identity_view_info_logo_img}
                />
              </div>
              <p className={styles.identity_view_info_author}>{author.name}</p>
              <p className={styles.identity_view_info_intro}>
                {author.description}
              </p>
            </>
          )}
          <p className={styles.identity_view_info_price}>
            ${current !== null && <span>{current.price}</span>}
          </p>
          <div className={styles.identity_view_info_flex}>
            <Button className={styles.identity_view_info_action}>
              立即购买
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const onSwiper = (swiper: any) => {
    console.log(swiper);
  };
  const onClickItem = async (item: any) => {
    doRequestType = 1;
    setCurrent(item);
    await getAuthor(item.id);
  };
  return (
    <div className={`${styles.identity_view}`}>
      {isMobile() && renderInfo()}
      <div
        className={`${styles.identity_view_main} ${styles.identity_container}`}
      >
        <img src={identityBgPng} className={styles.identity_view_main_bg} />
        {current !== null && (
          <img src={current.logo} className={styles.identity_view_main_img} />
        )}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          // loop={true}
          // loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          onSwiper={onSwiper}
          onSlideChange={onChange}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={styles.identity_view_main_mySwiper}
        >
          {data.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <img
                src={item.logo}
                className={styles.identity_view_main_mySwiper_item}
                onClick={() => {
                  onClickItem(item);
                }}
                style={{
                  cursor: "pointer",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {!isMobile() && renderInfo()}
    </div>
  );
};
export default Identity;
