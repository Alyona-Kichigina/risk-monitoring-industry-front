import React, {useState} from 'react';
import {Grid} from "./item/style";
import {Bar, ResponsiveBar} from "@nivo/bar";

const Organization = () => {
  return (
    <>
      <Grid>
        <div>
          <div className="color-greyLite-2">
            Выручка за 3 года, руб.
          </div>
          <ResponsiveBar
            // width={300}
            height={200}
            margin={{ top: 20, bottom: 20 }}
            data={[
              { year: "2018 год", "Выручка за 3 года, руб.": 2615000000 },
              { year: "2019 год", "Выручка за 3 года, руб.": 3388000000 },
              { year: "2020 год", "Выручка за 3 года, руб.": 3416000000 }
            ]}
            indexBy="year"
            colors={{ scheme: 'nivo' }}
            keys={["Выручка за 3 года, руб."]}
            labelTextColor="inherit:darker(1.4)"
            enableGridX={true}
            theme={{
              axis: {
                ticks: {
                  line: {
                    // stroke: "green"
                  },
                  text: {
                    fill: "rgba(0, 0, 0, 0.85)"
                  }
                }
              },
              grid: {
                line: {
                  stroke: "var(--color-grey-light-2)",
                  // strokeWidth: 2,
                  // strokeDasharray: "4 4"
                }
              }
            }}
          />
        </div>
        <div>
          <div className="color-greyLite-2">
            Прибыль за 3 года, руб.
          </div>
          <ResponsiveBar
            // width={300}
            height={200}
            margin={{ top: 20, bottom: 20 }}
            data={[
              { year: "2018 год", "Прибыль за 3 года, руб.": 76000000 },
              { year: "2019 год", "Прибыль за 3 года, руб.": 250000000 },
              { year: "2020 год", "Прибыль за 3 года, руб.": 271000000 }
            ]}
            indexBy="year"
            colors={{ scheme: 'nivo' }}
            keys={["Прибыль за 3 года, руб."]}
            labelTextColor="inherit:darker(1.4)"
            enableGridX={true}
            theme={{
              axis: {
                ticks: {
                  line: {
                    // stroke: "green"
                  },
                  text: {
                    fill: "rgba(0, 0, 0, 0.85)"
                  }
                }
              },
              grid: {
                line: {
                  stroke: "var(--color-grey-light-2)",
                  // strokeWidth: 2,
                  // strokeDasharray: "4 4"
                }
              }
            }}
          />

        </div>
        <div>
          <div className="color-greyLite-2">
            Налоги в бюджет за 3 года, руб.
          </div>
          <ResponsiveBar
            // width={300}
            height={200}
            margin={{ top: 20, bottom: 20 }}
            data={[
              { year: "2018 год", "Налоги в бюджет за 3 года, руб.": 53000000 },
              { year: "2019 год", "Налоги в бюджет за 3 года, руб.": 60000000 },
              { year: "2020 год", "Налоги в бюджет за 3 года, руб.": 83000000 }
            ]}
            indexBy="year"
            colors={{ scheme: 'nivo' }}
            keys={["Налоги в бюджет за 3 года, руб."]}
            labelTextColor="inherit:darker(1.4)"
            enableGridX={true}
            theme={{
              axis: {
                ticks: {
                  line: {
                    // stroke: "green"
                  },
                  text: {
                    fill: "rgba(0, 0, 0, 0.85)"
                  }
                }
              },
              grid: {
                line: {
                  stroke: "var(--color-grey-light-2)",
                  // strokeWidth: 2,
                  // strokeDasharray: "4 4"
                }
              }
            }}
          />
        </div>
        <div>
          <div className="color-greyLite-2">
            Среднесписочная численность за 3 года, чел.
          </div>
          <ResponsiveBar
            // width={300}
            height={200}
            margin={{ top: 20, bottom: 20 }}
            data={[
              { year: "2018 год", "Среднесписочная численность за 3 года, чел.": 301 },
              { year: "2019 год", "Среднесписочная численность за 3 года, чел.": 303 },
              { year: "2020 год", "Среднесписочная численность за 3 года, чел.": 290 }
            ]}
            indexBy="year"
            colors={{ scheme: 'nivo' }}
            keys={["Среднесписочная численность за 3 года, чел."]}
            labelTextColor="inherit:darker(1.4)"
            enableGridX={true}
            theme={{
              axis: {
                ticks: {
                  line: {
                    // stroke: "green"
                  },
                  text: {
                    fill: "rgba(0, 0, 0, 0.85)"
                  }
                }
              },
              grid: {
                line: {
                  stroke: "var(--color-light-grey)",
                  // strokeWidth: 2,
                  // strokeDasharray: "4 4"
                }
              }
            }}
          />

        </div>
        <div>
          <div className="color-greyLite-2 ">
            Состоит ли в МСП:
            <span className="color-greyDarken-1 pl-4">Да</span><span className="color-greyLite-1">/Нет</span>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Organization;
