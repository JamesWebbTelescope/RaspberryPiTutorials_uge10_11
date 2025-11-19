import car from '../assets/raspberry-pi-5.png'; // Import the image

function RaspberryPiImage() {
return (
<div className='justify-center'>
<img src={car} alt="The Raspberry Pi" /> {/* Use the image */}
</div>
);
}

export default RaspberryPiImage;