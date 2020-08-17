<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="container-fluid">
	<h2>Tạo mới tài khoản</h2>
	<c:if test="${message.equals('Tạo thành công!') }">
		<h5 style="color: green">${message }</h5>
	</c:if>
	<c:if test="${!message.equals('Tạo thành công!') }">
		<h5 style="color: red">${message }</h5>
	</c:if>
	<form action="/staff/createUser" method="post">
		<div class="form-group">
			<label for="username">Tên tài khoản</label> <input type="text"
				class="form-control" name="username" required />
		</div>
		<div class="form-group">
			<label for="email"> Mật khẩu</label> <input type="password"
				class="form-control" name="password" required />
		</div>
		<div class="form-group">
			<label for="email">Email</label> <input type="email"
				class="form-control" name="email" required />
		</div>
		<div class="form-group">
			<label for="phone">Số điện thoại</label> <input type="number"
				class="form-control" name="phone" required />
		</div>
		<div class="form-group">
			<label for="phone">Họ Tên</label> <input type="text"
				class="form-control" name="fullname" required />
		</div>
		<div class="form-group">
			<label for="address">Địa chỉ</label> <input type="text"
				class="form-control" name="address" required />
		</div>
		<div class="form-group">
			<label for="pers">Permission</label> <select
				class="form-control" name="perId" required>
				<c:forEach var="per" items="${pers }">
					<option value="${per.id }">${per.permissionName }</option>
				</c:forEach>
			</select>
		</div>
		<button type="submit" class="btn btn-primary">Tạo</button>
		<a href="/staff">
			<button type="button" class="btn btn-danger">Hủy</button>
		</a>
	</form>
</div>