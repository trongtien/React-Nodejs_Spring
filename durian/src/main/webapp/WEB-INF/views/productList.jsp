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
				phẩm</h6>
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
							<th colspan="2"><a href="/fruit/addPro">
									<button class="btn btn-outline-success btn-block">Tạo
										mới</button>
							</a></th>
							<th colspan="2"><a href="/fruit/trash">
									<button class="btn btn-outline-warning btn-block">Thùng
										rác</button>
							</a></th>
						</tr>
					</thead>
					<tfoot>

					</tfoot>
					<tbody>
						<c:forEach var="pro" items="${pros}">
							<tr>
								<td>${pro.name}</td>
								<td>${pro.getPriceFormat()}/kilogram</td>
								<td>${pro.getQuantityFormat()} kilogram</td>
								<td>${pro.category.name}</td>
								<td><a href="/fruit/viewImportFruit?fruitId=${pro.id }">
										<button class="btn btn-secondary btn-block" type="submit">
											Phiếu nhập</button>
								</a></td>
								<td><a href="/fruit/importFruit?fruitId=${pro.id }">
										<button class="btn btn-success btn-block" type="submit">
											Nhập hàng</button>
								</a></td>
								<td><a href="/fruit/editPro?fruitId=${pro.id }">
										<button class="btn btn-dark btn-block" type="button">
											<i class="fas fa-edit"></i>
										</button>
								</a></td>
								<td><a onclick="return confirm('Sản phẩm còn ${pro.getQuantityFormat()}kg, bạn có chắc chắn muốn xóa?')"
									href="/fruit/deleteFruit?fruitId=${pro.id }">
										<button class="btn btn-danger btn-block" type="submit">
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