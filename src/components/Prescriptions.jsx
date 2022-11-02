import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import prescriptions from "../assets/prescriptions.pdf"

const Prescriptions = ({openPrescriptions ,  setopenPrescriptions , closePres , openPres}) => {
    return (
      <>
      <Transition appear show={openPrescriptions} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closePres}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0  bg-black/60  h-full" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full items-center ml-[15%] p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="w-[60%] h-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-2xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg  leading-6 text-gray-900 font-dancing font-bold flex justify-between"
                  >
                     <span className="text-2xl ml-2 text-purple-800 font-bold">Prescriptions ..</span>
                     <CloseOutlinedIcon onClick={closePres} className="cursor-pointer hover:text-blue-600"/>
                  </Dialog.Title>
                  <div className="w-full h-[96%] mt-2 bg-slate-200  rounded-2xl overflow-hidden flex flex-col justify-between">
                    <iframe src={prescriptions}  style={{width:"100%" , height:"100%"}}  frameBorder="0"></iframe>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
      )
}

export default Prescriptions