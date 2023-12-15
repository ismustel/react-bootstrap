import {
    Card,
    ListGroup,
    CardTitle,
    ListGroupItem, CardGroup
} from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import temp_2 from './temp_2.jpg';
import hum_1 from './hum_1.jpg';
import pre_1 from './pre_1.jpg';
import {useState,useEffect} from "react";







function CardTemp() {
    const [data, setData] = useState({
            "sensor__outside_temperature_18b20": {
                "state": 0,
                "last_updated": 0,
                "max": 0,
                "min": 0
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
                "avg": 0
            },
            "sensor__outside_temperature_bme280": {
                "state": 0,
                "last_updated": 0,
                "max": 0,
                "min": 0,
                "avg": 0
            },
            "sensor__outside_humidity_bme280": {
                "state": 0,
                "last_updated": 0,
                "max": 0,
                "min": 0,
                "avg": 0
            },
            "sensor__outside_vcc": {
                "state": 0,
                "last_updated": 0,
                "max": 0,
                "min": 0
            }
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
                        </ListGroup>
            </Card>
            <Card style = {{width: '25rem' }}>
                <Card.Img variant = 'top' src={hum_1}/>
                <Card.ImgOverlay>
                    <CardTitle>Влажность</CardTitle>
                </Card.ImgOverlay>
                <ListGroup variant="flush">
                    <ListGroupItem className='back'>Значение: {data.sensor__outside_pressure.state}</ListGroupItem>
                    <ListGroupItem className='back'>Максимальная влажность: {}</ListGroupItem>
                    <ListGroupItem className='back'>Минимальное влажность: {}</ListGroupItem>
                </ListGroup>
            </Card>
            <Card style = {{width: '25rem' }}>
                <Card.Img variant = 'top' src={pre_1}/>
                <Card.ImgOverlay>
                <CardTitle>Давление</CardTitle>
                </Card.ImgOverlay>
                <ListGroup variant="flush">
                    <ListGroupItem className='back'>Значение: {}</ListGroupItem>
                    <ListGroupItem className='back'>Максимальное давление: {}</ListGroupItem>
                    <ListGroupItem className='back'>Минимальное давление: {}</ListGroupItem>
                </ListGroup>
            </Card>
        </CardGroup>
    )
}


export default CardTemp;