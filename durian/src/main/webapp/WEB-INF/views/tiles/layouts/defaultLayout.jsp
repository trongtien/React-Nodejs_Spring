<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><tiles:getAsString name="title" /></title>
<link
	href="<c:url value='/resources/static/vendor/fontawesome-free/css/all.min.css'/>"
	rel="stylesheet" type="text/css">
<link
	href="<c:url value='https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'/>"
	rel="stylesheet">

<!-- Custom styles for this template-->
<link href="<c:url value='/resources/static/css/sb-admin-2.css'/>"
	rel="stylesheet">
<link
	href="<c:url value='/resources/static/vendor/datatables/dataTables.bootstrap4.min.css'/>"
	rel="stylesheet">
</head>
<body>
	<div id="wrapper">
		<tiles:insertAttribute name="header" />
		<!-- Content Wrapper -->
		<div id="content-wrapper" class="d-flex flex-column">

			<!-- Main Content -->
			<div id="content">
				<tiles:insertAttribute name="menu" />
				<tiles:insertAttribute name="body" />
				<tiles:insertAttribute name="footer" />
			</div>
			<!-- End of Main Content -->
		</div>
		<!-- End of Content Wrapper -->

	</div>
	<!-- End of Page Wrapper -->
	<script
		src="<c:url value='/resources/static/vendor/jquery/jquery.min.js'/>"></script>
	<script
		src="<c:url value='/resources/static/vendor/bootstrap/js/bootstrap.bundle.min.js'/>"></script>

	<!-- Core plugin JavaScript-->
	<script
		src="<c:url value='/resources/static/vendor/jquery-easing/jquery.easing.min.js'/>"></script>

	<!-- Custom scripts for all pages-->
	<script src="<c:url value='/resources/static/js/sb-admin-2.min.js'/>"></script>

	<!-- Page level plugins -->
	<script
		src="<c:url value='/resources/static/vendor/chart.js/Chart.min.js'/>"></script>

	<!-- Page level custom scripts -->
	<script
		src="<c:url value='/resources/static/js/demo/chart-area-demo.js'/>"></script>
	<script
		src="<c:url value='/resources/static/js/demo/chart-pie-demo.js'/>"></script>
	<script>
		$(document).ready(function() {
			let pathname = window.location.pathname;
			if (pathname.includes('category')) {
				$('#category').addClass("active");
			} else if (pathname.includes('fruit')) {
				$('#product').addClass("active");
			} else if (pathname.includes('order')) {
				$('#order').addClass("active");
			} else if (pathname.includes('staff')) {
				$('#staff').addClass("active");
			} else {
				$('#dashboard').addClass("active");
			}
		})

		$(".addSupplier").click(function() {
			$(".new-supplier").show();
			$(".old-supplier").hide();
			$(this).hide();
		})
		$("#locPer").change(function() {
			$("#locForm").submit();
		})
		$('#myfile').change(function() {
			var input = this;
			var reader = new FileReader();
			reader.onload = function(e) {
				$('#catImg').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		})
	</script>
</body>
</html>