<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- Begin Page Content -->
<div class="container-fluid">
	<form action="/category/editCat" method="POST" enctype="multipart/form-data">
		<input name="catId" type="hidden" value="${cat.id }">
		<div class="form-group">
			<label>Tên danh mục</label> <input name="catName" type="text"
				class="form-control" id="exampleInputEmail1" value="${cat.name }">
		</div>
		<div class="form-group">
			<label>Image</label> <input name="file" id="myfile" type="file"
				class="form-control" alt="Category image">
		</div>
		<div class="form-group">
			<img id="catImg" src="${cat.image }" height="200px" />
		</div>
		<button type="submit" class="btn btn-primary">Sửa</button>
		<a href="/category"><button type="button" class="btn btn-danger">Hủy</button></a>
	</form>
</div>
<!-- /.container-fluid -->
