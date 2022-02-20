
import video from "../data/video.js";
import '../index.css';

function App() {
console.log("Here's your data:", video);

  return (
    <>
    <div className="center">
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
    <div className="commentsSection">
    {/* {Object.keys(video).map(videos => <p key={video.id[0]}>{video.title}</p>)} */}
   <h1>{video.title}</h1>
   <p>{video.views} Views | Uploaded {video.createdAt}</p>
   <button>{video.upvotes} &#128077; </button>
   <button>{video.downvotes} &#128077; </button><br></br>
   <button>Hide Comments</button>
   <hr></hr>
       {video.comments.map(comment => <p key={comment.id}>{comment.user}<br></br>{comment.comment}</p>)}
       </div>
       </div>
    </>
  );
}

export default App;
