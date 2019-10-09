function echartsLine(echarts,dom,data,type,nums,color){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(dom);
    // 绘制图表
    myChart.setOption({
        // title: { 
        //     text: title,
        //     textStyle: {
        //         color: 'blue',
        //         fontSize: 14,
        //     }, 
        // },
        tooltip: {},
        xAxis: {
            data: data
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: type ,
            data: nums,
            itemStyle:{  
                normal:{    
                     lineStyle:{    
                         color:color    
                     }    
                 }  
            }, 
        }]
    });
}
export default echartsLine;