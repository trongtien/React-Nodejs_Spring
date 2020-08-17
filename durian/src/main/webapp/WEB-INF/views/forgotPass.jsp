<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<title>Insert title here</title>

<!-- Custom fonts for this template-->
<link
	href="<c:url value='/resources/static/vendor/fontawesome-free/css/all.min.css'/>"
	rel="stylesheet" type="text/css">
<link
	href="<c:url value='https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'/>"
	rel="stylesheet">

<!-- Custom styles for this template-->
<link href="<c:url value='/resources/static/css/sb-admin-2.min.css'/>"
	rel="stylesheet">

</head>

<body class="bg-gradient-primary">

	<div class="container">

		<!-- Outer Row -->
		<div class="row justify-content-center">

			<div class="col-xl-10 col-lg-12 col-md-9">

				<div class="card o-hidden border-0 shadow-lg my-5">
					<div class="card-body p-0">
						<!-- Nested Row within Card Body -->
						<div class="row">
							<div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
							<div class="col-lg-6">
								<div class="p-5">
									<div class="text-center">
										<h1 class="h4 text-gray-900 mb-2">Quên mật khẩu?</h1>
										<h5 style="color: red">${message }</h5>
									</div>
									<form action="/changePassword" method="POST" class="user">
										<div class="form-group">
											<input type="text" name="username" class="form-control form-control-user"
												id="exampleInputEmail" aria-describedby="emailHelp"
												placeholder="Nhập tên tài khoản" required>
										</div>
										<div class="form-group">
											<input type="email" name="email" class="form-control form-control-user"
												id="exampleInputEmail" aria-describedby="emailHelp"
												placeholder="Nhập email của bạn." required>
										</div>
										<div class="form-group">
											<input name="password" type="password" class="form-control form-control-user"
												id="exampleInputEmail" aria-describedby="emailHelp"
												placeholder="Nhập mật khẩu mới" required>
										</div>
										<button type="submit"
											class="btn btn-primary btn-user btn-block"> Khôi phục mât khẩu </button>
									</form>
									<hr>
									<div class="text-center">
										<a class="small" href="/register">Đăng ký tài khoản!</a>
									</div>
									<div class="text-center">
										<a class="small" href="/login">Nếu bạn đã có tài khoản, mời đăng nhập!</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>

	<!-- Bootstrap core JavaScript-->
	<script
		src="<c:url value='/resources/static/vendor/jquery/jquery.min.js'/>"></script>
	<script
		src="<c:url value='/resources/static/vendor/bootstrap/js/bootstrap.bundle.min.js'/>"></script>

	<!-- Core plugin JavaScript-->
	<script
		src="<c:url value='/resources/static/vendor/jquery-easing/jquery.easing.min.js'/>"></script>

	<!-- Custom scripts for all pages-->
	<script src="<c:url value='/resources/static/js/sb-admin-2.min.js'/>"></script>

</body>

</html>
</html>