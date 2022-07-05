import "./index.css";
import { Form, Divider, Input, InputNumber, Button, Upload } from "antd";

function UploadPage() {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품 사진</div>}
        >
          <Upload>
            <div id="upload-img-placeholder">
              <img src="/images/icons/camera.png" />
              <span>상품 이미지를 등록해 주세요.</span>
            </div>
          </Upload>
        </Form.Item>
        <Divider />
        <Form.Item
          name="seller"
          rules={[{ required: true, message: "판매자 이름을 등록해 주세요." }]}
          label={<div className="upload-label">판매자 명</div>}
        >
          <Input className="text-input" placeholder="이름을 입력해 주세요." />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          rules={[{ required: true, message: "상품 이름을 등록해 주세요." }]}
          label={<div className="upload-label">상품 이름</div>}
        >
          <Input
            className="text-input"
            placeholder="상품 이름을 입력해 주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          rules={[{ required: true, message: "상품 가격을 등록해 주세요." }]}
          label={<div className="upload-label">상품 가격</div>}
        >
          <InputNumber className="price-input" defaultValue={0} />
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          rules={[{ required: true, message: "상품 설명을 등록해 주세요." }]}
          label={<div className="upload-label">상품 설명</div>}
        >
          <Input.TextArea
            className="description-input"
            placeholder="상품 설명을 입력해 주세요. "
            maxLength={300}
            showCount
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            상품 등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
