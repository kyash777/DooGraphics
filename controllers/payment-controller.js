import stripe from "stripe"

const Stripe=new stripe("sk_test_51OVI5tSG5J5LDs8l5oxrP0shWw5LJ3DoMUIQIX3J2cDBqWyeibWysS4gMHgj8NUkEnAcjYZCShrOssb0XHfj6BXS00V5qNcOuF")


const userCheckout= async (request,response)=>{

    const {products}=request.body

    console.log(products)

    const lineItems=products.map((product)=>({

        price_data:{
            currency:"inr",
            product_data:{
                name:product.title.shortTitle,
            },
            unit_amount:product.price.mrp*100,
        },
        quantity:product.quantity
    }))

    const session=await Stripe.checkout.sessions.create({

        // payment_methods_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000",
        cancel_url:"http://localhost:3000"
    })
    console.log("request is coming here")
    response.status(200).json({data:session.id})

}

export default userCheckout