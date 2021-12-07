function Users(props) {
 return (
  <div className={'users'}>
   {Object.values(props.users).map((user) => {
    return <li key={user}>{user}</li>;
   })}
  </div>
 );
}

export default Users;
