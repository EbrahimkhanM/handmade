import React from "react";
import CheckoutItems from "../Checkout/CheckoutItems";

const OrderSummary = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((_item, idx) => {
        return (
          <div key={idx}>
            <div className="w-full border-b border-gray-300 pb-6">
              <h1 className="font-bold text-4xl mb-2">
                Your Order is Confirmed!
              </h1>
              <h2 className="font-semibold text-lg mb-2">
                Hi {_item?.clientInfo?.name}
              </h2>
              <p>Your order has been confirmed and will be shipping soon</p>
            </div>
            <div className="w-full flex gap-6 py-6">
              <div className="w-[60%] bg-white ">
                {_item?.orderedItem?.items.map((_data, idx) => {
                  return (
                    <div className="w-full flex justify-start gap-x-8 mb-4 border border-gray-300 pr-5" key={idx}>
                      <div className="w-[20%]">
                        <img src={_data?.img} />
                      </div>
                      <div className="w-[80%]">
                        <h1 className="font-semibold leading-[54px] text-xl mb-1">
                          {_data?.name}
                        </h1>
                        <div className="flex justify-between items-end">
                            <div>
                        <p className="text-base text-gray-400 leading-8 mb-8">Size: {_data?.enteredSize}</p>
                        <p className="text-base text-gray-400 leading-8 mb-8"> Quantity: {_data?.quantity}</p>
                        </div>
                        <p className="text-xl font-semibold leading-10">
                            PKR:{_data?.price}
                        </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="w-[40%]">
                <h1 className="mb-4 font-bold text-4xl">Order Summary</h1>
                <div className="mb-4 ">
                  <h2 className="font-semibold text-lg ">Billing Address</h2>
                  <p className="text-sm text-gray-600 ">{_item?.clientInfo?.address}</p>
                </div>
                <div className="mb-4">
                  <h2 className="font-semibold text-lg ">Shipping Address</h2>
                  <p className="text-sm text-gray-600">{_item?.clientInfo?.address}</p>
                </div>
                <div>
                  <h2 className="font-semibold text-lg ">Phone Number</h2>
                  <p className="text-sm text-gray-600">{_item?.clientInfo?.phoneNumber}</p>
                </div>
                <div className="w-full flex justify-between pt-20 border-b border-gray-300">
                  <p className="font-semibold text-lg">Total</p>
                  <p className="text-sm text-gray-600">
                    PKR:{_item.orderedItem.totalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default OrderSummary;
