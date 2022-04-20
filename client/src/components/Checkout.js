import StriptCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
    getorderStart, getorderSuccess, getorderfaliure
} from "../redux/orderRedux";
import { userReuest } from "../requestMethod";
const Checkout = ({ subtotal }) => {
    const user = useSelector(state=>state.user?.currentUser)
  const dispatch = useDispatch();
  const tokenHandler = async(token) => {
    dispatch(getorderStart());
    try {
      let res= await userReuest.post("/orders/payment", { token, subtotal, user });
      dispatch(getorderSuccess(res.data))
    } catch (err) {
        dispatch(getorderfaliure())

    }
  };


  return (
    <div>
      <StriptCheckout
        amount={subtotal * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        stripeKey="pk_test_51KKzZJSEaqxFMFOUTQbxTd7chhjQYvhsYmDCPyHtyEpoBOE5TlA9qnSGsaxBnoTCvmMrNZxfrzK6gBCCmKKqpHc00jXVwHejO"
        currency="USD"
      >
        <button className="btn">
          Pay now
        </button>
      </StriptCheckout>
    </div>
  );
};

export default Checkout;
