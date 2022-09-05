
function Card({user}){
  return (
    <div className="card">
      <img className="profile" src={user.avatar} />
      <div>First Name: {user.first_name}</div>
      <div>Last Name: {user.last_name}</div>
      <div>Email : {user.email}</div>
    </div>
  )
}

export default Card;
