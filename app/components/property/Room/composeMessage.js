import { useRouter } from "next/router";
import React from "react";
import { useHistory } from "react-router";
import { useDispatch,useSelector } from "react-redux";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import axios from "axios";
import Qs from "querystring"

const ComposeMessage = () => {
  const router = useRouter();
  const history = useHistory();
  const state = history.location.state;

  const [errors, setErrors] = React.useState([]);
  const currentUser = useSelector(({ user }) => user.currentUser);
 
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
 const search= Qs.parse(history.location.search)
 const token = currentUser && currentUser.token;
  const [formResponse, setFormResponse] = React.useState({
    firstName: "",
    message: "",
    lastName: "",
    company: "",
    mobileNumber: "",
    subject: "",
    email: "",
  });

  const validatePage = async () => {
    const {
  
    
      message,
     
    } = formResponse;
    const newError = new Array();

    if (!message) {
      newError.push("Message fields can not be blank");
    }


    return newError;
  };
  const handleNext = async (e) => {
    e.preventDefault();
    await validatePage().then(async (res) => {
      if (res.length > 0) {
        setErrors(res);
        window.scrollTo(0, 30);
      } else {
        const Data={body:formResponse.message,receiver:search.posters_id,title:search.title}
        setLoading(true);
        await axios
          .post(`/api/v1/sendMessages`, Data,{headers:{ Authorization:token}})
          .then((response) => {
            setLoading(false);
            history.replace("/Contactsuccess");
          })
          .catch((err) => {
            setLoading(false);

            if (err.response && err.response.data.message) {
              setErrors([err.response.data.message]);
            } else {
              setErrors([
                "An error occured, make sure you have a working network",
              ]);
            }
            console.log(err);
          });
        // history.push("/Contactsuccess");
      }
    });
  };
  return (
    <div className='desc-box'>
      <div className='page-section'>
        <h4 className='content-title'>Poster's Contact Details</h4>
        <div className='review'>
          
        {
             !currentUser? <div className="row justify-content-center">
             <div style={{minHeight:"350px"}} className="col-lg-6">
               <p className="alert alert-danger">
                 <ErrorOutlineIcon /> You Must Be Logged In To Send message
               </p>
             </div>
           </div>: <div className="bg-white px-30 py-40 shadow w-75 mx-auto">
                <form onSubmit={handleNext}>
                  <h3 className="color-secondary line-bottom pb-15 mb-20 wow slideInDown animated">
                  Message {search.posters_name}
                  </h3>


                  <h6 className="color-secondary pb-1 mb-20 wow slideInDown animated">
                 Re: {search.title}
                  </h6>
                  <div className="row justify-content-center">
                    <div className="col-lg-7 text-left">
                      {errors.length > 0
                        ? errors.map((xxx) => (
                            <p className="error-card alert-danger">{xxx}</p>
                          ))
                        : null}
                      <div style={{ height: "10px" }} />
                    </div>
                  </div>

                 
                  <div className='col-lg-5 float-right'>
                    <p>
                      Your privacy matters to us, Roomnets.com provides an enabling environments for you
                       to transact your business in a safer ground and we respect your privacy
                       , allways comply with the law
                       Read more about our <a href='/privacy'> privacy policy</a>
                    </p>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-12 col-lg-12 wow slideInUp animated">
                      <textarea
                        className="form-control bg-gray"
                        rows={7}
                        placeholder="Type Message..."
                        defaultValue={""}
                        value={formResponse.message}
                        onChange={(e) =>
                          setFormResponse({
                            ...formResponse,
                            message: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col-lg-12">
                      <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-secondary"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
           }
        </div>
        <hr />
     {/*   <h4 className='content-title'>Contact Poster</h4>
        <form className='review-form'>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Name' required />
          </div>
          <div className='form-group'>
            <input type='email' className='form-control' placeholder='Email' required />
          </div>
          <div className='form-group'>
            <textarea className='form-control' placeholder='Comment'></textarea>
          </div>
          <button type='submit' onClick={() => router.push("/agent/submit-property")} className='btn btn-gradient btn-pill'>
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default ComposeMessage;
