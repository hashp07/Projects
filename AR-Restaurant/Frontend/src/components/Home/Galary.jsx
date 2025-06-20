import React from 'react';

function Galary() {
  return (
    <div>
      <section className="bg-white  pb-10 md:py-20">
       
            <div className="w-full px-4 grid grid-cols-2 gap-4">
              <img
                src="https://res.cloudinary.com/dhturqqs5/image/upload/v1728840940/SIT%20Project/jhngufrtombcus5vbebs.png"
                alt="Living room furniture"
                className="h-full w-full object-cover object-center max-w-full row-span-2"
              />
              <img
                src="https://res.cloudinary.com/dhturqqs5/image/upload/v1728841345/SIT%20Project/hena4dikt9txnoqxn2sd.png"
                alt="Accessories collection"
                className="h-full w-full object-cover object-center max-w-full "
              />

              <img
                src="https://res.cloudinary.com/dhturqqs5/image/upload/v1728841628/SIT%20Project/p6pg6zoh7eldkjxigppo.png"
                alt="Office workspace"
                className="h-full w-full object-cover object-center max-w-full"
              />


            </div>
         
      </section>
    </div>
  );
}

export default Galary;
