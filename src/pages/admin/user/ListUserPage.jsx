import CustomTable from "components/admin/search/CustomTable";
import React from "react";

const data = [
  {
    key: "1",
    taikhoan: "Thaile13032001",
    hoten: "Lê nguyễn phương thái",
    ngaysinh: "1990-01-01",
    email: "abs@gmail.com",
    SDT: "0789130321",
    diachi: "New York No. 1 Lake Park",
    quyen: "Người dùng",
    ngaytao: "20/02/2022",
    ngaychinhsua: "20/02/2022",
  },
  {
    key: "2",
    taikhoan: "Thaile13032001",
    hoten: "Lê nguyễn phương thái",
    ngaysinh: "1990-01-01",
    email: "abs@gmail.com",
    SDT: "0789130321",
    diachi: "HCM",
    quyen: "Người dùng",
    ngaytao: "20/02/2022",
    ngaychinhsua: "20/02/2022",
  },
];

const columns = [
  { title: "Tài Khoản", dataIndex: "taikhoan", key: "taikhoan" },
  {
    title: "Họ Và Tên",
    dataIndex: "hoten",
    key: "hoten",
    width: 300,
    sorter: (a, b) => a.hoten.length - b.hoten.length,
    sortDirections: ["descend", "ascend"],
  },
  { title: "Tuổi", dataIndex: "ngaysinh", key: "ngaysinh" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Số Điện Thoại", dataIndex: "SDT", key: "SDT" },
  { title: "Quyền", dataIndex: "quyen", key: "quyen" },
  {
    title: "Ngày Tạo",
    dataIndex: "ngaytao",
    key: "ngaytao",
    sorter: (a, b) => a.ngaytao.length - b.ngaytao.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Ngày Chỉnh Sửa",
    dataIndex: "ngaytao",
    key: "ngaytao",
    sorter: (a, b) => a.ngaytao.length - b.ngaytao.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Ðịa Chỉ",
    dataIndex: "diachi",
    key: "diachi",
    sorter: (a, b) => a.diachi.length - b.diachi.length,
    sortDirections: ["descend", "ascend"],
  },
];
export default function ListUserPage() {
  return <CustomTable columns={columns} data={data}></CustomTable>;
}
