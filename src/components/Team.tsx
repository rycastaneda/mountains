
import { useState } from 'react'

const Team = ({ tabs }: { tabs: Mountain[] }) => {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div id="team">
      <div className="container mx-auto py-10 flex items-center  lg:flex-row flex-col">
        <img src="./climb.png" />
        <p className='ml-4 mt-2 lg:mt-0'>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.</p>
      </div>
      <div className='bg-secondary'>
        <div className="container mx-auto">
          {
            tabs.map((tab, index) =>
              <button onClick={() => setCurrentTab(index)} key={tab.id} className={`px-4 border-0 py-2 font-oswald font-extrabold ${index === currentTab ? 'text-secondary bg-ice-blue' : 'text-ice-blue'} `}>
                <p className={`${index === currentTab ? 'border-b border-b-secondary pb-1' : ''}`}>{tab.name}</p>
              </button>
            )
          }
        </div>
      </div>

      <div className={`relative min-h-[600px] bg-cover`} style={{ backgroundImage: `url(${tabs[currentTab].image})` }}>
        <div className="container mx-auto py-10">
          <div className="lg:w-1/2 bg-white-opaque p-4 pr-12 mt-10">
            <h2 className='font-oswald text-2xl font-bold text-secondary'>SCHEDULE</h2>
            <div className="py-2">{tabs[currentTab].schedule.map((sched, index) => <div key={index} className="flex justify-between pb-2"><span>{sched.date}</span><span>{sched.name}</span></div>)}</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Team;