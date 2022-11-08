import React from "react";
import { Button, Upload, Image, Tag } from "antd";
import {
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import uploadOSS from "../../../utils";

const size = "large";

const UploadFile = (props:any) => {
  const { onChange, imageUrl, accept,onClear } = props;
  const uploadProps = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    accept,
    showUploadList: false,
  };

  const onUpload = (info:any) => {
    const file = info.file;
    uploadOSS(file.originFileObj, file.name).then((result:any) => {
      onChange(result);
    });
  };

  const onDelete = () => {
    onClear();
  }

  return (
    <>
      {imageUrl.length > 0 ? (
        accept === "*" ? (
          <>
            <div
              style={{
                marginBottom: "16px",
              }}
            >
              <Tag color="success">文件地址：{imageUrl}</Tag>
            </div>
          </>
        ) : (
          <div
            style={{
              marginBottom: "16px",
              position: "relative",
              width: "100px"
            }}
          >
            <Image width={100} height={100} src={imageUrl} />
            <DeleteOutlined className="font-danger"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
              }} onClick={onDelete} />
          </div>
        )
      ) : null}
      <Upload
        {...uploadProps}
        onChange={(info) => {
          onUpload(info);
        }}
        listType="picture-card"
      >
        {/* <Button size={size} icon={<UploadOutlined />}>
          选择文件
        </Button> */}
        <PlusOutlined style={{
            fontSize:'24px',
            color:'#FFFFFF',
        }} />
      </Upload>
    </>
  );
};

export default UploadFile;
