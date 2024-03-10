/* eslint-disable react/prop-types */
import { useState } from 'react';
import BulletSeparatedList from './BulletSeparatedList';
import './Playlist.css';
import { TitleText } from './CommonStyles';

const Playlist = ({ playlist }) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(playlist.numLikes);

    const handleLike = () => {
        setLiked(!liked);
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    }

    return (
        <div className="playlist">
            <img
                src={playlist.coverPhotoUrl ? playlist.coverPhotoUrl : "../../img/pig.jpeg"}
                alt={playlist.name}
                onDoubleClick={handleLike}
                width="420px"
                height="420px"
            />
            <PlaylistInfo playlist={playlist} />
        </div>
    );
}

const PlaylistInfo = ({ playlist }) => {
    return (
        <div className="playlistInfo">
            <TitleText style={{marginBottom: "20px"}}>{playlist.name}</TitleText>
            <span>{playlist.description ? playlist.description : "No description."}</span>
            <div style={{display: "flex", alignItems: "center"}}>
                <img
                    src={playlist.createdBy.profilePictureUrl ? playlist.createdBy.profilePictureUrl : "../../img/pig.jpeg"}
                    alt={playlist.createdBy.username}
                    width="25px"
                    height="25px"
                    style={{ borderRadius: "60%", paddingRight: "5px" }}
                />
                <BulletSeparatedList
                    list={[
                        playlist.createdBy.username,
                        playlist.songs.length + ' songs',
                        playlist.duration,
                        playlist.likesCount + ' likes'
                    ]}
                />
            </div>
            <SongList songs={playlist.songs} />
        </div>
    );
}

const SongList = ({ songs }) => {
    return (
        <ul>
            {songs.slice(0, 4).map((song, i) => (
                <li key={i}>
                    <Song song={song} />
                </li>
            ))}
        </ul>
    );
}

const Song = ({ song }) => {
    return (
        <div className="song selectable">
            <img
                src={song.imageUrl ? song.imageUrl : "../../img/pig.jpeg"}
                alt={song.name}
                width="55px"
                height="55px"
                style={{ borderRadius: "10%" }}
            />
            <div>
                <span className="truncate">{song.name}</span>
                <span className="truncate" style={{ color: "#ffffff70" }}>{song.artists}</span>
            </div>
            <span className="truncate">{song.album}</span>
            <span>{song.duration}</span>
        </div>
    );
}

export default Playlist;

