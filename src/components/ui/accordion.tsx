import { useCallback, useState } from "react"

function Accordion({ items }: { items: Mountain[] }) {
  const [accordions, setAccordions] = useState(items.map(item => {
    return {
      ...item,
      open: false
    }
  }))
  const handleOpen = useCallback((index: number) => {
    accordions[index].open = !accordions[index].open
    setAccordions([...accordions])
  }, [accordions])

  return (
    <div className="lg:hidden">
      {accordions.map((accordion, i) => {
        return (<div key={i}>
          <a className={`flex px-1 py-4 shadow-lg font-extrabold justify-between items-center ${accordion.open ? 'text-secondary bg-ice-blue' : 'bg-secondary text-ice-blue'}`} onClick={() => handleOpen(i)}>
            {accordion.name}
            <img src={accordion.open ? "/up.svg" : "/down.svg"} />
          </a>
          <div className={"bg-secondary text-primary leading-3 grid transition-grid-template-rows " + (accordion.open ? 'grid-rows-1' : '')}>
            <div  className={`${accordion.open ? 'min-h-[600px]' : ''} bg-cover overflow-hidden`} style={{ backgroundImage: `url(${accordion.image})` }}>
              <div className="bg-white-opaque px-4">
                <h2 className='font-oswald text-2xl font-bold text-secondary'>SCHEDULE</h2>
                {accordions[i].schedule.map((sched, index) => <div key={index} className="flex justify-between pb-2"><span>{sched.date}</span><span>{sched.name}</span></div>)}
              </div>
            </div>
          </div>
        </div>);
      })
      }
    </div>
  )
}


export default Accordion