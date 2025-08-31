import { Button } from '../components/Button'
import { PlusIcon } from '../icons/plusIcon'
import { ShareIcon } from '../icons/shareIcon'
import {Card} from '../components/Card'
import '../App.css'
import { CreateContentModal } from '../components/CreateContentModal'
import { useState } from 'react'
import { SideBar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'

function Dashboard() {
  const [modalOpen , setModalOpen]=useState(false);
  const contents=useContent();

  return (
        <div>
          <SideBar />

          <div className='p-4 ml-72 min-h-screen bg-[#eeeeef] border-2 border-gray-100'>

            <CreateContentModal open={modalOpen} onClose={ ()=>{
              setModalOpen(false)
            }}/>

          <div className='flex justify-end gap-4 p-4'>
            <Button onClick={() =>{
              setModalOpen(true);
            }} startIcon={<PlusIcon/>} variant="primary" text="Add Content" size="md"/>

            <Button startIcon={<ShareIcon/>} variant="secondary" text="Share Brain" size="md"/>
          </div>

          <div className='flex gap-4'>

            {contents.map(({type , link ,title})=> <Card 
                type={type} 
                link={link} 
                title={title}
            />)}

            {/* @ts-ignore */}
            
          </div>
          </div>
        </div> 
  )       
}



export default Dashboard
