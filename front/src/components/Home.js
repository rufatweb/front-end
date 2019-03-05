import React from 'react'
import YoutubeBackground from 'react-youtube-background'
import { Advertisement } from 'semantic-ui-react'

const Home = (props) => {



return (
  <div className="home" >
  <YoutubeBackground
  videoId={"9zSVu76AX3I"}
  aspectRatio={"16:9"}
  overlay={"rgba(0,0,0,.4)"}
  className={"video-background"}
  >
<Advertisement  unit='top banner' test='Top Banner' />
</YoutubeBackground>
<div class="ui wide skyscraper test ad" data-text=" "><a href="/"><img alt="ad" src="https://static.skillshare.com/uploads/parentClasses/4c16e4daa75e1f1af7d7a3c1ff5c436b/f1210e8b"/></a></div>

<div>
<div class="ui large rectangle test ad one" data-text=" "><a href="/"><img alt="banner" src="https://pointsprizes-blog.s3-accelerate.amazonaws.com/4.png"/></a></div>
<div class="ui large rectangle test ad two" data-text=" "><a href="/collection"><img alt="banner" src="https://www.design4nails.co.uk/wp-content/uploads/2017/03/NEW-ARRIVALS.png"/></a></div>
</div>

</div>
)
}

export default Home;
