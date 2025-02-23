import css from "./Profile.module.css";

export default function Profile(props) {
  return (
    <div className={css.container}>
      <div className={css.user}>
        <img className={css.avatar} src={props.image} alt="User avatar" />
        <p className={css.name}>{props.name}</p>
        <p className={css.pSecondary}>
          {props.tag.startsWith("@") ? `${props.tag.slice(1)}` : `${props.tag}`}
        </p>
        <p className={css.pSecondary}>{props.location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{props.stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{props.stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
