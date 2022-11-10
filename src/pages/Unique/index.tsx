import { useEffect, useState } from "react";
import { Input, Select, Upload, message, Button, Form, Row, Col } from "antd";

import {
  InboxOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import type { UploadProps } from "antd";
import uploadIcon from "../../assets/images/upload.png";
import styles from "./index.module.less";
import { useParams } from "react-router-dom";
import useRequest from "../../utils/request.js";
import UploadFile from "../components/uploadfile";
import { createHashHistory } from "@remix-run/router";

const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

let doRequestType = 0;

const Unique = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const param = useParams();
  const [nft, setNft] = useState<any>(null);
  const [file, setFile] = useState<string>("");
  const [logo, setLogo] = useState<string>("");
  const [form] = Form.useForm();
  const history = createHashHistory();

  const { doRequest, errors } = useRequest({
    onSuccess: (res: any) => {
      switch (doRequestType) {
        case 0:
          {
            setNft(res);
            form.setFieldsValue({
              ...res,
            });
            if (res.file) {
              setFile(res.file);
            }
            if (res.logo) setLogo(res.logo);
          }
          break;
        case 1:
          {
            if (res.error) {
              message.error("保存失败，请重试");
            } else {
              message.success({
                content: "保存成功",
                onClose: () => {
                  history.push("/page/mine");
                  window.location.reload();
                },
              });
            }
          }
          break;
      }
    },
  });

  useEffect(() => {
    const container = document.body;
    if (container != null) {
      container.className = "unique_container";
    }
    if (param.id) {
      getNft();
    }
  }, []);

  const getNft = async () => {
    await doRequest(`/nft/${param.id}`, "get", {});
  };

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
  const selectAfter = (
    <Select defaultValue=".com" className="select-after">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const onFinish = (values: any) => {
    doRequestType = 1;
    setLoading(true);
    doRequest(`/nft/${param.id}`, "put", { ...values });
    setLoading(false);
  };

  return (
    <div className={styles.unique_view}>
      <h3 className={styles.unique_view_title}>铸造</h3>
      <p className={styles.unique_view_desc}>独一无二的NFT</p>
      <div className={styles.unique_view_main}>
        <Form
          form={form}
          autoComplete="off"
          layout="vertical"          
          onFinish={onFinish}
        >
          <Row>
            <Col span={12}>
              <Form.Item
                label={
                  <strong
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    上传文件
                  </strong>
                }
                name="file"
                extra={
                  <p
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    （ PNG,JPEG,GIF，ZIP，最大500MB ）
                  </p>
                }
              >
                <UploadFile
                  imageUrl={file}
                  onChange={(value: any) => {
                    form.setFieldsValue({
                      file: value,
                    });
                    setFile(value);
                  }}
                  onClear={() => {
                    form.setFieldsValue({
                      file: "",
                    });
                    setFile("");
                  }}
                  accept="image/*"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={
                  <strong
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    上传封面
                  </strong>
                }
                name="logo"
                extra={
                  <p
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    ( 支持JPEG、PNG图片文件，文件大小 2MB以内 )
                  </p>
                }
              >
                <UploadFile
                  imageUrl={logo}
                  onChange={(value: any) => {
                    form.setFieldsValue({
                      logo: value,
                    });
                    setLogo(value);
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
            </Col>
          </Row>

          <Form.Item
            label={
              <strong
                style={{
                  color: "#ffffff",
                }}
              >
                出售价格
              </strong>
            }
            name="price"
          >
            <Input
              placeholder="出售价格"
              className={styles.register_view_nickname}
              style={{
                width:'300px'
              }}
            />
          </Form.Item>
          <Form.Item
            label={
              <strong
                style={{
                  color: "#ffffff",
                }}
              >
                NFT名称
              </strong>
            }
            name="name"
          >
            <Input
              placeholder="NFT名称"
              className={styles.register_view_nickname}
              style={{
                width:'300px'
              }}
            />
          </Form.Item>
          <Form.Item
            label={
              <strong
                style={{
                  color: "#ffffff",
                }}
              >
                NFT介绍
              </strong>
            }
            name="description"
          >
            <TextArea
              placeholder="NFT介绍"
              className={styles.register_view_intro}
              rows={7}
              style={{
                width:'500px'
              }}
            />
          </Form.Item>
          <Form.Item className="margin-16">
            <Button
              htmlType="submit"
              size="large"
              type="primary"
              danger
              loading={loading}
            >
              立即铸造
            </Button>
          </Form.Item>
        </Form>

        {/* <div className={styles.unique_view_main_control}>
          <div className={styles.unique_view_main_control_item}>
            <h4 className={styles.unique_view_main_control_item_title}>
              上传文件
            </h4>
            <Dragger
              {...props}
              className={styles.unique_view_main_control_item_upload}
            >
              <p className={styles.unique_view_main_control_item_upload_text}>
                选择文件
              </p>
              <p className={styles.unique_view_main_control_item_upload_label}>
                （ PNG,JPEG,GIF，ZIP，最大500MB ）
              </p>
            </Dragger>
          </div>
          <div className={styles.unique_view_main_control_item}>
            <h4 className={styles.unique_view_main_control_item_title}>
              上传封面
            </h4>
            <Upload
              name="avatar"
              listType="picture-card"
              className={styles["avatar-uploader"]}
              showUploadList={false}
              action=""
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
            <p className={styles.unique_view_main_control_item_tip}>
              ( 支持JPEG、PNG图片文件，文件大小 2MB以内 )
            </p>
          </div>
        </div>
        <div className={styles.unique_view_main_control}>
          <div className={styles.unique_view_main_control_item}>
            <h4 className={styles.unique_view_main_control_item_title}>
              出售价格
            </h4>
            <Input className={styles.unique_view_main_control_item_value} />
          </div>
        </div>
        <div className={styles.unique_view_main_control}>
          <div className={styles.unique_view_main_control_item}>
            <h4 className={styles.unique_view_main_control_item_title}>
              NFT 名称
            </h4>
            <Input
              className={styles.unique_view_main_control_item_value}
              placeholder="请输入NFT的名称"
              addonAfter={selectAfter}
            />
          </div>
        </div>
        <div className={styles.unique_view_main_control}>
          <div className={styles.unique_view_main_control_item}>
            <h4 className={styles.unique_view_main_control_item_title}>
              NFT 介绍
            </h4>
            <TextArea
              className={styles.unique_view_main_control_item_intro}
              placeholder="请输入NFT的介绍"
            />
          </div>
        </div>
        <Button className={styles.unique_view_main_action}>立即铸造</Button> */}
      </div>
    </div>
  );
};
export default Unique;
