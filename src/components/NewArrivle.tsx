import React, { useState,useEffect  } from 'react';
import ProductTemp from './ProductTemp';
import "../assets/styles/ProductList.css";
import { getNewArrivle } from "../api/index";
import ReactPaginate from 'react-paginate';


const NewArrivle = () => {
  const [productData, setProductData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [proPerPage] = useState(10);
  const indexOfLastPro = currentPage * proPerPage;
  const indexOfFirstPost = indexOfLastPro - proPerPage;
  const currentPro = productData.slice(indexOfFirstPost, indexOfLastPro);

  const paginate = ({ selected }:{selected:any}) => {
     setCurrentPage(selected + 1);
     console.log(productData);
  };

  const fetchData = async () => {
    await getNewArrivle()
    .then((data) => {
      setProductData(data);
      console.log(data);
    })
    .catch((e) => {
      console.error(e);
    });
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="main_section">
      <div className=" container">
        {
         currentPro.map(product => {
            return <ProductTemp key={product.id} image={product.thumbnail} dis={0} name={product.name}  price={product.price} discount={product.discount} />
          })
        }
       
      </div>
      <ReactPaginate
                  onPageChange={paginate}
                  pageCount={Math.ceil(productData.length / proPerPage)}
                  previousLabel={'Prev > '}
                  nextLabel={' > Next'}
                  containerClassName={'pagination'}
                  pageLinkClassName={'page-number'}
                  previousLinkClassName={'page-number'}
                  nextLinkClassName={'page-number'}
                  activeLinkClassName={'active'}
               />
    </main>
  );
};

export default NewArrivle;