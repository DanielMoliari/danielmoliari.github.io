import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dashboardImg from '../public/assets/projects/dashboard.png';
import cryptoImg from '../public/assets/projects/crypto.png'
import foodImg from '../public/assets/projects/food.png'
import diceImg from '../public/assets/projects/dice.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
         
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Dashboard'
            backgroundImg={dashboardImg}
            projectUrl='/dashboard'
            tech='Next JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'
          />
          <ProjectItem
            title='Food App'
            backgroundImg={foodImg}
            projectUrl='/food'
            tech='React JS'
          />
          <ProjectItem
            title='Dice Game'
            backgroundImg={diceImg}
            projectUrl='/dice'
            tech='React JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
