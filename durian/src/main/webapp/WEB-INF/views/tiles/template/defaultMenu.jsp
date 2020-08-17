<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Topbar -->
<nav
	class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

	<!-- Sidebar Toggle (Topbar) -->
	<button id="sidebarToggleTop"
		class="btn btn-link d-md-none rounded-circle mr-3">
		<i class="fa fa-bars"></i>
	</button>

	<!-- Topbar Search -->
	<form method="get" action="/search"
		class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
		<div class="input-group mb-3">
			<input name="searchText" type="text" class="form-control"
				placeholder="Tìm kiếm theo..."
				aria-label="Text input with dropdown button" required>
			<div class="input-group-append">
				<select name="catForSearch" class="custom-select"
					id="inputGroupSelect01">
					<c:forEach var="per" items="${userPers }">
						<c:if test="${per.permissionName.equals('ADMIN') }">
							<option value="category">Danh mục</option>
							<option value="fruit">Trái cây</option>
							<option value="order">Mã Đơn hàng</option>
							<option value="user">Người dùng</option>
						</c:if>
						<c:if test="${per.permissionName.equals('STAFF') }">
							<option value="category">Danh mục</option>
							<option value="fruit">Trái cây</option>
							<option value="order">Mã Đơn hàng</option>
						</c:if>
					</c:forEach>
				</select>
				<button class="btn btn-outline-secondary" type="submit">Tìm</button>
			</div>
		</div>
	</form>

	<!-- Topbar Navbar -->
	<ul class="navbar-nav ml-auto">

		<!-- Nav Item - Search Dropdown (Visible Only XS) -->
		<li class="nav-item dropdown no-arrow d-sm-none"><a
			class="nav-link dropdown-toggle" href="#" id="searchDropdown"
			role="button" data-toggle="dropdown" aria-haspopup="true"
			aria-expanded="false"> <i class="fas fa-search fa-fw"></i>
		</a> <!-- Dropdown - Messages -->
			<div
				class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
				aria-labelledby="searchDropdown">
				<form class="form-inline mr-auto w-100 navbar-search">
					<div class="input-group">
						<input type="text" class="form-control bg-light border-0 small"
							placeholder="Search for..." aria-label="Search"
							aria-describedby="basic-addon2">
						<div class="input-group-append">
							<button class="btn btn-primary" type="button">
								<i class="fas fa-search fa-sm"></i>
							</button>
						</div>
					</div>
				</form>
			</div></li>

		<!-- Nav Item - User Information -->
		<li class="nav-item dropdown no-arrow"><a
			class="nav-link dropdown-toggle" href="#" id="userDropdown"
			role="button" data-toggle="dropdown" aria-haspopup="true"
			aria-expanded="false"> <span
				class="mr-2 d-none d-lg-inline text-gray-600 small">${sessionScope.user.fullname }</span>
				<img class="img-profile rounded-circle"
				src="${sessionScope.user.image }">
		</a> <!-- Dropdown - User Information -->
			<div
				class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
				aria-labelledby="userDropdown">
				<a class="dropdown-item" href="changePass"> <i
					class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> Đổi mật khẩu
				</a>
				<div class="dropdown-divider"></div>
				<a class="dropdown-item" href="#" data-toggle="modal"
					data-target="#logoutModal"> <i
					class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
					Đăng xuất
				</a>
			</div></li>

	</ul>

</nav>
<a class="scroll-to-top rounded" href="#page-top"> <i
	class="fas fa-angle-up"></i>
</a>

<!-- Logout Modal-->
<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog"
	aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Bạn có chắc muốn đăng xuất?</h5>
				<button class="close" type="button" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
			</div>
			<div class="modal-body">Chọn nút "Đăng xuất" bên dưới để đăng xuất</div>
			<div class="modal-footer">
				<button class="btn btn-secondary" type="button" data-dismiss="modal">Hủy</button>
				<a class="btn btn-primary" href="/logout">Đăng xuất</a>
			</div>
		</div>
	</div>
</div>
<!-- End of Topbar -->