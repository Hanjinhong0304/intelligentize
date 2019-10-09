import React, { Component } from 'react'
import { Input, Button } from 'antd';
import managementStyle from "../scss/index.module"
import isLogin from "@/utils/isLogin"
import ManagementTable from "@/components/Table/"
import ManagementButton from "@/components/Button/"
import ManagementModal from "@/components/Modal/"
import { columns } from "@/utils/management.js"

class Index extends Component {
  state = {
    columns
  }
  render() {
    let { columns } = this.state;
    return (
      <div className={managementStyle["ArchivesManagement"]} >
        <header>档案管理</header>
        <section className={managementStyle["search"]}>
          <Input placeholder="输入姓名或手机号查询" />
          <Button>查询</Button>
        </section>
        <ManagementButton />
        <ManagementTable columns={columns} />
        <ManagementModal />
      </div>
    )
  }
}
export default isLogin(Index)