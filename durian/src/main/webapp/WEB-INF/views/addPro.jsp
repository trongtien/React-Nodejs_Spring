<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Begin Page Content -->
<div class="container-fluid">
	<form action="/fruit/addPro" method="POST" enctype="multipart/form-data">
		<div class="form-group">
			<label>Tên sản phẩm</label> <input name="name" type="text"
				class="form-control" id="exampleInputEmail1" required>
		</div>
		<div class="form-group">
			<label>Giá trên mỗi kilogram</label> <input name="price"
				type="number" class="form-control" id="exampleInputEmail1" required>
		</div>
		<div class="form-group">
			<label for="exampleFormControlSelect1">Danh mục</label> <select
				name="catId" class="form-control" id="exampleFormControlSelect1"
				required>
				<c:forEach var="item" items="${cats}">
					<option value="${item.id }">${item.name }</option>
				</c:forEach>
			</select>
		</div>
		<div class="form-group">
			<label for="exampleFormControlSelect1">Discount</label> <select
				name="discount" class="form-control" id="exampleFormControlSelect1"
				required>
				<c:forEach var="count" begin="0" end="100">
					<option value="${count}">${count}%</option>
				</c:forEach>
			</select>
		</div>
		<div class="form-group">
			<label>Image</label> <input name="file" id="myfile" type="file"
				class="form-control" alt="Category image">
		</div>
		<div class="form-group">
			<img id="catImg" height="200px" />
		</div>
		<button type="submit" class="btn btn-primary">Hoàn tất</button>
		<a href="/fruit"><button type="button" class="btn btn-danger">Hủy</button></a>
	</form>
</div>
<!-- /.container-fluid -->