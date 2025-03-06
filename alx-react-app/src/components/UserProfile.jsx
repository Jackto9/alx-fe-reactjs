const UserProfile = (props) => {
    return (
      <div className="user-profile">
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p> {/* Make sure 'Bio' is included explicitly */}
      </div>
    );
  };
  
  export default UserProfile;
  