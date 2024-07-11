"use client";

import React from "react";
import { Fragment, useState } from "react";
import { HiMapPin } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import SearchLocation from "../Components/locationSearch";
import { Dialog, Transition } from "@headlessui/react";

const LocationBtn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isChanged, setIsChanged] = useState<boolean>(false);

  const address = typeof window !== "undefined" && localStorage?.getItem("delivery_address");

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsChanged(false);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className={`flex items-center px-6 py-3 bg-slate-200 rounded-full md:rounded-lg`}
      >
        {" "}
        <HiMapPin className="shrink-0 text-secondary" />{" "}{" "}
        <span
          className={
            "truncate max-w-[8rem]  font-outfit text-sm text-gray-300 md:max-w-[12rem]"
          }
        >
          {address ? address : "Choose Your Delivery Address"}
        </span>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition
		  show={isOpen}
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition
			  show={isOpen}
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-outfit font-medium leading-6 text-gray-900"
                  >
                    Delivery Address
                  </Dialog.Title>

                  {isChanged ? (
                    <div className="mt-2">
                      <SearchLocation />
                    </div>
                  ) : (
                    <div className="flex items-center mt-8 justify-between">
                      <div>
                        <p className="truncate font-poppins max-w-[10rem] md:max-w-xs">
                          {address ? address :"change location"}
                        </p>
                      </div>

                      <div>
                        {" "}
                        <button
                          className="px-4 py-1 text-gray-300 bg-gray-100 hover:cursor-pointe rounded-full"
                          onClick={() => setIsChanged(true)}
                        >
                          Choose location
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="mt-12 mx-12">
                    <button
                      type="submit"
                      className="px-4 py-1 w-full font-outfit text-white bg-primary hover:cursor-pointer border border-none rounded-lg"
                      onClick={closeModal}
                    >
                      Done
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LocationBtn;
