import { ManageSearch, CheckCircleOutlined, SyncAlt, ReportGmailerrorredOutlined } from '@mui/icons-material';

export default function MainCard() {
  return (
    <div id='maincard-wrapper'>
      <div className='maincard' id='card1'>
        <div className='maincard-text'>
          <h2>Automatic route parsing</h2>
          <p>Set a server folder path or use the default, and Errordactyl will read your files and find all declared endpoints.</p>
        </div> 
        <ManageSearch></ManageSearch>
      </div>
      <img className='gif' src='ezgif-3-b69af5ed38.gif'></img>
      <div className='maincard' id='card2'>
        <div className='maincard-text'>
          <h2>Highly configurable</h2>
          <p>Input request bodies, set URL parameters, add headers. Choose which routes to test or just run them all at once!</p>
        </div> 
        <CheckCircleOutlined></CheckCircleOutlined>
      </div>
      <div className='maincard' id='card3'>
        <div className='maincard-text'>
          <h2>Send batch requests</h2>
          <p>No more manually sending one request at a time. Test all your endpoints together and quickly pinpoint route issues.</p>
        </div> 
        <SyncAlt></SyncAlt>
      </div>
      <img className='gif' src='ezgif-3-6a8eba0a17.gif'></img>
      <div className='maincard' id='card4'>
        <div className='maincard-text'>
          <h2>Robust error tracing</h2>
          <p>Errordactyl will parse your stack trace and return relevant information, saving you time and energy as you debug servers.</p>
        </div> 
        <ReportGmailerrorredOutlined></ReportGmailerrorredOutlined>
      </div>

      <img id='edact-card' src='edact_r.png'></img>
    </div>
    
  )
}

