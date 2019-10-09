import React, { Component } from 'react'
import { DatePicker, Tag  } from 'antd';
import "./scss/attendanceCom.module"
const { RangePicker } = DatePicker;
const { CheckableTag } = Tag;
export default class AttendanceCom extends Component {
    state = {
        ind: -1,
        tagsFromServer: ['今日', '昨日', '本周', '本月', '最近7日', '最近30日']
    }
    handleChange(index) {
        this.setState({ ind: index })
    }
    render() {
        let { ind, tagsFromServer } = this.state;
        return (
            <div>
                {tagsFromServer.map((tag, index) => (
                    <CheckableTag
                        key={tag}
                        checked={ind === index}
                        onChange={() => this.handleChange(index)}
                    >
                        {tag}
                    </CheckableTag>
                ))}
                <p>
                    <RangePicker></RangePicker>
                </p>
            </div>
        )
    }
}
