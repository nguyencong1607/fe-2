import { Toaster } from "react-hot-toast";
import { Form, Input, Button } from "antd";

function Lap3() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Dashboard WEB2091
        </h1>

        {/* form đăng kí */}
        <h2 className="font-semibold">Bài 1</h2>

        <Form onFinish={onFinish} style={{ maxWidth: 400 }} layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { type: "email", message: "Email không hợp lệ" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Nhập password"} ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>

        <br />
        <br />

        {/* bảng user */}
        <h1 className="font-semibold">BÀI 2</h1>
        <br />
        <Form onFinish={onFinish} style={{ maxWidth: 400 }} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="phone" label="Số điện thoại">
            <Input placeholder="Phone" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật Khẩu"
            rules={[
              { required: true, message: "Nhập password" },
              { min: 6, message: "Password tối thiểu 6 ký tự" },
            ]}
          >
            <Input placeholder="Password" />
          </Form.Item>

          <Form.Item name="Confirm Password" label="Nhập lại mật Khẩu">
            <Input placeholder="ConfirmPassword" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>

        <h1 className="font-semibold mt-10">BÀI 3</h1>

        <Form onFinish={onFinish} layout="vertical" style={{ maxWidth: 400 }}>
          <Form.Item
            name="name"
            label="Tên sản phẩm"
            rules={[{ required: true, message: "Nhập tên sản phẩm" }]}
          >
            <Input placeholder="Tên sản phẩm" />
          </Form.Item>

          <Form.Item
            name="price"
            label="Giá"
            rules={[{ required: true, message: "Nhập giá" }]}
          >
            <Input type="number" placeholder="Giá" />
          </Form.Item>

          <Form.Item
            name="quantity"
            label="Số lượng"
            rules={[{ required: true, message: "Nhập số lượng" }]}
          >
            <Input type="number" placeholder="Số lượng" />
          </Form.Item>

          <Form.Item name="description" label="Mô tả">
            <Input.TextArea placeholder="Mô tả sản phẩm" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>

      <Toaster />
    </>
  );
}

export default Lap3;
//  1111
