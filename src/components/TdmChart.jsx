import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const TdmChart = ({dataJson}) => {
    const data = [
        {
          "id": "Total Patients Diagnosed",
          "color": "hsl(228,100%,65%)",
          "data": dataJson
        }
      ]
  return (
   <div className="bg-white shadow-2xl w-full h-full overflow-hidden rounded-xl">
     <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        pointSize={2}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        enableGridX={true}
        axisBottom={{
            orient: "bottom",
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend:  "Day", 
            legendOffset: 36,
            legendPosition: "middle",
            color:"blue"
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Patients Visited',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridY={true}
        colors={['#3252a9']}
        theme={
            {
              "background": "#ffffff",
              "textColor": "#333333",
              "fontSize": 11,
              "axis": {
                  "domain": {
                      "line": {
                          "stroke": "#777777",
                          "strokeWidth": 1
                      }
                  },
                  "legend": {
                      "text": {
                          "fontSize": 12,
                          "fill": "#333333"
                      }
                  },
                  "ticks": {
                      "line": {
                          "stroke": "#777777",
                          "strokeWidth": 1
                      },
                      "text": {
                          "fontSize": 11,
                          "fill": "#333333"
                      }
                  }
              },
              "grid": {
                  "line": {
                      "stroke": "#dddddd",
                      "strokeWidth": 1
                  }
              },
              "legends": {
                  "title": {
                      "text": {
                          "fontSize": 11,
                          "fill": "#333333"
                      }
                  },
                  "text": {
                      "fontSize": 11,
                      "fill": "#333333"
                  },
                  "ticks": {
                      "line": {},
                      "text": {
                          "fontSize": 10,
                          "fill": "#333333"
                      }
                  }
              },
              "annotations": {
                  "text": {
                      "fontSize": 13,
                      "fill": "#333333",
                      "outlineWidth": 2,
                      "outlineColor": "#ffffff",
                      "outlineOpacity": 1
                  },
                  "link": {
                      "stroke": "#000000",
                      "strokeWidth": 1,
                      "outlineWidth": 2,
                      "outlineColor": "#ffffff",
                      "outlineOpacity": 1
                  },
                  "outline": {
                      "stroke": "#000000",
                      "strokeWidth": 2,
                      "outlineWidth": 2,
                      "outlineColor": "#ffffff",
                      "outlineOpacity": 1
                  },
                  "symbol": {
                      "fill": "#000000",
                      "outlineWidth": 2,
                      "outlineColor": "#ffffff",
                      "outlineOpacity": 1
                  }
              },
              "tooltip": {
                  "container": {
                      "background": "#ffffff",
                      "color": "#333333",
                      "fontSize": 12
                  },
                  "basic": {},
                  "chip": {},
                  "table": {},
                  "tableCell": {},
                  "tableCellValue": {}
              }
          }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                itemTextColor: 'rgb(0, 0, 0)',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1,
                            itemTextColor: 'rgb(0, 0, 0)'
                        }
                    }
                ]
            }
        ]}
    />
   </div>
  )
}
export default TdmChart