import { useEffect, useState } from 'react';
import {
  Input,
  Select
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
  const onChange = (event:any) => {
    let value = event?.target?.value;
    setKeyword(value);
  }
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className={styles.author_view}>
      <div className={styles.author_view_main}>
        <h3 className={styles.author_view_title}>所有作者</h3>
        <div className={styles.author_view_sub}>
          <p className={styles.author_view_desc}>在这里您可以找到您所有喜爱的作者</p>
        </div>
      </div>
      <div className={styles.author_view_filter}>
        <div className={styles.author_view_filter_search}>
          <SearchOutlined
            className={styles.author_view_filter_search_icon}
            color='#ffffff'
          />
          <Input
            className={styles.author_view_filter_search_value}
            placeholder='搜索'
            value={keyword}
            onInput={(e:any)=>{onChange(e)}}
          />
        </div>
        <div className={styles.author_view_filter_sort}>
          <span className={styles.author_view_filter_sort_label}>排序方式：</span>
          <Select
            defaultValue="最近的"
            style={{ width: 120 }}
            onChange={handleChange}
            className={styles.author_view_filter_sort_select}
            options={[
              {
                value: '最近的',
                label: '最近的',
              },
              {
                value: '近一周',
                label: '近一周',
              },
              {
                value: '近一个月',
                label: '近一个月',
              },
              {
                value: '近半年',
                label: '近半年',
              },
            ]}
          />
        </div>
      </div>
      <div className={styles.author_view_list}>
        {
          [1,2,3,4,5].map(item=>
            <div
              className={styles.author_view_list_item}
              key={item}
              onClick={()=>{
                navigate(`/page/author/${item}`)
              }}
            >
              <img
                src="https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2F03087bf40ad162d99cceb8fcaea5a0e78b13cdb0.jpeg%3Ftoken%3D5b50aec78619ebf9158c666e8a73ef1f&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1664816400&t=4bc4bab899c142a89ce9f811ac9dd504"
                className={styles.author_view_list_item_img}
              />
              <div className={styles.author_view_list_item_info}>
                <p className={styles.author_view_list_item_info_desc}>作者名字：</p>
                <p className={styles.author_view_list_item_info_desc}>作者地址：</p>
                <p className={styles.author_view_list_item_info_desc}>作者简介：</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
export default Author;