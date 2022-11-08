import { useEffect, useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Upload,
  Input,
  Button,
  Select
} from 'antd';
import styles from './index.module.less';
import uploadIcon from '../../assets/images/upload.png';
const { Option } = Select;
const { TextArea } = Input;
const Casting = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  useEffect(()=>{
    const container = document.body;
    if (container != null) {
      container.className = 'casting_container';
    }
  }, []);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const selectAfter = (
    <Select defaultValue="TYCHE" className="select-before">
      <Option value="TYCHE">TYCHE</Option>
      <Option value="TYCHE">TYCHE</Option>
    </Select>
  );
  const uploadButton = (
    <div>
      <img
        src={uploadIcon}
        style={{
          width: '63px',
          height: '63px'
        }}
      />
    </div>
  );

  const uploadAction = (
    <div>
      <img
        src={uploadIcon}
        style={{
          width: '36px',
          height: '36px'
        }}
      />
    </div>
  );
  const isMobile = () => {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  }
  return (
    <div className={styles.casting_view}>
      <h3 className={styles.casting_view_title}>铸造</h3>
      <div className={styles.casting_view_sub}>
        <p className={styles.casting_view_desc}>数量不同的NFT</p>
      </div>
      <h4 className={styles.casting_view_subtitle}>上传文件</h4>
      <div className={styles.casting_view_list}>
        {
          [1,2,3,4,5,6,7,8].map((item:number)=>
            <div className={styles.casting_view_list_item} key={item}>
              <Upload
                name="avatar"
                listType="picture-card"
                className={styles['avatar-uploades']}
                showUploadList={false}
                action=""
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
              <Input
                placeholder='NFT 名称'
                className={styles.casting_view_list_item_name}
              />
              <Input
                placeholder='数量'
                className={styles.casting_view_list_item_num}
              />
            </div>
          )
        }
      </div>
      <div className={styles.casting_view_main}>
        <div className={styles.casting_view_main_control}>
          <div className={styles.casting_view_main_control_left}>
            <div className={styles.casting_view_main_control_item}>
              <h4 className={styles.casting_view_main_control_item_title}>出售价格</h4>
              {/* <Select
                placeholder='请输入该商品的出售价格'
                className={styles.casting_view_main_control_item_value}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </Select> */}
              <Input 
                placeholder='请输入该商品的出售价格'
                className={styles.casting_view_main_control_item_value}
                addonAfter={selectAfter}
                defaultValue="mysite" />
            </div>
            <div className={styles.casting_view_main_control_item}>
              <h4 className={styles.casting_view_main_control_item_title}>NFT 名称</h4>
              <Input
                placeholder='请输入NFT的名称'
                className={styles.casting_view_main_control_item_value}
              />
            </div>
            <div className={styles.casting_view_main_control_item}>
              <h4 className={styles.casting_view_main_control_item_title}>NFT 介绍</h4>
              <TextArea
                placeholder='请输入NFT的介绍'
                className={styles.casting_view_main_control_item_textarea}
              />
            </div>
            {
              isMobile() &&
              <div className={styles.casting_view_main_control_item}>
                <h4 className={styles.casting_view_main_control_item_title}>上传封面</h4>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className={styles['avatar-uploader']}
                  showUploadList={false}
                  action=""
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadAction}
                </Upload>
                <p className={styles.casting_view_main_control_item_tip}>( 支持JPEG、PNG图片文件，文件大小 2MB以内 )</p>
              </div>
            }
            <Button className={styles.casting_view_main_control_action}>立即铸造</Button>
          </div>
          {
            !isMobile() &&
            <div className={styles.casting_view_main_control_right}>
              <div className={styles.casting_view_main_control_item}>
                <h4 className={styles.casting_view_main_control_item_title}>上传封面</h4>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className={styles['avatar-uploader']}
                  showUploadList={false}
                  action=""
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadAction}
                </Upload>
                <p className={styles.casting_view_main_control_item_tip}>( 支持JPEG、PNG图片文件，文件大小 2MB以内 )</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
export default Casting;