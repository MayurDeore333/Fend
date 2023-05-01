import React from "react";

export const CmptToPrint = React.forwardRef((props, ref) => {
    const {filteredSales, totalQuantitySold,totalProfit,name} = props;
    return (
      <div ref={ref} className="p-5">
         <h6>Shaskiya Tantraniketan Vidyarthi Sahakari Bhandar Ltd.,</h6>
        <h6>C/o.Govt Polytechnic, Nashik.</h6>
        <div style={{textAlign: "center"}}><h3><b>Sales Details</b></h3></div>
        <h5>Item Name :- <b>{name}</b></h5>
          <table className='table'>
                  <thead>
                    <tr>
                      <td>Date</td>
                      <td>Quantity Sold</td>
                      <td>Sales</td>
                    </tr>
                  </thead>
                  <tbody>
                  {filteredSales.map((sale, index) => (
                        <tr key={index}>
                          <td>{sale.date}</td>
                          <td>{sale.quantitySold}</td>
                          <td>{"₹"}{sale.profit}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <b className='px-2'>Total Quantity Sold: {totalQuantitySold}</b>
                <b className='px-2'>Total Sales Income: {"₹"}{totalProfit}</b>
      </div>
    );
});