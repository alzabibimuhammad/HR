import React, { useEffect } from 'react';
import * as agCharts from 'ag-charts-community';

function TeamLeader(Data) {

  useEffect(() => {

    function getData() {
      return [
        { type: 'Total Employees', count: Data?.Data?.teamLeader?.[0]?.total_employees },
        { type: 'Active Employees', count: Data?.Data?.teamLeader?.[0]?.present_employees  },
      ];
    }

    const data = getData();
    const numFormatter = new Intl.NumberFormat('en-US');
    const total = ((Data?.Data?.teamLeader?.[0]?.present_employees/Data?.Data?.teamLeader?.[0]?.total_employees)*100).toFixed(1);


    const options = {
      container: document.getElementById('myChart'),

      data,
      title: {
        text: 'Employees',
      },

      series: [
        {
          type: 'pie',
          calloutLabelKey: 'type',
          angleKey: 'count',
          sectorLabelKey: 'count',
          calloutLabel: {
            enabled: false,
          },
          sectorLabel: {
            formatter: ({ datum, sectorLabelKey }) => {
              const value = datum[sectorLabelKey];
              return numFormatter.format(value);
            },
            color:'#444444'
          },
          // title: {
          //   text: 'Annual Count',
          // },
          innerRadiusRatio: 0.7,
          innerLabels: [
            {
              text: numFormatter.format(total)+'%',
              fontSize: 24,
            },
            {
              text: 'Active',
              fontSize: 16,
              margin: 10,
            },
          ],
          tooltip: {
            renderer: ({ datum, calloutLabelKey, title, sectorLabelKey }) => {
              return {
                title,
                content: `${datum[calloutLabelKey]}: ${numFormatter.format(datum[sectorLabelKey])}`,
              };
            },
          },
          fills: ['#DCE1E6','#6AB2DF' ], // Add your desired colors here

        },
      ],
    };

    const chart = agCharts.AgCharts.create(options);

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [Data]);

  return (
    <div id="myChart" style={{ height: '100%' }}>
    </div>
    )
}

export default TeamLeader;
