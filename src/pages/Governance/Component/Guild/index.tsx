import { useEffect, useState } from 'react';
import {
  Input,
  Select,
  Upload,
  message,
  Button
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { InboxOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import uploadIcon from '../../../../assets/images/upload.png'
import styles from './index.module.less';

const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

const Guild = () => {
  const selectAfter = (
    <Select defaultValue="T2" className="select-after">
      <Option value="T2">T2</Option>
      <Option value="T3">T3</Option>
      <Option value="T4">T4</Option>
    </Select>
  );
  const selectAfters = (
    <Select defaultValue="天" className="select-after">
      <Option value="天">天</Option>
      <Option value="周">周</Option>
      <Option value="季">季</Option>
    </Select>
  )
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
    <div className={styles.guild_view}>
      <h3 className={styles.guild_view_title}>创建公会</h3>
      <p className={styles.guild_view_desc}>专属于您的个人公会</p>
      <div className={styles.guild_view_main}>
        <div className={styles.guild_view_main_show}>
          <h4 className={styles.guild_view_main_show_title}>浏览效果</h4>
          <div className={styles.guild_view_main_show_content}></div>
          <p className={styles.guild_view_main_show_tip}>100*100像素</p>
        </div>
        <div className={styles.guild_view_main_control}>
          <div className={styles.guild_view_main_control_item}>
            <h4 className={styles.guild_view_main_control_item_title}>上传文件</h4>
            <Upload {...props}>
              <Button>上传文件</Button>
            </Upload>
            <p className={styles.guild_view_main_control_item_tip}>( 支持JPEG、PNG图片文件，文件大小 2MB以内 )</p>
          </div>
        </div>
        <div className={styles.guild_view_main_control}>
          <div className={styles.guild_view_main_control_item}>
            <h4 className={styles.guild_view_main_control_item_title}>公会名称</h4>
            <Input
              className={styles.guild_view_main_control_item_value}
            />
            <p className={styles.guild_view_main_control_item_tip}>注：10个字符以内</p>
          </div>
        </div>
        <div className={styles.guild_view_main_control}>
          <div className={styles.guild_view_main_control_item}>
            <h4 className={styles.guild_view_main_control_item_title}>公会介绍</h4>
            <TextArea
              className={styles.guild_view_main_control_item_intro}
              placeholder='请输入NFT的介绍'
              maxLength={500}
            />
            <p className={styles.guild_view_main_control_item_tip}>注：500个字符以内</p>
          </div>
        </div>
        <div className={styles.guild_view_main_control}>
          <div className={styles.guild_view_main_control_items}>
            <h4 className={styles.guild_view_main_control_items_title}>矿池注入</h4>
            <Input
              className={styles.guild_view_main_control_items_value}
              placeholder='T2'
              addonAfter={selectAfter}
            />
          </div>
          <div className={styles.guild_view_main_control_items}>
            <h4 className={styles.guild_view_main_control_items_title}>时间</h4>
            <Input
              className={styles.guild_view_main_control_items_value}
              placeholder='3'
              addonAfter={selectAfters}
            />
          </div>
        </div>
        <Button className={styles.guild_view_main_action}>立即创建</Button>
      </div>
    </div>
  )
}
export default Guild;