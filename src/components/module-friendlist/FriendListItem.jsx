import css from "./FriendList.module.css";

export default function FriendListItem(props) {
  return (
    <div>
      <img
        className={css.friendAvatar}
        src={props.avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.friendName}>{props.name}</p>
      {props.isOnline ? (
        <p className={css.isOnline}>Online</p>
      ) : (
        <p className={css.isOffline}>Offline</p>
      )}
    </div>
  );
}
