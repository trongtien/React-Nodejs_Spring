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
							<th colspan="2"><a onclick="return confirm('Bạn chắc chắn muốn xóa vĩnh viễn tất cả các danh mục (các sản phẩm liên quan sẽ bị xóa đồng thời)?')" href="/category/clearCatTrash">
									<button class="btn btn-outline-danger btn-block">Dọn thùng rác</button>
							</a></th>
						</tr>
					</thead>
					<tfoot>

					</tfoot>
					<tbody>
						<c:forEach var="cat" items="${cats}">
							<tr>
								<td>${cat.name}</td>
								<td><a
									onclick="return confirm('Bạn chắc chăn muốn khôi phục?')"
									href="/category/recoverCat?catId=${cat.id }">
										<button class="btn btn-success btn-block" type="button">
											Khôi phục
										</button>
								</a></td>
								<td><a
									onclick="return confirm('Danh mục hiện tại đang chứa ${cat.fruits.size()} sản phẩm, nếu xóa sẽ mất tất cả sản phẩm và các đơn hàng liên quan, bạn có chắc chắn muốn xóa VĨNH VIỄN?')"
									href="/category/deleteForeverCat?catId=${cat.id }">
										<button class="btn btn-warning btn-block" type="button">
											Xóa vĩnh viễn
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