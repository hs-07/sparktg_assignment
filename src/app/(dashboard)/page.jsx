"use client";
import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { usePathname } from "next/navigation";
const { Header, Sider } = Layout;

import { Navbar } from "@/components/ui";
import { GENERAL_ITEMS } from "@/utils/constants";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState(pathname);

  const menuItems = [
    ...GENERAL_ITEMS.map((item) => ({
      key: item.key,
      icon: item.icon,
      label: item.label,
      disabled: item.disabled,
    })),
  ];
  useEffect(() => {
    setSelectedKey(pathname);
  }, [pathname]);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]!">
      <Navbar />
      <Layout style={{ minHeight: "calc(100vh - 3rem)" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="bg-white! text-black!"
        >
          <span
            className={
              !collapsed
                ? "flex pl-7 py-2 font-bold text-gray-500 font-[family-name:var(--font-geist-sans)]!"
                : "flex pl-2 py-2 font-bold text-gray-500 font-[family-name:var(--font-geist-sans)]!"
            }
          >
            SETTINGS
          </span>
          <Menu
            selectedKeys={[selectedKey]}
            mode="inline"
            items={menuItems}
            disabled={menuItems.disabled}
          />
        </Sider>
        <Layout>
          <Header className="bg-white! px-4!">User Contact</Header>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
