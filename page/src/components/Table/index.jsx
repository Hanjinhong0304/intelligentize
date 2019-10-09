import React, { Component } from 'react'
import { Table, Pagination } from 'antd';
import { observer, inject } from 'mobx-react';
// import "./scss/table.module"
@inject('aboutXlsx')
@observer
class componentName extends Component {
    state = {
        limit: 10,
        pageid: 0,
        selectedRowKeys: []
    }
    render() {
        let { columns, aboutXlsx } = this.props;
        let { list, size, selectFlag } = aboutXlsx;
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <section>
                <Table columns={columns} rowSelection={selectFlag ? rowSelection : null} dataSource={list} size='small' pagination={false} />
                <Pagination total={size} defaultCurrent={1} onChange={this.page}></Pagination>
            </section>
        )
    }
    componentDidMount() {
        let { limit, pageid } = this.state;
        this.renderTab(limit, pageid)
    }
    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
        this.props.aboutXlsx.exportdata(selectedRowKeys)
    };
    page = (page) => {
        let { limit } = this.state
        this.renderTab(limit, page - 1)
    }
    renderTab = (limit, pageid) => {
        this.props.aboutXlsx.getList(limit, pageid)
    }
}
export default componentName