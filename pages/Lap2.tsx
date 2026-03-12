import { Table } from "antd";
import { Toaster } from "react-hot-toast";

function Lap2() {
  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Major", dataIndex: "majoi" },
  ];

  const data = [
    {
      key: 1,
      name: "Nguyen Van cong",
      age: "12",
      majoi: "Hóa",
    },
    {
      key: 2,
      name: "Tran Van Bang",
      age: "15",
      majoi: "Lý",
    },
  ];

  return (
    <>
      <div>
        <h1 className="font-semibold">Danh sách User</h1>
        <br />
        <Table columns={columns} dataSource={data} style={{ marginTop: 20 }} />
      </div>

      <Toaster />
    </>
  );
}

export default Lap2;
//  he eh 