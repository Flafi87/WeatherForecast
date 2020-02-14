const chartSettings = {
        chart: {
            id: "line-chart",
            width: "100%"
        },
        xaxis: {
            type: "datetime",
            tooltip: {
                enabled: false
            }
        },
        yaxis: [
            {
                title: {
                    text: "Temperature"
                },
                labels: {
                    formatter(value) {
                        return `${value.toFixed(1)} C°`;
                    }
                }
            },
            {
                opposite: true,
                title: {
                    text: "Rain"
                },
                labels: {
                    formatter(value) {
                        return `${value.toFixed(1)} mm`;
                    }
                }
            }
        ],
        responsive: [
            {
                breakpoint: 1000,
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }
        ],
        tooltip: {
            enabled: true,
            shared: true,
            theme: "light",
            onDatasetHover: {
                highlightDataSeries: false
            },
            x: {
                show: true,
                format: "dd MMM HH:mm",
                formatter: undefined
            },
            marker: {
                show: true
            }
        },
        stroke: {
            show: true,
            curve: "smooth",
            lineCap: "butt",
            colors: undefined,
            width: 2,
            dashArray: 0
        }
};
export default chartSettings