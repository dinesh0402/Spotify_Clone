import React from 'react'
import "../styles/Body.css"
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body({spotify}) {

  const [{discover_weekly}, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:2RCuq7ZcSpWaPELDv2Mat8`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className='body'>
        <Header spotify={spotify}/>
        <div className='body__info'>
          <img src={discover_weekly?.images[0].url} alt="" />
          <div className='body__infoText'>
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>

        <div className='body__songs'>
          <div className='body__icons'>
            <PlayCircleFilledIcon className='body__shuffle' onClick={playPlaylist}/>
            <FavoriteIcon fontSize='large'/>
            <MoreHorizIcon />
          </div>

          {/* Songs List */}
          {discover_weekly?.tracks.items.map(item => (
            <SongRow playSong={playSong} track={item.track} />
          ))}

        </div>
    </div>
  )
}

export default Body