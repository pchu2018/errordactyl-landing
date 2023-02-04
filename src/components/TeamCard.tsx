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
    <div className="member">
      <img className="member-photo" src={data.photoPath}></img>
      <h2 className="member-name">{data.name}</h2>
      <p className="member-title">{data.title}</p>
      <a href={data.github}>GitHub</a>
      <a href={data.linkedIn}>LinkedIn</a>
    </div>
  )
}