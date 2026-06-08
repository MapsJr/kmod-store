const order =
JSON.parse(
    localStorage.getItem(
        "lastOrder"
    )
);

const orderInfo =
document.getElementById(
    "orderInfo"
);

if(!order){

    orderInfo.innerHTML = `
        <p>
            No order found.
        </p>
    `;

}else{

    let products = "";

    order.items.forEach(item=>{

        products += `

        <div class="product-line">

            ${item.quantity}x
            ${item.name}

        </div>

        `;

    });

    orderInfo.innerHTML = `

    <div class="order-detail">

        <strong>
            Order ID:
        </strong>

        <span>
            ${order.orderId}
        </span>

    </div>

    <div class="order-detail">

        <strong>
            Customer:
        </strong>

        <span>
            ${order.customer.name}
        </span>

    </div>

    <div class="order-detail">

        <strong>
            Payment:
        </strong>

        <span>
            ${order.paymentMethod}
        </span>

    </div>

    <div class="order-detail">

        <strong>
            Total:
        </strong>

        <span>
            $${order.total}
        </span>

    </div>

    <div class="order-detail">

        <strong>
            Status:
        </strong>

        <span>
            Processing:
        </span>

    </div>

    <div class="order-detail">

        <strong>
            Estimated Delivery:
        </strong>

        <span>
            5-10 Business Days
        </span>

    </div>

    <h3>
        Product(s):
    </h3>

    ${products}

    `;
}