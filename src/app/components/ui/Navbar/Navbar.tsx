"use client";

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const { Header } = Layout;

const Navbar = ({
  items,
}: {
  items: {
    key: string;
    lable: string;
    href: string;
  }[];
}) => {
  const pathName = usePathname();
  return (
    <Layout className="layout">
      <Header className="flex items-center">
        <Content>
          <Link href={"/"}>
            <Title level={3} className="text-white mb-0">
              {" "}
              Doctors-Portal
            </Title>
          </Link>
        </Content>
        <Menu
          disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[
            items.find((item) => item.href === pathName)?.key || "1",
          ]}
        >
          {items.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link href={item.href} className="text-white">
                  {item.lable}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
