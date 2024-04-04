module.exports = (report, startDate, endDate, categoryName) => {
  const today = new Date();
  console.log(report);
  let totalOrdersPrice = 0;
  let allRows = report.map((data) => {
    let row =
      "<tr><td>" +
      data.dish_name +
      "</td><td>" +
      data.order_count +
      "</td><td>" +
      data.order_date +
      "</td><td>&#8377;" +
      data.order_price +
      "</td></tr>";
    totalOrdersPrice += parseInt(data.order_price);
    return row;
  });
  return ` 
  <!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>PDF Result Template</title>
<style>
body {
  font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  color: #555;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}

.food-court-heading {
  text-align: center;
  background-color: #3498db;
  color: #fff;
  padding: 10px 0;
  margin-bottom: 20px;
}

.invoice-box {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
  font-size: 16px;
  line-height: 24px;
  background-color: #fff;
}

.invoice-box table {
  width: 100%;
  border-collapse: collapse;
}

.invoice-box table td,
.invoice-box table th {
  padding: 10px;
  border: 1px solid #ddd;
}

.invoice-box table th {
  background-color: #f2f2f2;
  font-weight: bold;
  text-align: left;
}

.invoice-box table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.invoice-box table tr.heading th {
  background-color: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  text-align: left;
}

.invoice-box table tr.details td {
  border-bottom: 1px solid #ddd;
}

.invoice-box table tr.item td {
  border-bottom: none;
}

.invoice-box table tr.total td {
  border-top: 2px solid #ddd;
  font-weight: bold;
}
 
</style>
</head>
<body>
<div class="food-court-heading">
  <h1>Food Court Report</h1>
</div>
<div class="invoice-box">
  <table>
    <tr class="top">
      <td colspan="4">
        <table>
          <tr>
            <td>Current Date: ${`${today.getFullYear()}-${
              today.getMonth() + 1
            }-${today.getDate()}`}</td>
            <td>From: ${startDate}</td>
            <td>To: ${endDate}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr class="information">
      <td colspan="4">
        <table>
          <tr>
            <td>Category Name: ${categoryName}</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr class="heading">
      <th>Dish Name</th>
      <th>Order Date</th>
      <th>Total Order</th>
      <th>Price</th>
    </tr>
    ${allRows}
    <tr>
      <td colspan="3">Total Price:</td>
      <td>&#8377;${totalOrdersPrice}</td>
    </tr>
  </table>
</div>
</body>
</html>

      `;
};
