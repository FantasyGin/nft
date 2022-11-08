import { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Modal,
  message,
  Progress
} from 'antd';
import styles from './index.module.less';
const {
  TextArea
} = Input;
const Shareholder = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [subTitle, setSubTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const isMobile = () => {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  }
  const addProposal = () => {
    setShow(true);
  }
  const handleOk = () => {
    setShow(false);
    setOpen(false);
  }
  const handleCancel = () => {
    setOpen(false);
    setShow(false);
  }
  const handleChange = (type:string, event:any) => {
    let value = event.target.value;
    if (type == 'title') {
      setTitle(value);
    } else {
      setDesc(value);
    }
  }
  const handleSubmit = () => {
    if (!title) {
      message.error('请输入提案标题')
      return false;
    }
    if (!desc) {
      message.error('请输入提案标题描述')
      return false;
    }
    setShow(false);
  }
  const showDetail = (num:number) => {
    if (num == 1) {
      // alert(1)
      setSubTitle('已激活');
    } else {
      setSubTitle('已执行');
    }
    setOpen(true);
  }
  return (
    <div className={styles.shareholder_main}>
      <h3 className={styles.shareholder_main_title}>股东分红</h3>
      <div className={styles.shareholder_main_sub}>
        <p className={styles.shareholder_main_desc}>
          可以说明一下股东的分红简介时许规则。
        </p>
      </div>
      {
        isEmpty ? (
          <div className={styles.shareholder_main_empty}>
            <div className={styles.shareholder_main_empty_main}>
              <p className={styles.shareholder_main_empty_title}>没有提案</p>
              <p className={styles.shareholder_main_empty_desc}>社区成员提交的提案将显示在此处</p>
            </div>
          </div>
        ) : (
          <div className={styles.shareholder_main_list}>
            {
              [1,2,3,4,5].map(item=>
                <div
                  className={styles.shareholder_main_list_item}
                  key={item}
                >
                  <h3 className={styles.shareholder_main_list_item_title}>2022年第一季度</h3>
                  <div className={styles.shareholder_main_list_item_info}>
                    <span className={styles.shareholder_main_list_item_info_label}>平台收益</span>
                    <span className={styles.shareholder_main_list_item_info_value}>$&nbsp;000.00</span>
                  </div>
                  <div className={styles.shareholder_main_list_item_info}>
                    <span className={styles.shareholder_main_list_item_info_label}>股权分红</span>
                    <span className={styles.shareholder_main_list_item_info_value}>$&nbsp;000.00</span>
                  </div>
                  <Button
                    className={`${styles.shareholder_main_list_item_action}`}
                    onClick={()=>{showDetail(item)}}
                  >
                    {item == 1 ? '已激活' : '已执行'}
                  </Button>
                </div>
              )
            }
          </div>
        )
      }
      <Modal
        footer={null}
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            创建提案
          </div>
        }
        className={styles.modal_view}
        open={show}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className={styles.modal_view_tips}>
          提示:选择操作并描述您的提案,提案提交后不可修改,提交前请核对所有信息,提案完成后投票期将立即开始,持续30天.
        </p>
        <h3 className={styles.modal_view_title}>提案</h3>
        <div className={styles.modal_view_form}>
          <div className={styles.modal_view_form_control}>
            <p className={styles.modal_view_form_control_label}>提案标题</p>
            <Input
              placeholder='请在此处写提案标题'
              value={title}
              onInput={(e)=>{handleChange('title', e)}}
              className={styles.modal_view_form_control_value}
            />
          </div>
          <div className={styles.modal_view_form_control}>
            <p className={styles.modal_view_form_control_label}>提案描述</p>
            <TextArea
              placeholder='请在此处写您的提案描述'
              value={desc}
              onInput={(e)=>{handleChange('desc', e)}}
              className={styles.modal_view_form_control_values}
            />
          </div>
        </div>
        <div className={styles.modal_view_footer}>
          <Button
            className={styles.modal_view_action}
            onClick={()=>{handleSubmit()}}
          >
            提案需要消耗100个FUA
          </Button>
        </div>
      </Modal>
      <Modal
        footer={null}
        closable={false}
        className={styles.modal_view}
        title={
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            onFocus={() => {}}
            onBlur={() => {}}
            // end
          >
            所有提案
            <Button>{subTitle}</Button>
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3 className={styles.modal_view_subtitle}>提案名称</h3>
        <p className={styles.modal_view_desc}>投票截止日期为2022年9月10日 GMT+8 13:03</p>
        <div className={styles.modal_view_detail}>
          <div className={styles.modal_view_detail_info}>
            <div className={styles.modal_view_detail_info_header}>
              赞成
              <div className={styles.modal_view_detail_info_result}>
                34<span className={styles.modal_view_detail_info_result_span}>/23</span>
              </div>
            </div>
            <Progress percent={50} showInfo={false} />
          </div>
          <div className={styles.modal_view_detail_info}>
            <div className={styles.modal_view_detail_info_header}>
              反对
              <div className={styles.modal_view_detail_info_result}>
                34<span className={styles.modal_view_detail_info_result_span}>/23</span>
              </div>
            </div>
            <Progress percent={50} showInfo={false} />
          </div>
        </div>
        <h3 className={styles.modal_view_name}>详细信息</h3>
        <div className={styles.modal_view_descs}>
          大山里的哗啦圣诞节啦丢三落四的
          大理石的录取为全额
        </div>
        <h3 className={styles.modal_view_name}>描述</h3>
        <div className={styles.modal_view_descs}>
          垃圾收到啦开始的囧文件
        </div>
      </Modal>
    </div>
  )
}
export default Shareholder;