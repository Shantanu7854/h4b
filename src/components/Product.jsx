const Product = (props) => {
    return <li>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img
                    className="p-8 rounded-t-lg"
                    src={props.image_link}
                    alt="product image"
                />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {props.product_name}
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5"></div>
                <div className="flex items-center justify-between">
                    <a
                        href="#"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Buy
                    </a>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ₹ {props.buy_value}
                    </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a
                        href="#"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Rent
                    </a>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ₹ 99 per Month
                    </span>
                </div>
            </div>
        </div>
    </li>
}

export default Product;