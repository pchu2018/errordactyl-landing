import TeamCard from '../components/TeamCard';

export default function Team() {
  const teamMembers = [
    {
      name: 'Tony Van',
      photoPath: 'https://github.com/pchu2018/errordactyl-landing/blob/main/src/assets/edact_r.png',
      title: 'Software Engineer',
      github: 'github.com/navynot',
      linkedIn: 'https://www.linkedin.com/in/navynot/'
    }
  ]

  const memberCards = teamMembers.map((member, i) => {
    return (
      <TeamCard data={member} key={i}></TeamCard>
    )
  })

  return (
    <div>
      {memberCards}
    </div>
  )
}