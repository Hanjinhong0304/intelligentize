import React, { Component } from 'react'
import { Button, Icon, Upload, message } from 'antd';
import BottonStyle from "./scss/index.module";
import { exportXlsx, dowmload } from "@/api/management.js";
import { observer, inject } from "mobx-react"
@inject('aboutXlsx')
@observer
class ComponentBotton extends Component {
    render() {
        return (
            <section className={BottonStyle["btns"]}>
                <Button onClick={this.selectFn}><Icon type="form"></Icon>编辑</Button>
                <Button onClick={this.delFn}><Icon type="delete"></Icon>删除</Button>
                <Upload customRequest={this.exportXlsx} showUploadList={false}>
                    <Button><Icon type="login"></Icon>导入</Button>
                </Upload>
                <Button onClick={() => this.dowmload(false)}><Icon type="logout"></Icon>导出</Button>
                <Button onClick={this.addXlsx}><Icon type="plus-circle"></Icon>添加</Button>
                <Button onClick={() => this.dowmload(true)}><Icon type="vertical-align-bottom"></Icon>下载原模板</Button>
            </section>
        )
    }
    dowmload = (flag) => {//下载原模板  、 导出
        let exportlist = this.props.aboutXlsx.exportlist //选中的数据
        if (flag) { //下载原模板
            let filename = 'staffList'
            dowmload('/management/exportXlsx/original', {
                filename
            }).then(res => {
                this.createFile(filename, res)
            })
        } else { // 导出
            if (!exportlist.length) {
                message.error('请选择要导出的内容')
            } else {
                dowmload('/management/exportXlsx/data', { data: JSON.stringify(exportlist) }).then(res => {
                    this.createFile('导出列表', res)
                })
            }
        }
    }
    exportXlsx = (e) => {//导入
        let { file } = e;
        let fileData = new FormData();
        fileData.append('file', file)
        exportXlsx(fileData).then(res => {
            this.props.aboutXlsx.addList(res.data)
        })
    }
    createFile = (filename, res) => { //公共方法下载原模板  、 导出
        const aDom = document.createElement('a');
        aDom.href = window.URL.createObjectURL(new Blob([res]))
        aDom.setAttribute('download', filename + '.xlsx');
        aDom.style.display = 'none';
        document.body.appendChild(aDom)
        aDom.click()
        document.body.removeChild(aDom)
    }
    selectFn = () => { //点击编辑checkbox出现
        this.props.aboutXlsx.selectFn()
    }
    delFn = () => { //删除
        let exportlist = this.props.aboutXlsx.exportlist
        if (!exportlist.length) {
            message.error('请选中要删除(点击编辑)');
        } else {
            this.props.aboutXlsx.dellist({ id: JSON.stringify(exportlist) })
        }
    }
    addXlsx = () => { //添加
        this.props.aboutXlsx.addXlsx()
    }
}
export default ComponentBotton