import React from 'react'
import { useState } from "react";
import calendarioEstilos from './calendarioStyle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import CloseIcon from '@mui/icons-material/Close';


const Indexx = () => {
    const daysOfWeek = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    const monthsOfYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    const currentDate = new Date()

    const[currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
    const[currentYear, setCurrentYear] = useState(currentDate.getFullYear())
    const[selectedDate, setSelectedDate] = useState(currentDate)
    const[showEventPopup, setShowEventPopup] = useState(false)
    const[events, setEvents] = useState([])
    const[eventTime, setEventTime] = useState({hours: '00' , minutes: "00"})
    const[eventText,setEventText] = useState('')
    const[editingEvent,setEditingEvent] = useState(null)

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
   

    const prevMonth = () => {
        
        setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1))
        setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear -1 : prevYear))

    }

    const nextMonth = () => {

        setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1))
        setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear))

    }
    
    const handleDayClick = (day) => {
        const clickedDate = new Date(currentYear, currentMonth, day)
        const today = new Date()

        if(clickedDate >= today || isSameDay(clickedDate, today)) {
            setSelectedDate(clickedDate)
            setShowEventPopup(true)
            setEventTime({hours: '00' , minutes: "00"})
            setEventText('')
            setEditingEvent(null)
        }
    }

    const isSameDay = (date1, date2) => {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        )
    }

    const handleEventSubmit = () => {
        const newEvent = {
            id: editingEvent? editingEvent.id : Date.now(),
            date: selectedDate,
            time: `${eventTime.hours.padStart(2, '0')}:${eventTime.minutes.padStart(2, '0')}`,
            text: eventText,
            }
            

        let updatedEvents = [...events]

        if(editingEvent) {
            updatedEvents= updatedEvents.map((event) => event.id === editingEvent.id ? newEvent : event,
        ) 
    } else {
            updatedEvents.push(newEvent)
        }
        
        updatedEvents.sort((a, b) => new Date(a.date) - new Date(b.date))

        setEvents(updatedEvents)
        setEventTime({hours: '00' , minutes: "00"})
        setEventText("")
        setShowEventPopup(false)
        setEditingEvent(null)
    }

    const handleEditingEvent = (event) => {
        setSelectedDate(new Date(event.date))
        setEventTime({
            hours: event.time.split(':')[0],
            minutes: event.time.split(':')[1],
        })
        setEventText(event.text)
        setEditingEvent(event)
        setShowEventPopup(true)
    }

    const handleDeleteEvent = (eventId) => {
        const updatedEvents = events.filter((event) => event.id !== eventId)

        setEvents(updatedEvents)
    }

    const handleTimeChange = (e) => {
        const {name, value} = e.target

        setEventTime((prevTime) => ({...prevTime, [name]: value.padStart(2, '0')}))
    }
    
    

  return (
        <calendarioEstilos>
        <div className='Vac'>
    </div>
             <div className="calendario-app">
        <div className="calendar">
        <h1 className="heading">
            Calendario
        </h1>
        <div className="navigate-date">
            <h2 className="month">{monthsOfYear[currentMonth]},</h2>
            <h2 className="year">{currentYear}</h2>
            <div className="buttons">
                <i className='bx bxs-chevron-left' onClick={prevMonth}><ArrowBackIosNewIcon/></i>
                
                <i className='bx bxs-chevron-right' onClick={nextMonth}><ArrowForwardIosIcon/></i>
            </div>
        </div>
        <div className="weedays">
         {daysOfWeek.map((day) => (
         <span key ={day}>{day}</span>
         ))}
        </div>
        <div className="days">
          {[...Array(firstDayOfMonth).keys()].map((_, index) => (<span key={`empty-${index}`} />))}
          {[...Array(daysInMonth).keys()].map((day) => (
          <span key={day + 1} className={day + 1 === currentDate.getDate() && currentMonth === currentDate.getMonth() &&
            currentYear === currentDate.getFullYear() ? 'current-day' : ''
        } 
            onClick={() => handleDayClick(day + 1)}
        >
            {day + 1}</span>
          ))}
        </div>
    </div>
    <div className="events">
        {(showEventPopup &&   <div className="event-popup">
            <div className="time-input">
                <div className="event-popup-time">Tiempo</div>
                <input type="number" name="hours" min={0} max={24} className="hours" value={eventTime.hours} onChange={handleTimeChange}/>
                <input type="number" name="minutes" min={0} max={60} className="minutes" value={eventTime.minutes} onChange={handleTimeChange}/>
            </div>
            <textarea name="" id="" placeholder="¿Què pasara ese dia?" value={eventText} onChange={(e) => {
                if(e.target.value.length <= 60) {
                    setEventText(e.target.value)
                }
            }}></textarea>
            <button className="event-popup-btn" onClick={handleEventSubmit}>{editingEvent ? "Guardar Evento" : "Añadir Evento"}</button>
            <button className="close-event-popup" onClick={() => setShowEventPopup(false)}>
                <i className='bx bx-x'><CloseIcon/></i>
            </button>
        </div>)}
            {events.map((event, index) => ( 

            <div className="event" key={index}>
            <div className="event-date-wrapper">
            <div className="event-date">{`${monthsOfYear[event.date.getMonth()]} ${event.date.getDate()}, ${event.date.getFullYear()}`}</div>
            <div className="event-time">{event.time}</div>
        </div>
            <div className="event-text">{event.text}</div>
            <div className="event-buttons">
                <i className="bx bxs-edit-alt" onClick={() => handleEditingEvent(event)}><EditCalendarIcon/></i>
                <i className="bx bxs-message-alt-x" onClick={() => handleDeleteEvent(event.id)}><EventBusyIcon/></i>
        </div>
        </div>

        ))}
        
    </div>
</div>
    </calendarioEstilos>       

)
}

export default Indexx
