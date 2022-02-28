import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addreviews.css';

const Addreviews = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

            axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                console.log(res)
            });

    }
    return (
        <div className="tour-added">
            <h2>this is add review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Your Name" /> <br />
                <input {...register("email")} placeholder="Your Email" /> <br />
                <input {...register("des")} placeholder="What do you want to say" /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addreviews;