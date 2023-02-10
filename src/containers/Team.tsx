import TeamCard from '../components/TeamCard';

export default function Team() {
  const teamMembers = [
    {
      name: 'Tony Van',
      photoPath: 'T037PK0BFFE-U03EUF9EK88-083361911dbb-512.png',
      title: 'Software Engineer',
      github: 'http://github.com/navynot',
      linkedIn: 'https://www.linkedin.com/in/navynot/'
    },
    {
      name: 'Eric Vartanian',
      photoPath: 'T037PK0BFFE-U03JQ1R10LS-579180546dcc-512.png',
      title: 'Software Engineer',
      github: 'http://github.com/evartan',
      linkedIn: 'https://www.linkedin.com/in/ericvartanian/'
    },
    {
      name: 'Lewis Lin',
      photoPath: 'IMG_3473.png',
      title: 'Software Engineer',
      github: 'https://github.com/nileswil',
      linkedIn: 'https://www.linkedin.com/in/lewislin9/'
    },
    {
      name: 'Pei-Yun Chu',
      photoPath: 'peiyun.jpg',
      title: 'Software Engineer',
      github: 'http://github.com/pchu2018',
      linkedIn: 'https://www.linkedin.com/in/pei-yun-chu/'
    }
  ]

  const memberCards = teamMembers.map((member, i) => {
    return (
      <TeamCard data={member} key={i}></TeamCard>
    )
  })

  return (
    <div id='team-wrapper'>
      <h3>Meet the team behind Errordactyl:</h3>
      <div id='team'>
        {memberCards}
      </div>
      
    </div>
  )
}