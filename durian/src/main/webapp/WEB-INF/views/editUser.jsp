<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="container-fluid">
	<h2>Chỉnh sửa tài khoản</h2>
	<c:if test="${message.equals('Successfully!') }">
		<h5 style="color: green">${message }</h5>
	</c:if>
	<c:if test="${!message.equals('Successfully!') }">
		<h5 style="color: red">${message }</h5>
	</c:if>
	<form action="/staff/editUser" method="post">
		<input value="${user.id }" type="hidden" class="form-control"
			name="userId" required />
		<div class="form-group">
			<label for="username">Tên tài khoản</label> <input
				value="${user.username }" type="text" class="form-control"
				name="username" required />
		</div>
		<div class="form-group">
			<label for="email">Email</label> <input value="${user.email }"
				type="email" class="form-control" name="email" required />
		</div>
		<div class="form-group">
			<label for="phone">Số điện thoại</label> <input
				value="${user.phone }" type="number" class="form-control"
				name="phone" required />
		</div>
		<div class="form-group">
			<label for="phone">Họ Tên</label> <input value="${user.fullname }"
				type="text" class="form-control" name="fullname" required />
		</div>
		<div class="form-group">
			<label for="address">Địa chỉ</label> <input value="${user.address }"
				type="text" class="form-control" name="address" required />
		</div>
		<div class="form-group">
			<label for="pers">Permission</label> <select
				class="form-control" name="perId" required>
				<c:forEach var="per" items="${pers }">
					<c:if test="${user.permissions.contains(per) }">
						<option value="${per.id }" selected>${per.permissionName }</option>
					</c:if>
					<c:if test="${!user.permissions.contains(per) }">
						<option value="${per.id }">${per.permissionName }</option>
					</c:if>
				</c:forEach>
			</select>
		</div>
		<button type="submit" class="btn btn-primary">Chỉnh sửa</button>
		<a href="/staff">
			<button type="button" class="btn btn-danger">Hủy</button>
		</a>
	</form>
</div>