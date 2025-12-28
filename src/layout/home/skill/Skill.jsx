
import { FaHtml5 } from 'react-icons/fa';
import SkillCircle from './SkillCircle';

const items = [
  {
    name: "HTML",
    Icon: <FaHtml5 />,
    rating: 90
  },
  {
    name: "CSS",
    Icon: <FaHtml5 />,
    rating: 75
  },
  {
    name: "TAILWIND",
    Icon: <FaHtml5 />,
    rating: 80
  },
];

const Skill = () => {
  return (
    <div className='bg-black py-10'>
      <div className='container mx-auto px-6 lg:px-46 grid grid-cols-1 lg:grid-cols-12 gap-10'>
        
        {/* LEFT */}
        <div className='lg:col-span-8'>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-6'>
            {items.map((item, i) => (
              <div
                key={i}
                className='bg-white/10 flex flex-col items-center justify-center pt-5 px-20 rounded-xl'
              >
                <SkillCircle percent={item.rating} />

                <div className='flex items-center gap-2 mt-5 pb-4'>
                  <p className='text-yellow-600 text-2xl'>{item.Icon}</p>
                  <p className='text-white font-[poppins] font-semibold text-lg'>
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className='bg-red-100 lg:col-span-4 w-full'>
          aaaaaaaaaaaa
        </div>
      </div>
    </div>
  );
};

export default Skill;