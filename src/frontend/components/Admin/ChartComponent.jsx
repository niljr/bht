import React, { Component } from 'react';
import { Bar, Line, Pie, Polar, Doughnut } from 'react-chartjs-2';
import { inject, observer } from 'mobx-react';

const labels = ["Jaro", "Lapaz", "Molo", "Villa Arevalo", "City Proper", "Mandurriao", "Lapuz"]

const ChartComponent = ({ rootStore: { domainStore: { boardingHouseStore, userStore } } }) => (
    <div className="chart">

        <Bar
            data={{
                // labels: labels,
                // datasets: [{
                    // label: 'Total number of Boarding House per District',
                //     data: labels.map((x) => boardingHouseStore.filterReport("districtName", 'bhAddress', x)),
                //     backgroundColor: [
                //         'rgba(255, 99, 132, 0.2)',
                //         'rgba(54, 162, 235, 0.2)',
                //         'rgba(255, 206, 86, 0.2)',
                //         'rgba(75, 192, 192, 0.2)',
                //         'rgba(153, 102, 255, 0.2)',
                //         'rgba(255, 159, 64, 0.2)',
                //         'rgba(0, 255, 0, 0.2)'
                //     ],
                //     borderColor: [
                //         'rgba(255,99,132,1)',
                //         'rgba(54, 162, 235, 1)',
                //         'rgba(255, 206, 86, 1)',
                //         'rgba(75, 192, 192, 1)',
                //         'rgba(153, 102, 255, 1)',
                //         'rgba(255, 159, 64, 1)',
                //         'rgba(0, 255, 0, 1)'
                //     ],
                //     borderWidth: 1
                // }]
                labels: labels,
                datasets: [{
                    label: 'Population',
                        data: ['12312', '62912', '32312', '62312', ],
                    backgroundColor: [
                        'rgba(255,99,132,0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)',
                        'rgba(0, 255, 0, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1


                }]
            }}
            options={{
                title: {
                    display: true,
                    text: 'Total Number of Boarding house per District',
                    fontSize: 25
                },
                legend: {
                    display: true,
                    position: 'right'
                }
            }}
        />
    </div>
);

export default inject('rootStore')(observer(ChartComponent));
