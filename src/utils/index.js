import OSS from 'ali-oss';

export function isMobile () {
  let flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
}

//集成阿里云的Oss文件上传
export default async function uploadOSS(file, fileName) {
  //需要重新命名，避免名称重复
  const date = new Date();
  const arr = fileName.split('.');
  const newName = arr.length > 1 ? `${arr[0]}_${date.getTime()}.${arr[1]}` : `${arr[0]}_${date.getTime()}`;
  const client = getClient();
  try {
      // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
      // 如果本地文件的完整路径中未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
      const result = await client.put(newName, file);

      return result.url;

  } catch (e) {
      console.log(e);
  }
}

const getClient = () => {
  let OSS = require('ali-oss');
  let client = new OSS({
      // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
      region: process.env.REACT_APP_region,
      // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
      accessKeyId: process.env.REACT_APP_accessKeyId,
      accessKeySecret: process.env.REACT_APP_accessKeySecret,
      bucket: process.env.REACT_APP_bucket,
  });
  return client;
}

// //本地测试用 误删
// const getClient = () => {
//     // let OSS = require('ali-oss');
//     let client = new OSS({
//         // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
//         region: region,
//         // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
//         accessKeyId: accessKeyId,
//         accessKeySecret: accessKeySecret,
//         bucket: bucket,
//     });
//     return client;
// }