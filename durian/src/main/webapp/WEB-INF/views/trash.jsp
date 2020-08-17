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
			<h6 class="m-0 font-weight-bold text-primary">Danh sách các sản
				phẩm đã xóa</h6>
		</div>
		<div class="card-body">
			<div class="table-responsive">
				<table class="table table-bordered" id="dataTable" width="100%"
					cellspacing="0">
					<thead>
						<tr>
							<th>Tên sản phẩm</th>
							<th>Giá</th>
							<th>Khối lượng</th>
							<th>Danh mục</th>
							<th colspan="2"><a
								onclick="return confirm('Bạn chắc chắn muốn xóa vĩnh viễn tất cả sản phẩm?')"
								href="/fruit/clearTrashFruit">
									<button class="btn btn-danger btn-block" type="button">
										Dọn thùng rác</button>
							</a></th>
						</tr>
					</thead>
					<tfoot>

					</tfoot>
					<tbody>
						<c:forEach var="pro" items="${pros}">
							<tr>
								<td>${pro.name}</td>
								<td>${pro.getPriceFormat() }/kilogram</td>
								<td>${pro.getQuantityFormat()}kilogram</td>
								<td>${pro.category.name}</td>
								<td><a
									onclick="return confirm('Bạn chắc chắn muốn khôi phục?')"
									href="/fruit/recoverFruit?fruitId=${pro.id }">
										<button class="btn btn-danger btn-block" type="button">
											Khôi phục</button>
								</a></td>
								<td><a
									onclick="return confirm('Bạn chắc chắn muốn xóa vĩnh viễn?')"
									href="/fruit/deleteForeverFruit?fruitId=${pro.id }">
										<button class="btn btn-warning btn-block" type="button">
											Xóa vĩnh viễn</button>
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