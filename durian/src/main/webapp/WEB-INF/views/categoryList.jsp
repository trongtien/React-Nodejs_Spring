<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
			<h6 class="m-0 font-weight-bold text-primary">Danh sách các danh
				mục</h6>
		</div>
		<div class="card-body">
			<div class="table-responsive">
				<table class="table table-bordered" id="dataTable" width="100%"
					cellspacing="0">
					<thead>
						<tr>
							<th>Tên danh mục</th>
							<th><a href="/category/addCat">
									<button class="btn btn-outline-success btn-block">Tạo
										mới</button>
							</a></th>
							<th><a href="/category/catTrash">
									<button class="btn btn-outline-warning btn-block">Thùng rác</button>
							</a></th>
						</tr>
					</thead>
					<tfoot>

					</tfoot>
					<tbody>
						<c:forEach var="cat" items="${cats}">
							<tr>
								<td>${cat.name}</td>
								<td><a href="/category/editCat?catId=${cat.id }">
										<button class="btn btn-dark btn-block" type="button">
											<i class="fas fa-edit"></i>
										</button>
								</a></td>
								<td><a
									onclick="return confirm('Danh mục hiện tại đang chứa ${cat.fruits.size()} sản phẩm, nếu xóa sẽ mất tất cả sản phẩm và các đơn hàng liên quan, bạn có chắc chắn muốn xóa?')"
									href="/category/deleteCat?catId=${cat.id }">
										<button class="btn btn-danger btn-block" type="button">
											<i class="far fa-trash-alt"></i>
										</button>
								</a></td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
		</div>
	</div>

</div>
<!-- /.container-fluid -->