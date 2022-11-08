import { ReactNode, useState } from 'react';
import {
  Drawer,
  Button
} from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo_white.png';
import icon from '../../assets/images/icon.png';
import coin from '../../assets/images/coin.png';
import bit from '../../assets/images/bit.png';
import './index.less';

interface LayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log('location', location);
  let pathname = location.pathname || '';
  const [open, setOpen] = useState<boolean>(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const goLink = (url:string, event:any) => {
    setOpen(false);
    navigate(url);
  }
  const isMobile = () => {
    let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag;
  }
  const PcLayOut = () => {
    return (
      <div className='container-layout'>
        <div className='container-layout-header'>
          <div className='container-layout-header-main'>
            <img
              src={coin}
              className='container-layout-header-main-coin'
            />
            NFT：000.00
            <img
              src={bit}
              className='container-layout-header-main-bit'
            />
            TYCHE：000.00
          </div>
          <img
            src={icon}
            className='container-layout-header-icon'
          />
        </div>
        <div className='container-layout-logo'>
          <img
            src={logo}
            className='container-layout-logo-img'
          />
        </div>
        <div className='container-layout-nav'>
          <div
            className={`container-layout-nav-item ${pathname == '/page/mine' ? 'active' : ''}`}
            onClick={(e:any)=>{goLink('/page/mine', e)}}
          >
            我的作品
          </div>
          <div
            className={`container-layout-nav-item ${pathname == '/page/author' ? 'active' : ''}`}
            onClick={(e:any)=>{goLink('/page/author', e)}}
          >
            所有作者
          </div>
          <div
            className={`container-layout-nav-item ${pathname == '/page/identity' ? 'active' : ''}`}
            onClick={(e:any)=>{goLink('/page/identity', e)}}
          >
            全部作品
          </div>
          <div
            className={`container-layout-nav-item ${pathname == '/page/casting' ? 'active' : ''}`}
            onClick={(e:any)=>{goLink('/page/casting', e)}}
          >
            商城
          </div>
          <div
            className={`container-layout-nav-item ${pathname == '/page/mall' ? 'active' : ''}`}
            onClick={(e:any)=>{goLink('/page/mall', e)}}
          >
            mall
          </div>
          <div
            className={`container-layout-nav-item ${pathname == '/page/exchange' ? 'active' : ''}`}
            onClick={(e:any)=>{goLink('/page/exchange', e)}}
          >
            Tyche交换池
          </div>
          <div
            className={`container-layout-nav-item ${pathname == '/page/unique' ? 'active' : ''}`}
            onClick={(e:any)=>{goLink('/page/unique', e)}}
          >
            DAO社区
          </div>
          <div
            className={`container-layout-nav-item ${pathname == '/page/governance' ? 'active' : ''}`}
            onClick={(e:any)=>{goLink('/page/governance', e)}}
          >
            Fortuna治理
          </div>
          <div
            className={`container-layout-nav-item ${pathname == '/page/blindBox' ? 'active' : ''}`}
            onClick={(e:any)=>{goLink('/page/blindBox', e)}}
          >
            盲盒
          </div>
          <div
            className={`container-layout-nav-item ${pathname == '/page/register' ? 'active' : ''}`}
            onClick={(e:any)=>{goLink('/page/register', e)}}
          >
            投票
          </div>
        </div>
        <div className='container-layout-other'>
          <div className='container-layout-other-main'>
            <div
              className={`container-layout-other-main-item ${pathname == '/page/guild' ? 'active' : ''}`}
              onClick={(e:any)=>{goLink('/page/guild', e)}}
            >
              加入公会
            </div>
            <div className='container-layout-other-main-item'>隐私条约</div>
          </div>
        </div>
        <div className='container-layout-actions'>
          <Button className='container-layout-actions-item'>链接钱包</Button>
        </div>
      </div>
    )
  }
  const MobileLayOut = () => {
    return (
      <div className='mobile_view'>
        <img
          src={icon}
          className='mobile_view_icon'
          onClick={showDrawer}
        />
      </div>
    )
  }
  return (
    <div className='container' id='container'>
      {isMobile() ? MobileLayOut() : PcLayOut()}
      <div className='container-main'>
        {children}
      </div>
      <Drawer
        title=""
        placement="left"
        onClose={onClose}
        open={open}
        width='80%'
        bodyStyle={{
          padding: '0',
          height: '100vh',
          background: '#1A1D1F'
        }}
        closable={false}
      >
        <div className='mobile-layout'>
          <div className='mobile-layout-header'>
            <div className='mobile-layout-header-main'>
              <img
                src={coin}
                className='mobile-layout-header-main-coin'
              />
              NFT：000.00
              <img
                src={bit}
                className='mobile-layout-header-main-bit'
              />
              TYCHE：000.00
            </div>
          </div>
          <div className='mobile-layout-logo'>
            <img
              src={logo}
              className='mobile-layout-logo-img'
            />
          </div>
          <div className='mobile-layout-nav'>
            <div
              className={`mobile-layout-nav-item ${pathname == '/page/mine' ? 'active' : ''}`}
              onClick={(e:any)=>{goLink('/page/mine', e)}}>
              我的作品
            </div>
            <div
              className={`mobile-layout-nav-item ${pathname == '/page/author' ? 'active' : ''}`}
              onClick={(e:any)=>{goLink('/page/author', e)}}>
              所有作者
            </div>
            <div
              className={`mobile-layout-nav-item ${pathname == '/page/identity' ? 'active' : ''}`}
              onClick={(e:any)=>{goLink('/page/identity', e)}}>
              全部作品
            </div>
            <div
              className={`mobile-layout-nav-item ${pathname == '/page/casting' ? 'active' : ''}`}
              onClick={(e:any)=>{goLink('/page/casting', e)}}>
              商城
            </div>
            <div
              className={`mobile-layout-nav-item ${pathname == '/page/mall' ? 'active' : ''}`}
              onClick={(e:any)=>{goLink('/page/mall', e)}}>
              mall
            </div>
            <div
              className={`mobile-layout-nav-item ${pathname == '/page/exchange' ? 'active' : ''}`}
              onClick={(e:any)=>{goLink('/page/exchange', e)}}>
              Tyche交换池
            </div>
            <div
              className={`mobile-layout-nav-item ${pathname == '/page/unique' ? 'active' : ''}`}
              onClick={(e:any)=>{goLink('/page/unique', e)}}>
              DAO社区
            </div>
            <div
              className={`mobile-layout-nav-item ${pathname == '/page/governance' ? 'active' : ''}`}
              onClick={(e:any)=>{goLink('/page/governance', e)}}
            >
              Fortuna治理
            </div>
            <div
              className={`mobile-layout-nav-item ${pathname == '/page/blindBox' ? 'active' : ''}`}
              onClick={(e:any)=>{goLink('/page/blindBox', e)}}
            >
              盲盒
            </div>
            <div
              className={`mobile-layout-nav-item ${pathname == '/page/register' ? 'active' : ''}`}
              onClick={(e:any)=>{goLink('/page/register', e)}}>
              投票
            </div>
          </div>
          <div className='mobile-layout-other'>
            <div className='mobile-layout-other-main'>
              <div
                className={`mobile-layout-other-main-item ${pathname == '/page/guild' ? 'active' : ''}`}
                onClick={(e:any)=>{goLink('/page/guild', e)}}
              >
                加入公会
              </div>
              <div className='mobile-layout-other-main-item'>隐私条约</div>
            </div>
          </div>
          <div className='mobile-layout-actions'>
            <div className='mobile-layout-actions-item'>链接钱包</div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default BaseLayout;
