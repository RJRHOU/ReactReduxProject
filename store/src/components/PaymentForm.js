import React, {useEffect, useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios';


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm({totalAmt}) {
    const[success, setSucces] = useState(false )
   
    const stripe = useStripe()
    const elements = useElements()
    
    
    
    useEffect(() =>{
        console.log(totalAmt)
    })
       

    const handleSubmit = async (e) => {
        
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    
        
    if(!error && error === undefined && totalAmt !==0) {
        
        try{
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: totalAmt * 100 ,
                id
            })

            if(response.data.success) {
                console.log("Successful payment ")
                setSucces(true)
            }
        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log("Error Encountered: error= ", error, " totalAmt= ", totalAmt)
    }
}


  return (
    <>
    
    {!success ?
    <form onSubmit={handleSubmit}>
        <fieldset className='FormGroup'>
           <div className='FormRow'>
               <CardElement options={CARD_OPTIONS}/>
               
           </div>
           
        </fieldset>
        <div className='Cart_Total' >
                {<p> Your total purchase is: ${totalAmt}  
                <div>Enter card number to submit payment. </div>
                <button>Submit Payment</button></p>}
        
        
        </div>
    </form>
    
    
     : <div> 
         <h2>
             {`Your Purchase of ${totalAmt} was Successful!`}
         </h2>
     </div>
    }
    </>
  )
}
