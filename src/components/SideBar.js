import React from 'react'
import './SideBar.css';
import { AiFillHome } from 'react-icons/ai'
import { FcAbout } from 'react-icons/fc'
import { RiInformationFill } from 'react-icons/ri'
import { FaGraduationCap, FaSuitcase, FaFileCode } from 'react-icons/fa'

export default function SideBar() {
  return (
    <nav>
        <ul>
            <li><AiFillHome className='icon'/></li>
            <li><RiInformationFill className='icon'/></li>
            <li><FaGraduationCap className='icon'/></li>
            <li><FaSuitcase className='icon'/></li>
            <li><FaFileCode className='icon'/></li>
        </ul>
    </nav>
  )
}
