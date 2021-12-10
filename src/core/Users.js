function Users(props) {
 return (
  <div className={'users'}>
   <h2 className="user-heading">Users Online</h2>
   {Object.values(props.users).map((user, i) => {
    return (
     <li className={'user'} key={user + i}>
      <div className={'dot'} />
      {user}
     </li>
    );
   })}
  </div>
 );
}

export default Users;
