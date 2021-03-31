// JS 
var amount = 10000, 
  term = 6, 
  rate = 10; 
var chartConfig = { 
  legend: { 
    template: '%icon %name', 
    position: 'inside top right', 
    defaultEntry_style: { 
      fontWeight: 'bold', 
      fontSize: 12 
    } 
  }, 
  title: { 
    position: 'center', 
    label: { 
      text: 'Fixed Deposit Calculator', 
      style_fontSize: 28 
    } 
  }, 
  palette: ['#9575cd', '#ffee58'], 
  defaultSeries: { 
    type: 'pie donut', 
    shape: { 
      size: 250, 
      innerSize: 200, 
      center: '80%,50%'
    } 
  }, 
  defaultPoint: { outline_width: 0 }, 
  series: [ 
    { 
      mouseTracking: false, 
      points: [ 
        { name: 'Deposit amount', y: 10000 }, 
        { name: 'Total interest', y: 510.53 } 
      ] 
    } 
  ] 
}; 
chartConfig.toolbar = { 
  defaultItem: { throttle: 200 }, 
  items: { 
    ann1: { 
      id: 'ann1', 
      margin: [20, 20, 0, 20], 
      label_text: 'Deposit Amount:', 
      label_style: { fontWeight: 'bold' }, 
      boxVisible: false
    }, 
    DepositAmount: { 
      type: 'range', 
      margin: [0, 20], 
      value: 10000, 
      min: 1000, 
      max: 100000, 
      width: 300, 
      events_change: function(value) { 
        updateChart(value, term, rate); 
        amount = Math.round(value); 
      } 
    }, 
    ann2: { 
      id: 'ann2', 
      margin: [0, 20], 
      label_text: '// JS
var amount = 10000, term = 6, rate = 10;
var chartConfig = {
  legend: {
    template: '%icon %name',
    position: 'inside top right',
    defaultEntry_style: {fontWeight: 'bold',fontSize: 12 }
  },
  title: {
    position: 'center',
    label: {
      text: 'Fixed Deposit Calculator',
      style_fontSize: 28
    }
  },
  palette: [ '#9575cd', '#ffee58'  ],
  defaultSeries: {
    type: 'pie donut',
    shape: {size: 250,innerSize: 200,center: '80%,50%' }
  },
  defaultPoint: { outline_width: 0  },
  series: [
    {
      mouseTracking: false,
      points: [
        { name: 'Deposit amount', y: 10000  },
        { name: 'Total interest', y: 510.53  }
      ]
    }
  ]
};
chartConfig.toolbar = {
    defaultItem: {      throttle:200    },
    items:{
        ann1:{
            id:'ann1',
            margin:[20,20,0,20],
            label_text:'Deposit Amount:',
            label_style:{               fontWeight:'bold'           },
            boxVisible:false
        },
        'DepositAmount': {
            type: 'range',
            margin:[0,20],
            value:10000,min:1000,max:100000,
            width: 300,
            events_change: function(value) {
                updateChart(value, term, rate);
                amount = Math.round(value);
            }
        },
        ann2:{
            id:'ann2',
            margin:[0,20],
            label_text:'$10,000',
            boxVisible:false
        },
        ann3:{
            id:'ann3',
            margin:[30,20,0,20],
            label_text:'Investment Term:',
            label_style:{               fontWeight:'bold'           },
            boxVisible:false
        },
        'InvestmentTerm': {
            type: 'range',
            margin:[0,20],
            value:6,min:1,max:24,
            width: 300,
            events_change: function(value) {
                updateChart(amount, value, rate);
                term = Math.round(value);
            }
        },
        ann4:{
            id:'ann4',
            margin:[0,20],
            label_text:'6 months',
            boxVisible:false
        },
        ann5:{
            id:'ann5',
            margin:[30,20,0,20],
            label_text:'Interest Rate:',
            label_style:{               fontWeight:'bold'           },
            boxVisible:false
        },
        'InterestRate': {
            type: 'range',
            margin:[0,20],
            value:10,min:1,max:20,
            width: 300,
            events_change: function(value) {
                updateChart(amount, term, value);
                rate = Math.round(value);
            }
        },
        ann6:{
            id:'ann6',
            margin:[0,20],
            label_text:'10%',
            boxVisible:false
        },
        ann8:{ 
            id:'ann8',
            position:'450,196',
            label_text:'Balance: <b>$10,510.53</b><br/>Interest: <b>$510.53</b>',
            label_style:{               fontSize:14         },
            boxVisible:false 
        },
    }
};
var chart = JSC.chart('chartDiv', chartConfig);
 
function updateChart(depositAmount, investmentTerm, interestRate){
    var interest = JSC.formatNumber((((Math.round(depositAmount/100)*100)*(Math.pow(1+(((Math.round(interestRate*10)/10)/100)/12),Math.round(investmentTerm)))) - (Math.round(depositAmount/100)*100)), 'c2');
    var balance = JSC.formatNumber(((Math.round(depositAmount/100)*100) + ((Math.round(depositAmount/100)*100)*(Math.pow(1+(((Math.round(interestRate*10)/10)/100)/12),Math.round(investmentTerm)))) - (Math.round(depositAmount/100)*100)), 'c2');
    chart.series(0).points(0).options({y:(Math.round(depositAmount/100)*100)},false);
    chart.series(0).points(1).options({y:((Math.round(depositAmount/100)*100)*(Math.pow(1+(((Math.round(interestRate*10)/10)/100)/12),Math.round(investmentTerm)))) - (Math.round(depositAmount/100)*100)},false);
    chart.uiItems('ann2').options({label_text:JSC.formatNumber((Math.round(depositAmount/100)*100), 'c0')});
    chart.uiItems('ann4').options({label_text:Math.round(investmentTerm) + ' months'});
    chart.uiItems('ann6').options({label_text:(Math.round(interestRate*10)/10) + '%'});
    chart.uiItems('ann8').options({label_text:'Balance: <b>' + balance + '</b><br>Interest: <b>'+interest+'</b>'});
    chart.redraw();
}0,000', 
      boxVisible: false
    }, 
    ann3: { 
      id: 'ann3', 
      margin: [30, 20, 0, 20], 
      label_text: 'Investment Term:', 
      label_style: { fontWeight: 'bold' }, 
      boxVisible: false
    }, 
    InvestmentTerm: { 
      type: 'range', 
      margin: [0, 20], 
      value: 6, 
      min: 1, 
      max: 24, 
      width: 300, 
      events_change: function(value) { 
        updateChart(amount, value, rate); 
        term = Math.round(value); 
      } 
    }, 
    ann4: { 
      id: 'ann4', 
      margin: [0, 20], 
      label_text: '6 months', 
      boxVisible: false
    }, 
    ann5: { 
      id: 'ann5', 
      margin: [30, 20, 0, 20], 
      label_text: 'Interest Rate:', 
      label_style: { fontWeight: 'bold' }, 
      boxVisible: false
    }, 
    InterestRate: { 
      type: 'range', 
      margin: [0, 20], 
      value: 10, 
      min: 1, 
      max: 20, 
      width: 300, 
      events_change: function(value) { 
        updateChart(amount, term, value); 
        rate = Math.round(value); 
      } 
    }, 
    ann6: { 
      id: 'ann6', 
      margin: [0, 20], 
      label_text: '10%', 
      boxVisible: false
    }, 
    ann8: { 
      id: 'ann8', 
      position: '450,196', 
      label_text: 
        'Balance: <b>// JS
var amount = 10000, term = 6, rate = 10;
var chartConfig = {
  legend: {
    template: '%icon %name',
    position: 'inside top right',
    defaultEntry_style: {fontWeight: 'bold',fontSize: 12 }
  },
  title: {
    position: 'center',
    label: {
      text: 'Fixed Deposit Calculator',
      style_fontSize: 28
    }
  },
  palette: [ '#9575cd', '#ffee58'  ],
  defaultSeries: {
    type: 'pie donut',
    shape: {size: 250,innerSize: 200,center: '80%,50%' }
  },
  defaultPoint: { outline_width: 0  },
  series: [
    {
      mouseTracking: false,
      points: [
        { name: 'Deposit amount', y: 10000  },
        { name: 'Total interest', y: 510.53  }
      ]
    }
  ]
};
chartConfig.toolbar = {
    defaultItem: {      throttle:200    },
    items:{
        ann1:{
            id:'ann1',
            margin:[20,20,0,20],
            label_text:'Deposit Amount:',
            label_style:{               fontWeight:'bold'           },
            boxVisible:false
        },
        'DepositAmount': {
            type: 'range',
            margin:[0,20],
            value:10000,min:1000,max:100000,
            width: 300,
            events_change: function(value) {
                updateChart(value, term, rate);
                amount = Math.round(value);
            }
        },
        ann2:{
            id:'ann2',
            margin:[0,20],
            label_text:'$10,000',
            boxVisible:false
        },
        ann3:{
            id:'ann3',
            margin:[30,20,0,20],
            label_text:'Investment Term:',
            label_style:{               fontWeight:'bold'           },
            boxVisible:false
        },
        'InvestmentTerm': {
            type: 'range',
            margin:[0,20],
            value:6,min:1,max:24,
            width: 300,
            events_change: function(value) {
                updateChart(amount, value, rate);
                term = Math.round(value);
            }
        },
        ann4:{
            id:'ann4',
            margin:[0,20],
            label_text:'6 months',
            boxVisible:false
        },
        ann5:{
            id:'ann5',
            margin:[30,20,0,20],
            label_text:'Interest Rate:',
            label_style:{               fontWeight:'bold'           },
            boxVisible:false
        },
        'InterestRate': {
            type: 'range',
            margin:[0,20],
            value:10,min:1,max:20,
            width: 300,
            events_change: function(value) {
                updateChart(amount, term, value);
                rate = Math.round(value);
            }
        },
        ann6:{
            id:'ann6',
            margin:[0,20],
            label_text:'10%',
            boxVisible:false
        },
        ann8:{ 
            id:'ann8',
            position:'450,196',
            label_text:'Balance: <b>$10,510.53</b><br/>Interest: <b>$510.53</b>',
            label_style:{               fontSize:14         },
            boxVisible:false 
        },
    }
};
var chart = JSC.chart('chartDiv', chartConfig);
 
function updateChart(depositAmount, investmentTerm, interestRate){
    var interest = JSC.formatNumber((((Math.round(depositAmount/100)*100)*(Math.pow(1+(((Math.round(interestRate*10)/10)/100)/12),Math.round(investmentTerm)))) - (Math.round(depositAmount/100)*100)), 'c2');
    var balance = JSC.formatNumber(((Math.round(depositAmount/100)*100) + ((Math.round(depositAmount/100)*100)*(Math.pow(1+(((Math.round(interestRate*10)/10)/100)/12),Math.round(investmentTerm)))) - (Math.round(depositAmount/100)*100)), 'c2');
    chart.series(0).points(0).options({y:(Math.round(depositAmount/100)*100)},false);
    chart.series(0).points(1).options({y:((Math.round(depositAmount/100)*100)*(Math.pow(1+(((Math.round(interestRate*10)/10)/100)/12),Math.round(investmentTerm)))) - (Math.round(depositAmount/100)*100)},false);
    chart.uiItems('ann2').options({label_text:JSC.formatNumber((Math.round(depositAmount/100)*100), 'c0')});
    chart.uiItems('ann4').options({label_text:Math.round(investmentTerm) + ' months'});
    chart.uiItems('ann6').options({label_text:(Math.round(interestRate*10)/10) + '%'});
    chart.uiItems('ann8').options({label_text:'Balance: <b>' + balance + '</b><br>Interest: <b>'+interest+'</b>'});
    chart.redraw();
}0,510.53</b><br/>Interest: <b>$510.53</b>', 
      label_style: { fontSize: 14 }, 
      boxVisible: false
    } 
  } 
}; 
var chart = JSC.chart('chartDiv', chartConfig); 
  
function updateChart( 
  depositAmount, 
  investmentTerm, 
  interestRate 
) { 
  var interest = JSC.formatNumber( 
    Math.round(depositAmount / 100) * 
      100 * 
      Math.pow( 
        1 + 
          Math.round(interestRate * 10) / 
            10 / 
            100 / 
            12, 
        Math.round(investmentTerm) 
      ) - 
      Math.round(depositAmount / 100) * 100, 
    'c2'
  ); 
  var balance = JSC.formatNumber( 
    Math.round(depositAmount / 100) * 100 + 
      Math.round(depositAmount / 100) * 
        100 * 
        Math.pow( 
          1 + 
            Math.round(interestRate * 10) / 
              10 / 
              100 / 
              12, 
          Math.round(investmentTerm) 
        ) - 
      Math.round(depositAmount / 100) * 100, 
    'c2'
  ); 
  chart 
    .series(0) 
    .points(0) 
    .options( 
      { 
        y: Math.round(depositAmount / 100) * 100 
      }, 
      false
    ); 
  chart 
    .series(0) 
    .points(1) 
    .options( 
      { 
        y: 
          Math.round(depositAmount / 100) * 
            100 * 
            Math.pow( 
              1 + 
                Math.round(interestRate * 10) / 
                  10 / 
                  100 / 
                  12, 
              Math.round(investmentTerm) 
            ) - 
          Math.round(depositAmount / 100) * 100 
      }, 
      false
    ); 
  chart 
    .uiItems('ann2') 
    .options({ 
      label_text: JSC.formatNumber( 
        Math.round(depositAmount / 100) * 100, 
        'c0'
      ) 
    }); 
  chart 
    .uiItems('ann4') 
    .options({ 
      label_text: 
        Math.round(investmentTerm) + ' months'
    }); 
  chart 
    .uiItems('ann6') 
    .options({ 
      label_text: 
        Math.round(interestRate * 10) / 10 + '%'
    }); 
  chart 
    .uiItems('ann8') 
    .options({ 
      label_text: 
        'Balance: <b>' + 
        balance + 
        '</b><br>Interest: <b>' + 
        interest + 
        '</b>'
    }); 
  chart.redraw(); 
} 