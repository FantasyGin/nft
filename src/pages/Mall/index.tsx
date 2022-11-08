import { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Select,
  Carousel
} from 'antd';
import {
  SearchOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import styles from './index.module.less';
const Author = () => {
  const [keyword, setKeyword] = useState<string>('');
  const navigate = useNavigate()
  useEffect(()=>{
    const container = document.body;
    if (container != null) {
      container.className = 'author_container';
    }
  });
  const isMobile = () => {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  }
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div className={styles.mall_view}>
      <div className={styles.mall_view_banner}>
        <Carousel
          autoplay={true}
          afterChange={onChange}
        >
          <div>
            <img
              className={styles.mall_view_banner_item}
              src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01aa175a26186ea801216e8dc22fcd.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670242932&t=73decf26a0056749f9897e82c9deb80f'
            />
          </div>
          <div>
            <img
              className={styles.mall_view_banner_item}
              src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e669572bfe806ac725381234430c.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670242932&t=73dc57065682357d4b8871793d9ed8d1'
            />
          </div>
          <div>
            <img
              className={styles.mall_view_banner_item}
              src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01143955b4f64c6ac725ca50e00c50.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670242932&t=2042c36371af34b78f05eaa7ac9be19d'
            />
          </div>
        </Carousel>
      </div>
      <div className={styles.mall_view_filter}>
        <h3 className={styles.mall_view_filter_title}>热门投标</h3>
        <div className={styles.mall_view_filter_search}>
          <SearchOutlined
            className={styles.mall_view_filter_search_icon}
            color='#ffffff'
          />
          <Input
            className={styles.mall_view_filter_search_value}
            placeholder='搜索'
            value={keyword}
            onInput={(e:any)=>{onChange(e)}}
          />
        </div>
      </div>
      <div className={styles.mall_view_list}>
        {
          [1,2,3,4,5,6,7].map(item=>
            <div className={styles.mall_view_list_item} key={item}>
              <img
                className={styles.mall_view_list_item_img}
                src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201312%2F09%2F20131209200924_WuViF.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670246752&t=83d8e65491fd6f44766deea29a4dcf5b'
              />
              <div className={styles.mall_view_list_item_info}>
                <div className={styles.mall_view_list_item_info_detail}>
                  <span className={styles.mall_view_list_item_info_detail_name}># 666008 NFT name</span>
                  <span className={styles.mall_view_list_item_info_detail_rate}>0.12%</span>
                </div>
                <div className={styles.mall_view_list_item_info_desc}>DOOOFJUCNUDOA</div>
                <div className={styles.mall_view_list_item_info_footer}>
                  <Button className={styles.mall_view_list_item_info_footer_action}>购买</Button>
                </div>
              </div>
            </div>  
          )
        }
      </div>
    </div>
  )
}
export default Author;