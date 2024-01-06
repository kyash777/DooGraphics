import { Box,Button,styled } from "@mui/material";
import {ShoppingCart as Cart} from '@mui/icons-material';
import {Bolt as BoltIcon} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { addToCart } from "../../redux/actions/cartActions.js";
import { useState } from "react";
import {loadStripe} from '@stripe/stripe-js';
import { userCheckout } from "../../service/api.js";

const LeftContainer=styled(Box)`
    min-width:40%;
    padding:40px 0 0 80px
`;

const Image=styled("img")({
    width:"90%",
    paddind:"15px"
})

const StyledButton=styled(Button)`
    width:48%;
    height:50px;
    border-radius:2px;


`


const ActionItem=({product})=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const [quantity,setQuantity]=useState(1);
    const {id}=product;

    const buyNow= async ()=>{

        const stripe=await loadStripe("pk_test_51OVI5tSG5J5LDs8la95XSdw9SlIe2RtIN86gZirKBSsPEtA3kYAns3QqTaWRZp6Mckh36CFFx7f8tNXauIgi3BIv00DAv8UXAM")

        const products=[product]
        
        const body={products:products}

        let session=await userCheckout(body);


        const result=stripe.redirectToCheckout({
                sessionId:session.data
        })

        if(result.error){
            console.log("this is error ",result.error)
        }

    }

    const addItemTocart=()=>{
        dispatch(addToCart(id,quantity));
        navigate("/cart");
    }
    return (
        <LeftContainer>
            <Box style={{  padding:"15px 20px",
    border:"1px solid #f0f0f0 "}}>
                <Image src={product.url} alt="Image" />
            </Box>
            <StyledButton variant="contained" onClick={()=>addItemTocart()} style={{marginRight:10,background:"#ff9f00"}}><Cart/>Add To Cart</StyledButton>
            <StyledButton variant="contained" onClick={()=>buyNow()}style={{background:"#fb541b"}}><BoltIcon/>Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;