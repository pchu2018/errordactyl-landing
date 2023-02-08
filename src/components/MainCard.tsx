import { ManageSearch, CheckCircleOutlined, SyncAlt, ReportGmailerrorredOutlined } from '@mui/icons-material';

export default function MainCard() {
  return (
    <div id='maincard-wrapper'>
      <div className='maincard' id='card1'>
        <div className='maincard-text'>
          <h2>Automatic route parsing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div> 
        <ManageSearch></ManageSearch>
      </div>
      <div className='maincard' id='card2'>
        <div className='maincard-text'>
          <h2>Highly configurable</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div> 
        <CheckCircleOutlined></CheckCircleOutlined>
      </div>
      <div className='maincard' id='card3'>
        <div className='maincard-text'>
          <h2>Send batch requests</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div> 
        <SyncAlt></SyncAlt>
      </div>
      <div className='maincard' id='card4'>
        <div className='maincard-text'>
          <h2>Robust error tracing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div> 
        <ReportGmailerrorredOutlined></ReportGmailerrorredOutlined>
      </div>

      <img id='edact-card' src='https://errordactyl.s3.amazonaws.com/edact_r.png'></img>
    </div>
    
  )
}

