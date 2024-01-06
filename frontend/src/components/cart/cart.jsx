
import { Grid, Typography,Box,styled, Button } from "@mui/material";
import {  useSelector } from "react-redux";
import EmptyCart from "./emptyCart";
import { userCheckout } from "../../service/api.js";
//stripe payment
import {loadStripe} from '@stripe/stripe-js';

//components
import CartItem from "./cartItem";
import TotalView from "./totalView";

const LeftComponent=styled(Grid)`
    padding-right:15px;
`

const Container=styled(Grid)`
    padding:30px 135px;
`

const Header=styled(Box)`
    padding:15px 24px;
    background:#fff;
`

const ButtonWrapper=styled(Box)`
    padding:16px 22px;
    background:#fff;
    box-shadow:0 2px 10px 0 rgb(0 0 0 / 10% );
    border-top:1px solid #f0f0f0
`
const StyledButton=styled(Button)`
    display:flex;
    margin-left:auto;
    background:#fb641b;
    color:#fff;
    width:250px;
    height:51px;
    border-radius:2px;
    &:hover {
        background: #fb641b; /* Set the background color on hover to the same as the default background */
    }
`

const Cart=()=>{
    
    const {cartItems}=useSelector(state=>state.cart);

    console.log("This is cart items",cartItems)

    const buyNow= async ()=>{

        const stripe=await loadStripe("pk_test_51OVI5tSG5J5LDs8la95XSdw9SlIe2RtIN86gZirKBSsPEtA3kYAns3QqTaWRZp6Mckh36CFFx7f8tNXauIgi3BIv00DAv8UXAM")

        const body={products:cartItems}

        let session=await userCheckout(body);


        const result=stripe.redirectToCheckout({
                sessionId:session.data
        })

        if(result.error){
            console.log("this is error ",result.error)
        }

    }

    return (
        <>
            {
                cartItems.length?
                        <Container container>
                            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                                <Header>
                                    <Typography>My Cart ({cartItems.length})</Typography>
                                </Header>
                                {
                                    cartItems.map(item=>(
                                        <CartItem item={item}/>
                                    ))
                                }
                                <ButtonWrapper>
                                    <StyledButton onClick={()=>buyNow()}>Place Order</StyledButton>
                                </ButtonWrapper>

                            </LeftComponent>
                            <Grid item lg={3} md={3} sm={12} xs={12}>
                                <TotalView cartItems={cartItems}/>
                            </Grid>
                        </Container>
                :  <EmptyCart/>
            }
        </>
    )
}

export default Cart;