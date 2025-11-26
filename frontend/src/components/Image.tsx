import raspberry from '../assets/raspberry-pi-5.png'; // Import the image

function RaspberryPiImage() {
return (
    <div className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${raspberry})` }}>
    </div>
    );
}

export default RaspberryPiImage;