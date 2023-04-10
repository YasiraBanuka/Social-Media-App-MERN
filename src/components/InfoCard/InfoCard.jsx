import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Information</h4>
            <div>
                <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />

                <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
            </div>
        </div>

        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>in Relationship</span>
        </div>

        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>Sri Lanka</span>
        </div>

        <div className="info">
            <span>
                <b>Works at </b>   
            </span>
            <span>IFS</span>
        </div>

        <button className="button logout-button">Log out</button>
    </div>
  )
}

export default InfoCard