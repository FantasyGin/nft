import { useEffect, useState } from 'react';
import {
  Button
} from 'antd';
import styles from './index.module.less';
import casting from '../../assets/images/pic.png';
import shareIcon from '../../assets/images/share.png';

const Mine = () => {
  useEffect(()=>{
    const container = document.body;
    if (container != null) {
      container.className = 'mine_container';
    }
  }, []);
  return (
    <div className={styles.mine_view}>
      <h2 className={styles.mine_view_title}>
        <span>铸造</span>
        你的NFT
      </h2>
      <p className={styles.mine_view_desc}>您如果想让您的NFT独一无二，请选择“独特款”；您如果想将一件NFT多次售出，请选择“限量款”</p>
      <div className={styles.mine_view_casting}>
        <div className={styles.mine_view_casting_item}>
          <img
            src={casting}
            className={styles.mine_view_casting_item_img}
          />
          <div className={styles.mine_view_casting_item_flex}>
            <Button className={styles.mine_view_casting_item_action}>铸造独特款 NFT</Button>
          </div>
        </div>
        <div className={styles.mine_view_casting_item}>
          <img
            src={casting}
            className={styles.mine_view_casting_item_img}
          />
          <div className={styles.mine_view_casting_item_flex}>
            <Button className={styles.mine_view_casting_item_action}>铸造限量款 NFT</Button>
          </div>
        </div>
      </div>
      <div className={styles.mine_view_nft}>
        <h3 className={styles.mine_view_nft_title}>我的NFT</h3>
        <ul className={styles.mine_view_nft_list}>
          <li className={styles.mine_view_nft_list_item}>
            <img
              src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F14200158891%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667207981&t=bc7d815dc5444c36e83bc804d79906c4'
              className={styles.mine_view_nft_list_item_img}
            />
            <div className={styles.mine_view_nft_list_item_action}>
              <Button className={styles.mine_view_nft_list_item_action_edit}>编辑</Button>
              <img
                src={shareIcon}
                className={styles.mine_view_nft_list_item_action_share}
              />
            </div>
          </li>
          <li className={styles.mine_view_nft_list_item}>
            <img
              src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F14200158891%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667207981&t=bc7d815dc5444c36e83bc804d79906c4'
              className={styles.mine_view_nft_list_item_img}
            />
            <div className={styles.mine_view_nft_list_item_action}>
              <Button className={styles.mine_view_nft_list_item_action_edit}>编辑</Button>
              <img
                src={shareIcon}
                className={styles.mine_view_nft_list_item_action_share}
              />
            </div>
          </li>
          <li className={styles.mine_view_nft_list_item}>
            <img
              src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F14200158891%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667207981&t=bc7d815dc5444c36e83bc804d79906c4'
              className={styles.mine_view_nft_list_item_img}
            />
            <div className={styles.mine_view_nft_list_item_action}>
              <Button className={styles.mine_view_nft_list_item_action_edit}>编辑</Button>
              <img
                src={shareIcon}
                className={styles.mine_view_nft_list_item_action_share}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Mine;