
;(function(){
  'use strict';
	var $form_add_task = $('.add-task'), new_task = {}, task_list = {};
	init();

	$form_add_task.on('submit', function(e){
		e.preventDefault();
		new_task.content = $(this).find('input[name=content]').val();
		if (!new_task) return;
		if(add_task(new_task)){
			render_task_list()
		};
	})

	function add_task(new_task){
		task_list.push(new_task);
		store.set('task_list', task_list)
	}

  function init(){
  	task_list = store.get('task_list')
  }

	function render_task_list(){
		console.log('1',1)
	}

})();
