import React from 'react';
import Hero from '../components/Hero';
import { leadership, designers, developers } from '@/lib/teamData';

interface TeamMemberProps {
  name: string;
  role: string;
  category: 'designers' | 'developers' | 'leadership';
}

const TeamMember = ({ name, role, category }: TeamMemberProps) => {
  const imagePath = `src/assets/photos/members/${category}/${name}.png`;
  const displayName = name.replace(/-/g, ' ');

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 rounded-full overflow-hidden w-32 h-32 border-2 border-blueprint-blue">
        <img 
          src={imagePath} 
          alt={displayName} 
          className="w-full h-full object-cover" 
        />
      </div>
      <h3 className="text-lg font-bold font-raleway">{displayName}</h3>
      <p className="text-sm text-gray-600 mb-2 font-karla">{role}</p>
    </div>
  );
};

const Team = () => {
  return (
    <div>
      <Hero 
        title="Our Team"
        description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
        buttonText="Meet our Team"
        buttonLink="#leadership"
      />
      
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div id="leadership" className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {leadership.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  category="leadership"
                />
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Designers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {designers.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  category="designers"
                />
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Developers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {developers.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  category="developers"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <div className="flex justify-center py-8">
        <a href="#top" className="inline-block border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
          Back to top
        </a>
      </div>
    </div>
  );
};

export default Team;