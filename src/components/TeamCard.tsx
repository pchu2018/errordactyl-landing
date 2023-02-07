import { GitHub, LinkedIn } from '@mui/icons-material';

interface TeamCardData {
  name: string,
  photoPath: string,
  github: string,
  linkedIn: string,
  title: string
}

interface TeamCardProps {
  data: TeamCardData
}

export default function TeamCard({data}: TeamCardProps) {
  return (
    <div className="member-wrapper">
      <img className="member-photo" src={data.photoPath}></img>
      <div className='member'>
        <h3 className="member-name">{data.name}</h3>
        <p className="member-title">{data.title}</p>
        <a href={data.github}><GitHub></GitHub></a>
        <a href={data.linkedIn}><LinkedIn></LinkedIn></a>
      </div>
      
    </div>
  )
}