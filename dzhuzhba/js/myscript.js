function sendMessage(){		
		$('.main_form').validate({
		    submitHandler: function(form) {
		        $.ajax({
					url:     'sendMessage.php', 
					type:     "POST", //����� ��������
					dataType: "html", //������ ������
					data: $('.main_form input').serialize(),  // ����������� ������
					success: function(response) { //������ ���������� �������
						console.log('success');
						$('#myModa1').modal('hide');
						$('.main_form')[0].reset();
					},
					error: function(response) { 
						console.log('not success');// ������ �� ����������
					}
				});
		    }
		});