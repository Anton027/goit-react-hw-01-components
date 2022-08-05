
const InfoProfile = ({ label, quantity }) => { 
  return (
    <li>
      <span>{label}</span>
      <span>{quantity}</span>
    </li>
  )
};
// const InfoUser = ({ label }) => {
//   return <p>{label}</p>
// };

const UserInfo = ({ label, text, info, imgUrl}) => {
  return (
    <>
      <img src={imgUrl} alt={label} width='120'/>
      <p>{label}</p>
      <p>{text}</p>
      <p>{info}</p>
    </>
  )
};

export const Profile = ({ user:
  { username, tag, location, avatar, stats }
}) => {
  return (
    <div >
      <div>
        <UserInfo imgUrl={avatar} label={username} text={tag} info={location} />
      </div>
      <ul>
        <InfoProfile label={`Followers`} quantity={stats.followers} />
        <InfoProfile label={`Views`} quantity={stats.views} />
        <InfoProfile label={`Likes`} quantity={stats.likes}/>
      </ul>
    </div>
  );
}