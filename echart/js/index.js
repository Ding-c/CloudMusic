function exam1(){
    // ecarts四个步骤
    // 1.找到放入图标的盒子
    // 2.使用echarts初始化这个盒子
    // 3.写好表格配置
    // 4.把表格配置绑定到echarts对象上
    let box = document.querySelector("#exam1")
    let myChart = echarts.init(box)
    let option = {
        color:new echarts.graphic.LinearGradient(0,0,0,1,[
            {
                offset:0,
                color:'#00E2FF'
            },
            {
                offset:1,
                color:'#0063BF'
            }
            ]),
            // 控制表格大小和位置的选项
            grid:{
               left:"10%",
               top:"10%",
               right:"10%",
               bottom:"10%",
               containLabel:true
            },
        // xAxis和yAxis是坐标配置
        xAxis:{
            type:'category',
            data:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            axisLabel:{
                textStyle:{
                    color:"rgba(255,255,255,0.7)"
                }
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            }
            // splitLine:{
            //     lineStyle:
            // }
        },
        yAxis:{
            type:'value',
            axisLabel:{
                textStyle:{
                    color:"rgba(255,255,255,0.7)"
                }
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            splitLine:{
                lineStyle:{
                    color:"rgba(255,255,255,0.1)"
                }
            }
        },
        // series配置表格的数据
        series:[{
            data:[120,200,150,80,70,110,130],
            type:'bar',
            barWidth:"35%",
            itemStyle:{
                barBorderRadius:[10,10,0,0]
            }
            
        }]
    }
    myChart.setOption(option)
}
exam1()
// 折线图
function exam2(){
    // ecarts四个步骤
    // 1.找到放入图标的盒子
    // 2.使用echarts初始化这个盒子
    // 3.写好表格配置
    // 4.把表格配置绑定到echarts对象上
    let box = document.querySelector("#exam2")
    let myChart = echarts.init(box)
    let option = {
        tooltip:{
            trigger:'axis'
        },
        legend:{
            textStyle:{
                color:"white"
            }
        },
        grid:{
            left:"3%",
            right:"4%",
            bottom:"3%",
            containLabel:true
        },
        // xAxis和yAxis是坐标配置
        xAxis:{
            type:'category',
            data:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            axisLabel:{
                textStyle:{
                    color:"rgba(255,255,255,0.7)"
                }
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            }
        },
        yAxis:{
            type:'value',
            axisLabel:{
                textStyle:{
                    color:"rgba(255,255,255,0.7)"
                }
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            splitLine:{
                lineStyle:{
                    color:"rgba(255,255,255,0.1)"
                }
            }
        },
        // series配置表格的数据
        series:[
            {
                name:'邮件营销',
                type:'line',
                data:[120,132,101,134,90,230,210],
                smooth:true,
                showSymbol:false,
                itemStyle:{
                    color:"orange",
                    width:3
                }   
            },
            {
                name:'联盟广告',
                type:'line',
                data:[220,182,191,234,290,330,310],
                smooth:true,
                showSymbol:false,
                itemStyle:{
                    color:"skyblue",
                    width:3
                }   
            },
            {
                name:'推荐广告',
                type:'line',
                data:[310,182,200,134,190,330,210],
                smooth:true,
                showSymbol:false,
                itemStyle:{
                    color:"skyblue",
                    width:3
                }   
            },
    ]
    }
    myChart.setOption(option)
}
exam2()

function exam3(){
    // ecarts四个步骤
    // 1.找到放入图标的盒子
    // 2.使用echarts初始化这个盒子
    // 3.写好表格配置
    // 4.把表格配置绑定到echarts对象上
    let box = document.querySelector("#exam2")
    let myChart = echarts.init(box)
    
}
exam3()