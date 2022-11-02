'use client';

import { Fragment, useEffect, useState } from 'react';

import classNames from 'classnames';

import { Tab } from '@headlessui/react';
import DatePicker from 'react-date-picker/dist/entry.nostyle';

import { Games } from './Games';
import { Standings } from './Standings';

export default function Page() {
  const [inputDate, setInputDate] = useState(new Date());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (inputDate && inputDate.getFullYear() >= 2018) {
      setDate(inputDate);
    }
  }, [inputDate]);

  return (
    <section className="mx-auto flex w-[90%] max-w-[1440px] flex-col items-center gap-16 lg:flex-row lg:items-start">
      <div className="flex w-full max-w-[650px] flex-col gap-4 py-6 lg:w-[50%]">
        <h2 className="text-2xl font-medium">Games</h2>

        <div>
          <DatePicker
            className="w-full"
            format="MM/dd/y"
            calendarType="US"
            value={inputDate}
            onChange={setInputDate}
            onCalendarClose={() => {
              setInputDate(state => {
                const isDateValid = state && state.getFullYear() >= 2018;

                return isDateValid ? state : date;
              });
            }}
            clearIcon={null}
          />

          <Games date={date} />
        </div>
      </div>

      <div className="flex w-full max-w-[550px] flex-col gap-4 py-6 lg:w-[50%]">
        <h2 className="text-2xl font-medium">Standings</h2>

        <div>
          <Tab.Group>
            <Tab.List className="flex items-center border-[1px] border-b-0 border-neutral-700 bg-neutral-800 ">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={classNames(
                      'flex-1 py-4 text-sm font-medium hover:cursor-auto focus:outline-none active:outline-none',
                      {
                        'border-b-2 border-neutral-300 text-neutral-200':
                          selected,
                        'border-b-2 border-transparent text-neutral-400':
                          !selected,
                      },
                    )}
                  >
                    Eastern Conference
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={classNames(
                      'flex-1 py-4 text-sm font-medium hover:cursor-auto focus:outline-none active:outline-none',
                      {
                        'border-b-2 border-neutral-300 text-neutral-200':
                          selected,
                        'border-b-2 border-transparent text-neutral-400':
                          !selected,
                      },
                    )}
                  >
                    Western Conference
                  </button>
                )}
              </Tab>
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel>
                <Standings conference="east" />
              </Tab.Panel>
              <Tab.Panel>
                <Standings conference="west" />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
}
