import { observable, action } from "mobx";
import { getXlsx, removeFile,addFile} from '@/api/management';
import { message, Modal } from 'antd'
const { confirm } = Modal;
class aboutXlsx {
    @observable list = []
    @observable size = 1;
    @observable sumList = [];
    @observable exportlist = [];
    @observable selectFlag = false;
    @observable visible = false;//添加的遮罩层
    @action
    getList(limit, pageid) {//获取全部数据
        if (this.sumList[pageid]) {
            this.list = this.sumList[pageid];
            return
        }
        getXlsx(limit, pageid).then(res => {
            let { data: { data, size } } = res
            data = data.map(item => {
                item.key = item.id;
                return item
            })
            this.list = data;
            this.sumList[pageid] = data
            this.size = size
        })
    }
    @action
    addList(data) { //导入数据
        data = data.map(item => {
            item.key = item.id;
            return item
        })
        this.list = [].concat(data, this.list)
        this.size = this.list.length
    }
    @action
    exportdata(data) { //导出数据
        this.exportlist = data
    }
    @action
    selectFn() { //checkbox的状态
        this.selectFlag = !this.selectFlag
    }
    @action
    dellist(obj) { // 删除事件
        let that = this;
        confirm({
            title: '确定要删除吗？',
            content: '真的要删除吗？',
            onOk() {
                removeFile(obj).then(res => {
                    let { code, msg } = res
                    if (code) {
                        that.sumList = [];
                        message.success(msg)
                        that.getList();//获取全部数据
                        that.selectFlag = false;//checkbox的状态，隐藏
                        that.exportlist = [];//删除的数据为空（导出数据为空）
                        that.size = that.list.length;//重新给数据的size赋值
                    }
                })
            },
            onCancel() {
                that.selectFlag = false;//checkbox的状态，隐藏
                that.exportlist = [];//删除的数据为空（导出数据为空）
            },
        });
    }
    addXlsx = () => { //添加遮罩层显示
        this.visible = true
    }
    addFn = (obj) => { //添加
        addFile(obj).then(res=>{
            let {code,msg}=res
            if(code){
                message.success(msg)
                this.getList()
                this.visible = false
                this.size = this.list.length
            }
        })
    }
}

export default new aboutXlsx()