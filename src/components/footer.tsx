const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-4 flex flex-wrap  justify-between items-center">
        <img src="/logo-black.png" alt="" />

        <p className="italic text-light-gray py-2 lg:py-0">COPYRIGHT {year}. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default Footer;