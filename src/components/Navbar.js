import Button from './Button';
import Logo from './Logo';
import Nav from './Nav';
function Navbar(){
return (
    <div className="navbar bg-gradient-to-r from-indigo-500 via-blue-500 to-navyblue-500">
      <div className="container flex mx-auto items-center">
        <div className="w-3/12">
          <Logo/>
        </div>
        <div className="w-6/12">
            <Nav/>
        </div>
        <div className="w-3/12">
          <Button variant="outline-yellow">Kontak</Button>
        </div>
          <div className="text-center-uppercase"></div>
      </div>
      </div>
  );
}

export default Navbar;
