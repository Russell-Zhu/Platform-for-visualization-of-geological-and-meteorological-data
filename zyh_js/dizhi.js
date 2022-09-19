// 柱状图1模块
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 指定配置和数据
  var option = {
    legend: {
      top: "90%",
      itemWidth: 15,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [{
      name: "点位统计",
      type: "pie",
      // 如果radius是百分比则必须加引号
      radius: ["10%", "80%"],
      center: ["50%", "48%"],
      roseType: "radius",
      data: [{
          value: 3328,
          name: "山西"
        },
        {
          value: 2202,
          name: "贵州"
        },
        {
          value: 1433,
          name: "四川"
        },
        {
          value: 1232,
          name: "河南"
        },
        {
          value: 987,
          name: "内蒙古"
        },
        {
          value: 986,
          name: "黑龙江"
        },
        {
          value: 860,
          name: "河北"
        },
        {
          value: 839,
          name: "重庆"
        }
      ],
      // 修饰饼形图文字相关的样式 label对象
      label: {
        fontSize: 13
      },
      // 修饰引导线样式
      labelLine: {
        // 连接到图形的线长度
        length: 2,
        // 连接到文字的线长度
        length2: 2
      }
    }]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [{
      year: "能源矿产",
      data: [{
          value: 3328,
          name: "山西"
        },
        {
          value: 2202,
          name: "贵州"
        },
        {
          value: 1433,
          name: "四川"
        },
        {
          value: 1232,
          name: "河南"
        },
        {
          value: 987,
          name: "内蒙古"
        },
        {
          value: 986,
          name: "黑龙江"
        },
        {
          value: 860,
          name: "河北"
        },
        {
          value: 839,
          name: "重庆"
        }
      ]
    },
    {
      year: "贵金属矿产",
      data: [{
          value: 216,
          name: "山东"
        },
        {
          value: 160,
          name: "河北"
        },
        {
          value: 134,
          name: "内蒙古"
        },
        {
          value: 119,
          name: "贵州"
        },
        {
          value: 111,
          name: "辽宁"
        },
        {
          value: 102,
          name: "新疆"
        },
        {
          value: 99,
          name: "吉林"
        },
        {
          value: 92,
          name: "陕西"
        }
      ]
    }
  ];

  $(".pie h2 ").on("click", "a", function () {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();


// 柱状图1模块
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      borderColor: 'rgba(75, 253, 238, 0.4)',
      textStyle: {
        color: '#CFE3FC',
      },
      borderWidth: 1,
      formatter: function (params) {
        let str = ''
        for (let i = 0; i < params.length; i++) {
          if (i == 0) {
            str += `${params[i].name}<br/>${params[i].seriesName.slice(0, params[i].seriesName.indexOf('('))}<br/><span>${params[0].data}</span>亿m³<br/>`;
            continue;
          }
          str += `${params[i].seriesName.slice(0, params[i].seriesName.indexOf('('))}<br/><span>${params[i].data}</span>亿m³<br/>`
        }
        return str
      }
    },
    legend: [{
        data: ['地表水资源量'],
        top: '5%',
        x: '20%',
        itemWidth: 10,
        borderColor: 'rgba(255, 192, 0, 1)',
        textStyle: {
          color: '#c1cadf',
          fontSize: 10
        }
      },
      {
        data: ['地下水资源量'],
        top: '5%',
        x: '40%',
        itemWidth: 10,
        textStyle: {
          color: '#c1cadf',
          fontSize: 10
        }
      },
      {
        data: ['水资源总量(亿m³)'],
        x: '60%',
        top: '5%',
        itemStyle: {
          borderWidth: 2
        },
        textStyle: {
          color: '#c1cadf',
          fontSize: 10
        }
      }
    ],
    grid: {
      left: '5%',
      right: '5%',
      top: '10%',
      bottom: '10%',
      containLabel: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      x: 'right',
      y: 'center'
    },
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      axisTick: {
        show: false
      },
      data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
      axisLine: {
        lineStyle: {
          color: 'rgba(51, 176, 255, 1)'
        }
      },
      axisLabel: {
        interval: 0,
        color: 'rgba(207, 227, 252, 1)',
        fontSize: 10
      }
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
          show: true
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(120, 160, 236, 1)'
          },
          symbol: ['none', 'arrow'],
          symbolSize: [5, 12],
          symbolOffset: [0, 10]
        },
        max: 40000,
        axisLabel: {
          interval: 0,
          color: 'rgba(207, 227, 252, 1)'
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: 'rgba(39, 57, 75, 1)',
            width: 1,
            type: 'solid'
          }
        }
      },

    ],
    series: [{
        name: '水资源总量(亿m³)',
        yAxisIndex: 0,
        type: 'line',
        smooth: true,

        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(98, 227, 255, 1)'
            },
            {
              offset: 1,
              color: 'rgba(98, 227, 255, 0)'
            }
          ])
        },
        data: [25330, 25255, 27434, 24180, 30906, 23257, 29529, 27958, 27267],
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: '#FFFFFF',
            borderColor: 'rgba(0, 255, 240, 1)',
            lineStyle: {
              color: 'rgba(0, 255, 240, 1)'
            }
          }
        }
      },
      {
        type: 'bar',

        yAxisIndex: 0,
        name: '地表水资源量',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                  offset: 0,
                  color: 'rgba(232, 98, 32, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(232, 98, 32, 0)'
                }
              ],
              false
            )
          }
        },
        barWidth: 10,
        data: [24358, 24242, 26377, 23125, 29798, 22214, 28373, 26839, 26264]
      },
      {
        type: 'bar',

        yAxisIndex: 0,
        name: '地下水资源量',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                  offset: 0,
                  color: 'rgba(32, 178, 232, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(32, 178, 232, 0)'
                }
              ],
              false
            )
          }
        },
        barWidth: 10,
        data: [7643, 7617, 8122, 7267, 8417, 7214, 8296, 8081, 7745]
      }
    ]
  }

  // 把配置给实例对象
  myChart.setOption(option);

})();

// 饼形图定制
// 折线图定制
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".piec .chart"));

  option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      }
    },
    legend: {
      top: "90%",
      itemWidth: 10,
      itemHeight: 10,
      data: ["农用地", "耕地", "园地", "林地", "草地", "建设用地", "居民点"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [{
      name: "占地面积",
      type: "pie",
      center: ["50%", "42%"],
      radius: ["40%", "60%"],
      color: [
        "#ee6666",
        "#fac858",
        "#91cc75",
        "#5470c6",
        "#3ba272",
        "#73c0de",
        "#06c8ab",
        "#06dcab",
        "#06f0ab"
      ],
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      data: [{
          value: 645.74,
          name: "农用地"
        },
        {
          value: 135.06,
          name: "耕地"
        },
        {
          value: 14.38,
          name: "园地"
        },
        {
          value: 253.07,
          name: "林地"
        },
        {
          value: 219.47,
          name: "草地"
        },
        {
          value: 38.11,
          name: "建设用地"
        },
        {
          value: 31.06,
          name: "居民点"
        }
      ]
    }]
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
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));

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
      left: '12%',
      top: '8%',
      bottom: '10%',
      right: '1%'
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