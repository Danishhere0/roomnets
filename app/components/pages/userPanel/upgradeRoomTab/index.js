import React, { useState } from "react";
import { Input } from "reactstrap";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux"
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
// import { useHistory } from "react-router-dom";

 function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const upgradeRoomTab = () => {
  const [checkBox, setCheckBox] = useState("radio1");
  const [checkBox2, setCheckBox2] = useState("radio1");
  const{id} =useParams()
  const history=useHistory()
  const [siteContent1, setSiteContent1] = useState([]);
  const [siteContent2, setSiteContent2] = useState([]);
  const [siteContent3, setSiteContent3] = useState([]);
  const [rates,setRates]= React.useState({"currency":"" , WeeklyPrice:"",MonthlyPrice:"", YearlyPrice:"",country:""})
  //const country = useSelector(({ CountryReducer }) => CountryReducer.country);
  const country = useSelector((state) => state.countryReducer.country);

  // const history = useHistory();
  const [selected,setSelected]= React.useState("")
const payableaparice= selected==="week"?rates.WeeklyPrice:selected==="month"?rates.MonthlyPrice:selected==="year"?rates.YearlyPrice:""

useEffect(() => {
    const fetchAboutIntro1 = async () => {
      const res6  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
        params: {
          pageslug: 'UpgradeRoom',
          content_location: '1weekplan'
        },
      });
      setSiteContent1(res6.data.userData[0]);
    };
    fetchAboutIntro1();
    const fetchAboutIntro2 = async () => {
      const res6  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
        params: {
          pageslug: 'UpgradeRoom',
          content_location: '1monthplan'
        },
      });
      setSiteContent2(res6.data.userData[0]);
    };
    fetchAboutIntro2();
    const fetchAboutIntro3 = async () => {
      const res6  = await axios.get(`${process.env.API_URL}/getSiteContent`, {
        params: {
          pageslug: 'UpgradeRoom',
          content_location: '1yearplan'
        },
      });
      setSiteContent3(res6.data.userData[0]);
    };
    fetchAboutIntro3();
}, []);

 const PostRoomReducer = useSelector(({ PostRoomReducer }) => PostRoomReducer
  );
const getPricesRates=async()=>{
  const countryFull= country === "NG"
                              ? "Nigeria"
                              : country === "US"
                              ? "Usa"
                              : country === "IE"
                              ? "Ireland"
                              : country === "KE"
                              ? "Kenya"
                              : country === "GH"
                              ? "Ghana"
                              : country === "ZA"
                              ? "South Africa"
                              : country === "GB"
                              ? "Uk"
                              : ""
                            
await axios.get(`/Api/v1/getPricesRates/${countryFull}`).then(rates=>{
rates.data.userData&&setRates(rates.data.userData)
console.log(rates.data)
}).catch(error=>{
  console.log(error)
})
}

 const config = {
    // public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
    public_key:process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: new Date().getTime() + "-" + id,
    amount: parseFloat(payableaparice),
    currency: rates.currency || "USD",
    payment_options: "card",
    customer: {
      email: PostRoomReducer.email,
      phonenumber: PostRoomReducer.mobile_numbe,
      name: PostRoomReducer.firstname,
    },
    customizations: {
      title: "RoomNets Ad Payment",
      description: "payment Add Post Premimum",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const initialOptions = {
    "client-id": "test",
    currency: rates.currency||'USD',
    intent: "capture",
    "data-client-token": "abc123xyz==",
};
  const handleValidatePayment= React.useCallback(async(id,response,selected)=>{
const params={
  post_id:id,
  payment_response:response,
  plan:selected
}
await axios.post(`${process.env.API_URL}/handleUpgradeRooms`,params).then(res=>{
if(res.data.status){
  router.push("/userpanel/PostRoomSuccess");
}
}).catch(error=>{
  console.log(error)
})

  },[])
  const handleValidatePaymentPayPal= React.useCallback(async(id,selected,orderID)=>{
const params={
  post_id:id,

  plan:selected,
  orderID:orderID
}
await axios.post(`${process.env.API_URL}/handleUpgradesRoomPayPal`,params).then(res=>{
  console.log(res.data)
if(res.data.status){
  router.push("/userpanel/PostRoomSuccess");
}
}).catch(error=>{
  console.log(error)
})

  },[])
  const handleFlutterPayment = useFlutterwave(config);
  const PayByflutterWave = async () => {
    await handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
        if (response.status === "successful") {
          console.log(response);
          // handleSuccess();
          handleValidatePayment(
            id,
            response,
            selected
          );
        }
      },
      onClose: () => {},
    });
  };


  const handleSelcted=(value)=>{
    setSelected(value)
  window.scrollTo(0,document.body.scrollHeight);
  }

  const handleCheckout=(value)=>{
   
if(!selected){
  return alert("You have not selected a plan")
}
if(value==="fluterwave"){
  PayByflutterWave() 
}
if(value==="paypal"){
  //PayBypaypal() 
}
  }


const onApprove= (data, actions)=> {
const orderID= data.orderID
handleValidatePaymentPayPal(id,selected,orderID)
// data.orderID 
    }
const createOrder=(data, actions) => {
           return actions.order.create({
               purchase_units: [
                   {
                       amount: {
                           value: payableaparice,
                       },
                   },
               ],
           });
       }
React.useEffect(()=>{getPricesRates()},[])

  return (
    <PayPalScriptProvider options={{ "client-id":process.env.REACT_APP_PAYPAL_CLIENT}}>
    <div className='dashboard-content'>
      <div className='privacy-setting' id='privacy'>
        <div className='common-card'>
          <div className='common-header'>
            <h5>Privacy</h5>
            <p className='font-roboto'>Step 1: Choose A plan that suites you and Upgrade </p>
          </div>
          <div className='privacy-content'>
            <div className='media'>
              <div className='media-body'>
                <h6 className='font-roboto'>Upgrading gets you even  more values,
                  Early Bird Access & 2x enquiries</h6>
                {/*<p className='font-roboto'>all peoples will be able to see my profile</p>*/}
              </div>
            </div>
          </div>
          <div className='privacy-content'>
            <h5>Account settings</h5>
            <div onClick={handleSelcted.bind(this,"week")} className= {`upgrade-card ${selected==="week"?"selected":null} media col-md-5 col-lg-3 wow animated slideInDown`}>
              <div className='media-body'>
                <h6 className='font-roboto'>1 Week plan</h6>
                <p className='font-roboto'></p>
              </div>
              <label className='switch'>
                <h4>{rates.currency}{numberWithCommas(rates.WeeklyPrice)} </h4>
                <span className='switch-state'>{siteContent1.content}</span>
              </label>
            </div>
            <div onClick={handleSelcted.bind(this,"month")} className= {`upgrade-card ${selected==="month"?"selected":null} media col-md-5 col-lg-3 wow animated slideInDown`}>
              <div className='media-body'>
                <h6 className='font-roboto'>1 Month plan</h6>
                <p className='font-roboto'></p>
              </div>
              <label className='switch'>
                <h4>{rates.currency}{numberWithCommas(rates.MonthlyPrice)} </h4>
                <span className='switch-state'>{siteContent2.content}</span>
              </label>
            </div>
            <div onClick={handleSelcted.bind(this,"year")} className= {`upgrade-card ${selected==="year"?"selected":null} media col-md-5 col-lg-3 wow animated slideInDown`}>
              <div className='media-body'>
                <h6 className='font-roboto'>1 Year plan</h6>
                <p className='font-roboto'></p>
              </div>
              <label className='switch'>
                <h4>{rates.currency}{numberWithCommas(rates.YearlyPrice)} </h4>
                <span className='switch-state'>{siteContent3.content}</span>
              </label>
            </div>
            
          </div>

          <div className="col-lg-12 wow animated slideInUp">
                <div className="main-title w-75 mx-auto d-table text-center mb-10">
                  {/* <span className="small-title color-primary position-relative line-2-primary">
                    What We Do?
                  </span> */}
                  <h2 className="title  color-primary mt-3">
               Step 2: Proceed to payment
                  </h2>
                </div>
            </div>
            <section className='row justify-content-center'>
              <span  className="pay-card paypal-btn text-center d-flex align-items-center justify-content-center">
                {/* <img className="paycard mx-4" src="/images/paypal.png" alt=""/> */}
                <PayPalButtons createOrder={createOrder} onApprove={onApprove}   forceReRender={[payableaparice]} disabled={!selected}  style={{ layout: "horizontal",color:"", }} />
              </span>
              <span  onClick={handleCheckout.bind(this,"fluterwave")} className="pay-card text-center">
                <img className="paycard"  src="/images/flutterwave.png" alt=""/>
              </span>
            </section>
        </div>
      </div>
    </div>
    </PayPalScriptProvider>
  );
};

export default upgradeRoomTab;
