import { useState } from 'react';
import { Check, Twitter, Facebook, Share2, Linkedin, Mail } from 'lucide-react';
import { Button, Input, Select, Divider } from 'antd';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const { Option } = Select;

export default function BMWCarRental() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('May 01, 2025');
  const [returnDate, setReturnDate] = useState('May 01, 2025');
  const [selectedImage, setSelectedImage] = useState('https://imgd.aeplcdn.com/640X480/vimages/202501/3782260_55862_1_1736252091527.jpg?q=80');

  const carImages = [
    'https://imgd.aeplcdn.com/640X480/vimages/202501/3782260_55862_1_1736252091527.jpg?q=80',
    'https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-side-view-2.jpeg?q=80',
    'https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-rear-view-2.jpeg?q=80',
    'https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-front-view-2.jpeg?q=80',
  ];

  const carSpecs = [
    { name: 'Body', value: 'Hatchback' },
    { name: 'Seat', value: '5 seats' },
    { name: 'Door', value: '4 doors' },
    { name: 'Luggage', value: '150' },
    { name: 'Fuel Type', value: 'Petrol' },
    { name: 'Engine', value: '999 cc' },
    { name: 'Year', value: '2020' },
    { name: 'Mileage', value: '200' },
    { name: 'Transmission', value: 'Manual' },
    { name: 'Drive', value: 'FWD' },
    { name: 'Fuel Economy', value: '18.78 kmpl' },
    { name: 'Exterior Color', value: 'Metallic Sizzling Red' },
    { name: 'Interior Color', value: 'Black' }
  ];

  const features = ['Bluetooth', 'Multimedia Player', 'Central Lock', '2 Airbag' ];
const BASE_URL = import.meta.env.VITE_PROD_BASE_URL;
  const handleBookNow = async () => {
    const bookingData = {
      pickupLocation,
      dropoffLocation,
      pickupDate,
      returnDate,
      carModel: 'Volkswagen Polo',
      pricePerDay: 1800,
    };
    try{
const response = await axios.post(`${BASE_URL}/api/auth/bookings`, bookingData);
      console.log('Booking Successfull:', response.data);
      return alert('Booking successful!');
  
    } catch (error) {
    console.error('Booking error:', error);
    alert('An error occurred while booking.');
  }
  };

  return (
    <div>
      <Header />
      <section className="h-85 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <h1 className="text-white text-4xl md:text-5xl font-bold">Vehicle Fleet</h1>
      </section>
      <div className="max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !mt-10 !mb-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Left side: Image + Details */}
        <div>
          <img src={selectedImage} alt="Selected" className="w-full h-96 object-cover shadow" />
          <div className="grid grid-cols-4 gap-2 !mt-4">
            {carImages.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(img)}
                alt={`thumb-${index}`}
                className={`cursor-pointer rounded-lg border-2 ${selectedImage === img ? 'border-blue-500' : 'border-transparent'}`}
              />
            ))}
          </div>

          <h1 className="text-3xl font-bold text-blue-900 !mt-6 !mb-2">Volkswagen Polo</h1>
          <p className="text-gray-700 !mb-4">
          Volkswagen Polo is the top model in the Polo lineup and the renral price of Polo top model is Rs. 1800/day. It gives a mileage of 18.78 kmpl.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 !mb-3">Specifications</h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            {carSpecs.map((spec, index) => (
              <div key={index} className="flex justify-between">
                <span>{spec.name}</span>
                <span className="font-medium">{spec.value}</span>
              </div>
            ))}
          </div>

          <Divider />

          <h2 className="text-2xl font-bold text-blue-900 !mb-3">Features</h2>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="!mr-2 text-green-500" size={18} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Booking Form */}
        <div className="bg-white !p-6 rounded-lg shadow-md w-full max-w-md lg:sticky lg:top-10">
          <div className="!mb-4 bg-gray-100 justify-between text-center !ml-20 !pt-5 w-50 h-30">
            <p className="text-gray-600 text-sm">Daily rate</p>
            <p className="text-4xl font-bold text-blue-900">₹1800</p>
          </div>

          <h2 className="text-xl font-bold !mb-4">Booking this car</h2>

          <div className="!mb-4">
            <label className="block !mb-1 text-gray-700">Pick Up Location</label>
            <Input
              placeholder="Enter pickup location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            />
          </div>

          <div className="!mb-4">
            <label className="block !mb-1 text-gray-700">Drop Off Location</label>
            <Input
              placeholder="Enter dropoff location"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
            />
          </div>

          <div className="!mb-4">
            <label className="block !mb-1 text-gray-700">Pick Up Date & Time</label>
            <div className="flex gap-2">
              <Input value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
              <Select defaultValue="Time" className="w-1/2">
              <Option key="pickup-9">9:00 AM</Option>
                <Option key="pickup-12">12:00 PM</Option>
                <Option key="pickup-15">3:00 PM</Option>
                <Option key="pickup-18">6:00 PM</Option>
              </Select>
            </div>
          </div>

          <div className="!mb-6">
            <label className="block !mb-1 text-gray-700">Return Date & Time</label>
            <div className="flex gap-2">
              <Input value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
              <Select defaultValue="Time" className="w-1/2">
              <Option key="pickup-9">9:00 AM</Option>
                <Option key="pickup-12">12:00 PM</Option>
                <Option key="pickup-15">3:00 PM</Option>
                <Option key="pickup-18">6:00 PM</Option>
              </Select>
            </div>
          </div>

          <Button type="primary" className="w-full" size="large" onClick={handleBookNow}>
            Book Now
          </Button>

          <Divider />

          <h3 className="text-lg font-bold !mb-2">Share</h3>
          <div className="flex gap-2 flex-wrap">
            <Button icon={<Twitter />} shape="circle" />
            <Button icon={<Facebook />} shape="circle" />
            <Button icon={<Linkedin />} shape="circle" />
            <Button icon={<Mail />} shape="circle" />
            <Button icon={<Share2 />} shape="circle" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
      );
}
