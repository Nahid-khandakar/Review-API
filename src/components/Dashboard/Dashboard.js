import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])

    const chartData2 = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (

        <div>
            {/* Line Chart */}
            <div className='p-10'>

                <LineChart width={500} height={250} data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />
                    <YAxis />

                    <Tooltip />
                    <Legend />

                    <Line type="monotone" dataKey="investment" stroke="	#008000" />
                    <Line type="monotone" dataKey="revenue" stroke="#FF0000" />

                </LineChart>
            </div>

            {/* bar chart */}

            <div className='p-10'>
                <BarChart width={500} height={250} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="sell" fill="#20B2AA" />
                </BarChart>
            </div>

            {/* area chart */}

            <div className='p-10'>

                <AreaChart width={500} height={250} data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#008000" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#008000" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FF0000" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#FF0000" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" stroke="#008000" fillOpacity={1} fill="url(#colorInvestment)" />
                    <Area type="monotone" dataKey="stock" stroke="#FF0000" fillOpacity={1} fill="url(#colorStock)" />

                </AreaChart>
            </div>


            {/* pi chart */}

            <div className='p-10'>
                <PieChart width={400} height={400}>
                    <Tooltip />

                    <Pie data={chartData2} dataKey="investment" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" />
                    <Pie data={chartData} dataKey="stock" cx="50%" cy="50%" innerRadius={90} outerRadius={130} fill="#82ca9d" label />
                </PieChart>
            </div>


        </div>

    );
};

export default Dashboard;