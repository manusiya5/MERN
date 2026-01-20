import React from "react";


function Header() {
return (
<header className="bg-black text-white px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-white text-orange-600 font-bold rounded-full flex items-center justify-center">
🍗
</div>
</div>


<h1 className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">
 Biriyani Shop
</h1>


<nav className="flex gap-6 text-lg font-medium">
<a href="#" className="hover:text-orange-200">Home</a>
<a href="#" className="hover:text-orange-200">Menu</a>
</nav>
</div>
</header>
);
}
export default Header;