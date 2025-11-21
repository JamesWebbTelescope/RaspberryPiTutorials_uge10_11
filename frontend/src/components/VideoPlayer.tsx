import YouTube from 'react-youtube';

const VideoPlayer = () => {
    const videoId = 'https://www.youtube.com/watch?v=VQRD_9ilftw'; // Replace with your YouTube video ID

    return (
    <div>
        <YouTube videoId={videoId} />
    </div>
    );
};

export default VideoPlayer;