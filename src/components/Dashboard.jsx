import { useCallback, useEffect, useState } from "react";
import CreateButton from "./CreateButton";
import Product from "./Product";

const Dashboard = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [error, setError] = useState(null);

    useEffect (
      () => {
        const fetchDataHandler = 
        async () => {
          // try {
            const response = await fetch('https://geeky-nerds-default-rtdb.firebaseio.com/data.json')
            if(!response.ok) {
              throw new Error('Something went wrong!!!')
            }
            const responseData = await response.json();
    
            // console.log(responseData);

            const loadedData = [];
            for(const key in responseData) {
              loadedData.push(
                {
                  id: key,
                  product_name: responseData[key].product_name,
                  owner_name: responseData[key].owner_name,
                  owner_email: responseData[key].owner_email,
                  image_link: responseData[key].image_link,
                  description: responseData[key].description,
                  sell_value: responseData[key].sell_value,
                  buy_value: responseData[key].buy_value,
                }
              );
            }
            setProductDetails(loadedData)
          // } catch(error) {
          //   setError(error.message);
          // }
        }

        fetchDataHandler();
      }, []);

  return (
    <section id="trade" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Buy / Sell / Rent
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Kredi, you can host your products here for sale or rent and then student can choose from a wide variety of products.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 text-center">
          <ul className="center">
          {
            productDetails.map(
              (product) =>
                <Product
                  key={product.id}
                  product_name={product.product_name}
                  buy_value={product.buy_value}
                  image_link={product.image_link}
                />
            )
          }
          </ul>
        </div>

        <CreateButton />

      </div>
    </section>
  );
};

export default Dashboard;
