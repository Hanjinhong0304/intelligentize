function echartsPie(echarts,dom,data,type,nums,color){
    var myChart = echarts.init(dom);
    myChart.setOption({
        legend: {
            orient: 'vertical',
            x: 'left',
            data:[data]
        },
        color: color, 
        series: [
            {
                type:type,
                radius: ['75%', '65%'],
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle : {
                            fontSize : '20',
                            color:'gray'
                            }
                        }      
                },
                data:nums
            }
        ]
    });
}

export default echartsPie;