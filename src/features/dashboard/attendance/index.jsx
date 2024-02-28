import React, { useEffect } from 'react';
import * as agCharts from 'ag-charts-community';
import { useTranslation } from 'react-i18next';

function Attendance(Data) {
  const {t} = useTranslation()

  useEffect(() => {

    function getData() {
      return [
        { type: t('Total Employees'), count: Data?.Data?.total_employees },
        { type: t('Active'), count: Data?.Data?.present_employees  },
      ];
    }

    const data = getData();
    const numFormatter = new Intl.NumberFormat('en-US');
    let total = ((Data?.Data?.present_employees/Data?.Data?.total_employees)*100).toFixed(1);

    if(isNaN(total))
      total = 0

    const options = {
      container: document.getElementById('myChart'),

      data,
      title: {
        text: t('Employees'),
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
              text: t('Active'),
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

export default Attendance;
