<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- Sidebar -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<ul
	class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
	id="accordionSidebar">

	<!-- Sidebar - Brand -->
	<a
		class="sidebar-brand d-flex align-items-center justify-content-center"
		href="/">
		<div class="sidebar-brand-icon">
			<img height="50px" width="50px" src="/resources/static/img/Logo.png" />
		</div>
		<div class="sidebar-brand-text mx-3">Vựa trái cây</div>
	</a>

	<!-- Divider -->
	<hr class="sidebar-divider my-0">

	<!-- Heading -->
	<div class="sidebar-heading">Quản lý</div>

	<!-- Nav Item - Pages Collapse Menu -->
	<c:forEach var="per" items="${userPers}">
		<c:if test="${per.permissionName.equals('ADMIN') }">
			<li id="category" class="nav-item"><a class="nav-link"
				href="/category"> <i class="fas fa-address-card"></i> <span>Danh
						mục</span>
			</a></li>
			<li id="product" class="nav-item"><a class="nav-link"
				href="/fruit"> <i class="fas fa-address-card"></i> <span>Sản
						phẩm</span>
			</a></li>
			<li id="order" class="nav-item"><a class="nav-link"
				href="/order"> <i class="fas fa-address-card"></i> <span>Đơn
						hàng</span>
			</a></li>
			<li id="staff" class="nav-item"><a class="nav-link"
				href="/staff"> <i class="fas fa-address-card"></i> <span>Người dùng</span>
			</a></li>
		</c:if>
		<c:if test="${per.permissionName.equals('STAFF') }">
			<li id="category" class="nav-item"><a class="nav-link"
				href="/category"> <i class="fas fa-address-card"></i> <span>Danh
						mục</span>
			</a></li>
			<li id="product" class="nav-item"><a class="nav-link"
				href="/fruit"> <i class="fas fa-address-card"></i> <span>Sản
						phẩm</span>
			</a></li>
			<li id="order" class="nav-item"><a class="nav-link"
				href="/order"> <i class="fas fa-address-card"></i> <span>Đơn
						hàng</span>
			</a></li>
		</c:if>

	</c:forEach>
	<hr class="sidebar-divider d-none d-md-block">

	<!-- Sidebar Toggler (Sidebar) -->
	<div class="text-center d-none d-md-inline">
		<button class="rounded-circle border-0" id="sidebarToggle"></button>
	</div>

</ul>
<!-- End of Sidebar -->
