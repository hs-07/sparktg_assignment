import {
  DollarOutlined,
  BranchesOutlined,
  CustomerServiceOutlined,
  ToolOutlined,
  MessageOutlined,
  ContactsOutlined,
  IdcardOutlined,
  StopOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

export const GENERAL_ITEMS = [
  { key: "/", label: "Business", icon: <DollarOutlined />, disabled: true },
  { key: "/", label: "IVR Flow", icon: <BranchesOutlined />, disabled: true },
  {
    key: "/",
    label: "Agents",
    icon: <CustomerServiceOutlined />,
    disabled: true,
  },
  { key: "/", label: "Skills", icon: <ToolOutlined />, disabled: true },
  { key: "/", label: "Messages", icon: <MessageOutlined />, disabled: true },
  { key: "/", label: "User Contact", icon: <ContactsOutlined /> },
  {
    key: "/",
    label: "User Contact Field",
    icon: <IdcardOutlined />,
    disabled: true,
  },
  { key: "/", label: "Blocked", icon: <StopOutlined />, disabled: true },
  { key: "/", label: "Missed Calls", icon: <PhoneOutlined />, disabled: true },
];
