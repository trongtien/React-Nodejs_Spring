<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- Begin Page Content -->
<div class="container-fluid">
	<!-- <p class="mb-4">
						DataTables is a third party plugin that is used to generate the
						demo table below. For more information about DataTables, please
						visit the <a target="_blank" href="https://datatables.net">official
							DataTables documentation</a>.
					</p> -->

	<!-- DataTales Example -->
	<div class="card shadow mb-4">
		<div class="card-header py-3">
			<div class="locPer">
				<h6 class="m-0 font-weight-bold text-primary">Danh sách người dùng</h6>
				<form id="locForm" action="/staff" method="get">
					<select id="locPer" name="loc">
						<c:if test="${loc.equals('All') }">
							<option value="All" selected>Tất cả</option>
							<option value="ADMIN">Quản trị (Admin)</option>
							<option value="STAFF">Nhân viên</option>
							<option value="CUSTOMER">Khách hàng</option>
						</c:if>
						<c:if test="${loc.equals('ADMIN') }">
							<option value="All">Tất cả</option>
							<option value="ADMIN" selected>Quản trị (Admin)</option>
							<option value="STAFF">Nhân viên</option>
							<option value="CUSTOMER">Khách hàng</option>
						</c:if>
						<c:if test="${loc.equals('STAFF') }">
							<option value="All">Tất cả</option>
							<option value="ADMIN">Quản trị (Admin)</option>
							<option value="STAFF" selected>Nhân viên</option>
							<option value="CUSTOMER">Khách hàng</option>
						</c:if>
						<c:if test="${loc.equals('CUSTOMER') }">
							<option value="All">Tất cả</option>
							<option value="ADMIN">Quản trị (Admin)</option>
							<option value="STAFF">Nhân viên</option>
							<option value="CUSTOMER" selected>Khách hàng</option>
						</c:if>
					</select>
				</form>
			</div>
		</div>
		<div class="card-body">
			<div class="table-responsive">
				<table class="table table-bordered" id="dataTable" width="100%"
					cellspacing="0">
					<thead>
						<tr>
							<th>Tên tài khoản</th>
							<th>Họ tên</th>
							<th>Email</th>
							<th>Số điện thoại</th>
							<th>Địa chỉ</th>
							<th colspan="2"><a href="/staff/createUser">
									<button class="btn btn-outline-success btn-block">Tạo
										mới</button>
							</a></th>

						</tr>
					</thead>
					<tfoot>

					</tfoot>
					<tbody>
						<c:forEach var="user" items="${users}">
							<tr>
								<td>${user.username}</td>
								<td>${user.fullname}</td>
								<td>${user.email }</td>
								<td>${user.phone }</td>
								<td>${user.address }</td>
								<td><a href="/staff/editUser?userId=${user.id}"><button
											type="button" class="btn btn-outline-dark">
											<i class="far fa-edit"></i>
										</button></a></td>
								<c:if test="${!user.username.equals(sessionScope.user.username) }">
									<td><c:if test="${user.status==true }">
											<a href="/staff/changeStatus?userId=${user.id}"><button
													type="button" class="btn btn-danger">
													<i class="fas fa-minus-circle"></i>
												</button></a>
										</c:if> <c:if test="${user.status==false }">
											<a href="/staff/changeStatus?userId=${user.id}"><button
													type="button" class="btn btn-success">
													<i class="fas fa-check-circle"></i>
												</button></a>
										</c:if></td>
								</c:if>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
<!-- /.container-fluid -->
