const Nav = ({ logo, sticky }: { logo?: string, sticky?: boolean }) => {

  const linkColors = !logo ? 'text-white border-b-white' : 'text-primary border-b-primary'

  const onClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: y,
        behavior: 'smooth'
      });
    }
  }

  return (<div className={`${sticky ? 'sticky top-0 z-[500] bg-white' : ''}`}>
    <div className={`container mx-auto`}>
      <div className={`flex justify-between py-4 items-center ${sticky ? 'flex-col lg:flex-row space-y-4' : ''}`}>
        <img src={logo || './logo.png'} alt="" className='h-[43px]' />
        <div>
          <ul className='mb-0 font-lato italic flex space-x-4 lg:space-x-12'>
            <li><a onClick={(e: React.MouseEvent<HTMLElement>) => { onClick(e, 'history') }} href="#history" className={`${linkColors} border-b pb-1 font-black tracking-widest text-sm`}>01. HISTORY</a></li>
            <li><a onClick={(e: React.MouseEvent<HTMLElement>) => { onClick(e, 'team') }} href="#team" className={`${linkColors} border-b pb-1 font-black tracking-widest text-sm`}>02. TEAM</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Nav;