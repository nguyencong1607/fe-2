import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Layout, Menu, Form, Input, Button, Table, Modal } from "antd";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

function Lap1() {
  const [open, setOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log(values);
  };

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" },
  ];

  const data = [
    {
      key: 1,
      name: "Nguyen Van cong",
      email: "cong@gmail.com",
      role: "Admin",
    },
    {
      key: 2,
      name: "Tran Van Bang",
      email: "bang@gmail.com",
      role: "User",
    },
  ];

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 Lap1</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Dashboard WEB2091
        </h1>

        <Layout style={{ minHeight: "300px", marginBottom: 40 }}>
          <Sider style={{ color: "white" }}>Sidebar</Sider>

          <Layout>
            <Header style={{ color: "white" }}>header</Header>

            <Content style={{ padding: 20 }}>content</Content>
          </Layout>
        </Layout>

        {/* form đăng kí */}
        <h2 className="font-semibold">Form đăng ký</h2>

        <Form onFinish={onFinish} style={{ maxWidth: 400 }}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "nhập name" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Nhập email" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Nhập password" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>

        {/* bảng user */}
        <h1 className="font-semibold">Danh sách User</h1>
        <br />
        <Button type="primary" onClick={() => setOpen(true)}>
          Add User
        </Button>

        <Table columns={columns} dataSource={data} style={{ marginTop: 20 }} />

        <Modal title="Add User" open={open} onCancel={() => setOpen(false)}>
          <Form onFinish={onFinish}>
            <Form.Item name="name">
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item name="email">
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item name="role">
              <Input placeholder="Role" />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Modal>
      </div>

      <Toaster />
    </>
  );
}

export default Lap1;
