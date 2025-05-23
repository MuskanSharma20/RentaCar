import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Calendar from '../Components/Calender';


const Dashboard = () => {
    const [user, setUser] = useState({});

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
        console.log(user);
    },[])
    
    const navigate = useNavigate();

    return (
        <div>
            <section
            className="h-[85vh] w-full bg-cover bg-center flex"
            style={{
                backgroundImage:
                "url('https://images.pexels.com/photos/5875895/pexels-photo-5875895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}>
                <div className="flex bg-black/30 backdrop-blur-none h-110 rounded-lg w-full !p-10 !m-10 gap-20 items-center">
                <div className="flex flex-col items-center justify-center gap-5">
                    <img className="h-40 w-40 rounded-full" src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg" alt="" />
                    <h1 className="text-5xl text-white text-center">
                        Hey {user?.fullName}, welcome to RideEase.
                    </h1>
                </div>
                <div className="!p-10">
                    <Calendar />
                </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard