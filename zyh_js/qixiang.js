// 柱状图1模块
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  // 指定配置和数据
  var option = {
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


  myChart.setOption(option);
})();


// 柱状图2模块
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  // 指定配置和数据
  var option = {
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
        data: [14.3, 16.1, 29.5, 31.9, 38.1, 39.6, 41.9, 37.3, 35, 31, 21.6, 13.4],
        lineStyle: {
          width: 1,
          color: '#5aa8eb'
        }
      },
      {
        name: '最低气温',
        type: 'line',
        stack: 'Total',
        data: [-17, -14.7, -8, -0.1, 7.7, 9.8, 16, 14.6, 7.5, -3.4, -9.5, -13.5],
        lineStyle: {
          width: 1,
          color: '#ff7070'
        },
      }
    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);

})();

// 饼形图定制
// 折线图定制
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));

  option = {
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
            value: 58
          }
        ]
      },
      // {
      //   type: 'gauge',
      //   center: ['50%', '60%'],
      //   startAngle: 200,
      //   endAngle: -20,
      //   min: 0,
      //   max: 60,
      //   itemStyle: {
      //     color: '#FD7347'
      //   },
      //   progress: {
      //     show: true,
      //     width: 8
      //   },
      //   pointer: {
      //     show: false
      //   },
      //   axisLine: {
      //     show: false
      //   },
      //   axisTick: {
      //     show: false
      //   },
      //   splitLine: {
      //     show: false
      //   },
      //   axisLabel: {
      //     show: false
      //   },
      //   detail: {
      //     show: false
      //   },
      //   data: [
      //     {
      //       value: 20
      //     }
      //   ]
      // }
    ]
  };
  

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


// 学习进度柱状图模块
(function () {
  // 基于准备好的dom，初始化echarts实例
  //var myChart = echarts.init(document.querySelector(".bar1 .chart"));

  var data = [21611.2, 2836.4, 1720.8, 21415.4, 98321.9, 4034.1, 4129.0, 108367.0, 190392.1];
  var className = ["原生钛铁矿", "铜矿", "铅矿", "锰矿", "铝土矿", "锌矿", "石墨", "硫铁矿", "玻璃硅"];
  var colorList = ['#39B3FF', '#47E0E0', '#7891D9', '#83D978', '#C7A530', '#FF8439', "#1089E7", "#F57474", "#56D0E3"];
  var defaultData = [100, 100, 100, 100, 100, 100];
  option = {
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '10%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: function (params) {
        return params[0].name + '<br/>' +
          "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
          // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
          params[0].seriesName + ' : ' + params[0].value
      }
    },
    // backgroundColor: 'rgb(20,28,52)',
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff'
        },
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: className
    }, {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        textStyle: {
          color: '#ffffff',
          fontSize: '12'
        },
        formatter: function (value) {
          return value;
        },
      },
      data: data
    }],
    series: [{
        name: '储量',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 0,
            // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //     offset: 0,
            //     color: 'rgb(57,89,255,1)'
            // }, {
            //     offset: 1,
            //     color: 'rgb(46,200,207,1)'
            // }]),
            color: (params) => {
              return colorList[params.dataIndex]
            }
          },
        },
        barWidth: 15,
        data: data
      },
      {
        name: '背景',
        type: 'bar',
        barWidth: 20,
        barGap: '-100%',
        data: defaultData,
        itemStyle: {
          normal: {
            color: '#1B375E',
            barBorderRadius: 0,
          }
        },
      },
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


// 折线图 优秀作品
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  var option;


  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      // formatter: function (params) {
      //   return params[0].name + ': ' + params[0].value;
      // }
      formatter: function (params) {
        let str = ''
        for (let i = 0; i < params.length; i++) {
          if (i == 0) {
            str += `${params[i].name}<br/>${params[i].seriesName.slice(0, params[i].seriesName.indexOf('('))}<br/><span>${params[0].data}</span>m<br/>`;
            continue;
          }
          str += `${params[i].seriesName.slice(0, params[i].seriesName.indexOf('('))}<br/><span>${params[i].data}</span>m<br/>`
        }
        return str
      }
    },
    grid: {
      left: '10%',
      top: '5%',
      bottom: '12%',
      right: '2%'
    },
    xAxis: {
      data: ['阿尔泰山', '天山', '祁连山', '帕米尔', '唐古拉山', '横断山', '喜玛拉雅山', '冈底斯山'],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: 'white',
          fontSize: 10
        },
        interval: 0
      }
    },
    yAxis: [{
      splitNumber: 2,
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 129, 109, 0.1)',
          width: 1 //这里是为了突出显示加上的
        }
      },
      axisLabel: {
        textStyle: {
          color: '#999'
        }
      },
      splitArea: {
        areaStyle: {
          color: 'rgba(255,255,255,.5)'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 129, 109, 0.1)',
          width: 0.5,
          type: 'dashed'
        }
      }
    }],
    series: [{
        name: '雪线 ',
        yAxisIndex: 0,
        type: 'line',
        smooth: true,

        // areaStyle: {
        //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //       offset: 0,
        //       color: 'rgba(98, 227, 255, 1)'
        //     },
        //     {
        //       offset: 1,
        //       color: 'rgba(98, 227, 255, 0)'
        //     }
        //   ])
        // },
        data: [3000, 3600, 4300, 5100, 6100, 4600, 4300, 5800],
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          normal: {
            opacity: 1,
            color: '#FFFFFF',
            borderColor: 'rgba(0, 255, 240, 1)',
            lineStyle: {
              color: '#26658e'
            }
          }
        },
        z: 999
      },
      {
        name: '山峰高程 ',
        type: 'pictorialBar',
        barCategoryGap: '-100%',
        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        label: {
          show: true,
          position: 'top',
          distance: 15,
          color: '#f7fdfd',
          fontWeight: 'bolder',
          fontSize: 15,
        },
        itemStyle: {

          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0,
                  color: '#f7fdfd' //  0%  处的颜色
                },
                {
                  offset: 1,
                  color: '#26658e' //  100%  处的颜色
                }
              ],
              global: false //  缺省为  false
            }
          },
          emphasis: {
            opacity: 1
          }
        },
        data: [4374, 7435, 5826, 7579, 6137, 7556, 8844.43, 7095],
        z: 10
      }
    ]
  };

  option && myChart.setOption(option);


})();



// 折线图定制


// 折线图定制
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));

  // (1)准备数据
  var data = {
    year: [
      [7.0, 0, 0, 5.7, 4.9, 6.0, 5.4, 5.1, 0, 0, 0, 0, 5.1],
      [6.6, 0, 0, 0, 0, 0, 0, 6.4, 6.4, 0, 0, 0, 6.0]
    ]
  };

  // 2. 指定配置和数据
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "17年9-12月",
        "18年1-4月",
        "18年5-8月",
        "18年9-12月",
        "19年1-4月",
        "19年5-8月",
        "19年9-12月",
        "20年1-4月",
        "20年5-8月",
        "20年9-12月",
        "21年1-4月",
        "21年5-8月",
        "21年9月",
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        name: "四川",
        type: "line",
        //stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "新疆",
        type: "line",
        //stack: "总量",
        smooth: true,
        data: data.year[1]
      }
    ]
  };
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();