import { useEffect, useState } from "react";
import { Form, Input, Upload, message, Button } from "antd";
import uploadIcon from "../../assets/images/upload.png";
import styles from "./index.module.less";
import useRequest from "../../utils/request.js";
import UploadFile from "../components/uploadfile";

const { TextArea } = Input;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState("");
  const [form] = Form.useForm();

  const { doRequest, errors } = useRequest({
    onSuccess: (res:any) => {
      if (res.error) {
        message.error(res.error);
      } else {
        message.success("注册成功");
        form.resetFields();
      }
    },
  });

  useEffect(() => {
    const container = document.body;
    if (container != null) {
      container.className = "register_container";
    }
  }, []);

  const uploadButton = (
    <div>
      <img
        src={uploadIcon}
        style={{
          width: "36px",
          height: "36px",
        }}
      />
    </div>
  );

  const onFinish = async (values: any) => {
    console.log(values);
    const nfts = ["636c9a680d31f63ae8006827","636c9a900d31f63ae8006829"];
    const data = {
      ...values,
      nfts
    }
    setLoading(true);
    await doRequest(`/user/create`, "post", data);
    setLoading(false);
  };

  return (
    <div className={styles.register_view}>
      <h3 className={styles.register_view_title}>注册</h3>
      <div className={styles.register_view_info}>
        <p className={styles.register_view_desc}>成为NFT设计师</p>
      </div>
      <div className={styles.register_view_container}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="logo"
            label={
              <>
                <div>
                  <h4 className={styles.register_view_subtitle}>上传头像</h4>
                </div>
              </>
            }
            extra={<div style={{
              color: "#FFFFFF",
              marginTop: "8px",
            }} className={styles.register_view_uploadtip}>
            ( 支持JPEG、PNG图片文件，文件大小 2MB以内 )
          </div>}
          >
            <UploadFile
              imageUrl={logo}
              onChange={(value:any) => {
                form.setFieldValue("logo", value);
              }}
              onClear={() => {
                form.setFieldsValue({
                  logo: "",
                });
                setLogo("");
              }}
              accept="image/*"
            />
          </Form.Item>
          <Form.Item
            label={
              <>
                <h4 className={styles.register_view_subtitle}>昵称</h4>
              </>
            }
            name="name"
            rules={[{ required: true, message: "请输入昵称" }]}
            extra={
              <div
                style={{
                  color: "#FFFFFF",
                  marginTop: "8px",
                }}
              >
                注：10个字符以内。
              </div>
            }
          >
            <Input
              placeholder="请输入您的昵称"
              width="350px"
              className={styles.register_view_nickname}
            />
          </Form.Item>
          <Form.Item 
            name="description"
            label={
              <>
                <h4 className={styles.register_view_subtitle}>简介</h4>
              </>
            }
            extra={
              <div
                style={{
                  color: "#ffffff",
                  marginTop: "8px",
                }}
              >
                注：500个字符以内。
              </div>
            }
          >
            <TextArea
                placeholder="请输入您的简介"
                className={styles.register_view_intro}
              />
          </Form.Item>
          <Form.Item>
            <Button className={styles.register_view_action} loading={loading} htmlType="submit">
              立即注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Register;
