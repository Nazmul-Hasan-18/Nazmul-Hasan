
import { FaHtml5 } from 'react-icons/fa';
import SkillCircle from './SkillCircle';

const items = [
  {
    name: "HTML",
    // Icon: <FaHtml5 />,
    rating: 95
  },
  {
    name: "CSS",
    // Icon: <FaHtml5 />,
    rating: 90
  },
  {
    name: "Tailwind",
    // Icon: <FaHtml5 />,
    rating: 88,
  },
  {
    name: "Bootstrap",
    // Icon: <FaHtml5 />,
    rating: 70
  },
  {
    name: "Javascript",
    // Icon: <FaHtml5 />,
    rating: 87
  },
  {
    name: "React.js ",
    // Icon: <FaHtml5 />,
    rating: 85
  },
  {
    name: "Next.js",
    // Icon: <FaHtml5 />,
    rating: 70
  },

  {
    name: "Python",
    // Icon: <FaHtml5 />,
    rating: 60,
  },
];

const Skill = () => {
  return (
    <div className='bg-[#222831] py-10 lg:py-20'>
      <div className='flex flex-col  lg:items-center gap-6 lg:gap-10'>
        <div className='px-6' data-aos="fade-up"
          data-aos-duration="3000">
          <h2 className='lg:text-[45px] text-[32px] text-white font-semibold font-[poppins]'>My <span className='main_color'>Skill</span></h2>
        </div>
        <div className='container mx-auto px-6 lg:px-76 '>

          {/* LEFT */}
          <div className=''>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-6'>
              {items.map((item, i) => (
                <div data-aos="fade-up"
                  data-aos-duration="3000">
                  <div
                    key={i}
                    className='bg-white/10 backdrop-blur-2xl flex flex-col items-center justify-center pt-5 px-20 rounded-xl'
                  >
                    <div className='skill_sdow rounded-full'>
                      <SkillCircle percent={item.rating} />
                    </div>

                    <div className='flex items-center gap-1 mt-4 lg:mt-6 pb-3 lg:pb-4'>
                      <p className='text-yellow-500 text-xl lg:text-2xl'>{item.Icon}</p>
                      <p className=' font-[Quicksand] font-semibold lg:text-lg text-gray-200'>
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
         
        </div>
      </div>
    </div>
  );
};

export default Skill;