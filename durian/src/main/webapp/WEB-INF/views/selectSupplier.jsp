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
			<h6 class="m-0 font-weight-bold text-primary">Danh sách các nhà
				cung cấp</h6>
		</div>
		<div class="card-body">
			<div class="table-responsive">
				<form action="/fruit/importFruit">
					<input type="hidden" name="fruitId" value="${proId }">
					<table class="table table-bordered" id="dataTable" width="100%"
						cellspacing="0">
						<thead>
							<tr>
								<th>
									<button type="submit" class="btn btn-success">Hoàn tất</button>
								</th>
								<th>Tên nhà cung cấp</th>
								<th>Số điện thoại</th>
								<th>Địa chỉ</th>
							</tr>
						</thead>
						<tfoot>

						</tfoot>
						<tbody>
							<c:forEach var="sup" items="${sups}">
								<tr>
									<td><input type="radio" name="supId" value="${sup.id }"></td>
									<td>${sup.name}</td>
									<td>${sup.phone}</td>
									<td>${sup.address}</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</form>
			</div>
		</div>
	</div>

</div>
<!-- /.container-fluid -->