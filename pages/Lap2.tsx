import { Table, Tag, Button, Space } from "antd";

function Lap() {
  //bai1
  const columns1 = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Major", dataIndex: "major" },
  ];

  const data1 = [
    {
      key: 1,
      id: 1,
      name: "Nguyen Van Cong",
      age: 20,
      major: "CNTT",
    },
    {
      key: 2,
      id: 2,
      name: "Tran Van Bang",
      age: 21,
      major: "mkt",
    },
  ];

  // bai 3
  const columns2 = [
    { title: "ID", dataIndex: "id" },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },

    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "red"}>{status}</Tag>
      ),
    },

    {
      title: "Action",
      render: () => (
        <Space>
          <Button type="primary">Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      ),
    },
  ];

  const data2 = [
    {
      key: 1,
      id: 1,
      name: "Nguyen Van Cong",
      email: "cong@gmail.com",
      status: "active",
    },
    {
      key: 2,
      id: 2,
      name: "Tran Van Bang",
      email: "bang@gmail.com",
      status: "inactive",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 1</h2>
      <Table columns={columns1} dataSource={data1} />
      <br />
      <br />
      <h2>Bài 3</h2>
      <Table columns={columns2} dataSource={data2} />
    </div>
  );
}

export default Lap;
