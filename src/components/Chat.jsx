import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Chat = ({isOpen , setIsOpen , closeModal , openModal }) => {
    return (
        <>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0  " />
              </Transition.Child>
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-2xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg  leading-6 text-gray-900 font-dancing font-bold"
                      >
                        Chat With <span className="text-xl ml-2 text-purple-800">Dr.Abhay</span>
                      </Dialog.Title>
                      <div className="w-full h-[300px] mt-2 bg-slate-200 p-3 rounded-2xl flex flex-col justify-between">
                        <div className="flex flex-col space-y-4">
                        <div className="flex space-x-10 items-center">
                          <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" alt=""  className="w-10 h-10 rounded-full object-cover"/>
                          <div className="flex flex-col">
                            <span className="text-md bg-white px-3 py-1 rounded-xl pl-3">Hello am i audible!</span>      
                            <span className="text-xs text-gray-900 ml-2">1 min ago</span>             
                          </div>
                        </div>
                        <div className="flex space-x-10 items-center">
                          <img src="https://images.unsplash.com/photo-1598257006408-538c27529235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlkZW8lMjBjYWxsfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-[90%] h-[90%] object-cover rounded-lg" alt=""  className="w-10 h-10 rounded-full object-cover"/>
                          <div className="flex flex-col">
                            <span className="text-md bg-white px-3 py-1 rounded-xl pl-3">No!</span>      
                            <span className="text-xs text-gray-900 ml-2">2 min ago</span>             
                          </div>
                        </div>
                        </div>
                        <div className="w-full h-10 mt-4 bg-white rounded-xl flex justify-between items-center px-2 py-1">
                          <AttachmentOutlinedIcon className="cursor-pointer hover:text-blue-600"/>
                          <div className="w-[80%] h-full rounded-lg bg-slate-200 overflow-hidden">
                            <input type="text" className="w-full h-full px-2 outline-none border-2 border-gray-200 tracking-wide rounded-lg"/>
                          </div>
                          <SendRoundedIcon onClick={closeModal} className="cursor-pointer hover:text-blue-600"/>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      )
}

export default Chat

