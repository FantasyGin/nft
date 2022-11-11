import { useEffect, useState } from "react";
import { Button, Input, Select, Carousel } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.less";
import useRequest from "../../utils/request.js";
import Authors from './authors'
let doRequestType = 0;
const Author = () => {
  const [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();
  const [data, setData] = useState<any>([]);
  

  const { doRequest, errors } = useRequest({
    onSuccess: (res: any) => {
      setData(res);
    },
  });

  useEffect(() => {
    const container = document.body;
    if (container != null) {
      container.className = "author_container";
    }
    getNfts();
  }, []);

  const getNfts = async () => {
    await doRequest("/nft/list", "get", {});
  };

  

  const isMobile = () => {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  };
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const onSearch = async (value:any) =>{
    console.log(value);
    await doRequest(`/nft/search/${value}`,'get',{})
  }

  return (
    <div className={styles.mall_view}>
      <div className={styles.mall_view_banner}>
        <Carousel autoplay={true} afterChange={onChange}>
          <div>
            <img
              className={styles.mall_view_banner_item}
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01aa175a26186ea801216e8dc22fcd.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670242932&t=73decf26a0056749f9897e82c9deb80f"
            />
          </div>
          <div>
            <img
              className={styles.mall_view_banner_item}
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e669572bfe806ac725381234430c.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670242932&t=73dc57065682357d4b8871793d9ed8d1"
            />
          </div>
          <div>
            <img
              className={styles.mall_view_banner_item}
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01143955b4f64c6ac725ca50e00c50.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670242932&t=2042c36371af34b78f05eaa7ac9be19d"
            />
          </div>
        </Carousel>
      </div>
      <div>
        <h3 className={styles.mall_view_filter_title}>最佳作者</h3>
        <Authors />
      </div>
      <div className={styles.mall_view_filter}>
        <h3 className={styles.mall_view_filter_title}>热门投标</h3>
        <div className={styles.mall_view_filter_search}>
          <SearchOutlined
            className={styles.mall_view_filter_search_icon}
            color="#ffffff"
          />
          <Input
            className={styles.mall_view_filter_search_value}
            placeholder="搜索"
            defaultValue={keyword}
            onInput={(e: any) => {
              onSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.mall_view_list}>
        {data.map((item: any) => (
          <div className={styles.mall_view_list_item} key={item}>
            <img className={styles.mall_view_list_item_img} src={item.logo} />
            <div className={styles.mall_view_list_item_info}>
              <div className={styles.mall_view_list_item_info_detail}>
                <span className={styles.mall_view_list_item_info_detail_name}>
                  # {item.price} {item.name}
                </span>
                {/* <span className={styles.mall_view_list_item_info_detail_rate}>0.12%</span> */}
              </div>
              <div className={styles.mall_view_list_item_info_desc}>
                {item.description}
              </div>
              <div className={styles.mall_view_list_item_info_footer}>
                <Button
                  className={styles.mall_view_list_item_info_footer_action}
                >
                  购买
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Author;
