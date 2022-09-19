(function() {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var yearData=[
    {year: 2020, data:[{name: '北京',value: 5.24},
    {name: '天津',value: 1.54},
    {name: '上海',value: 1295.3},
    {name: '重庆',value: 0.25},
    {name: '河北',value: 212.53},
    {name: '河南',value: 62.86},
    {name: '云南',value: 4.42},
    {name: '辽宁',value: 54.95},
    {name: '黑龙江',value: 49.57},
    {name: '湖南',value: 5.88},
    {name: '安徽',value: 12.05},
    {name: '山东',value: 76.76},
    {name: '新疆',value: 7466.97},
    {name: '江苏',value: 58.44},
    {name: '浙江',value: 0.01},
    {name: '江西',value: 7.25},
    {name: '湖北',value: 18.99},
    {name: '广西',value: 19.49},
    {name: '甘肃',value: 1192.24},
    {name: '山西',value: 61.78},
    {name: '内蒙古',value: 4146.83},
    {name: '陕西',value: 141.32},
    {name: '吉林',value: 70.80},
    {name: '福建',value: 4.15},
    {name: '贵州',value: 0.62},
    {name: '广东',value: 10.03},
    {name: '青海',value: 1250.35},
    {name: '西藏',value: 2161.86},
    {name: '四川',value: 91.38},
    {name: '宁夏',value: 116.23},
    {name: '海南',value: 5.99},
    {name: '台湾',value: 4.15},
    {name: '香港',value: 4.15},
    {name: '澳门',value: 4.15}] }
]
    var option = {
        tooltip : {//提示框组件。
            trigger: 'item',//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
            formatter: '{a}<br/> {b}&nbsp&nbsp&nbsp&nbsp{c}万公顷'
        },
        //inverse: true,
        visualMap: {//颜色的设置  dataRange
            left:'3%',
            bottom:'10%',
            pieces: [
                {min: 2000},
                {min: 100, max: 2000},//color:'#0164e4'
                {min: 50, max: 100,},//color: '#006edd'
                {min: 20, max: 50, },//color:'#3892e6'
                {min: 5, max: 20,},//color:'#70b7ee'
                {min: 0, max: 5,},//color:'#a8dbf7'
            ],
//            min: 0,
//            max: 2500,
//            calculable : true,//颜色呈条状
            text:['沙土化面积（万公顷）'],// 文本，默认为数值文本
            textStyle:{
                color:'white'
            },
            color: ['#ba9550', '#e1ca8d', '#ece8ce'],
            showLabel: true
        },
        // toolbox: {//工具栏
        //     show: true,
        //     orient : 'vertical',//工具栏 icon 的布局朝向
        //     x: 'right',
        //     y: 'center',
        //     feature : {//各工具配置项。
        //         mark : {show: true},
        //         dataView : {show: true, readOnly: false},//数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
        //         restore : {show: true},//配置项还原。
        //         saveAsImage : {show: true}//保存为图片。
        //     }
        // },
        roamController: {//控制地图的上下左右放大缩小 图上没有显示
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series : [
            {
                name: '沙土化面积',
                type: 'map',
                mapType: 'china',
                zoom: 1.26,
                roam: false,//是否开启鼠标缩放和平移漫游
                itemStyle:{//地图区域的多边形 图形样式
                    normal:{//是图形在默认状态下的样式
                        label:{
                            show:true,//是否显示标签
                            textStyle: {
                                color: "rgb(249, 249, 249)"
                            }
                        }
                    },
                    emphasis:{//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                        label:{show:true}
                    }
                },
                top:"8%",//组件距离容器的距离
                left:'10%',
                //right:'5%',
                data:yearData[0].data

            }
        ],

    };
    myChart.setOption(option);
    myChart.on('mouseover', function (params) {
        var dataIndex = params.dataIndex;
        console.log(params);
    });

    


  // window.addEventListener("resize", function() {
  //   myChart.resize();
  // });
})();
