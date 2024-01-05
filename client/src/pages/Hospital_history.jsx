import React from 'react'

function Hospital_history() {

    
const people = [
    {
      name: 'APPOLO',
    //   title: 'Cardiologist',
      department: 'Surgery',
      area: 'OMR',
      consulted: 'DR.Shanmugam',
      lastMeet:"12/12/2023",
    //   image:
    //     'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    meetDate:"14/01/2024"
    },

    {
        name: 'KAUVERY',
        // title: 'Dietician',
        department: 'General',
        area: 'ANNA NAGAR',
        consulted: 'DR.Suresh',
        lastMeet:"12/12/2023",
        // image:
        meetDate:""
        //   'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      },

      {
        name: 'MGM',
        // title: 'Oncologist',
        department: 'Physcist',
        area: 'SALIGRAMAM',
        consulted: 'DR.Shilpa',
        lastMeet:"12/12/2023",
        meetDate:"04/09/2024"
        // image:
        //   'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      },
  ]  
  

  
 

  return (

    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 dark:text-white dark:">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">HOSPITALS VISITED</h2>
            <p className="mt-1 text-sm text-gray-700">
            </p>
          </div>
          <div>
            
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Hospitals Visisted</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Purpose of Visit
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Last Visited
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Next Visit
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Doctor Consulted
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.name}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{person.name}</div>
                              <div className="text-sm text-gray-700">{person.area}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          {/* <div className="text-sm text-gray-900 ">{person.title}</div> */}
                          <div className="text-sm text-gray-700">{person.department}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                           
                            Met Last on:{ person.lastMeet}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          {person.meetDate?<span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
                          >
                            Next meet: {person.meetDate}
                          </span>: <span className='inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-green-800'>completed</span>}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {person.consulted}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                         
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
  
}

export default Hospital_history