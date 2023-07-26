let user_number =new URLSearchParams(window.location.search).get('solver-price-calculate-user-number');
let viewer_number =new URLSearchParams(window.location.search).get('solver-price-calculate-viewer-number');
let renewal_price =new URLSearchParams(window.location.search).get('generated_annual_renewal_price');
  let total_price =new URLSearchParams(window.location.search).get('generated_first_year_total_price');

  console.log("param",user_number,"view",viewer_number,"renewal",renewal_price.replaceAll(",",""),"total",total_price)

$('input[name="0-2/users___pricing_pg"]').val(Number(user_number));
$('input[name="0-2/viewers___pricing_pg"]').val(Number(viewer_number));
$('input[name="0-2/annual_renewal___pricing_pg"]').val(Number(renewal_price.replaceAll(",","")));
$('input[name="0-2/first_year_cost___pricing_pg"]').val(Number(total_price));