import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

const Container = styled.div`
  margin-top: 10px;
`;

interface CoinHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

// interface Example {
//   time_open: number;
//   time_close: number;
//   open: string;
//   high: string;
//   low: string;
//   close: string;
//   volume: string;
//   market_cap: number;
// }

const Chart = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<CoinHistory[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinHistory(coinId),
    refetchInterval: 5000,
  });

  const chartData = Array.isArray(data) && data.length > 0 ? data : [];

  return (
    <Container>
      {isLoading ? (
        "Loading Chart..."
      ) : chartData.length > 0 ? (
        <ApexChart
          width={600}
          type="line"
          series={[
            {
              name: "Price",
              data: chartData?.map((price) => Number(price.close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
            },
            grid: {
              show: true,
            },
            xaxis: {
              labels: {
                show: true,
              },
              categories: chartData.map((price) =>
                new Date(price.time_close * 1000).toLocaleDateString()
              ),
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  fontSize: "12px",
                },
                formatter: (value) => `${value.toFixed(3)}`,
              },
            },
            colors: ["red"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["blue"],
                stops: [0, 100],
              },
            },
            tooltip: {
              y: {
                formatter: (value) => `${value.toFixed(3)}`,
              },
            },
          }}
        />
      ) : (
        "No Data available to display chart"
      )}
    </Container>
  );
};

export default Chart;
