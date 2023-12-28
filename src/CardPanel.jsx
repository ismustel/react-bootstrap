import {
    Card,
    ListGroup,
    CardTitle,
    ListGroupItem, CardGroup,
} from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import temp_2 from './temp_2.jpg';
import hum_1 from './hum_1.jpg';
import pre_1 from './pre_1.jpg';
import {useState,useEffect} from "react";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,

} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,

);







function CardTemp() {
    const [data, setData] = useState({
            "sensor__outside_temperature_18b20": {
                "state": 0,
                "last_updated": 0,
                "max": 0,
                "min": 0,
                "hours": {
                    labels:[],
                    datasets:[
                        {
                            data:[],
                            borderColor: '#61dafb',
                            backgroundColor: '#61dafb',
                        }
                    ]
                }
            },
            "sensor__outside_light": {
                "state": 0,
                "last_updated": 0,
                "max": 0,
                "min": 0,
                "avg": 0
            },
            "sensor__outside_pressure": {
                "state": 0,
                "last_updated": 0,
                "max": 0,
                "min": 0,
                "avg": 0,
                "hours": {
                    labels:[],
                    datasets:[
                        {
                            data:[],
                            borderColor: '#475FB5',
                            backgroundColor: '#475FB5',
                        }
                    ]
                }
            },
            "sensor__outside_temperature_bme280": {
                "state": 0,
                "last_updated": 0,
                "max": 0,
                "min": 0,
                "avg": 0,

            },
            "sensor__outside_humidity_bme280": {
                "state": 0,
                "last_updated": 0,
                "max": 0,
                "min": 0,
                "avg": 0,
                "hours": {
                    labels:[],
                    datasets:[
                        {
                            data:[],
                            borderColor: '#1775F9',
                            backgroundColor: '#1775F9'
                        }
                    ]
                }
            },
            "sensor__outside_vcc": {
                "state": 0,
                "last_updated": 0,
                "max": 0,
                "min": 0
            },

        }
    );

// Функция для обновления данных
    const fetchData = async () => {
        const response = await fetch('http://meteo.ustisha.ru/data/outside')
        if (!response.ok) {
            throw new Error('Ошибка запроса');
        }
        // Преобразование ответа в JSON
        const data = await response.json();
        // Обновление состояния с полученными данными
        setData(data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    let lastUpdate18b20Temp = Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    }).format(new Date(data.sensor__outside_temperature_18b20.last_updated)); // 3/19/2023
    let lastUpdateHum = Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    }).format(new Date(data.sensor__outside_humidity_bme280.last_updated)); // 3/19/2023
    let lastUpdatePre = Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    }).format(new Date(data.sensor__outside_pressure.last_updated)); // 3/19/2023
    return(
        <CardGroup >
            <Card style = {{width: '25rem' }}>
                <Card.Img variant = 'top' src={temp_2}/>
                <Card.ImgOverlay>
                    <CardTitle>Температура</CardTitle>
                </Card.ImgOverlay>
                        <ListGroup variant="flush">
                            <ListGroupItem className='back'>Значение: {data.sensor__outside_temperature_18b20.state}°
                            </ListGroupItem>
                            <ListGroupItem className='back'>Максимальная температура: {data.sensor__outside_temperature_18b20.max}°</ListGroupItem>
                            <ListGroupItem className='back'>Минимальное температура: {data.sensor__outside_temperature_18b20.min}°</ListGroupItem>
                            <ListGroupItem className='back'>Последнее обновление: {lastUpdate18b20Temp}</ListGroupItem>
                            <ListGroupItem> <Line width={120} height={120}  options={{
                                responsive: true,
                                plugins: {
                                    legend: false,
                                    title: {
                                        display: true,
                                        text: 'График температуры',
                                    },
                                },
                            }}
                             data={data.sensor__outside_temperature_18b20.hours} /></ListGroupItem>
                        </ListGroup>
            </Card>
            <Card style = {{width: '25rem' }}>
                <Card.Img variant = 'top' src={hum_1}/>
                <Card.ImgOverlay>
                    <CardTitle>Влажность</CardTitle>
                </Card.ImgOverlay>
                <ListGroup variant="flush">
                    <ListGroupItem className='back'>Значение: {data.sensor__outside_humidity_bme280.state}%</ListGroupItem>
                    <ListGroupItem className='back'>Максимальная влажность: {data.sensor__outside_humidity_bme280.max}%</ListGroupItem>
                    <ListGroupItem className='back'>Минимальное влажность: {data.sensor__outside_humidity_bme280.min}%</ListGroupItem>
                    <ListGroupItem className='back'>Последнее обновление: {lastUpdateHum} </ListGroupItem>
                    <ListGroupItem>
                        <Line width={120} height={120}  options={{
                            responsive: true,
                            plugins: {
                                legend: false,
                                title: {
                                    display: true,
                                    text: 'График влажности',
                                },
                            },
                        }}
                              data={data.sensor__outside_humidity_bme280.hours}/>
                    </ListGroupItem>


                </ListGroup>
            </Card>
            <Card style = {{width: '25rem' }}>
                <Card.Img variant = 'top' src={pre_1}/>
                <Card.ImgOverlay>
                <CardTitle>Давление</CardTitle>
                </Card.ImgOverlay>
                <ListGroup variant="flush">
                    <ListGroupItem className='back'>Значение: {data.sensor__outside_pressure.state} мм.рт.ст</ListGroupItem>
                    <ListGroupItem className='back'>Максимальное давление: {data.sensor__outside_pressure.max} мм.рт.ст</ListGroupItem>
                    <ListGroupItem className='back'>Минимальное давление: {data.sensor__outside_pressure.min} мм.рт.ст</ListGroupItem>
                    <ListGroupItem className='back'>Последнее обновление: {lastUpdatePre} </ListGroupItem>
                    <ListGroupItem>
                        <Line width={120} height={120}  options={{
                            responsive: true,
                            plugins: {
                                legend: false,
                                title: {
                                    display: true,
                                    text: 'График давления',
                                },
                            },
                        }}
                              data={data.sensor__outside_pressure.hours}/>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </CardGroup>

    )
}


export default CardTemp;