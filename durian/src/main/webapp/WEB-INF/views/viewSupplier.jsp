<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Begin Page Content -->
<div class="container-fluid">
	<div class="form-group">
		<label>Tên nhà cung cấp</label> <input name="name" type="text"
			class="form-control" id="exampleInputEmail1" value="${sup.name}"
			readonly>
	</div>
	<div class="form-group">
		<label>Số điện thoại</label> <input name="phone" type="number"
			class="form-control" id="exampleInputEmail1" value="${sup.phone }"
			readonly>
	</div>
	<div class="form-group">
		<label>Địa chỉ</label> <input name="address" type="text"
			class="form-control" id="exampleInputEmail1" value="${sup.address }"
			readonly>
	</div>
</div>
<!-- /.container-fluid -->