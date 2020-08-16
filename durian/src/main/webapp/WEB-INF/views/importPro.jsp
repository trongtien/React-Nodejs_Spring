<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Begin Page Content -->
<div class="container-fluid">
	<form action="/fruit/importFruit" method="POST">
		<input name="fruitId" type="hidden" value="${proId }">
		<div class="form-group">
			<label>Khối lượng (kilogram)</label> <input name="qty" type="number"
				class="form-control" id="exampleInputEmail1" value="0" required>
		</div>
		<div class="form-group">
			<label>Giá vốn trên mỗi kilogram</label> <input name="price" type="number"
				class="form-control" id="exampleInputEmail1" value="" required>
		</div>
		<c:if test="${sup==null }">
			<div class="form-group">
				<a href="/supplier/selectOldSupplier?proId=${proId}">
					<button type="button" class="btn btn-info old-supplier">Nhà
						cung cấp cũ</button>
				</a>
			</div>
			<input name="supplierId" type="hidden" class="form-control"
				id="exampleInputEmail1">
			<div class="form-group">
				<label>Tên nhà cung cấp</label> <input name="name" type="text"
					class="form-control" id="exampleInputEmail1" required>
			</div>
			<div class="form-group">
				<label>Số điện thoại</label> <input name="phone" type="number"
					class="form-control" id="exampleInputEmail1" required>
			</div>
			<div class="form-group">
				<label>Địa chỉ</label> <input name="address" type="text"
					class="form-control" id="exampleInputEmail1" required>
			</div>
		</c:if>
		<c:if test="${sup!=null }">
			<input name="supplierId" type="hidden" class="form-control"
				id="exampleInputEmail1" value="${sup.id }">
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
					class="form-control" id="exampleInputEmail1"
					value="${sup.address }" readonly>
			</div>
		</c:if>
		<button type="submit" class="btn btn-primary">Hoàn tất</button>
		<a href="/fruit"><button type="button" class="btn btn-danger">Hủy</button></a>
	</form>
</div>
<!-- /.container-fluid -->