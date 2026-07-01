import axiosClient from '../api/axiosClient';


const productService = {


    // lấy tất cả sản phẩm
    getAllProducts: () => {

        const url = '/Products';

        return axiosClient.get(url);

    },



    // lấy sản phẩm theo id
    getProductById: (id) => {

        const url = `/Products/${id}`;

        return axiosClient.get(url);

    }


};


export default productService;