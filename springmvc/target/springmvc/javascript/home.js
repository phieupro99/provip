getData();
function getData(){
	$.ajax({
		  method: "GET",
		  url: "product/get"
		}).done(function( object ) {
			var data= JSON.parse(object);
			for(var i =0; i<data.length;i++){
				var prodData = data[i];
				var product = "<div class='col-md-4'>" +
						"<div class='card mb-4 box-shadow'>" +
						"<img class='card-img-top' src='image/"+prodData.image+"' " +
						"alt='"+prodData.title+"'><div class='card-body'>" +
						"<p class='card-text'>"+prodData.description+"</p><div class='d-flex justify-content-between align-items-center'>" +
								"<div class='btn-group'><a href='product-detail?product="+prodData.id+"' class='btn btn-sm btn-outline-secondary'>View</a>" +
								"<button type='button' class='btn btn-sm btn-outline-secondary'>Edit</button>" +
								"</div><small class='text-muted'>9 mins</small></div></div></div></div>";
				$("#data-render").append(product);
			}
		  });
}
