import { useEffect, useState } from "react";
import { Button } from "antd";
import styles from "./index.module.less";
import casting from "../../assets/images/pic.png";
import shareIcon from "../../assets/images/share.png";
import useRequest from "../../utils/request.js";
import { createHashHistory } from "@remix-run/router";

const Mine = () => {
  const [data, setData] = useState<any>([]);

  const history = createHashHistory();

  const { doRequest, errors } = useRequest({
    onSuccess: (res: any) => {
      setData(res[0].nfts);
    },
  });

  useEffect(() => {
    const container = document.body;
    if (container != null) {
      container.className = "mine_container";
    }
    getNfts();
  }, []);

  const getNfts = async () => {
    await doRequest('/user/list/21221',"get",{});
  };

  const onEdit = (item:any)=>{
    history.push(`/page/unique/${item.id}`);
    window.location.reload();
  }

  return (
    <div className={styles.mine_view}>
      <h2 className={styles.mine_view_title}>
        <span>铸造</span>
        你的NFT
      </h2>
      <p className={styles.mine_view_desc}>
        您如果想让您的NFT独一无二，请选择“独特款”；您如果想将一件NFT多次售出，请选择“限量款”
      </p>
      <div className={styles.mine_view_casting}>
        <div className={styles.mine_view_casting_item}>
          <img src={casting} className={styles.mine_view_casting_item_img} />
          <div className={styles.mine_view_casting_item_flex}>
            <Button className={styles.mine_view_casting_item_action}>
              铸造独特款 NFT
            </Button>
          </div>
        </div>
        <div className={styles.mine_view_casting_item}>
          <img src={casting} className={styles.mine_view_casting_item_img} />
          <div className={styles.mine_view_casting_item_flex}>
            <Button className={styles.mine_view_casting_item_action}>
              铸造限量款 NFT
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.mine_view_nft}>
        <h3 className={styles.mine_view_nft_title}>我的NFT</h3>
        <ul className={styles.mine_view_nft_list}>
          {
            data.map((item:any)=><li className={styles.mine_view_nft_list_item}>
              <img
                src={item.logo}
                className={styles.mine_view_nft_list_item_img}
              />
              <div className={styles.mine_view_nft_list_item_action}>
                <Button className={styles.mine_view_nft_list_item_action_edit} onClick={()=>{
                  onEdit(item);
                }}>
                  编辑
                </Button>
                <img
                  src={shareIcon}
                  className={styles.mine_view_nft_list_item_action_share}
                />
              </div>
            </li>)
          }
          
        </ul>
      </div>
    </div>
  );
};
export default Mine;
