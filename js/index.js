$(function(){
	var chart_1 = echarts.init(document.getElementById('chart_1'));
	var chart_2 = echarts.init(document.getElementById('chart_2'));
	var chart_3 = echarts.init(document.getElementById('chart_3'));
	var chart_4 = echarts.init(document.getElementById('chart_4'));
	var chart_5 = echarts.init(document.getElementById('chart_5'));
	var chart_6 = echarts.init(document.getElementById('chart_6'));
	var option1 = {
		title: {
			show: false
		},
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    grid: {
	        top: '3%',
	        bottom: '15%',
	    },
		xAxis: {
			data: ["北京","上海","广州","深圳","西安","太原"],
			axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
			axisLine: {
				show:false
			},
	        axisTick: {
	            show: false
	        },
		},
		yAxis: {
			show: false
		},
		series: [{
            name: '销量',
            type: 'bar',
            data: [15526, 15698, 12694, 5521, 6891, 9541],
            barWidth: 12,
            itemStyle:{
                normal:{
                    color:'#4ad2ff',
					label : {
						show: true, position: 'top'
					}
                }
            }
        }]

	}
	var option2 = {
		title: {
			text: "广东保费同款",
			textStyle: {
				color: "#fff",
				fontWeight: "normal",
				fontSize: 14,
			},
			left: 'center'
		},
		grid: {
	        top: '70%',
	        bottom: '0'
	    },
        color:['#61F1FE', '#225CBB','#5FB9F9','#E12267','#E8D51E'],
        startAngle: 180,
		series : [{
            name:'访问来源',
            type:'pie',
            radius : ['30%', '50%'],
            startAngle: 180,
            data:[
                {value:35, name:'直接访问'},
                {value:12, name:'邮件营销'},
                {value:25, name:'联盟广告'},
                {value:20, name:'视频广告'},
                {value:8, name:'搜索引擎'}
            ],
            label: {
                normal: {
                    formatter: ' {b|{b}}\n{hr|}\n {per|{d}%}  ',
                    rich: {
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 12,
                            lineHeight: 18,
                            align: 'center'
                        },
                        per: {
                        	fontSize: 12,
                            lineHeight: 18,
                            align: 'center'
                        }
                    }
                }
            },
            itemStyle: {
				normal:{
					label:{
						show:true,
					},
					labelLine:{
						show:true
					},
				    shadowColor: 'rgba(255, 255, 255, 0.5)',
				    shadowBlur: 100,
				    align: 'center'
				},
				emphasis: {
				   shadowBlur: 10,
				   shadowOffsetX: 0,
				   shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
	        }
        }]

	}
	var option3 = {
		title: {
	        show: false
		},
		legend: {
		    data: ['2011年'],
		    textStyle: {
		    	color: '#fff'
		    },
		    top: '10',
		},
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '10%',
	        top: '30%',
	        bottom: '5%',
	        containLabel: true
	    },
	    xAxis: {
			axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
			axisLine: {
				show: true,
				lineStyle: {
					color: '#fff',
					opacity: 0.5
				}
			},
	        axisTick: {
	            show: false
	        },
	        splitLine: {
	        	show: false
	        }
	    },
	    yAxis: {
	        type: 'category',
	        data: ['巴西','印尼','美国','印度'],
	        axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
			axisLine: {
				show: false
			},
	        axisTick: {
	            show: false
	        },
	    },
	    series: [
	        {
	            name: '2011年',
	            type: 'bar',
	            data: [1820, 3489, 9034, 4970],
	            barWidth: 10,
	            itemStyle:{
	                normal:{
	                    color:'#4ad2ff',
	                }
	            }
	        }
	    ]
	}




	function randomData() {
	    return Math.round(Math.random()*2500);
	}

	var option4 = {
	    title: {
	        show: false
	    },
	    grid: {
	        top: '0',
	        bottom: '0',
	        left:'0',
	        right: '0'
	    },
	    tooltip: {
	        trigger: 'item'
	    },
	    visualMap: {
	        min: 0,
	        max: 2500,
	        left: 'left',
	        top: 'bottom',
	        // text: ['高','低'],           // 文本，默认为数值文本
	        // calculable: true,
	        color: ['#026383','#17FFFD'],
	        show: false
	    },
	    series: [
	        {
	            name: 'iphone3',
	            type: 'map',
	            mapType: 'china',
	            roam: false,
	            label: {
	                normal: {
	                    show: false
	                },
	                emphasis: {
	                    show: false
	                }
	            },
	            data:[
	                {name: '北京',value: randomData() },
	                {name: '天津',value: randomData() },
	                {name: '上海',value: randomData() },
	                {name: '重庆',value: randomData() },
	                {name: '河北',value: randomData() },
	                {name: '河南',value: randomData() },
	                {name: '云南',value: randomData() },
	                {name: '辽宁',value: randomData() },
	                {name: '黑龙江',value: randomData() },
	                {name: '湖南',value: randomData() },
	                {name: '安徽',value: randomData() },
	                {name: '山东',value: randomData() },
	                {name: '新疆',value: randomData() },
	                {name: '江苏',value: randomData() },
	                {name: '浙江',value: randomData() },
	                {name: '江西',value: randomData() },
	                {name: '湖北',value: randomData() },
	                {name: '广西',value: randomData() },
	                {name: '甘肃',value: randomData() },
	                {name: '山西',value: randomData() },
	                {name: '内蒙古',value: randomData() },
	                {name: '陕西',value: randomData() },
	                {name: '吉林',value: randomData() },
	                {name: '福建',value: randomData() },
	                {name: '贵州',value: randomData() },
	                {name: '广东',value: randomData() },
	                {name: '青海',value: randomData() },
	                {name: '西藏',value: randomData() },
	                {name: '四川',value: randomData() },
	                {name: '宁夏',value: randomData() },
	                {name: '海南',value: randomData() },
	                {name: '台湾',value: randomData() },
	                {name: '香港',value: randomData() },
	                {name: '澳门',value: randomData() }
	            ],
	            itemStyle: {
	            	normal: {
	            		areaColor: '#fff'
	            	},
	            	emphasis: {
	            		areaColor: '#005A76'
	            	}
	            }
	        }]
	};

	var option5 = {
		title: {
			show: false
		},
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    grid: {
	        top: '10%',
	        bottom: '15%',
	        left:'15%',
	        right: '15%',
	    },
		xAxis: {
			data: ["2012","2013","2014","2015"],
			axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    opacity: 0.5
                },
            },
			axisLine: {
				show:false
			},
	        axisTick: {
	            show: false
	        },
		},
		yAxis:  [{
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
			axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
            axisLine: {
				show:false
			},
	        axisTick: {
	            show: false
	        },
	        splitLine:{  
        　　　　lineStyle: {
	        		opacity: 0.3
	        	}
        　　}  
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
        	    show: true,
                textStyle: {
                    color: '#fff'
                },
            },
            axisLine: {
				show:false
			},
	        axisTick: {
	            show: false
	        },
	        splitLine:{  
	        	lineStyle: {
	        		opacity: 0.3
	        	}
        　　}  
        }],
		series: [{
            name: '销量',
            type: 'bar',
            stack: '销量',
            data: [80, 80, 80, 60],
            barWidth: 15,
            itemStyle: {
                normal: {
                    // barBorderRadius: 5,
                    color: '#59D1E2'
                }
            }
        },
        {
            name: '销量',
            type: 'bar',
            stack: '销量',
            data: [100.6, 120.2, 90.6, 130.0],
            barWidth: 15,
            itemStyle: {
                normal: {
                	// barBorderRadius: 5,
                    color: '#CC2E77'
                }
            }
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[0, 18.4, 23.0, 6.5],
            itemStyle: {
                normal: {
                	// barBorderRadius: 5,
                    color: '#fff',
                }
            },
            lineStyle: {
                normal: {
                	// barBorderRadius: 5,
                    width: 1,
                }
            }
        }]

	}

	var option6 = {
		title: {
			show: false
		},
		grid: {
	        top: '70%',
	        bottom: '0'
	    },
        color:['#E8D51E','#5FB9F9'],
        startAngle: 180,
		series : [{
            name:'访问来源',
            type:'pie',
            radius : ['40%', '60%'],
            data:[
                {value:3000, name:'新客户'},
                {value:7000, name:'旧客户'},
            ],
             label: {
                normal: {
                    formatter: ' {b|{b}}\n{hr|}\n {per|{d}%}  ',
                    rich: {
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 12,
                            lineHeight: 18,
                            align: 'center'
                        },
                        per: {
                        	fontSize: 12,
                            lineHeight: 18,
                            align: 'center'
                        }
                    }
                }
            },
            itemStyle: {
				normal:{
					label:{
						show:true
					},
					labelLine:{
						show:true
					}
				},
				emphasis: {
				   shadowBlur: 10,
				   shadowOffsetX: 0,
				   shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
	        }
        }]

	}
	chart_1.setOption(option1);
	chart_2.setOption(option2);
	chart_3.setOption(option3);
	chart_4.setOption(option4);
	chart_5.setOption(option5);
	chart_6.setOption(option6);
})

