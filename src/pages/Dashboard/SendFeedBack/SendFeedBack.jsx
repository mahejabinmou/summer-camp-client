import axios from "axios";

import { useParams } from "react-router-dom";


const SendFeedBack = () => {
    const feedbackId=useParams();
    console.log(feedbackId.id);
    

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target.feedBack.value
        console.log(form);
        axios.put(`https://summer-camp-server-side-three.vercel.app/feedback/${feedbackId?.id}`,{
            //  receiveFeedBack
            feedBack:form
        })
        .then(res=>{
            console.log(res.data);
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <textarea name="feedBack"> </textarea>
                  </div>
              
              <div className="form-control mt-6">
                <input type="submit" value="submit" className="btn btn-success" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SendFeedBack;