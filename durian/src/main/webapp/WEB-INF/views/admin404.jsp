
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>404</title>
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
	<div class="container-fluid">

		<!-- 404 Error Text -->
		<div class="text-center">
			<div class="error mx-auto" data-text="404">404</div>
			<p class="lead text-gray-800 mb-5">Page Not Found</p>
			<p class="text-gray-500 mb-0">It looks like you found a glitch in
				the matrix...</p>
			<a href="/category">&larr; Back to Dashboard</a>
		</div>

	</div>
</body>
</html>