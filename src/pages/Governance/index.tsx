import { useEffect, useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Input,
  Modal,
  message,
  Progress
} from 'antd';
import Governance from './Component/Governance';
import Guild from './Component/Guild';
import Shareholder from './Component/Shareholder';
import styles from './index.module.less';
const {
  TextArea
} = Input;
const Casting = () => {
  const [active, setActive] = useState<number>(1);
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  useEffect(()=>{
    const container = document.body;
    if (container != null) {
      container.className = 'governance_container';
    }
  });
  const isMobile = () => {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  }
  const renderTabs = () => {
    return (
      <div className={styles.governance_view_tabs}>
        <div
          className={`${styles.governance_view_tabs_item} ${active == 1 ? `${styles.active}` : ''}`}
          onClick={()=>{setActive(1)}}
        >
          治理
        </div>
        <div
          className={`${styles.governance_view_tabs_item} ${active == 2 ? `${styles.active}` : ''}`}
          onClick={()=>{setActive(2)}}
        >
          公会
        </div>
        <div
          className={`${styles.governance_view_tabs_item} ${active == 3 ? `${styles.active}` : ''}`}
          onClick={()=>{setActive(3)}}
        >
          公告
        </div>
        <div
          className={`${styles.governance_view_tabs_item} ${active == 4 ? `${styles.active}` : ''}`}
          onClick={()=>{setActive(4)}}
        >
          交易
        </div>
      </div>
    )
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
    <div className={styles.governance_view}>
      <Button className={styles.governance_view_action}>链接钱包</Button>
      {
        isMobile() ? (
          <div style={{
            padding: '0 15px'
          }}>
            {renderTabs()}
          </div>
        ) : (
          <>
            {renderTabs()}
          </>
        )
      }
      {
        active == 1 &&
        <Governance />
      }
      {
        active == 2 &&
        <Guild />
      }
      {
        active == 3 &&
        <Shareholder />
      }
    </div>
  )
}
export default Casting;