import { Grid } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighLightCard";

export default function HighLight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];

  const summary = [
    {
      title: "số ca nhiễm",
      count: data.Confirmed,
      type: "confirmed",
    },
    {
      title: "số ca khỏi",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "số ca tử vong",
      count: data.Deaths,
      type: "deaths",
    },
  ];
  return (
    <Grid container spacing={3}>
      {summary.map((data) => (
        <Grid item sm={4} xs={12}>
          <HighlightCard
            title={data.title}
            count={data.count}
            type={data.type}
          />
        </Grid>
      ))}
    </Grid>
  );
}
