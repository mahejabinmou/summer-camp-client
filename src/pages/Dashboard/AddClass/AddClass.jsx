import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddClass = () => {
    const { register, handleSubmit } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {

                    const imgURL = imgResponse.data.display_url;
                    const { name, seats, price, email, instructor } = data;
                    const newClass = { name, seats,enroll:0, role: 'pending', price: parseFloat(price), email, instructor, image: imgURL }
                    console.log(newClass);
                    fetch('https://summer-camp-server-side-mahejabinmou.vercel.app/classes', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newClass)
                    })




                }
            })
    };



    return (
        <div className="w-full px-10">
            <h2>Add Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>


                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" placeholder="Instructor Name"
                        {...register("instructor", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />

                </div>


                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Instructor email</span>
                    </label>
                    <input type="email" placeholder="Instructor email"
                        {...register("email", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />

                </div>


                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>


                <div className="form-control w-full my-4">
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Availabe Seats</span>
                        </label>
                        <input type="number" {...register("seats", { required: true })} placeholder="Available Seats" className="input input-bordered w-full " />
                    </div>
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-                         bordered w-full " />
                </div>


                <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
            </form>
        </div>


    );
};

export default AddClass;