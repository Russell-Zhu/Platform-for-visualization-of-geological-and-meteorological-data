(function() {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var yearData=[
    {year: 2016, data:[
        {name: '北京',value: 522.5},
        {name: '天津',value: 355.4},
        {name: '上海',value: 1128.9},
        {name: '重庆',value: 1044.7},
        {name: '河北',value: 432.9},
        {name: '河南',value: 600.3},
        {name: '云南',value: 869.1},
        {name: '辽宁',value: 1036.6},
        {name: '黑龙江',value: 591.3},
        {name: '湖南',value: 1626.4},
        {name: '安徽',value: 1316.8},
        {name: '山东',value: 820.9},
        {name: '新疆',value: 282.4},
        {name: '江苏',value: 1298.4},
        {name: '浙江',value: 1728.1},
        {name: '江西',value: 2211.1},
        {name: '湖北',value: 1337.9},
        {name: '广西',value: 1376.9},
        {name: '甘肃',value: 192.0},
        {name: '山西',value: 376.6},
        {name: '内蒙古',value: 469.5},
        {name: '陕西',value: 527.3},
        {name: '吉林',value: 878.3},
        {name: '福建',value: 1604.5},
        {name: '贵州',value: 1010.0},
        {name: '广东',value: 2353.6},
        {name: '青海',value: 405.0},
        {name: '西藏',value: 359.8},
        {name: '四川',value: 936.8},
        {name: '宁夏',value: 206.3},
        {name: '海南',value: 2445.1},
        {name: '台湾',value: Math.round(Math.random()*2000)},
        {name: '香港',value: Math.round(Math.random()*2000)},
        {name: '澳门',value: Math.round(Math.random()*2000)}] },
    {year: 2017, data:[
        {name: '北京',value: 720.6},
    {name: '天津',value: 485.8},
    {name: '上海',value: 1009.1},
    {name: '重庆',value: 1003.2},
    {name: '河北',value: 674.2},
    {name: '河南',value: 706.5},
    {name: '云南',value: 659.0},
    {name: '辽宁',value: 479.7},
    {name: '黑龙江',value: 452.0},
    {name: '湖南',value: 932.8},
    {name: '安徽',value: 1000.5},
    {name: '山东',value: 667.1},
    {name: '新疆',value: 344.5},
    {name: '江苏',value: 1077.0},
    {name: '浙江',value: 1359.9},
    {name: '江西',value: 1108.6},
    {name: '湖北',value: 987.2},
    {name: '广西',value: 1252.9},
    {name: '甘肃',value: 181.0},
    {name: '山西',value: 496.6},
    {name: '内蒙古',value: 177.1},
    {name: '陕西',value: 717.8},
    {name: '吉林',value: 468.4},
    {name: '福建',value: 1244.9},
    {name: '贵州',value: 735.2},
    {name: '广东',value: 1632.3},
    {name: '青海',value: 390.4},
    {name: '西藏',value: 425.4},
    {name: '四川',value: 837.8},
    {name: '宁夏',value: 166.2},
    {name: '海南',value: 2002.1},
    {name: '台湾',value: Math.round(Math.random()*2000)},
    {name: '香港',value: Math.round(Math.random()*2000)},
    {name: '澳门',value: Math.round(Math.random()*2000)}] },
    {year: 2018, data:[
        {name: '北京',value: 733.2},
    {name: '天津',value: 755.3},
    {name: '上海',value: 1435.8},
    {name: '重庆',value: 1104.4},
    {name: '河北',value: 649.4},
    {name: '河南',value: 498.7},
    {name: '云南',value: 802.1},
    {name: '辽宁',value: 786.0},
    {name: '黑龙江',value: 740.8},
    {name: '湖南',value: 1730.0},
    {name: '安徽',value: 936.4},
    {name: '山东',value: 569.1},
    {name: '新疆',value: 286.9},
    {name: '江苏',value: 917.2},
    {name: '浙江',value: 1728.8},
    {name: '江西',value: 2059.8},
    {name: '湖北',value: 1415.5},
    {name: '广西',value: 1086.8},
    {name: '甘肃',value: 293.9},
    {name: '山西',value: 427.8},
    {name: '内蒙古',value: 551.4},
    {name: '陕西',value: 426.7},
    {name: '吉林',value: 718.3},
    {name: '福建',value: 1913.4},
    {name: '贵州',value: 1226.4},
    {name: '广东',value: 1813.9},
    {name: '青海',value: 446.1},
    {name: '西藏',value: 365.2},
    {name: '四川',value: 610.9},
    {name: '宁夏',value: 292.7},
    {name: '海南',value: 2094.3},
    {name: '台湾',value: Math.round(Math.random()*2000)},
    {name: '香港',value: Math.round(Math.random()*2000)},
    {name: '澳门',value: Math.round(Math.random()*2000)}] },
    {year: 2019, data:[
        {name: '北京',value: 579.1},
    {name: '天津',value: 411.5},
    {name: '上海',value: 1173.4},
    {name: '重庆',value: 1026.9},
    {name: '河北',value: 508.3},
    {name: '河南',value: 353.2},
    {name: '云南',value: 804.7},
    {name: '辽宁',value: 788.1},
    {name: '黑龙江',value: 633.5},
    {name: '湖南',value: 1254.9},
    {name: '安徽',value: 893.2},
    {name: '山东',value: 736.0},
    {name: '新疆',value: 300.9},
    {name: '江苏',value: 898.4},
    {name: '浙江',value: 1520.9},
    {name: '江西',value: 1431.8},
    {name: '湖北',value: 1434.2},
    {name: '广西',value: 1569.3},
    {name: '甘肃',value: 255.5},
    {name: '山西',value: 487.3},
    {name: '内蒙古',value: 564.6},
    {name: '陕西',value: 423.9},
    {name: '吉林',value: 736.5},
    {name: '福建',value: 1137.5},
    {name: '贵州',value: 888.3},
    {name: '广东',value: 2095.4},
    {name: '青海',value: 446.5},
    {name: '西藏',value: 413.6},
    {name: '四川',value: 1343.3},
    {name: '宁夏',value: 148.8},
    {name: '海南',value: 2067.0},
    {name: '台湾',value: Math.round(Math.random()*2000)},
    {name: '香港',value: Math.round(Math.random()*2000)},
    {name: '澳门',value: Math.round(Math.random()*2000)}] },
    {year: 2020, data:[{name: '北京',value: 461.5},
    {name: '天津',value: 441.4},
    {name: '上海',value: 1295.3},
    {name: '重庆',value: 1452.1},
    {name: '河北',value: 294.8},
    {name: '河南',value: 551.6},
    {name: '云南',value: 1078.3},
    {name: '辽宁',value: 362.9},
    {name: '黑龙江',value: 415.8},
    {name: '湖南',value: 1386.8},
    {name: '安徽',value: 1180.2},
    {name: '山东',value: 521.4},
    {name: '新疆',value: 297.0},
    {name: '江苏',value: 1091.1},
    {name: '浙江',value: 1359.9},
    {name: '江西',value: 1890.5},
    {name: '湖北',value: 1208.6},
    {name: '广西',value: 1234.7},
    {name: '甘肃',value: 355.6},
    {name: '山西',value: 428.7},
    {name: '内蒙古',value: 394.8},
    {name: '陕西',value: 660.2},
    {name: '吉林',value: 446.0},
    {name: '福建',value: 1628.0},
    {name: '贵州',value: 1562.0},
    {name: '广东',value: 2234.0},
    {name: '青海',value: 446.5},
    {name: '西藏',value: 637.8},
    {name: '四川',value: 975.0},
    {name: '宁夏',value: 169.2},
    {name: '海南',value: 1861.3},
    {name: '台湾',value: Math.round(Math.random()*2000)},
    {name: '香港',value: Math.round(Math.random()*2000)},
    {name: '澳门',value: Math.round(Math.random()*2000)}] }
]
    var option = {
        
        tooltip : {//提示框组件。
            trigger: 'item',//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
            formatter: '{a}<br/> {b}&nbsp&nbsp&nbsp&nbsp{c}mm'
        },
        //inverse: true,
        visualMap: {//颜色的设置  dataRange
            left:'3%',
            bottom:'30%',
            pieces: [
                {min: 1500},//color:'#0164e4'
                {min: 1000, max: 1500,},//color: '#006edd'
                {min: 300, max: 1000, },//color:'#3892e6'
                {min: 200, max: 300,},//color:'#70b7ee'
                {min: 10, max: 300,},//color:'#a8dbf7'
                {min:0,max: 10, }//color:"#e0ffff"
            ],
//            min: 0,
//            max: 2500,
//            calculable : true,//颜色呈条状
            text:['降雨量（mm）'],// 文本，默认为数值文本
            textStyle:{
                color:'white'
            },
            color: ['#006edd', '#70b7ee', '#e0ffff'],
            showLabel: true
        },

        roamController: {//控制地图的上下左右放大缩小 图上没有显示
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series : [
            {
                name: '降水量',
                type: 'map',
                mapType: 'china',
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
                top:"5%",//组件距离容器的距离
                bottom:'1%',
                data:yearData[4].data

            }
        ]
    };
    myChart.setOption(option);

  // --------------------------------------------line1------------------------------------------------------------
  var myChart1 = echarts.init(document.querySelector(".line1 .chart"));
  // 指定配置和数据

  var dataAll1 =[
    {year:'2016', 
    data1:[20.3, 11.4, 106.2, 111.0, 537.8, 145.9, 306.0, 944.3, 47.1, 399.3, 1132.1, 778.5, 1219.6, 1631.8, 148.4, 283.4, 914.3, 1799.4, 1718.4, 1990.9, 383.5, 642.6, 2557.7, 1213.1, 1726.6, 4416.3, 351.6, 198.4, 793.9, 10.1, 726.9],
      data2:[461.5, 441.4, 294.8, 428.7, 394.8, 362.9, 446.0, 415.8, 1295.3, 1091.1, 1359.9, 1180.2, 1628.0, 1890.5, 521.4, 551.6, 1208.6, 1386.8, 2234.0, 1234.7, 1861.3, 1452.1, 975.0, 1562.0, 1078.3, 637.8, 660.2, 355.6, 446.5, 169.2, 297.0]
    },
    {year:'2017', 
    data1:[24.8,14.6,175.9,126.6,959.8,463.2,607.4,1419.6,28.0,283.5,931.3,585.6,1151.9,1424.0,291.7,213.1 ,	790.1 ,1582.0,2263.2 ,2057.3 ,502.1,474.3 ,2470.3 ,759.4,1706.7,4415.7,353.8,268.9,645.6,11.4,956.0    ],
    data2:[579.1,411.5 ,508.3 ,487.3 ,564.6 ,788.1 ,736.5 ,633.5 ,1173.4 ,898.4 , 1520.9,893.2 ,1137.5 , 1431.8,736.0 ,353.2 ,1434.2 ,1254.9 ,2095.4 ,1569.3 ,2067.0 ,1026.9 ,1343.3 ,888.3 ,804.7 ,565.2  ,423.9 ,255.5 ,413.6 ,148.8,300.9 ]
    },
    {year:'2018', 
    data1:[20.3, 11.4, 106.2, 111.0, 537.8, 145.9, 306.0, 944.3, 47.1, 399.3, 1132.1, 778.5, 1219.6, 1631.8, 148.4, 283.4, 914.3, 1799.4, 1718.4, 1990.9, 383.5, 642.6, 2557.7, 1213.1, 1726.6, 4416.3, 351.6, 198.4, 793.9, 10.1, 726.9],
      data2:[461.5, 441.4, 294.8, 428.7, 394.8, 362.9, 446.0, 415.8, 1295.3, 1091.1, 1359.9, 1180.2, 1628.0, 1890.5, 521.4, 551.6, 1208.6, 1386.8, 2234.0, 1234.7, 1861.3, 1452.1, 975.0, 1562.0, 1078.3, 637.8, 660.2, 355.6, 446.5, 169.2, 297.0]
    },
    {year:'2019', 
      data1:[24.8,14.6,175.9,126.6,959.8,463.2,607.4,1419.6,28.0,283.5,931.3,585.6,1151.9,1424.0,291.7,213.1 ,	790.1 ,1582.0,2263.2 ,2057.3 ,502.1,474.3 ,2470.3 ,759.4,1706.7,4415.7,353.8,268.9,645.6,11.4,956.0    ],
      data2:[579.1,411.5 ,508.3 ,487.3 ,564.6 ,788.1 ,736.5 ,633.5 ,1173.4 ,898.4 , 1520.9,893.2 ,1137.5 , 1431.8,736.0 ,353.2 ,1434.2 ,1254.9 ,2095.4 ,1569.3 ,2067.0 ,1026.9 ,1343.3 ,888.3 ,804.7 ,565.2  ,423.9 ,255.5 ,413.6 ,148.8,300.9 ]
    },
    {year:'2020', 
      data1:[20.3, 11.4, 106.2, 111.0, 537.8, 145.9, 306.0, 944.3, 47.1, 399.3, 1132.1, 778.5, 1219.6, 1631.8, 148.4, 283.4, 914.3, 1799.4, 1718.4, 1990.9, 383.5, 642.6, 2557.7, 1213.1, 1726.6, 4416.3, 351.6, 198.4, 793.9, 10.1, 726.9],
      data2:[461.5, 441.4, 294.8, 428.7, 394.8, 362.9, 446.0, 415.8, 1295.3, 1091.1, 1359.9, 1180.2, 1628.0, 1890.5, 521.4, 551.6, 1208.6, 1386.8, 2234.0, 1234.7, 1861.3, 1452.1, 975.0, 1562.0, 1078.3, 637.8, 660.2, 355.6, 446.5, 169.2, 297.0]
    },
  ]
  var option1 = {
    color: ["#5aa8eb", "#b2db9e"],
    grid: {
      top: '20%',
      bottom: '10%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        animation: false,
        label: {
          backgroundColor: '#505765'
        }
      },
      itemStyle: 'inherit'
    },
    legend: {
      textStyle: {
        color: '#c1cadf',
        fontSize: 10
      }
    },
    dataZoom: [{
        show: false,
        realtime: true,
        start: 65,
        end: 85
      },
      {
        type: 'inside',
        realtime: true,
        start: 65,
        end: 85
      }
    ],
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        onZero: false
      },
      // prettier-ignore
      data: ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'].map(function (str) {
        return str.replace(' ', '\n');
      }),
      axisLabel: {
        interval: 0,
        color: 'rgba(207, 227, 252, 1)',
        fontSize: 10
      }
    }],
    yAxis: [{
        name: '流量(m^3/s)',
        nameTextStyle: {
          color: 'rgba(207, 227, 252, 1)',
          fontSize: 10
        },
        type: 'value',
        max: 6000,
        axisLabel: {
          interval: 0,
          color: 'rgba(207, 227, 252, 1)',
          fontSize: 10
        }
      },
      {
        name: '降雨量(mm)',
        nameTextStyle: {
          color: 'rgba(207, 227, 252, 1)',
          fontSize: 10
        },
        nameLocation: 'start',
        max: 4000,
        type: 'value',
        inverse: true,
        axisLabel: {
          interval: 0,
          color: 'rgba(207, 227, 252, 1)',
          fontSize: 10
        }
      }
    ],
    series: [{
        name: '流量',
        type: 'line',
        areaStyle: {
          //color: '#5aa8eb'
        },
        lineStyle: {
          width: 1,
         // color: '#5aa8eb'
        },
        itemStyle: {
          //borderColor: '#5aa8eb'
        },
        emphasis: {
          focus: 'series'
        },
        markArea: {
          silent: true,
          itemStyle: {
            opacity: 0.3
          }
        },
        // prettier-ignore
        data: [20.3, 11.4, 106.2, 111.0, 537.8, 145.9, 306.0, 944.3, 47.1, 399.3, 1132.1, 778.5, 1219.6, 1631.8, 148.4, 283.4, 914.3, 1799.4, 1718.4, 1990.9, 383.5, 642.6, 2557.7, 1213.1, 1726.6, 4416.3, 351.6, 198.4, 793.9, 10.1, 726.9]
      },
      {
        name: '降雨量',
        type: 'line',
        yAxisIndex: 1,
        areaStyle: {
          color: '#b2db9e'
        },
        lineStyle: {
          width: 1,
          color: '#b2db9e'
        },
        itemStyle: {
          borderColor: '#b2db9e'
        },
        emphasis: {
          focus: 'series'
        },
        markArea: {
          silent: true,
          itemStyle: {
            opacity: 0.3
          },
          data: [
            [{
                xAxis: '2009/9/10\n7:00'
              },
              {
                xAxis: '2009/9/20\n7:00'
              }
            ]
          ]
        },
        // prettier-ignore
        data: [461.5, 441.4, 294.8, 428.7, 394.8, 362.9, 446.0, 415.8, 1295.3, 1091.1, 1359.9, 1180.2, 1628.0, 1890.5, 521.4, 551.6, 1208.6, 1386.8, 2234.0, 1234.7, 1861.3, 1452.1, 975.0, 1562.0, 1078.3, 637.8, 660.2, 355.6, 446.5, 169.2, 297.0]
      }
    ]
  };
  myChart1.setOption(option1);


  // -------------------------------------------------------line2----------------------------------------------------------------
  var myChart2 = echarts.init(document.querySelector(".line2 .chart"));
  // 指定配置和数据
  var dataAll2 = [
      //----------2016
    [{ city: "beijing", 
        datah: [8,	11.7,	23.8,	31.9,	34.3,	37.8,	36.5,	34.6,	32,	28.4,	16.5,	10.6],
        datal: [-15.2,	-9,	-4,	4.5,	7.8	,15.7	,20.4	,16	,8.4,	-0.2,	-6.6,	-8.2]},
    { city: "shanghai", 
        datah: [16.5,	21.3,	25.8,	27.3,	29.8,	34.1,	40.3,	36.7,	35.4,	31.3,	23.8,	18.7],
        datal: [-7.2,	-1.1,	1.3,	10.6,	13.2,	17.3,	23.7,	22.7,	20.5,	13.9,	2.2,	1.6]},    
    { city: "shandong", 
        datah: [14,	16.5,	24.5,	31.5,	33.8,	35.6,	36.9,	35.9,	33.1,	31.3,	22.3,	15.5],
        datal: [-17,	-8.2,	-2.6,	8.1,	9.7,	16.9,	18.3,	14.8,	11.4	,3.1	,-7.2,	-6.7]}],
    //----------2017---
    [{ city: "beijing", 
        datah: [9.5,	16.1,	19.9,	33.5,	36.8,	38.5,	36.5,	38.2,	32.5,	26.3,	20.3,	10.2],
        datal: [-10.1,	-10	,-2.2,	4.3,	11.5,	12.6,	19.5	,15.6	,8.1	,-0.4	,-6.5	,-8.6]},
    { city: "shanghai", 
        datah: [21.5,	18.4,	21.3,	31.2,	33.9,	32.6,	40.9,	38.1,	35.1,	31.2,	23.5,	17],
        datal: [-1,	0,	3.8	,7.7,	14.8	,18.2,	22.9,	24,	18.4,	10.9,	5.4,	0.5]},    
    { city: "shandong", 
        datah: [13,	18.9,	20.2,	32.1,	36.9,	36.5,	37.4,	36,	34	,25.1,	22,	14.1],
        datal: [-8.9,	-6.7,	-2,	6.3,	12.7,	13.7,	17.9,	15,	14.3,	2.8	,-3.1,	-5.9]}],
    //----------2018-----
    [{ city: "beijing", 
        datah: [8.5,	12.1,	27.4,	29.8,	34.8,	39.9,	36.3,	37,	33.3,	26.7,	18,	9.9],
        datal: [-12.9,	-12.1,	-4.5,	0.4,	9.7	,15.2,	21,	19.4,	7.6	,1.6,	-4.1	,-13.9]},
    { city: "shanghai", 
        datah: [15,	18.3,	25.8,	30.1,	35.7,	36.7,	37.7,	36.8,	34.2,	26.4,	22.1,	20.9],
        datal: [-2.8,	-2.1,	1.4,	7.7	,14.2,	18.5,	24.2,	25.1,	20.1,	12.8,	9.1,	-2.4]},    
    { city: "shandong", 
        datah: [10.9,	17.5,	29.7,	32.6,	33.6,	37.2,	36.7,	37.1,	32.2,	27.5,	21.5,	13.9],
        datal: [-10.7,	-10,	-2.6,	0.7	,11.7	,15.7	,22.5	,19.5	,12.1	,5.1	,1.2,	-11.6]}],
    //----------2019----------
    [{ city: "beijing", 
        datah: [11.8,	14,	24.8,	28.3,	36.6,	37,	38,	34,	35.9,	29.9,	18.7,	10.1],
        datal: [-12.4,	-10.8,	-3.4,	1.2	,6.5	,18	,19.2	,16.3	,13.5	,0.9,	-6.9,	-14.4]},
    { city: "shanghai", 
        datah: [13.8,	16.9,	25.3,	30.5,	34.3,	33.6	,37.9,	37.1	,33.6	,30.1,	24.2,	19.9],
        datal: [1.2,	1,	5.1,	8.4,	12.9,	17,	21.2,	20.2,	18.7,	14,	6.1,	1.1]},    
    { city: "shandong", 
        datah: [13.5,	15.3,	25.9,	28.6,	39,	37.7,	38.7	,35.6	,34.7	,31.9,	22.6,	12.9],
        datal: [-9,	-6.1,	0,	2.8	,10,	17.6,	17.9,	18.2,	13.8,	4.1,	-2.2,	-10.6]}],
    //----------2020--------
    [{ city: "beijing", 
        datah: [9.6,12.7,26.2,32.1,35,37.3,37.3,37.8,33.5,23.2,20.5,7.7],
        datal: [-10.5,	-9,	-4.8,	1.7,	6,	13.8,	19.2,	17.5,	10.7,	2.3	,-5.2	,-12.8]},
    { city: "shanghai", 
        datah: [21.6,24.5,25.7,32.3, 33,34.6,36.8,38.6,35.5,28.1,27.2,16.6],
        datal: [2,	0.3,	5.4,	8,	13,	20.2,	20.2,	24.8,	17,	12.2,	7.1	,-5.9]},    
    { city: "shandong", 
        datah: [11.2,20.7,	26.3,	33.7,	35,	38.2,	34.2,	35.3,	33,	25.1,	22,	11.8],
        datal: [-6.9,	-5.9,	-2,	3.5,	10,	16,	17.2	,17.7,	14.2,	5	,-1.9,	-14]}],
  ];
  var option2 = {
    color: ['#5aa8eb','#ff7070'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['最高气温', '最低气温'],
      textStyle: {
        color: 'rgba(207, 227, 252, 1)'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
      axisLabel: {
        interval: 0,
        color: 'rgba(207, 227, 252, 1)',
        fontSize: 10
      }
    },
    yAxis: {
      name: '温度（℃）',
      type: 'value',
      axisLabel: {
        interval: 0,
        color: 'rgba(207, 227, 252, 1)',
        fontSize: 10
      },
      nameTextStyle: {
        color: 'rgba(207, 227, 252, 1)',
        fontSize: 10
      },
    },
    series: [{
        name: '最高气温',
        type: 'line',
        //stack: 'Total',
        data: dataAll2[4][0].datah,
        lineStyle: {
          width: 1,
          color: '#5aa8eb'
        }
      },
      {
        name: '最低气温',
        type: 'line',
        stack: 'Total',
        data: dataAll2[4][0].datal,
        lineStyle: {
          width: 1,
          color: '#ff7070'
        },
      }
    ]
  };

  // 把配置给实例对象
  myChart2.setOption(option2);

  //--------------------------------------------------pie1-----------------------------------------------------------------
  // 基于准备好的dom，初始化echarts实例
  var myChart3 = echarts.init(document.querySelector(".pie1 .chart"));

  var dataAll3 =[
      //----------2016
    [{ city: "beijing", data:55},
    { city: "shanghai", data:77},    
    { city: "shandong", data:54}],
  //----------2017---
  [{ city: "beijing", data:53},
  { city: "shanghai", data:74},    
  { city: "shandong", data:56}],
  //----------2018-----
  [{ city: "beijing", data:51},
    { city: "shanghai", data:68},    
    { city: "shandong", data:55}],
  //----------2019----------
  [{ city: "beijing", data:55},
    { city: "shanghai", data:68},    
    { city: "shandong", data:57}],
  //----------2020--------
  [{ city: "beijing", data:52},
    { city: "shanghai", data:73},    
    { city: "shandong", data:55}],
  ]
  option3 = {
    series: [
      {
        type: 'gauge',
        center: ['50%', '70%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        radius: '100%',
        splitNumber: 10,
        itemStyle: {
          color: '#5aa8eb'
        },
        progress: {
          show: true,
          width: 30
        },
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 30,
          }
        },
        axisTick: {
          distance: -35,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: '#999'
          }
        },
        splitLine: {
          distance: -40,
          length: 10,
          lineStyle: {
            width: 3,
            color: '#999'
          }
        },
        axisLabel: {
          distance: 8,
          color: '#999',
          fontSize: 10
        },
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          width: '60%',
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 30,
          fontWeight: 'bolder',
          formatter: '{value} %',
          color: 'auto'
        },
        data: [
          {
            value: 52
          }
        ]
      },
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart3.setOption(option3);

// --------------------------------------------------------action---------------------------------------------------------------


var display=document.querySelector(".no h1");
var displayYear=document.querySelectorAll(".panel .year");
var displayCity=document.querySelectorAll(".panel .city");
var item=4;
var city=0;
$(".map h2").on("click", "a", function() {
    console.log($(this).index());
    if ($(this).index()==0) //前一年
    {
        if (item>0) item=item-1;
        option.series[0].data = yearData[item].data;
    }
    else    //后一年
    {
        if (item<4) item=item+1;
        option.series[0].data = yearData[item].data;
    }
    display.innerHTML=yearData[item].year+"年全国降雨量情况";
    for (i = 0; i < displayYear.length; ++i) {
        displayYear[i].innerHTML=yearData[item].year;
    }
    myChart.setOption(option);
    option1.series[0].data=dataAll1[item].data1;
    option1.series[1].data=dataAll1[item].data2;
    myChart1.setOption(option1);

    if (city==0){
        option2.series[0].data=dataAll2[item][0].datah;
        option2.series[1].data=dataAll2[item][0].datal;
        option3.series[0].data[0].value=dataAll3[item][0].data;
    }
    else if (city==2){
        option2.series[0].data=dataAll2[item][1].datah;
        option2.series[1].data=dataAll2[item][1].datal;
        option3.series[0].data[0].value=dataAll3[item][1].data;
    }
    else if (city==11){
        option2.series[0].data=dataAll2[item][2].datah;
        option2.series[1].data=dataAll2[item][2].datal;
        option3.series[0].data[0].value=dataAll3[item][2].data;
    }
    myChart2.setOption(option2);
    myChart3.setOption(option3);
});

myChart.on('click', function (params) {
    var name = params.name;
    console.log(name);
    city=params.dataIndex;
    console.log(city);

    if (city==0){
        option2.series[0].data=dataAll2[item][0].datah;
        option2.series[1].data=dataAll2[item][0].datal;
        option3.series[0].data[0].value=dataAll3[item][0].data;
    }
    else if (city==2){
        option2.series[0].data=dataAll2[item][1].datah;
        option2.series[1].data=dataAll2[item][1].datal;
        option3.series[0].data[0].value=dataAll3[item][1].data;
    }
    else if (city==11){
        option2.series[0].data=dataAll2[item][2].datah;
        option2.series[1].data=dataAll2[item][2].datal;
        option3.series[0].data[0].value=dataAll3[item][2].data;
    }
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    for (i = 0; i < displayCity.length; ++i) {
        displayCity[i].innerHTML=name;
    }
});

// window.addEventListener("resize", function() {
//   myChart.resize();
// });
})();
