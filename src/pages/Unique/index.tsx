import { useEffect, useState } from 'react';
import {
  Input,
  Select,
  Upload,
  message,
  Button
} from 'antd';

import { InboxOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import uploadIcon from '../../assets/images/upload.png';
import styles from './index.module.less';

const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

const Unique = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  useEffect(()=>{
    const container = document.body;
    if (container != null) {
      container.className = 'unique_container';
    }
  }, []);

  const uploadButton = (
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
  const selectAfter = (
    <Select defaultValue=".com" className="select-after">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  return (
    <div className={styles.unique_view}>
      <h3 className={styles.unique_view_title}>铸造</h3>
      <p className={styles.unique_view_desc}>独一无二的NFT</p>
      <div className={styles.unique_view_main}>
        <div className={styles.unique_view_main_control}>
          <div className={styles.unique_view_main_control_item}>
            <h4 className={styles.unique_view_main_control_item_title}>上传文件</h4>
            <Dragger {...props} className={styles.unique_view_main_control_item_upload}>
              <p className={styles.unique_view_main_control_item_upload_text}>
                选择文件
              </p>
              <p className={styles.unique_view_main_control_item_upload_label}>（ PNG,JPEG,GIF，ZIP，最大500MB ）</p>
            </Dragger>
          </div>
          <div className={styles.unique_view_main_control_item}>
            <h4 className={styles.unique_view_main_control_item_title}>上传封面</h4>
            <Upload
              name="avatar"
              listType="picture-card"
              className={styles['avatar-uploader']}
              showUploadList={false}
              action=""
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
            <p className={styles.unique_view_main_control_item_tip}>( 支持JPEG、PNG图片文件，文件大小 2MB以内 )</p>
          </div>
        </div>
        <div className={styles.unique_view_main_control}>
          <div className={styles.unique_view_main_control_item}>
            <h4 className={styles.unique_view_main_control_item_title}>出售价格</h4>
            <Input
              className={styles.unique_view_main_control_item_value}
            />
          </div>
        </div>
        <div className={styles.unique_view_main_control}>
          <div className={styles.unique_view_main_control_item}>
            <h4 className={styles.unique_view_main_control_item_title}>NFT 名称</h4>
            <Input
              className={styles.unique_view_main_control_item_value}
              placeholder='请输入NFT的名称'
              addonAfter={selectAfter}
            />
          </div>
        </div>
        <div className={styles.unique_view_main_control}>
          <div className={styles.unique_view_main_control_item}>
            <h4 className={styles.unique_view_main_control_item_title}>NFT 介绍</h4>
            <TextArea
              className={styles.unique_view_main_control_item_intro}
              placeholder='请输入NFT的介绍'
            />
          </div>
        </div>
        <Button className={styles.unique_view_main_action}>立即铸造</Button>
      </div>
    </div>
  )
}
export default Unique;