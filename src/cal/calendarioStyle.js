import styled from "styled-components";

const calendarioEstilos = styled.div`



.calendario-app {
    margin-top: 80px;
        margin-left: 25%;
        width: 57%;
        height: 700px;
        min-width: 57vmin;
        aspect-ratio: 3 / 2;
        background-color: #007FFF;
        padding: 3rem;
        border-radius: 3rem;
        border: 1rem solid #0f1319;
        display: flex;
        column-gap: 5rem;
        position: absolute;
        transform-style: preserve-3d;
        }
        
        .Vac{
            
            margin-left: 17%;
            
            }
        .calendar{
        width: 40%;
    }

    .heading{
        font-family: "Jomolhari", serif; 
        font-size: clamp(3rem, 3.8cqi, 3.5rem);
        letter-spacing: 0.3rem;
        padding-left: 1.3rem;
        color: #F5FAFA;
    }

    .navigate-date{
        display: flex;
        align-items: center;
        column-gap: 1rem;
        margin: 3.5rem 0;
        color: #F5FAFA;
    }

    .navigate-date h2{
        font-size: clamp(1.5rem, 1.5cqi, 2.5rem);
        padding-left: 1.3rem;
    }

    .buttons {
        display: flex;
        column-gap: 1rem;
        margin-left: auto;
    }

    .buttons i {
        width: 3.5rem;
        height: 3.5rem;
        background-color: #17E9E1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        color: #17224D;
        cursor: pointer;
    }

    .weedays {
        width: 100%;
        display: flex;
        margin: 3rem 0;
    }

    .weedays span{
        width: calc(100% / 7);
        font-size: clamp(1rem, 0.8cqi, 1.3rem);
        font-weight: bold;
        text-transform: uppercase;
        color: #F5FAFA;
        letter-spacing: 0.1rem;
        display: flex;
        justify-content: center;
    }

    .days{
        display: flex;
        flex-wrap: wrap;
    }

    .days span{
        font-size: clamp(1.2rem, 1cqi, 1.6rem);
        width: calc(100% / 7);
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
        color: #F5FAFA
    }

    .current-day{
        background-color: #21b4af;
        border-radius: 50%;
        box-shadow: 0 0 1.5rem 1rem rgba(17, 187, 239, 0.3);
    }

    .events{
        width: 60%;
        height: 85%;
        padding: 3rem 0;
        overflow: auto;
    }

    .events::-webkit-scrollbar{
        display: none;
    }

    .event-popup{
        position: absolute;
        top: 38%;
        left: 3rem;
        background-color: #17224D;
        width: 40%;
        aspect-ratio: 10 / 9;
        border-radius: 1rem;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 2rem;
    }




    .time-input{
        display: flex;
        column-gap: 1rem;
    }

    .event-popup-time{
        width: clamp(4rem, 4cqi, 7rem);
        background-color: aqua;
        font-family: "Jomolhari", serif;
        font-size: clamp(1rem, 1cqi, 1rem);
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 1.5rem 1rem rgba(0, 163, 255, 0.2);
        letter-spacing: 0.1rem;
    }

    .time-input input{
        background-color: transparent;
        border: none;
        border-top: 0.2rem solid aqua;
        border-bottom: 0.2rem solid aqua;
        color: white;
        width: clamp(4rem, 4cqi, 7rem);
        height: 4rem;
        text-align: center;
        font-size: clamp(1rem, 1cqi, 1rem);
    }

    .time-input input[type='number'] ::-webkit-outer-spin-button,
    .time-input input[type='number'] ::-webkit-outer-spin-button {
        appearance: none;
    }

    .event-popup textarea{
        width: clamp(15rem, 15cqi, 25rem);
        aspect-ratio: 5/2;
        resize: none;
        background-color: #007FFF;
        border: none;
        padding: 1rem;
        border-radius: 0.5rem;
        color: #ffffff;
        transition: border 0.5s;
    }

    .event-popup textarea:focus {
        border: .1rem solid #00a3ff;
    }

    .event-popup textarea::placeholder{
        font-size: clamp(1rem, 8cqi, 1.2rem);
        color: white;
    }

    .event-popup textarea:focus::placeholder{
        color: transparent;
    }

    .event-popup-btn{
        width: clamp(15rem, 15cqi, 25rem);
        height: 4rem;
        background-color: #21b4af;
        color: white;
        font-family: "Jomolhari", serif; 
        font-size: clamp(1.5rem, 1.5cqi, 2.2rem);
        letter-spacing: .1rem;
        border: none;
        box-shadow: 0 0 1.5rem 1rem rgba(17, 187, 239, 0.2);
        cursor: pointer;
    }

    .event-popup-btn:active {
        transform: translateY(0.1rem);
    }

    .close-event-popup{
        position: absolute;
        top: 1rem;
        right: 1rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .close-event-popup i{
        font-size: 2.5rem;
        color: #fff;
    }

    .event{
        width: 100%;
        height: 7rem;
        background-color: #17224D;
        padding: 1.5rem 0;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        position: relative;
    }

    .event-date-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        border-right: .1rem solid rgba(255, 255, 255, 0.5);
    }

    .event-date {
        font-size: clamp(1rem, 1cqi, 1.2rem);
        color: #ddd;
    }

    .event-time {
        font-size: clamp(1.3rem, 1cqi, 1.6rem);
        line-height: 4rem;
        font-weight: bold;
        color: #fff;
    }

    .event-text{
        font-size: clamp(1.2rem, 1cqi, 1.4rem);
        line-height: 2rem;
        color: #fff;
        width: 75%;
        padding: 0 3rem 0 1rem;
        overflow-wrap: break-word;
    }

    .event-buttons{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 1rem;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
    }

    .event-buttons i {
        font-size: 1.6rem;
        color: #fff;
        cursor: pointer;
    }

    @media (max-width: 1440px) {

      

        .calendario-app {
            width: 65%;
            height: 680px;
            padding: 2rem;
            border-radius: 2rem;
            border: 1rem solid #0f1319;
        }

        .weedays span{
            width: calc(100% / 7);
            font-size: 15px;
            font-weight: 5px;
        }
    }

    @media (max-width: 1366px){


        .Vac{
    
    margin-left: 22%;
    
    }
      

        .calendario-app {
            row-gap: 2rem;
            height: 450px;
        }

        .heading {
            margin-top: 0;
        }

        .navigate-date {
            margin: 1rem 0;
        }

        .days span{
            aspect-ratio: 1.5;
            font-size: 15px;
        }

        .weedays span {
            font-size: 13px;
            font-weight: normal;
        }

        .weekdays {
            margin: 1rem 0;
        }

        .buttons i {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 3rem;
        }

        .current-day {
            border-radius: 50%;
        }

        .events {
            height: 100%;
            padding: 4px;
        }

        .event{
            height: 5rem;
        }

        .event-date {
            text-align: center;
            font-size: 14px;
        }

        .event-time {
            font-size: 16px;
        }

        .event-popup {
            top: 20%;
            left: 25%;
            transform: translateX(-50%);
            width: 40%;
        }

        .event-popup-time {
            margin-top: 12px;
            height: 50px;
            font-size: 15px;
        }

        .time-input input {
            margin-top: 10px;
            width: 50px;
            font-size: 15px;
            height: 45px;
        }

        .event-popup textarea {
            width: 80%;
        }

        .event-popup textarea::-webkit-input-placeholder{
            font-size: 15px;
        }

        .event-popup-btn {
            margin-bottom: 15px;
            width: 190px;
            height: 50px;
            font-size: 15px;
        }
    }

    @media (max-width: 720px) {

        .calendario-app {
            margin-top: 10%;
            margin-left: 18%;
            row-gap: 2rem;
            height: 900px;
            flex-direction: column;
        }


        .heading {
            margin-left: 18%;
            margin-top: 0;
        }

        .navigate-date {
            margin: 1rem 0;
        }

        .days span{
            aspect-ratio: 1.5;
            font-size: 15px;
        }

        .weedays span {
            font-size: 13px;
            font-weight: normal;
        }

        .weekdays {
            margin: 1rem 0;
        }

        .buttons i {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 3rem;
        }

        .current-day {
            border-radius: 50%;
        }

        .events {
            width: 90%;
            height: 100%;
            padding: 4px;
        }

        .event{
            width: 425px;
            height: 6rem;
        }

        .event-date {
            text-align: center;
            font-size: 17px;
        }

        .event-time {
            font-size: 18px;
        }

        .event-popup {
            top: 20%;
            left: 25%;
            transform: translateX(-20%);
            width: 70%;
        }

        .event-popup-time {
            margin-top: 12px;
            height: 50px;
            font-size: 15px;
        }

        .time-input input {
            margin-top: 10px;
            width: 50px;
            font-size: 15px;
            height: 45px;
        }

        .event-popup textarea {
            width: 80%;
        }

        .event-popup textarea::-webkit-input-placeholder{
            font-size: 15px;
        }

        .event-popup-btn {
            margin-bottom: 15px;
            width: 190px;
            height: 50px;
            font-size: 15px;
        }
    }

    @media (max-width: 375px){
    
    .Vac{
    
    margin-left: 15%;
    
    }

    .calendario-app{
    
        margin-top: 20%;
        height: 480px;
        border: 5px solid;
        margin-left: 14.2%;
    }

    .calendar{
    
    width: 90%;
    
    }


    .heading {
    
    margin-left: -15%;

    }

    .navigate-date {
    
    margin: 1rem 0 0 -1rem;

    }

    .navigate-date h2 {
    
    font-size: 18px;
    
    }


    .buttons i{
    
    width: 30px;
    height: 30px;

    }


    .weedays span{
    
    font-size: 9px;

    }

    .days span{
    
    font-size: 11px;
    
    }

    .event {
    
    width: 220px;
    height: 19px;
    
    }

    .event-date{
    
    font-size: 10px
    
    }

    .event-time{
    
    font-size: 10px;
    line-height: 2rem;
    
    }

    .event-buttons i {
    
    font-size: 2px;
    
    }
    .event-popup {
     width: 90%;
     height: 50%;
     margin-left: -8px;
 }

 .event-text{
 
 font-size: 10px;
    }



}
   

        
`;

export default calendarioEstilos;
